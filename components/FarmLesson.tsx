
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

      {/* 核心詞彙圖鑒 (保留原始詞彙) */}
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

      {/* 音調電梯視覺化 (使用文字描述) */}
      <section className="relative z-10 bg-emerald-700 text-white rounded-[5rem] p-12 shadow-2xl border-8 border-white overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 text-[20rem] opacity-5 font-black group-hover:scale-110 transition-transform">🛗</div>
        <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
           <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-9xl shadow-2xl animate-bounce">🛗</div>
           <div className="flex-1 text-center lg:text-left">
              <h4 className="text-4xl font-black mb-8 underline decoration-emerald-400 decoration-wavy">聲音電梯大作戰</h4>
              <p className="text-2xl font-bold leading-relaxed mb-10 bg-emerald-800/50 p-6 rounded-3xl border border-white/10">
                 {data.tone_explanation.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {data.tone_explanation.marks.map((m, i) => (
                    <div key={i} className="bg-white/10 p-6 rounded-3xl border-2 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                       <span className="text-4xl font-black text-yellow-300 block mb-3">{m.num}</span>
                       <span className="text-lg opacity-95 font-medium leading-tight block">{m.desc}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 第三聲變調攻略清單 (補全拼音) */}
      <section className="relative z-10 bg-white rounded-[5rem] p-12 border-8 border-green-50 shadow-2xl">
        <h3 className="text-4xl font-black text-green-800 mb-12 flex items-center justify-center text-center">
          <span className="bg-green-100 p-4 rounded-full mr-5 shadow-inner">🎼</span> 第三聲變調全攻略 (完整拼音示範)
        </h3>
        
        <div className="grid grid-cols-1 gap-12">
          {data.sandhi_detail.categories.map((cat, idx) => (
            <div key={idx} className="bg-green-50/50 rounded-[4rem] p-12 border-4 border-white shadow-xl hover:bg-green-50 transition-colors group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-[12rem] text-green-100 opacity-20 font-black group-hover:rotate-12 transition-transform">
                {idx + 1}
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 relative z-10">
                <div className="flex items-center">
                   <div className="w-20 h-20 bg-green-500 text-white rounded-[2.5rem] flex items-center justify-center text-4xl font-black shadow-lg mr-8 group-hover:scale-110 transition-transform">
                     {idx + 1}
                   </div>
                   <div>
                     <h4 className="text-3xl font-black text-green-800 mb-2">{cat.title}</h4>
                     <p className="text-green-600 font-bold text-xl">{cat.rule}</p>
                   </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {cat.examples.map((ex, ei) => (
                  <div key={ei} className="bg-white p-6 rounded-[2.5rem] border-2 border-green-100 shadow-sm flex flex-col items-center hover:border-green-400 transition-all hover:-translate-y-2 cursor-default group/item">
                    <span className="font-black text-2xl text-gray-800 mb-2 group-hover/item:text-green-600">{ex.w}</span>
                    <span className="text-sm font-black text-green-400 font-mono bg-green-50 px-3 py-1 rounded-full">{ex.p}</span>
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
              要是我們不肯定詞語是不是變調或輕聲，<br/>
              最保險的方法是查詞典確認讀音喔！📚✨
            </p>
          </div>
        </div>
      </section>

      {/* 挑戰按鈕 */}
      <div className="flex justify-center mt-20 relative z-10">
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
