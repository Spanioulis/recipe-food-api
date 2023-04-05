import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
   size?: string;
   weight?: string | number;
};

const Text = styled.p<TextProps>`
   color: ${({ color }) => color || colors.gray.gray3};
   font-size: ${({ size }) => size || dimensions.font.base};
   font-weight: ${({ weight }) => weight || 'normal'};
`;

export { Text };
