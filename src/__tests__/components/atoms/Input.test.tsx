import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from 'vitest';
import { Input } from '../../../components/atoms';
import { colors, dimensions } from '../../../styles';

const onChangeMock = vi.fn();

describe('Input', () => {
   it('renders content', async () => {
      render(<Input placeholder="Find recipe with..." onChange={onChangeMock} />);

      const input = screen.getByPlaceholderText(/find recipe/i);
      expect(input).toHaveAttribute('type', 'text');
      expect(input).toBeInTheDocument();

      userEvent.type(input, 'chicken');

      await waitFor(() => {
         expect(onChangeMock).toHaveBeenCalled();
         expect(input).toHaveValue('chicken');
      });
   });

   it('renders content with correct styles', () => {
      render(<Input placeholder="Find recipe with..." color={colors.secondary} />);

      const input = screen.getByPlaceholderText(/find recipe/i);
      expect(input).toHaveStyle(`border-radius: ${dimensions.borderRadius.base};`);
      expect(input).toHaveStyle(`border: 1px solid ${colors.gray.gray2};`);
      expect(input).toHaveStyle(`color: ${colors.secondary};`);
   });
});
