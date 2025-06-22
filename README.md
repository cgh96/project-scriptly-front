# Scriptly

마크다운 기반 메모작성 툴

## 📋 프로젝트 소개

Scriptly는 마크다운 기반의 직관적인 메모 작성 도구입니다. 개인 메모부터 팀 협업까지 지원하는 것을 목표로 하며, MVP 방식으로 단계적으로 개발됩니다.

## 🚀 개발 로드맵

### Phase 1: Frontend MVP (현재 단계)

프론트엔드 중심의 점진적 구현을 통한 기술 학습 및 기능 완성

**주요 기능:**

- 마크다운 기반 메모 작성 및 편집
- 테이블 생성/삭제 기능
- 테이블 리사이징 기능
- 로컬 데이터 저장 (IndexedDB 활용)

### Phase 2: Backend Integration

백엔드 API 구현 및 연동

**주요 기능:**

- 서버 기반 데이터 저장 및 동기화
- 사용자 인증 시스템
- 메모 백업 및 복원

### Phase 3: Collaboration Features

메모 협업 도구로 확장

**주요 기능:**

- 실시간 공동 편집
- 메모 공유 및 권한 관리

> 💡 **참고:** 개발 계획은 프로젝트 진행 상황에 따라 수정되거나 더 세분화될 수 있습니다.

## 🛠 기술 스택

### Frontend

- **Framework:** React 18 + TypeScript
- **Styling:** Styled-components
- **Routing:** React Router
- **Local Storage:** IndexedDB
- **Build Tool:** Vite

### 아키텍처

FSD(Feature Sliced Design)

```
src/
├── app/        # 앱 초기화, 라우터, 전역 설정
├── pages/      # 페이지 컴포넌트
├── widgets/    # 독립적인 UI 블록
├── features/   # 비즈니스 기능
├── entities/   # 비즈니스 엔티티
├── shared/     # 재사용 가능한 코드
└── index.tsx
```

## 📝 현재 구현 상태

- [x] 프로젝트 초기 설정 및 아키텍처 구성
- [x] 기본 라우팅 및 레이아웃 시스템
- [ ] 테마 시스템 및 공통 UI 컴포넌트
- [ ] 마크다운 에디터 구현
- [ ] 메모 CRUD 기능
- [ ] IndexedDB 연동
- [ ] 테이블 관리 기능

## 🎯 프로젝트 목표

1. **기술 역량 강화**: React, TypeScript, FSD 아키텍처 등 프로트엔드 기술 스택 학습
2. **점진적 성장**: 각 Phase별로 새로운 기술 도전 (IndexedDB → Backend → 실시간 협업)
3. **실용적 결과물**: 실제 사용 가능한 수준의 메모 도구 완성

## 커밋 컨벤션

feat: 새로운 기능 추가  
fix: 버그 수정  
refactor: 코드 개선 (기능 변화 없음)  
style: 코드 스타일 변경 (포맷팅, 세미콜론 등)  
chore: 설정 파일, 도구 관련 변경  
docs: 문서 변경
