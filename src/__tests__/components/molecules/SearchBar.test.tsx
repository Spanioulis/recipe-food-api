import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../../../components/molecules';

describe('SubHeader', () => {
   const mockSetData = vi.fn();
   const handleRandom = vi.fn();

   it('renders content', () => {
      render(<SearchBar setSearchData={mockSetData} handleRandom={handleRandom} />);

      const searchBar = screen.getByTestId('searchBar');
      expect(searchBar).toBeInTheDocument();
   });
});
