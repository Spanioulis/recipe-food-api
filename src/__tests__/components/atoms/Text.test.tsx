import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Text } from '../../../components/atoms';
import { colors, dimensions } from '../../../styles';

describe('Text', () => {
   it('should render the text', () => {
      render(
         <Text color={colors.primaryDark} size={dimensions.font.xs}>
            Text test
         </Text>
      );

      const text = screen.getByText(/text test/i);
      expect(text).toBeInTheDocument();
      expect(text).toHaveStyle(`color: ${colors.primaryDark}`);
      expect(text).toHaveStyle(`font-size: ${dimensions.font.xs}`);
   });
});
