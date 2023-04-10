import { useState } from 'react';
import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Button, Input } from '../atoms';

const SubHeaderStyled = styled(FlexBox)`
   background-color: ${colors.gray.gray2};
   padding: ${dimensions.spacing.xxs};
`;

type SubHeaderProps = {
   setSearchData: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ setSearchData }: SubHeaderProps) {
   const [searchValue, setSearchValue] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   const handleClick = () => {
      setSearchData(searchValue);
      setSearchValue('');
   };

   return (
      <SubHeaderStyled data-testid="searchBar">
         <FlexBox direction="row">
            <Input placeholder="Search rescipes..." onChange={handleChange} />
            <Button type="submit" onClick={handleClick}>
               Search
            </Button>
         </FlexBox>
      </SubHeaderStyled>
   );
}

export default styled(SearchBar)``;
