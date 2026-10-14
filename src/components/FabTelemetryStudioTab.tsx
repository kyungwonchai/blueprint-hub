import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Activity, RefreshCw, Layers, Shield, Play, Pause, 
  Sliders, Maximize2, Minimize2, Eye, Download, Code2, 
  Check, Copy, Radio, Zap, AlertTriangle, CheckCircle2,
  Table, BarChart2, Cpu, Sparkles, Filter
} from 'lucide-react';

interface FabTelemetryStudioTabProps {
  onAddToCart?: (item: any) => void;
}

interface TelemetryNode {
  id: string;
  name: string;
  unit: string;
  target: number;
  val: number;
  delta: string;
  cpk: number;
  status: 'OK' | 'WARN' | 'OOS';
  history: number[];
}

export const FabTelemetryStudioTab: React.FC<FabTelemetryStudioTabProps> = ({
  onAddToCart
}) => {
  const [activeLine, setActiveLine] = useState<'LINE-A' | 'LINE-B' | 'LINE-C'>('LINE-A');
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [samplingRate, setSamplingRate] = useState<number>(1500);
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'OK' | 'WARN' | 'OOS'>('ALL');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('CH-01');
  const [codeModalType, setCodeModalType] = useState<'spc' | '3d' | 'wafer' | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 3D Parameters
  const [amp3D, setAmp3D] = useState<number>(1.8);
  const [freq3D, setFreq3D] = useState<number>(2.2);
  const [mode3D, setMode3D] = useState<'solid' | 'wire'>('solid');
  const [rotationAngle, setRotationAngle] = useState<{ yaw: number; pitch: number }>({ yaw: 0.6, pitch: 0.5 });
  const isDragging3D = useRef<boolean>(false);
  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Wafer Die Map State
  const [hoveredDie, setHoveredDie] = useState<{ x: number; y: number; bin: number; leak: number; vth: number }>({
    x: 12, y: 8, bin: 1, leak: 0.82, vth: 0.34
  });
  const [waferSeed, setWaferSeed] = useState<number>(1);

  // Nodes Telemetry State
  const [nodes, setNodes] = useState<TelemetryNode[]>([
    { id: 'CH-01', name: 'EUV Laser Power', unit: 'W', target: 245.0, val: 245.2, delta: '+0.2', cpk: 1.72, status: 'OK', history: [244.8, 245.1, 245.0, 245.3, 245.1, 245.2] },
    { id: 'CH-02', name: 'ArF Immersion Stage Temp', unit: '°C', target: 21.40, val: 21.41, delta: '+0.01', cpk: 1.84, status: 'OK', history: [21.40, 21.39, 21.41, 21.40, 21.42, 21.41] },
    { id: 'CH-03', name: 'Plasma Etch RF Bias', unit: 'V', target: 1840, val: 1850, delta: '+10', cpk: 1.45, status: 'OK', history: [1838, 1842, 1845, 1849, 1844, 1850] },
    { id: 'CH-04', name: 'ALD Chamber Deposition Rate', unit: 'nm/s', target: 0.85, val: 0.84, delta: '-0.01', cpk: 1.21, status: 'WARN', history: [0.86, 0.85, 0.84, 0.83, 0.85, 0.84] },
    { id: 'CH-05', name: 'CMP Polishing Slurry Flow', unit: 'mL/m', target: 180, val: 180.2, delta: '+0.2', cpk: 1.65, status: 'OK', history: [179.8, 180.1, 180.0, 180.3, 179.9, 180.2] },
    { id: 'CH-06', name: 'Ion Implantation Beam Current', unit: 'mA', target: 12.0, val: 12.4, delta: '+0.4', cpk: 0.98, status: 'OOS', history: [11.9, 12.1, 12.3, 12.5, 12.2, 12.4] },
    { id: 'CH-07', name: 'Rapid Thermal Anneal Peak', unit: '°C', target: 1050, val: 1050.4, delta: '+0.4', cpk: 1.78, status: 'OK', history: [1049, 1051, 1050, 1052, 1050, 1050.4] },
  ]);

  // SPC History for selected node
  const [spcSeries, setSpcSeries] = useState<number[]>([244.5, 244.8, 245.1, 245.0, 245.6, 245.2, 245.8, 244.9, 245.3, 245.2, 245.5, 246.1, 245.2]);

  // Streaming Interval
  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const noise = (Math.random() - 0.5) * (node.target * 0.008);
        const nextVal = Number((node.val + noise).toFixed(2));
        const diff = nextVal - node.target;
        const deltaStr = diff >= 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2);
        const newHist = [...node.history.slice(1), nextVal];
        
        let st: 'OK' | 'WARN' | 'OOS' = 'OK';
        if (Math.abs(diff) > node.target * 0.02) st = 'OOS';
        else if (Math.abs(diff) > node.target * 0.01) st = 'WARN';

        return {
          ...node,
          val: nextVal,
          delta: deltaStr,
          status: st,
          history: newHist,
        };
      }));

      // Update SPC series
      setSpcSeries(prev => {
        const sel = nodes.find(n => n.id === selectedNodeId) || nodes[0];
        const jitter = (Math.random() - 0.48) * (sel.target * 0.009);
        const nextSample = Number((sel.val + jitter).toFixed(2));
        return [...prev.slice(1), nextSample];
      });
    }, samplingRate);

    return () => clearInterval(interval);
  }, [isStreaming, samplingRate, selectedNodeId, nodes]);

  const selectedNode = useMemo(() => {
    return nodes.find(n => n.id === selectedNodeId) || nodes[0];
  }, [nodes, selectedNodeId]);

  const filteredNodes = useMemo(() => {
    if (selectedFilter === 'ALL') return nodes;
    return nodes.filter(n => n.status === selectedFilter);
  }, [nodes, selectedFilter]);

  // SPC Math Limits (UCL, CL, LCL, Mean, StdDev)
  const spcStats = useMemo(() => {
    const mean = spcSeries.reduce((a, b) => a + b, 0) / spcSeries.length;
    const variance = spcSeries.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / spcSeries.length;
    const std = Math.sqrt(variance) || 0.01;
    const ucl = selectedNode.target + (3 * std);
    const lcl = selectedNode.target - (3 * std);
    return {
      mean: Number(mean.toFixed(2)),
      std: Number(std.toFixed(2)),
      ucl: Number(ucl.toFixed(2)),
      cl: Number(selectedNode.target.toFixed(2)),
      lcl: Number(lcl.toFixed(2)),
    };
  }, [spcSeries, selectedNode]);

  // Canvas 3D Surface Rendering (Nanometer Heatmap Topography)
  const canvas3DRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvas3DRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Grid definition
      const cols = 22;
      const rows = 22;
      const spacing = 14;
      const cx = w / 2;
      const cy = h / 2 + 15;

      const cosY = Math.cos(rotationAngle.yaw);
      const sinY = Math.sin(rotationAngle.yaw);
      const cosP = Math.cos(rotationAngle.pitch);
      const sinP = Math.sin(rotationAngle.pitch);

      // Height function
      const getHeight = (gx: number, gy: number) => {
        const dist = Math.sqrt(gx * gx + gy * gy);
        return Math.sin(dist * freq3D * 0.2 + t) * Math.cos(gx * 0.25) * 22 * amp3D;
      };

      // Project 3D point (gx, gy, gz) to 2D
      const project = (gx: number, gy: number, gz: number) => {
        // Rotate yaw around Y
        const rx = gx * cosY - gy * sinY;
        const ry = gx * sinY + gy * cosY;
        // Tilt pitch around X
        const rz = -ry * sinP + gz * cosP;
        const finalY = ry * cosP + gz * sinP;
        return {
          x: cx + rx * spacing,
          y: cy - finalY,
          z: rz,
        };
      };

      // Render wireframe or solid quads
      for (let i = -cols / 2; i < cols / 2 - 1; i++) {
        for (let j = -rows / 2; j < rows / 2 - 1; j++) {
          const z00 = getHeight(i, j);
          const z10 = getHeight(i + 1, j);
          const z11 = getHeight(i + 1, j + 1);
          const z01 = getHeight(i, j + 1);

          const p00 = project(i, j, z00);
          const p10 = project(i + 1, j, z10);
          const p11 = project(i + 1, j + 1, z11);
          const p01 = project(i, j + 1, z01);

          const avgZ = (z00 + z10 + z11 + z01) / 4;
          const normZ = Math.min(Math.max((avgZ + 25) / 50, 0), 1);

          // Color interpolation: blue -> cyan -> emerald -> amber -> rose
          let fillColor = `rgba(6, 182, 212, 0.45)`;
          let strokeColor = `rgba(6, 182, 212, 0.8)`;
          if (normZ > 0.75) {
            fillColor = `rgba(244, 63, 94, 0.55)`;
            strokeColor = `rgba(244, 63, 94, 0.95)`;
          } else if (normZ > 0.55) {
            fillColor = `rgba(245, 158, 11, 0.5)`;
            strokeColor = `rgba(245, 158, 11, 0.9)`;
          } else if (normZ > 0.35) {
            fillColor = `rgba(16, 185, 129, 0.45)`;
            strokeColor = `rgba(16, 185, 129, 0.85)`;
          }

          ctx.beginPath();
          ctx.moveTo(p00.x, p00.y);
          ctx.lineTo(p10.x, p10.y);
          ctx.lineTo(p11.x, p11.y);
          ctx.lineTo(p01.x, p01.y);
          ctx.closePath();

          if (mode3D === 'solid') {
            ctx.fillStyle = fillColor;
            ctx.fill();
          }
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [amp3D, freq3D, mode3D, rotationAngle]);

  // Wafer Canvas Rendering (260x260 Circular Wafer with Die Grid)
  const waferCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = waferCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const radius = w / 2 - 12;
    const cx = w / 2;
    const cy = h / 2;

    // Draw Silicon Wafer Disk Background
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#060a14';
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Wafer Notch (Top Flat / Notch)
    ctx.beginPath();
    ctx.arc(cx, cy - radius, 5, 0, Math.PI);
    ctx.fillStyle = '#04070d';
    ctx.fill();

    // Draw Dies
    const dieSize = 10;
    const gridCount = 22;
    const offset = (gridCount * dieSize) / 2;

    for (let gx = 0; gx < gridCount; gx++) {
      for (let gy = 0; gy < gridCount; gy++) {
        const dx = cx - offset + gx * dieSize;
        const dy = cy - offset + gy * dieSize;
        const distFromCenter = Math.sqrt(Math.pow(dx + dieSize / 2 - cx, 2) + Math.pow(dy + dieSize / 2 - cy, 2));

        if (distFromCenter < radius - 4) {
          // Determine Bin based on pseudorandom + edge defect probability
          const edgeFactor = distFromCenter / radius;
          const hash = Math.sin(gx * 12.9898 + gy * 78.233 + waferSeed) * 43758.5453;
          const rand = hash - Math.floor(hash);

          let binColor = '#10b981'; // Bin 1 (Pass Prime)
          if (edgeFactor > 0.82 && rand > 0.5) {
            binColor = '#f43f5e'; // Bin 9 (Edge Defect)
          } else if (rand > 0.92) {
            binColor = '#f43f5e'; // Bin 9 (Defect)
          } else if (rand > 0.85) {
            binColor = '#f59e0b'; // Bin 5 (Marginal)
          } else if (rand > 0.72) {
            binColor = '#06b6d4'; // Bin 2 (Pass Standard)
          }

          // Highlight Hovered Die
          if (hoveredDie.x === gx && hoveredDie.y === gy) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(dx, dy, dieSize - 1, dieSize - 1);
            ctx.strokeStyle = '#06b6d4';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(dx - 1, dy - 1, dieSize + 1, dieSize + 1);
          } else {
            ctx.fillStyle = binColor;
            ctx.fillRect(dx, dy, dieSize - 1, dieSize - 1);
          }
        }
      }
    }
  }, [hoveredDie, waferSeed]);

  // Handle Wafer Mouse Move
  const handleWaferMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = waferCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const dieSize = 10;
    const gridCount = 22;
    const offset = (gridCount * dieSize) / 2;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const gx = Math.floor((mx - (cx - offset)) / dieSize);
    const gy = Math.floor((my - (cy - offset)) / dieSize);

    if (gx >= 0 && gx < gridCount && gy >= 0 && gy < gridCount) {
      const dist = Math.sqrt(Math.pow(mx - cx, 2) + Math.pow(my - cy, 2));
      if (dist < canvas.width / 2 - 12) {
        let bin = 1;
        if (dist / (canvas.width / 2) > 0.8) bin = 9;
        else if ((gx + gy) % 7 === 0) bin = 2;
        else if ((gx * gy) % 11 === 0) bin = 5;

        setHoveredDie({
          x: gx,
          y: gy,
          bin,
          leak: Number((0.65 + (gx * 0.02) + (bin === 9 ? 2.4 : 0)).toFixed(2)),
          vth: Number((0.32 + (gy * 0.005) - (bin === 9 ? 0.15 : 0)).toFixed(2))
        });
      }
    }
  };

  const copyCode = (code: string, key: string) => {
    navigator.clipboard.writeText(code);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#04070d] text-slate-100 flex flex-col font-sans bg-cad-grid">
      
      {/* Precision Process Header */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-4 sticky top-14 z-30 shadow-xl">
        <div className="max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-900/40">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                  BLUEPRINT <span className="text-cyan-400">FAB TELEMETRY STUDIO</span>
                </h1>
                <span className="text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded">
                  v4.8 Enterprise
                </span>
                <span className={`flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                  isStreaming 
                    ? 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40' 
                    : 'text-slate-400 bg-slate-900 border-slate-700'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isStreaming ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                  {isStreaming ? 'LIVE STREAMING' : 'PAUSED'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">
                초고밀도 스파크라인 데이터 그리드 · WebGL 3D 토포그래피 · 웨이퍼/패널 Bin 맵 · 실시간 SPC 관리도
              </p>
            </div>
          </div>

          {/* Global Process Control Toolbar */}
          <div className="flex items-center gap-2.5 flex-wrap font-mono text-xs">
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
              <span className="px-2.5 py-1 text-slate-400 font-bold">LINE:</span>
              <select
                value={activeLine}
                onChange={(e) => setActiveLine(e.target.value as any)}
                className="bg-slate-950 text-cyan-300 border border-slate-800 rounded-lg px-2.5 py-1 focus:outline-none cursor-pointer font-bold"
              >
                <option value="LINE-A">FAB-M16 (3nm GAA)</option>
                <option value="LINE-B">SMD-LINE-04 (Camera Mod)</option>
                <option value="LINE-C">PACKAGING-HBM3E</option>
              </select>
            </div>

            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all border ${
                isStreaming
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isStreaming ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isStreaming ? '실시간 스트림 정지' : '스트림 재개'}</span>
            </button>

            <button
              onClick={() => setWaferSeed(prev => prev + 1)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all font-bold"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>로트(Lot) 갱신</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Studio Body */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* Top Real-time KPI Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-[#080d1a]/90 border border-slate-800/90 rounded-2xl p-4 shadow-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">공정능력지수 (Cpk)</span>
              <div className="text-2xl font-black text-cyan-300 font-mono mt-1">1.68</div>
              <span className="text-[10px] text-emerald-400 font-bold">Target &gt; 1.33 PASS (6-Sigma)</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#080d1a]/90 border border-slate-800/90 rounded-2xl p-4 shadow-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">규격이탈률 (OOS)</span>
              <div className="text-2xl font-black text-rose-400 font-mono mt-1">0.04%</div>
              <span className="text-[10px] text-rose-400 font-bold">2 LOTS ALERT TRIGGERED</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#080d1a]/90 border border-slate-800/90 rounded-2xl p-4 shadow-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">시간당 생산량 (UPH)</span>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-1">1,420 <span className="text-xs font-normal text-slate-400">ea/h</span></div>
              <span className="text-[10px] text-slate-400">목표: 1,400 ea/h 달성 (+1.4%)</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
              <Activity className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#080d1a]/90 border border-slate-800/90 rounded-2xl p-4 shadow-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">챔버 진공도 (Chamber)</span>
              <div className="text-2xl font-black text-white font-mono mt-1">0.12 <span className="text-xs font-normal text-slate-400">mTorr</span></div>
              <span className="text-[10px] text-cyan-400 font-bold">진공 안정성 99.8%</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
              <Shield className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-[#080d1a]/90 border border-slate-800/90 rounded-2xl p-4 shadow-xl flex items-center justify-between col-span-2 sm:col-span-1">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">불량률 (Defect Rate)</span>
              <div className="text-2xl font-black text-indigo-300 font-mono mt-1">14.2 <span className="text-xs font-normal text-slate-400">ppm</span></div>
              <span className="text-[10px] text-emerald-400 font-bold">최종 수율: 99.14%</span>
            </div>
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
              <Zap className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 12-Column Main Workspace */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* Left 7 Columns: Telemetry Grid & SPC Chart */}
          <div className="xl:col-span-7 space-y-6">
            
            {/* 1. Process Nodes Telemetry Grid */}
            <section className="bg-[#090d16]/95 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-5 rounded-sm bg-cyan-400" />
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    실시간 공정 텔레메트리 매트릭스
                    <span className="text-[11px] font-mono text-slate-400 font-normal">(Live Sparkline Grid)</span>
                  </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-mono">
                  {(['ALL', 'OK', 'WARN', 'OOS'] as const).map(flt => (
                    <button
                      key={flt}
                      onClick={() => setSelectedFilter(flt)}
                      className={`px-2.5 py-0.5 rounded-lg font-bold transition-all ${
                        selectedFilter === flt
                          ? 'bg-cyan-500 text-black shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {flt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-[#060a14] text-[10px] text-slate-400 uppercase tracking-wider">
                      <th className="py-2.5 px-3 sticky left-0 bg-[#060a14] z-10">Channel / Node</th>
                      <th className="py-2.5 px-3 text-right">Target</th>
                      <th className="py-2.5 px-3 text-right">Current</th>
                      <th className="py-2.5 px-3 text-right">Delta</th>
                      <th className="py-2.5 px-3 text-center">Cpk</th>
                      <th className="py-2.5 px-3 text-center">Trend (30s)</th>
                      <th className="py-2.5 px-3 text-center pr-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredNodes.map(node => {
                      const isSelected = selectedNodeId === node.id;
                      return (
                        <tr
                          key={node.id}
                          onClick={() => setSelectedNodeId(node.id)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-cyan-500/10 border-l-2 border-l-cyan-400' : 'hover:bg-slate-900/40'
                          }`}
                        >
                          <td className="py-2.5 px-3 sticky left-0 bg-[#090d16] z-10">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${node.status === 'OK' ? 'bg-emerald-400' : node.status === 'WARN' ? 'bg-amber-400' : 'bg-rose-500'}`} />
                              <div>
                                <div className="font-bold text-white text-[11px]">{node.id}</div>
                                <div className="text-[10px] text-slate-400 font-sans">{node.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 px-3 text-right text-slate-400">{node.target} {node.unit}</td>
                          <td className="py-2.5 px-3 text-right font-bold text-cyan-300">{node.val} {node.unit}</td>
                          <td className={`py-2.5 px-3 text-right font-bold ${node.delta.startsWith('+') ? 'text-cyan-400' : 'text-slate-300'}`}>
                            {node.delta}
                          </td>
                          <td className="py-2.5 px-3 text-center font-bold text-white">{node.cpk}</td>
                          
                          {/* Mini Sparkline SVG */}
                          <td className="py-2.5 px-3 text-center">
                            <svg width="64" height="20" className="inline-block overflow-visible">
                              {(() => {
                                const min = Math.min(...node.history) * 0.999;
                                const max = Math.max(...node.history) * 1.001;
                                const pts = node.history.map((h, i) => {
                                  const x = (i / (node.history.length - 1)) * 64;
                                  const y = 20 - ((h - min) / (max - min || 1)) * 18;
                                  return `${x},${y}`;
                                }).join(' ');
                                return (
                                  <polyline
                                    fill="none"
                                    stroke={node.status === 'OK' ? '#10b981' : node.status === 'WARN' ? '#f59e0b' : '#f43f5e'}
                                    strokeWidth="1.5"
                                    points={pts}
                                  />
                                );
                              })()}
                            </svg>
                          </td>

                          <td className="py-2.5 px-3 text-center pr-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              node.status === 'OK' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                              node.status === 'WARN' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                              'bg-rose-500/10 text-rose-400 border-rose-500/30'
                            }`}>
                              {node.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table Footer Summary Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] font-mono flex flex-wrap items-center justify-between text-slate-400">
                <div className="flex items-center gap-3">
                  <span>선택된 노드: <strong className="text-cyan-400 font-bold">{selectedNode.id} ({selectedNode.name})</strong></span>
                  <span>•</span>
                  <span>샘플링 주기: <strong className="text-white">{samplingRate}ms</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Cpk &gt; 1.33</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> 1.00 ~ 1.33</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> Cpk &lt; 1.00</span>
                </div>
              </div>
            </section>

            {/* 2. Real-time SPC X-Bar Control Chart & Gaussian Bell Curve */}
            <section className="bg-[#090d16]/95 border border-slate-800/90 rounded-2xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-5 rounded-sm bg-indigo-500" />
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      실시간 SPC 관리도 (Statistical Process Control Chart)
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 border border-cyan-800 px-2 py-0.5 rounded">
                        Target: {selectedNode.target} {selectedNode.unit}
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400 font-sans">
                      붉은 점선(UCL / LCL)을 벗어나는 측정값은 즉시 비정상 스파이크로 마킹됩니다.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCodeModalType('spc')}
                  className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>SPC 차트 코드</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                {/* SPC SVG Line Chart (3 Cols) */}
                <div className="lg:col-span-3 bg-[#050811] border border-slate-800/80 rounded-xl p-3 relative overflow-hidden">
                  <svg viewBox="0 0 640 210" className="w-full h-auto overflow-visible font-mono text-[10px]">
                    {/* Control Limit Lines */}
                    {/* UCL Line */}
                    <line x1="30" y1="35" x2="620" y2="35" stroke="#f43f5e" strokeDasharray="4 4" strokeWidth="1.5" />
                    <text x="625" y="38" fill="#f43f5e" fontSize="9">UCL ({spcStats.ucl})</text>

                    {/* Center Line (CL) */}
                    <line x1="30" y1="105" x2="620" y2="105" stroke="#10b981" strokeWidth="1.5" opacity="0.8" />
                    <text x="625" y="108" fill="#10b981" fontSize="9">CL ({spcStats.cl})</text>

                    {/* LCL Line */}
                    <line x1="30" y1="175" x2="620" y2="175" stroke="#f43f5e" strokeDasharray="4 4" strokeWidth="1.5" />
                    <text x="625" y="178" fill="#f43f5e" fontSize="9">LCL ({spcStats.lcl})</text>

                    {/* Polyline plotting actual samples */}
                    {(() => {
                      const spread = (spcStats.ucl - spcStats.lcl) || 1;
                      const pts = spcSeries.map((s, idx) => {
                        const x = 40 + (idx / (spcSeries.length - 1)) * 560;
                        const y = 175 - ((s - spcStats.lcl) / spread) * 140;
                        return { x, y, val: s };
                      });

                      const polyPts = pts.map(p => `${p.x},${p.y}`).join(' ');

                      return (
                        <>
                          <polyline
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            points={polyPts}
                          />
                          {pts.map((p, idx) => {
                            const isViolate = p.val > spcStats.ucl || p.val < spcStats.lcl;
                            return (
                              <circle
                                key={idx}
                                cx={p.x} cy={p.y} r={isViolate ? 5 : 3}
                                fill={isViolate ? '#f43f5e' : '#04070d'}
                                stroke={isViolate ? '#ffffff' : '#06b6d4'}
                                strokeWidth="2"
                              >
                                <title>Sample {idx + 1}: {p.val} {selectedNode.unit}</title>
                              </circle>
                            );
                          })}
                        </>
                      );
                    })()}
                  </svg>
                </div>

                {/* Gaussian Bell Curve Histogram (1 Col) */}
                <div className="bg-[#050811] border border-slate-800/80 rounded-xl p-3 flex flex-col justify-between h-full font-mono">
                  <div className="text-[11px] text-slate-400 mb-2 flex justify-between">
                    <span>실시간 산포 (Sigma)</span>
                    <span className="text-emerald-400 font-bold">±2.8σ</span>
                  </div>

                  {/* Bell Curve SVG */}
                  <svg viewBox="0 0 180 140" className="w-full h-auto">
                    <defs>
                      <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Normal Bell Curve Path */}
                    <path
                      d="M 10 130 Q 55 130 75 80 Q 90 10 105 80 Q 125 130 170 130 Z"
                      fill="url(#bellGrad)"
                    />
                    <path
                      d="M 10 130 Q 55 130 75 80 Q 90 10 105 80 Q 125 130 170 130"
                      fill="none"
                      stroke="#818cf8"
                      strokeWidth="2"
                    />
                    {/* Mean Center line */}
                    <line x1="90" y1="10" x2="90" y2="130" stroke="#06b6d4" strokeDasharray="2 2" strokeWidth="1.5" />
                  </svg>

                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] flex justify-between">
                    <span>Mean: <strong className="text-white">{spcStats.mean}</strong></span>
                    <span>StdDev: <strong className="text-cyan-400">{spcStats.std}</strong></span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Right 5 Columns: 3D Surface Topography & 2D Silicon Wafer Die Map */}
          <div className="xl:col-span-5 space-y-6">
            
            {/* 3. Three.js / Canvas 3D Surface Deviation & Thermal Topography */}
            <section className="bg-[#090d16]/95 border border-slate-800/90 rounded-2xl p-5 shadow-2xl flex flex-col relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 z-10 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-5 rounded-sm bg-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      3D 표면 편차 & 열화상 토포그래피 (WebGL/Canvas)
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans">
                      마우스 드래그: 3D 회전 | 슬라이더: 나노미터(nm) 단차 증폭
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs">
                  <button
                    onClick={() => setMode3D('wire')}
                    className={`px-2 py-1 rounded border ${mode3D === 'wire' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => setMode3D('solid')}
                    className={`px-2 py-1 rounded border ${mode3D === 'solid' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                  >
                    Solid
                  </button>
                  <button
                    onClick={() => setCodeModalType('3d')}
                    className="px-2 py-1 rounded bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:text-white"
                  >
                    &lt;/&gt;
                  </button>
                </div>
              </div>

              {/* 3D Canvas Container */}
              <div 
                className="w-full h-[280px] bg-[#04060b] rounded-xl border border-slate-800/90 relative overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
                onMouseDown={(e) => {
                  isDragging3D.current = true;
                  dragStartPos.current = { x: e.clientX, y: e.clientY };
                }}
                onMouseMove={(e) => {
                  if (!isDragging3D.current) return;
                  const dx = e.clientX - dragStartPos.current.x;
                  const dy = e.clientY - dragStartPos.current.y;
                  dragStartPos.current = { x: e.clientX, y: e.clientY };
                  setRotationAngle(prev => ({
                    yaw: prev.yaw + dx * 0.01,
                    pitch: Math.min(Math.max(prev.pitch + dy * 0.01, 0.1), 1.2)
                  }));
                }}
                onMouseUp={() => { isDragging3D.current = false; }}
                onMouseLeave={() => { isDragging3D.current = false; }}
              >
                {/* HUD Overlay */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none space-y-1 font-mono text-[10px]">
                  <div className="bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded text-cyan-300">
                    Z-Axis Peak: <span className="font-bold">+14.2 nm</span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                    Uniformity: <span className="text-emerald-400 font-bold">99.12%</span>
                  </div>
                </div>

                <canvas
                  ref={canvas3DRef}
                  width={460}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Sliders */}
              <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Z축 편차 증폭 (Amplitude)</span>
                    <span className="text-cyan-400 font-bold">{amp3D}x</span>
                  </div>
                  <input
                    type="range" min="0.4" max="3.5" step="0.1" value={amp3D}
                    onChange={(e) => setAmp3D(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">주파수 파장 (Spatial Freq)</span>
                    <span className="text-cyan-400 font-bold">{freq3D}</span>
                  </div>
                  <input
                    type="range" min="0.8" max="4.5" step="0.1" value={freq3D}
                    onChange={(e) => setFreq3D(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>
            </section>

            {/* 4. Silicon Wafer Die Binning Map */}
            <section className="bg-[#090d16]/95 border border-slate-800/90 rounded-2xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-5 rounded-sm bg-rose-500" />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      고밀도 Die / Cell Binning Map (십자선 루페)
                    </h3>
                    <p className="text-[10px] text-slate-400 font-sans">
                      마우스를 셀 위에 올리면 좌표(X, Y)와 Bin 판정 코드를 정밀 추적합니다.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCodeModalType('wafer')}
                  className="px-2 py-1 rounded bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-mono"
                >
                  &lt;/&gt;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Wafer Canvas (7 Cols) */}
                <div className="md:col-span-7 flex items-center justify-center bg-[#04060b] border border-slate-800 rounded-xl p-3">
                  <canvas
                    ref={waferCanvasRef}
                    width={260}
                    height={260}
                    onMouseMove={handleWaferMouseMove}
                    className="cursor-crosshair shadow-lg"
                  />
                </div>

                {/* Right HUD Inspector (5 Cols) */}
                <div className="md:col-span-5 space-y-2.5 font-mono text-xs">
                  <div className="bg-[#050811] border border-slate-800 rounded-xl p-3 space-y-1.5">
                    <div className="text-[10px] text-slate-400 uppercase">Hovered Die Coordinate</div>
                    <div className="text-lg font-bold text-cyan-400">
                      X: {hoveredDie.x.toString().padStart(2, '0')}, Y: {hoveredDie.y.toString().padStart(2, '0')}
                    </div>
                    <div className={`text-xs font-bold ${
                      hoveredDie.bin === 1 ? 'text-emerald-400' :
                      hoveredDie.bin === 2 ? 'text-cyan-400' :
                      hoveredDie.bin === 5 ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      BIN {hoveredDie.bin} : {hoveredDie.bin === 1 ? 'PASS (Prime)' : hoveredDie.bin === 2 ? 'PASS (Std)' : hoveredDie.bin === 5 ? 'MARGINAL' : 'DEFECT'}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Leakage: {hoveredDie.leak} nA | Vth: {hoveredDie.vth}V
                    </div>
                  </div>

                  {/* Bin Statistics */}
                  <div className="bg-[#050811] border border-slate-800 rounded-xl p-3 space-y-2 text-[11px]">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" /> Bin 1 (Prime)</span>
                      <span className="text-slate-200 font-bold">89.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" /> Bin 2 (Standard)</span>
                      <span className="text-slate-200 font-bold">7.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400" /> Bin 5 (Marginal)</span>
                      <span className="text-slate-200 font-bold">2.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500" /> Bin 9 (Defect)</span>
                      <span className="text-rose-400 font-bold">1.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>

      </main>

      {/* Code Snippet Modal */}
      {codeModalType && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                {codeModalType === 'spc' ? '실시간 SPC X-Bar 차트 코드' : codeModalType === '3d' ? '3D 표면 토포그래피 WebGL 소스' : '웨이퍼 Die Binning Map 소스'}
              </h3>
              <button onClick={() => setCodeModalType(null)} className="text-slate-400 hover:text-white font-bold text-sm">
                ✕ 닫기
              </button>
            </div>

            <pre className="font-mono text-xs text-slate-300 bg-slate-950 p-4 rounded-xl overflow-x-auto max-h-96 border border-slate-800">
              {codeModalType === 'spc' ? `// SPC X-Bar Real-time Control Chart
const ucl = target + 3 * sigma;
const lcl = target - 3 * sigma;
const isViolated = val > ucl || val < lcl;` : codeModalType === '3d' ? `// 3D Nanometer Surface Deviation Projection
const z = Math.sin(dist * freq) * amp;
const projected = project3D(x, y, z, rotation);` : `// Silicon Wafer Die Binning Matrix
const distFromCenter = Math.hypot(dx - cx, dy - cy);
const isPrime = distFromCenter < radius * 0.8 && testParam.leakage < 1.0;`}
            </pre>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => copyCode(codeModalType, 'modal-code')}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                {copiedKey === 'modal-code' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>클립보드 복사</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
