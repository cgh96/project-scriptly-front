import styled from 'styled-components';

import { fontSizes } from '@/shared/config/styles';
import type { Theme } from '@/shared/config/theme';

import { Center } from '../layout/Center';

export const Container = styled(Center)``;

export const Title = styled.p<{ theme: Theme }>`
  font-size: ${fontSizes.h3};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.components.text.primary};
`;
