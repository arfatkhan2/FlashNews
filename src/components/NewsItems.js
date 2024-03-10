import React from 'react';

const NewsItems = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="card my-3 bg-light">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>
        {source}
      </span>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <img src={imageUrl ? imageUrl : 'https://t4.ftcdn.net/jpg/00/79/58/13/360_F_79581336_WJ6b4sNhfvP444SKpdQKCob4hHM3PMMm.jpg'} className="card-img-top img-fluid" alt="News" />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
