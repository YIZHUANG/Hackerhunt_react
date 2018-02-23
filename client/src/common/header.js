import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            data-reactid="7"
          >
            <path
              d="M27 17v7h5v-24h-5v12h-4v-12h-5v24h5v-7h4zm-27 11h32v4h-32v-4zm0-28h5v24h-5v-24zm9 0h5v24h-5v-24zm-4 12h4v5h-4v-5z"
              fill="#f60"
            />
          </svg>
        </a>
      </div>
      <form className="search">
        <div className="row">
          <input type="text" className="search__input form-control" placeholder="This website is for practice only" />
          <button className="search__button">
            <svg className="search__icon">
              <path
                d="M7.012 3c2.193 0 3.977 1.794 3.977 4 0 0.831-0.255 1.63-0.737 2.312l-0.392 0.553-0.55 0.393c-0.678 0.485-1.473 0.742-2.298 0.742-2.193 0-3.977-1.794-3.977-4s1.784-4 3.977-4zM7.012 1c-3.295 0-5.966 2.686-5.966 6s2.671 6 5.966 6c1.288 0 2.477-0.414 3.451-1.112l4.791 4.819c0.195 0.196 0.45 0.293 0.705 0.293s0.51-0.098 0.704-0.293c0.389-0.391 0.389-1.025 0-1.416l-4.791-4.819c0.694-0.98 1.105-2.177 1.105-3.471 0-3.314-2.671-6-5.965-6v0z"
                fill="grey"
              />
            </svg>
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
