
import React, { useState, useEffect } from 'react';
import { LESSON_DATA } from '../constants';
import { LessonType } from '../types';
import Quiz from './Quiz';

// 針對圈字任務（er 和 輕聲）的句子組件
const CircleTaskItem: React.FC<{ 
  exercise: any; 
  colorClass: string; 
  svgColor: string;
  onComplete: () => void;
}> = ({ exercise, colorClass, svgColor, onComplete }) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'none', msg: string }>({ type: 'none', msg: '' });

  const chars = exercise.sentence.split('');
  
  const toggleChar = (idx: number) => {
    if (isChecked) return;
    if (selectedIndices.includes(idx)) {
      setSelectedIndices(selectedIndices.filter(i => i !== idx));
    } else {
      setSelectedIndices([...selectedIndices, idx]);
    }
  };

  const handleCheck = () => {
    const selectedChars = selectedIndices.map(i => chars[i]);
    const targets = exercise.targets;

    const allFound = targets.every((t: string) => selectedChars.includes(t));
    const noWrong = selectedChars.every((c: string) => targets.includes(c));

    if (allFound && noWrong) {
      setFeedback({ type: 'success', msg: '太棒了！完全正確！🌟' });
      setIsChecked(true);
    } else if (allFound && !noWrong) {
      setFeedback({ type: 'error', msg: '找對了目標，但圈到了多餘的字喔。🧐' });
    } else {
      setFeedback({ type: 'error', msg: '還沒找全喔，再仔細看看！💪' });
    }
  };

  return (
    <div className="animate-popIn">
      <div className={`bg-white p-10 rounded-[3rem] shadow-xl border-4 ${colorClass} mb-6 relative overflow-hidden`}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {chars.map((char: string, idx: number) => {
            const isTarget = exercise.targets.includes(char);
            const isSelected = selectedIndices.includes(idx);
            const isPunctuation = /[，。！？、1234 ]/.test(char);
            
            let btnClass = "text-3xl font-black w-14 h-14 rounded-full flex items-center justify-center transition-all relative ";
            if (isPunctuation) {
              btnClass += "text-gray-300 cursor-default";
            } else if (isChecked) {
              btnClass += isTarget ? "text-green-600 bg-green-50" : "text-gray-300 opacity-40";
            } else {
              btnClass += isSelected ? "bg-sky-100 text-sky-700 shadow-inner" : "text-gray-700 hover:bg-gray-50";
            }

            return (
              <button
                key={idx}
                disabled={isPunctuation || isChecked}
                onClick={() => toggleChar(idx)}
                className={btnClass}
              >
                {isSelected && !isPunctuation && (
                  <svg className={`absolute inset-0 w-full h-full ${isChecked ? 'text-green-400' : svgColor} opacity-70 pointer-events-none`} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="300" className="animate-[dash_1s_ease-in-out_forwards]" />
                  </svg>
                )}
                {char}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {feedback.type !== 'none' && (
          <div className={`px-6 py-2 rounded-full font-black text-lg animate-bounce ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            {feedback.msg}
          </div>
        )}
        {!isChecked ? (
          <button onClick={handleCheck} className="bg-sky-500 text-white px-10 py-3 rounded-full font-black text-xl shadow-lg hover:bg-sky-600 transition-all">檢查答案 ✅</button>
        ) : (
          <button onClick={onComplete} className="bg-green-500 text-white px-10 py-3 rounded-full font-black text-xl shadow-lg hover:bg-green-600 transition-all animate-pulse">下一題 ➡️</button>
        )}
      </div>
    </div>
  );
};

// 針對加「兒」字任務的組件
const AddErTaskItem: React.FC<{ 
  exercise: any; 
  onComplete: () => void;
}> = ({ exercise, onComplete }) => {
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'none', msg: string }>({ type: 'none', msg: '' });

  // Fix: Move isCorrect calculation to component scope to be accessible in JSX
  const isCorrect = 
    selectedSlots.length === exercise.targets.length && 
    exercise.targets.every((t: number) => selectedSlots.includes(t));

  const toggleSlot = (idx: number) => {
    if (isChecked) return;
    if (selectedSlots.includes(idx)) {
      setSelectedSlots(selectedSlots.filter(s => s !== idx));
    } else {
      setSelectedSlots([...selectedSlots, idx]);
    }
  };

  const handleCheck = () => {
    if (isCorrect) {
      setFeedback({ type: 'success', msg: '正確！兒化詞加得真棒！✨' });
      setIsChecked(true);
    } else {
      setFeedback({ type: 'error', msg: '位置不太對或沒加完喔，再試試看！🧐' });
    }
  };

  return (
    <div className="animate-popIn">
      <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border-4 border-emerald-100 mb-8 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-y-8 text-3xl font-black text-gray-800 leading-relaxed">
          {exercise.segments.map((seg: string, idx: number) => (
            <React.Fragment key={idx}>
              <span className="px-1">{seg}</span>
              {/* 每個段落後提供一個空位 (除了最後一個標點/段落) */}
              {idx < exercise.segments.length - 1 && (
                <button
                  onClick={() => toggleSlot(idx)}
                  disabled={isChecked}
                  className={`mx-3 w-16 h-16 rounded-2xl flex items-center justify-center transition-all border-4 border-dashed relative group ${
                    selectedSlots.includes(idx)
                      ? isCorrect && isChecked ? 'bg-green-500 border-green-600 text-white animate-popIn' : 'bg-emerald-400 border-emerald-600 text-white shadow-lg'
                      : 'bg-gray-50 border-gray-200 text-gray-200 hover:border-emerald-300 hover:bg-white'
                  }`}
                >
                  {(selectedSlots.includes(idx) || (isChecked && exercise.targets.includes(idx))) ? (
                    <span className="animate-popIn text-4xl">兒</span>
                  ) : (
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:scale-150 transition-transform"></div>
                  )}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        {feedback.type !== 'none' && (
          <div className={`px-6 py-2 rounded-full font-black text-lg animate-bounce ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            {feedback.msg}
          </div>
        )}
        {!isChecked ? (
          <button onClick={handleCheck} className="bg-emerald-500 text-white px-10 py-3 rounded-full font-black text-xl shadow-lg hover:bg-emerald-600 transition-all hover:scale-105">檢查答案 ✅</button>
        ) : (
          <button onClick={onComplete} className="bg-green-500 text-white px-10 py-3 rounded-full font-black text-xl shadow-lg hover:bg-green-600 transition-all animate-pulse hover:scale-105">下一題 ➡️</button>
        )}
      </div>
    </div>
  );
};

const CrazyMix: React.FC = () => {
  const [mode, setMode] = useState<'menu' | 'er_task' | 'qingsheng_task' | 'erhua_add_task' | 'quiz'>('menu');
  const [currentIdx, setCurrentIdx] = useState(0);
  const data = LESSON_DATA[LessonType.CRAZY_MIX];

  const resetAndGo = (newMode: any) => {
    setCurrentIdx(0);
    setMode(newMode);
  };

  if (mode === 'quiz') return <Quiz lessonType={LessonType.CRAZY_MIX} onClose={() => setMode('menu')} />;

  const renderTask = () => {
    switch (mode) {
      case 'er_task':
        if (currentIdx < data.interactive_er.length) {
          return (
            <div className="max-w-4xl mx-auto space-y-8">
              <header className="text-center">
                <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-black inline-block mb-4">第一關：單韻母 er 探測 🎯</div>
                <h2 className="text-3xl font-black text-gray-800">朗讀句子，把單韻母 er 的字圈起來。</h2>
              </header>
              <CircleTaskItem 
                key={currentIdx}
                exercise={data.interactive_er[currentIdx]}
                colorClass="border-orange-100"
                svgColor="text-orange-400"
                onComplete={() => setCurrentIdx(currentIdx + 1)}
              />
            </div>
          );
        }
        return (
          <div className="text-center p-12 animate-bounceIn">
            <div className="text-9xl mb-6">🌟</div>
            <h3 className="text-4xl font-black text-orange-600 mb-8">第一關完美過關！</h3>
            <button onClick={() => resetAndGo('qingsheng_task')} className="bg-orange-500 text-white px-12 py-5 rounded-full font-black text-2xl shadow-xl hover:scale-110 transition-all">進入第二關 🚀</button>
          </div>
        );

      case 'qingsheng_task':
        if (currentIdx < data.interactive_qingsheng.length) {
          return (
            <div className="max-w-4xl mx-auto space-y-8">
              <header className="text-center">
                <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-black inline-block mb-4">第二關：輕聲小雷達 🔍</div>
                <h2 className="text-3xl font-black text-gray-800">以下哪些字要唸輕聲？把它們圈起來。</h2>
              </header>
              <CircleTaskItem 
                key={currentIdx}
                exercise={data.interactive_qingsheng[currentIdx]}
                colorClass="border-blue-100"
                svgColor="text-blue-400"
                onComplete={() => setCurrentIdx(currentIdx + 1)}
              />
            </div>
          );
        }
        return (
          <div className="text-center p-12 animate-bounceIn">
            <div className="text-9xl mb-6">🏆</div>
            <h3 className="text-4xl font-black text-blue-600 mb-8">輕聲字也找對了！</h3>
            <button onClick={() => resetAndGo('erhua_add_task')} className="bg-blue-500 text-white px-12 py-5 rounded-full font-black text-2xl shadow-xl hover:scale-110 transition-all">進入第三關 🚀</button>
          </div>
        );

      case 'erhua_add_task':
        if (currentIdx < data.interactive_erhua_add.length) {
          return (
            <div className="max-w-4xl mx-auto space-y-8">
              <header className="text-center">
                <div className="bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full font-black inline-block mb-4">第三關：兒化詞補完 🧪</div>
                <h2 className="text-3xl font-black text-gray-800">在兒化詞後加「兒」字。</h2>
                <p className="text-emerald-700 font-bold">點擊單詞之間的空白處來加入「兒」字吧！</p>
              </header>
              <AddErTaskItem 
                key={currentIdx}
                exercise={data.interactive_erhua_add[currentIdx]}
                onComplete={() => setCurrentIdx(currentIdx + 1)}
              />
            </div>
          );
        }
        return (
          <div className="text-center p-12 animate-bounceIn">
            <div className="text-9xl mb-6">🥇</div>
            <h3 className="text-4xl font-black text-emerald-600 mb-8">三關全過！準備迎接最終考驗！</h3>
            <button onClick={() => setMode('quiz')} className="bg-purple-600 text-white px-12 py-5 rounded-full font-black text-2xl shadow-xl hover:scale-110 transition-all">開啟 20 題大闖關 🏆</button>
          </div>
        );

      default:
        return (
          <div className="text-center space-y-12 animate-fadeIn py-10">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-[5rem] p-16 text-white shadow-2xl border-8 border-white relative overflow-hidden">
               <div className="relative z-10 space-y-8">
                  <div className="text-[10rem] floating-slow sticker-shadow">🚀</div>
                  <h2 className="text-6xl font-black italic tracking-tighter">終極挑戰 Crazy Mix</h2>
                  <p className="text-2xl font-bold bg-white/20 inline-block px-10 py-3 rounded-full">分步闖關：er 圈圈、輕聲雷達、兒化補完！</p>
                  <button onClick={() => resetAndGo('er_task')} className="bg-white text-purple-600 px-20 py-8 rounded-[4rem] font-black text-4xl shadow-2xl hover:translate-y-2 transition-all">開始大冒險！⚡</button>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pb-24 px-4">
      {renderTask()}
    </div>
  );
};

export default CrazyMix;
