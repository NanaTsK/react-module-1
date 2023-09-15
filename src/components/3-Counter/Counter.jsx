import React, { Component } from 'react';
// import axios from 'axios';
import { Container } from 'components/index.styled';

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

class Counter extends Component {
  //   state = {
  //     articles: [],
  //   };

  //   async componentDidMount() {
  //     try {
  //       const response = await axios.get('/search?query=react');
  //       this.setState({ articles: response.data.hits });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  render() {
    // const { articles } = this.state;
    return (
      <Container>
        <div>
          <span>Counter</span>
        </div>
      </Container>
    );
  }
}

export default Counter;
