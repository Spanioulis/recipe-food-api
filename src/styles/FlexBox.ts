import styled from 'styled-components';

type FlexBoxProps = {
   align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
   direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
   gap?: string;
   justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
   wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const FlexBox = styled.div<FlexBoxProps>`
   display: flex;
   align-items: ${({ align }) => align || 'center'};
   flex-direction: ${({ direction }) => direction || 'column'};
   flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
   gap: ${({ gap }) => gap || '0rem'};
   justify-content: ${({ justify }) => justify || 'center'};
   width: 100%;
`;

export { FlexBox };
