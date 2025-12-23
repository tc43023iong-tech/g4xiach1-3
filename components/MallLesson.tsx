
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
    <div className="space-y-12 animate-fadeIn pb-24 relative px-4">
      {/* 購物小貼紙裝飾 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute text-5xl opacity-10 floating-slow" 
               style={{ top: `${i*18}%`, left: `${(i%2)*80 + 5}%`, animationDelay: `${i*0.7}s` }}>
            {['🛍️', '📦', '🏷️', '👟', '🎩'][i%5]}
          </div>
        ))}
      </div>

      {/* 百貨商場門頭 */}
      <div className="relative z-10 h-80 bg-gradient-to-br from-blue-400 via-sky-500 to-indigo-600 rounded-[5rem] flex flex-col items-center justify-center text-white shadow-[0_25px_60px_rgba(59,130,246,0.4)] border-8 border-white sticker-shadow overflow-hidden">
        <div className="absolute top-0 left-0 p-10 opacity-10 rotate-12">
           <i className="fas fa-shopping-cart text-[15rem]"></i>
        </div>
        <div className="text-[10rem] mb-4 floating sticker-shadow">🛍️</div>
        <h2 className="text-6xl font-black drop-shadow-2xl italic tracking-tighter">繽紛商場大搜索</h2>
        <div className="mt-4 bg-white/20 px-10 py-3 rounded-full backdrop-blur-md border border-white/30 font-black text-xl">
           輕聲詞專賣店 ✨ 讀出最美的聲音
        </div>
      </div>

      {/* 分類導航欄 */}
      <section className="relative z-10 bg-white/80 backdrop-blur-xl rounded-[3.5rem] p-4 shadow-xl border-4 border-white flex flex-wrap justify-center gap-3">
        <button 
          onClick={() => setSelectedType(null)}
          className={`px-8 py-3 rounded-full font-black transition-all transform hover:scale-105 shadow-sm ${!selectedType ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-blue-50 text-blue-400'}`}
        >
          全場大特賣
        </button>
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-8 py-3 rounded-full font-black transition-all transform hover:scale-105 shadow-sm ${
              selectedType === type ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-blue-500 border-2 border-blue-50 hover:bg-blue-50'
            }`}
          >
            {type}
          </button>
        ))}
      </section>

      {/* 輕聲商品櫃台 */}
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.qingsheng
          .filter(q => !selectedType || q.type === selectedType)
          .map((item, idx) => (
            <div key={idx} className="group bg-white rounded-[3.5rem] p-8 border-4 border-blue-50 hover:border-blue-300 transition-all hover:-translate-y-4 shadow-xl text-center relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-50 rounded-full group-hover:bg-blue-500 transition-colors"></div>
              <div className="text-6xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500">{item.emoji}</div>
              <div className="text-3xl font-black text-gray-800 mb-2">{item.word}</div>
              <div className="bg-blue-50 px-4 py-1 rounded-full inline-block mb-4">
                <span className="text-sm font-black text-blue-500 font-mono tracking-widest">{item.pinyin}</span>
              </div>
              <div className="text-gray-400 font-bold text-sm bg-gray-50 rounded-2xl p-3 border border-gray-100 group-hover:bg-white group-hover:text-blue-600 transition-all">
                {item.detail}
              </div>
              {/* Sticker seal */}
              <div className="mt-4 flex justify-center">
                 <div className="w-10 h-10 border-2 border-blue-100 rounded-full flex items-center justify-center text-blue-200 text-xs font-black rotate-12">OK</div>
              </div>
            </div>
          ))}
      </section>

      {/* 魔法提醒小貼士 */}
      <section className="relative z-10 bg-gradient-to-r from-yellow-50 to-orange-100 rounded-[4rem] p-12 border-8 border-white shadow-2xl overflow-hidden group">
        <div className="absolute -bottom-10 -left-10 text-[15rem] text-yellow-200 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform">💡</div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center text-7xl shadow-xl sticker-shadow animate-bounce">🪄</div>
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-3xl font-black text-orange-900 mb-4">輕聲魔法秘籍：</h3>
            <p className="text-xl text-orange-800 font-bold leading-relaxed bg-white/30 p-6 rounded-[2.5rem] backdrop-blur-sm border border-white/50">
              小朋友，讀輕聲詞的時候要記得：音量要<span className="text-orange-600 underline decoration-wavy">輕</span>，時間要<span className="text-orange-600 underline decoration-wavy">短</span>！<br/>
              就像羽毛落地一樣溫柔。如果不確定，查字典找找看有沒有聲調標誌喔！
            </p>
          </div>
        </div>
      </section>

      {/* 開始挑戰按鈕 */}
      <div className="flex justify-center mt-16 relative z-10">
        <button 
          onClick={() => setShowQuiz(true)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-20 py-10 rounded-[4rem] font-black text-5xl shadow-[0_25px_50px_rgba(59,130,246,0.3)] transform transition-all hover:scale-110 active:scale-95 flex items-center space-x-8 group border-b-[12px] border-blue-800 sticker-shadow"
        >
          <span className="group-hover:animate-wiggle">🛒 百貨大挑戰</span>
          <i className="fas fa-shopping-bag text-yellow-300"></i>
        </button>
      </div>
    </div>
  );
};

export default MallLesson;
