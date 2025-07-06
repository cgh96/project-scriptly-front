import CreateMemoIcon from '@assets/create-memo.svg?react';
import type { ButtonHTMLAttributes } from 'react';

import { buttonSizes } from '@/shared/config/styles';
import { PrimaryButton } from '@/shared/ui';

type CreateMemoIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const CreateMemoIconButton = ({ onClick }: CreateMemoIconButtonProps) => {
  return (
    <PrimaryButton size={buttonSizes.sm} onClick={onClick}>
      <CreateMemoIcon width={24} height={24} />
    </PrimaryButton>
  );
};
