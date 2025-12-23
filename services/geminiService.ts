
import { GoogleGenAI, Modality } from "@google/genai";

// Initialize the GoogleGenAI client using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSpeech = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `請用親切活潑的廣東話口語或普通話朗讀：${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      return base64Audio;
    }
  } catch (error) {
    console.error("Speech generation error:", error);
  }
  return null;
};

export const generateCrazyStory = async (words: string[]) => {
  const prompt = `使用以下詞語創作一個適合四年級小學生的有趣短故事（約100字）：${words.join(', ')}。故事要幽默且富有想像力。`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    // Access the .text property directly from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Story generation error:", error);
    return "噢！故事魔法暫時失效了。試試重新點擊吧！";
  }
};

export const getGeminiFeedback = async (userInput: string, targetWord: string) => {
  const prompt = `學生嘗試朗讀「${targetWord}」，輸入為：「${userInput}」。請給予簡短、鼓勵性的反饋，指出發音重點。`;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    // Access the .text property directly from GenerateContentResponse
    return response.text;
  } catch (error) {
    return "做得好！繼續加油！";
  }
};
