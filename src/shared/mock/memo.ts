import type { Memo } from '@/entities/memo/model/types';

// shared/mock/memo-data.ts
export const mockMemos: Memo[] = [
  {
    id: 'memo-1',
    title: '프로젝트 아이디어',
    content: '# 마크다운 에디터\n\n- React + TypeScript\n- Feature Sliced Design\n- PWA 지원',
    createdAt: new Date('2024-06-15T09:00:00Z'),
    updatedAt: new Date('2024-06-17T14:30:00Z'),
    isActive: true,
    isPinned: true,
    tags: ['프로젝트', '개발'],
    folderId: 'folder-1',
    isPublic: false,
  },
  {
    id: 'memo-2',
    title: 'FSD 아키텍처 학습',
    content:
      '## Feature Sliced Design\n\n레이어별 구조:\n- app\n- pages\n- widgets\n- features\n- entities\n- shared',
    createdAt: new Date('2024-06-16T11:15:00Z'),
    updatedAt: new Date('2024-06-16T16:45:00Z'),
    isActive: true,
    isPinned: false,
    tags: ['아키텍처', '학습'],
    folderId: 'folder-1',
    isPublic: true,
  },
  {
    id: 'memo-3',
    title: '일일 회고',
    content:
      '오늘 한 일:\n1. 네비게이션 구조 설계\n2. 타입 정의\n\n내일 할 일:\n1. UI 컴포넌트 구현',
    createdAt: new Date('2024-06-17T18:00:00Z'),
    updatedAt: new Date('2024-06-17T18:00:00Z'),
    isActive: true,
    isPinned: false,
    tags: ['회고'],
    folderId: 'folder-2',
    isPublic: false,
    password: 'secret123',
  },
  {
    id: 'memo-4',
    title: 'Styled Components 팁',
    content:
      '```typescript\nconst StyledButton = styled.button<{ $variant: string }>`\n  background: ${props => props.$variant === "primary" ? "#007bff" : "#6c757d"};\n`;\n```',
    createdAt: new Date('2024-06-14T13:20:00Z'),
    updatedAt: new Date('2024-06-15T09:10:00Z'),
    isActive: false,
    isPinned: false,
    tags: ['CSS', 'React'],
    isPublic: true,
  },
];
