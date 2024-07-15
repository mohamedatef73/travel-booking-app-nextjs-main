import React from "react"

const Footer = () => {
  return (
    <div className="footer w-full flex-col bg-gray-800">
      <div className="links flex w-full justify-between bg-gray-800">
        <div className="left-links flex mt-2 justify-around w-2/3">
          <div className="cols text-white flex flex-col leading-9 mt-10 items-center w-1/4">
            <h1 className="font-bold mt-1 text-md">Home</h1>
            <a>Home</a>
            <a>Community</a>
            <a>Events</a>
            <a>Contact</a>
          </div>
          <div className="cols text-white flex flex-col leading-9 mt-10 items-center w-1/4">
            <h1 className="font-bold mt-1 text-md">Resources</h1>
            <a>Blog</a>
            <a>News</a>
            <a>Guides</a>
            <a>Help Center</a>
          </div>
          <div className="cols text-white flex flex-col leading-9 mt-10 items-center w-1/4">
            <h1 className="font-bold mt-1 text-md">Community</h1>
            <a>NewsFeed</a>
            <a>Profile</a>
            <a>Friends</a>
            <a>Forum</a>
          </div>
          {/* <div className="cols text-white flex flex-col leading-9 mt-10 items-center w-1/4">
            <h1 className="font-bold mt-1 text-lg">Main Links</h1>
            <a>Members</a>
            <a>Activity</a>
            <a>Groups</a>
            <a>Private Group</a>
          </div> */}
        </div>
        <div className="right-links flex justify-center bg-gray-800 text-white items-center w-1/3">
          <div className="text flex flex-col w-3/4 text-white bg-gray-800 justify-center text-center align-center h-80">
            <p className="bold text-start font-medium text-2xl md:text-1xl text-white">
              Subscribe Cirkle Newsletter
            </p>
            <p className="bold text-start font-medium text-2xl md:text-1xl text-white">
              Newsletter
            </p>
            <br />
            <p className="bold text-1xl text-start text-white">
              Subscribe to be the first one to know
            </p>
            <p className="bold text-1xl text-start text-white mt-1">
              about updates. Enter your email
            </p>
            <br />
            <div className="buttons flex flex-row h-14 justify-center gap-3">
              <div className="flex">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 mb-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full bg-gray-800 px-5 h-10 p-2 pl-10 text-sm text-gray-900 text-white border border-white rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <button
                type="button"
                className="text-black hidden z-40 lg:block h-10 bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-md text-sm px-5 text-center -ml-4"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links flex justify-between w-full flex-col md:flex-row sm-hidden h-20 bg-gray-900">
        <div className="logo flex justify-between w-1/2">
          <div className="text flex text-center justify-center items-center mt-5 ml-10 w-1/2 h-8 text-white">
            Besnik Creative Agency.
          </div>
          <div className="logo-icon flex justify-center items-center w-1/4">
            <div className="w-1/4">
              <img src="./svg/Group (1).svg" className="w-9" alt="" />
            </div>
            <h1 className="w-1/4 h-8 text-white font-semibold">Netbook</h1>
          </div>
        </div>
        <div className="social-icons flex w-1/4">
          <img src="/facebook.svg" className="w-8" alt="" />
          <img src="/Twitter.svg" className="w-8" alt="" />
          <img src="/instagram.svg" className="w-8" alt="" />
          <img src="/Linkedin.svg" className="w-8" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
