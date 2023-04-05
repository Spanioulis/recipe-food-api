import styled from 'styled-components';
import { colors, dimensions, FlexBox } from '../../styles';
import { Input, Text } from '../atoms';

const SubHeaderStyled = styled(FlexBox)`
   background-color: ${colors.secondaryLight};
   border-bottom: 1px solid ${colors.secondaryDark};
   border-top: 1px solid ${colors.secondaryDark};
   padding: ${dimensions.spacing.base};
`;

function SubHeader({ ...props }) {
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      // console.log(e.target.value);
   };
   return (
      <SubHeaderStyled {...props}>
         <Text color="white">SubHeader</Text>
         <Input onChange={handleChange} placeholder="Busca..." />
      </SubHeaderStyled>
   );
}

export default styled(SubHeader)``;
