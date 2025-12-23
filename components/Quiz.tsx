
import React, { useState, useEffect } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';

interface QuizProps {
  lessonType: LessonType;
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ lessonType, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const data = LESSON_DATA[lessonType];
  const questions = data.quiz;
  const currentQ = questions[currentIdx];

  const handleAnswer = (option: string) => {
    if (selected) return;
    setSelected(option);
    
    if (option === currentQ.correct) {
      setScore(prev => prev + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (showResult) {
    const isPass = score >= 15;
    return (
      <div className="max-w-2xl mx-auto text-center p-12 bg-white rounded-[4rem] shadow-2xl border-b-8 border-gray-200 animate-bounceIn">
        <div className="text-9xl mb-6">{isPass ? '🎊' : '💪'}</div>
        <h2 className="text-5xl font-black mb-4 text-gray-800">{isPass ? '好厲害！' : '繼續加油！'}</h2>
        <p className="text-2xl text-gray-600 mb-10">你的得分：<span className="text-6xl font-black text-pink-500">{score}</span> / 20</p>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={onClose}
            className="bg-sky-500 text-white px-10 py-4 rounded-full font-black text-xl hover:bg-sky-600 transition-all shadow-xl hover:scale-105"
          >
            返回課程
          </button>
          {score < 20 && (
             <button 
             onClick={() => {setCurrentIdx(0); setScore(0); setShowResult(false); setSelected(null);}}
             className="bg-pink-500 text-white px-10 py-4 rounded-full font-black text-xl hover:bg-pink-600 transition-all shadow-xl hover:scale-105"
           >
             再試一次
           </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-3xl mx-auto space-y-8 ${shake ? 'animate-wiggle' : ''}`}>
      <div className="flex items-center justify-between px-6">
         <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-bold">放棄挑戰 ❌</button>
         <div className="bg-white px-6 py-2 rounded-full shadow-md border-2 border-sky-100">
           <span className="font-black text-sky-500">第 {currentIdx + 1} 題</span> / 20
         </div>
         <div className="text-yellow-500 font-black">⭐ {score}</div>
      </div>

      <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-2xl border-8 border-white relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-8 py-3 rounded-3xl font-black text-2xl shadow-xl floating">
          知識大闖關
        </div>
        
        <div className="mt-8 mb-12 text-center">
          <h3 className="text-3xl font-black text-gray-800 leading-tight">
            {currentQ.question}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentQ.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className={`p-6 rounded-[2.5rem] text-xl font-black transition-all transform active:scale-95 border-4 shadow-sm ${
                selected === opt 
                  ? opt === currentQ.correct 
                    ? 'bg-green-500 border-green-600 text-white scale-105 shadow-green-200' 
                    : 'bg-red-500 border-red-600 text-white'
                  : selected && opt === currentQ.correct 
                    ? 'bg-green-500 border-green-600 text-white animate-pulse' 
                    : 'bg-gray-50 border-gray-100 hover:border-sky-300 hover:bg-white text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                 <span>{['A', 'B', 'C', 'D'][i]}.</span>
                 <span>{opt}</span>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-12 p-6 bg-yellow-50 rounded-[2rem] border-4 border-dashed border-yellow-200 animate-fadeIn text-center">
            <p className="text-yellow-800 font-black text-xl">
              {selected === currentQ.correct ? '🎉 答對了！你真棒！' : '💪 沒關係，再接再厲！'}
            </p>
            <p className="mt-2 text-yellow-700">{currentQ.explanation}</p>
          </div>
        )}
      </div>

      <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner border-4 border-white">
        <div 
          className="h-full bg-gradient-to-r from-sky-400 to-pink-400 transition-all duration-500 ease-out" 
          style={{ width: `${((currentIdx + 1) / 20) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Quiz;
