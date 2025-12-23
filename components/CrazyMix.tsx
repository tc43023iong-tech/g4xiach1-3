
import React, { useState } from 'react';
import { LessonType } from '../types';
import Quiz from './Quiz';

const CrazyMix: React.FC = () => {
  const [mode, setMode] = useState<'menu' | 'quiz'>('menu');

  if (mode === 'quiz') {
    return <Quiz lessonType={LessonType.CRAZY_MIX} onClose={() => setMode('menu')} />;
  }

  return (
    <div className="space-y-12 animate-fadeIn pb-20">
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden text-center">
        <div className="relative z-10">
          <div className="text-9xl mb-6 floating">⚡</div>
          <h2 className="text-5xl font-black mb-4 tracking-tighter italic">終極大考驗</h2>
          <p className="text-xl opacity-90 font-bold mb-8">準備好挑戰 20 題全課程綜合題了嗎？</p>
          <button 
            onClick={() => setMode('quiz')}
            className="bg-white text-purple-600 px-16 py-6 rounded-[3rem] font-black text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center mx-auto"
          >
            <span className="mr-3">🚀</span> 我準備好了！
          </button>
        </div>
        <i className="fas fa-bolt text-[15rem] absolute -right-10 -bottom-10 opacity-20 transform -rotate-12"></i>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-purple-100 flex items-center gap-6">
           <div className="text-6xl">📝</div>
           <div>
             <h4 className="text-2xl font-black text-purple-600">混合題目</h4>
             <p className="text-gray-500">包含兒化韻、輕聲、變調與課文詞彙！</p>
           </div>
        </div>
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-pink-100 flex items-center gap-6">
           <div className="text-6xl">🌟</div>
           <div>
             <h4 className="text-2xl font-black text-pink-600">全能戰士</h4>
             <p className="text-gray-500">通關即獲得「樂學中文」最高榮譽勳章！</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CrazyMix;
