import styled from 'styled-components';
import { colors } from '../../styles';

const IconStyled = styled.span<IconProps>`
   font-variation-settings: 'FILL' 0, 'wght' ${({ wght }) => wght}, 'GRAD' 0, 'opsz' ${({ opsz }) => opsz};
   color: ${({ color }) => color || colors.gray.gray3};
`;

type IconProps = {
   name: string;
   wght?: number;
   opsz?: number;
   className?: string;
   color?: string;
};

const Icon = ({ wght = 300, opsz = 24, name = '', color = '' }) => (
   <IconStyled className="material-symbols-outlined" wght={wght} color={color} opsz={opsz} name={name}>
      {name}
   </IconStyled>
);

export default styled(Icon)``;
