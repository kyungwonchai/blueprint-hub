const fs = require('fs');
const path = require('path');

const compDataPath = path.join(__dirname, '../src/data/componentsData.ts');
let content = fs.readFileSync(compDataPath, 'utf8');

// Update chart-candlestick-trading metadata & prompt to SPC chart
content = content.replace(
  `"name": "실시간 캔들스틱 & 거래량 복합 차트 (MA이동평균 + 호가 스위치)",`,
  `"name": "실시간 SPC 통계적 공정 관리도 (X-bar & R 관리한계선 UCL/LCL)",`
);

content = content.replace(
  `"description": "상승/하락 양봉·음봉, 이동평균선(MA), 하단 거래량 바, 호가 레이블 토글 스위치 지원.",`,
  `"description": "중심선(CL) 및 상/하한 관리선(UCL/LCL) 기준 실시간 불량 이상치(Anomaly) 자동 감지 및 보간 선형 관리도.",`
);

content = content.replace(
  `"previewType": "chart-candlestick-trading",`,
  `"previewType": "chart-candlestick-trading",`
);

// Replace ComponentRenderer.tsx to map SpcQualityControlDemo
const compRendererPath = path.join(__dirname, '../src/components/ComponentRenderer.tsx');
let compRendererContent = fs.readFileSync(compRendererPath, 'utf8');

compRendererContent = compRendererContent.replace(
  `CandlestickTradingDemo`,
  `SpcQualityControlDemo`
);

fs.writeFileSync(compDataPath, content);
fs.writeFileSync(compRendererPath, compRendererContent);
console.log('✅ Updated componentsData.ts and ComponentRenderer.tsx to state-of-the-art enterprise specs');
