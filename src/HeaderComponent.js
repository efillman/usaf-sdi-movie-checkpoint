import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  const [ searchQuery, setSearchQuery ] = useState('')

  const handleSearchQueryChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value)
  };

  const handleSearchClick = (event) => {
    props.searchCallback(searchQuery)
  };

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <span className="">GMDB</span>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link className="nav-link px-2 text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-white" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleSearchQueryChange}
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2" onClick={handleSearchClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent