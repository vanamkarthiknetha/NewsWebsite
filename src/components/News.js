import React, { useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(10);
    setloading(true);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.newsApi}&page=${page}&pageSize=${props.pageSize} `
    );

    let parsedData = await data.json();
    props.setprogress(50);

    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setprogress(100);
  };

  useEffect(() => {
    if (props.category === "")
      document.title = "NewsMonkey - Your daily news app!";
    else
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    
    updateNews();
    // eslint-disable-next-line
  },[]);

  const fetchMoreData = async () => {

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=cd8fae387afb4f63b41ee51907d29c0c&page=${page+1}&pageSize=${props.pageSize} `
    );
    setpage(page + 1);


    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <h1 className="text-center my-1">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Loading />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 36) : ""}
                    content={
                      ele.description ? ele.description.slice(0, 89) : ""
                    }
                    imageUrl={ele.urlToImage}
                    newsUrl={ele.url}
                    author={ele.author}
                    time={new Date(ele.publishedAt).toGMTString()}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
