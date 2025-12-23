
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onBack: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <i className="fas fa-arrow-left text-xl text-sky-600"></i>
        </button>
        <h1 className="text-xl font-bold text-sky-800">{title}</h1>
        <div className="w-10"></div> {/* Spacer */}
      </header>
      <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        © 2024 樂學中文互動平台
      </footer>
    </div>
  );
};

export default Layout;
