import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

type Text = HTMLAttributes<HTMLParagraphElement> & {
   size?: string;
   weight?: string | number;
};

export const Text = styled.p<Text>`
   color: ${({ color }) => color || colors.gray.gray3};
   font-size: ${({ size }) => size || dimensions.font.base};
   font-weight: ${({ weight }) => weight || 'normal'};
`;
