
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const FarmLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.FARM];
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) return <Quiz lessonType={LessonType.FARM} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-12 pb-20 animate-fadeIn">
      {/* 夢幻農場頭部 */}
      <div className="relative h-64 bg-gradient-to-b from-green-400 to-green-600 rounded-[4rem] flex flex-col items-center justify-center text-white shadow-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute text-4xl floating" style={{ 
              top: `${Math.random() * 80}%`, 
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`
            }}>🍃</div>
          ))}
        </div>
        <div className="text-8xl mb-4 floating">🐗</div>
        <h2 className="text-4xl font-black drop-shadow-lg">嘉道理農場大冒險</h2>
        <p className="mt-2 text-green-100 font-bold opacity-80 italic">Kadoorie Farm Explorer</p>
      </div>

      {/* 生物百科 */}
      <section className="bg-white rounded-[3rem] p-10 shadow-xl border-b-8 border-green-200">
        <h3 className="text-3xl font-black text-green-600 mb-8 flex items-center">
          <span className="bg-green-100 p-2 rounded-full mr-3">🦊</span> 動植物百科
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {data.vocab.map((v) => (
            <div key={v.word} className="bg-green-50 rounded-[2rem] p-4 text-center border-2 border-green-100 hover:bg-green-100 transition-all group cursor-pointer">
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">{v.emoji}</div>
              <div className="font-black text-gray-800">{v.word}</div>
              <div className="text-[10px] text-green-500 font-mono mt-1">{v.pinyin}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 變調大詳解 - 樓梯視覺圖 */}
      <section className="bg-green-50 rounded-[4rem] p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 text-green-100 text-9xl">📈</div>
        <h3 className="text-3xl font-black text-green-800 mb-10 flex items-center">
          <span className="bg-white p-2 rounded-full mr-3">🎵</span> 第三聲變調大變身
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.sandhi_detail.rules.map((rule, idx) => (
            <div key={idx} className="bg-white rounded-[3rem] p-8 shadow-xl border-4 border-green-100 hover:-translate-y-2 transition-transform relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-black shadow-lg">
                {idx + 1}
              </div>
              <div className="text-4xl mb-4 text-green-500">{rule.icon}</div>
              <h4 className="text-xl font-black text-green-700 mb-3">{rule.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{rule.desc}</p>
              <div className="mt-auto bg-green-50 p-4 rounded-2xl border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <span className="text-xs font-bold uppercase block mb-1 opacity-60">舉個例子</span>
                <span className="text-lg font-black">{rule.example}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 特別提示小貼紙 */}
        <div className="mt-12 bg-yellow-100 p-8 rounded-[3rem] border-4 border-dashed border-yellow-400 flex items-center gap-6 animate-pulse">
          <div className="text-5xl">💡</div>
          <div>
            <h5 className="text-xl font-black text-yellow-800">小探險家筆記：</h5>
            <p className="text-yellow-700 font-medium">當三個第三聲連在一起時（如：展覽館），變調會更複雜喔！要根據詞語的關係來決定怎麼變。</p>
          </div>
        </div>
      </section>

      {/* 開始挑戰按鈕 */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-3xl shadow-2xl transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-4"
        >
          <span>🏆 森林大挑戰 (20題)</span>
          <i className="fas fa-crown text-yellow-300"></i>
        </button>
      </div>
    </div>
  );
};

export default FarmLesson;
