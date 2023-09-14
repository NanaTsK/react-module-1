import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'components/index.styled';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class HackerNews extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/search?query=react');
      this.setState({ articles: response.data.hits });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <Container>
        <div>
          {articles.length > 0 ? <ArticleList articles={articles} /> : null}
        </div>
      </Container>
    );
  }
}

export default HackerNews;
