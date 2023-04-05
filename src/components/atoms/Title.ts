import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';
import { Text } from './Text';

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
   as: 'h1' | 'h2' | 'h3';
};

export const Title = styled(Text).attrs<TitleProps>((props) => ({
   as: props?.as || 'h1'
}))<TitleProps>`
   color: ${({ color }) => color || colors.primary};
   ${({ as }) => as === 'h1' && `font-size: ${dimensions.font.h1}`};
   ${({ as }) => as === 'h2' && `font-size: ${dimensions.font.h2}`};
   ${({ as }) => as === 'h3' && `font-size: ${dimensions.font.h3}`};
`;
