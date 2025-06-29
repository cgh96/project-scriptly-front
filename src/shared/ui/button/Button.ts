import styled from 'styled-components';

import { borderRadius, type ButtonSizes, buttonSizeStyles } from '@/shared/config/styles';

type ButtonProps = {
  size: ButtonSizes;
  disabled?: boolean;
};

export const PrimaryButton = styled.button<ButtonProps>`
  border: ${borderRadius.md};
  width: 100%;
  padding: ${({ size }) => buttonSizeStyles[size].padding};

  font-size: ${({ size }) => buttonSizeStyles[size].fontSize};
  border-radius: ${({ size }) => buttonSizeStyles[size].borderRadius};
`;
