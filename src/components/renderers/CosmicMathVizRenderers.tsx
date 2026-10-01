import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Compass, Eye, ShieldAlert, Cpu, Activity, 
  Rotate3D, Play, Pause, RefreshCw, Layers, Binary, Orbit, Zap
} from 'lucide-react';

// =========================================================================
// 1. 3D Chaotic Lorenz Attractor Canvas (3차원 카오스 로렌츠 어트랙터)
// =========================================================================
export const LorenzAttractorDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [sigma, setSigma] = useState<number>(10);
  const [rho, setRho] = useState<number>(28);
  const [beta, setBeta] = useState<number>(8 / 3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let x = 0.1, y = 0, z = 0;
    const dt = 0.01;
    const points: { x: number; y: number; z: number }[] = [];
    let rotAngle = 0;

    const render = () => {
      if (isPlaying) {
        // Calculate next 5 steps of differential equations
        for (let i = 0; i < 5; i++) {
          const dx = sigma * (y - x) * dt;
          const dy = (x * (rho - z) - y) * dt;
          const dz = (x * y - beta * z) * dt;
          x += dx;
          y += dy;
          z += dz;
          points.push({ x, y, z });
          if (points.length > 900) points.shift();
        }
      }

      rotAngle += 0.008;

      ctx.fillStyle = 'rgba(7, 10, 19, 0.35)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 20;
      const scale = 5.2;

      ctx.lineWidth = 1.2;

      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        // 3D rotation around Y axis
        const rx1 = p1.x * Math.cos(rotAngle) - p1.z * Math.sin(rotAngle);
        const rz1 = p1.x * Math.sin(rotAngle) + p1.z * Math.cos(rotAngle);
        const rx2 = p2.x * Math.cos(rotAngle) - p2.z * Math.sin(rotAngle);
        const rz2 = p2.x * Math.sin(rotAngle) + p2.z * Math.cos(rotAngle);

        const screenX1 = cx + rx1 * scale;
        const screenY1 = cy - (p1.y - 25) * scale;
        const screenX2 = cx + rx2 * scale;
        const screenY2 = cy - (p2.y - 25) * scale;

        const hue = (i / points.length) * 120 + 220; // Neon blue to purple
        ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${0.2 + (i / points.length) * 0.8})`;
        ctx.beginPath();
        ctx.moveTo(screenX1, screenY1);
        ctx.lineTo(screenX2, screenY2);
        ctx.stroke();
      }

      // Draw active head point with glowing particle
      if (points.length > 0) {
        const head = points[points.length - 1];
        const rx = head.x * Math.cos(rotAngle) - head.z * Math.sin(rotAngle);
        const screenX = cx + rx * scale;
        const screenY = cy - (head.y - 25) * scale;

        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying, sigma, rho, beta]);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Orbit className="w-5 h-5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
          <h4 className="text-sm font-bold text-white tracking-wide">3차원 카오스 로렌츠 어트랙터 (3D Lorenz Attractor ODE)</h4>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs flex items-center gap-1"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isPlaying ? '일시정지' : '시뮬레이션'}</span>
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <canvas
          ref={canvasRef}
          width={380}
          height={230}
          className="w-full max-w-[380px] h-[230px] bg-slate-950 rounded-lg border border-slate-800 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
        />
        <div className="absolute top-2 left-3 text-[10px] font-mono text-sky-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-sky-900/40">
          dx/dt=σ(y-x) | dy/dt=x(ρ-z)-y | dz/dt=xy-βz
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs pt-1">
        <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">
          <div className="text-[10px] text-slate-400 font-mono">프란틀 수 (σ)</div>
          <div className="font-mono text-sky-400 font-bold">{sigma}</div>
        </div>
        <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">
          <div className="text-[10px] text-slate-400 font-mono">레일리 수 (ρ)</div>
          <div className="font-mono text-indigo-400 font-bold">{rho}</div>
        </div>
        <div className="p-2 rounded bg-slate-800/40 border border-slate-700/50">
          <div className="text-[10px] text-slate-400 font-mono">기하상수 (β)</div>
          <div className="font-mono text-fuchsia-400 font-bold">2.667</div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 2. High-Dimensional t-SNE / UMAP Latent Embedding Projector
// =========================================================================
export const UmapEmbeddingProjectorDemo: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<number | null>(null);

  const clusters = [
    { id: 0, name: '사출 압력 이상 군집 (Cluster α)', color: '#ec4899', count: 42, center: { x: 90, y: 70 }, radius: 35 },
    { id: 1, name: 'CNC 미세진동 정상 군집 (Cluster β)', color: '#10b981', count: 128, center: { x: 260, y: 85 }, radius: 45 },
    { id: 2, name: '표면 열처리 급냉 편차 (Cluster γ)', color: '#f59e0b', count: 64, center: { x: 180, y: 170 }, radius: 38 },
  ];

  // Deterministic scatter points based on cluster centers
  const points = React.useMemo(() => {
    const list: { x: number; y: number; cluster: number; id: string }[] = [];
    clusters.forEach(c => {
      for (let i = 0; i < c.count / 3; i++) {
        const angle = (i / (c.count / 3)) * Math.PI * 2;
        const r = (i % 3 + 1) * (c.radius / 3.5);
        list.push({
          x: c.center.x + Math.cos(angle * 2.3) * r,
          y: c.center.y + Math.sin(angle * 1.7) * r,
          cluster: c.id,
          id: `Point-${c.id}-${i}`
        });
      }
    });
    return list;
  }, []);

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Binary className="w-5 h-5 text-emerald-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">고차원 센서 임베딩 프로젝터 (UMAP Latent Space 2D)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">234 Multi-Vectors</span>
      </div>

      <div className="relative">
        <svg viewBox="0 0 360 230" className="w-full h-48 bg-slate-950/80 rounded-lg border border-slate-800">
          {/* Manifold density contour clouds */}
          {clusters.map((c) => {
            const isHighlight = selectedCluster === null || selectedCluster === c.id;
            return (
              <ellipse
                key={c.id}
                cx={c.center.x}
                cy={c.center.y}
                rx={c.radius * 1.3}
                ry={c.radius * 0.9}
                fill={c.color}
                opacity={isHighlight ? 0.12 : 0.03}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Scatter Points */}
          {points.map((p, idx) => {
            const isTarget = selectedCluster === null || selectedCluster === p.cluster;
            const color = clusters[p.cluster].color;
            return (
              <circle
                key={idx}
                cx={p.x}
                cy={p.y}
                r={selectedCluster === p.cluster ? 3.5 : 2.2}
                fill={color}
                opacity={isTarget ? 0.9 : 0.15}
                className="transition-all duration-200 cursor-pointer hover:r-5 hover:brightness-150"
                onMouseEnter={() => setSelectedCluster(p.cluster)}
              />
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {clusters.map((c) => (
          <div
            key={c.id}
            onMouseEnter={() => setSelectedCluster(c.id)}
            onMouseLeave={() => setSelectedCluster(null)}
            className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
              selectedCluster === c.id
                ? 'bg-slate-800 border-emerald-400 scale-[1.02]'
                : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              <span className="font-bold text-slate-200 truncate">{c.name.split(' ')[0]}</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">포인트 {c.count}개 군집</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================================
// 3. Poincaré Hyperbolic Disk Tree (푸앵카레 쌍곡 기하학 트리)
// =========================================================================
export const PoincareHyperbolicDiskDemo: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Nodes arranged on concentric Poincaré hyperbolic rings
  const hyperbolicRings = [
    { radius: 35, count: 4, label: 'Core Tier-1', color: '#6366f1' },
    { radius: 75, count: 12, label: 'Subsystem Tier-2', color: '#38bdf8' },
    { radius: 110, count: 24, label: 'Micro Sensor Tier-3', color: '#a855f7' },
  ];

  return (
    <div className="p-4 bg-slate-900/90 border border-slate-700/60 rounded-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-400" />
          <h4 className="text-sm font-bold text-white tracking-wide">푸앵카레 쌍곡면 비유클리드 트리 (Poincaré Hyperbolic Disk)</h4>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">Non-Euclidean 2D</span>
      </div>

      <div className="relative flex justify-center">
        <svg viewBox="0 0 320 320" className="w-full max-w-[280px] h-auto drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          {/* Outer Poincaré Geodesic Boundary */}
          <circle cx="160" cy="160" r="140" fill="#030712" stroke="#4f46e5" strokeWidth="2.5" />
          
          {/* Hyperbolic Geodesic Arcs */}
          <path d="M 50,160 Q 160,80 270,160" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 50,160 Q 160,240 270,160" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 160,50 Q 80,160 160,270" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 160,50 Q 240,160 160,270" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Concentric Hyperbolic Rings & Nodes */}
          {hyperbolicRings.map((ring, ringIdx) => {
            const nodes = [];
            for (let i = 0; i < ring.count; i++) {
              const angle = (i / ring.count) * Math.PI * 2;
              const x = 160 + ring.radius * Math.cos(angle);
              const y = 160 + ring.radius * Math.sin(angle);
              const nodeId = `H-${ringIdx}-${i}`;
              nodes.push(
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={ringIdx === 0 ? 5.5 : ringIdx === 1 ? 3.5 : 2}
                  fill={ring.color}
                  className="cursor-pointer transition-all hover:scale-150 hover:brightness-150"
                  onMouseEnter={() => setActiveNode(`${ring.label} Node #${i + 1}`)}
                  onMouseLeave={() => setActiveNode(null)}
                />
              );
            }
            return (
              <g key={ringIdx}>
                <circle cx="160" cy="160" r={ring.radius} fill="none" stroke={ring.color} strokeOpacity="0.15" strokeWidth="1" />
                {nodes}
              </g>
            );
          })}

          {/* Center Origin Node */}
          <circle cx="160" cy="160" r="7" fill="#ffffff" stroke="#6366f1" strokeWidth="2" className="cursor-pointer shadow-lg" onMouseEnter={() => setActiveNode('Origin Root (0,0)')} />
        </svg>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-xs flex justify-between items-center">
        <span className="text-slate-400">포커스 노드:</span>
        <span className="font-mono text-indigo-300 font-bold">{activeNode || '경계면 노드 위로 마우스를 올려보세요'}</span>
      </div>
    </div>
  );
};
