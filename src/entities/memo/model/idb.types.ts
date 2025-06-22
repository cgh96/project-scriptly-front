export interface IdbMemo {
  // 기본 식별자
  id: string;

  // 콘텐츠
  title: string;
  content: string; // 마크다운 원본

  // 메타데이터
  createdAt: string;
  updatedAt: string;

  // 상태
  isPinned: boolean;

  // 분류
  folderId?: string; // 폴더 기능 추가 시

  // 설정
  isPublic: boolean; // 공유 기능용
  password?: string; // 비밀번호 보호용
}
