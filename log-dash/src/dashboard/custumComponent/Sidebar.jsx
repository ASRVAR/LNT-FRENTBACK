import React from "react";
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <>
      {/* <!-- Start Left  Side-Nav--> */}

      <section className="sidebar" id="sidebar-scroll">
        {/* <!-- Sidebar Menu--> */}
        <ul className="sidebar-menu">
          <li className="nav-level">--- Navigation</li>
          <li className="active treeview">
            <Link className="waves-effect waves-dark" to="/dashboard">
              <i className="icon-speedometer"></i>
              <span> Dashboard</span>
            </Link>
          </li>
          {/* <li className="nav-level">--- Components</li> */}
          {/* <li className="active treeview">
                <a className="waves-effect waves-dark" href="#!">
                  <i className="icon-briefcase"></i>
                  <span> UI Elements</span>
                  <i className="icon-arrow-down"></i>
                </a>
                <ul className="treeview-menu">
                  <li className="active">
                    <a className="waves-effect waves-dark" href="accordion.html">
                      <i className="icon-arrow-right"></i> Accordion
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="button.html">
                      <i className="icon-arrow-right"></i> Button
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="label-badge.html">
                      <i className="icon-arrow-right"></i> Label Badge
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="bootstrap-ui.html">
                      <i className="icon-arrow-right"></i> Grid system
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="box-shadow.html">
                      <i className="icon-arrow-right"></i> Box Shadow
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="color.html">
                      <i className="icon-arrow-right"></i> Color
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="light-box.html">
                      <i className="icon-arrow-right"></i> Light Box
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="notification.html">
                      <i className="icon-arrow-right"></i> Notification
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="panels-wells.html">
                      <i className="icon-arrow-right"></i> Panels-Wells
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="tabs.html">
                      <i className="icon-arrow-right"></i> Tabs
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="tooltips.html">
                      <i className="icon-arrow-right"></i> Tooltips
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="typography.html">
                      <i className="icon-arrow-right"></i> Typography
                    </a>
                  </li>
                </ul>
              </li> */}

          <li className="treeview">
            <a className="waves-effect waves-dark" href="#!">
              <i className="icon-book-open"></i>
              <span> Customer</span>
              <i className="icon-arrow-down"></i>
            </a>
            <ul className="treeview-menu">
              <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/product"
                >
                  <i className="icon-arrow-right"></i> Customer
                </Link>
              </li>

              <li>
                <Link
                  className="waves-effect waves-dark"
                   to="/allcustomers"
                >
                  <i className="icon-arrow-right"></i> All Customer
                </Link>
              </li>
              <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/emicalculater"
                >
                  <i className="icon-arrow-right"></i> EMI Calculater
                </Link>
              </li>
            </ul>
          </li>
          <li className="treeview">
            <a className="waves-effect waves-dark" href="#!">
              <i className="icon-book-open"></i>
              <span> Login Details</span>
              <i className="icon-arrow-down"></i>
            </a>
            <ul className="treeview-menu">
            <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/registrationview"
                >
                  <i className="icon-arrow-right"></i> Registration View
                </Link>
              </li>
              <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/registrationdetails"
                >
                  <i className="icon-arrow-right"></i> Registration Details
                </Link>
              </li>

            </ul>
          </li>
          <li className="treeview">
            <a className="waves-effect waves-dark" href="basic-table.html">
              <i className="icon-list"></i>
              <span> Employee Registration</span>
              <i className="icon-arrow-down"></i>
            </a>
            <ul className="treeview-menu">
            <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/createemployee"
                >
                  <i className="icon-arrow-right"></i> Create Employee
                </Link>
              </li>
             
              {/* <li>
                <Link
                  className="waves-effect waves-dark"
                  to="/registrationdetails"
                >
                  <i className="icon-arrow-right"></i> Registration Details
                </Link>
              </li> */}

            </ul>
          </li>

          {/* <li className="nav-level">--- More</li>

              <li className="treeview">
                <a className="waves-effect waves-dark" href="#!">
                  <i className="icon-docs"></i>
                  <span>Pages</span>
                  <i className="icon-arrow-down"></i>
                </a>
                <ul className="treeview-menu">
                  <li className="treeview">
                    <a href="#!">
                      <i className="icon-arrow-right"></i>
                      <span> Authentication</span>
                      <i className="icon-arrow-down"></i>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a
                          className="waves-effect waves-dark"
                          href="register1.html"
                          target="_blank"
                        >
                          <i className="icon-arrow-right"></i> Register 1
                        </a>
                      </li>

                      <li>
                        <a
                          className="waves-effect waves-dark"
                          href="login1.html"
                          target="_blank"
                        >
                          <i className="icon-arrow-right"></i>
                          <span> Login 1</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="waves-effect waves-dark"
                          href="forgot-password.html"
                          target="_blank"
                        >
                          <i className="icon-arrow-right"></i>
                          <span> Forgot Password</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a
                      className="waves-effect waves-dark"
                      href="404.html"
                      target="_blank"
                    >
                      <i className="icon-arrow-right"></i> Error 404
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="sample-page.html">
                      <i className="icon-arrow-right"></i> Sample Page
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-level">--- Menu Level</li>

              <li className="treeview">
                <a className="waves-effect waves-dark" href="#!">
                  <i className="icofont icofont-company"></i>
                  <span>Menu Level 1</span>
                  <i className="icon-arrow-down"></i>
                </a>
                <ul className="treeview-menu">
                  <li>
                    <a className="waves-effect waves-dark" href="#!">
                      <i className="icon-arrow-right"></i>
                      Level Two
                    </a>
                  </li>
                  <li className="treeview">
                    <a className="waves-effect waves-dark" href="#!">
                      <i className="icon-arrow-right"></i>
                      <span>Level Two</span>
                      <i className="icon-arrow-down"></i>
                    </a>
                    <ul className="treeview-menu">
                      <li>
                        <a className="waves-effect waves-dark" href="#!">
                          <i className="icon-arrow-right"></i>
                          Level Three
                        </a>
                      </li>
                      <li>
                        <a className="waves-effect waves-dark" href="#!">
                          <i className="icon-arrow-right"></i>
                          <span>Level Three</span>
                          <i className="icon-arrow-down"></i>
                        </a>
                        <ul className="treeview-menu">
                          <li>
                            <a className="waves-effect waves-dark" href="#!">
                              <i className="icon-arrow-right"></i>
                              Level Four
                            </a>
                          </li>
                          <li>
                            <a className="waves-effect waves-dark" href="#!">
                              <i className="icon-arrow-right"></i>
                              Level Four
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
        </ul>
      </section>

      {/* <!-- End Left  Side-Nav--> */}
    </>
  );
};
