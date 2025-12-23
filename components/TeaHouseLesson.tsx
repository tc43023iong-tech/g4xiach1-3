
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const TeaHouseLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.TEA_HOUSE];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.TEA_HOUSE} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-12 pb-20 animate-fadeIn relative px-4">
      {/* 裝飾 */}
      <div className="absolute top-0 -left-10 text-6xl floating-slow sticker-shadow">🥡</div>
      <div className="absolute top-40 -right-10 text-6xl floating sticker-shadow delay-700">🥢</div>

      <div className="text-center space-y-4 pt-10">
        <div className="inline-block relative">
          <div className="text-8xl floating mb-4 bg-white p-6 rounded-full shadow-2xl border-4 border-orange-200">🍵</div>
        </div>
        <h2 className="text-5xl font-black text-orange-600 tracking-wider italic">第一課：上茶樓 🍵</h2>
        <p className="text-xl text-orange-800 font-bold">學習茶樓文化與捲舌的「兒化韻」</p>
      </div>

      {/* 點心卡 */}
      <section className="bg-white rounded-[3.5rem] p-10 shadow-2xl border-b-8 border-orange-200">
        <h3 className="text-3xl font-black text-orange-500 mb-8 flex items-center">
           <span className="bg-orange-100 p-2 rounded-full mr-3">🍱</span> 點心大集合
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {data.vocab.map((v) => (
            <div key={v.word} className="bg-orange-50 p-5 rounded-[2.5rem] text-center border-4 border-white shadow-sm hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{v.emoji}</div>
              <div className="font-black text-xl text-gray-800">{v.word}</div>
              <div className="text-[12px] text-orange-400 font-black font-mono mt-1">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 兒化韻練習 */}
      <section className="bg-white rounded-[3.5rem] p-10 shadow-2xl border-b-8 border-yellow-200">
        <h3 className="text-3xl font-black text-yellow-600 mb-8 flex items-center">
           <span className="bg-yellow-100 p-2 rounded-full mr-3">👅</span> 兒化韻讀一讀
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.erhua_vocab.map((v) => (
            <div key={v.word} className="bg-yellow-50 p-4 rounded-2xl border-2 border-yellow-100 text-center">
              <div className="font-black text-xl text-gray-800">{v.word}</div>
              <div className="text-sm text-yellow-600 font-mono mt-1">{v.pinyin}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-orange-800 font-bold italic">💡 提示：有些字兒化後字音不變，有些字兒化後字音會改變的，要注意啊！</p>
      </section>

      {/* 特殊韻母 er */}
      <section className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-[4rem] p-10 shadow-2xl border-4 border-white">
        <h3 className="text-3xl font-black text-orange-800 mb-8 flex items-center">
          <span className="bg-white p-3 rounded-full mr-4 shadow-md">✨</span> 二、er 是特殊韻母
        </h3>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {data.er_special.map((v) => (
            <div key={v.word} className="bg-white p-6 rounded-[2.5rem] shadow-xl border-t-8 border-orange-400 w-32 text-center group">
              <div className="text-4xl font-black text-orange-600 mb-2">{v.char}</div>
              <div className="text-lg text-gray-500 font-mono font-black">({v.pinyin})</div>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 p-6 rounded-3xl border-2 border-orange-200">
          <p className="text-orange-900 font-bold text-center italic">
            💡 提示：er 是一個特殊韻母，永遠自成音節，前面不會有聲母。
          </p>
        </div>
      </section>

      {/* 兒化韻詳解 */}
      <section className="bg-white rounded-[3.5rem] p-10 shadow-2xl border-b-8 border-orange-200">
        <h3 className="text-3xl font-black text-orange-800 mb-8 flex items-center">
          <span className="bg-white p-3 rounded-full mr-4 shadow-md">🧪</span> 兒化韻實驗室
        </h3>
        <p className="text-orange-900 font-bold mb-10 text-xl text-center bg-orange-50 p-4 rounded-3xl">
          {data.erhua_detail.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.erhua_detail.rules.map((rule, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-orange-400 group">
              <div className="text-2xl font-black text-orange-600 mb-3">{rule.title}</div>
              <p className="text-md text-gray-600 mb-6 font-medium">{rule.desc}</p>
              <div className="bg-orange-50 p-4 rounded-2xl text-sm font-black text-orange-800 border-2 border-orange-100">
                例：{rule.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 開始挑戰按鈕 */}
      <div className="flex justify-center mt-16">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-16 py-8 rounded-[3rem] font-black text-4xl shadow-xl hover:scale-110 transition-all border-b-[12px] border-orange-800"
        >
          🔥 20題大挑戰
        </button>
      </div>
    </div>
  );
};

export default TeaHouseLesson;
