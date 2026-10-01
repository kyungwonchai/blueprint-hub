export interface WebTechExpoItem {
  id: string;
  title: string;
  category: 'Raytracing & Shaders' | 'Physics & Simulation' | 'Cosmology & Weather' | 'Anamorphic & 3D' | 'Tactile & Hardware' | 'Education & Arcade';
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
    id: 'weather-raytrace',
    title: '① 천문 시뮬레이션 기반 레이트레이스 실시간 기상예보',
    category: 'Cosmology & Weather',
    badge: 'Real-time Sky API',
    tagline: '실제 서울 기상청 API와 태양 고도각을 계산하여 하늘의 구름, 비, 노을을 렌더링',
    demoUrl: '/blueprint-hub/aitrend/01-dashboard/index.html',
    techKeywords: ['Atmospheric Rayleigh Scattering', 'Volumetric Clouds', 'Solar Position Calc', 'Weather API'],
    worldInsight: '단순한 날씨 아이콘에서 탈피하여 실제 사용자 도시의 위도/경도 태양 고도와 습도 데이터를 읽어와 3D 하늘을 그대로 시뮬레이션하는 차세대 날씨 UX입니다.',
    howItWorks: '레일리 산란(Rayleigh Scattering)과 미 산란(Mie Scattering) 공식을 적용하여 해질녘에는 붉은 노을을, 비 오는 날에는 볼륨 구름과 번개 뇌우를 수학적으로 렌더링합니다.',
    aiDirectivePrompt: `"실제 현재 시각과 날씨 API(맑음/비/눈/노을)에 따라 하늘의 태양 위치와 대기 산란 색상, 구름의 밀도가 동적으로 변하는 3D 볼류메트릭 날씨 대시보드를 만들어줘."`
  },
  {
    id: 'fluid-simulation',
    title: '② 고성능 2D 격자 유체 역학 시뮬레이터 (Navier-Stokes)',
    category: 'Physics & Simulation',
    badge: 'Eulerian Fluid',
    tagline: '마우스 드래그에 반응하는 실시간 나비에-스토크스 유체 속도장 및 염료 확산',
    demoUrl: '/blueprint-hub/aitrend/02-simulation/index.html',
    techKeywords: ['Navier-Stokes Grid', 'Velocity Field Advection', 'Vorticity Confinement', 'Canvas 2D/GL'],
    worldInsight: '게임 엔진이나 CG 소프트웨어의 전유물이던 유체 시뮬레이션을 가벼운 브라우저 캔버스에서 60FPS로 구동하여 인터랙티브 마케팅 및 교육용 시연에 활용합니다.',
    howItWorks: '오일러리안(Eulerian) 격자 위에서 속도장 이류(Advection), 압력 포아송 방정식(Poisson Equation), 점성 확산 단계를 풀고 와도(Vorticity)를 보존합니다.',
    aiDirectivePrompt: `"나비에-스토크스 방정식을 실시간으로 풀어 마우스 드래그 방향으로 화려한 네온 염료가 소용돌이치며 퍼져나가는 고속 유체 시뮬레이션을 구현해줘."`
  },
  {
    id: 'math-strike-arcade',
    title: '③ MATH STRIKE 암산 아케이드 & 무결점 한영 타자 연습',
    category: 'Education & Arcade',
    badge: 'Physical Keycode Engine',
    tagline: '물리 키보드(e.code) 매칭으로 IME 한영 전환 스트레스 0%를 구현한 타이핑 아케이드',
    demoUrl: '/blueprint-hub/aitrend/03-math-strike/index.html',
    techKeywords: ['e.code Key Event', 'Arcade Game Loop', 'Dual Typing Engine', 'Mental Math'],
    worldInsight: '웹 브라우저의 한글 IME 조합 문제로 타자 게임이 깨지는 고질적 문제를 물리 키보드 하드웨어 코드로 우회하여 완벽한 입력 감각을 제공하는 교육용 아케이드입니다.',
    howItWorks: '브라우저 e.key 대신 OS 하드웨어 키보드 스캔코드(e.code)를 직접 매핑하여 한영 키를 누르지 않아도 즉각 알파벳과 한글이 분기 매칭됩니다.',
    aiDirectivePrompt: `"키보드 물리 스캔코드(e.code)를 판별하여 한글/영문 입력 모드와 무관하게 하늘에서 떨어지는 단어를 완벽하게 격추하는 웹 타자 게임을 작성해줘."`
  },
  {
    id: 'particles-typography',
    title: '④ 파티클 키네틱 타이포그래피 & 3D 분산 폭발',
    category: 'Anamorphic & 3D',
    badge: 'Kinetic Particle Font',
    tagline: '마우스 커서 반발력에 흩어졌다 다시 정렬되는 10,000개 인텔리전트 폰트 파티클',
    demoUrl: '/blueprint-hub/aitrend/04-particles/index.html',
    techKeywords: ['Pixel Sampling', 'Repulsion Spring Physics', 'Canvas Acceleration', 'Typography'],
    worldInsight: '글로벌 럭셔리 브랜드의 랜딩 페이지 인터랙션으로 쓰이며, 평범한 텍스트를 마우스와 물리적으로 상호작용하는 감각적인 예술품으로 전환합니다.',
    howItWorks: '오프스크린 캔버스에 폰트를 그린 후 픽셀 데이터(getImageData)를 추출해 알파값이 존재하는 위치에 스프링 물리 파티클을 배치하고 반발력을 연산합니다.',
    aiDirectivePrompt: `"텍스트를 픽셀 단위로 샘플링하여 수천 개의 빛나는 파티클로 변환하고, 마우스가 다가가면 폭발하듯 흩어졌다가 원래 글자로 복원되는 시뮬레이션을 만들어줘."`
  },
  {
    id: 'raytrace-world',
    title: '⑤ 실시간 하드웨어 레이트레이싱 (광선 추적 & 굴절)',
    category: 'Raytracing & Shaders',
    badge: 'WebGPU / GLSL',
    tagline: '웹 브라우저에서 GPU 셰이더로 계산하는 물리 기반 유리/거울 광선 굴절',
    demoUrl: '/blueprint-hub/aitrend/05-raytrace/index.html',
    techKeywords: ['Raytracing', 'GLSL Shader', 'WebGPU', 'Fresnel Refraction', 'PBR'],
    worldInsight: '수백만 원짜리 3D 렌더링 서버에서만 돌리던 실시간 광선 추적을 가벼운 브라우저에서 60fps로 구동. 자동차 3D 견적서 및 메타버스 쇼룸의 핵심입니다.',
    howItWorks: '카메라에서 화면의 각 픽셀로 광선을 쏘아 물체 표면과의 교차점을 구하고, 스넬의 법칙과 프레넬 반사 공식을 실시간 GPU 프래그먼트 셰이더로 계산합니다.',
    aiDirectivePrompt: `"Three.js 또는 순수 GLSL 프래그먼트 셰이더를 사용하여, 웹 브라우저에서 실시간으로 빛이 유리 구슬을 통과해 뒤 배경이 굴절되어 비치는 레이트레이싱 데모를 작성해줘."`
  },
  {
    id: 'terrain-flight',
    title: '⑥ 무한 프랙탈 절차적 3D 지형 비행 시뮬레이터',
    category: 'Raytracing & Shaders',
    badge: 'Perlin Raymarching',
    tagline: '절차적 펄린 노이즈(Perlin Noise)로 끝없이 생성되는 협곡과 산맥 저고도 초음속 비행',
    demoUrl: '/blueprint-hub/aitrend/06-terrain/index.html',
    techKeywords: ['Raymarching Terrain', 'Simplex Noise', 'Volumetric Fog', 'Procedural Mesh'],
    worldInsight: '용량 큰 3D 모델 파일을 다운로드할 필요 없이 수학 수식 한 줄로 수십 킬로미터의 거대한 산맥과 협곡 지형을 실시간 무한 생성하는 기법입니다.',
    howItWorks: '레이마칭(Raymarching) 알고리즘과 심플렉스 노이즈 프랙탈 옥타브(FBM)를 GPU에서 연속 계산하여 카메라 이동에 맞춰 지형 고도를 실시간 산출합니다.',
    aiDirectivePrompt: `"GLSL 레이마칭과 프랙탈 브라운 운동(FBM) 노이즈를 결합하여 끝없이 펼쳐지는 붉은 협곡과 안개 속을 초음속으로 날아가는 3D 비행 시뮬레이터를 만들어줘."`
  },
  {
    id: 'studio-materials',
    title: '⑦ 머티리얼 스튜디오 — 크롬 / 골드 / 유리 / 도자기 PBR',
    category: 'Raytracing & Shaders',
    badge: 'PBR Material Lab',
    tagline: '빛의 거칠기(Roughness)와 금속성(Metallic)을 조절하는 실시간 3D 재질 렌더링',
    demoUrl: '/blueprint-hub/aitrend/07-studio/index.html',
    techKeywords: ['PBR Materials', 'HDRI Environment Map', 'Fresnel Metallic', 'Roughness Map'],
    worldInsight: '이커머스 쇼핑몰에서 소비자가 가구, 자동차, 패션 제품의 소재(가죽, 메탈, 유리)를 실물과 똑같은 반사율로 즉각 커스텀해볼 수 있는 차세대 제품 뷰어입니다.',
    howItWorks: '물리기반 렌더링(PBR) 셰이더와 360도 HDRI 환경 맵을 사용하여 빛의 반사, 굴절, 표면 미세 굴곡을 정확한 물리 계수로 계산합니다.',
    aiDirectivePrompt: `"Three.js의 MeshPhysicalMaterial과 HDRI 환경 맵을 활용해 사용자가 골드, 크롬, 유리, 유광 도자기 재질을 실시간 전환할 수 있는 3D 제품 스튜디오를 구현해줘."`
  },
  {
    id: 'puppet-ragdoll',
    title: '⑧ 피지컬 휴먼 래그돌 물리 시뮬레이션 (2D Ver/3D Ver)',
    category: 'Physics & Simulation',
    badge: 'Verlet Ragdoll',
    tagline: '뼈대 관절 제약 조건(Joint Constraint)과 중력 충돌을 완벽히 계산하는 래그돌 물리',
    demoUrl: '/blueprint-hub/aitrend/08-puppet/index.html',
    techKeywords: ['Verlet Integration', 'Distance Constraint', 'Ragdoll Physics', 'Rigid Body Collision'],
    worldInsight: '자율주행 충돌 인체 역학 테스트, 스마트 팩토리 작업자 위험 모의실험, 게임 애니메이션 등에 사용되는 무거운 물리 엔진의 경량 웹 이식 버전입니다.',
    howItWorks: '베를레 적분법(Verlet Integration)을 이용해 뼈대 간의 거리 제약(Distance Constraint)을 반복 만족시키며 마우스 잡기와 박스 충돌 처리를 수행합니다.',
    aiDirectivePrompt: `"Verlet 적분 물리 엔진을 바닥부터 구현하여 마우스로 관절을 잡아 던질 수 있고 장애물 박스와 실시간 탄성 충돌하는 래그돌 인체 시뮬레이터를 제작해줘."`
  },
  {
    id: 'magnify-sunlight',
    title: '⑨ 돋보기 태양광 집광 & 종이 버닝 실시간 인터랙션',
    category: 'Physics & Simulation',
    badge: 'Thermal Burning Canvas',
    tagline: '볼록렌즈의 초점 집광 열전도율과 종이가 타들어가는 탄화(Carbonization) 효과',
    demoUrl: '/blueprint-hub/aitrend/10-magnify/index.html',
    techKeywords: ['Thermal Heatmap Diffusion', 'Lens Convex Refraction', 'Smoke Particle', 'Burning Shader'],
    worldInsight: '빛의 굴절과 렌즈 초점 공식, 열전도 확산 및 연기 파티클이 결합된 물리 시연 도구로 교육 및 브랜딩 사이트의 이목을 끄는 시각 효과입니다.',
    howItWorks: '마우스 위치를 볼록렌즈 중심으로 삼아 내부 픽셀을 구면 왜곡(Spherical Distortion)하고, 초점 영역의 온도를 누적해 임계치 도달 시 픽셀을 태우고 연기를 방출합니다.',
    aiDirectivePrompt: `"마우스 돋보기 렌즈로 배경을 확대 굴절시키고, 한자리에 머물면 태양광이 모여 종이가 검게 타들어가며 연기 파티클이 피어오르는 인터랙션을 만들어줘."`
  },
  {
    id: 'blackhole-lensing',
    title: '⑩ 아인슈타인 일반상대성이론 중력 렌징 블랙홀',
    category: 'Cosmology & Weather',
    badge: 'Astrophysics Shader',
    tagline: '사건의 지평선(Event Horizon)과 강착원반의 빛 왜곡을 물리 공식으로 렌더링',
    demoUrl: '/blueprint-hub/aitrend/11-blackhole/index.html',
    techKeywords: ['General Relativity', 'Gravitational Lensing', 'Accretion Disk', 'Doppler Beaming'],
    worldInsight: '영화 <인터스텔라>에 쓰인 킵 손 교수의 블랙홀 광선 궤적 방정식을 웹 브라우저 셰이더로 옮겨놓은 첨단 물리 시각화입니다.',
    howItWorks: '슈바르츠실트 계량을 기반으로 강력한 중력장 주변을 지나는 빛의 휘어짐 각도를 적분 계산하여 뒷배경의 별빛과 은하수가 도넛 형태로 왜곡되어 보이게 합니다.',
    aiDirectivePrompt: `"WebGL GLSL 셰이더를 사용하여 마우스 시점에 따라 주변 배경 빛이 도넛 형태로 휘어지는 아인슈타인 중력 렌즈 효과와 회전하는 강착원반 블랙홀을 시각화해줘."`
  },
  {
    id: 'waterdrop-lens',
    title: '⑪ 약수터 물방울 굴절 & 표면장력 한계 시뮬레이션',
    category: 'Physics & Simulation',
    badge: 'Surface Tension SPH',
    tagline: '물방울의 맺힘, 표면장력 한계, 낙하 후 수면 파문까지 실사 렌더링',
    demoUrl: '/blueprint-hub/aitrend/12-waterdrop/index.html',
    techKeywords: ['Fluid Surface Tension', 'Water Droplet Refraction', 'Ripple Wave Equation', 'Canvas 2D/3D'],
    worldInsight: '화장품 브랜드의 스킨케어 흡수 효과 시연, 고급 음료/주류 웹사이트의 프리미엄 브랜딩 인터랙션, 물리 시뮬레이션 교육에 쓰이는 디테일 기법입니다.',
    howItWorks: '물방울이 나뭇잎 끝에 매달려 표면장력으로 버티다가 임계 질량에 도달했을 때 떨어지며, 수면에 닿는 순간 2차원 파동 방정식을 풀어 파문 링을 확산시킵니다.',
    aiDirectivePrompt: `"물방울이 맺혔다가 중력으로 떨어지며 수면에 닿았을 때 동심원 파문이 퍼져나가고, 물방울 내부에는 배경이 거꾸로 굴절되어 비치는 인터랙티브 시뮬레이션을 구현해줘."`
  },
  {
    id: 'anamorphic-billboard',
    title: '⑫ 수조 속 혹등고래 3D 아나몰픽 전광판 (COEX SM타운)',
    category: 'Anamorphic & 3D',
    badge: 'Anamorphic Illusion',
    tagline: '코엑스 전광판의 착시 원리 — 건물 모서리를 뚫고 나오는 입체 고래',
    demoUrl: '/blueprint-hub/aitrend/13-billboard/index.html',
    techKeywords: ['Anamorphic Projection', 'Off-Axis Perspective', 'LED Mesh Texture', 'Optical Illusion'],
    worldInsight: '3D 옥외광고(아나몰픽 일루전)의 투사 원리를 브라우저 안에서 360도 회전하며 입체 시야각을 관찰할 수 있게 만든 쇼케이스입니다.',
    howItWorks: '관람객의 특정 시점을 기준으로 90도 꺾인 건물 벽면에 역원근 왜곡을 주어 평면 화면이 깊은 유리 수조처럼 보이게 만듭니다.',
    aiDirectivePrompt: `"건물 모서리 전광판 안에서 파도가 치고 고래가 헤엄치며 화면 밖으로 튀어나오는 듯한 3D 아나몰픽 착시 프로젝션 시뮬레이터를 Three.js로 구현해줘."`
  },
  {
    id: 'wifi-interference',
    title: '⑬ Wi-Fi 2.4/5GHz 채널 전파 간섭 시뮬레이터',
    category: 'Physics & Simulation',
    badge: 'Electromagnetic Wave',
    tagline: '벽면 감쇄율과 다중 공유기 동일 채널 전파 간섭 무선 음영지역 계산',
    demoUrl: '/blueprint-hub/aitrend/14-wifi/index.html',
    techKeywords: ['Electromagnetic Wave Field', 'Interference Ripple', 'Wall Attenuation', 'Channel Overlap'],
    worldInsight: '스마트 공장 IoT 센서망 구축, 사내 오피스 무선 통신 음영지역 분석, 통신사 AP 배치 최적화에 직관적으로 활용되는 전파 해석기입니다.',
    howItWorks: '공간 그리드 상에서 전자기파 감쇄 수식과 주파수 위상 간섭(Constructive/Destructive Interference)을 실시간 행렬로 연산합니다.',
    aiDirectivePrompt: `"공유기 위치를 클릭하여 추가하고 주파수 채널 중첩에 따른 전파 간섭 줄무늬와 신호 감쇄를 실시간 색상 맵으로 시각화하는 Wi-Fi 전파 분석기를 만들어줘."`
  },
  {
    id: 'earth-terminator-orbit',
    title: '⑭ 지구의 일출선 (Terminator Line) & 1년 태양 공전 궤도',
    category: 'Cosmology & Weather',
    badge: 'Orbital Mechanics 3D',
    tagline: '밤 도시의 불빛과 낮의 경계선(Terminator) + 60초 만에 완주하는 지구 공전 궤도',
    demoUrl: '/blueprint-hub/aitrend/15-earth/index.html',
    techKeywords: ['Day/Night Terminator', 'Keplerian Orbit', 'City Lights Night Map', 'Solar Declination'],
    worldInsight: '글로벌 물류 및 항공사 항로 관제, 인공위성 궤도 추적, 천문 교육 등에서 전 세계의 실시간 낮/밤 경계선과 시차를 확인하는 지구본입니다.',
    howItWorks: '지구 자전축(23.5도)과 공전 궤도 이심률을 반영하여 태양빛이 닿는 일출/일몰 황혼 경계선을 셰이더로 계산하고 밤 영역에는 도시 불빛 텍스처를 블렌딩합니다.',
    aiDirectivePrompt: `"Three.js로 지구 자전축과 실시간 태양 각도를 계산하여 낮/밤의 경계선(Terminator)과 야간 도시 불빛, 그리고 공전 궤도를 3D로 시뮬레이션해줘."`
  },
  {
    id: 'droneshow-5000',
    title: '⑮ 5,000대 군집 드론 3D 라이트쇼 시뮬레이터',
    category: 'Anamorphic & 3D',
    badge: '3D Particle Swarm',
    tagline: '혹등고래, DNA 나선, 은하계, 토성으로 실시간 변형되는 5,000대 공간 드론 군집',
    demoUrl: '/blueprint-hub/aitrend/16-droneshow/index.html',
    techKeywords: ['Flocking Algorithm', 'Boids Simulation', 'InstancedMesh', '3D Morphing'],
    worldInsight: '올림픽 개막식 드론쇼의 군집 비행 궤적 알고리즘으로 3D 모델의 정점 좌표를 드론 5천 대에 분배하여 충돌 없이 매끄럽게 변형합니다.',
    howItWorks: 'Three.js InstancedMesh를 사용하여 5,000개의 LED 드론을 단 1번의 Draw Call로 렌더링하고, 목표 형태의 정점 배열 간 부드러운 LERP 보간 이동을 수행합니다.',
    aiDirectivePrompt: `"Three.js의 InstancedMesh를 활용하여 5,000개의 발광 파티클이 구 형태에서 DNA 나선 및 혹등고래 형태로 부드럽게 변형되는 군집 드론쇼 3D 시뮬레이션을 구현해줘."`
  }
];
