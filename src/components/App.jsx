import Header from './1-Header/Header';
import Modal from './1.1-Modal/Modal';
import Content from './2-Content/Content';
import Counter from './3-Counter/Counter';
import HackerNews from './4-HackerNews/HackerNews';

import { Component } from 'react';

export class App extends Component {
  state = { isShowModal: false };

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <span style={{ textTransform: 'uppercase' }}>react-module-1 :</span>
        <Header toggleModal={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal toggleModal={this.toggleModal}>Text_For_Modal</Modal>
        )}
        <Content />
        <Counter />
        <HackerNews />
        <></>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         marginTop: 20,
//         marginLeft: 20,
//         // textTransform: 'uppercase',
//       }}
//     >
//       <span style={{ textTransform: 'uppercase' }}>react-module-1 :</span>
//       <Header />
//       <Content />
//       <Counter />
//       <HackerNews />
//       <></>
//     </div>
//   );
// };

// <Modal>This_Is_Text_For_Modal</Modal>;
