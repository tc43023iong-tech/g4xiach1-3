
import React, { useState } from 'react';
import { LessonType } from '../types';
import Quiz from './Quiz';

const CrazyMix: React.FC = () => {
  const [mode, setMode] = useState<'menu' | 'quiz'>('menu');

  if (mode === 'quiz') {
    return <Quiz lessonType={LessonType.CRAZY_MIX} onClose={() => setMode('menu')} />;
  }

  return (
    <div className="space-y-12 animate-fadeIn pb-24 px-4">
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-[5rem] p-16 text-white shadow-2xl relative overflow-hidden text-center border-8 border-white">
        <div className="relative z-10 space-y-8">
          <div className="text-[12rem] mb-6 floating-slow sticker-shadow">🚀</div>
          <h2 className="text-7xl font-black mb-4 tracking-tighter italic drop-shadow-2xl">終極大闖關</h2>
          <p className="text-2xl opacity-90 font-black mb-10 bg-white/20 inline-block px-10 py-3 rounded-full backdrop-blur-md">
            準備好挑戰 20 題「全能大雜燴」了嗎？
          </p>
          <div className="pt-6">
            <button 
              onClick={() => setMode('quiz')}
              className="bg-white text-purple-600 px-20 py-8 rounded-[4rem] font-black text-4xl shadow-[0_20px_0_rgb(233,213,255)] hover:shadow-[0_10px_0_rgb(233,213,255)] hover:translate-y-2 active:shadow-none active:translate-y-5 transition-all flex items-center mx-auto group"
            >
              <span className="mr-4 group-hover:animate-wiggle">🌈</span> 全力出擊！
            </button>
          </div>
        </div>
        <i className="fas fa-bolt text-[25rem] absolute -right-20 -bottom-20 opacity-10 transform -rotate-12"></i>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-12 rounded-[4rem] shadow-2xl border-8 border-purple-50 flex flex-col items-center text-center group hover:scale-105 transition-all">
           <div className="text-8xl mb-6 group-hover:animate-bounce">📝</div>
           <div>
             <h4 className="text-3xl font-black text-purple-600 mb-4">混合大百科</h4>
             <p className="text-xl text-gray-500 font-bold">包含兒化韻、輕聲、變調與所有課文精華！</p>
           </div>
        </div>
        <div className="bg-white p-12 rounded-[4rem] shadow-2xl border-8 border-pink-50 flex flex-col items-center text-center group hover:scale-105 transition-all">
           <div className="text-8xl mb-6 group-hover:animate-wiggle">🥇</div>
           <div>
             <h4 className="text-3xl font-black text-pink-600 mb-4">全能戰士勳章</h4>
             <p className="text-xl text-gray-500 font-bold">通關 20 題測試，領取「中文小專家」最高榮譽！</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CrazyMix;
