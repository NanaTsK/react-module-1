import { Container } from 'components/index.styled';
import { TypographyHeader, TypographyText } from './Header.styled';

const Header = () => {
  const isOnline = false;
  return (
    <Container>
      <div>
        <TypographyHeader $isOnline={isOnline}>Hello React</TypographyHeader>
        <TypographyText>something</TypographyText>
      </div>
    </Container>
  );
};

export default Header;
