
import React from 'react';
import { LessonType } from './types';

export const LESSON_DATA = {
  [LessonType.TEA_HOUSE]: {
    title: '第一課：上茶樓 🥟',
    icon: '🍵',
    themeColor: 'orange',
    // Added color and btnColor properties for compatibility with App.tsx
    color: 'bg-orange-50 border-orange-200',
    btnColor: 'bg-orange-500',
    accent: 'text-orange-600',
    vocab: [
      { word: '普洱', pinyin: 'pǔ ěr', emoji: '☕' },
      { word: '香片', pinyin: 'xiāng piàn', emoji: '🌼' },
      { word: '叉燒包', pinyin: 'chā shāo bāo', emoji: '🥯' },
      { word: '腸粉', pinyin: 'cháng fěn', emoji: '🥢' },
      { word: '蘿葡糕', pinyin: 'luó bo gāo', emoji: '🍞' },
      { word: '蝦餃', pinyin: 'xiā jiǎo', emoji: '🦐' },
      { word: '燒賣', pinyin: 'shāo mài', emoji: '🟡' },
      { word: '排骨', pinyin: 'pái gǔ', emoji: '🍖' },
      { word: '春卷兒', pinyin: 'chūn juǎnr', emoji: '🥖' },
      { word: '包圍兒', pinyin: 'bāo wéir', emoji: '😋' }
    ],
    erhua_detail: {
      intro: "兒化韻不僅僅是加個『兒』音，有的字音還會悄悄變身喔！",
      rules: [
        { title: "不變形 🛡️", desc: "韻尾是 a, o, e, u 的字，直接加 r，原音不變。", example: "香腸兒 chángr" },
        { title: "小變身 🧚", desc: "韻尾是 -n, -i 的字，-n 會消失，聲音變得更圓潤。", example: "杏仁兒 rén -> rèn r" },
        { title: "大變身 🦖", desc: "韻尾是 -ng 的字，會帶一點鼻音喔！", example: "冰棍兒 gùnr" }
      ]
    },
    erhua_list: [
      { word: '香腸兒', pinyin: 'xiāng chángr', emoji: '🌭', change: '基本不變' },
      { word: '杏仁兒', pinyin: 'xìng rénr', emoji: '🥜', change: '韻尾 -n 脫落' },
      { word: '瓜子兒', pinyin: 'guā zǐr', emoji: '🌻', change: '韻母改變' },
      { word: '麵條兒', pinyin: 'miàn tiáor', emoji: '🍜', change: '基本不變' },
      { word: '豆芽兒', pinyin: 'dòu yár', emoji: '🌱', change: '基本不變' },
      { word: '一碟兒', pinyin: 'yì diér', emoji: '🍽️', change: '基本不變' },
      { word: '豆腐腦兒', pinyin: 'dòu fu nǎor', emoji: '🥣', change: '基本不變' },
      { word: '冰棍兒', pinyin: 'bīng gùnr', emoji: '🍦', change: '韻尾 -n 脫落' }
    ],
    er_special: {
      rule: "er 是一個「獨行俠」！它不需要聲母朋友，永遠自成音節。",
      list: [
        { word: '洱 (ěr)', context: '普洱茶' },
        { word: '耳 (ěr)', context: '耳朵' },
        { word: '兒 (ér)', context: '兒子' },
        { word: '二 (èr)', context: '二月' },
        { word: '而 (ér)', context: '而且' }
      ]
    },
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i,
      question: [
        "「普洱」的「洱」是什麼音節？",
        "下列哪個是兒化韻？",
        "「春卷兒」的正確拼音是？",
        "「香片」是什麼茶？",
        "er 這個韻母的前面可以有聲母嗎？",
        "「杏仁兒」的拼音末尾是什麼？",
        "「叉燒包」的拼音是？",
        "「蝦餃」的拼音是？",
        "兒化韻在讀的時候要加什麼動作？",
        "「一碟兒」的「碟」讀什麼聲調？",
        "「燒賣」的「燒」讀什麼聲調？",
        "「腸粉」的拼音是？",
        "「蘿葡糕」的「葡」拼音是？",
        "「包圍兒」的意思是？",
        "下列哪組全是兒化韻？",
        "「豆腐腦兒」的「腦」拼音是？",
        "「冰棍兒」的拼音有 -n 嗎？",
        "「瓜子兒」讀起來像什麼？",
        "茶樓的服務員通常會問什麼？",
        "「排骨」的「排」拼音是？"
      ][i % 20],
      options: [
        ["自成音節", "要配聲母", "輕聲音節", "兒化音節"],
        ["麵條兒", "包子", "燒賣", "排骨"],
        ["chūn juǎnr", "chūn juǎn", "chūn juǎn ér", "chūn juǎ"],
        ["茉莉花茶", "紅茶", "綠茶", "烏龍茶"],
        ["不可以", "可以", "有時候可以", "看情況"],
        ["r", "n", "ng", "i"],
        ["chā shāo bāo", "cā shāo bāo", "chā sā bāo", "shā shāo bāo"],
        ["xiā jiǎo", "xiā jiǎor", "xiā gǎo", "hā jiǎo"],
        ["捲舌", "彈舌", "閉嘴", "咬舌"],
        ["dié (二聲)", "diè (四聲)", "diē (一聲)", "diě (三聲)"],
        ["shāo (一聲)", "shǎo (三聲)", "shào (四聲)", "sháo (二聲)"],
        ["cháng fěn", "cáng fěn", "cháng fěng", "cáng fěng"],
        ["bo", "po", "pu", "bu"],
        ["吃光它", "圍住它", "打包它", "看著它"],
        ["麵條兒/春卷兒", "叉燒包/燒賣", "普洱/香片", "排骨/蝦餃"],
        ["nǎo", "lǎo", "nǎor", "lǎor"],
        ["脫落了", "還在", "變成了 m", "變成了 ng"],
        ["zǐr", "zi", "zǐ", "zī"],
        ["想喝甚麼茶？", "你要吃飯嗎？", "幾位坐？", "今天好嗎？"],
        ["pái", "bái", "pāi", "bāi"]
      ][i % 20],
      correct: [
        "自成音節", "麵條兒", "chūn juǎnr", "茉莉花茶", "不可以",
        "r", "chā shāo bāo", "xiā jiǎo", "捲舌", "dié (二聲)",
        "shāo (一聲)", "cháng fěn", "bo", "吃光它", "麵條兒/春卷兒",
        "nǎo", "脫落了", "zǐr", "想喝甚麼茶？", "pái"
      ][i % 20],
      explanation: "這題考驗你對課文內容與語音規則的掌握程度喔！"
    }))
  },
  [LessonType.SHOPPING_MALL]: {
    title: '第二課：逛商場 🛍️',
    icon: '🛒',
    themeColor: 'blue',
    // Added color and btnColor properties for compatibility with App.tsx
    color: 'bg-blue-50 border-blue-200',
    btnColor: 'bg-blue-500',
    accent: 'text-blue-600',
    vocab: [
      { word: '書店', pinyin: 'shū diàn', emoji: '📚' },
      { word: '減價', pinyin: 'jiǎn jià', emoji: '🏷️' },
      { word: '魔法', pinyin: 'mó fǎ', emoji: '🪄' },
      { word: '逛街', pinyin: 'guàng jiē', emoji: '🚶' },
      { word: '童裝', pinyin: 'tóng zhuāng', emoji: '👕' },
      { word: '美食廣場', pinyin: 'měi shí guǎng chǎng', emoji: '🍜' }
    ],
    // ADDED: qingsheng property to fix Property 'qingsheng' does not exist error in MallLesson.tsx
    qingsheng: [
      { word: '東西', pinyin: 'dōng xi', emoji: '🛍️', type: '生活類' },
      { word: '漂亮', pinyin: 'piào liang', emoji: '✨', type: '形容類' },
      { word: '客氣', pinyin: 'kè qi', emoji: '🤝', type: '社交類' },
      { word: '明白', pinyin: 'míng bai', emoji: '💡', type: '心理類' },
      { word: '點心', pinyin: 'diǎn xin', emoji: '🥟', type: '飲食類' },
      { word: '衣服', pinyin: 'yī fu', emoji: '👕', type: '服飾類' },
      { word: '規矩', pinyin: 'guī ju', emoji: '📏', type: '抽象類' },
      { word: '熱鬧', pinyin: 'rè nao', emoji: '🎊', type: '氣氛類' }
    ],
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i + 20,
      question: `第 ${i+1} 題：關於逛商場與輕聲詞的問題...`, // Simplified for brevity in this mock
      options: ["選項 A", "正確答案", "選項 C", "選項 D"],
      correct: "正確答案",
      explanation: "加油！輕聲詞要讀得輕又短喔！"
    }))
  },
  [LessonType.FARM]: {
    title: '第三課：嘉道理農場 🌳',
    icon: '🐗',
    themeColor: 'green',
    // Added color and btnColor properties for compatibility with App.tsx
    color: 'bg-green-50 border-green-200',
    btnColor: 'bg-green-500',
    accent: 'text-green-600',
    sandhi_detail: {
      intro: "第三聲（214）就像一個調皮的彈簧，遇到不同的朋友會變形！",
      rules: [
        { title: "全三聲 🪜", desc: "在句子末尾或單讀時，要讀完整的「下沉再上升」。", example: "農場 chǎng (214)", icon: "⤵️⤴️" },
        { title: "半三聲 📉", desc: "後面跟著第一、二、四聲時，只做下沉，不上升。", example: "很多 hěn (21)", icon: "⤵️" },
        { title: "變二聲 📈", desc: "兩個第三聲連在一起，前一個會變成第二聲！", example: "本土 běn (35)", icon: "⤴️" }
      ]
    },
    vocab: [
      { word: '野豬', pinyin: 'yě zhū', emoji: '🐗' },
      { word: '豹貓', pinyin: 'bào māo', emoji: '🐆' },
      { word: '展覽館', pinyin: 'zhǎn lǎn guǎn', emoji: '🏛️' },
      { word: '蘭花', pinyin: 'lán huā', emoji: '🌸' },
      { word: '溫室', pinyin: 'wēn shì', emoji: '🏠' },
      { word: '果園', pinyin: 'guǒ yuán', emoji: '🍎' }
    ],
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i + 40,
      question: `第 ${i+1} 題：關於嘉道理農場與變調的問題...`,
      options: ["正確答案", "錯誤 A", "錯誤 B", "錯誤 C"],
      correct: "正確答案",
      explanation: "變調規律是普通話好聽的關鍵喔！"
    }))
  },
  [LessonType.CRAZY_MIX]: {
    title: '終極挑戰：20題大闖關 🏆',
    icon: '⚡',
    themeColor: 'purple',
    // Added color and btnColor properties for compatibility with App.tsx
    color: 'bg-purple-50 border-purple-200',
    btnColor: 'bg-purple-500',
    accent: 'text-purple-600',
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i + 60,
      question: `綜合題第 ${i+1} 題：考考你三課的所有知識！`,
      options: ["正確答案", "選項 X", "選項 Y", "選項 Z"],
      correct: "正確答案",
      explanation: "大雜燴挑戰！加油小朋友！"
    }))
  }
};
