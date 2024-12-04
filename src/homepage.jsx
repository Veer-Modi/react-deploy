import logo from "./assets/images/logo.svg";
import search from "./assets/images/search.svg";
import filter from "./assets/images/filter.svg";
import "./style.css";

function Homepage() {
  return (
    <>
      <body>
        <header className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <div className="exp">
              <div>
                <p>Explore</p>
              </div>
              <div>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.5 2.5L4.92667 6.073C4.90348 6.09622 4.87594 6.11464 4.84563 6.12721C4.81531 6.13978 4.78282 6.14625 4.75 6.14625C4.71718 6.14625 4.68469 6.13978 4.65437 6.12721C4.62406 6.11464 4.59652 6.09622 4.57333 6.073L1 2.5' stroke='%230D0C22' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
              </div>
            </div>
            <div className="hire">
              <div>
                <p>Hire a Designer</p>
              </div>
              <div>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.5 2.5L4.92667 6.073C4.90348 6.09622 4.87594 6.11464 4.84563 6.12721C4.81531 6.13978 4.78282 6.14625 4.75 6.14625C4.71718 6.14625 4.68469 6.13978 4.65437 6.12721C4.62406 6.11464 4.59652 6.09622 4.57333 6.073L1 2.5' stroke='%230D0C22' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p>Find Jobs</p>
            </div>
            <div>
              <p>Blogs</p>
            </div>
          </div>
          <div className="acc">
            <div className="sign">
              <button>Sign up</button>
            </div>
            <div className="log">
              <button id="login">Log in</button>
            </div>
          </div>
        </header>
        <section className="search">
          <div className="search-container">
            <div className="disc">
              <h1>Discover the world's</h1>
              <h1> top designers</h1>
            </div>
            <div className="ex">
              <p>Explore work from the talented and accomplished designers </p>
              <p> ready to take on your next project</p>
            </div>
            <div className="ser-input">
              <div className="search-input">
                <input
                  id="search"
                  type="text"
                  name="search"
                  placeholder="What are looking for?"
                />
              </div>
              <div className="shots">
                <button>Shots</button>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.5 2.5L4.92667 6.073C4.90348 6.09622 4.87594 6.11464 4.84563 6.12721C4.81531 6.13978 4.78282 6.14625 4.75 6.14625C4.71718 6.14625 4.68469 6.13978 4.65437 6.12721C4.62406 6.11464 4.59652 6.09622 4.57333 6.073L1 2.5' stroke='%230D0C22' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
              </div>
              <div className="ser-but">
                <button>
                  <img src={search} alt="" />
                </button>
              </div>
            </div>
            <div className="purpose">
              <button className="pur-item-1">Trending searches</button>
              <button className="pur-item">landing page</button>
              <button className="pur-item">e-commerce</button>
              <button className="pur-item">mobile app</button>
              <button className="pur-item">logo design</button>
              <button className="pur-item">dashboard</button>
              <button className="pur-item">icons</button>
            </div>
          </div>
        </section>
        <section className="filter">
          <div className="popular">
            {" "}
            <button id="populer">Popular</button>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='9' viewBox='0 0 10 9' fill='none'%3E%3Cpath d='M8.5 2.5L4.92667 6.073C4.90348 6.09622 4.87594 6.11464 4.84563 6.12721C4.81531 6.13978 4.78282 6.14625 4.75 6.14625C4.71718 6.14625 4.68469 6.13978 4.65437 6.12721C4.62406 6.11464 4.59652 6.09622 4.57333 6.073L1 2.5' stroke='%230D0C22' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
              alt=""
            />
          </div>
          <div className="categories">
            <button class="cat-item-1">Discover</button>
            <button className="cat-item">Animation</button>
            <button className="cat-item">Branding</button>
            <button className="cat-item">Illustration</button>
            <button className="cat-item">mobile</button>
            <button className="cat-item">Print</button>
            <button className="cat-item">Product Design</button>
            <button className="cat-item">Typography</button>
            <button className="cat-item">Web Design</button>
          </div>
          <div className="fill-btn">
            <img src={filter} alt="" />
            <button>Filter</button>
          </div>
        </section>
        <section className="product-container">
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17817249/file/original-edec7a5275dc22b566c01c63b31f2c6f.jpg?format=webp&resize=1200x900&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Extej UI UX Design Agency"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1043230/avatars/small/092502a9a3cea1c44dd5e5f9939430b4.png?1540212885"
                    src="https://cdn.dribbble.com/users/1043230/avatars/small/092502a9a3cea1c44dd5e5f9939430b4.png?1540212885"
                  />
                  <span className="display-name">Extej UI UX Design A...</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">PRO</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>330</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>7.4k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17809922/file/original-da9797b5f58180096325a27c4a91d3bc.png?format=webp&resize=1200x900&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="One Week Wonders"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1667332/avatars/small/edd45777913e5de4434a1a1b812c76cf.png?1566878129"
                    src="https://cdn.dribbble.com/users/1667332/avatars/small/edd45777913e5de4434a1a1b812c76cf.png?1566878129"
                  />
                  <span className="display-name">One Week Wonders</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>57</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>2.5k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17818427/file/original-b03308b4b8b81d5c4c250b15b75770c9.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Korsa "
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/12666113/avatars/small/f68bc606a26602253c6693c66315d845.png?1695104749"
                    src="https://cdn.dribbble.com/users/12666113/avatars/small/f68bc606a26602253c6693c66315d845.png?1695104749"
                  />
                  <span class="display-name">Korsa</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>110</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>2.3k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17816880/file/original-95dd73482c02835f3e9960960c9bc2c5.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Geex Arts"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1832625/avatars/small/d0a819596a87076630326f81799e85c0.jpg?1586442553"
                    src="https://cdn.dribbble.com/users/1832625/avatars/small/d0a819596a87076630326f81799e85c0.jpg?1586442553"
                  />
                  <span class="display-name">Geex Arts</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>68</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>5.3k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17254555/file/original-1a8d87c57619be31288e2a5931a0f8ec.jpg?crop=299x103-2125x1472&format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Ben Didier"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/3902/avatars/small/eb51375faf008c355b83c82ec578a2e5.jpg?1672331087"
                    src="https://cdn.dribbble.com/users/3902/avatars/small/eb51375faf008c355b83c82ec578a2e5.jpg?1672331087"
                  />
                  <span class="display-name">Ben Didier</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">PRO</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>27</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>3.3k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17818387/file/original-812c80724e71118de5c1e8314b545ca9.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Odama"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/6850340/avatars/small/09e52d7cca4f82c18e68ba67bbaeb1dc.png?1664764970"
                    src="https://cdn.dribbble.com/users/6850340/avatars/small/09e52d7cca4f82c18e68ba67bbaeb1dc.png?1664764970"
                  />
                  <span class="display-name">Odama</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>88</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>1.9k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17813526/file/original-245c91ab9d11c251b0cb3389e8a3ab89.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="UI8"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/107759/avatars/small/b718a83234554558bf21578364cc03ea.png?1676050868"
                    src="https://cdn.dribbble.com/users/107759/avatars/small/b718a83234554558bf21578364cc03ea.png?1676050868"
                  />
                  <span class="display-name">UI8</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>93</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>12.1k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17723254/file/original-dd9477587dddf1573881cd3fc8853edd.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Ronas IT | UI/UX Team"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/4949363/avatars/small/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
                    src="https://cdn.dribbble.com/users/4949363/avatars/small/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777"
                  />
                  <span class="display-name">Ronas IT | UI/Ux Te...</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>171</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>28.6k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17819707/file/original-bc8471662739afa3abd6ef57c5ba2723.jpg?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Samera I Logo Designer"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/5977144/avatars/small/dcfe817f2a7fb217b8110f7b17c833f8.png?1724561179"
                    src="https://cdn.dribbble.com/users/5977144/avatars/small/dcfe817f2a7fb217b8110f7b17c833f8.png?1724561179"
                  />
                  <span class="display-name">Samera I Logo Designer</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>58</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>920</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17811695/file/original-f400e3373977927eb0d6bb423e748a4a.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Nixtio"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif?1732126488"
                    src="https://cdn.dribbble.com/users/1057940/avatars/small/f068710cc8e5fcebcbcd8f1f75d1b4ef.gif?1732126488"
                  />
                  <span class="display-name">Nixtio</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>147</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>14k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/16609708/file/original-92dc6671b3a0ced8e430da4e8f596ec0.jpg?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="strangehelix.bio"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/4764472/avatars/small/4e34be637dc12a1f5ebae984267b5d8c.png?1686467014"
                    src="https://cdn.dribbble.com/users/4764472/avatars/small/4e34be637dc12a1f5ebae984267b5d8c.png?1686467014"
                  />
                  <span class="display-name">strangehelix.bio</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">PRO</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>32</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>5k</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17812342/file/original-bff5e99a71c29c00a924ded6ce855766.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div class="title">
              <div class="name">
                <div class="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="HALO LAB"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/466659/avatars/small/faff973d070ece355f9ac1280b5aa1c9.png?1697203398"
                    src="https://cdn.dribbble.com/users/466659/avatars/small/faff973d070ece355f9ac1280b5aa1c9.png?1697203398"
                  />
                  <span class="display-name">HALO LAB</span>
                </div>
                <div class="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div class="like-view">
                <div class="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>83</span>
                </div>
                <div class="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>9.9k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17819140/file/original-c1594ff10d21bdacd11f356875071d86.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Keitoto "
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/6487750/avatars/small/9bfce022a9a629ee36d31ce439020ba2.png?1714974300"
                    src="https://cdn.dribbble.com/users/6487750/avatars/small/9bfce022a9a629ee36d31ce439020ba2.png?1714974300"
                  />
                  <span className="display-name">Keitoto</span>
                </div>
                <div className="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>61</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>916</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17814229/file/original-c32769caa6f30cbb7e3642266c4773e1.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div class="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Finsepa"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/22265578/avatars/small/3df3019d8234963cc677b6f2321853ef.png?1729504600"
                    src="https://cdn.dribbble.com/users/22265578/avatars/small/3df3019d8234963cc677b6f2321853ef.png?1729504600"
                  />
                  <span className="display-name">Finsepa</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>125</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>4.4k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17819226/file/original-6032656188ff269d06636f60d86241d6.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div class="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="10am Studio"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/8191133/avatars/small/b24641afd7dad345dea845c4ca911eea.png?1642403706"
                    src="https://cdn.dribbble.com/users/8191133/avatars/small/b24641afd7dad345dea845c4ca911eea.png?1642403706"
                  />
                  <span className="display-name">10am Studio</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>32</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>720</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17814705/file/still-371a98ef38143719b3a04eb99cd0ae06.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Opndoo"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/21972535/avatars/small/78882d63c2f98a0073e594cc2eacc5e0.png?1726426395"
                    src="https://cdn.dribbble.com/users/21972535/avatars/small/78882d63c2f98a0073e594cc2eacc5e0.png?1726426395"
                  />
                  <span className="display-name">Opndoo</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>121</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>6.5k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17818538/file/original-e53865c6c3f65da8f6422dbe2866a0f9.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Sans Brothers"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/9492995/avatars/small/f2df69c0e8bf680e1ad0389c2913c608.png?1696384511"
                    src="https://cdn.dribbble.com/users/9492995/avatars/small/f2df69c0e8bf680e1ad0389c2913c608.png?1696384511"
                  />
                  <span className="display-name">Sans Brothers</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>45</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>1.4k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17818225/file/still-77fc6ade74311548b9ca1cd679c9800e.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="AmazingUI"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/2404738/avatars/small/82c3925c1ae81163c16f0fe2ed9597c1.png?1615329771"
                    src="https://cdn.dribbble.com/users/2404738/avatars/small/82c3925c1ae81163c16f0fe2ed9597c1.png?1615329771"
                  />
                  <span className="display-name">AmazingUI</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">Pro</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>45</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>1.5k</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17814671/file/original-c117d5353ddd17365dfa6ea5039a9086.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo lazyloaded"
                    alt="Pickolab Studio"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/7179533/avatars/small/f422e09d77e62217dc67c457f3cf1807.jpg?1643450830"
                    src="https://cdn.dribbble.com/users/7179533/avatars/small/f422e09d77e62217dc67c457f3cf1807.jpg?1643450830"
                  />
                  <span className="display-name">Pickolab Studio</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>27</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>767</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17790008/file/original-5817e9d441ac1177f740d6bc71f05df7.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    class="photo lazyloaded"
                    alt="Fikri Studio"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/851633/avatars/small/a1b1f18fe68a03fa023b733f348b838c.png?1675068407"
                    src="https://cdn.dribbble.com/users/851633/avatars/small/a1b1f18fe68a03fa023b733f348b838c.png?1675068407"
                  />
                  <span className="display-name">Fikri Studio</span>
                </div>
                <div className="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>31</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>610</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17517951/file/original-668c912700610fd64dfbb283fe1d4446.jpg?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo ls-is-cached lazyloaded"
                    alt="Samuel Oktavianus"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1814344/avatars/small/cad0954db7440914bbf5f3ed816c9979.jpg?1718852918"
                    src="https://cdn.dribbble.com/users/1814344/avatars/small/cad0954db7440914bbf5f3ed816c9979.jpg?1718852918"
                  />
                  <span className="display-name">Samuel Oktavianus</span>
                </div>
                <div className="badge">
                  <span className="bagde-detail">PRO</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>25</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>553</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17818490/file/original-60fe95e1b74d27c349c0fb5016157685.png?format=webp&resize=400x300&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    className="photo lazyloaded"
                    alt="Wavespace - UI/UX Design Agency "
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/7150929/avatars/small/44f636a181244e0bbc6054f9570756f6.png?1701087241"
                    src="https://cdn.dribbble.com/users/7150929/avatars/small/44f636a181244e0bbc6054f9570756f6.png?1701087241"
                  />
                  <span className="display-name">Wavesspace - UI/UX D...</span>
                </div>
                <div className="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>53</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>740</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="pro-img">
              <img
                src="https://cdn.dribbble.com/userupload/17820908/file/original-a6e8a24ec0c903b27d84ef07d1a05c86.png?format=webp&resize=1200x900&vertical=center"
                alt=""
                width="300"
              />
            </div>
            <div className="title">
              <div className="name">
                <div className="title-name">
                  <img
                    class="photo ls-is-cached lazyloaded"
                    alt="Paperpillar"
                    width="24"
                    height="24"
                    data-src="https://cdn.dribbble.com/users/1047455/avatars/small/316d7dcb011d5b29b8960194c3982a54.png?1721788289"
                    src="https://cdn.dribbble.com/users/1047455/avatars/small/316d7dcb011d5b29b8960194c3982a54.png?1721788289"
                  />
                  <span className="display-name">PAperpillar</span>
                </div>
                <div className="badge">
                  <span class="bagde-detail">TEAM</span>
                </div>
              </div>
              <div className="like-view">
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>37</span>
                </div>
                <div className="view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    role="img"
                    class="icon fill-current shot-tools-icon"
                  >
                    <path
                      d="M8 3C4.36992 3 1.98789 6.21774 1.18763 7.49059C1.09079 7.64462 1.04237 7.72163 1.01527 7.84042C0.99491 7.92964 0.99491 8.07036 1.01527 8.15958C1.04237 8.27837 1.09079 8.35539 1.18763 8.50941C1.98789 9.78226 4.36992 13 8 13C11.6301 13 14.0121 9.78226 14.8124 8.50941L14.8124 8.50939C14.9092 8.35538 14.9576 8.27837 14.9847 8.15958C15.0051 8.07036 15.0051 7.92964 14.9847 7.84042C14.9576 7.72163 14.9092 7.64462 14.8124 7.4906L14.8124 7.49059C14.0121 6.21774 11.6301 3 8 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span>1.1k</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="stc">
          <button>Sign up to continue</button>
        </section>

        <section class="slider">
          <div class="slide-track">
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17112464/file/original-a9d5a1b369d4a3fb1a2387a6123ccffd.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17246273/file/original-c32d0fc186bb93be415ef8dc48baa62e.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17059756/file/original-cabc1f3c118a87e424bc97a8bc5f5266.jpg?crop=215x0-2542x1745&format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Branding</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17182960/file/original-5d5497d4d97b97553c13d234ed89e2f6.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Illustration</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17191934/file/still-76724cd340a87bc6fdbc9b7b406bce18.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Typography</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17266793/file/original-acdb6337f839133eacd2a3a3b7bb85a8.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Product Design</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17052020/file/original-9eef05e33b21517f04f5151143f4539b.jpg?crop=0x0-5000x3750&format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Print</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17388038/file/still-d167229decc1b12695c9988cdbde62b1.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Animation</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17112464/file/original-a9d5a1b369d4a3fb1a2387a6123ccffd.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17246273/file/original-c32d0fc186bb93be415ef8dc48baa62e.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17059756/file/original-cabc1f3c118a87e424bc97a8bc5f5266.jpg?crop=215x0-2542x1745&format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Branding</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17182960/file/original-5d5497d4d97b97553c13d234ed89e2f6.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Illustration</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17191934/file/still-76724cd340a87bc6fdbc9b7b406bce18.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Typography</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17266793/file/original-acdb6337f839133eacd2a3a3b7bb85a8.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Product Design</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17052020/file/original-9eef05e33b21517f04f5151143f4539b.jpg?crop=0x0-5000x3750&format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Print</span>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="detail">
                <div>
                  <img
                    src="https://cdn.dribbble.com/userupload/17388038/file/still-d167229decc1b12695c9988cdbde62b1.png?format=webp&resize=200x150&vertical=center"
                    alt=""
                  />
                </div>
                <div>
                  <span>Animation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="footer">
          <div class="st-footer">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="59"
                viewBox="0 0 210 59"
                fill="none"
              >
                <title>Dribbble: the community for graphic design</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M206.622 31.928C207.065 31.4116 207.85 31.4352 208.253 31.986H208.25L209.784 34.0834C210.075 34.4864 210.073 35.0425 209.769 35.4349C207.106 38.8893 202.44 42.2143 196.81 42.5359C192.366 42.7887 188.701 41.1051 186.706 37.9221C186.311 37.2925 185.44 37.2557 184.997 37.8511C182.63 41.0286 179.766 43.5134 176.782 43.6845C171.467 43.9876 169.966 40.4228 171.28 32.563C171.412 31.7805 170.726 31.1192 169.987 31.3141C168.885 31.6065 167.715 31.7356 166.528 31.633C166.034 31.5907 165.571 31.8912 165.422 32.3811C163.455 38.8418 158.774 44.8518 152.715 45.1997C148.847 45.421 143.069 43.205 143.647 33.9462C143.695 33.1927 143.019 32.5999 142.323 32.8106C141.11 33.1795 139.804 33.3534 138.474 33.2401C137.981 33.1979 137.52 33.4983 137.371 33.9885C135.404 40.449 130.723 46.4592 124.664 46.8068C120.796 47.0282 115.018 44.8124 115.596 35.5536C115.644 34.7998 114.968 34.207 114.272 34.418C113.059 34.7869 111.753 34.9634 110.423 34.8473C109.93 34.8053 109.469 35.1057 109.32 35.5956C107.352 42.0564 102.672 48.0664 96.6132 48.4142C93.8613 48.5723 90.1398 47.4945 88.4308 43.5264C88.1016 42.7599 87.1144 42.6438 86.6257 43.3105C84.2334 46.5751 81.3193 49.152 78.2762 49.3259C75.1571 49.505 73.4509 48.2535 72.7091 46.0216C72.4458 45.2339 71.4609 45.0467 70.9293 45.6712C68.8002 48.1744 66.3749 50.0082 63.9216 50.1479C60.1393 50.3666 57.9619 47.563 57.7823 44.1667C57.5747 40.204 59.2887 35.564 61.2025 30.4999C61.4684 29.7964 60.9873 29.0348 60.2608 29.0032C59.157 28.956 57.8963 28.8399 56.7113 28.6185C56.1771 28.5159 55.6583 28.8479 55.5063 29.3907C53.243 37.4716 49.7771 45.392 46.8529 50.074C46.5263 50.5984 45.8505 50.7381 45.3593 50.377L43.1264 48.7331C42.6682 48.393 42.5441 47.7397 42.8504 47.247C47.0759 40.478 50.8278 29.8807 52.1215 22.0421C52.2025 21.5415 52.61 21.17 53.0986 21.141L56.0683 20.9697C56.7493 20.9302 57.2861 21.5652 57.162 22.2634L57.1493 22.3372C57.0379 22.959 57.4532 23.5439 58.0532 23.6257C60.7164 23.992 64.6963 24.0366 67.3975 23.9313C68.157 23.9023 68.6938 24.6875 68.4178 25.4226C66.2507 31.1876 63.3469 39.1765 63.5139 42.3382C63.5899 43.7662 64.2204 44.5462 65.3291 44.4829C67.4508 44.3619 70.7141 40.0959 73.1876 35.3455C73.2331 35.261 73.2659 35.169 73.2862 35.0741C74.1196 31.3543 75.3565 27.2068 76.6061 23.0163L76.6837 22.7561C76.8128 22.3188 77.1901 22.0131 77.6306 21.9868L81.1876 21.7839C81.9219 21.7417 82.4712 22.4795 82.2485 23.2093C82.0654 23.8112 81.883 24.409 81.7023 25.0014C78.5723 35.2603 75.9438 43.8759 79.4838 43.6742C81.7978 43.5422 85.0764 39.6164 87.8966 34.0279C87.9421 33.9356 87.9751 33.8381 87.9954 33.7355C88.1372 33.0055 88.3092 32.2416 88.5195 31.4432C90.1639 24.8753 92.0286 18.3691 93.8955 11.855C94.4717 9.8446 95.0481 7.83341 95.6182 5.81945C95.7449 5.37417 96.1245 5.06062 96.57 5.03426L100.221 4.82611C100.963 4.78396 101.512 5.52962 101.279 6.26474C99.8208 10.8388 98.2967 15.7106 96.8487 20.4006C96.5448 21.3887 97.603 22.2107 98.4386 21.6416C99.8791 20.6562 101.545 20.0027 103.158 19.9105C107.267 19.676 110.064 23.0565 110.332 28.1496C110.347 28.4184 110.363 28.7082 110.37 29.0032C110.385 29.5673 110.808 30.023 111.348 30.0704C113.282 30.2417 115.259 29.6673 116.786 28.3051C116.943 28.1654 117.049 27.9757 117.102 27.7701C118.616 21.8916 120.287 16.0568 121.959 10.2147C122.532 8.21455 123.105 6.21353 123.672 4.20956C123.798 3.76427 124.178 3.45072 124.624 3.42438L128.274 3.21623C129.016 3.17408 129.566 3.91972 129.333 4.65484C127.874 9.22892 126.35 14.1007 124.902 18.7907C124.598 19.7788 125.657 20.6008 126.492 20.0317C127.933 19.0463 129.599 18.3929 131.211 18.3006C135.32 18.0662 138.117 21.4466 138.386 26.5399C138.401 26.8084 138.416 27.0985 138.424 27.3935C138.436 27.9573 138.862 28.4132 139.401 28.4607C141.335 28.6318 143.312 28.0573 144.839 26.6951C144.996 26.5557 145.102 26.3659 145.156 26.1604C146.67 20.2818 148.34 14.4471 150.013 8.6051C150.586 6.60484 151.158 4.60372 151.725 2.59968C151.852 2.15439 152.232 1.84085 152.677 1.8145L156.328 1.60635C157.07 1.56419 157.619 2.30985 157.386 3.04497C155.928 7.61902 154.404 12.4908 152.956 17.1808C152.652 18.1689 153.71 18.991 154.546 18.4219C155.986 17.4364 157.652 16.783 159.265 16.6908C163.374 16.4563 166.171 19.8367 166.44 24.9299C166.455 25.2013 166.47 25.4885 166.477 25.7835C166.493 26.3447 166.913 26.8032 167.452 26.8507C169.323 27.0166 171.237 26.4844 172.741 25.2171C172.908 25.0774 173.024 24.8798 173.08 24.6637C174.804 18.0187 177.336 9.31324 179.777 0.981894C179.906 0.541877 180.285 0.236236 180.726 0.209888L184.344 0.0017367C185.078 -0.0404207 185.627 0.692063 185.407 1.42191C182.047 12.5778 179.308 22.3372 177.797 28.0944C175.789 35.9039 175.711 38.1567 177.994 38.025C179.911 37.9143 182.493 35.1952 184.928 31.0847C185.025 30.924 185.075 30.7397 185.083 30.5526C185.402 22.324 190.447 14.8385 197.946 14.409C202.969 14.1218 205.721 17.916 205.918 21.6495C206.293 28.7767 199.248 33.3324 192.42 32.9107C191.625 32.8606 191.047 33.7145 191.397 34.4574C192.351 36.4967 194.359 37.6352 197.787 37.4374C201.048 37.2531 204.468 34.439 206.622 31.928ZM93.7548 33.9278C92.1345 40.4228 94.1017 42.9652 96.646 42.8203C100.823 42.5805 104.864 34.9263 104.553 29.019C104.416 26.4396 102.907 25.0958 101.145 25.1961C98.2106 25.3646 95.0512 28.745 93.7548 33.9278ZM121.808 32.3207C120.188 38.8154 122.155 41.3581 124.7 41.2131H124.697C128.874 40.9734 132.917 33.3192 132.606 27.4119C132.472 24.8324 130.96 23.4886 129.198 23.5887C126.264 23.7574 123.105 27.1379 121.808 32.3207ZM149.862 30.7133C148.242 37.2082 150.209 39.7509 152.753 39.606H152.751C156.925 39.3662 160.971 31.712 160.66 25.8047C160.525 23.2251 159.014 21.8814 157.252 21.9815C154.318 22.1501 151.158 25.5307 149.862 30.7133ZM200.584 22.2239C200.559 20.5218 199.513 19.2887 197.817 19.3862H197.815C194.483 19.5785 191.875 23.1856 191.045 27.562C190.913 28.2577 191.422 28.9058 192.103 28.8899C196.407 28.7821 200.721 25.9416 200.584 22.2239ZM44.3525 25.3837C43.9171 12.1962 35.3423 3.49339 22.6712 3.94658C17.2307 4.19426 11.0052 6.25733 6.32164 9.9461C5.88113 10.2939 5.76719 10.9315 6.06593 11.4163L8.05331 14.6519C8.39254 15.2052 9.11407 15.3185 9.60776 14.9075C13.1724 11.9459 18.0383 10.0041 22.7193 9.79855C31.403 9.43757 37.7828 14.9971 38.1551 25.7367C38.6209 38.2417 30.2157 52.5461 16.7091 53.3207C16.2382 53.3471 15.7471 53.3577 15.2559 53.3577C14.5673 53.3577 14.0585 52.6858 14.2306 51.9901C16.8357 41.4744 19.8763 30.1974 22.9776 19.7029C23.1928 18.973 22.6459 18.2458 21.9143 18.288L17.9648 18.5146C17.5218 18.5409 17.142 18.8492 17.0129 19.2918C14.0331 29.6045 11.0508 40.7895 8.36723 51.284C8.21279 51.89 7.59761 52.2379 7.02544 52.0427C5.62543 51.566 4.34693 51.0232 3.2583 50.3881C2.73677 50.0825 2.07601 50.2987 1.80765 50.8571L0.11142 54.4037C-0.139216 54.9281 0.0455967 55.5709 0.539275 55.8527C4.38489 58.0345 10.223 59.2806 16.0914 58.9462C35.4032 57.8393 44.864 40.0015 44.3525 25.3889V25.3837ZM82.3044 9.18082C79.955 9.31518 77.8713 11.9553 78.0183 14.7377C78.1143 16.5715 79.2917 17.7967 81.1195 17.694C83.4689 17.5596 85.6106 14.7798 85.4714 12.1318C85.3754 10.298 84.0005 9.08333 82.3044 9.18082Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <ol class="support">
              <li>For designers</li>
              <li>Hire talent</li>
              <li>Inspiration</li>
              <li>Advertising</li>
              <li>Blog</li>
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
            </ol>
            <ol class="social">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="ahtefznufcpp271mci8fx3w4tqxsn3e8"
                  role="img"
                  viewBox="0 0 24 24"
                  class="icon "
                >
                  <title id="ahtefznufcpp271mci8fx3w4tqxsn3e8">
                    Twitter icon
                  </title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="af6sf7znqz5twiepjv96gdbc4ifs2oqa"
                  role="img"
                  viewBox="0 0 24 24"
                  class="icon "
                >
                  <title id="af6sf7znqz5twiepjv96gdbc4ifs2oqa">
                    Facebook icon
                  </title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                  role="img"
                  class="icon "
                >
                  <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"></path>
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="ad41ggsvl3mv5ffxe0758o81pyuaztaj"
                  role="img"
                  viewBox="0 0 24 24"
                  class="icon "
                >
                  <title id="ad41ggsvl3mv5ffxe0758o81pyuaztaj">
                    Pinterest icon
                  </title>
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                </svg>
              </li>
            </ol>
          </div>
          <div class="nd-footer">
            <ol class="terms">
              <li>c 2024 Dribbble</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ol>
            <ol class="help">
              <li>Jobs</li>
              <li>Designers</li>
              <li>Freelancers</li>
              <li>Tags</li>
              <li>Places</li>
              <li>Resources</li>
            </ol>
          </div>
        </section>
      </body>
    </>
  );
}

export default Homepage;
