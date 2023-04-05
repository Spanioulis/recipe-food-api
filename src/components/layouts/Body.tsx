import { Header, SubHeader } from '.';
import { FlexBox } from '../../styles';

type BodyProps = {
   children: React.ReactElement;
};

export const Body = ({ children }: BodyProps) => {
   return (
      <FlexBox>
         <Header />
         <SubHeader />
         {children}
      </FlexBox>
   );
};
