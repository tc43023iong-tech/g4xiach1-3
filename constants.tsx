
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
    quiz: [
      { id: 1, question: "「普洱」的「洱」是什麼音節？", options: ["自成音節", "配聲母音節", "輕聲音節", "兒化音節"], correct: "自成音節", explanation: "er 永遠自成音節，前面不會有聲母。" },
      { id: 2, question: "兒化韻中，「杏仁兒」的拼音會發生什麼變化？", options: ["末尾 n 脫落", "結尾加 ng", "聲調變輕聲", "沒有變化"], correct: "末尾 n 脫落", explanation: "結尾是 n 或 i 的詞兒化時，尾音通常會脫落。" },
      { id: 3, question: "「春卷兒」的拼音末尾應加上哪個字母？", options: ["r", "e", "n", "i"], correct: "r", explanation: "兒化韻在拼音末尾直接加 r。" },
      { id: 4, question: "特殊韻母 er 前面能否加上聲母？", options: ["永遠不可以", "可以加 d", "可以加 n", "有時可以"], correct: "永遠不可以", explanation: "er 前面絕不跟聲母朋友牽手。" },
      { id: 5, question: "朗讀兒化韻時，最重要的動作是？", options: ["舌尖向上捲起", "閉緊嘴唇", "舌頭放平", "牙齒扣緊"], correct: "舌尖向上捲起", explanation: "兒化韻的特徵就是那個捲舌的動作。" },
      { id: 6, question: "「普洱茶」的「洱」標註幾聲？", options: ["第三聲", "第一聲", "第二聲", "第四聲"], correct: "第三聲", explanation: "洱 (ěr) 是第三聲。" },
      { id: 7, question: "「一碟兒」點心的「碟」兒化後字音是否改變？", options: ["不變", "會改變", "變輕聲", "變三聲"], correct: "不變", explanation: "結尾是 e 的字兒化後字音通常不變。" },
      { id: 8, question: "「瓜子兒」的兒化規律屬於？", options: ["韻母變異", "捲舌不變", "韻尾脫落", "鼻音化"], correct: "韻母變異", explanation: "某些字兒化後韻母會發生改變。" },
      { id: 9, question: "下列哪個詞語帶有兒化韻？", options: ["冰棍兒", "叉燒包", "普洱", "腸粉"], correct: "冰棍兒", explanation: "冰棍兒結尾有『兒』並讀作捲舌音。" },
      { id: 10, question: "「香腸兒」的拼音是？", options: ["xiāng chángr", "xiāng cháng er", "xiāng chár", "xiāng chánr"], correct: "xiāng chángr", explanation: "正確標註是在 cháng 後面直接加 r。" },
      { id: 11, question: "「豆芽兒」讀起來舌頭應該？", options: ["順勢捲起", "向下拉伸", "保持不動", "頂住上顎"], correct: "順勢捲起", explanation: "捲舌是兒化韻的精髓。" },
      { id: 12, question: "「er」作為特殊韻母，它能自成音節嗎？", options: ["能", "不能", "必須加聲母", "只能讀輕聲"], correct: "能", explanation: "它就是因為能自成音節才特殊喔。" },
      { id: 13, question: "「數字二」的拼音是？", options: ["èr", "ér", "ēr", "ěr"], correct: "èr", explanation: "二讀作第四聲。" },
      { id: 14, question: "「麵條兒」的拼音後綴是？", options: ["r", "n", "ng", "er"], correct: "r", explanation: "兒化韻的拼音標誌就是末尾的 r。" },
      { id: 15, question: "茶樓裡的「香片」是哪種發音練習？", options: ["一般發音", "兒化韻", "特殊韻母", "輕聲"], correct: "一般發音", explanation: "香片 (xiāng piàn) 是一般的聲韻配合。" },
      { id: 16, question: "「兒子」的「兒」標註幾聲？", options: ["第二聲", "第三聲", "第一聲", "第四聲"], correct: "第二聲", explanation: "兒 (ér) 是第二聲。" },
      { id: 17, question: "下列哪個詞語兒化後字音會改變？", options: ["瓜子兒", "香腸兒", "一碟兒", "麵條兒"], correct: "瓜子兒", explanation: "「子」兒化後韻母會變異。" },
      { id: 18, question: "特殊韻母 er 又被稱為什麼？", options: ["自成音節韻母", "輕聲韻母", "鼻韻母", "合口呼韻母"], correct: "自成音節韻母", explanation: "因為它不需要聲母就能發音。" },
      { id: 19, question: "「耳朵」的「耳」拼音是？", options: ["ěr", "er", "ér", "èr"], correct: "ěr", explanation: "耳是第三聲。" },
      { id: 20, question: "兒化韻在普通話中主要是為了？", options: ["使語言活潑、親切", "增加發音難度", "區分男女聲", "沒有特別作用"], correct: "使語言活潑、親切", explanation: "兒化韻能讓說話聽起來更親切自然。" }
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
      disyllabic_desc: "「音節」就像是說話的一個個拍子。一個字通常就是一個音節。「雙音節詞」就是由『兩個漢字』組成的好朋友詞語！",
      disyllabic_example: "例子：『衣服』、『熱鬧』、『故事』。這課學的大部分詞語都是雙音節詞喔！"
    },
    qingsheng_categories: [
      {
        type: '1. 語氣詞 🗣️',
        items: [{ w: '來吧！', p: 'lái ba' }, { w: '好嗎？', p: 'hǎo ma' }]
      },
      {
        type: '2. 助詞 🖇️',
        items: [{ w: '你的', p: 'nǐ de' }, { w: '拿了', p: 'ná le' }]
      },
      {
        type: '3. 名詞的後綴 🏷️',
        items: [{ w: '男孩子', p: 'nán hái zi' }, { w: '石頭', p: 'shí tou' }]
      },
      {
        type: '4. 方位詞 🧭',
        items: [{ w: '桌上', p: 'zhuō shang' }, { w: '前邊兒', p: 'qián bianr' }]
      },
      {
        type: '5. 重疊詞 👥',
        items: [{ w: '看看', p: 'kàn kan' }, { w: '逛逛', p: 'guàng guang' }, { w: '弟弟', p: 'dì di' }, { w: '媽媽', p: 'mā ma' }]
      },
      {
        type: '6. 雙音節詞 (特定) ✨',
        items: [{ w: '熱鬧', p: 'rè nao' }, { w: '故事', p: 'gù shi' }, { w: '衣服', p: 'yī fu' }, { w: '喜歡', p: 'xǐ huan' }]
      }
    ],
    quiz: [
      { id: 21, question: "「雙音節詞」是指由幾個字組成的詞？", options: ["兩個", "一個", "三個", "四個"], correct: "兩個", explanation: "雙代表二，所以是兩個音節。" },
      { id: 22, question: "輕聲讀法有什麼特點？", options: ["輕而短", "重而長", "聲音很大", "沒有聲音"], correct: "輕而短", explanation: "輕聲不標調，讀得短促輕快。" },
      { id: 23, question: "「好嗎？」中的「嗎」屬於哪類輕聲？", options: ["語氣詞", "助詞", "方位詞", "名詞後綴"], correct: "語氣詞", explanation: "放在句尾表達疑問語氣。" },
      { id: 24, question: "「看看」這個重疊詞，哪個字讀輕聲？", options: ["第二個字", "第一個字", "兩個都是", "兩個都不是"], correct: "第二個字", explanation: "重疊動詞或名詞的末一個音節讀輕聲。" },
      { id: 25, question: "下列哪個詞語包含名詞後綴輕聲？", options: ["男孩子", "逛逛", "你的", "桌上"], correct: "男孩子", explanation: "「子」是名詞的後綴，常讀輕聲。" },
      { id: 26, question: "「桌上」中的「上」屬於哪種輕聲？", options: ["方位詞", "語氣詞", "助詞", "重疊詞"], correct: "方位詞", explanation: "表示方位的詞讀輕聲。" },
      { id: 27, question: "「熱鬧」這個詞中，哪個音節讀輕聲？", options: ["鬧", "熱", "都是", "都不是"], correct: "鬧", explanation: "「熱鬧」的第二個音節讀輕聲。" },
      { id: 28, question: "輕聲在拼音中如何標註聲調？", options: ["不標調", "標一聲", "標四聲", "標原調"], correct: "不標調", explanation: "輕聲音節不需要標註聲調符號。" },
      { id: 29, question: "「弟弟」屬於哪一類輕聲？", options: ["重疊名詞", "重疊動詞", "方位詞", "語氣詞"], correct: "重疊名詞", explanation: "親屬稱謂的重疊常讀輕聲。" },
      { id: 30, question: "「石頭」的「頭」發音特點是？", options: ["輕而短", "重而響", "加個 r", "標二聲"], correct: "輕而短", explanation: "名詞後綴「頭」在石頭中讀輕聲。" },
      { id: 31, question: "「來吧！」中的「吧」是？", options: ["語氣詞", "助詞", "方位詞", "輕聲名詞"], correct: "語氣詞", explanation: "放在句末，讀輕聲。" },
      { id: 32, question: "「故事」這個詞正確的拼音是？", options: ["gù shi", "gù shì", "gu shi", "gǔ shi"], correct: "gù shi", explanation: "故事的「事」讀輕聲。" },
      { id: 33, question: "「衣服」的「服」在普通話中讀？", options: ["輕聲", "二聲", "四聲", "一聲"], correct: "輕聲", explanation: "某些雙音節詞第二音節讀輕聲。" },
      { id: 34, question: "「拿了」中的「了」是什麼詞？", options: ["助詞", "語氣詞", "方位詞", "動詞"], correct: "助詞", explanation: "動詞後的助詞讀輕聲。" },
      { id: 35, question: "「前邊兒」是一個方位詞，它同時帶有？", options: ["兒化韻", "重疊音", "二聲變調", "四聲"], correct: "兒化韻", explanation: "前邊兒包含了兒化 (r)。" },
      { id: 36, question: "如果不確定一個詞是否讀輕聲，最好的方法是？", options: ["查詞典確認", "大聲喊出來", "問同學", "隨便讀"], correct: "查詞典確認", explanation: "詞典有最準確的讀音標註。" },
      { id: 37, question: "「喜歡」的「歡」讀作？", options: ["輕聲", "一聲", "三聲", "二聲"], correct: "輕聲", explanation: "喜歡的「歡」讀輕聲。" },
      { id: 38, question: "下列哪組全是輕聲詞？", options: ["媽媽、看看", "書店、減價", "魔法、童裝", "美食、廣場"], correct: "媽媽、看看", explanation: "重疊詞的後一個字讀輕聲。" },
      { id: 39, question: "「書店」是雙音節詞嗎？", options: ["是", "不是", "三音節", "四音節"], correct: "是", explanation: "由兩個字組成的詞即是雙音節詞。" },
      { id: 40, question: "在商場看到「減價」，它的拼音標註聲調嗎？", options: ["兩個都標", "都不標", "只標第一個", "只標第二個"], correct: "兩個都標", explanation: "減價不是輕聲詞，要完整標調。" }
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
    tone_explanation: {
      intro: "想像聲音在走電梯！1 樓是最低音，5 樓是最高音：",
      marks: [
        { num: "全三聲", desc: "電梯從 2 樓降到 1 樓，再反彈回到 4 樓（完整動作）。" },
        { num: "半三聲", desc: "電梯從 2 樓降到 1 樓就停住了，不再升上去（動作做一半）。" },
        { num: "變讀第二聲", desc: "電梯從 3 樓直接衝向 5 樓，像坐火箭一樣（變聲了）。" }
      ]
    },
    sandhi_detail: {
      categories: [
        {
          title: "1. 唸全三聲 🪜",
          rule: "當第三聲字在詞語最後面（詞尾）時：",
          examples: [
            { w: "農場", p: "nóng chǎng" },
            { w: "星期五", p: "xīng qī wǔ" },
            { w: "鸚鵡", p: "yīng wǔ" },
            { w: "風景", p: "fēng jǐng" }
          ]
        },
        {
          title: "2. 唸半三聲 📉",
          rule: "三聲字在前面，後面跟著 1, 2, 4 聲（非三聲）字時：",
          examples: [
            { w: "很多", p: "hěn duō" },
            { w: "比如", p: "bǐ rú" },
            { w: "講話", p: "jiǎng huà" },
            { w: "喜歡", p: "xǐ huan" }
          ]
        },
        {
          title: "3. 變第二聲 🚀",
          rule: "兩個三聲字手牽手相連時，前面的字要：",
          examples: [
            { w: "本土", p: "běn tǔ → bén tǔ" },
            { w: "哺乳", p: "bǔ rǔ → bú rǔ" }
          ]
        },
        {
          title: "4. 三字連讀變調 🧩",
          rule: "三個三聲字在一起時的讀法：",
          examples: [
            { w: "展覽館", p: "zhán lán guǎn" },
            { w: "小拇指", p: "xiáo mú zhǐ" },
            { w: "水彩筆", p: "shuí cái bǐ" },
            { w: "紙老虎", p: "zhí láo hǔ" }
          ]
        }
      ]
    },
    quiz: [
      { id: 41, question: "「農場」的「場」在詞尾，正確讀法是？", options: ["唸全三聲", "唸半三聲", "變讀第二聲", "讀輕聲"], correct: "唸全三聲", explanation: "三聲字在詞尾時要發出完整的降升調。" },
      { id: 42, question: "「很多」的「很」後面接一聲字，應如何變調？", options: ["變讀半三聲", "唸全三聲", "變讀第二聲", "讀輕聲"], correct: "變讀半三聲", explanation: "三聲接非三聲字，前面變半三聲。" },
      { id: 43, question: "兩個三聲字相連時（如「本土」），前面的字應？", options: ["變讀為第二聲", "唸全三聲", "變讀半三聲", "變輕聲"], correct: "變讀為第二聲", explanation: "三聲字相連，前字變調為升調的第二聲。" },
      { id: 44, question: "「展覽館」有三個三聲字連讀，聽起來最像？", options: ["前兩個字都變調", "只有最後一個變", "三個都不變", "變輕聲"], correct: "前兩個字都變調", explanation: "三字相連時，通常前兩個會發生變身。" },
      { id: 45, question: "「比如」中的「比」接在二聲前，應唸？", options: ["半三聲", "全三聲", "第二聲", "一聲"], correct: "半三聲", explanation: "3+2 組合，前字變半三聲。" },
      { id: 46, question: "「講話」的「講」接在四聲前，應唸？", options: ["半三聲", "全三聲", "第二聲", "輕聲"], correct: "半三聲", explanation: "3+4 組合，前字變半三聲。" },
      { id: 47, question: "「嘉道理農場」的「場」讀作？", options: ["全三聲", "半三聲", "第二聲", "輕聲"], correct: "全三聲", explanation: "三聲字在詞尾或單讀時唸全三聲。" },
      { id: 48, question: "「哺乳」這類兩個三聲相連的詞，第一個字聽起來像？", options: ["第二聲", "半三聲", "全三聲", "一聲"], correct: "第二聲", explanation: "bǔ rǔ 讀起來像 bú rǔ。" },
      { id: 49, question: "「星期五」的「五」處在詞尾，應唸？", options: ["全三聲", "半三聲", "第二聲", "輕聲"], correct: "全三聲", explanation: "詞尾三聲字不變調，唸全音。" },
      { id: 50, question: "下列哪個詞語的前字要唸「半三聲」？", options: ["喜歡 (xǐ huan)", "本土 (běn tǔ)", "展覽館", "鸚鵡"], correct: "喜歡 (xǐ huan)", explanation: "三聲接非三聲字（或輕聲），變半三聲。" },
      { id: 51, question: "「鸚鵡」的「鵡」讀音規則與下列哪個相同？", options: ["風景", "很多", "比如", "本土"], correct: "風景", explanation: "它們都是詞尾三聲，唸全音。" },
      { id: 52, question: "當三聲字單獨唸一個字時（如『我』），要讀？", options: ["全三聲", "半三聲", "第二聲", "輕聲"], correct: "全三聲", explanation: "單讀必須唸完整三聲調。" },
      { id: 53, question: "「小拇指」的正確讀音規律是？", options: ["變調為第二聲+第二聲+三聲", "唸全三聲", "唸半三聲", "變輕聲"], correct: "變調為第二聲+第二聲+三聲", explanation: "三字連讀變調範例。" },
      { id: 54, question: "「豹貓」的「貓」是幾聲？", options: ["第一聲", "第二聲", "第三聲", "第四聲"], correct: "第一聲", explanation: "貓 (māo) 是第一聲。" },
      { id: 55, question: "「風景」的「景」標註什麼讀法？", options: ["唸全三聲", "變調半三聲", "變調二聲", "輕聲"], correct: "唸全三聲", explanation: "三聲字在詞尾，要唸全三聲。" },
      { id: 56, question: "「溫室」中的「溫」拼音是？", options: ["wēn", "wèn", "wěn", "wén"], correct: "wēn", explanation: "溫是第一聲。" },
      { id: 57, question: "「野豬」的「野」接在第一聲前，應唸？", options: ["半三聲", "全三聲", "第二聲", "輕聲"], correct: "半三聲", explanation: "3+1 組合，變半三聲。" },
      { id: 58, question: "「水彩筆」的連讀變調聽起來最像？", options: ["shuí cái bǐ", "shuǐ cǎi bǐ", "shuì cài bǐ", "shui cai bi"], correct: "shuí cái bǐ", explanation: "三字相連時的前兩字變調。" },
      { id: 59, question: "「笑話」在本課中「話」讀？", options: ["輕聲", "四聲", "一聲", "三聲"], correct: "輕聲", explanation: "笑話的『話』在口語中常讀輕聲。" },
      { id: 60, question: "「紙老虎」的「紙」讀音如何變化？", options: ["變讀為第二聲", "唸全三聲", "唸半三聲", "唸一聲"], correct: "變讀為第二聲", explanation: "三字連讀，前兩個三聲字都要變調。" }
    ]
  },
  [LessonType.CRAZY_MIX]: {
    title: '終極挑戰：20題大闖關 🏆',
    icon: '⚡',
    themeColor: 'purple',
    color: 'bg-purple-50 border-purple-200',
    btnColor: 'bg-purple-500',
    accent: 'text-purple-600',
    quiz: [
      { id: 61, question: "「特殊韻母 er」在單詞開頭能否有聲母？", options: ["永遠沒有", "有時有", "一定要有", "只有 d 聲母"], correct: "永遠沒有", explanation: "er 永遠自成音節。" },
      { id: 62, question: "下列哪個詞語讀音包含輕聲？", options: ["熱鬧", "減價", "野豬", "風景"], correct: "熱鬧", explanation: "熱鬧的『鬧』讀輕聲。" },
      { id: 63, question: "「普洱」的「洱」標註第幾聲？", options: ["第三聲", "第二聲", "第四聲", "第一聲"], correct: "第三聲", explanation: "洱 (ěr) 是第三聲。" },
      { id: 64, question: "兩個三聲相連（如「本土」），第一個字應唸？", options: ["變讀第二聲", "唸全三聲", "唸半三聲", "唸輕聲"], correct: "變讀第二聲", explanation: "3+3 變調規則。" },
      { id: 65, question: "兒化韻拼音是在末尾加上哪個字母？", options: ["r", "e", "n", "i"], correct: "r", explanation: "拼音標誌就是末尾加 r。" },
      { id: 66, question: "「前邊兒」是一個？", options: ["帶兒化韻的方位詞", "輕聲詞", "特殊韻母詞", "普通雙音節詞"], correct: "帶兒化韻的方位詞", explanation: "包含了方位與兒化。" },
      { id: 67, question: "下列哪類詞語第二音節常讀輕聲？", options: ["重疊動詞", "兒化韻", "特殊韻母", "三聲變調"], correct: "重疊動詞", explanation: "如『看看』、『聽聽』。" },
      { id: 68, question: "「農場」的「場」在詞尾唸什麼？", options: ["全三聲", "半三聲", "變讀第二聲", "輕聲"], correct: "全三聲", explanation: "詞尾三聲不變調。" },
      { id: 69, question: "「杏仁兒」兒化時，拼音中的哪個字母會脫落？", options: ["n", "i", "e", "u"], correct: "n", explanation: "n 結尾韻母兒化會脫落。" },
      { id: 70, question: "「數字二」拼音 èr，它屬於？", options: ["特殊韻母 er 的音節", "兒化韻", "輕聲", "鼻韻母"], correct: "特殊韻母 er 的音節", explanation: "er 的自成音節形式。" },
      { id: 71, question: "「看看」的第二個音節正確發音是？", options: ["輕而短", "重而響", "發鼻音", "捲舌"], correct: "輕而短", explanation: "重疊詞後半讀輕聲。" },
      { id: 72, question: "「比如」的「比」應唸？", options: ["半三聲", "全三聲", "變讀第二聲", "一聲"], correct: "半三聲", explanation: "3+2 組合，前字變半三。" },
      { id: 73, question: "「嘉道理農場」的「道理」是什麼讀音？", options: ["一般發音", "輕聲", "兒化", "特殊韻母"], correct: "一般發音", explanation: "注意聲調標註即可。" },
      { id: 74, question: "「拿了」中的「了」是什麼詞性？", options: ["助詞", "動詞", "名詞", "代詞"], correct: "助詞", explanation: "助詞讀輕聲。" },
      { id: 75, question: "「展覽館」的三字變調規律與下列哪個相同？", options: ["小拇指", "農場", "書店", "普洱"], correct: "小拇指", explanation: "都是三字連讀變調。" },
      { id: 76, question: "兒化韻「冰棍兒」屬於哪種發音變化？", options: ["末尾 n 脫落", "完全不變", "聲母消失", "變輕聲"], correct: "末尾 n 脫落", explanation: "gùn 兒化後變 gùnr (n消失)。" },
      { id: 77, question: "「男孩子」的「子」屬於？", options: ["名詞後綴", "語氣詞", "助詞", "重疊詞"], correct: "名詞後綴", explanation: "名詞後綴常讀輕聲。" },
      { id: 78, question: "「風景」的「景」在詞尾？", options: ["唸全三聲", "唸半三聲", "變讀第二聲", "唸一聲"], correct: "唸全三聲", explanation: "三聲字單讀或詞尾唸全調。" },
      { id: 79, question: "下列哪種茶的「洱」是特殊韻母？", options: ["普洱", "香片", "鐵觀音", "龍井"], correct: "普洱", explanation: "普洱的洱 (ěr) 是特殊韻母。" },
      { id: 80, question: "普通話中「音節」的基本含義是？", options: ["一個漢字的讀音", "一個句子的長度", "說話的音量", "拼音字母的數量"], correct: "一個漢字的讀音", explanation: "一個漢字通常就是一個音節。" }
    ]
  }
};
