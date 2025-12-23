
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const TeaHouseLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.TEA_HOUSE];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.TEA_HOUSE} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      {/* 標題裝飾 */}
      <div className="text-center space-y-4">
        <div className="text-8xl floating mb-4">🍵</div>
        <h2 className="text-4xl font-black text-orange-600 tracking-wider">第一課：上茶樓學發音</h2>
        <div className="flex justify-center space-x-2">
          {['🥟', '🦐', '🥖', '🥯'].map((e, i) => (
            <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
          ))}
        </div>
      </div>

      {/* 點心單詞卡 - 可愛貼紙風 */}
      <section className="bg-white rounded-[3rem] p-8 shadow-2xl border-b-8 border-orange-200">
        <h3 className="text-2xl font-black text-orange-500 mb-6 flex items-center">
           <span className="bg-orange-100 p-2 rounded-full mr-3">🍱</span> 點心點點點
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {data.vocab.map((v) => (
            <div key={v.word} className="group bg-orange-50 border-2 border-orange-100 p-4 rounded-3xl hover:rotate-3 transition-transform text-center shadow-sm hover:shadow-md cursor-pointer">
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{v.emoji}</div>
              <div className="font-bold text-gray-800">{v.word}</div>
              <div className="text-[10px] text-orange-400 font-mono uppercase">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 兒化韻詳解 - 實驗室風 */}
      <section className="bg-orange-100 rounded-[3rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-9xl -rotate-12 transform translate-x-10">👅</div>
        <h3 className="text-3xl font-black text-orange-700 mb-8 flex items-center">
          <span className="bg-white p-2 rounded-full mr-3">🧪</span> 兒化韻實驗室
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.erhua_detail.rules.map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-lg border-t-4 border-orange-400 hover:scale-105 transition-all">
              <div className="text-xl font-black text-orange-600 mb-2">{rule.title}</div>
              <p className="text-sm text-gray-600 mb-4">{rule.desc}</p>
              <div className="bg-orange-50 p-2 rounded-xl text-xs font-bold text-orange-800">例：{rule.example}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6">
          <p className="font-bold text-orange-800 mb-4 text-center">👇 點擊看看這些詞怎麼「兒化」！</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.erhua_list.map((item) => (
              <div key={item.word} className="bg-white p-4 rounded-2xl flex flex-col items-center shadow-sm border border-orange-100 group">
                <span className="text-2xl mb-1 group-hover:animate-wiggle">{item.emoji}</span>
                <span className="font-black text-gray-700">{item.word}</span>
                <span className="text-[10px] text-orange-400 font-mono">{item.pinyin}</span>
                <span className="mt-2 text-[9px] bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full font-bold">{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特殊韻母 er */}
      <section className="bg-white rounded-[3rem] p-10 shadow-xl border-4 border-dashed border-orange-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 text-center">
            <div className="text-7xl mb-4">🧩</div>
            <h4 className="text-2xl font-black text-orange-600">特殊韻母 er</h4>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="bg-orange-50 p-6 rounded-3xl border-l-8 border-orange-400">
              <p className="text-orange-900 font-medium leading-relaxed">
                {data.er_special.rule}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.er_special.list.map(w => (
                <span key={w.word} className="bg-white px-4 py-2 rounded-2xl border-2 border-orange-100 shadow-sm font-bold text-gray-700">
                  {w.word} <span className="text-xs text-orange-300 font-normal">({w.context})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 開始挑戰按鈕 */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-3xl shadow-2xl transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-4"
        >
          <span>🔥 20題大挑戰</span>
          <i className="fas fa-fire-alt animate-pulse text-yellow-300"></i>
        </button>
      </div>
    </div>
  );
};

export default TeaHouseLesson;
