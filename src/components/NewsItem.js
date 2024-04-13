import React from "react";

const NewsItem = (props)=> {
    let { title, content, imageUrl, newsUrl, author, time, source } =
      props;
    return (
      <div>
        <div className="card my-4">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge text-bg-info" >
              {source}
            </span>
          </div>

          <img
            src={
              imageUrl
                ? imageUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7L6GWkDw4YErv6NONIoJcbCTcRjoIBYDUGWfFdirmoQ&s"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{content}.....</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on {time}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem;