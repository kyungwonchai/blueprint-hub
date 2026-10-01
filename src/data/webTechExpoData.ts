export interface WebTechExpoItem {
  id: string;
  title: string;
  category: 'Raytracing & Shaders' | 'Physics & Simulation' | 'Cosmology & Weather' | 'Anamorphic & 3D';
  badge: string;
  tagline: string;
  demoUrl: string;
  techKeywords: string[];
  worldInsight: string; // 세상물정/산업 적용 인사이트
  howItWorks: string;   // 기술 원리
  aiDirectivePrompt: string; // AI 주문용 프롬프트
}

export const WEB_TECH_EXPO_DATA: WebTechExpoItem[] = [
  {
    id: 'raytrace-world',
    title: '실시간 하드웨어 레이트레이싱 (광선 추적 & 굴절)',
    category: 'Raytracing & Shaders',
    badge: 'WebGPU / GLSL',
    tagline: '웹 브라우저에서 GPU 셰이더로 계산하는 물리 기반 유리/거울 광선 굴절',
    demoUrl: '/blueprint-hub/aitrend/05-raytrace/index.html',
    techKeywords: ['Raytracing', 'GLSL Shader', 'WebGPU', 'Fresnel Refraction', 'PBR'],
    worldInsight: '기존에는 수백만 원짜리 3D 렌더링 서버에서만 돌리던 실시간 광선 추적을, 이제는 가벼운 노트북 웹 브라우저에서 60fps로 돌리는 시대입니다. 자동차 3D 커스텀 견적서, 보석/주얼리 실물 시뮬레이션, 메타버스 쇼룸의 핵심 기술입니다.',
    howItWorks: '카메라에서 화면의 각 픽셀로 광선(Ray)을 쏘아 물체 표면과의 교차점을 구하고, 스넬의 법칙(Snell\'s Law)과 프레넬 반사 공식을 실시간 GPU 프래그먼트 셰이더로 계산하여 뒤집힌 굴절 상을 만듭니다.',
    aiDirectivePrompt: `"Three.js 또는 순수 GLSL 프래그먼트 셰이더를 사용하여, 웹 브라우저에서 실시간으로 빛이 유리 구슬을 통과해 뒤 배경이 굴절되어 비치는 레이트레이싱 데모를 작성해줘."`
  },
  {
    id: 'droneshow-5000',
    title: '5,000대 군집 드론 3D 라이트쇼 시뮬레이터',
    category: 'Anamorphic & 3D',
    badge: '3D Particle Swarm',
    tagline: '혹등고래, DNA 나선, 은하계로 실시간 변형되는 5,000대 공간 드론 군집',
    demoUrl: '/blueprint-hub/aitrend/16-droneshow/index.html',
    techKeywords: ['Flocking Algorithm', 'Boids Simulation', 'InstancedMesh', '3D Morphing'],
    worldInsight: '올림픽 개막식이나 부산 광안리 드론쇼에서 실제로 쓰이는 군집 비행 궤적 알고리즘입니다. 인공지능이 3D 모델의 정점 좌표를 드론 5천 대의 개별 목표 좌표로 분배하여 충돌 없이 매끄럽게 변형합니다.',
    howItWorks: 'Three.js InstancedMesh를 사용하여 5,000개의 LED 드론을 단 1번의 Draw Call로 렌더링하고, 목표 형태(DNA, 혹등고래, 토성 등)의 정점 배열 간 부드러운 LERP 보간 이동을 수행합니다.',
    aiDirectivePrompt: `"Three.js의 InstancedMesh를 활용하여 5,000개의 발광 파티클이 구 형태에서 DNA 나선 및 혹등고래 형태로 부드럽게 변형(Morphing)되는 군집 드론쇼 3D 시뮬레이션을 구현해줘."`
  },
  {
    id: 'blackhole-lensing',
    title: '아인슈타인 일반상대성이론 중력 렌징 블랙홀',
    category: 'Cosmology & Weather',
    badge: 'Astrophysics Shader',
    tagline: '사건의 지평선(Event Horizon)과 강착원반의 빛 왜곡을 물리 공식으로 렌더링',
    demoUrl: '/blueprint-hub/aitrend/11-blackhole/index.html',
    techKeywords: ['General Relativity', 'Gravitational Lensing', 'Accretion Disk', 'Doppler Beaming'],
    worldInsight: '영화 <인터스텔라>에 쓰인 킵 손(Kip Thorne) 교수의 블랙홀 광선 궤적 방정식을 웹 브라우저 셰이더로 옮겨놓은 첨단 물리 시각화입니다. 과학 교육, 천문 연구, SF 게임의 배경 렌더링에 활용됩니다.',
    howItWorks: '슈바르츠실트(Schwarzschild) 계량을 기반으로 블랙홀의 강력한 중력장 주변을 지나는 빛의 휘어짐(Light Bending) 각도를 적분 계산하여 뒷배경의 별빛과 은하수가 도넛 형태로 왜곡되어 보이게 합니다.',
    aiDirectivePrompt: `"WebGL GLSL 셰이더를 사용하여 마우스 시점에 따라 주변 배경 빛이 도넛 형태로 휘어지는 아인슈타인 중력 렌즈 효과와 회전하는 강착원반 블랙홀을 시각화해줘."`
  },
  {
    id: 'weather-raytrace',
    title: '천문 시뮬레이션 기반 레이트레이스 실시간 기상예보',
    category: 'Cosmology & Weather',
    badge: 'Real-time API Sky',
    tagline: '실제 서울 기상청 API와 태양 고도각을 계산하여 하늘의 구름과 노을을 렌더링',
    demoUrl: '/blueprint-hub/aitrend/01-dashboard/index.html',
    techKeywords: ['Atmospheric Rayleigh Scattering', 'Volumetric Clouds', 'Solar Position Calc', 'Weather API'],
    worldInsight: '날씨를 단순히 "맑음 ☀️" 아이콘으로 보여주던 1세대 날씨 앱에서 탈피하여, 실제 사용자 도시의 실시간 위도/경도 태양 고도와 습도 데이터를 읽어와 3D 하늘을 그대로 시뮬레이션하는 차세대 날씨 UX입니다.',
    howItWorks: '레일리 산란(Rayleigh Scattering)과 미 산란(Mie Scattering) 공식을 적용하여 해질녘에는 붉은 노을을, 비 오는 날에는 볼륨 구름과 번개 뇌우를 수학적으로 렌더링합니다.',
    aiDirectivePrompt: `"실제 현재 시각과 날씨 API(맑음/비/눈/노을)에 따라 하늘의 태양 위치와 대기 산란 색상, 구름의 밀도가 동적으로 변하는 3D 볼류메트릭 날씨 대시보드를 만들어줘."`
  },
  {
    id: 'waterdrop-lens',
    title: '약수터 물방울 굴절 & 표면장력 시뮬레이션',
    category: 'Physics & Simulation',
    badge: 'Surface Tension SPH',
    tagline: '물방울의 맺힘, 표면장력 한계, 낙하 후 수면 파문까지 실사 렌더링',
    demoUrl: '/blueprint-hub/aitrend/12-waterdrop/index.html',
    techKeywords: ['Fluid Surface Tension', 'Water Droplet Refraction', 'Ripple Wave Equation', 'Canvas 2D/3D'],
    worldInsight: '화장품 브랜드의 스킨케어 흡수 효과 시연, 고급 음료/주류 웹사이트의 프리미엄 브랜딩 인터랙션, 물리 시뮬레이션 교육 등에 널리 쓰이는 극도의 디테일 표현 기법입니다.',
    howItWorks: '물방울이 나뭇잎 끝에 매달려 표면장력으로 버티다가 임계 질량에 도달했을 때 중력에 의해 떨어지며, 수면에 닿는 순간 2차원 파동 방정식(Wave Equation)을 풀어 파문 링을 확산시킵니다.',
    aiDirectivePrompt: `"물방울이 맺혔다가 중력으로 떨어지며 수면에 닿았을 때 동심원 파문이 퍼져나가고, 물방울 내부에는 배경이 거꾸로 굴절되어 비치는 인터랙티브 시뮬레이션을 구현해줘."`
  },
  {
    id: 'anamorphic-billboard',
    title: '수조 속 혹등고래 3D 아나몰픽 전광판',
    category: 'Anamorphic & 3D',
    badge: 'Anamorphic Illusion',
    tagline: '코엑스 SM타운 전광판의 착시 원리 — 건물 모서리를 뚫고 나오는 입체 고래',
    demoUrl: '/blueprint-hub/aitrend/13-billboard/index.html',
    techKeywords: ['Anamorphic Projection', 'Off-Axis Perspective', 'LED Mesh Texture', 'Optical Illusion'],
    worldInsight: '서울 코엑스나 뉴욕 타임스퀘어에서 전 세계적인 화제를 모았던 3D 옥외광고(아나몰픽 일루전)의 투사 원리를 브라우저 안에서 360도 회전하며 입체 시야각을 관찰할 수 있게 만든 쇼케이스입니다.',
    howItWorks: '관람객의 특정 시점(Sweet Spot)을 기준으로 90도 꺾인 건물 벽면에 역원근 왜곡(Perspective Pre-distortion)을 주어 평면 화면이 깊은 유리 수조처럼 보이게 만듭니다.',
    aiDirectivePrompt: `"건물 모서리 전광판 안에서 파도가 치고 고래가 헤엄치며 화면 밖으로 튀어나오는 듯한 3D 아나몰픽 착시 프로젝션 시뮬레이터를 Three.js로 구현해줘."`
  }
];
