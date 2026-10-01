import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const renderersDir = path.join(__dirname, 'src/components/renderers');

// 4. Dashboards, Stats, Nav, Feedback & Themes Renderers
const otherRenderers = `import React, { useState } from 'react';
import { 
  Activity, ArrowUpRight, Cpu, HardDrive, Thermometer, Globe,
  Shield, Server, DollarSign, Bell, Star, Palette, Sun, Moon,
  LayoutGrid, Compass, Layers, CheckCircle2, AlertTriangle, X
} from 'lucide-react';

export const MultiGaugeHardwareDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
      <div className="flex justify-between text-xs font-bold text-white mb-3">
        <span>하드웨어 텔레메트리</span>
        <span className="text-emerald-400 text-[10px]">● ALL GREEN</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <Cpu className="w-4 h-4 mx-auto text-violet-400 mb-1" />
          <span className="text-slate-400 block">CPU</span>
          <span className="font-bold text-white font-mono">38%</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <HardDrive className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
          <span className="text-slate-400 block">RAM</span>
          <span className="font-bold text-white font-mono">62%</span>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <Thermometer className="w-4 h-4 mx-auto text-amber-400 mb-1" />
          <span className="text-slate-400 block">온도</span>
          <span className="font-bold text-amber-400 font-mono">48°C</span>
        </div>
      </div>
    </div>
  );
};

export const GlobalEdgeTrafficDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-cyan-400" /> 글로벌 엣지 레이턴시</span>
        <span className="text-cyan-400 text-[10px] font-mono">4 Regions</span>
      </div>
      <div className="space-y-1 text-[11px] font-mono">
        <div className="flex justify-between p-1 rounded bg-white/[0.02] text-slate-300"><span>🇰🇷 Seoul (icn)</span><span className="text-emerald-400 font-bold">8ms</span></div>
        <div className="flex justify-between p-1 rounded bg-white/[0.02] text-slate-300"><span>🇯🇵 Tokyo (nrt)</span><span className="text-emerald-400 font-bold">22ms</span></div>
        <div className="flex justify-between p-1 rounded bg-white/[0.02] text-slate-300"><span>🇺🇸 Virginia (iad)</span><span className="text-amber-400 font-bold">142ms</span></div>
      </div>
    </div>
  );
};

export const SecurityWafDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-rose-500/30 p-4 shadow-2xl space-y-2">
      <div className="flex justify-between text-xs font-bold text-white">
        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-rose-400" /> WAF 보안 위협 차단</span>
        <span className="text-rose-400 font-mono text-[10px] font-bold">1,842 Blocked</span>
      </div>
      <div className="p-2 rounded-xl bg-rose-950/30 border border-rose-500/20 text-[11px] text-rose-200">
        최근 1시간 동안 악성 SQL Injection 142건 및 DDoS 봇 1,700건을 자동 격리했습니다.
      </div>
    </div>
  );
};

export const BorderBeamDemo: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-4 shadow-2xl border border-violet-500/40">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-fuchsia-600/20 animate-pulse" />
      <div className="relative flex items-center justify-between">
        <div>
          <h5 className="text-xs font-bold text-white">Border Beam 광선 레이저</h5>
          <p className="text-[10px] text-slate-400">외곽선을 따라 무한 회전하는 네온 빔</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 text-xs font-bold shadow-[0_0_12px_#8b5cf6]">
          ✦
        </div>
      </div>
    </div>
  );
};

export const BentoGridDemo: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl">
      <div className="text-xs font-bold text-white mb-2">애플 스타일 벤토 그리드 (Bento Grid)</div>
      <div className="grid grid-cols-3 gap-1.5 h-24 text-[10px]">
        <div className="col-span-2 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 border border-white/10 rounded-xl p-2 flex flex-col justify-between text-white">
          <span className="font-bold">AI Core 3.7</span>
          <span className="text-violet-300 text-[9px]">Zero Latency Stream</span>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 flex flex-col justify-between text-slate-300">
          <span>99.9%</span>
          <span className="text-[9px] text-slate-500">Uptime</span>
        </div>
      </div>
    </div>
  );
};

export const ThemeToggleDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-between">
      <div>
        <span className="text-xs font-bold text-white block">다크 / 라이트 모드 전환</span>
        <span className="text-[10px] text-slate-400">{isDark ? '현재: 다크 네온 모드' : '현재: 라이트 모드'}</span>
      </div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 transition-all active:scale-95"
      >
        {isDark ? <Moon className="w-4 h-4 text-violet-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
      </button>
    </div>
  );
};
`;

fs.writeFileSync(path.join(renderersDir, 'OtherRenderers.tsx'), otherRenderers, 'utf-8');
console.log('Saved OtherRenderers.tsx');
