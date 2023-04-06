import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from '../../../components/atoms';
import { colors } from '../../../styles';

describe('Icon', () => {
   it('renders content', () => {
      render(<Icon name="search" />);

      const icon = screen.getByText('search');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('material-symbols-outlined');
      expect(icon).toHaveStyle(`font-variation-settings: 'FILL' 0,'wght' 300,'GRAD' 0,'opsz' 24`);
      expect(icon).toHaveStyle(`color: ${colors.gray.gray3}`);
   });
});
