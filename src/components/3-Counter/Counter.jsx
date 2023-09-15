import { Component } from 'react';
import { Container } from 'components/index.styled';

class Counter extends Component {
  state = {
    counter: 0,
    items: [],
  };

  handleClickIncrement = () =>
    this.setState(prev => ({ counter: prev.counter + 1 }));

  handleClickDecrement = () =>
    this.setState(prev => ({ counter: prev.counter - 1 }));

  //   handleClick = () => {
  //     this.setState(prev => {
  //       return { counter: prev.counter + 1 };
  //     });
  //   };

  render() {
    return (
      <Container>
        <div>
          <div className="card bg-dark text-white " style={{ width: '300px' }}>
            <div className="card-body">
              <h5 className="card-title text-center fs-1">Counter</h5>
              <p
                className="card-text  text-center"
                style={{ fontSize: '80px' }}
              >
                {this.state.counter}
              </p>
              <div className="d-flex justify-content-center px-5">
                <button
                  onClick={this.handleClickDecrement}
                  className="btn  btn-outline-danger me-5"
                >
                  <i className="bi bi-dash-circle fs-1"></i>
                </button>
                <button
                  onClick={this.handleClickIncrement}
                  className="btn btn-outline-success ms-5"
                >
                  <i className="bi bi-plus-circle fs-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

// const Counter = () => {
//   let counter = 0;

//   const handleClick = e => {
//     counter++;
//     console.log(counter);
//   };
//   return (
//     <Container>
//       <div>
//         <div className="card bg-dark text-white " style={{ width: '300px' }}>
//           <div className="card-body">
//             <h5 className="card-title text-center fs-1">Counter</h5>
//             <p className="card-text  text-center" style={{ fontSize: '80px' }}>
//               {counter}
//             </p>
//             <div className="d-flex justify-content-center px-5">
//               <button className="btn  btn-outline-danger me-5">
//                 <i className="bi bi-dash-circle fs-1"></i>
//               </button>
//               <button
//                 onClick={handleClick}
//                 className="btn btn-outline-success ms-5"
//               >
//                 <i className="bi bi-plus-circle fs-1"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

export default Counter;
