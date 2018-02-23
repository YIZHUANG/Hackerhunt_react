import React from "react";
import Moment from "react-moment";

const ApiList = ({ items }) => {
  const { title, desc, author, votes, date, comments, tags, link } = items;
  return (
    <div className="card-list">
      <div className="card-list__icon-container">
        <a className="card-list__icon-main-container">
          <svg className="card-list__icon-main">
            <path d="M15 14h-10l5-9 5 9z" />
          </svg>
          <span className="card-list__notification">{votes}</span>
        </a>
        <a className="card-list__icon-secondary-container">
          <svg className="card-list__icon-secondary">
            <path d="M9.016 3c2.748 0 4.984 2.243 4.984 5s-2.236 5-4.97 5l-0.060-0.004c-0.055-0.004-0.11-0.007-0.165-0.010l-0.336-0.014-3.665 1.098 0.629-2.483-0.517-0.747c-0.58-0.839-0.886-1.822-0.886-2.842 0-2.757 2.236-5 4.984-5zM9.016 1c-3.857 0-6.984 3.134-6.984 7 0 1.479 0.46 2.848 1.241 3.978l-1.272 5.022 6.722-2.015c0.098 0.004 0.194 0.015 0.293 0.015 3.857 0 6.984-3.134 6.984-7s-3.127-7-6.984-7v0z" />
          </svg>
          <span className="card-list__comment">{comments}</span>
        </a>
      </div>
      <div className="card-list__content-container">
        <div className="card-list__title">
          <a href={link} className="card-list__title-text">
            {title}
          </a>
        </div>
        <div className="card-list__description">
          <span className="card-list__description-text">{desc}</span>
        </div>
        <div className="card-list__footer">
          <span className="card-list__timeStamp text-muted">
            <Moment unix fromNow className="card-list__fromnow">{date}</Moment>
            <span className="ml-1">by</span>
            <a
              href={`https://hackerhunt.co/author/${author}`}
              className="text-muted ml-1"
            >
            {author}
            </a>
          </span>
          <div className="card-list__keywords">
            {tags.split(",").map(
              function(tag, index) {
                return (
                  <a
                    href="https://hackerhunt.co/topic/media/trending"
                    key={index}
                    className="card-list__keywords-items text-muted"
                  >
                    {tag}
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiList;
