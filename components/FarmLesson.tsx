
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
      {/* 森林漂浮裝飾 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {[...Array(12)].map((_, i) => (
           <div key={i} className="absolute text-5xl opacity-20 floating-slow" 
                style={{ top: `${i*15}%`, left: `${(i%3)*40}%`, animationDelay: `${i*0.4}s` }}>
             {['🍃', '🌿', '🌸', '🌲', '🦋'][i%5]}
           </div>
         ))}
      </div>

      {/* 豪華農場頭部 */}
      <div className="relative z-10 h-72 bg-gradient-to-br from-green-300 via-green-500 to-emerald-600 rounded-[5rem] flex flex-col items-center justify-center text-white shadow-[0_25px_60px_rgba(16,185,129,0.4)] border-8 border-white sticker-shadow">
        <div className="text-[10rem] mb-4 floating sticker-shadow">🐗</div>
        <h2 className="text-6xl font-black drop-shadow-2xl italic tracking-tighter">嘉道理農場大冒險</h2>
        <div className="mt-4 bg-white/20 px-8 py-2 rounded-full backdrop-blur-md border border-white/30 font-bold">
           探索自然森林 🐾 學習語音規律
        </div>
      </div>

      {/* 生物百科圖鑒 */}
      <section className="relative z-10 bg-white rounded-[4rem] p-12 shadow-2xl border-b-[16px] border-green-100 group">
        <h3 className="text-3xl font-black text-green-700 mb-10 flex items-center">
          <span className="bg-green-100 p-3 rounded-full mr-4 shadow-sm animate-bounce">🦁</span> 奇妙生物圖鑒
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {data.vocab.map((v) => (
            <div key={v.word} className="bg-gradient-to-b from-green-50 to-white rounded-[3rem] p-6 text-center border-4 border-green-50 hover:border-green-300 transition-all group cursor-pointer hover:-translate-y-4 shadow-md hover:shadow-2xl">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">{v.emoji}</div>
              <div className="font-black text-2xl text-gray-800">{v.word}</div>
              <div className="text-[12px] text-green-500 font-black font-mono mt-2 tracking-widest">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 第三聲變調大變身 - 階梯式詳解 */}
      <section className="relative z-10 bg-white rounded-[5rem] p-12 border-8 border-green-50 shadow-2xl">
        <h3 className="text-4xl font-black text-green-800 mb-12 flex items-center justify-center">
          <span className="bg-green-100 p-4 rounded-full mr-5 shadow-inner">🎼</span> 第三聲變調全攻略
        </h3>
        
        <div className="grid grid-cols-1 gap-10">
          {data.sandhi_detail.categories.map((cat, idx) => (
            <div key={idx} className="bg-green-50/50 rounded-[4rem] p-10 border-4 border-white shadow-xl hover:bg-green-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center">
                   <div className="w-16 h-16 bg-green-500 text-white rounded-[2rem] flex items-center justify-center text-3xl font-black shadow-lg mr-6">
                     {idx + 1}
                   </div>
                   <div>
                     <h4 className="text-3xl font-black text-green-800">{cat.title}</h4>
                     <p className="text-green-600 font-bold mt-1">規則：{cat.rule}</p>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {cat.examples.map((ex, ei) => (
                  <div key={ei} className="bg-white px-6 py-4 rounded-[2.5rem] border-2 border-green-100 shadow-sm flex items-center space-x-3 group hover:scale-110 transition-transform">
                     <span className="font-black text-2xl text-gray-700 group-hover:text-green-600">{ex.w}</span>
                     <span className="text-sm font-black text-green-400 font-mono bg-green-50 px-3 py-1 rounded-full">
                       {ex.p}
                     </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 特別提示貼紙 */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-orange-100 p-12 rounded-[5rem] border-4 border-dashed border-orange-400 flex flex-col md:flex-row items-center gap-10 shadow-xl relative overflow-hidden group">
          <div className="text-9xl group-hover:animate-wiggle z-10">🧩</div>
          <div className="z-10 text-center md:text-left">
            <h5 className="text-3xl font-black text-orange-900 mb-4">連環三聲的秘密：</h5>
            <p className="text-xl text-orange-800 font-bold leading-relaxed">
              像「展覽館」或「小拇指」，要把前面的字都變調喔！<br/>
              這是高級挑戰，只有最細心的小朋友才能掌握！✨
            </p>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl">💡</div>
        </div>
      </section>

      {/* 挑戰按鈕 */}
      <div className="flex justify-center mt-16 relative z-10">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-20 py-10 rounded-[4rem] font-black text-5xl shadow-[0_25px_50px_rgba(16,185,129,0.3)] transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-8 group border-b-[12px] border-green-800 sticker-shadow"
        >
          <span className="group-hover:animate-bounce">🏆 森林大挑戰</span>
          <i className="fas fa-crown text-yellow-300"></i>
        </button>
      </div>
    </div>
  );
};

export default FarmLesson;
