import { Container } from 'components/index.styled';
// import { TypographyHeader, TypographyText } from './Header.styled';

const Header = () => {
  // const isOnline = true;
  return (
    <Container>
      <nav className="navbar bg-dark mb-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
          <button className="btn btn-outline-success">Open Modal</button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

/* <button onClick={toggleModal} className="btn btn-outline-success"> */
