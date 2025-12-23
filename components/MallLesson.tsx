
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
      {/* 裝飾 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        <i className="fas fa-shopping-cart absolute top-40 right-10 text-[10rem] rotate-12"></i>
      </div>

      {/* 豪華商場頭部 */}
      <div className="relative z-10 h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-[4rem] flex flex-col items-center justify-center text-white shadow-2xl border-8 border-white overflow-hidden">
        <div className="text-[10rem] mb-4 floating sticker-shadow">🛍️</div>
        <h2 className="text-6xl font-black italic tracking-tighter drop-shadow-xl">繽紛商場大搜索</h2>
        <div className="mt-4 bg-white/20 px-8 py-2 rounded-full backdrop-blur-md border border-white/30 text-xl font-bold">
           尋找「雙音節詞」與「輕聲詞」✨
        </div>
      </div>

      {/* 百科全書：什麼是雙音節詞 */}
      <section className="relative z-10 bg-indigo-700 text-white rounded-[4rem] p-12 shadow-2xl border-8 border-white group overflow-hidden">
        <div className="absolute top-0 right-0 p-12 text-[15rem] opacity-10 group-hover:rotate-12 transition-transform">📚</div>
        <div className="relative z-10">
          <h3 className="text-4xl font-black mb-6 flex items-center">
            <span className="bg-white text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-2xl">?</span>
            {data.definitions.disyllabic_title}
          </h3>
          <div className="space-y-6">
            <p className="text-2xl font-bold leading-relaxed bg-white/10 p-8 rounded-[3rem] backdrop-blur-sm border border-white/20">
              {data.definitions.disyllabic_desc}
            </p>
            <div className="flex items-start space-x-4 bg-yellow-400/90 text-indigo-900 p-6 rounded-[2.5rem] shadow-lg">
              <span className="text-4xl">💡</span>
              <p className="text-xl font-black italic">{data.definitions.disyllabic_example}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 購物清單 */}
      <section className="relative z-10 bg-white rounded-[3.5rem] p-12 shadow-2xl border-b-[16px] border-blue-100">
        <h3 className="text-3xl font-black text-blue-700 mb-10 flex items-center">
          <span className="bg-blue-100 p-3 rounded-full mr-4 shadow-sm animate-bounce">📦</span> 今日購物清單 (核心詞彙)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.core_vocab.map((v, i) => (
            <div key={i} className="group relative bg-blue-50 border-4 border-dashed border-blue-200 p-6 rounded-3xl hover:bg-white transition-all transform hover:rotate-2 hover:scale-105 cursor-pointer">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
              <div className="text-5xl mb-4 text-center">{v.emoji}</div>
              <div className="text-2xl font-black text-gray-800 text-center">{v.word}</div>
              <div className="text-[12px] text-blue-400 font-black font-mono text-center mt-1">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 樓層專櫃 */}
      <section className="relative z-10 space-y-12">
        <div className="text-center">
           <h3 className="text-4xl font-black text-indigo-800 inline-block px-10 py-4 bg-indigo-50 rounded-full border-4 border-indigo-100 shadow-sm">
             輕聲詞專賣店 💎 樓層指南
           </h3>
           <p className="mt-4 text-indigo-500 font-bold text-lg">💡 輕聲詞讀起來要「輕快、短促」，拼音不標調喔！</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.qingsheng_categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-8 shadow-xl border-4 border-indigo-50 hover:border-indigo-300 transition-all group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 text-9xl text-indigo-50 group-hover:text-indigo-100 transition-colors -rotate-12 font-black">
                 {idx + 1}
              </div>
              <h4 className="text-2xl font-black text-indigo-600 mb-6 pb-2 border-b-4 border-indigo-50">
                {cat.type}
              </h4>
              <div className="flex flex-wrap gap-4 relative z-10">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="bg-indigo-50 px-5 py-3 rounded-2xl border-2 border-indigo-100 shadow-sm flex flex-col items-center group-hover:bg-white transition-colors">
                    <span className="font-black text-xl text-gray-700">{item.w}</span>
                    <span className="text-xs font-black text-indigo-400 font-mono mt-1">{item.p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 挑戰按鈕 */}
      <div className="flex justify-center mt-20 relative z-10">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-20 py-10 rounded-[4rem] font-black text-5xl shadow-[0_25px_50px_rgba(59,130,246,0.3)] transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-8 group border-b-[12px] border-indigo-800 sticker-shadow"
        >
          <span className="group-hover:animate-wiggle">🛒 百貨大挑戰</span>
          <i className="fas fa-shopping-bag text-yellow-300"></i>
        </button>
      </div>
    </div>
  );
};

export default MallLesson;
