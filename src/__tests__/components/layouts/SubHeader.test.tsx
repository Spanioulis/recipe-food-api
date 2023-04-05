import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SubHeader } from '../../../components/layouts';

describe('SubHeader', () => {
   it('renders content', () => {
      render(<SubHeader />);

      const subHeader = screen.getByTestId('subheader');
      expect(subHeader).toBeInTheDocument();
   });
});
