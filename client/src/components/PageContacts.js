import React from 'react'

const PageContacts = () => {
    return (
      <div>
        <div>
          <header
            id="header"
            className="navbar navbar-expand-lg navbar-light navbar-right bg-white"
          >
            <div className="container">
              <nav className="js-mega-menu navbar-nav-wrap">
                {/* Default Logo */}
                <a
                  className="navbar-brand"
                  href="index.html"
                  aria-label="Space"
                >
                  Company Logo
                  {/* <img class="navbar-brand-logo" src="assets/svg/logos/logo.svg" alt="Image Description"> */}
                </a>
                {/* End Default Logo */}
                {/* Toggler */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-default">
                    <i className="bi-list" />
                  </span>
                  <span className="navbar-toggler-toggled">
                    <i className="bi-x" />
                  </span>
                </button>
                {/* End Toggler */}
                {/* Collapse */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    {/* Landings */}
                    <li
                      className="hs-has-mega-menu nav-item"
                      data-hs-mega-menu-item-options='{
                "desktop": {
                  "maxWidth": "30rem"
                }
              }'
                    >
                      <a
                        id="landingsMegaMenu"
                        className="hs-mega-menu-invoker nav-link"
                        aria-current="page"
                        href="page-about.html"
                        role="button"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-mega-menu hs-position-right-fix "
                        aria-labelledby="landingsMegaMenu"
                      >
                        {/* Main Content */}
                        <div>
                          <div className="row">
                            {/* <div class="col-sm mb-3 mb-sm-0">
                  <span class="dropdown-header">Classic</span>
                  <a class="dropdown-item active" href="index.html">Corporate</a>
                  <a class="dropdown-item " href="landing-agency.html">Agency</a>
                  <a class="dropdown-item " href="landing-consulting.html">Consulting</a>
                  <a class="dropdown-item " href="landing-services.html">Services</a>
                  <a class="dropdown-item " href="landing-business.html">Business</a>
                </div> */}
                            {/* <div class="col-sm">
                  <span class="dropdown-header">Services</span>
                  <a class="dropdown-item " href="landing-services-growth.html">Growth</a>
                  <a class="dropdown-item " href="landing-services-saas.html">SaaS</a>
                  <a class="dropdown-item " href="landing-services-wallet.html">Wallet</a>
                  <a class="dropdown-item " href="landing-services-api.html">API</a>
                </div> */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Main Content */}
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Landings */}
                    {/* Pages */}
                    <li className="hs-has-mega-menu nav-item">
                      <a
                        id="pagesMegaMenu"
                        className="hs-mega-menu-invoker nav-link  "
                        href="page-pricing.html"
                        role="button"
                        aria-expanded="false"
                      >
                        Pricing
                      </a>
                      {/* Mega Menu */}
                      <div
                        className="hs-mega-menu hs-position-right "
                        aria-labelledby="pagesMegaMenu"
                      >
                        {/* Main Content */}
                        <div>
                          <div className="row">
                            {/* <div class="col-sm-6 col-md-3">
                  <span class="dropdown-header">Company</span>
                  <a class="dropdown-item " href="page-about.html">About</a>
                  <a class="dropdown-item " href="page-services.html">Services</a>
                  <a class="dropdown-item " href="page-customer-stories.html">Customer Stories</a>
                  <a class="dropdown-item " href="page-customer-story.html">Customer Story</a>
                  <a class="dropdown-item " href="page-help-center.html">Help Center</a>
                  <a class="dropdown-item " href="page-help-center-categories.html">Help Center: Categories</a>
                  <a class="dropdown-item " href="page-help-center-article.html">Help Center: Article</a>
                </div> */}
                            {/* <div class="col-sm-6 col-md-3 mb-3 mb-md-0">
                  <span class="dropdown-header invisible">Company</span>
                  <a class="dropdown-item " href="page-careers.html">Careers</a>
                  <a class="dropdown-item " href="page-careers-overview.html">Careers: Overview</a>
                  <a class="dropdown-item " href="page-hire-us.html">Hire Us</a>
                  <a class="dropdown-item " href="page-contacts.html">Contacts</a>
                  <a class="dropdown-item " href="page-login.html">Log In</a>
                  <a class="dropdown-item " href="page-signup.html">Sign Up</a>
                  <a class="dropdown-item " href="page-reset-password.html">Forgot Password</a>
                </div> */}
                            {/* <div class="col-sm-6 col-md-3 mb-3 mb-md-0">
                  <span class="dropdown-header">Portfolio</span>
                  <a class="dropdown-item " href="portfolio-modern.html">Modern</a>
                  <a class="dropdown-item " href="portfolio-classic.html">Classic</a>
                  <a class="dropdown-item " href="portfolio-case-study.html">Case Study</a>
                </div> */}
                            {/* <div class="col-sm-6 col-md-3">
                  <span class="dropdown-header">Specialty pages</span>
                  <a class="dropdown-item " href="page-pricing.html">Pricing</a>
                  <a class="dropdown-item " href="page-coming-soon.html">Coming Soon</a>
                  <a class="dropdown-item " href="page-error-404.html">Error 404</a>
                  <a class="dropdown-item " href="page-terms.html">Terms &amp; Conditions</a>
                  <a class="dropdown-item " href="page-privacy.html">Privacy &amp; Policy</a>
                </div> */}
                          </div>
                          {/* End Row */}
                        </div>
                        {/* End Main Content */}
                      </div>
                      {/* End Mega Menu */}
                    </li>
                    {/* End Pages */}
                    {/* Blog */}
                    <li className="hs-has-sub-menu nav-item">
                      <a
                        id="blogMegaMenu"
                        className="hs-mega-menu-invoker nav-link  "
                        href="page-contacts.html"
                        role="button"
                        aria-expanded="false"
                      >
                        Contacts
                      </a>
                      {/* Mega Menu */}
                      {/* <div class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 12rem;">
            <a class="dropdown-item " href="blog-classic.html">Classic</a>
            <a class="dropdown-item " href="blog-article.html">Article</a>
            <a class="dropdown-item " href="blog-author-profile.html">Author Profile</a>
          </div> */}
                      {/* End Mega Menu */}
                    </li>
                    {/* End Blog */}
                    {/* Docs */}
                    {/* <li class="hs-has-mega-menu nav-item" data-hs-mega-menu-item-options='{
                "desktop": {
                  "maxWidth": "20rem"
                }
              }'>
          <a id="docsMegaMenu" class="hs-mega-menu-invoker nav-link  " href="#" role="button"
            aria-expanded="false">Links</a>
  
        <div class="hs-mega-menu hs-position-right dropdown-menu" aria-labelledby="docsMegaMenu"
          style="min-width: 20rem;">
          
          <a class="navbar-dropdown-menu-media-link" href="documentation/index.html">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <span class="svg-icon svg-icon-sm text-primary">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                      fill="#035A4B"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                      fill="#035A4B"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-grow-1 ms-3">
                <span class="navbar-dropdown-menu-media-title">Documentation <span
                    class="badge bg-primary rounded-pill ms-1">v2.0</span></span>
                <p class="navbar-dropdown-menu-media-desc">Development guides for building projects with Space</p>
              </div>
            </div>
          </a>
       
          <div class="dropdown-divider"></div>
         
          <a class="navbar-dropdown-menu-media-link" href="snippets/index.html">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <span class="svg-icon svg-icon-sm text-primary">
                  <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3"
                      d="M21 2H13C12.4 2 12 2.4 12 3V13C12 13.6 12.4 14 13 14H21C21.6 14 22 13.6 22 13V3C22 2.4 21.6 2 21 2ZM15.7 8L14 10.1V5.80005L15.7 8ZM15.1 4H18.9L17 6.40002L15.1 4ZM17 9.59998L18.9 12H15.1L17 9.59998ZM18.3 8L20 5.90002V10.2L18.3 8ZM9 2H3C2.4 2 2 2.4 2 3V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V3C10 2.4 9.6 2 9 2ZM4.89999 12L4 14.8V9.09998L4.89999 12ZM4.39999 4H7.60001L6 8.80005L4.39999 4ZM6 15.2L7.60001 20H4.39999L6 15.2ZM7.10001 12L8 9.19995V14.9L7.10001 12Z"
                      fill="#035A4B"></path>
                    <path
                      d="M21 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H21C21.6 16 22 16.4 22 17C22 17.6 21.6 18 21 18ZM19 21C19 20.4 18.6 20 18 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H18C18.6 22 19 21.6 19 21Z"
                      fill="#035A4B"></path>
                  </svg>
                </span>
              </div>
              <div class="flex-grow-1 ms-3">
                <span class="navbar-dropdown-menu-media-title">Snippets</span>
                <p class="navbar-dropdown-menu-media-desc">Move quickly with copy-to-clipboard feature</p>
              </div>
            </div>
          </a>
          
        </div>
      
        </li> */}
                    {/* End Docs */}
                    <li className="nav-divider" />
                    {/* Log in */}
                    <li className="nav-item">
                      <a
                        className="js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormLogin",
                       "groupName": "idForm"
                     }'
                      >
                        Log in
                      </a>
                      <a
                        className="js-animation-link d-lg-none btn btn-primary"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormSignup",
                       "groupName": "idForm"
                     }'
                      >
                        <i className="bi-person-circle me-1" /> Sign up
                      </a>
                    </li>
                    {/* End Log in */}
                    {/* Sign up */}
                    <li className="nav-item">
                      <a
                        className="js-animation-link d-none d-lg-inline-block btn btn-primary"
                        href="javascript:;"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                        data-hs-show-animation-options='{
                       "targetSelector": "#signupModalFormSignup",
                       "groupName": "idForm"
                     }'
                      >
                        <i className="bi-person-circle me-1" /> Sign up
                      </a>
                    </li>
                    {/* End Sign up */}
                  </ul>
                </div>
                {/* End Collapse */}
              </nav>
            </div>
          </header>
          {/* ========== END HEADER ========== */}
          {/* ========== MAIN CONTENT ========== */}
          <main id="content" role="main">
            {/* Hero */}
            <div className="shape-container bg-soft-warning">
              <div className="position-relative zi-2">
                <div className="container content-space-1 content-space-md-3">
                  {/* Heading */}
                  <div className="w-lg-50 mb-5 mb-sm-10">
                    <h1 className="display-3 text-primary">
                      Let's <span className="text-warning">talk</span>
                    </h1>
                    <p className="lead">
                      Got a question? Want to learn more about us? Get in touch.
                    </p>
                  </div>
                  {/* End Heading */}
                  <div className="row">
                    <div className="col-md-4 mb-5 mb-md-0">
                      <div className="me-md-6">
                        <span className="svg-icon text-primary mb-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                              fill="#035A4B"
                            />
                            <path
                              d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                              fill="#035A4B"
                            />
                          </svg>
                        </span>
                        <h5>Sales</h5>
                        <p>
                          Make your move to connected payments with the help of
                          our advisors.
                        </p>
                        <a href="#">
                          Get in touch{" "}
                          <i className="bi-chevron-right small ms-1" />
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-md-4 mb-5 mb-md-0">
                      <div className="me-md-6">
                        <span className="svg-icon text-primary mb-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M8 8C8 7.4 8.4 7 9 7H16V3C16 2.4 15.6 2 15 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H5V16.1C5 16.8 5.79999 17.1 6.29999 16.6L8 14.9V8Z"
                              fill="#035A4B"
                            />
                            <path
                              d="M22 8V18C22 18.6 21.6 19 21 19H19V21.1C19 21.8 18.2 22.1 17.7 21.6L15 18.9H9C8.4 18.9 8 18.5 8 17.9V7.90002C8 7.30002 8.4 6.90002 9 6.90002H21C21.6 7.00002 22 7.4 22 8ZM19 11C19 10.4 18.6 10 18 10H12C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H18C18.6 12 19 11.6 19 11ZM17 15C17 14.4 16.6 14 16 14H12C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16H16C16.6 16 17 15.6 17 15Z"
                              fill="#035A4B"
                            />
                          </svg>
                        </span>
                        <h5>Merchant support</h5>
                        <p>
                          Got a technical issue or need strategic advice? Our
                          support team is here to help.
                        </p>
                        <a href="#">
                          Get help <i className="bi-chevron-right small ms-1" />
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-md-4">
                      <div className="me-md-6">
                        <span className="svg-icon text-primary mb-3">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                              fill="#035A4B"
                            />
                            <path
                              d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                              fill="#035A4B"
                            />
                          </svg>
                        </span>
                        <h5>Partnerships</h5>
                        <p>
                          Let's team up to boost productivity and accelerate
                          business growth
                        </p>
                        <a href="#">
                          Become a partner{" "}
                          <i className="bi-chevron-right small ms-1" />
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </div>
              {/* Shape */}
              <div className="shape shape-bottom zi-1">
                <svg
                  width={3000}
                  height={600}
                  viewBox="0 0 3000 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 600H3000V0L0 600Z" fill="#fff" />
                </svg>
              </div>
              {/* End Shape */}
            </div>
            {/* End Hero */}
            {/* Contact Form */}
            <div className="container content-space-1 content-space-b-md-3">
              {/* Heading */}
              <div className="w-lg-65 mb-7">
                <h3>Contact sales</h3>
                <p>
                  Discuss your connected payment needs with one of our global
                  advisors.
                </p>
              </div>
              {/* End Heading */}
              <div className="row justify-content-md-between">
                <div className="col-md-6 mb-7 mb-md-0">
                  {/* Card */}
                  <div className="card card-lg">
                    {/* Card Body */}
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6 mb-4 mb-sm-0">
                            {/* Form */}
                            <div className="mb-4">
                              <label
                                className="form-label"
                                htmlFor="contactsFormFirstName"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="contactsFormNameFirstName"
                                id="contactsFormFirstName"
                                placeholder="Jacob"
                                aria-label="Jacob"
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-4">
                              <label
                                className="form-label"
                                htmlFor="contactsFormLasttName"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="contactsFormNameLastName"
                                id="contactsFormLasttName"
                                placeholder="Williams"
                                aria-label="Williams"
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                        {/* Form */}
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="contactsFormJobTitle"
                          >
                            Job title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="contactsFormNameJobTitle"
                            id="contactsFormJobTitle"
                            placeholder="E-commerce platform"
                            aria-label="E-commerce platform"
                          />
                        </div>
                        {/* End Form */}
                        <div className="row">
                          <div className="col-sm-6 mb-4 mb-sm-0">
                            {/* Form */}
                            <div className="mb-4">
                              <label
                                className="form-label"
                                htmlFor="contactsFormCompany"
                              >
                                Company
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="contactsFormNameCompany"
                                id="contactsFormCompany"
                                placeholder="Htmlstream"
                                aria-label="Htmlstream"
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-4">
                              <label
                                className="form-label"
                                htmlFor="contactsFormCompanyWebsite"
                              >
                                Company website
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="contactsFormNameCompanyWebsite"
                                id="contactsFormCompanyWebsite"
                                placeholder="htmlstream.com"
                                aria-label="htmlstream.com"
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                        {/* Form */}
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="contactsFormWorkEmail"
                          >
                            Work email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="contactsFormNameWorkEmail"
                            id="contactsFormWorkEmail"
                            placeholder="email@site.com"
                            aria-label="email@site.com"
                          />
                        </div>
                        {/* End Form */}
                        {/* Form */}
                        <div className="mb-4">
                          <label
                            className="form-label"
                            htmlFor="contactsFormDetails"
                          >
                            Details
                          </label>
                          <textarea
                            className="form-control"
                            name="contactsFormNameDetails"
                            id="contactsFormDetails"
                            placeholder="Tell us about your payment sales"
                            aria-label="Tell us about your payment sales"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                        {/* End Form */}
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Send inquiry
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* End Card Body */}
                  </div>
                  {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col-md-6 col-lg-5">
                  <div className="mb-4">
                    <h6>Contact sales by phone or location</h6>
                  </div>
                  <ul className="list-unstyled list-py-1">
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <img
                            className="avatar avatar-xss avatar-circle"
                            src="assets/vendor/flag-icon-css/flags/1x1/gb.svg"
                            alt="Image description"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>London, UK (HQ)</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>
                            153 Williamson Plaza, Maggieberg, SE56 FF12
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>062 1099222</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <hr className="my-5" />
                  <ul className="list-unstyled list-py-1">
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <img
                            className="avatar avatar-xss avatar-circle"
                            src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                            alt="Image description"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>San Francisco, US</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>517 Michigan Avenue, California, 94080</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>724-597-6746</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <hr className="my-5" />
                  <ul className="list-unstyled list-py-1">
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <img
                            className="avatar avatar-xss avatar-circle"
                            src="assets/vendor/flag-icon-css/flags/1x1/de.svg"
                            alt="Image description"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>Berlin, Germany</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>
                            Feldstrasse 62, Drackenstedt, Sachsen-Anhalt
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div
                          className="flex-shrink-0 text-center"
                          style={{width: "1.5rem"}}
                        >
                          <span className="svg-icon svg-icon-xs text-muted mt-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-2">
                          <span>039293 40 53</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-5">
                    <h6>Contact sales by email</h6>
                    <p>
                      If you wish to write us an email instead please use{" "}
                      <a href="mailto:example@site.com">example@site.com</a>
                    </p>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Contact Form */}
          </main>
          {/* ========== END MAIN CONTENT ========== */}
          {/* ========== FOOTER ========== */}
          <footer className="bg-primary-dark border-top border-white-10">
            <div className="container">
              <div className="row content-space-1">
                <div className="col-lg-3 mb-7 mb-lg-0">
                  {/* Logo */}
                  <div className="mb-5">
                    <a
                      className="navbar-brand"
                      href="index.html"
                      aria-label="Space"
                    >
                      <h5 style={{color: "white", fontWeight: 800}}>
                        Company Logo
                      </h5>
                      {/* <img class="navbar-brand-logo" src="assets/svg/logos/logo-white.svg" alt="Image Description"> */}
                    </a>
                  </div>
                  {/* End Logo */}
                  <span className="d-block">
                    <label
                      htmlFor="selectLanguage"
                      className="form-label text-white"
                    >
                      Choose language
                    </label>
                  </span>
                  {/* Button Group */}
                  <div
                    style={{
                      textAlign: "center",
                      alignSelf: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                    className="btn-group"
                  >
                    <button
                      type="button"
                      className="btn btn-soft-light btn-sm dropdown-toggle"
                      id="selectLanguage"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-flex align-items-center">
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item d-flex align-items-center active"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/gb.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>English (UK)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/de.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/dk.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Dansk</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/es.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Español</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/nl.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Nederlands</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/it.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>Italiano</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                          alt="Image description"
                          width={16}
                        />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </div>
                {/* End Col */}
                {/* <div class="col-sm mb-7 mb-sm-0">
      <span class="text-cap text-primary-light">Resources</span>
      List
      <ul class="list-unstyled list-py-1 mb-0">
        <li><a class="link-sm link-light" href="#">Blog</a></li>
        <li><a class="link-sm link-light" href="#">Guidance</a></li>
        <li><a class="link-sm link-light" href="#">Customer Stories</a></li>
        <li><a class="link-sm link-light" href="#">Support <i class="bi-box-arrow-up-right ms-1"></i></a></li>
        <li><a class="link-sm link-light" href="#">API</a></li>
        <li><a class="link-sm link-light" href="#">Packages</a></li>
      </ul>
      End List
    </div> */}
                {/* End Col */}
                <div
                  style={{
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    alignSelf: "center",
                    alignContent: "center",
                  }}
                  className="col-sm mb-7 mb-sm-0"
                >
                  <span className="text-cap text-primary-light">Company</span>
                  {/* List */}
                  <ul className="list-unstyled list-py-1 mb-0">
                    <li>
                      <a className="link-sm link-light" href="page-about.html">
                        About{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-sm link-light"
                        href="page-pricing.html"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-sm link-light"
                        href="page-contacts.html"
                      >
                        Contacts{" "}
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                </div>
                {/* End Col */}
                {/* <div class="col-sm">
      <span class="text-cap text-primary-light">Platform</span>
      List
      <ul class="list-unstyled list-py-1 mb-0">
        <li><a class="link-sm link-light" href="#">Web</a></li>
        <li><a class="link-sm link-light" href="#">Mobile</a></li>
        <li><a class="link-sm link-light" href="#">iOS</a></li>
        <li><a class="link-sm link-light" href="#">Android</a></li>
        <li><a class="link-sm link-light" href="#">Figma Importing</a></li>
      </ul>
      End List
    </div> */}
                {/* End Col */}
                {/* <div class="col-sm">
      <span class="text-cap text-primary-light">Legal</span>
      List
      <ul class="list-unstyled list-py-1 mb-5">
        <li><a class="link-sm link-light" href="#">Terms of use</a></li>
        <li><a class="link-sm link-light" href="#">Privacy policy <i class="bi-box-arrow-up-right ms-1"></i></a>
        </li>
      </ul>
      End List
      <span class="text-cap text-primary-light">Docs</span>
      List
      <ul class="list-unstyled list-py-1 mb-0">
        <li><a class="link-sm link-light" href="#">Documentation</a></li>
        <li><a class="link-sm link-light" href="#">Snippets</a></li>
      </ul>
      End List
    </div> */}
                {/* End Col */}
              </div>
              {/* End Row */}
              <div className="border-top border-white-10" />
              <div className="row align-items-md-end py-5">
                <div className="col-md mb-3 mb-md-0">
                  <p className="text-white mb-0"> All rights reserved.</p>
                </div>
                <div className="col-md d-md-flex justify-content-md-end">
                  {/* Socials */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-github" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                        href="#"
                      >
                        <i className="bi-slack" />
                      </a>
                    </li>
                  </ul>
                  {/* End Socials */}
                </div>
              </div>
            </div>
          </footer>
          {/* ========== END FOOTER ========== */}
          {/* ========== SECONDARY CONTENTS ========== */}
          {/* Sign Up */}
          <div
            className="modal fade"
            id="signupModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                {/* Header */}
                <div className="modal-close">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="modal-body p-sm-5">
                  {/* Log in */}
                  <div
                    id="signupModalFormLogin"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Log in</h4>
                      <p>
                        Don't have an account yet?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                        >
                          Sign up here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <div className="d-grid gap-2">
                      <a className="btn btn-white btn-lg" href="#">
                        <span className="d-flex justify-content-center align-items-center">
                          <img
                            className="avatar avatar-xss me-2"
                            src="assets/svg/brands/google-icon.svg"
                            alt="Image Description"
                          />
                          Log in with Google
                        </span>
                      </a>
                      <a
                        className="js-animation-link btn btn-primary btn-lg"
                        href="#"
                        data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLoginWithEmail",
                   "groupName": "idForm"
                 }'
                      >
                        Log in with Email
                      </a>
                    </div>
                  </div>
                  {/* End Log in */}
                  {/* Log in with Modal */}
                  <div
                    id="signupModalFormLoginWithEmail"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Log in</h4>
                      <p>
                        Don't have an account yet?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormSignup",
                     "groupName": "idForm"
                   }'
                        >
                          Sign up here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <form className="js-validate needs-validation" noValidate>
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormLoginEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="signupModalFormLoginEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                          required
                        />
                        <span className="invalid-feedback">
                          Please enter a valid email address.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label
                            className="form-label"
                            htmlFor="signupModalFormLoginPassword"
                          >
                            Password
                          </label>
                          <a
                            className="js-animation-link form-label-link"
                            href="javascript:;"
                            data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormResetPassword",
                   "groupName": "idForm"
                 }'
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          id="signupModalFormLoginPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                          minLength={8}
                        />
                        <span className="invalid-feedback">
                          Please enter a valid password.
                        </span>
                      </div>
                      {/* End Form */}
                      <div className="d-grid mb-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* End Log in with Modal */}
                  {/* Sign up */}
                  <div id="signupModalFormSignup">
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Sign up</h4>
                      <p>
                        Already have an account?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                        >
                          Log in here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <div className="d-grid gap-3">
                      <a className="btn btn-white btn-lg" href="#">
                        <span className="d-flex justify-content-center align-items-center">
                          <img
                            className="avatar avatar-xss me-2"
                            src="assets/svg/brands/google-icon.svg"
                            alt="Image Description"
                          />
                          Sign up with Google
                        </span>
                      </a>
                      <a
                        className="js-animation-link btn btn-primary btn-lg"
                        href="#"
                        data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignupWithEmail",
                   "groupName": "idForm"
                 }'
                      >
                        Sign up with Email
                      </a>
                      <div className="text-center">
                        <p className="small mb-0">
                          By continuing you agree to our{" "}
                          <a href="page-terms.html">Terms and Conditions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Sign up */}
                  {/* Sign up with Modal */}
                  <div
                    id="signupModalFormSignupWithEmail"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Sign up</h4>
                      <p>
                        Already have an account?
                        <a
                          className="js-animation-link"
                          href="javascript:;"
                          role="button"
                          data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                        >
                          Log in here
                        </a>
                      </p>
                    </div>
                    {/* End Heading */}
                    <form className="js-validate need-validate" noValidate>
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupEmail"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="signupModalFormSignupEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                          required
                        />
                        <span className="invalid-feedback">
                          Please enter a valid email address.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupPassword"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          id="signupModalFormSignupPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                        />
                        <span className="invalid-feedback">
                          Your password is invalid. Please try again.
                        </span>
                      </div>
                      {/* End Form */}
                      {/* Form */}
                      <div className="mb-3" data-hs-validation-validate-class>
                        <label
                          className="form-label"
                          htmlFor="signupModalFormSignupConfirmPassword"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          name="confirmPassword"
                          id="signupModalFormSignupConfirmPassword"
                          placeholder="8+ characters required"
                          aria-label="8+ characters required"
                          required
                          data-hs-validation-equal-field="#signupModalFormSignupPassword"
                        />
                        <span className="invalid-feedback">
                          Password does not match the confirm password.
                        </span>
                      </div>
                      {/* End Form */}
                      <div className="d-grid mb-3">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="text-center">
                        <p className="small mb-0">
                          By continuing you agree to our{" "}
                          <a href="#">Terms and Conditions</a>
                        </p>
                      </div>
                    </form>
                  </div>
                  {/* End Sign up with Modal */}
                  {/* Reset Password */}
                  <div
                    id="signupModalFormResetPassword"
                    style={{display: "none", opacity: 0}}
                  >
                    {/* Heading */}
                    <div className="text-center mb-7">
                      <h4>Forgot password?</h4>
                      <p>
                        Enter the email address you used when you joined and
                        we'll send you instructions to reset your password.
                      </p>
                    </div>
                    {/* En dHeading */}
                    <form className="js-validate need-validate" noValidate>
                      <div className="mb-3">
                        {/* Form */}
                        <div className="d-flex justify-content-between align-items-center">
                          <label
                            className="form-label"
                            htmlFor="signupModalFormResetPasswordEmail"
                            tabIndex={0}
                          >
                            Your email
                          </label>
                          <a
                            className="js-animation-link form-label-link"
                            href="javascript:;"
                            data-hs-show-animation-options='{
                     "targetSelector": "#signupModalFormLogin",
                     "groupName": "idForm"
                   }'
                          >
                            <i className="bi-chevron-left small me-1" /> Back to
                            Log in
                          </a>
                        </div>
                        {/* End Form */}
                        {/* Form */}
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            id="signupModalFormResetPasswordEmail"
                            tabIndex={1}
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            required
                          />
                          <span className="invalid-feedback">
                            Please enter a valid email address.
                          </span>
                        </div>
                        {/* End Form */}
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End Reset Password */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="modal-footer d-block text-center py-sm-5">
                  <small className="text-cap mb-4">
                    Trusted by the world's best teams
                  </small>
                  <div className="w-85 mx-auto">
                    <div className="row justify-content-between">
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/gitlab-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/fitbit-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/flow-xo-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="assets/svg/brands/layar-gray.svg"
                          alt="Logo"
                        />
                      </div>
                      {/* End Col */}
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
          {/* Go To */}
          <a
            className="js-go-to go-to position-fixed"
            href="javascript:;"
            style={{visibility: "hidden"}}
            data-hs-go-to-options='{
   "offsetTop": 700,
   "position": {
     "init": {
       "right": "2rem"
     },
     "show": {
       "bottom": "2rem"
     },
     "hide": {
       "bottom": "-2rem"
     }
   }
 }'
          >
            <i className="bi-chevron-up" />
          </a>
          {/* ========== END SECONDARY CONTENTS ========== */}
          {/* JS Implementing Plugins */}
          {/* JS Space */}
          {/* JS Plugins Init. */}
        </div>
      </div>
    );
}

export default PageContacts
