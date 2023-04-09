import { Header } from '.';
import { FlexBox } from '../../styles';

type BodyProps = {
   children: React.ReactNode;
};

const Body = ({ children }: BodyProps) => {
   return (
      <FlexBox>
         <Header />
         {children}
      </FlexBox>
   );
};

export { Body };
