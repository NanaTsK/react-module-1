import Header from './1-Header/Header';
import Content from './2-Content/Content';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginTop: 20,
        marginLeft: 20,
        // textTransform: 'uppercase',
      }}
    >
      <span style={{ textTransform: 'uppercase' }}>react-module-1 :</span>
      <Header />
      <Content />
    </div>
  );
};
