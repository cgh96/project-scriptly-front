import type { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { useTheme } from '@/app/providers/ThemeProvider';
import { type ButtonSizes, buttonSizes, buttonSizeStyles } from '@/shared/config/styles';
import type { Theme } from '@/shared/config/theme';

type ButtonProps = {
  width?: string;
  size: ButtonSizes;
  disabled?: boolean;
  theme: Theme;
  children: React.ReactNode;
};

const BaseButtonStyle = styled.button<ButtonProps>`
  width: ${({ width }) => width || 'auto'};
  min-width: 64px;
  padding: ${({ size }) => buttonSizeStyles[size].padding};

  border-radius: ${({ size }) => buttonSizeStyles[size].borderRadius};

  font-size: ${({ size }) => buttonSizeStyles[size].fontSize};
  font-weight: 900;
`;

const PrimaryButtonStyle = styled(BaseButtonStyle)<ButtonProps>`
  color: ${({ theme }) => theme.colors.components.text.onPrimary};
  background-color: ${({ theme }) => theme.colors.components.primary.active};

  &:hover {
    background-color: ${({ theme }) => theme.colors.components.primary.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.components.primary.active};
  }
`;

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
  size?: ButtonSizes;
  disabled?: boolean;
  children: React.ReactNode;
};

export const PrimaryButton = ({
  width,
  size = buttonSizes.md,
  children,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  const { theme } = useTheme();

  return (
    <PrimaryButtonStyle theme={theme} size={size} disabled={disabled} width={width} {...props}>
      {children}
    </PrimaryButtonStyle>
  );
};
