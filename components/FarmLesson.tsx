
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const FarmLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.FARM];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.FARM} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-12 pb-24 animate-fadeIn relative px-4">
      {/* 豪華農場頭部 */}
      <div className="relative z-10 h-80 bg-gradient-to-br from-green-300 via-green-500 to-emerald-600 rounded-[5rem] flex flex-col items-center justify-center text-white shadow-[0_25px_60px_rgba(16,185,129,0.4)] border-8 border-white sticker-shadow">
        <div className="text-[10rem] mb-4 floating sticker-shadow">🐗</div>
        <h2 className="text-6xl font-black drop-shadow-2xl italic tracking-tighter text-center px-4">嘉道理農場大冒險</h2>
        <div className="mt-4 bg-white/20 px-8 py-2 rounded-full backdrop-blur-md border border-white/30 font-bold">
           探索自然森林 🐾 學習變調魔法
        </div>
      </div>

      {/* 核心詞彙圖鑒 */}
      <section className="relative z-10 bg-white rounded-[4rem] p-12 shadow-2xl border-b-[16px] border-green-100 group">
        <h3 className="text-3xl font-black text-green-700 mb-10 flex items-center">
          <span className="bg-green-100 p-3 rounded-full mr-4 shadow-sm animate-bounce">🦁</span> 奇妙生物與設施
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.core_vocab.map((v, i) => (
            <div key={i} className="bg-gradient-to-b from-green-50 to-white rounded-[3rem] p-6 text-center border-4 border-green-50 hover:border-green-300 transition-all group cursor-pointer hover:-translate-y-4 shadow-md">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">{v.emoji}</div>
              <div className="font-black text-2xl text-gray-800">{v.word}</div>
              <div className="text-[12px] text-green-500 font-black font-mono mt-2 tracking-widest">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 第三聲變調攻略清單 */}
      <section className="relative z-10 bg-white rounded-[5rem] p-12 border-8 border-green-50 shadow-2xl">
        <h3 className="text-4xl font-black text-green-800 mb-12 flex items-center justify-center text-center">
          <span className="bg-green-100 p-4 rounded-full mr-5 shadow-inner">🎼</span> 第三聲變調全攻略
        </h3>
        
        <div className="grid grid-cols-1 gap-12">
          {data.sandhi_detail.categories.map((cat, idx) => (
            <div key={idx} className="bg-green-50/50 rounded-[4rem] p-12 border-4 border-white shadow-xl hover:bg-green-50 transition-colors group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[12rem] text-green-100 opacity-20 font-black group-hover:rotate-12 transition-transform">
                {idx + 1}
              </div>
              <div className="mb-10 relative z-10">
                 <h4 className="text-3xl font-black text-green-800 mb-2">{cat.title}</h4>
                 <p className="text-green-600 font-bold text-xl">{cat.rule}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {cat.examples && cat.examples.map((ex, ei) => (
                  <div key={ei} className="bg-white p-6 rounded-[2.5rem] border-2 border-green-100 shadow-sm flex flex-col items-center hover:border-green-400 transition-all hover:-translate-y-2 cursor-default group/item">
                    <span className="font-black text-2xl text-gray-800 mb-2 group-hover/item:text-green-600">{ex.w}</span>
                    <span className="text-sm font-black text-green-400 font-mono bg-green-50 px-3 py-1 rounded-full">{ex.p}</span>
                  </div>
                ))}
                
                {cat.subsections && cat.subsections.map((sub, si) => (
                  <div key={si} className="col-span-full space-y-6">
                    <h5 className="text-2xl font-black text-emerald-600 border-l-8 border-emerald-500 pl-4">{sub.name}</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {sub.items.map((ex, ei) => (
                        <div key={ei} className="bg-white p-6 rounded-[2.5rem] border-2 border-green-100 shadow-sm flex flex-col items-center hover:border-green-400 transition-all hover:-translate-y-2">
                          <span className="font-black text-2xl text-gray-800 mb-2">{ex.w}</span>
                          <span className="text-sm font-black text-green-400 font-mono bg-green-50 px-3 py-1 rounded-full">{ex.p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-100 p-10 rounded-[4rem] border-4 border-dashed border-orange-400 flex flex-col md:flex-row items-center gap-10 shadow-xl">
          <div className="text-9xl animate-wiggle">💡</div>
          <div>
            <h5 className="text-3xl font-black text-orange-900 mb-4">小探險家筆記：</h5>
            <p className="text-2xl text-orange-800 font-bold leading-relaxed">
              有些三聲字連續出現時，讀音會變得像第二聲一樣往上揚喔！<br/>
              比如「本土」聽起來會像「笨土」嗎？不對，是「bén tǔ」！✨
            </p>
          </div>
        </div>
      </section>

      {/* 挑戰按鈕 */}
      <div className="flex justify-center mt-20 relative z-10">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-20 py-10 rounded-[4rem] font-black text-5xl shadow-2xl hover:scale-110 transition-all border-b-[12px] border-green-800 sticker-shadow"
        >
          🏆 森林大挑戰
        </button>
      </div>
    </div>
  );
};

export default FarmLesson;
