// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-20 lg:w-64 flex-shrink-0 glass-panel flex flex-col h-full z-20 transition-all duration-300">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center pb-4 border-b border-white/10">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/40 shadow-[0_0_15px_rgba(19,135,236,0.3)]" />
            <div className="hidden lg:flex flex-col">
              <h1 className="text-white text-base font-bold leading-normal tracking-wide">PC Builder </h1>
              <p className="text-slate-400 text-xs">Configurator v3.0</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/" className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive("/") ? "bg-primary/20 text-primary border border-primary/30" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              <span className="material-symbols-outlined text-[24px]">add_circle</span>
              <p className="hidden lg:block text-sm font-medium">Configure</p>
            </Link>

            <Link to="/comparison" className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive("/comparison") ? "bg-primary/20 text-primary border border-primary/30" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              <span className="material-symbols-outlined text-[24px]">compare</span>
              <p className="hidden lg:block text-sm font-medium">Compare</p>
            </Link>

            <Link to="/review" className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive("/review") ? "bg-primary/20 text-primary border border-primary/30" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              <span className="material-symbols-outlined text-[24px]">check_circle</span>
              <p className="hidden lg:block text-sm font-medium">Review</p>
            </Link>

            <Link to="/chat" className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive("/chat") ? "bg-primary/20 text-primary border border-primary/30" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              <span className="material-symbols-outlined text-[24px]">smart_toy</span>
              <p className="hidden lg:block text-sm font-medium">AI Chat</p>
            </Link>

            <div className="hidden lg:block pt-4 mt-2 border-t border-white/10">
              <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Recent</p>
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white w-full text-left truncate">
                <span className="material-symbols-outlined text-[20px]">history</span>
                <span className="text-sm truncate">Gaming Rig $1.5k</span>
              </button>
              <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white w-full text-left truncate border border-white/5">
                <span className="material-symbols-outlined text-[20px] text-primary">edit</span>
                <span className="text-sm truncate font-medium">College Workstation</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 mt-auto rounded-xl text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
          <span className="material-symbols-outlined text-[24px]">settings</span>
          <p className="hidden lg:block text-sm font-medium">Settings</p>
        </div>
      </div>
    </aside>
  );
}