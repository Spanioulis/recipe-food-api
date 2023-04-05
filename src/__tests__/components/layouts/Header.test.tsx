import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components/layouts';
import { colors } from '../../../styles';

describe('Header', () => {
   it('renders content', () => {
      render(<Header />);

      const header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveStyle(`background-color: ${colors.primary};`);
   });
});
