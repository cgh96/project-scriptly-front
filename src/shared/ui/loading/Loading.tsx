import React from 'react';
import styled, { keyframes } from 'styled-components';

import { useTheme } from '@/app/providers/ThemeProvider';
import type { Theme } from '@/shared/config/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

interface LoadingProps {
  message?: string;
  submessage?: string;
}

const LoadingContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.components.background.default};
`;

const SpinnerContainer = styled.div`
  position: relative;
`;

const Spinner = styled.div<{ theme: Theme }>`
  width: 48px;
  height: 48px;
  border: 3px solid ${({ theme }) => theme.colors.components.background.surface};
  border-top: 3px solid ${({ theme }) => theme.colors.palette.primary[500]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const LoadingText = styled.p<{ theme: Theme }>`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.components.text.secondary};
  margin: 0;
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const LoadingSubtext = styled.p<{ theme: Theme }>`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.components.text.muted};
  margin: -8px 0 0 0;
  text-align: center;
`;

export const Loading: React.FC<LoadingProps> = ({
  message = '메모를 불러오는 중...',
  submessage = '잠시만 기다려 주세요',
}) => {
  const { theme } = useTheme();

  return (
    <LoadingContainer theme={theme}>
      <SpinnerContainer>
        <Spinner theme={theme} />
      </SpinnerContainer>

      {(message || submessage) && (
        <>
          {message && <LoadingText theme={theme}>{message}</LoadingText>}
          {submessage && <LoadingSubtext theme={theme}>{submessage}</LoadingSubtext>}
        </>
      )}
    </LoadingContainer>
  );
};
