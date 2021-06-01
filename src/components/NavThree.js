import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logo-light.png";
class NavThree extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };
  render() {
    return (
      <header className="site-header site-header__home-three ">
        <div className="topbar-one">
          <div className="container">
            <div className="topbar-one__left">
              <a href="#none">needhelp@kipso.com</a>
              <a href="#none">444 888 0000</a>
            </div>
            <div className="topbar-one__right">
              <a href="#none">Login</a>
              <a href="#none">Register</a>
            </div>
          </div>
        </div>
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  className="main-logo"
                  width="160"
                  alt="Awesome alter text"
                />
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#none">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About Page</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing Plans</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ'S</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/course-details">Courses Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="teachers.html">Teachers</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/teachers">Teachers</Link>
                    </li>
                    <li>
                      <Link to="/teacher-details">Teachers Details</Link>
                    </li>
                    <li>
                      <Link to="/become-teacher">Become Teacher</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/news">News Page</Link>
                    </li>
                    <li>
                      <Link to="/news-details">News Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="header__social">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavThree;
