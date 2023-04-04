import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Title } from '../../../components/atoms';

describe('Title', () => {
   it('should render the title', () => {
      render(
         <Title as="h3" weight={700}>
            Title test
         </Title>
      );

      const title = screen.getByText(/title test/i);
      expect(title).toBeInTheDocument();
      expect(title).toHaveStyle({ 'font-weight': 700 });
   });
});
