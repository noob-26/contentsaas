import React from 'react'

const Profile = () => {
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
            {/* User Profile */}
            <div className="bg-soft-warning">
              <div className="container content-space-1 content-space-md-2">
                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    {/* Media */}
                    <div className="d-sm-flex">
                      <div className="flex-shrink-0 mb-3 mb-sm-0">
                        <img
                          className="avatar avatar-xxl avatar-circle"
                          src="assets/img/160x160/img9.jpg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="flex-grow-1 ms-sm-4">
                        {/* Media */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h1 className="h4 mb-0">Christina Kray</h1>
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                          >
                            <i className="bi-person-plus-fill me-1" /> Follow
                          </button>
                        </div>
                        {/* End Media */}
                        <div className="row mb-3">
                          <div className="col-auto">
                            <span className="h6">906</span>
                            <span className="ms-1">Posts</span>
                          </div>
                          {/* End Col */}
                          <div className="col-auto">
                            <span className="h6">19.5k</span>
                            <span className="ms-1">Followers</span>
                          </div>
                          {/* End Col */}
                          <div className="col-auto">
                            <span className="h6">109</span>
                            <span className="ms-1">Following</span>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                        <p>
                          Christina started his recruitment career on the agency
                          side. Since then, she’s built a career helping
                          customers get the most out of HR technology. She’s
                          currently a Customer Success Specialist at Space and
                          spends her time speaking to in-house recruiters all
                          over the world - helping them solve their recruitment
                          challenges, and get the most out of our talent
                          acquisition software.
                        </p>
                      </div>
                    </div>
                    {/* End Media */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End User Profile */}
            {/* Grid - Blog */}
            <div className="container content-space-1">
              <div className="row justify-content-md-center">
                <div className="col-md-8">
                  {/* Articles */}
                  <ul className="list-unstyled list-py-3 mb-7">
                    <li>
                      {/* Card */}
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3">
                            <img
                              className="card-img"
                              src="assets/img/600x400/img4.jpg"
                              alt="Image Description"
                            />
                          </div>
                          {/* List Separator */}
                          <ul className="list-inline list-separator mb-3">
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Process
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Use case
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-cap text-muted mb-0">
                                4 min read
                              </span>
                            </li>
                          </ul>
                          {/* End List Separator */}
                          <h5 className="card-title">
                            <a className="text-dark" href="blog-article.html">
                              Inhouse Design Thinking – How I deal with it?
                            </a>
                          </h5>
                          <p className="card-text">
                            After an experience in supporting companies in the
                            creation of innovative user-centric services, I
                            joined a large industrial group...
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </li>
                    <li>
                      {/* Card */}
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3">
                            <img
                              className="card-img"
                              src="assets/img/600x400/img12.jpg"
                              alt="Image Description"
                            />
                          </div>
                          {/* List Separator */}
                          <ul className="list-inline list-separator mb-3">
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Design
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Process
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-cap text-muted mb-0">
                                2 min read
                              </span>
                            </li>
                          </ul>
                          {/* End List Separator */}
                          <h5 className="card-title">
                            <a className="text-dark" href="blog-article.html">
                              UX writing: Copy is an integral part of ux design
                            </a>
                          </h5>
                          <p className="card-text">
                            When we talk about digital products or interfaces,
                            we get more concentrated on visual elements such as
                            illustrations, buttons, animations, colors and
                            more...
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </li>
                    <li>
                      {/* Card */}
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-3">
                            <img
                              className="card-img"
                              src="assets/img/600x400/img5.jpg"
                              alt="Image Description"
                            />
                          </div>
                          {/* List Separator */}
                          <ul className="list-inline list-separator mb-3">
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Design
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="text-cap text-muted mb-0" href="#">
                                Process
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <span className="text-cap text-muted mb-0">
                                3 min read
                              </span>
                            </li>
                          </ul>
                          {/* End List Separator */}
                          <h5 className="card-title">
                            <a className="text-dark" href="blog-article.html">
                              Design is not only Design sprint. It is a marathon
                            </a>
                          </h5>
                          <p className="card-text">
                            Design is not only design sprint. Design is a state
                            of mind and takes time to build products and
                            services that bring values to customers.
                          </p>
                        </div>
                      </div>
                      {/* End Card */}
                    </li>
                  </ul>
                  {/* End Articles */}
                  {/* Pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-lg justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* End Pagination */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Grid - Blog */}
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

export default Profile
