import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

const ButtonStyled = styled.button<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ backgroundColor }) => backgroundColor || colors.primary};
   border-radius: ${dimensions.borderRadius.base};
   border: none;
   color: ${colors.white};
   cursor: pointer;
   font-weight: 700;
   margin: ${dimensions.spacing.xs};
   padding: ${dimensions.spacing.xs};
   width: 250px;

   &:focus {
      outline: 2px solid ${colors.gray.gray1};
      outline-offset: 2px;
   }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   backgroundColor?: string;
   children: React.ReactNode;
   onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ backgroundColor, children, onClick }: ButtonProps) => {
   return (
      <ButtonStyled type="submit" backgroundColor={backgroundColor} onClick={onClick}>
         {children}
      </ButtonStyled>
   );
};

export { Button };
