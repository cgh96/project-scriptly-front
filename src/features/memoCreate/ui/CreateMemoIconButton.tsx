import CreateMemoIcon from '@assets/create-memo.svg?react';

import { buttonSizes } from '@/shared/config/styles';
import { PrimaryButton } from '@/shared/ui';

export const CreateMemoIconButton = () => {
  return (
    <PrimaryButton size={buttonSizes.sm}>
      <CreateMemoIcon width={24} height={24} />
    </PrimaryButton>
  );
};
