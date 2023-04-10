import { useState } from 'react';
import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Button, Input } from '../atoms';

const SearchBarStyled = styled(FlexBox)`
   background-color: ${colors.gray.gray2};
   padding: ${dimensions.spacing.xxs};
`;

const ButtonContainerStyled = styled(FlexBox)`
   @media (max-width: 768px) {
      align-items: center;
   }
`;

type SearchBarProps = {
   setSearchData: React.Dispatch<React.SetStateAction<string>>;
   handleRandom: () => void;
};

function SearchBar({ handleRandom, setSearchData }: SearchBarProps) {
   const [searchValue, setSearchValue] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   const handleClick = () => {
      setSearchData(searchValue);
      setSearchValue('');
   };

   return (
      <SearchBarStyled data-testid="searchBar">
         <FlexBox direction="row" wrap="wrap">
            <ButtonContainerStyled align="start" style={{ flex: 1 }}>
               <Button onClick={handleRandom} backgroundColor={colors.secondary}>
                  Random recipe
               </Button>
            </ButtonContainerStyled>
            <FlexBox direction="row" style={{ flex: 2 }}>
               <Input placeholder="Search rescipes..." onChange={handleChange} />
               <Button type="submit" onClick={handleClick}>
                  Search
               </Button>
            </FlexBox>
         </FlexBox>
      </SearchBarStyled>
   );
}

export { SearchBar };
