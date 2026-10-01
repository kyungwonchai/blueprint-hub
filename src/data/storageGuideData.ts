import { StorageGuideItem } from '../types';

export const STORAGE_GUIDES_DATA: StorageGuideItem[] = [
  {
    id: 'localstorage-indexeddb',
    name: '클라이언트 로컬 저장소 (LocalStorage / IndexedDB)',
    type: 'Client Local',
    bestFor: '로그인 전 장바구니, 사용자 테마 설정, 오프라인 임시 캐시',
    readSpeed: 'Ultra Fast',
    writeSpeed: 'Ultra Fast',
    scalability: 'Single Node',
    pros: [
      '서버나 DB 구축 없이 브라우저 내장 API로 즉시 0초 만에 사용 가능',
      '네트워크 요청이 없어 오프라인에서도 완벽하게 동작'
    ],
    cons: [
      '다른 기기(모바일↔PC) 간 데이터 동기화 불가',
      '브라우저 캐시 삭제 시 데이터가 소실될 수 있음'
    ],
    aiPromptExample: `"사용자의 다크 테마 선택 상태와 최근 검색어 목록을 브라우저 LocalStorage에 저장하고, 새로고침 시에도 유지되도록 구현해줘."`,
    connectCodeSnippet: `// LocalStorage Helper
const saveItem = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const loadItem = (key: string) => {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : null;
};`
  },
  {
    id: 'json-file-storage',
    name: '서버 로컬 JSON 파일 스토리지 (우리가 쓰는 방식)',
    type: 'Embedded DB',
    bestFor: '토이 프로젝트, 중소규모 사내 툴, 블루프린트 스냅샷, 설정 관리',
    readSpeed: 'Ultra Fast',
    writeSpeed: 'Fast',
    scalability: 'Single Node',
    pros: [
      '별도의 DB 서버(PostgreSQL/MySQL) 설치나 도커 컨테이너 필요 없음',
      '파일(boards.json)을 텍스트 에디터나 Git으로 바로 열어보고 백업/수정 가능',
      '서버 리소스(RAM/CPU) 소모가 거의 0%에 수렴'
    ],
    cons: [
      '초당 수천 건 이상의 동시 쓰기(Concurrent Write) 발생 시 락(Lock) 이슈 가능성'
    ],
    aiPromptExample: `"Node.js Express에서 별도 DB 없이 storage/data.json 파일에 데이터를 읽고 쓰는 간단하고 안전한 파일 기반 영속화 모듈을 작성해줘."`,
    connectCodeSnippet: `import fs from 'fs';
function saveToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
function loadFromFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}`
  },
  {
    id: 'sqlite-duckdb',
    name: '임베디드 SQL 데이터베이스 (SQLite / DuckDB)',
    type: 'Embedded DB',
    bestFor: '단일 서버 풀스택 앱, 로컬 데이터 분석, 고성능 OLAP 쿼리',
    readSpeed: 'Ultra Fast',
    writeSpeed: 'Fast',
    scalability: 'Single Node',
    pros: [
      '서버리스 단일 파일 DB이면서도 완전한 SQL 트랜잭션(ACID) 보장',
      'DuckDB의 경우 수백만 행의 분석 쿼리를 인메모리 벡터 연산으로 수 밀리초 만에 처리'
    ],
    cons: [
      '다중 서버 분산 환경(수평 확장 Scale-out)에서는 공유 스토리지 설정 필요'
    ],
    aiPromptExample: `"Better-sqlite3 라이브러리를 사용하여 로컬 sqlite.db 파일에 테이블을 생성하고 빠른 인덱스 검색을 수행하는 레포지토리 코드를 짜줘."`,
    connectCodeSnippet: `import Database from 'better-sqlite3';
const db = new Database('app.db');
db.exec('CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT)');
const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
const user = stmt.get('kw_123');`
  },
  {
    id: 'postgresql-rdbms',
    name: 'PostgreSQL (상용 프로덕션 관계형 RDBMS 표준)',
    type: 'RDBMS',
    bestFor: '결제 시스템, 엔터프라이즈 B2B, 복잡한 비즈니스 로직 및 트랜잭션',
    readSpeed: 'Fast',
    writeSpeed: 'Fast',
    scalability: 'Cloud Scale',
    pros: [
      '전 세계 모든 엔터프라이즈의 표준, 완벽한 안정성과 데이터 무결성',
      'JSONB 지원으로 NoSQL처럼 사용 가능, pgvector 플러그인으로 AI 벡터 검색 지원'
    ],
    cons: [
      'DB 서버 설치, 인덱싱 최적화, 커넥션 풀링(PgBouncer) 등 관리 리소스 필요'
    ],
    aiPromptExample: `"Prisma ORM과 PostgreSQL을 사용하여 1:N 관계의 사용자(User)와 주문(Order) 스키마를 작성하고, 트랜잭션 처리 코드를 작성해줘."`,
    connectCodeSnippet: `// Prisma PostgreSQL Client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const activeUsers = await prisma.user.findMany({
  where: { status: 'ACTIVE' },
  include: { orders: true }
});`
  },
  {
    id: 'redis-cache',
    name: 'Redis (초고속 인메모리 키-값 스토어 & 캐시)',
    type: 'In-Memory Caching',
    bestFor: '실시간 세션, API 응답 캐싱, 레이트 리미팅, Pub/Sub 실시간 알림',
    readSpeed: 'Ultra Fast',
    writeSpeed: 'Ultra Fast',
    scalability: 'Cloud Scale',
    pros: [
      'RAM 기반으로 서브 밀리초(0.1ms) 미만의 초광속 응답',
      'TTL(만료시간) 기반 캐시 무효화 및 실시간 동시 접속자 수 계산'
    ],
    cons: [
      'RAM 용량에 의존하므로 초대용량 영구 저장용으로는 비용이 높음'
    ],
    aiPromptExample: `"Redis를 사용하여 자주 호출되는 날씨 API 응답을 5분간 캐싱하고, 캐시 미스 시에만 외부 API를 찌르는 캐시 래퍼 함수를 작성해줘."`,
    connectCodeSnippet: `import { createClient } from 'redis';
const redis = createClient();
await redis.connect();
await redis.set('cache_key', JSON.stringify(data), { EX: 300 }); // 300초 만료`
  },
  {
    id: 'vector-db-ai',
    name: 'AI 벡터 데이터베이스 (Pinecone / Chroma / pgvector)',
    type: 'Vector DB (AI)',
    bestFor: 'RAG (검색 증강 생성), 문서 의미론적 유사도 검색, AI 챗봇 기억',
    readSpeed: 'Fast',
    writeSpeed: 'Fast',
    scalability: 'Cloud Scale',
    pros: [
      '단순 키워드 일치가 아닌 문맥과 의미(Semantic)를 파악한 고차원 코사인 유사도 검색',
      'LLM 파이프라인과 연동하여 대규모 엔터프라이즈 코퍼스를 벡터 검색하는 RAG 인프라'
    ],
    cons: [
      '임베딩 모델(OpenAI text-embedding-3 등)을 거쳐 벡터 변환하는 파이프라인 필요'
    ],
    aiPromptExample: `"ChromaDB와 LangChain을 활용하여 PDF 문서를 청크로 쪼개고 임베딩하여 유사한 문맥을 상위 3개 찾아오는 RAG 질의응답 코드를 작성해줘."`,
    connectCodeSnippet: `// Chroma Vector Search
import { ChromaClient } from 'chromadb';
const client = new ChromaClient();
const collection = await client.getOrCreateCollection({ name: "docs" });
const results = await collection.query({
  queryEmbeddings: [queryVector],
  nResults: 3
});`
  }
];
