import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

const InputStyled = styled.input<InputProps>`
   border-radius: ${dimensions.borderRadius.base};
   border: 1px solid ${colors.gray.gray2};
   color: ${({ color }) => color || colors.gray.gray3};
   padding: ${dimensions.spacing.xs};
   width: 100%;

   &:focus {
      outline: 0 none;
      border: 2px solid ${colors.gray.gray3};
   }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   type?: string;
};

const Input = ({ type = 'text', ...rest }: InputProps) => <InputStyled type={type} {...rest} />;

export default styled(Input)``;
