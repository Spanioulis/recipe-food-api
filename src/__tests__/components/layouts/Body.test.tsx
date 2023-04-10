import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Body } from '../../../components/layouts';

describe('Body', () => {
   it('renders content', () => {
      render(<Body>Body Test</Body>);

      const body = screen.getByText(/body test/i);
      expect(body).toBeInTheDocument();
   });

   it('the header and subheader must be present in the Body', () => {
      render(<Body>Childrens</Body>);

      const header = screen.getByTestId('header');
      expect(header).toBeInTheDocument();
   });
});
