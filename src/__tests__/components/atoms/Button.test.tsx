import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { dimensions, colors } from '../../../styles';
import { Button } from '../../../components/atoms';

describe('Button', () => {
   it('renders content', () => {
      const onClick = vi.fn();

      render(<Button onClick={onClick}>Button Test</Button>);

      const button = screen.getByRole('button', { name: /button test/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveStyle('cursor: pointer');
      expect(button).toHaveStyle('font-weight: 700;');
      expect(button).toHaveStyle(`background-color: ${colors.primary};`);
      expect(button).toHaveStyle(`border-radius: ${dimensions.borderRadius.base}`);
      expect(button).toHaveStyle(`border: 2px solid ${colors.primaryDark};`);
      expect(button).toHaveStyle(`color: ${colors.white}`);
      expect(button).toHaveStyle(`margin: ${dimensions.spacing.xs}`);
      expect(button).toHaveStyle(`padding: ${dimensions.spacing.xs}`);

      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
   });
});
