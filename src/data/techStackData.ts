import { TechStackItem } from '../types';

export const TECH_STACKS_DATA: TechStackItem[] = [
  {
    id: 'react-19-tailwind',
    name: 'React 19 + Tailwind CSS v4 + Vite',
    category: 'Frontend',
    yearTrend: '2026 메인스트림 표준 (SPA/대시보드 1위)',
    tagline: '가장 빠른 HMR, 컴포넌트 생태계의 절대 강자, AI 코드 생성 0% 오차',
    badge: 'Standard SPA',
    pros: [
      '모든 AI 모델(Claude, GPT-4o, Gemini)이 100% 완벽한 무에러 코드를 출력함',
      'Tailwind CSS v4의 제로 런타임 초고속 CSS 빌드',
      'Vite 기반 서브 밀리초 Hot Module Replacement'
    ],
    cons: [
      '초기 번들 다운로드가 필요한 클라이언트 렌더링(CSR) 구조',
      '대규모 SEO(검색엔진 최적화)가 필요한 공개 블로그에는 부적합'
    ],
    bundleSize: '~48 KB (Gzipped)',
    performanceScore: 96,
    aiEaseScore: 99,
    whenToUse: '사내 어드민, 실시간 관제 대시보드, 빠른 인터랙티브 SaaS 웹앱, 프로토타입 제작 시 무조건 1순위.',
    sampleCode: `// React 19 Action & State Hooks
import React, { useState, useTransition } from 'react';

export default function DashboardCounter() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleOptimisticUpdate = () => {
    startTransition(async () => {
      setCount((c) => c + 1);
      await fetch('/api/analytics/ping', { method: 'POST' });
    });
  };

  return (
    <button 
      onClick={handleOptimisticUpdate}
      className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold shadow-lg transition-all"
    >
      {isPending ? '동기화 중...' : \`클릭 수: \${count}\`}
    </button>
  );
}`,
    aiDirectiveTemplate: `"React 19와 Tailwind CSS v4, Lucide React 아이콘을 사용하여 단일 페이지(SPA) 대시보드를 만들어줘. 상태 관리는 React 내장 useState/useTransition을 쓰고 글래스모피즘 다크 룩으로 디자인해줘."`
  },
  {
    id: 'nextjs-15-app-router',
    name: 'Next.js 15 (App Router + Server Actions)',
    category: 'Rendering Strategy',
    yearTrend: '2026 풀스택 웹 & B2C 상용 서비스 1위',
    tagline: 'SSR/SSG/스트리밍 하이브리드 렌더링, 서버 액션 기반 제로 API 보일러플레이트',
    badge: 'Fullstack SSR',
    pros: [
      '완벽한 검색엔진 최적화(SEO) 및 소셜 공유 메타 태그 렌더링',
      '서버 컴포넌트(RSC)로 클라이언트 JS 번들 대폭 절감',
      'Server Actions로 백엔드 API 라우트 없이 직접 DB 쿼리 가능'
    ],
    cons: [
      'App Router의 캐싱 규칙과 서버/클라이언트 경계선(use client) 러닝커브',
      'AI가 간혹 이전 Pages Router 문법과 혼동할 수 있음'
    ],
    bundleSize: '~85 KB (SSR 스트리밍)',
    performanceScore: 94,
    aiEaseScore: 88,
    whenToUse: '검색 노출이 필수인 랜딩 페이지, B2C 이커머스, 사용자 인증이 결합된 대형 상용 서비스.',
    sampleCode: `// Next.js 15 Server Component + Server Action
import { revalidatePath } from 'next/cache';

async function updateStatus(formData: FormData) {
  'use server';
  const newStatus = formData.get('status');
  // 직접 DB 업데이트 수행
  revalidatePath('/dashboard');
}

export default async function ServerDashboard() {
  const data = await fetch('https://api.example.com/stats', { cache: 'no-store' }).then(r => r.json());

  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl">
      <h2 className="text-xl font-bold">서버 사이드 렌더링 대시보드: {data.value}</h2>
      <form action={updateStatus}>
        <input name="status" defaultValue="Active" className="bg-slate-800 p-2 rounded" />
        <button type="submit" className="ml-2 px-4 py-2 bg-indigo-600 rounded">저장</button>
      </form>
    </div>
  );
}`,
    aiDirectiveTemplate: `"Next.js 15 App Router와 TypeScript를 사용해줘. 서버 컴포넌트와 Server Actions를 적극 활용하고 'use client'는 인터랙션이 필요한 UI에만 한정해서 작성해줘."`
  },
  {
    id: 'svelte-5-runes',
    name: 'Svelte 5 (Runes 반응형 엔진)',
    category: 'Frontend',
    yearTrend: '2026 초경량 하이엔드 런타임 혁신',
    tagline: '가상 돔(Virtual DOM) 없는 네이티브 DOM 변이, 극강의 런타임 속도',
    badge: 'Zero-VDOM',
    pros: [
      '가상 돔 연산이 없어 브라우저 메모리 점유율과 CPU 소비가 가장 낮음',
      '새로운 Runes ($state, $derived) 문법으로 선언적이고 직관적인 코드',
      '번들 크기가 매우 작아 저사양 기기나 임베디드 웹에서 발열 0%'
    ],
    cons: [
      'React 대비 거대한 서드파티 UI 컴포넌트 라이브러리 풀이 상대적으로 적음'
    ],
    bundleSize: '~16 KB (초경량)',
    performanceScore: 99,
    aiEaseScore: 86,
    whenToUse: '극도로 빠른 렌더링 응답 속도가 필요한 트레이딩 차트 뷰어, 임베디드 디스플레이, 배터리 효율 극대화 앱.',
    sampleCode: `<!-- Svelte 5 Runes Example -->
<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);

  function increment() {
    count += 1;
  }
</script>

<div class="card bg-slate-900 p-6 rounded-2xl text-white">
  <h3>Svelte 5 Runes 카운터: {count}</h3>
  <p>2배 값: {doubled}</p>
  <button onclick={increment} class="px-4 py-2 bg-fuchsia-600 rounded-xl">
    +1 증가
  </button>
</div>`,
    aiDirectiveTemplate: `"Svelte 5 최신 Runes 문법($state, $derived, $effect)을 사용하여 초경량 반응형 컴포넌트를 작성해줘."`
  },
  {
    id: 'threejs-webgpu-glsl',
    name: 'Three.js + WebGPU / GLSL Shaders',
    category: 'Graphics & 3D',
    yearTrend: '2026 3D 인터랙티브 & 피지컬 웹 표준',
    tagline: '브라우저에서 GPU 하드웨어 가속 레이트레이싱, 입체 아나몰픽, 5천 대 파티클 연산',
    badge: 'WebGPU Hardware Accel',
    pros: [
      '네이티브 그래픽 카드 셰이더(Fragment/Vertex) 파워를 브라우저에서 60FPS로 온전히 활용',
      '영화급 물리 반사(PBR), 굴절 렌즈, 유체 역학 파티클을 3차원 공간에 구현',
      'Three.js의 방대한 3D 지오메트리, 카메라 컨트롤, 조명 생태계'
    ],
    cons: [
      '일반 웹 개발자에게는 3차원 벡터 선형대수 및 행렬 변환 러닝커브가 존재함'
    ],
    bundleSize: '~120 KB (WebGL 엔진)',
    performanceScore: 98,
    aiEaseScore: 92,
    whenToUse: '3D 제품 360 쇼룸, 스마트 팩토리 디지털 트윈, 공간 군집 드론쇼, 실시간 물리 시뮬레이션.',
    sampleCode: `// Three.js + WebGL 3D Mesh Animation
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(400, 300);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshPhysicalMaterial({
  color: 0x8b5cf6,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.02;
  renderer.render(scene, camera);
}
animate();`,
    aiDirectiveTemplate: `"Three.js와 WebGL을 사용하여, 사용자의 마우스 회전에 반응하고 물리적 반사광(MeshPhysicalMaterial)이 빛나는 3D 인터랙티브 씬을 구현해줘."`
  },
  {
    id: 'fastapi-uvicorn-python',
    name: 'FastAPI + Uvicorn (Python 비동기 백엔드)',
    category: 'Backend',
    yearTrend: '2026 AI / ML / 데이터 분석 백엔드 표준 1위',
    tagline: 'Pydantic v2 초고속 타입 검증, OpenAPI Swagger 자동 문서화, 비동기 AsyncIO',
    badge: 'AI-Native Backend',
    pros: [
      'Python AI/데이터 라이브러리(PyTorch, NumPy, Pandas, LangChain)와 100% 직통 연동',
      '자동 생성되는 대화형 Swagger API 문서 (/docs)',
      'Rust 기반 Pydantic v2 파싱으로 Node.js 못지않은 고성능 처리'
    ],
    cons: [
      '단순 CRUD 웹사이트인 경우 Node.js 대비 추가적인 파이썬 런타임/가상환경 필요'
    ],
    bundleSize: 'N/A (Backend Engine)',
    performanceScore: 92,
    aiEaseScore: 98,
    whenToUse: 'AI LLM 에이전트 연동, 머신러닝 모델 서빙, 데이터 파이프라인 백엔드.',
    sampleCode: `# FastAPI Python 3.12 Backend
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="AI Blueprint API", version="2026.1")

class BlueprintRequest(BaseModel):
    title: str
    components: list[str]

@app.post("/api/generate")
async def generate_blueprint(req: BlueprintRequest):
    return {"status": "success", "id": "bp_2026_fast", "title": req.title}`,
    aiDirectiveTemplate: `"FastAPI와 Python 3.12, Pydantic v2를 사용해서 비동기(async def) REST API 백엔드를 구현해줘. Swagger docs 연동을 위해 응답 모델과 타입 힌트를 엄격하게 작성해줘."`
  },
  {
    id: 'd3-observable-data-viz',
    name: 'D3.js + Observable Plot (과학/통계 시각화)',
    category: 'Graphics & 3D',
    yearTrend: '2026 데이터 저널리즘 & 비스포크 차트의 절대 기준',
    tagline: '픽셀 단위 100% 제어권, 쌍곡 기하학·코드 다이어그램·위상수학 렌더링',
    badge: 'Pure Data Grammar',
    pros: [
      '상용 차트 툴의 한계를 벗어나 어떤 기하학적·수학적 형태의 시각화도 생성 가능',
      '데이터 기반 SVG/Canvas 바인딩 및 부드러운 전이 애니메이션(Transition)',
      '수학 공식(베지어, 극좌표, 쌍곡기하, 트리맵)과의 완벽한 융합'
    ],
    cons: [
      '기본 차트 설정에 필요한 보일러플레이트와 수학적 스케일 계산 이해 필요'
    ],
    bundleSize: '~70 KB (Modular D3)',
    performanceScore: 95,
    aiEaseScore: 94,
    whenToUse: '공정간 원자재 이동 코드 다이어그램, 릿지라인 조이플롯, 다차원 평행 좌표계 등 독창적 분석 차트 구축 시.',
    sampleCode: `// D3.js SVG Curve Generator
import * as d3 from 'd3';

const data = [10, 25, 45, 80, 120, 95, 60, 30, 10];
const xScale = d3.scaleLinear().domain([0, 8]).range([0, 300]);
const yScale = d3.scaleLinear().domain([0, 120]).range([150, 0]);

const lineGenerator = d3.line<number>()
  .x((_, i) => xScale(i))
  .y(d => yScale(d))
  .curve(d3.curveBasis);

const pathD = lineGenerator(data);
// <path d={pathD} stroke="#8b5cf6" fill="none" />`,
    aiDirectiveTemplate: `"D3.js의 scaleLinear와 d3.line 곡선 생성기를 사용하여, 부드러운 스플라인 곡선과 영역 채우기를 제공하는 데이터 시각화 컴포넌트를 작성해줘."`
  },
  {
    id: 'tauri-2-rust',
    name: 'Tauri 2.0 + Rust (초경량 크로스플랫폼 네이티브 엔진)',
    category: 'Frontend',
    yearTrend: '2026 Electron 대체 1순위 (초소형 15MB 번들, 메모리 30MB)',
    tagline: 'OS 웹뷰 직접 바인딩 + Rust 시스템 보안/성능, 데스크톱/모바일 동시 빌드',
    badge: 'Native Hybrid',
    pros: [
      'Electron 대비 1/10 수준의 극단적으로 작은 설치 파일 및 제로 메모리 누수',
      'Rust 백엔드 IPC 통신으로 OS 시스템 레벨 고속 연산 및 하드웨어 포트 제어',
      '단일 코드베이스로 Windows, macOS, Linux, Android, iOS 멀티타깃 배포'
    ],
    cons: [
      '시스템 레벨 기능 확장을 위해 Rust 언어 지식 및 FFI 바인딩 필요'
    ],
    bundleSize: '~12 MB (Installer)',
    performanceScore: 98,
    aiEaseScore: 91,
    whenToUse: '공장 현장 MES 태블릿, 고성능 데스크톱 트레이딩 클라이언트, 가벼운 사내 툴 배포 시.',
    sampleCode: `// Tauri 2.0 Frontend Command Invocation
import { invoke } from '@tauri-apps/api/core';

async function queryHardwareTelemetry() {
  const telemetry = await invoke('get_cleanroom_telemetry', { lineId: 'LINE-A' });
  console.log('Hardware Response:', telemetry);
}`,
    aiDirectiveTemplate: `"Tauri 2.0과 React 19, TypeScript를 기반으로 가벼운 데스크톱 전용 앱을 설계해줘. Rust 백엔드와 invoke 명령어를 주고받는 타입 안전 IPC 인터페이스를 작성해줘."`
  },
  {
    id: 'duckdb-wasm-arrow',
    name: 'DuckDB-Wasm + Apache Arrow (브라우저 인메모리 OLAP)',
    category: 'Data Visualization',
    yearTrend: '2026 클라이언트 데이터 웨어하우스의 혁명',
    tagline: '서버 왕복 없이 브라우저에서 1,000만 행 SQL 즉시 쿼리 및 분석',
    badge: 'Browser OLAP',
    pros: [
      '브라우저 WebAssembly 상에서 작동하는 풀스펙 벡터화 컬럼형 SQL 엔진',
      'Parquet, CSV, Arrow IPC 파일을 제로 네트워크 지연으로 즉각 분석',
      '서버 비용을 90% 이상 절감하면서 사용자에게 즉각적인 인터랙티브 필터링 경험 제공'
    ],
    cons: [
      '초기 Wasm 바이너리 로딩 시간(~8MB) 및 대용량 데이터 시 클라이언트 메모리 사용량 증가'
    ],
    bundleSize: '~6.8 MB (Wasm Binary)',
    performanceScore: 99,
    aiEaseScore: 89,
    whenToUse: '수백만 건의 불량 로그 전수 분석, 엑셀/Parquet 대용량 파일 즉석 대시보드, 서버 부하 없는 BI 분석.',
    sampleCode: `// DuckDB-Wasm In-Browser SQL Execution
import * as duckdb from '@duckdb/duckdb-wasm';

const conn = await db.connect();
const result = await conn.query(\`
  SELECT line_id, AVG(yield_rate) as avg_yield, COUNT(*) as lot_count
  FROM read_parquet('telemetry_2026.parquet')
  GROUP BY line_id
  ORDER BY avg_yield DESC;
\`);
console.table(result.toArray());`,
    aiDirectiveTemplate: `"DuckDB-Wasm과 Apache Arrow를 사용하여, 수십만 행의 클린룸 센서 데이터를 브라우저 로컬에서 SQL 집계하여 실시간 차트로 렌더링하는 컴포넌트를 작성해줘."`
  },
  {
    id: 'nodejs-express-typescript',
    name: 'Node.js Express / Fastify + TypeScript (실시간 마이크로서비스)',
    category: 'Backend',
    yearTrend: '2026 풀스택 일원화 표준 백엔드',
    tagline: '프론트엔드와 100% 동일한 타입 공유, Zero-Downtime Hot Reload, 경량 REST/WS API',
    badge: 'Microservice Core',
    pros: [
      '프론트엔드와 백엔드 간 TypeScript 인터페이스 공유로 API 스키마 불일치 0%',
      '초경량 메모리 점유 및 수만 개 WebSocket/SSE 실시간 텔레메트리 스트림 동시 브로드캐스트',
      'NPM 생태계의 풍부한 라이브러리와 간결한 Docker 컨테이너 배포'
    ],
    cons: [
      'CPU 집약적 과학/행렬 연산 시 Worker Threads 분리 또는 Rust/Python 모듈 연동 권장'
    ],
    bundleSize: 'N/A (Backend Service)',
    performanceScore: 94,
    aiEaseScore: 99,
    whenToUse: '실시간 관제 대시보드 백엔드, 블루프린트 스냅샷 API, 사내 데이터 동기화 서비스.',
    sampleCode: `// Node.js Express 4.21 TypeScript Router
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/api/telemetry/live', (req: Request, res: Response) => {
  res.json({
    timestamp: new Date().toISOString(),
    status: 'OPTIMAL',
    activeLines: ['LINE-A', 'LINE-B', 'LINE-C']
  });
});`,
    aiDirectiveTemplate: `"Node.js Express와 TypeScript를 기반으로 REST API 및 SSE 스트림 엔드포인트를 구현해줘. 요청 검증과 오류 처리 미들웨어를 견고하게 구성해줘."`
  }
];
