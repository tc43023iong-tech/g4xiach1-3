
import React, { useState } from 'react';
import { LessonType } from './types';
import { LESSON_DATA } from './constants';
import Layout from './components/Layout';
import TeaHouseLesson from './components/TeaHouseLesson';
import MallLesson from './components/MallLesson';
import FarmLesson from './components/FarmLesson';
import CrazyMix from './components/CrazyMix';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<LessonType | null>(null);

  const renderContent = () => {
    switch (currentLesson) {
      case LessonType.TEA_HOUSE:
        return <TeaHouseLesson />;
      case LessonType.SHOPPING_MALL:
        return <MallLesson />;
      case LessonType.FARM:
        return <FarmLesson />;
      case LessonType.CRAZY_MIX:
        return <CrazyMix />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn mt-10">
            {(Object.entries(LESSON_DATA) as [LessonType, any][]).map(([type, data]) => (
              <button
                key={type}
                onClick={() => setCurrentLesson(type)}
                className={`${data.color} border-4 p-8 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 flex flex-col items-center text-center group relative overflow-hidden`}
              >
                <div className="absolute -top-4 -right-4 text-gray-200 opacity-10 text-9xl group-hover:rotate-12 transition-transform">
                   {data.icon}
                </div>
                <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {data.icon}
                </div>
                <h2 className={`text-3xl font-black ${data.accent} mb-4`}>{data.title}</h2>
                <div className={`px-6 py-2 rounded-full font-bold text-sm ${data.btnColor} text-white shadow-md`}>
                  進入課堂
                </div>
              </button>
            ))}

            <div className="md:col-span-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-10 rounded-[4rem] text-white shadow-2xl flex items-center justify-between relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-4xl font-black mb-2 italic">學習成就榜 🏅</h3>
                 <p className="text-white text-opacity-90 font-medium">收集所有星星，成為中文小專家！</p>
               </div>
               <div className="relative z-10 bg-white bg-opacity-30 backdrop-blur-md px-8 py-3 rounded-full font-black text-2xl border-2 border-white border-opacity-40">
                 LV. 1
               </div>
               <i className="fas fa-rocket text-9xl absolute -right-4 bottom-0 opacity-20 transform -rotate-45 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-1000"></i>
            </div>
          </div>
        );
    }
  };

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-sky-50 flex flex-col items-center py-16 px-6 relative overflow-hidden">
        {/* Background blobs for cuteness */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        
        <div className="max-w-4xl w-full relative z-10">
          <header className="text-center mb-16">
            <h1 className="text-7xl font-black text-sky-600 mb-4 drop-shadow-xl tracking-tighter">
              樂學<span className="text-pink-500">中文</span>
            </h1>
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-sky-100">
               <span className="text-2xl">🎒</span>
               <p className="text-lg text-sky-800 font-black">小學四年級互動課堂</p>
            </div>
          </header>
          {renderContent()}
        </div>
      </div>
    );
  }

  const lessonData = LESSON_DATA[currentLesson];

  return (
    <Layout 
      title={lessonData.title} 
      onBack={() => setCurrentLesson(null)}
    >
      <div className="animate-fadeIn">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
