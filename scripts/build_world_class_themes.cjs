const fs = require('fs');
const path = require('path');

// 1. Update componentsData.ts with Rich 8 Theme Presets
const themePresetsCode = `export interface ThemePreset {
  id: string;
  name: string;
  category: 'Cyber' | 'Enterprise' | 'Luxury' | 'Clean';
  bg: string;
  surface: string;
  cardBg: string;
  border: string;
  accent: string;
  sub: string;
  text: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "cyber-violet",
    name: "Cyber Violet (네온 바이올렛)",
    category: "Cyber",
    bg: "#08090f",
    surface: "#0f111a",
    cardBg: "rgba(15, 17, 26, 0.85)",
    border: "rgba(139, 92, 246, 0.3)",
    accent: "#8b5cf6",
    sub: "#d946ef",
    text: "#ffffff"
  },
  {
    id: "neon-emerald",
    name: "Neon Matrix (사이버 에메랄드)",
    category: "Cyber",
    bg: "#050d09",
    surface: "#081710",
    cardBg: "rgba(8, 23, 16, 0.85)",
    border: "rgba(16, 185, 129, 0.3)",
    accent: "#10b981",
    sub: "#06b6d4",
    text: "#ffffff"
  },
  {
    id: "deep-ocean",
    name: "Deep Titanium (엔터프라이즈 네이비)",
    category: "Enterprise",
    bg: "#070c14",
    surface: "#0c1524",
    cardBg: "rgba(12, 21, 36, 0.85)",
    border: "rgba(59, 130, 246, 0.3)",
    accent: "#3b82f6",
    sub: "#38bdf8",
    text: "#ffffff"
  },
  {
    id: "amber-gold",
    name: "Amber Quartz (황금 앰버 럭셔리)",
    category: "Luxury",
    bg: "#0d0a06",
    surface: "#1a140b",
    cardBg: "rgba(26, 20, 11, 0.85)",
    border: "rgba(245, 158, 11, 0.3)",
    accent: "#f59e0b",
    sub: "#ef4444",
    text: "#ffffff"
  },
  {
    id: "obsidian-crimson",
    name: "Obsidian Flame (옵시디언 크림슨)",
    category: "Luxury",
    bg: "#0f0709",
    surface: "#1c0c10",
    cardBg: "rgba(28, 12, 16, 0.85)",
    border: "rgba(244, 63, 94, 0.3)",
    accent: "#f43f5e",
    sub: "#fb923c",
    text: "#ffffff"
  },
  {
    id: "clean-slate",
    name: "Modern Slate (초미니멀 모노 슬레이트)",
    category: "Clean",
    bg: "#0f172a",
    surface: "#1e293b",
    cardBg: "rgba(30, 41, 59, 0.85)",
    border: "rgba(148, 163, 184, 0.25)",
    accent: "#94a3b8",
    sub: "#cbd5e1",
    text: "#ffffff"
  }
];
`;

console.log('Theme definitions prepared');
