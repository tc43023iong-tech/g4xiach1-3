
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
      intro: "「兒化韻」就像給單詞穿上了一雙溜冰鞋，滑滑的、捲捲的！",
      rules: [
        { title: "不變形溜冰 🛡️", desc: "結尾是 a, o, e, u 時，舌頭直接捲起來！", example: "香腸兒 chángr" },
        { title: "脫掉尾巴 🧚", desc: "結尾是 n 或 i 時，尾巴會不見，聲音變圓潤。", example: "杏仁兒 rén -> rèn r" },
        { title: "鼻音變變變 🦖", desc: "結尾是 ng 時，會帶一點可愛鼻音。", example: "冰棍兒 gùnr" }
      ]
    },
    erhua_list: [
      { word: '香腸兒', pinyin: 'xiāng chángr', emoji: '🌭', change: '捲舌不變' },
      { word: '杏仁兒', pinyin: 'xìng rénr', emoji: '🥜', change: 'n 脫落' },
      { word: '瓜子兒', pinyin: 'guā zǐr', emoji: '🌻', change: '韻母變異' },
      { word: '麵條兒', pinyin: 'miàn tiáor', emoji: '🍜', change: '捲舌不變' },
      { word: '一碟兒', pinyin: 'yì diér', emoji: '🍽️', change: '捲舌不變' },
      { word: '豆芽兒', pinyin: 'dòu yár', emoji: '🌱', change: '捲舌不變' },
      { word: '冰棍兒', pinyin: 'bīng gùnr', emoji: '🍦', change: 'n 脫落' }
    ],
    er_special: {
      rule: "er 是「孤獨的小超人」🦸‍♂️！它永遠自成音節，前面絕不跟聲母朋友牽手。",
      list: [
        { word: '洱 (ěr)', context: '普洱茶', emoji: '🍵' },
        { word: '耳 (ěr)', context: '耳朵', emoji: '👂' },
        { word: '兒 (ér)', context: '兒子', emoji: '👦' },
        { word: '二 (èr)', context: '數字二', emoji: '2️⃣' },
        { word: '而 (ér)', context: '而且/然而', emoji: '🔗' }
      ]
    },
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i,
      question: ["「普洱」的「洱」是什麼音節？", "下列哪個是兒化韻？", "「春卷兒」的拼音末尾？", "「香片」是什麼茶？", "er 前面能加聲母嗎？"][i%5],
      options: [["自成音節", "配聲母"], ["麵條兒", "包子"], ["r", "n"], ["花茶", "紅茶"], ["不可以", "可以"]][i%5],
      correct: ["自成音節", "麵條兒", "r", "花茶", "不可以"][i%5],
      explanation: "記得老師說過的重點喔！"
    }))
  },
  [LessonType.SHOPPING_MALL]: {
    title: '第二課：逛商場 🛍️',
    icon: '🛒',
    themeColor: 'blue',
    color: 'bg-blue-50 border-blue-200',
    btnColor: 'bg-blue-500',
    accent: 'text-blue-600',
    vocab: [
      { word: '書店', pinyin: 'shū diàn', emoji: '📚' },
      { word: '減價', pinyin: 'jiǎn jià', emoji: '🏷️' },
      { word: '魔法', pinyin: 'mó fǎ', emoji: '🪄' },
      { word: '逛街', pinyin: 'guàng jiē', emoji: '🚶' },
      { word: '童裝', pinyin: 'tóng zhuāng', emoji: '👕' },
      { word: '美食廣場', pinyin: '美食廣場 (qǐng)', emoji: '🍜' }
    ],
    qingsheng: [
      { word: '來吧！', pinyin: 'ba (輕)', type: '語氣詞', emoji: '🗣️', detail: '常用在句末' },
      { word: '好嗎？', pinyin: 'ma (輕)', type: '語氣詞', emoji: '❓', detail: '疑問語氣' },
      { word: '你的', pinyin: 'de (輕)', type: '助詞', emoji: '🫵', detail: '表示所屬' },
      { word: '拿了', pinyin: 'le (輕)', type: '助詞', emoji: '🤲', detail: '表示完成' },
      { word: '男孩子', pinyin: 'zi (輕)', type: '名詞後綴', emoji: '👦', detail: '物體名稱' },
      { word: '石頭', pinyin: 'tou (輕)', type: '名詞後綴', emoji: '🪨', detail: '常見後綴' },
      { word: '桌上', pinyin: 'shang (輕)', type: '方位詞', emoji: '🪜', detail: '指示方向' },
      { word: '前邊兒', pinyin: 'bianr (輕)', type: '方位詞', emoji: '⬅️', detail: '兒化輕聲' },
      { word: '看看', pinyin: 'kan (輕)', type: '重疊詞', emoji: '👀', detail: '動詞重疊' },
      { word: '逛逛', pinyin: 'guang (輕)', type: '重疊詞', emoji: '🚶', detail: '動詞重疊' },
      { word: '弟弟', pinyin: 'di (輕)', type: '重疊詞', emoji: '👦', detail: '親屬稱呼' },
      { word: '媽媽', pinyin: 'ma (輕)', type: '重疊詞', emoji: '👩', detail: '親屬稱呼' },
      { word: '熱鬧', pinyin: 'nao (輕)', type: '雙音詞', emoji: '🎊', detail: '形容氣氛' },
      { word: '故事', pinyin: 'shi (輕)', type: '雙音詞', emoji: '📖', detail: '文學作品' },
      { word: '衣服', pinyin: 'fu (輕)', type: '雙音詞', emoji: '👕', detail: '日常用品' },
      { word: '喜歡', pinyin: 'huan (輕)', type: '雙音詞', emoji: '❤️', detail: '心理活動' }
    ],
    quiz: Array.from({ length: 20 }, (_, i) => ({
      id: i + 20,
      question: ["「輕聲」讀法是什麼？", "下列哪個詞末尾讀輕聲？", "「弟弟」的第二個音節？", "「來吧！」中的「吧」是？", "「故事」的「事」拼音標調嗎？"][i%5],
      options: [["輕而短", "長而響"], ["衣服", "大聲"], ["輕聲", "四聲"], ["語氣詞", "方位詞"], ["不標調", "標四聲"]][i%5],
      correct: ["輕而短", "衣服", "輕聲", "語氣詞", "不標調"][i%5],
      explanation: "輕聲不標調，讀得輕快、短促喔！"
    }))
  },
  [LessonType.FARM]: {
    title: '第三課：嘉道理農場 🌳',
    icon: '🐗',
    themeColor: 'green',
    color: 'bg-green-50 border-green-200',
    btnColor: 'bg-green-500',
    accent: 'text-green-600',
    sandhi_detail: {
      intro: "「第三聲」音調（214）就像一條愛變色的小龍 🐉，遇到不同的鄰居會變換調門！",
      categories: [
        {
          title: "全三聲 🏔️ (214)",
          rule: "在末尾或單說時讀全音。",
          examples: [
            { w: "農場", p: "chǎng" }, { w: "鸚鵡", p: "wǔ" }, { w: "風景", p: "jǐng" }, { w: "手錶", p: "biǎo" }, { w: "五", p: "wǔ" }, { w: "好", p: "hǎo" }, { w: "雨", p: "yǔ" }, { w: "米", p: "mǐ" }, { w: "紙", p: "zhǐ" }, { w: "跑", p: "pǎo" }
          ]
        },
        {
          title: "半三聲 📉 (21)",
          rule: "後接 1, 2, 4 聲時，只下沉不上升。",
          examples: [
            { w: "很多", p: "hěn" }, { w: "講話", p: "jiǎng" }, { w: "野豬", p: "yě" }, { w: "比如", p: "bǐ" }, { w: "喜歡", p: "xǐ" }, { w: "每天", p: "měi" }, { w: "海鮮", p: "hǎi" }, { w: "雨傘", p: "yǔ" }, { w: "手冊", p: "shǒu" }, { w: "老師", p: "lǎo" }, { w: "早安", p: "zǎo" }, { w: "廣播", p: "guǎng" }
          ]
        },
        {
          title: "變二聲 🚀 (35)",
          rule: "兩個 3 聲相連，前一個變 2 聲。",
          examples: [
            { w: "本土", p: "běn->bén" }, { w: "哺乳", p: "bǔ->bú" }, { w: "展覽", p: "zhǎn->zhán" }, { w: "水果", p: "shuǐ->shuí" }, { w: "打掃", p: "dǎ->dá" }, { w: "演講", p: "yǎn->yán" }, { w: "老闆", p: "lǎo->láo" }, { w: "美好", p: "měi->méi" }, { w: "理想", p: "lǐ->lí" }, { w: "勇敢", p: "yǒng->yóng" }, { w: "領導", p: "lǐng->líng" }
          ]
        },
        {
          title: "特殊連環 🧩",
          rule: "三個 3 聲連讀，按詞語關係變調。",
          examples: [
            { w: "展覽館", p: "zhán lán guǎn" }, { w: "小拇指", p: "xiáo mú zhǐ" }, { w: "水彩筆", p: "shuí cái bǐ" }, { w: "紙老虎", p: "zhí láo hǔ" }, { w: "語法學", p: "yú fá xué" }, { w: "演講稿", p: "yán jiáng gǎo" }
          ]
        }
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
      question: ["「農場」的「場」讀？", "「很多」的「很」變調？", "「本土」的「本」變調？", "「展覽館」有幾個三聲？"][i%4],
      options: [["全三聲", "半三聲"], ["半三聲 (21)", "全三聲"], ["變二聲 (35)", "不變"], ["三個", "二個"]][i%4],
      correct: ["全三聲", "半三聲 (21)", "變二聲 (35)", "三個"][i%4],
      explanation: "變調是讓普通話更好聽的秘密！"
    }))
  },
  [LessonType.CRAZY_MIX]: {
    title: '終極挑戰：20題大闖關 🏆',
    icon: '⚡',
    themeColor: 'purple',
    color: 'bg-purple-50 border-purple-200',
    btnColor: 'bg-purple-500',
    accent: 'text-purple-600',
    quiz: [
      { question: "「特殊韻母 er」的特點是什麼？", options: ["前面絕不跟聲母牽手", "必須配聲母讀音", "只能讀輕聲", "是鼻韻母的一種"], correct: "前面絕不跟聲母牽手", explanation: "er 永遠自成音節，不需要聲母朋友喔！" },
      { question: "「普洱茶」的「洱」在拼音中標幾聲？", options: ["三聲 (ěr)", "二聲 (ér)", "四聲 (èr)", "一聲 (ēr)"], correct: "三聲 (ěr)", explanation: "普洱茶的「洱」是第三聲。" },
      { question: "「香腸兒」兒化後，拼音寫法正確的是？", options: ["xiāng chángr", "xiāng cháng er", "xiāng cháng", "xiāng chár"], correct: "xiāng chángr", explanation: "兒化韻拼音是在末尾加 r。" },
      { question: "兒化韻「杏仁兒」中，尾音「n」發生了什麼？", options: ["消失/脫落", "變重音", "變成捲舌音", "不變"], correct: "消失/脫落", explanation: "像 n, i 這樣的韻尾兒化時通常會脫落。" },
      { question: "下列哪個詞語讀音包含「輕聲」？", options: ["故事", "農場", "書店", "茶樓"], correct: "故事", explanation: "故事的「事」讀輕聲，讀得短促。" },
      { question: "「來吧！」中的「吧」是什麼類型的輕聲詞？", options: ["語氣詞", "方位詞", "助詞", "重疊詞"], correct: "語氣詞", explanation: "「吧、嗎、呢」都是常見的語氣輕聲詞。" },
      { question: "「男孩子」的「子」讀什麼調？", options: ["輕聲", "三聲", "二聲", "一聲"], correct: "輕聲", explanation: "名詞後綴「子」通常讀輕聲。" },
      { question: "「逛逛」中第二個音節讀什麼？", options: ["輕聲", "四聲", "一聲", "二聲"], correct: "輕聲", explanation: "動詞重疊時，第二個音節讀輕聲。" },
      { question: "第三聲音階的標準規律是？", options: ["214 (降升)", "35 (上升)", "55 (高平)", "51 (全降)"], correct: "214 (降升)", explanation: "全三聲是從 2 降到 1 再升到 4。" },
      { question: "「農場」的「場」在詞尾，要讀？", options: ["全三聲 (214)", "半三聲 (21)", "二聲 (35)", "輕聲"], correct: "全三聲 (214)", explanation: "單讀或在句子/詞語末尾讀全三聲。" },
      { question: "「很多」的「很」後接 1 聲「多」，變調為？", options: ["半三聲 (21)", "二聲 (35)", "全三聲 (214)", "輕聲"], correct: "半三聲 (21)", explanation: "接 1, 2, 4 聲時，3 聲變半三聲。" },
      { question: "「比如」的「比」唸什麼變調？", options: ["半三聲 (21)", "二聲 (35)", "全三聲 (214)", "一聲 (55)"], correct: "半三聲 (21)", explanation: "接 2 聲「如」，變半三聲。" },
      { question: "「本土」是 3 聲連 3 聲，「本」唸？", options: ["二聲 (35)", "全三聲 (214)", "半三聲 (21)", "一聲 (55)"], correct: "二聲 (35)", explanation: "兩個 3 聲相連，前一個變 2 聲。" },
      { question: "「展覽館」的三個音節正確變調應為？", options: ["二聲+二聲+三聲", "三聲+三聲+三聲", "二聲+三聲+三聲", "一聲+二聲+三聲"], correct: "二聲+二聲+三聲", explanation: "三個 3 聲在一起時，前兩個通常變調。" },
      { question: "「二」的拼音正確標註是？", options: ["èr", "ér", "ēr", "ěr"], correct: "èr", explanation: "特殊韻母二讀第四聲。" },
      { question: "「春卷兒」中的「卷」正確拼音是？", options: ["juǎnr", "juǎ", "juàn", "juán"], correct: "juǎnr", explanation: "點心「卷」讀第三聲，加兒化。" },
      { question: "「衣服」的「服」在「逛商場」一課中讀？", options: ["輕聲", "二聲", "四聲", "三聲"], correct: "輕聲", explanation: "衣服的「服」是典型的輕聲詞。" },
      { question: "「前邊兒」中的兒化韻拼音是？", options: ["bianr", "bian er", "biar", "binr"], correct: "bianr", explanation: "拼音中直接在原韻母後加 r。" },
      { question: "「紙老虎」正確變調後讀音像？", options: ["直老虎", "指老虎", "之老虎", "止老虎"], correct: "直老虎", explanation: "連讀時前兩個字「紙老」都變調。" },
      { question: "「兒化韻」主要能讓語言聽起來？", options: ["親切活潑", "嚴肅莊重", "非常有理", "沒有感情"], correct: "親切活潑", explanation: "兒化韻帶有可愛、親切的口語感！" }
    ]
  }
};
