// import React, { Component } from 'react';
import { Container } from 'components/index.styled';

// class Counter extends Component {
//   render() {
//     return (
//       <Container>
//         <div>
//           <span>Counter</span>
//         </div>
//       </Container>
//     );
//   }
// }

const Counter = () => {
  return (
    <Container>
      <div>
        <div className="card bg-dark text-white " style={{ width: '300px' }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: '80px' }}>
              0
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                // onClick={handleClick}
                className="btn btn-outline-success me-5"
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </button>
              <button className="btn  btn-outline-danger ms-5">
                <i className="bi bi-dash-circle fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Counter;
