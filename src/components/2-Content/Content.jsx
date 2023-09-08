import { Container } from 'components/index.styled';
import css from './styled.module.css';

const Content = () => {
  return (
    <Container>
      <div className={css.contentStyle}>Content</div>
    </Container>
  );
};

export default Content;
