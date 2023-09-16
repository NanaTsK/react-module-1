import { Container } from 'components/index.styled';

const Header = ({ toggleModal }) => {
  return (
    <Container>
      <nav className="navbar bg-dark mb-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
          <button onClick={toggleModal} className="btn btn-outline-success">
            Open Modal
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
