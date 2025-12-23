
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const TeaHouseLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.TEA_HOUSE];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.TEA_HOUSE} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-12 pb-20 animate-fadeIn relative">
      {/* Decorative Stickers */}
      <div className="absolute top-0 -left-10 text-6xl floating-slow sticker-shadow">🥡</div>
      <div className="absolute top-40 -right-10 text-6xl floating sticker-shadow delay-700">🥢</div>

      {/* 標題裝飾 */}
      <div className="text-center space-y-4 pt-10">
        <div className="inline-block relative">
          <div className="text-8xl floating mb-4 bg-white p-6 rounded-full shadow-2xl border-4 border-orange-200">🍵</div>
          <div className="absolute -bottom-2 -right-2 text-4xl">✨</div>
        </div>
        <h2 className="text-5xl font-black text-orange-600 tracking-wider italic">第一課：上茶樓學發音</h2>
        <div className="flex justify-center space-x-3">
          {['🥟', '🦐', '🥖', '🥯'].map((e, i) => (
            <span key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
          ))}
        </div>
      </div>

      {/* 點心單詞卡 - 可愛貼紙風 */}
      <section className="bg-white rounded-[3.5rem] p-10 shadow-2xl border-b-8 border-orange-200 relative">
        <div className="absolute -top-6 left-10 bg-orange-500 text-white px-6 py-2 rounded-full font-black shadow-lg">
          我的菜單 📋
        </div>
        <h3 className="text-3xl font-black text-orange-500 mb-8 flex items-center mt-4">
           <span className="bg-orange-100 p-2 rounded-full mr-3">🍱</span> 點心大集合
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {data.vocab.map((v) => (
            <div key={v.word} className="group bg-orange-50 border-4 border-orange-100 p-5 rounded-[2.5rem] hover:rotate-6 transition-all hover:scale-105 text-center shadow-sm hover:shadow-xl cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{v.emoji}</div>
              <div className="font-black text-xl text-gray-800">{v.word}</div>
              <div className="text-[12px] text-orange-400 font-black font-mono uppercase mt-1">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 兒化韻詳解 - 實驗室風 */}
      <section className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-[4rem] p-12 relative overflow-hidden border-4 border-white shadow-2xl">
        <div className="absolute top-0 right-0 opacity-10 text-[15rem] -rotate-12 transform translate-x-20 translate-y-20">👅</div>
        <h3 className="text-4xl font-black text-orange-800 mb-10 flex items-center">
          <span className="bg-white p-3 rounded-full mr-4 shadow-md">🧪</span> 兒化韻實驗室
        </h3>
        
        <p className="text-orange-900 font-bold mb-10 text-xl text-center bg-white/40 p-4 rounded-3xl">
          {data.erhua_detail.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {data.erhua_detail.rules.map((rule, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-orange-400 hover:-translate-y-2 transition-all relative group">
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-black text-white shadow-lg">
                {idx + 1}
              </div>
              <div className="text-2xl font-black text-orange-600 mb-3">{rule.title}</div>
              <p className="text-md text-gray-600 mb-6 font-medium leading-relaxed">{rule.desc}</p>
              <div className="bg-orange-50 p-4 rounded-2xl text-sm font-black text-orange-800 border-2 border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                例：{rule.example}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[3.5rem] p-8 border-4 border-white shadow-inner">
          <p className="font-black text-orange-900 mb-6 text-center text-xl">👇 讓我們來大聲朗讀吧！ (注意捲舌喔)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.erhua_list.map((item) => (
              <div key={item.word} className="bg-white p-6 rounded-[2rem] flex flex-col items-center shadow-lg border-2 border-orange-50 group hover:border-orange-300 transition-all">
                <span className="text-4xl mb-2 group-hover:animate-wiggle">{item.emoji}</span>
                <span className="font-black text-2xl text-gray-800">{item.word}</span>
                <span className="text-sm text-orange-500 font-black font-mono mt-1">{item.pinyin}</span>
                <span className="mt-3 text-[11px] bg-orange-400 text-white px-4 py-1 rounded-full font-black uppercase tracking-wider">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特殊韻母 er - 孤獨勇士 */}
      <section className="bg-white rounded-[4rem] p-12 shadow-2xl border-4 border-dashed border-orange-300 relative">
        <div className="absolute -top-10 -right-10 text-8xl opacity-10 floating">🛡️</div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5 text-center relative">
            <div className="text-[10rem] mb-4 sticker-shadow">🦸‍♂️</div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 px-4 py-1 rounded-full text-4xl font-black text-orange-600 border-4 border-orange-500">
              er
            </div>
            <h4 className="text-3xl font-black text-orange-700 mt-6">特殊韻母 er</h4>
          </div>
          <div className="w-full md:w-3/5 space-y-6">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-[3rem] shadow-xl">
              <p className="text-white font-black text-xl leading-relaxed">
                {data.er_special.rule}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.er_special.list.map(w => (
                <div key={w.word} className="bg-orange-50 p-5 rounded-[2rem] border-2 border-orange-100 shadow-sm flex items-center space-x-4 group hover:bg-white transition-colors">
                  <span className="text-3xl">{w.emoji}</span>
                  <div>
                    <div className="font-black text-2xl text-gray-800 group-hover:text-orange-600">{w.word}</div>
                    <div className="text-sm text-orange-400 font-bold">{w.context}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 開始挑戰按鈕 */}
      <div className="flex justify-center mt-16">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-16 py-8 rounded-[3rem] font-black text-4xl shadow-[0_15px_30px_rgba(249,115,22,0.4)] transform transition-all hover:scale-110 hover:-rotate-2 active:scale-95 flex items-center space-x-6 group"
        >
          <span className="group-hover:animate-wiggle">🔥 20題大挑戰</span>
          <i className="fas fa-arrow-right animate-pulse"></i>
        </button>
      </div>
    </div>
  );
};

export default TeaHouseLesson;
