import styled from 'styled-components';

type FlexBoxProps = {
   direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
   justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
   align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
   gap?: string;
};

const FlexBox = styled.div<FlexBoxProps>`
   display: flex;
   flex-direction: ${({ direction }) => direction || 'column'};
   justify-content: ${({ justify }) => justify || 'center'};
   align-items: ${({ align }) => align || 'center'};
   gap: ${({ gap }) => gap || '0rem'};
   width: 100%;
`;

export { FlexBox };
