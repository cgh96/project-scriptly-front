import { MemoNavigation } from '@/widgets/memoNaviagation/ui/MemoNavigation';

import * as S from './Navigation.styles';

export const Navigation = () => {
  return (
    <S.Conatainer>
      {/** @TODO : 폴더 네비게이션 추가 - 선택한 폴더에 속한 메모들이 메모 네비게이션에 보여야 함 */}
      <MemoNavigation />
    </S.Conatainer>
  );
};
