
import React, { useState } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

const MallLesson: React.FC = () => {
  const data = LESSON_DATA[LessonType.SHOPPING_MALL];
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const types = Array.from(new Set(data.qingsheng.map(q => q.type)));

  if (showQuiz) return <Quiz lessonType={LessonType.SHOPPING_MALL} onClose={() => setShowQuiz(false)} />;

  return (
    <div className="space-y-10 animate-fadeIn pb-10">
      <div className="relative h-56 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-white">
        <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-10 -translate-y-10">
          <i className="fas fa-shopping-bag text-9xl"></i>
        </div>
        <h2 className="text-5xl font-black mb-2 drop-shadow-lg">逛商場學輕聲</h2>
        <p className="text-blue-100 font-medium tracking-widest uppercase text-xs">Shopping & Neutral Tones</p>
      </div>

      <section className="bg-white rounded-[3rem] p-8 shadow-xl border-8 border-blue-50 relative">
        <div className="absolute -top-6 left-10 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          輕聲大百科 📖
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-4">
          <button 
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${!selectedType ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-500'}`}
          >
            全部款式
          </button>
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                selectedType === type ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.qingsheng
            .filter(q => !selectedType || q.type === selectedType)
            .map((item, idx) => (
              <div key={idx} className="group relative bg-white border-4 border-blue-50 p-6 rounded-[2.5rem] hover:border-blue-200 transition-all hover:-translate-y-1 text-center shadow-sm">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="text-2xl font-black text-gray-800 mb-1">{item.word}</div>
                <div className="text-sm font-mono text-blue-400">{item.pinyin}</div>
                <div className="mt-3 text-[10px] text-gray-300 font-bold uppercase">{item.type}</div>
              </div>
            ))}
        </div>
      </section>

      <div className="bg-yellow-50 rounded-[3rem] p-8 border-4 border-yellow-200 relative overflow-hidden group">
        <i className="fas fa-search absolute -bottom-4 -right-4 text-8xl text-yellow-100 transform -rotate-12 transition-transform group-hover:rotate-0"></i>
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
            <span className="mr-2">💡</span> 小探險家提醒：
          </h3>
          <p className="text-yellow-700 leading-relaxed font-medium">
            有些雙音節詞的第二個音節讀輕聲。如果不確定，可以翻翻詞典，看看拼音上有沒有聲調符號喔！例如：<span className="underline decoration-wavy decoration-yellow-400 font-bold">熱鬧</span> (rè nao)。
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-2xl shadow-2xl transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-3"
        >
          <span>⭐ 挑戰 20 題知識競賽</span>
          <i className="fas fa-star text-yellow-300 animate-pulse"></i>
        </button>
      </div>
    </div>
  );
};

export default MallLesson;
