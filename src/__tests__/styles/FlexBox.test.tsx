import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FlexBox } from '../../styles';

describe('FlexBox', () => {
   it('renders content', () => {
      render(
         <FlexBox direction="row" justify="flex-start" align="baseline" gap="0.5rem">
            FlexBox test
         </FlexBox>
      );

      const text = screen.getByText(/flexbox test/i);
      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle('flex-direction: row');
   });
});
