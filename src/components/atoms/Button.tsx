import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../styles';

const ButtonStyled = styled.button<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${colors.primary};
   border-radius: ${dimensions.borderRadius.base};
   border: 2px solid ${colors.primaryDark};
   color: ${colors.white};
   cursor: pointer;
   font-weight: 700;
   margin: ${dimensions.spacing.xs};
   padding: ${dimensions.spacing.xs};
   width: 250px;
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   children: React.ReactNode;
   onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <ButtonStyled type="submit" onClick={onClick}>
         {children}
      </ButtonStyled>
   );
};

export { Button };
