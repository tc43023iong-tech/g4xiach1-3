
import React from 'react';
import { LessonType } from './types';

export const LESSON_DATA = {
  [LessonType.TEA_HOUSE]: {
    title: '第一課：上茶樓 🍵',
    icon: '🥟',
    themeColor: 'orange',
    color: 'bg-orange-50 border-orange-200',
    btnColor: 'bg-orange-500',
    accent: 'text-orange-600',
    vocab: [
      { word: '普洱', pinyin: 'pǔ ěr', emoji: '☕' },
      { word: '叉燒包', pinyin: 'chā shāo bāo', emoji: '🥯' },
      { word: '腸粉', pinyin: 'cháng fěn', emoji: '🥢' },
      { word: '蘿葡糕', pinyin: 'luó bo gāo', emoji: '🍞' },
      { word: '蝦餃', pinyin: 'xiā jiǎo', emoji: '🦐' },
      { word: '燒賣', pinyin: 'shāo mài', emoji: '🟡' },
      { word: '排骨', pinyin: 'pái gǔ', emoji: '🍖' },
      { word: '春卷兒', pinyin: 'chūn juǎnr', emoji: '🥖' },
      { word: '包圍兒', pinyin: 'bāo wéir', emoji: '😋' }
    ],
    erhua_vocab: [
      { word: '香腸兒', pinyin: 'xiāng chángr' },
      { word: '杏仁兒', pinyin: 'xìng rénr' },
      { word: '瓜子兒', pinyin: 'guā zǐr' },
      { word: '麵條兒', pinyin: 'miàn tiáor' },
      { word: '豆腐腦兒', pinyin: 'dòu fu nǎor' },
      { word: '一碟兒', pinyin: 'yì diér' },
      { word: '豆芽兒', pinyin: 'dòu yár' },
      { word: '冰棍兒', pinyin: 'bīng gùnr' }
    ],
    er_special: [
      { word: '洱', pinyin: 'ěr', char: '洱' },
      { word: '耳', pinyin: 'ěr', char: '耳' },
      { word: '兒', pinyin: 'ér', char: '兒' },
      { word: '二', pinyin: 'èr', char: '二' },
      { word: '而', pinyin: 'ér', char: '而' }
    ],
    erhua_detail: {
      intro: "兒化韻是漢語的一種發音現象，主要是在韻母後面加上捲舌動作（拼音加 r）。",
      rules: [
        { title: "基本捲舌 👅", desc: "發音結尾向上捲起舌頭，拼音末尾直接加 r。", example: "那兒 (nàr)" },
        { title: "韻尾脫落 🍂", desc: "結尾是 n 或 i 的詞兒化時，原本的尾音通常會脫落消失。", example: "杏仁兒 (xìng rénr)" },
        { title: "韻母變異 ✨", desc: "有些字兒化後，原本的韻母發音會發生改變。", example: "瓜子兒 (guā zǐr)" }
      ]
    },
    quiz: [
      { id: 1, question: "「普洱」的「洱」是哪種音節？", options: ["自成音節", "配聲母音節", "輕聲音節", "兒化音節"], correct: "自成音節", explanation: "er 永遠自成音節，前面不會有聲母。" },
      { id: 2, question: "兒化韻中，「杏仁兒」的拼音末尾 n 會？", options: ["脫落消失", "加重讀音", "變三聲", "不變"], correct: "脫落消失", explanation: "結尾是 n 或 i 的詞兒化時，尾音通常會脫落。" },
      { id: 3, question: "「春卷兒」的拼音正確標註是？", options: ["chūn juǎnr", "chūn juǎn er", "chūn juán", "chūn juàn r"], correct: "chūn juǎnr", explanation: "兒化韻在拼音末尾直接加 r。" },
      { id: 4, question: "關於特殊韻母 er，下列哪項正確？", options: ["前面絕不跟聲母牽手", "必須配聲母讀音", "只能讀輕聲", "是鼻韻母"], correct: "前面絕不跟聲母牽手", explanation: "er 是個孤獨的小超人，不加聲母。" },
      { id: 5, question: "「一碟兒」點心的「碟」兒化後字音？", options: ["不變", "會改變", "變輕聲", "變三聲"], correct: "不變", explanation: "結尾是 e 的字兒化後字音通常不變。" },
      { id: 6, question: "「瓜子兒」的兒化規律屬於？", options: ["韻母變異", "捲舌不變", "韻尾脫落", "鼻音化"], correct: "韻母變異", explanation: "「子」兒化後韻母會發生改變。" },
      { id: 7, question: "「香腸兒」的拼音是？", options: ["xiāng chángr", "xiāng cháng er", "xiāng chár", "xiāng chánr"], correct: "xiāng chángr", explanation: "在原韻母後直接加 r。" },
      { id: 8, question: "特殊韻母 er 在「二哥」中讀第幾聲？", options: ["第四聲", "第一聲", "第二聲", "第三聲"], correct: "第四聲", explanation: "二 (èr) 是第四聲。" },
      { id: 9, question: "兒化韻主要是為了使語言？", options: ["活潑、親切", "嚴肅、莊重", "難讀、複雜", "區分男女"], correct: "活潑、親切", explanation: "兒化韻能讓話語聽起來更自然。 " },
      { id: 10, question: "「麵條兒」的拼音標誌是末尾的？", options: ["r", "e", "n", "er"], correct: "r", explanation: "r 代表捲舌兒化。" },
      { id: 11, question: "「兒子」的「兒」標註幾聲？", options: ["第二聲", "第三聲", "第一聲", "第四聲"], correct: "第二聲", explanation: "兒 (ér) 是第二聲。" },
      { id: 12, question: "下列哪個包含兒化韻？", options: ["香腸兒", "普洱", "書店", "農場"], correct: "香腸兒", explanation: "詞尾帶 r 且有捲舌音的是兒化韻。" },
      { id: 13, question: "「數字二」的拼音是？", options: ["èr", "ér", "ēr", "ěr"], correct: "èr", explanation: "二讀作第四聲。" },
      { id: 14, question: "朗讀兒化韻時舌頭要？", options: ["向上捲起", "向下縮", "保持平放", "伸出嘴外"], correct: "向上捲起", explanation: "這是兒化韻的發音特點。" },
      { id: 15, question: "「耳朵」的「耳」拼音是？", options: ["ěr", "er", "ér", "èr"], correct: "ěr", explanation: "耳是第三聲。" },
      { id: 16, question: "「包圍兒」表示？", options: ["吃不下的打包帶走", "把敵人包住", "繞一圈", "很多點心"], correct: "吃不下的打包帶走", explanation: "這是茶樓常見的俗語兒化。" },
      { id: 17, question: "兒化韻「冰棍兒」屬於哪種變化？", options: ["n 脫落", "捲舌不變", "韻母變異", "鼻音變"], correct: "n 脫落", explanation: "棍 gùn 的 n 會消失。" },
      { id: 18, question: "「而準」的「而」是第幾聲？", options: ["第二聲", "第一聲", "第三聲", "第四聲"], correct: "第二聲", explanation: "而 (ér) 是第二聲。" },
      { id: 19, question: "特殊韻母 er 永遠？", options: ["自成音節", "需要聲母", "沒有聲調", "讀輕聲"], correct: "自成音節", explanation: "它是個獨立的音節。" },
      { id: 20, question: "「豆芽兒」的兒化規律屬於？", options: ["捲舌不變形", "韻尾脫落", "韻母變異", "鼻音化"], correct: "捲舌不變形", explanation: "a 結尾的音節兒化最簡單。" }
    ]
  },
  [LessonType.SHOPPING_MALL]: {
    title: '第二課：逛商場 🛍️',
    icon: '🛒',
    themeColor: 'blue',
    color: 'bg-blue-50 border-blue-200',
    btnColor: 'bg-blue-500',
    accent: 'text-blue-600',
    core_vocab: [
      { word: '書店', pinyin: 'shū diàn', emoji: '📚' },
      { word: '減價', pinyin: 'jiǎn jià', emoji: '🏷️' },
      { word: '魔法', pinyin: 'mó fǎ', emoji: '🪄' },
      { word: '逛街', pinyin: 'guàng jiē', emoji: '🚶' },
      { word: '童裝', pinyin: 'tóng zhuāng', emoji: '👕' },
      { word: '服裝店', pinyin: 'fú zhuāng diàn', emoji: '👗' },
      { word: '美食廣場', pinyin: 'měi shí guǎng chǎng', emoji: '🍜' }
    ],
    definitions: {
      disyllabic_title: "什麼是「雙音節詞」？",
      disyllabic_desc: "「音節」就像是說話的拍子。一個字一個音節。「雙音節詞」就是由『兩個字』組成的詞語！",
      disyllabic_example: "例子：『衣服』、『熱鬧』、『故事』。"
    },
    qingsheng_categories: [
      { type: '語氣詞 🗣️', items: [{ w: '來吧！', p: 'lái ba' }, { w: '好嗎？', p: 'hǎo ma' }] },
      { type: '助詞 🖇️', items: [{ w: '你的', p: 'nǐ de' }, { w: '拿了', p: 'ná le' }] },
      { type: '名詞的後綴 🏷️', items: [{ w: '男孩子', p: 'nán hái zi' }, { w: '石頭', p: 'shí tou' }] },
      { type: '方位詞 🧭', items: [{ w: '桌上', p: 'zhuō shang' }, { w: '前邊兒', p: 'qián bianr' }] },
      { type: '重疊詞 👥', items: [{ w: '看看', p: 'kàn kan' }, { w: '逛逛', p: 'guàng guang' }, { w: '弟弟', p: 'dì di' }, { w: '媽媽', p: 'mā ma' }] },
      { type: '特定雙音節詞 ✨', items: [{ w: '熱鬧', p: 'rè nao' }, { w: '故事', p: 'gù shi' }, { w: '衣服', p: 'yī fu' }, { w: '喜歡', p: 'xǐ huan' }] }
    ],
    quiz: [
      { id: 21, question: "「雙音節詞」是指由幾個字組成的詞？", options: ["兩個", "一個", "三個", "四個"], correct: "兩個", explanation: "雙就是二的意思。" },
      { id: 22, question: "輕聲讀法有什麼特點？", options: ["輕而短", "重而長", "很大聲", "完全不發聲"], correct: "輕而短", explanation: "輕聲不標調，讀得短促。" },
      { id: 23, question: "「好嗎？」中的「嗎」是哪類輕聲？", options: ["語氣詞", "助詞", "方位詞", "名詞後綴"], correct: "語氣詞", explanation: "句末表示語氣。" },
      { id: 24, question: "「看看」哪個字讀輕聲？", options: ["第二個字", "第一個字", "兩個都是", "兩個都不是"], correct: "第二個字", explanation: "重疊詞後半讀輕聲。" },
      { id: 25, question: "下列哪個包含名詞後綴輕聲？", options: ["男孩子", "逛逛", "你的", "桌上"], correct: "男孩子", explanation: "「子」是名詞後綴。" },
      { id: 26, question: "「桌上」中的「上」是？", options: ["方位詞", "語氣詞", "助詞", "重疊詞"], correct: "方位詞", explanation: "表示方位的詞讀輕聲。" },
      { id: 27, question: "「熱鬧」哪個音節讀輕聲？", options: ["鬧", "熱", "都是", "都不是"], correct: "鬧", explanation: "特定雙音節詞後半輕聲。" },
      { id: 28, question: "輕聲在拼音中？", options: ["不標調", "標一聲", "標四聲", "標原調"], correct: "不標調", explanation: "輕聲不標聲調符號。" },
      { id: 29, question: "「弟弟」屬於哪類輕聲？", options: ["重疊名詞", "重疊動詞", "方位詞", "語氣詞"], correct: "重疊名詞", explanation: "親屬稱呼重疊讀輕聲。" },
      { id: 30, question: "「石頭」的「頭」發音？", options: ["輕而短", "重而響", "加個 r", "標二聲"], correct: "輕而短", explanation: "後綴「頭」讀輕聲。" },
      { id: 31, question: "「來吧！」中的「吧」是？", options: ["語氣詞", "助詞", "方位詞", "名詞"], correct: "語氣詞", explanation: "句末語氣助詞。" },
      { id: 32, question: "「故事」正確拼音是？", options: ["gù shi", "gù sishi", "gu shi", "gǔ shi"], correct: "gù shi", explanation: "「事」讀輕聲。" },
      { id: 33, question: "「衣服」的「服」發音是？", options: ["輕聲", "二聲", "四聲", "一聲"], correct: "輕聲", explanation: "衣服的服讀輕聲。" },
      { id: 34, question: "「拿了」中的「了」是？", options: ["助詞", "語氣詞", "方位詞", "動詞"], correct: "助詞", explanation: "助詞常讀輕聲。" },
      { id: 35, question: "「前邊兒」包含了兒化與？", options: ["方位詞輕聲", "重疊音", "二聲變調", "四聲"], correct: "方位詞輕聲", explanation: "前邊是方位詞。" },
      { id: 36, question: "「喜歡」的「歡」讀作？", options: ["輕聲", "一聲", "三聲", "二聲"], correct: "輕聲", explanation: "喜歡的歡讀輕聲。" },
      { id: 37, question: "「謝謝」哪個字是輕聲？", options: ["第二個謝", "第一個謝", "都是", "都不是"], correct: "第二個謝", explanation: "重疊詞後半輕聲。" },
      { id: 38, question: "「媽媽」屬於哪類輕聲？", options: ["重疊名詞", "重疊動詞", "助詞", "語氣詞"], correct: "重疊名詞", explanation: "家人稱呼重疊。" },
      { id: 39, question: "「甚麼」的「麼」讀音是？", options: ["輕聲", "二聲", "三聲", "四聲"], correct: "輕聲", explanation: "甚麼的麼讀輕聲。" },
      { id: 40, question: "「逛逛」拼音標註聲調嗎？", options: ["只標第一個", "標兩個", "都不標", "只標第二個"], correct: "只標第一個", explanation: "後半輕聲不標調。" }
    ]
  },
  [LessonType.FARM]: {
    title: '第三課：嘉道理農場 🌳',
    icon: '🐗',
    themeColor: 'green',
    color: 'bg-green-50 border-green-200',
    btnColor: 'bg-green-500',
    accent: 'text-green-600',
    core_vocab: [
      { word: '嘉道理農場', pinyin: 'jiā dào lǐ nóng chǎng', emoji: '🌳' },
      { word: '聽說', pinyin: 'tīng shuō', emoji: '👂' },
      { word: '野豬', pinyin: 'yě zhū', emoji: '🐗' },
      { word: '豹貓', pinyin: 'bào māo', emoji: '🐆' },
      { word: '展覽館', pinyin: 'zhǎn lǎn guǎn', emoji: '🏛️' },
      { word: '蘭花', pinyin: 'lán huā', emoji: '🌸' },
      { word: '溫室', pinyin: 'wēn shì', emoji: '🏠' },
      { word: '笑話', pinyin: 'xiào hua', emoji: '😂' }
    ],
    sandhi_detail: {
      categories: [
        {
          title: "1. 唸全三聲 (214) 🪜",
          rule: "當第三聲字在詞尾時，要唸全三聲：",
          examples: [
            { w: "農場", p: "nóng chǎng" },
            { w: "星期五", p: "xīng qī wǔ" },
            { w: "鸚鵡", p: "yīng wǔ" },
            { w: "風景", p: "fēng jǐng" }
          ]
        },
        {
          title: "2. 唸半三聲 (21) 📉",
          rule: "三聲字在前面接非三聲字，變讀半三聲：",
          examples: [
            { w: "很多", p: "hěn duō" },
            { w: "比如", p: "bǐ rú" },
            { w: "講話", p: "jiǎng huà" },
            { w: "喜歡", p: "xǐ huan" }
          ]
        },
        {
          title: "3. 變讀為第二聲 (35) 🚀",
          rule: "三聲字相連，前面的字變讀近似第二聲：",
          subsections: [
            {
              name: "兩個三聲字相連",
              items: [
                { w: "本土", p: "běn tǔ (35+214)" },
                { w: "哺乳", p: "bǔ rǔ (35+214)" }
              ]
            },
            {
              name: "三個三聲字相連",
              items: [
                { w: "展覽館", p: "zhán lán guǎn" },
                { w: "小拇指", p: "xiáo mú zhǐ" },
                { w: "水彩筆", p: "shuí cái bǐ" },
                { w: "紙老虎", p: "zhí láo hǔ" }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { id: 41, question: "「農場」的「場」在詞語最後，應讀？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "讀輕聲"], correct: "唸全三聲", explanation: "末尾三聲字唸全調。" },
      { id: 42, question: "「很多」的「很」接在一聲前，應讀？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "讀輕聲"], correct: "唸半三聲", explanation: "3+1 變半三。" },
      { id: 43, question: "「本土」兩個三聲相連，「本」字應？", options: ["變讀為第二聲", "唸全三聲", "唸半三聲", "變輕聲"], correct: "變讀為第二聲", explanation: "3+3 前字變二聲。" },
      { id: 44, question: "「展覽館」有三個三聲字，正確變調聽起來像？", options: ["前兩個字變二聲", "只有中間變", "都不變", "變輕聲"], correct: "前兩個字變二聲", explanation: "三字相連，前二變身。" },
      { id: 45, question: "「比如」的「比」接在二聲前，應唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "一聲"], correct: "唸半三聲", explanation: "3+2 變半三。" },
      { id: 46, question: "「講話」的「講」接在四聲前，應唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "輕聲"], correct: "唸半三聲", explanation: "3+4 變半三。" },
      { id: 47, question: "「鸚鵡」的「鵡」在詞尾，應唸？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "末尾不變調。" },
      { id: 48, question: "「很多」中「很」的讀音動作是？", options: ["只降不升", "降了又升", "直接升高", "保持不變"], correct: "只降不升", explanation: "半三聲只做前半部。" },
      { id: 49, question: "「本土」中「本」的讀音聽起來像？", options: ["第二聲", "半三聲", "全三聲", "一聲"], correct: "第二聲", explanation: "變讀為升調。" },
      { id: 50, question: "「星期五」的「五」處在詞尾，應唸？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "詞尾唸全音。" },
      { id: 51, question: "當單獨唸一個三聲字「我」時，應唸？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "單讀唸全調。" },
      { id: 52, question: "「喜歡」的「喜」接在輕聲前，應唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "輕聲"], correct: "唸半三聲", explanation: "接輕聲通常變半三。" },
      { id: 53, question: "「小拇指」聽起來像？", options: ["xiáo mú zhǐ", "xiǎo mǔ zhǐ", "xiào mù zhǐ", "xiáo mǔ zhí"], correct: "xiáo mú zhǐ", explanation: "三字連讀示範。" },
      { id: 54, question: "「嘉道理農場」的「場」發音是？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "末尾字唸全音。" },
      { id: 55, question: "「風景」的「景」標註？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "詞尾唸全調。" },
      { id: 56, question: "「水彩筆」前兩個字的變調聽起來像？", options: ["第二聲", "半三聲", "全三聲", "一聲"], correct: "第二聲", explanation: "三字連讀前二變。" },
      { id: 57, question: "「笑話」本課中「話」讀？", options: ["輕聲", "四聲", "一聲", "三聲"], correct: "輕聲", explanation: "本課作為輕聲練習。" },
      { id: 58, question: "「紙老虎」的「紙」讀音？", options: ["變讀為第二聲", "唸全三聲", "唸半三聲", "一聲"], correct: "變讀為第二聲", explanation: "3+3+3 前二變。" },
      { id: 59, question: "「溫室」的「溫」是幾聲？", options: ["第一聲", "第二聲", "第三聲", "第四聲"], correct: "第一聲", explanation: "溫 wēn 第一聲。" },
      { id: 60, question: "「野豬」的「野」接在一聲前，唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "一聲"], correct: "唸半三聲", explanation: "3+1 變半三。" }
    ]
  },
  [LessonType.CRAZY_MIX]: {
    title: '終極挑戰：20題大闖關 🏆',
    icon: '⚡',
    themeColor: 'purple',
    color: 'bg-purple-50 border-purple-200',
    btnColor: 'bg-purple-500',
    accent: 'text-purple-600',
    interactive_er: [
      { sentence: "二哥最喜歡喝普洱。", targets: ["二", "洱"] },
      { sentence: "他的兒子有一雙很大的耳朵。", targets: ["兒", "耳"] },
      { sentence: "你這一題答得快而準。", targets: ["而"] }
    ],
    interactive_qingsheng: [
      { sentence: "1 爸爸，那兒很熱鬧，我們去看看。", targets: ["爸", "鬧", "們", "看"] },
      { sentence: "2 你喜歡甚麼顏色的氣球？", targets: ["歡", "麼", "的"] },
      { sentence: "3 我喜歡紅色，給我扭一把紅色的長劍，好嗎？好！", targets: ["歡", "的", "嗎"] },
      { sentence: "4 謝謝！", targets: ["謝"] }
    ],
    interactive_erhua_add: [
      { 
        text: "這 的春卷 很好吃，要來一碟 嗎？", 
        segments: ["這", " 的春卷", " 很好吃，要來一", "碟", " 嗎？"],
        targets: [0, 1, 3] // 位置 0 (這後), 1 (春卷後), 3 (碟後)
      },
      { 
        text: "快來這邊 坐，陪我吃瓜子 。", 
        segments: ["快來", "這邊", " 坐，陪我吃", "瓜子", " 。"],
        targets: [1, 3] // 位置 1 (這邊後), 3 (瓜子後)
      },
      { 
        text: "你別一看到豆腐腦 就一個勁 地吃，小心吃壞肚皮。", 
        segments: ["你別一看到", "豆腐腦", " 就", "一個勁", " 地吃，小心吃壞肚皮。"],
        targets: [1, 3] // 位置 1 (豆腐腦後), 3 (一個勁後)
      }
    ],
    quiz: [
      { id: 61, question: "「普洱」的「洱」是特殊韻母，它前面？", options: ["永遠沒有聲母", "必須有聲母", "可以有也可以沒有", "只接輕聲"], correct: "永遠沒有聲母", explanation: "er 自成音節。" },
      { id: 62, question: "下列哪個包含輕聲？", options: ["熱鬧", "書店", "野豬", "風景"], correct: "熱鬧", explanation: "鬧讀輕聲。" },
      { id: 63, question: "兩個三聲相連（如「本土」），前字唸？", options: ["變讀為第二聲", "唸全三聲", "唸半三聲", "輕聲"], correct: "變讀為第二聲", explanation: "3+3 變二。" },
      { id: 64, question: "兒化韻拼音是在末尾加？", options: ["r", "e", "n", "er"], correct: "r", explanation: "r 代表捲舌。" },
      { id: 65, question: "「故事」的「事」讀？", options: ["輕聲", "四聲", "二聲", "一聲"], correct: "輕聲", explanation: "故事的事讀輕聲。" },
      { id: 66, question: "「二」的拼音是 èr，它是？", options: ["特殊韻母 er 的音節", "兒化韻", "輕聲", "鼻韻母"], correct: "特殊韻母 er 的音節", explanation: "er 自成音節。" },
      { id: 67, question: "「看看」第二個音節讀？", options: ["輕聲", "四聲", "一聲", "三聲"], correct: "輕聲", explanation: "重疊詞後半輕聲。" },
      { id: 68, question: "「農場」的「場」唸？", options: ["唸全三聲", "唸半三聲", "變讀為第二聲", "輕聲"], correct: "唸全三聲", explanation: "末尾不變調。" },
      { id: 69, question: "「杏仁兒」兒化時 n 會？", options: ["脫落消失", "變重音", "加強", "不變"], correct: "脫落消失", explanation: "n 韻尾脫落。" },
      { id: 70, question: "「雙音節詞」由幾個字組成？", options: ["兩個", "一個", "三個", "四個"], correct: "兩個", explanation: "雙音節即兩字詞。" },
      { id: 71, question: "「前邊兒」是帶兒化的？", options: ["方位詞", "語氣詞", "助詞", "動詞"], correct: "方位詞", explanation: "表示方位的詞。" },
      { id: 72, question: "「比如」的「比」唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "一聲"], correct: "唸半三聲", explanation: "3+2 變半三。" },
      { id: 73, question: "「男孩子」的「子」是？", options: ["名詞後綴", "語氣詞", "助詞", "重疊"], correct: "名詞後綴", explanation: "子是常見後綴。" },
      { id: 74, question: "「紙老虎」前兩字聽起來像？", options: ["第二聲", "三聲", "半三", "一聲"], correct: "第二聲", explanation: "三字連讀前二變。" },
      { id: 75, question: "「香片」是這課提到的？", options: ["茶", "點心", "人名", "地名"], correct: "茶", explanation: "茶的名字。" },
      { id: 76, question: "「講話」的「講」唸？", options: ["唸半三聲", "唸全三聲", "變讀為第二聲", "輕聲"], correct: "唸半三聲", explanation: "3+4 變半三。" },
      { id: 77, question: "「冰棍兒」兒化屬於？", options: ["n 脫落", "捲舌不變", "韻母變異", "不變"], correct: "n 脫落", explanation: "棍兒化 n 消失。" },
      { id: 78, question: "「喜歡」的「歡」讀？", options: ["輕聲", "一聲", "二聲", "三聲"], correct: "輕聲", explanation: "歡讀輕聲。" },
      { id: 79, question: "「農」的拼音是？", options: ["nóng", "nǒng", "nōng", "nòng"], correct: "nóng", explanation: "農是二聲。" },
      { id: 80, question: "一個漢字通常是一個？", options: ["音節", "韻母", "聲母", "聲調"], correct: "音節", explanation: "一字一音節。" }
    ]
  }
};
