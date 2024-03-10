import React  from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=fc99caa73bde4cbea926cb117027a466&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles);
    setLoading(false); // Set loading to false when data fetching is completed
    setTotalResults(parseData.totalResults);
};


  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=fc99caa73bde4cbea926cb117027a466&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
 
  };
  
  return (
    <div>
      <div className="container my-3 text-center ">
        <h2 style={{marginTop:'100px',fontWeight:'bold'}}>Flash News Updates from {capitalizeFirstLetter(props.category)}</h2>
        {loading && <Spinner />} 
        {articles && articles.length > 0 && (
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
          >
            <div className="container">
              <div className="row">
                {articles.map((element, index) => (
                  <div className="col-md-4" key={index}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 100) : ''}
                      description={element.description ? element.description.slice(0, 100) : ''}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
                }  

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};  

export default News;
