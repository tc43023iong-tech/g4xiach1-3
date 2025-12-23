
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const MallLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.SHOPPING_MALL];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.SHOPPING_MALL} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-16 animate-fadeIn pb-24 relative px-4">
      <div className="relative z-10 h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-[4rem] flex flex-col items-center justify-center text-white shadow-2xl border-8 border-white">
        <div className="text-[10rem] mb-4 floating sticker-shadow">🛍️</div>
        <h2 className="text-6xl font-black italic tracking-tighter drop-shadow-xl">第二課：逛商場 🛒</h2>
        <div className="mt-4 bg-white/20 px-8 py-2 rounded-full backdrop-blur-md border border-white/30 text-xl font-bold">
           尋找「雙音節詞」✨
        </div>
      </div>

      {/* 百科卡片 */}
      <section className="relative z-10 bg-indigo-700 text-white rounded-[4rem] p-12 shadow-2xl border-8 border-white group overflow-hidden">
        <h3 className="text-4xl font-black mb-6">{data.definitions.disyllabic_title}</h3>
        <p className="text-2xl font-bold leading-relaxed bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/20">
          {data.definitions.disyllabic_desc}
        </p>
        <div className="mt-6 bg-yellow-400 text-indigo-900 p-6 rounded-[2.5rem] font-black italic text-xl">
           💡 {data.definitions.disyllabic_example}
        </div>
      </section>

      {/* 購物清單 */}
      <section className="relative z-10 bg-white rounded-[3.5rem] p-12 shadow-2xl border-b-[16px] border-blue-100">
        <h3 className="text-3xl font-black text-blue-700 mb-10">📦 今日購物清單</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.core_vocab.map((v, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-3xl border-4 border-white shadow-sm text-center">
              <div className="text-5xl mb-4">{v.emoji}</div>
              <div className="text-2xl font-black text-gray-800">{v.word}</div>
              <div className="text-[12px] text-blue-400 font-black font-mono mt-1 uppercase">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 樓層專櫃 */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.qingsheng_categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-[3rem] p-8 shadow-xl border-4 border-indigo-50">
            <h4 className="text-2xl font-black text-indigo-600 mb-6">{cat.type}</h4>
            <div className="flex flex-wrap gap-4">
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-indigo-50 px-5 py-3 rounded-2xl border-2 border-indigo-100">
                  <span className="font-black text-xl text-gray-700">{item.w}</span>
                  <span className="block text-xs font-black text-indigo-400 font-mono">{item.p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 挑戰按鈕 */}
      <div className="flex justify-center mt-20 relative z-10">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-20 py-10 rounded-[4rem] font-black text-5xl shadow-2xl hover:scale-110 transition-all border-b-[12px] border-indigo-800"
        >
          🛒 百貨大挑戰
        </button>
      </div>
    </div>
  );
}

export default MallLesson;
