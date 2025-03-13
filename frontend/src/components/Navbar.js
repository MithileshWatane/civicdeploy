import React from 'react';
import './styles/navbar.css'; // Assuming you have a separate CSS file for navbar styling

const Navbar = () => {
  return (
<>
  <div id="RolloutPageContent">
    <element
      id="bd669500-0ede-4813-a1df-3355c40f7d06"
      data-section-id="bd669500-0ede-4813-a1df-3355c40f7d06"
    >
      <div id="root">
        <nav
          id="header"
          className="fixed w-full z-50 bg-neutral-900 text-white shadow-lg"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center py-4">
              {/* Brand Logo */}
              <a href="#hero" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary-600">
                  Civic<span className="text-accent-500">Connect</span>
                </span>
              </a>
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-6">
                <li>
                  <a
                    href="#hero"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#community-impact"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Community Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-accent-500 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              {/* Mobile menu button */}
              <button
                id="mobile-menu-button"
                className="md:hidden flex items-center"
                aria-label="Open mobile menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* Mobile Navigation */}
            <div
              id="mobile-menu"
              className="md:hidden hidden bg-neutral-800 rounded-lg mt-2 p-4 animate__animated animate__fadeIn"
              aria-labelledby="mobile-menu-button"
            >
              <ul className="flex flex-col space-y-3">
                <li>
                  <a
                    href="#hero"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#community-impact"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Community Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block hover:text-accent-500 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="63018a32-ffc5-46be-a304-da29054b65b9"
      data-section-id="63018a32-ffc5-46be-a304-da29054b65b9"
    >
      <div id="root">
        <section
          id="hero"
          className="bg-neutral-900 text-white pt-20 pb-16 md:pt-24 md:pb-20 flex items-center min-h-[70vh]"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate__animated animate__fadeInLeft">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-primary-600">Civic</span>
                  <span className="text-accent-500">Connect</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Community Issue Reporting &amp; Resolution Platform
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-300">
                  Empowering citizens and local governments to collaborate on
                  building better communities - report issues, track progress,
                  and create solutions together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#report-issue"
                    className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                  >
                    Report an Issue
                  </a>
                  <a
                    href="#how-it-works"
                    className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-3 px-6 rounded-lg border border-primary-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                  >
                    How It Works
                  </a>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold border-2 border-neutral-900">
                      JD
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold border-2 border-neutral-900">
                      TM
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold border-2 border-neutral-900">
                      KW
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-white font-bold border-2 border-neutral-900">
                      +
                    </div>
                  </div>
                  <p className="ml-4 text-gray-300">
                    <span className="font-semibold">1,500+</span> issues
                    resolved in communities nationwide
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 animate__animated animate__fadeInRight">
                <div className="relative">
                  <div className="bg-neutral-800 p-4 rounded-xl shadow-2xl">
                    <div className="bg-neutral-700 p-3 rounded-lg mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          </div>
                          <span className="ml-2 font-semibold">
                            Pothole Repair
                          </span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-yellow-500 text-neutral-900 rounded-full">
                          In Progress
                        </span>
                      </div>
                      <div className="h-32 bg-neutral-800 rounded-lg flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-12 h-12 text-neutral-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Reported: 2 days ago</span>
                        <span>ETA: 1 week</span>
                      </div>
                    </div>
                    <div className="bg-neutral-700 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white text-xs">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          </div>
                          <span className="ml-2 font-semibold">
                            Broken Streetlight
                          </span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-green-500 text-neutral-900 rounded-full">
                          Resolved
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="w-full bg-neutral-800 rounded-full h-2.5">
                          <div
                            className="bg-green-500 h-2.5 rounded-full"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Reported: 5 days ago</span>
                        <span>Fixed: Today</span>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-600 rounded-full opacity-20 animate-pulse" />
                </div>
              </div>
            </div>
            {/* Stats Section */}
            <div className="mt-16 py-6 px-8 bg-neutral-800 rounded-xl shadow-lg animate__animated animate__fadeInUp">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-accent-500">5,000+</h3>
                  <p className="text-gray-400">Issues Reported</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600">87%</h3>
                  <p className="text-gray-400">Resolution Rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-secondary-500">50+</h3>
                  <p className="text-gray-400">Communities</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-500">
                    12,000+
                  </h3>
                  <p className="text-gray-400">Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n    .border-primary-600 {\n      border-color: var(--primary-color);\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="4bcefd71-be67-48cc-a356-a5348ac6db6a"
      data-section-id="4bcefd71-be67-48cc-a356-a5348ac6db6a"
    >
      <div id="root">
        <section id="features" className="py-16 md:py-24 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features for Community Action
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                CivicConnect provides a comprehensive set of tools for citizens
                and local authorities to collaborate effectively on community
                issues.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp">
                <div className="bg-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Issue Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Submit community issues in seconds with our intuitive
                  interface. Upload photos, add descriptions, and automatically
                  tag locations with precise GPS coordinates.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Photo/video documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Automatic location tagging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Issue categorization
                    </span>
                  </li>
                </ul>
                <a
                  href="#report"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              {/* Feature 2 */}
              <div
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="bg-secondary-500 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Real-time Progress Tracking
                </h3>
                <p className="text-gray-600 mb-4">
                  Monitor your reported issues from submission to resolution.
                  Get real-time updates as local authorities respond to and
                  address community concerns.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Status change notifications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Estimated time to resolution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Official response viewing
                    </span>
                  </li>
                </ul>
                <a
                  href="#tracking"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              {/* Feature 3 */}
              <div
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-accent-500 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Community Collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  Join forces with neighbors to discuss community issues,
                  propose solutions, and even contribute to crowdfunded
                  improvement projects.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Discussion forums for each issue
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Crowdfunding capabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Volunteer coordination
                    </span>
                  </li>
                </ul>
                <a
                  href="#collaborate"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              {/* Feature 4 */}
              <div
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="bg-primary-600 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Government Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Local authorities have access to a powerful dashboard for
                  managing, prioritizing, and addressing reported community
                  issues efficiently.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Issue prioritization tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Resource allocation planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Citizen communication tools
                    </span>
                  </li>
                </ul>
                <a
                  href="#government"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              {/* Feature 5 */}
              <div
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="bg-secondary-500 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Maps</h3>
                <p className="text-gray-600 mb-4">
                  Visualize reported issues throughout your community on
                  interactive maps. Filter by type, status, and time reported to
                  gain better insights.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Heat maps of issue density
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Advanced filtering options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Nearby issue alerts
                    </span>
                  </li>
                </ul>
                <a
                  href="#maps"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              {/* Feature 6 */}
              <div
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="bg-accent-500 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Notifications</h3>
                <p className="text-gray-600 mb-4">
                  Stay informed with customizable notifications about issue
                  updates, nearby problems, community discussions, and official
                  responses.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Proximity-based alerts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Custom notification preferences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">
                      Multi-channel communication
                    </span>
                  </li>
                </ul>
                <a
                  href="#notifications"
                  className="text-primary-600 font-semibold inline-flex items-center"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Interactive Feature Demo */}
            <div className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden animate__animated animate__fadeIn">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">See How It Works</h3>
                  <p className="text-gray-600 mb-6">
                    Our intuitive platform makes it easy to report issues, track
                    progress, and collaborate with your community. Try the
                    interactive demo to see CivicConnect in action.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                        1
                      </div>
                      <p className="ml-4 text-gray-700">
                        Submit a report with photos and location
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                        2
                      </div>
                      <p className="ml-4 text-gray-700">
                        Track status updates in real-time
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                        3
                      </div>
                      <p className="ml-4 text-gray-700">
                        Collaborate with neighbors on solutions
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                        4
                      </div>
                      <p className="ml-4 text-gray-700">
                        Receive notifications as issues are resolved
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#demo"
                      className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center shadow-md hover:shadow-lg"
                    >
                      Try Interactive Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-neutral-100 p-8 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">Report an Issue</h4>
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm">
                        1/3
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Issue Type
                        </label>
                        <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50">
                          <option>Select issue type</option>
                          <option>Pothole</option>
                          <option>Broken Streetlight</option>
                          <option>Graffiti</option>
                          <option>Garbage Collection</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={3}
                          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                          placeholder="Describe the issue..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="mt-1 text-sm text-gray-500">
                          Upload Photos or Videos
                        </p>
                        <p className="text-xs text-gray-400">
                          Drag &amp; drop or click to browse
                        </p>
                      </div>
                      <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                        Continue to Location
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-primary-700 {\n      background-color: #1976D2;\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n    .border-primary-500 {\n      border-color: var(--primary-color);\n    }\n    .focus\\:border-primary-500:focus {\n      border-color: var(--primary-color);\n    }\n    .focus\\:ring-primary-200:focus {\n      --tw-ring-color: rgba(30, 136, 229, 0.2);\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="ded408c1-1364-4da0-bf9a-ebbb5d1bf62c"
      data-section-id="ded408c1-1364-4da0-bf9a-ebbb5d1bf62c"
    >
      <div id="root">
        <section id="how-it-works" className="py-20 bg-neutral-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How CivicConnect Works
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our platform streamlines the process of reporting, tracking, and
                resolving community issues through a simple, intuitive workflow.
              </p>
            </div>
            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-600 transform -translate-x-1/2" />
              {/* Step 1 */}
              <div className="md:flex items-center mb-24 relative animate__animated animate__fadeInLeft">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <div className="bg-neutral-700 p-6 rounded-xl shadow-lg inline-block">
                    <h3 className="text-2xl font-bold mb-3 text-accent-500">
                      1. Report an Issue
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Quickly report community issues using our mobile app or
                      web platform. Take photos, add a description, and let GPS
                      automatically pinpoint the location.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start justify-end">
                        <span className="text-sm">Snap photos as evidence</span>
                        <svg
                          className="h-5 w-5 text-accent-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                      <li className="flex items-start justify-end">
                        <span className="text-sm">
                          Automatic location tagging
                        </span>
                        <svg
                          className="h-5 w-5 text-accent-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                      <li className="flex items-start justify-end">
                        <span className="text-sm">
                          Simple category selection
                        </span>
                        <svg
                          className="h-5 w-5 text-accent-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10">
                  <div className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-neutral-800 md:mx-auto">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-neutral-900 rounded-xl shadow-lg p-4 max-w-sm mx-auto">
                    <div className="bg-neutral-800 rounded-lg p-3 mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-white">New Report</h4>
                        <span className="text-xs px-2 py-1 bg-neutral-700 rounded-full">
                          Step 1 of 3
                        </span>
                      </div>
                      <div className="space-y-3">
                        <select className="w-full bg-neutral-700 border-0 rounded text-white text-sm">
                          <option>Pothole</option>
                          <option>Broken Streetlight</option>
                          <option>Graffiti</option>
                          <option>Garbage Collection</option>
                        </select>
                        <textarea
                          rows={2}
                          className="w-full bg-neutral-700 border-0 rounded text-white text-sm"
                          placeholder="Deep pothole on Main St causing traffic hazards"
                          defaultValue={""}
                        />
                        <div className="border border-dashed border-neutral-600 rounded p-3 text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mx-auto text-neutral-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <p className="text-xs mt-1 text-neutral-400">
                            Add photos
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-primary-600 text-white rounded py-2 text-sm font-medium">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="md:flex items-center mb-24 relative animate__animated animate__fadeInRight">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                  <div className="bg-neutral-900 rounded-xl shadow-lg p-4 max-w-sm mx-auto">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          Pothole Report #4721
                        </h4>
                        <p className="text-xs text-neutral-400">
                          Submitted: 2 days ago
                        </p>
                      </div>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-3 mb-4">
                      <h5 className="font-medium text-white mb-2">
                        Status Updates
                      </h5>
                      <div className="space-y-3">
                        <div className="flex">
                          <div className="w-1 bg-accent-500 rounded mr-3" />
                          <div>
                            <p className="text-sm text-white">
                              Report received and validated
                            </p>
                            <p className="text-xs text-neutral-400">
                              Today, 9:15 AM
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1 bg-accent-500 rounded mr-3" />
                          <div>
                            <p className="text-sm text-white">
                              Assigned to Public Works Dept.
                            </p>
                            <p className="text-xs text-neutral-400">
                              Today, 10:30 AM
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-1 bg-neutral-600 rounded mr-3" />
                          <div>
                            <p className="text-sm text-neutral-400">
                              Scheduled for repair
                            </p>
                            <p className="text-xs text-neutral-500">Pending</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="bg-neutral-700 text-white rounded py-2 px-4 text-sm">
                        Details
                      </button>
                      <button className="bg-neutral-700 text-white rounded py-2 px-4 text-sm">
                        Updates
                      </button>
                    </div>
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-neutral-800 md:mx-auto">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="bg-neutral-700 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-primary-600">
                      2. Track Progress
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Stay informed about the status of your reported issues.
                      Receive real-time updates as local authorities review,
                      assign, and resolve the problem.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary-600 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">
                          Real-time status updates
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary-600 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">
                          Push notifications for changes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary-600 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">
                          Estimated time to resolution
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="md:flex items-center mb-24 relative animate__animated animate__fadeInLeft">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
                  <div className="bg-neutral-700 p-6 rounded-xl shadow-lg inline-block">
                    <h3 className="text-2xl font-bold mb-3 text-secondary-500">
                      3. Collaborate
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Join discussions with neighbors and local authorities
                      about community issues. Share ideas, propose solutions, or
                      volunteer to help.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start justify-end">
                        <span className="text-sm">
                          Comment on issue reports
                        </span>
                        <svg
                          className="h-5 w-5 text-secondary-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                      <li className="flex items-start justify-end">
                        <span className="text-sm">
                          Vote on proposed solutions
                        </span>
                        <svg
                          className="h-5 w-5 text-secondary-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                      <li className="flex items-start justify-end">
                        <span className="text-sm">
                          Contribute to crowdfunding initiatives
                        </span>
                        <svg
                          className="h-5 w-5 text-secondary-500 ml-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary-500 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-neutral-800 md:mx-auto">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-neutral-900 rounded-xl shadow-lg p-4 max-w-sm mx-auto">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-white">
                        Discussion: Maple Street Park
                      </h4>
                      <span className="text-xs px-2 py-1 bg-secondary-500 text-white rounded-full">
                        16 Comments
                      </span>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="bg-neutral-800 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs mr-2 shrink-0">
                            JD
                          </div>
                          <div>
                            <p className="text-sm text-white mb-1">
                              The playground equipment needs repairs - several
                              swings are broken.
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-neutral-400">
                                John D. · 2 days ago
                              </span>
                              <div className="flex items-center">
                                <button className="text-xs text-neutral-400 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    />
                                  </svg>
                                  12
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral-800 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs mr-2 shrink-0">
                            AT
                          </div>
                          <div>
                            <p className="text-sm text-white mb-1">
                              I can help organize a community workday to fix
                              some of the smaller issues!
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-neutral-400">
                                Amy T. · Yesterday
                              </span>
                              <div className="flex items-center">
                                <button className="text-xs text-neutral-400 flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    />
                                  </svg>
                                  8
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 bg-neutral-800 border-0 rounded-l-lg text-white text-sm p-2"
                        placeholder="Add a comment..."
                      />
                      <button className="bg-secondary-500 text-white rounded-r-lg px-4 text-sm">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div className="md:flex items-center relative animate__animated animate__fadeInRight">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                  <div className="bg-neutral-900 rounded-xl shadow-lg p-4 max-w-sm mx-auto">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">
                          Issue Resolved!
                        </h4>
                        <p className="text-xs text-neutral-400">
                          Streetlight Repair #3892
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
                          <p className="text-xs text-neutral-500">Before</p>
                        </div>
                        <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
                          <p className="text-xs text-neutral-500">After</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-green-500 rounded-full p-2 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300 mb-4">
                      The reported streetlight on Oak Avenue has been repaired
                      by the Public Works Department.
                    </p>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-neutral-700 text-white rounded py-2 text-sm">
                        Rate Service
                      </button>
                      <button className="flex-1 bg-green-600 text-white rounded py-2 text-sm">
                        Say Thanks
                      </button>
                    </div>
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none z-10 order-1 md:order-2">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold shadow-lg border-4 border-neutral-800 md:mx-auto">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="bg-neutral-700 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-3 text-green-400">
                      4. Resolution
                    </h3>
                    <p className="text-gray-300 mb-4">
                      See issues through to completion with photo verification
                      of resolutions. Rate the service provided and acknowledge
                      the improvements in your community.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">
                          Before/after photo verification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">Service quality ratings</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">
                          Community impact tracking
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action */}
            <div className="mt-20 text-center animate__animated animate__fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to improve your community?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#download"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Download The App
                </a>
                <a
                  href="#contact"
                  className="bg-transparent hover:bg-neutral-700 text-white font-bold py-3 px-8 rounded-lg border border-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="0a478653-4ac7-49d0-bf08-7aa2797c37a1"
      data-section-id="0a478653-4ac7-49d0-bf08-7aa2797c37a1"
    >
      <div id="root">
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits for Everyone
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                CivicConnect creates value for all stakeholders in the
                community, from residents to local government officials.
              </p>
            </div>
            {/* Tabbed Benefits */}
            <div className="max-w-5xl mx-auto mb-20">
              <div
                className="flex flex-wrap justify-center mb-8"
                role="tablist"
              >
                <button
                  id="tab-citizens"
                  className="tab-button active py-3 px-6 md:px-8 rounded-t-lg font-semibold transition-colors duration-300 bg-primary-600 text-white"
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-citizens"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    For Citizens
                  </span>
                </button>
                <button
                  id="tab-government"
                  className="tab-button py-3 px-6 md:px-8 rounded-t-lg font-semibold transition-colors duration-300 bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-government"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    For Government
                  </span>
                </button>
                <button
                  id="tab-community"
                  className="tab-button py-3 px-6 md:px-8 rounded-t-lg font-semibold transition-colors duration-300 bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-community"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    For Communities
                  </span>
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                {/* Citizens Panel */}
                <div
                  id="panel-citizens"
                  className="tab-panel active p-6 md:p-8"
                  role="tabpanel"
                  aria-labelledby="tab-citizens"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold mb-4 text-primary-600">
                        Empowering Citizen Voices
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Take an active role in improving your neighborhood with
                        tools that make it easy to report issues and track their
                        resolution.
                      </p>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">Save Time</h4>
                            <p className="text-gray-600">
                              Report issues in under 60 seconds from your
                              smartphone, no phone calls or office visits
                              required.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Full Transparency
                            </h4>
                            <p className="text-gray-600">
                              Track the status of your reports in real-time and
                              receive updates when progress is made.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Direct Communication
                            </h4>
                            <p className="text-gray-600">
                              Connect directly with officials handling your
                              report and provide additional information if
                              needed.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-primary-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Community Connection
                            </h4>
                            <p className="text-gray-600">
                              Collaborate with neighbors on local issues and
                              participate in community-driven solutions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 animate__animated animate__fadeInRight">
                      <div className="bg-neutral-100 p-6 rounded-xl shadow-lg">
                        <div className="mb-6 relative">
                          <div className="relative mx-auto w-full max-w-xs">
                            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                                  Resolved
                                </div>
                                <div className="text-xs text-gray-500">
                                  2 days
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="bg-neutral-100 w-16 h-16 rounded-lg mr-3 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-neutral-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Broken Streetlight
                                  </h5>
                                  <p className="text-xs text-gray-500 mb-1">
                                    Oak Avenue &amp; 5th Street
                                  </p>
                                  <div className="w-full bg-neutral-200 rounded-full h-1.5">
                                    <div
                                      className="bg-green-500 h-1.5 rounded-full"
                                      style={{ width: "100%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                  In Progress
                                </div>
                                <div className="text-xs text-gray-500">
                                  1 day
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="bg-neutral-100 w-16 h-16 rounded-lg mr-3 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-neutral-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h5 className="font-medium text-sm">
                                    Pothole
                                  </h5>
                                  <p className="text-xs text-gray-500 mb-1">
                                    Main Street near Post Office
                                  </p>
                                  <div className="w-full bg-neutral-200 rounded-full h-1.5">
                                    <div
                                      className="bg-yellow-500 h-1.5 rounded-full"
                                      style={{ width: "60%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary-600 rounded-full opacity-20" />
                            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent-500 rounded-full opacity-20" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center mb-2">
                            <div className="h-4 w-4 bg-green-500 rounded-full mr-2" />
                            <span className="text-sm text-gray-600">
                              12 issues resolved
                            </span>
                          </div>
                          <div className="inline-flex items-center justify-center ml-4 mb-2">
                            <div className="h-4 w-4 bg-yellow-500 rounded-full mr-2" />
                            <span className="text-sm text-gray-600">
                              5 in progress
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Track all your reported issues in one place
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Government Panel */}
                <div
                  id="panel-government"
                  className="tab-panel hidden p-6 md:p-8"
                  role="tabpanel"
                  aria-labelledby="tab-government"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-secondary-500">
                        Streamlined Issue Management
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Empower your departments with tools to efficiently
                        track, respond to, and resolve community issues.
                      </p>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-secondary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Centralized Dashboard
                            </h4>
                            <p className="text-gray-600">
                              Manage all community reports in a unified platform
                              with sorting, filtering, and assignment
                              capabilities.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-secondary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Data-Driven Decisions
                            </h4>
                            <p className="text-gray-600">
                              Access powerful analytics to identify patterns and
                              allocate resources more effectively.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-secondary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Streamlined Communication
                            </h4>
                            <p className="text-gray-600">
                              Respond directly to citizens and provide updates
                              in a transparent, efficient manner.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-secondary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Improved Service Delivery
                            </h4>
                            <p className="text-gray-600">
                              Track resolution times and service quality to
                              enhance departmental performance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate__animated animate__fadeInRight">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-secondary-500 text-white p-4">
                          <h4 className="font-semibold text-lg">
                            Government Dashboard
                          </h4>
                          <p className="text-sm opacity-90">
                            Public Works Department
                          </p>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="bg-neutral-100 p-3 rounded-lg text-center">
                              <div className="text-2xl font-bold text-secondary-500">
                                24
                              </div>
                              <div className="text-xs text-gray-500">
                                New Reports
                              </div>
                            </div>
                            <div className="bg-neutral-100 p-3 rounded-lg text-center">
                              <div className="text-2xl font-bold text-yellow-500">
                                38
                              </div>
                              <div className="text-xs text-gray-500">
                                In Progress
                              </div>
                            </div>
                            <div className="bg-neutral-100 p-3 rounded-lg text-center">
                              <div className="text-2xl font-bold text-green-500">
                                112
                              </div>
                              <div className="text-xs text-gray-500">
                                Resolved
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <h5 className="font-medium text-sm mb-2">
                              Recent Activity
                            </h5>
                            <div className="space-y-2">
                              <div className="bg-neutral-50 p-2 rounded border border-gray-100 flex items-center">
                                <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                                <div className="text-xs">
                                  New pothole report on Center St
                                </div>
                                <div className="ml-auto text-xs text-gray-400">
                                  10m ago
                                </div>
                              </div>
                              <div className="bg-neutral-50 p-2 rounded border border-gray-100 flex items-center">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                                <div className="text-xs">
                                  Streetlight repair assigned to Team B
                                </div>
                                <div className="ml-auto text-xs text-gray-400">
                                  1h ago
                                </div>
                              </div>
                              <div className="bg-neutral-50 p-2 rounded border border-gray-100 flex items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                                <div className="text-xs">
                                  Graffiti removal completed on Bridge
                                </div>
                                <div className="ml-auto text-xs text-gray-400">
                                  2h ago
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-sm mb-2">
                              Issue Distribution
                            </h5>
                            <div className="h-20 flex items-end space-x-2">
                              <div
                                className="bg-primary-600 w-1/6 h-40%"
                                title="Potholes"
                              />
                              <div
                                className="bg-secondary-500 w-1/6 h-60%"
                                title="Streetlights"
                              />
                              <div
                                className="bg-accent-500 w-1/6 h-30%"
                                title="Graffiti"
                              />
                              <div
                                className="bg-red-400 w-1/6 h-75%"
                                title="Garbage"
                              />
                              <div
                                className="bg-purple-400 w-1/6 h-50%"
                                title="Sidewalks"
                              />
                              <div
                                className="bg-gray-400 w-1/6 h-25%"
                                title="Other"
                              />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Potholes</span>
                              <span>Streetlights</span>
                              <span>Other</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Community Panel */}
                <div
                  id="panel-community"
                  className="tab-panel hidden p-6 md:p-8"
                  role="tabpanel"
                  aria-labelledby="tab-community"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold mb-4 text-accent-500">
                        Stronger, Connected Communities
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Build more engaged neighborhoods with tools that
                        facilitate collaboration, communication, and shared
                        responsibility.
                      </p>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-accent-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Enhanced Civic Engagement
                            </h4>
                            <p className="text-gray-600">
                              Foster a culture where residents actively
                              participate in improving their community.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-accent-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Collective Problem Solving
                            </h4>
                            <p className="text-gray-600">
                              Crowdsource solutions from community members with
                              diverse backgrounds and expertise.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-accent-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Crowdfunding Capabilities
                            </h4>
                            <p className="text-gray-600">
                              Pool resources for community improvement projects
                              that may fall outside government budgets.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-accent-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-semibold">
                              Increased Neighborhood Pride
                            </h4>
                            <p className="text-gray-600">
                              When communities actively improve their
                              surroundings, pride and ownership increase.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 animate__animated animate__fadeInRight">
                      <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
                        <h4 className="font-bold text-xl mb-4 text-center">
                          Community Improvement Project
                        </h4>
                        <div className="bg-neutral-100 rounded-lg p-4 mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-semibold">
                              Oak Street Park Renovation
                            </h5>
                            <span className="text-xs bg-accent-500 text-white rounded-full px-2 py-1">
                              Community Project
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            A community-driven initiative to renovate the
                            playground and add new benches to Oak Street Park.
                          </p>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">
                                  Fundraising Goal
                                </span>
                                <span>$12,500 / $15,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-accent-500 h-2.5 rounded-full"
                                  style={{ width: "83%" }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">
                                  Volunteer Sign-ups
                                </span>
                                <span>28 / 30</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-secondary-500 h-2.5 rounded-full"
                                  style={{ width: "93%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-medium text-sm mb-2">
                            Community Participants
                          </h5>
                          <div className="flex flex-wrap">
                            <div className="flex -space-x-2 mr-4">
                              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs border-2 border-white">
                                ML
                              </div>
                              <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center text-white text-xs border-2 border-white">
                                KJ
                              </div>
                              <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs border-2 border-white">
                                BT
                              </div>
                              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs border-2 border-white">
                                +25
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 flex items-center">
                              <span>28 neighbors participating</span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h5 className="font-medium text-sm mb-2">
                            Recent Activity
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white text-xs mr-2 shrink-0">
                                JS
                              </div>
                              <div>
                                <p className="text-gray-900">
                                  Jessica S. donated $100
                                </p>
                                <p className="text-xs text-gray-500">
                                  1 hour ago
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs mr-2 shrink-0">
                                TM
                              </div>
                              <div>
                                <p className="text-gray-900">
                                  Tom M. volunteered to help with installation
                                </p>
                                <p className="text-xs text-gray-500">
                                  3 hours ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-accent-500 hover:bg-accent-600 text-white rounded py-2 text-sm font-medium transition-colors duration-300">
                            Contribute
                          </button>
                          <button className="flex-1 bg-secondary-500 hover:bg-secondary-600 text-white rounded py-2 text-sm font-medium transition-colors duration-300">
                            Volunteer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats Section */}
            <div className="bg-neutral-900 text-white rounded-xl shadow-xl overflow-hidden animate__animated animate__fadeInUp">
              <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Measurable Impact across Communities
                  </h3>
                  <p className="text-lg text-gray-300 mt-2">
                    See how CivicConnect is transforming neighborhoods
                    nationwide
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                      87%
                    </div>
                    <p className="text-gray-300">
                      Faster issue resolution compared to traditional methods
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                      50+
                    </div>
                    <p className="text-gray-300">
                      Municipalities actively using the platform
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                      23K
                    </div>
                    <p className="text-gray-300">
                      Community issues successfully resolved
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                      92%
                    </div>
                    <p className="text-gray-300">User satisfaction rating</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="mt-16 text-center animate__animated animate__fadeIn">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your community?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Join thousands of citizens and local governments already using
                CivicConnect to build better communities together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#download"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Today
                </a>
                <a
                  href="#demo"
                  className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-8 rounded-lg border border-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-100 {\n      background-color: rgba(30, 136, 229, 0.1);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-primary-700 {\n      background-color: #1976D2;\n    }\n    .bg-secondary-100 {\n      background-color: rgba(76, 175, 80, 0.1);\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-secondary-600 {\n      background-color: #43A047;\n    }\n    .bg-accent-100 {\n      background-color: rgba(255, 152, 0, 0.1);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n    .border-primary-600 {\n      border-color: var(--primary-color);\n    }\n    .h-40\\% {\n      height: 40%;\n    }\n    .h-60\\% {\n      height: 60%;\n    }\n    .h-30\\% {\n      height: 30%;\n    }\n    .h-75\\% {\n      height: 75%;\n    }\n    .h-50\\% {\n      height: 50%;\n    }\n    .h-25\\% {\n      height: 25%;\n    }\n    \n    /* Tab functionality */\n    .tab-button.active {\n      background-color: var(--primary-color);\n      color: white;\n    }\n    .tab-panel {\n      display: none;\n    }\n    .tab-panel.active {\n      display: block;\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="85a8ceca-2207-4917-9531-83342b69d46f"
      data-section-id="85a8ceca-2207-4917-9531-83342b69d46f"
    >
      <div id="root">
        <section id="testimonials" className="py-20 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Voices from the Community
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from citizens, government officials, and community leaders
                about how CivicConnect is transforming their neighborhoods.
              </p>
            </div>
            {/* Testimonial Carousel */}
            <div className="relative testimonial-carousel mb-16">
              <div className="overflow-hidden">
                <div className="testimonial-slider flex transition-transform duration-500">
                  {/* Testimonial 1 */}
                  <div className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                          SC
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Sarah Chen</h4>
                          <p className="text-sm text-gray-600">
                            Concerned Citizen
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-accent-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "I've been trying for months to get a dangerous pothole
                        fixed on my street. With CivicConnect, I reported it
                        with photos, and it was repaired within a week! I could
                        track the entire process and even got a notification
                        when the work crew was scheduled."
                      </blockquote>
                      <div className="mt-auto">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent-500 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Pothole repaired in 7 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                          JW
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">James Washington</h4>
                          <p className="text-sm text-gray-600">
                            Public Works Director
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-accent-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "CivicConnect has revolutionized how our department
                        handles community issues. The dashboard gives us
                        real-time data to allocate resources efficiently, and
                        the photo documentation helps us prepare before sending
                        crews. Our resolution time has decreased by 40%."
                      </blockquote>
                      <div className="mt-auto">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-secondary-500 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>40% faster issue resolution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-xl">
                          MR
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Maria Rodriguez</h4>
                          <p className="text-sm text-gray-600">
                            Neighborhood Association Leader
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-accent-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "The crowdfunding feature helped us renovate our
                        neighborhood park when the city budget couldn't cover
                        it. CivicConnect made it easy to organize volunteers,
                        track donations, and collaborate with local officials.
                        Our community feels more connected than ever."
                      </blockquote>
                      <div className="mt-auto">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-accent-500 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Raised $15,000 for park renovation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 4 */}
                  <div className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                          TJ
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Trevor Johnson</h4>
                          <p className="text-sm text-gray-600">
                            City Council Member
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-accent-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "The data we get from CivicConnect has transformed our
                        budget planning. We can now allocate resources based on
                        actual community needs and show taxpayers exactly how
                        their money is being spent. Citizen satisfaction is at
                        an all-time high."
                      </blockquote>
                      <div className="mt-auto">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary-600 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>28% increase in citizen satisfaction</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial 5 */}
                  <div className="testimonial-slide w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                          KM
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold">Keisha Michaels</h4>
                          <p className="text-sm text-gray-600">
                            Small Business Owner
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-accent-500 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic mb-6 flex-grow">
                        "The area around my café had issues with broken
                        streetlights and trash collection. Using CivicConnect,
                        our business association was able to highlight these
                        problems and track their resolution. Foot traffic has
                        increased by 20% since the improvements!"
                      </blockquote>
                      <div className="mt-auto">
                        <div className="flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-secondary-500 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>20% increase in foot traffic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  id="prev-testimonial"
                  className="bg-white text-neutral-700 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-neutral-100 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="flex space-x-2 testimonial-indicators">
                  <button
                    className="w-3 h-3 rounded-full bg-primary-600 indicator active"
                    data-index={0}
                    aria-label="Go to slide 1"
                  />
                  <button
                    className="w-3 h-3 rounded-full bg-neutral-300 indicator"
                    data-index={1}
                    aria-label="Go to slide 2"
                  />
                  <button
                    className="w-3 h-3 rounded-full bg-neutral-300 indicator"
                    data-index={2}
                    aria-label="Go to slide 3"
                  />
                </div>
                <button
                  id="next-testimonial"
                  className="bg-white text-neutral-700 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-neutral-100 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Success Stories */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Impact Stories</h3>
                  <p className="text-gray-600 mb-6">
                    See how communities across the country are using
                    CivicConnect to create meaningful change and improve quality
                    of life for residents.
                  </p>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg">
                          Oakridge Community
                        </h4>
                        <p className="text-gray-600">
                          Successfully coordinated the repair of 35 streetlights
                          in a high-crime area, resulting in a 15% decrease in
                          nighttime incidents within two months.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center text-secondary-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg">
                          Westville Township
                        </h4>
                        <p className="text-gray-600">
                          Used CivicConnect's heatmap data to identify and
                          repair 150+ potholes in prioritized order, reducing
                          vehicle damage complaints by 40%.
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center text-accent-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg">
                          Riverside Neighborhood
                        </h4>
                        <p className="text-gray-600">
                          Crowdfunded $27,000 through the platform to create a
                          new playground and community garden on a previously
                          abandoned lot.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#case-studies"
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                    >
                      Read all success stories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-primary-600 text-white p-8 md:p-12 flex items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-4">
                      CivicConnect by the Numbers
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-4xl font-bold mb-1">18K+</div>
                        <p className="text-white opacity-80">
                          Issues reported monthly
                        </p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">72%</div>
                        <p className="text-white opacity-80">
                          Faster response time
                        </p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">3.2M</div>
                        <p className="text-white opacity-80">
                          Citizens impacted
                        </p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-1">86%</div>
                        <p className="text-white opacity-80">Resolution rate</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-white border-opacity-20">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-accent-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <div>
                          <div className="font-medium">
                            Civic Engagement Award 2023
                          </div>
                          <p className="text-sm opacity-80">
                            Recognized for excellence in community innovation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-100 {\n      background-color: rgba(30, 136, 229, 0.1);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-primary-700 {\n      background-color: #1976D2;\n    }\n    .bg-secondary-100 {\n      background-color: rgba(76, 175, 80, 0.1);\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-100 {\n      background-color: rgba(255, 152, 0, 0.1);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    \n    /* Carousel styles */\n    .testimonial-carousel {\n      overflow: hidden;\n    }\n    .testimonial-slide {\n      min-width: 100%;\n    }\n    @media (min-width: 768px) {\n      .testimonial-slide {\n        min-width: 50%;\n      }\n    }\n    @media (min-width: 1024px) {\n      .testimonial-slide {\n        min-width: 33.333%;\n      }\n    }\n    .indicator.active {\n      background-color: var(--primary-color);\n    }\n    .indicator {\n      transition: background-color 0.3s ease;\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="8d67cbfe-0ca4-45d1-86f0-cd3f86a7a560"
      data-section-id="8d67cbfe-0ca4-45d1-86f0-cd3f86a7a560"
    >
      <div id="root">
        <section
          id="community-impact"
          className="py-20 bg-neutral-800 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Creating Stronger Communities
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                CivicConnect is more than a reporting tool—it's a catalyst for
                community transformation and civic engagement.
              </p>
            </div>
            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate__animated animate__fadeInUp">
              <div className="bg-neutral-700 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-accent-500 mb-2">
                  35,000+
                </div>
                <p className="text-gray-300">Community Issues Resolved</p>
              </div>
              <div className="bg-neutral-700 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  75+
                </div>
                <p className="text-gray-300">Communities Participating</p>
              </div>
              <div className="bg-neutral-700 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-secondary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-secondary-500 mb-2">
                  $1.2M+
                </div>
                <p className="text-gray-300">Crowdfunded for Projects</p>
              </div>
              <div className="bg-neutral-700 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto text-accent-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-accent-500 mb-2">
                  68%
                </div>
                <p className="text-gray-300">Faster Resolution Time</p>
              </div>
            </div>
            {/* Impact Map */}
            <div className="bg-neutral-900 rounded-xl shadow-xl overflow-hidden mb-20 animate__animated animate__fadeIn">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Impact Across Communities
                </h3>
                <div className="h-80 md:h-96 bg-neutral-800 rounded-lg relative">
                  {/* Map Placeholder (would be replaced with actual map in implementation) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-neutral-600 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <p className="text-neutral-400">
                        Interactive map showing CivicConnect's nationwide impact
                      </p>
                    </div>
                  </div>
                  {/* Map Points */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-600 rounded-full pulse-dot" />
                  <div
                    className="absolute top-1/3 left-1/2 w-4 h-4 bg-secondary-500 rounded-full pulse-dot"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-2/3 left-1/3 w-4 h-4 bg-accent-500 rounded-full pulse-dot"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-1/2 left-3/4 w-4 h-4 bg-primary-600 rounded-full pulse-dot"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div
                    className="absolute top-1/5 left-2/3 w-4 h-4 bg-secondary-500 rounded-full pulse-dot"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Infrastructure Issues
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary-500 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Environmental Concerns
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-500 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Safety &amp; Security
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Public Utilities
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Community Projects
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
                    <span className="text-sm text-gray-300">
                      Resolved Issues
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Success Stories */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-10 text-center">
                Community Transformation Stories
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Story 1 */}
                <div className="bg-neutral-700 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp">
                  <div className="h-48 bg-neutral-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">
                      Riverside Park Renovation
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A neglected park transformed into a vibrant community
                      space through citizen reporting and collaborative effort.
                    </p>
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Community participation</span>
                        <span>120+ volunteers</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Issues resolved</span>
                        <span>15 reports</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Crowdfunding</span>
                        <span>$32,500</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent-500">
                        Completed in 3 months
                      </span>
                      <a
                        href="#park-story"
                        className="text-primary-600 hover:text-primary-400 transition-colors duration-300 text-sm font-medium inline-flex items-center"
                      >
                        Read story
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Story 2 */}
                <div
                  className="bg-neutral-700 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="h-48 bg-neutral-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">
                      Downtown Lighting Initiative
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Addressing safety concerns by repairing 50+ streetlights
                      in a business district, revitalizing night commerce.
                    </p>
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Issues resolved</span>
                        <span>53 streetlights</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Crime reduction</span>
                        <span>28% decrease</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Business impact</span>
                        <span>15% revenue increase</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-500">
                        Completed in 6 weeks
                      </span>
                      <a
                        href="#lighting-story"
                        className="text-primary-600 hover:text-primary-400 transition-colors duration-300 text-sm font-medium inline-flex items-center"
                      >
                        Read story
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Story 3 */}
                <div
                  className="bg-neutral-700 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="h-48 bg-neutral-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-neutral-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">
                      Pothole Blitz Campaign
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A coordinated effort to identify and repair dangerous road
                      conditions city-wide after winter damage.
                    </p>
                    <div className="mb-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Issues reported</span>
                        <span>275 potholes</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Repair rate</span>
                        <span>92% in 30 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cost savings</span>
                        <span>$125,000 vs. prior years</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-600">
                        Completed in 1 month
                      </span>
                      <a
                        href="#pothole-story"
                        className="text-primary-600 hover:text-primary-400 transition-colors duration-300 text-sm font-medium inline-flex items-center"
                      >
                        Read story
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Community Spotlight */}
            <div className="bg-neutral-900 rounded-xl shadow-xl overflow-hidden animate__animated animate__fadeIn">
              <div className="p-8 md:p-10">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-2">
                    Community Impact Spotlight
                  </h3>
                  <p className="text-gray-400">
                    Meet the cities and towns making the biggest impact with
                    CivicConnect
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-neutral-800 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-2xl font-bold mr-4">
                        M
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Middletown</h4>
                        <p className="text-sm text-gray-400">
                          Pop. 67,500 | Using CivicConnect since 2021
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Issues Resolved</span>
                          <span>1,250+</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">
                            Citizen Participation
                          </span>
                          <span>32% of population</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-accent-500 h-2 rounded-full"
                            style={{ width: "32%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Response Time</span>
                          <span>72% faster than before</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-secondary-500 h-2 rounded-full"
                            style={{ width: "72%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm italic text-gray-300 border-l-4 border-primary-600 pl-4 py-2 mb-4">
                      "CivicConnect has transformed how our city responds to
                      citizen concerns. We're more efficient and our residents
                      are more engaged than ever before."
                    </blockquote>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">
                        — Mayor James Wilson
                      </span>
                    </div>
                  </div>
                  <div className="bg-neutral-800 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center text-2xl font-bold mr-4">
                        P
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Pine Ridge</h4>
                        <p className="text-sm text-gray-400">
                          Pop. 23,800 | Using CivicConnect since 2022
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Issues Resolved</span>
                          <span>875+</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-secondary-500 h-2 rounded-full"
                            style={{ width: "78%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">
                            Citizen Participation
                          </span>
                          <span>45% of population</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-accent-500 h-2 rounded-full"
                            style={{ width: "45%" }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">
                            Community Projects
                          </span>
                          <span>12 completed</span>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full"
                            style={{ width: "65%" }}
                          />
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-sm italic text-gray-300 border-l-4 border-secondary-500 pl-4 py-2 mb-4">
                      "As a small town with limited resources, CivicConnect has
                      been invaluable. We've completed 12 community projects
                      that would never have happened otherwise."
                    </blockquote>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">
                        — Town Manager Sarah Chen
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#all-communities"
                    className="inline-flex items-center text-primary-600 hover:text-primary-400 transition-colors duration-300 font-medium"
                  >
                    View all participating communities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-primary-400 {\n      color: #42A5F5;\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .border-primary-600 {\n      border-color: var(--primary-color);\n    }\n    .border-secondary-500 {\n      border-color: var(--secondary-color);\n    }\n    \n    /* Pulse animation for map dots */\n    .pulse-dot {\n      animation: pulse 2s infinite;\n    }\n    @keyframes pulse {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n      }\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n      }\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n      }\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="60520890-80b1-49a5-b537-eff94029e453"
      data-section-id="60520890-80b1-49a5-b537-eff94029e453"
    >
      <div id="root">
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about CivicConnect and how it
                works for communities.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {/* FAQ Accordion */}
              <div className="space-y-6 mb-12">
                {/* FAQ Item 1 */}
                <div className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp">
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      How does CivicConnect work?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      CivicConnect is a platform that connects citizens,
                      community members, and local government in three simple
                      steps:
                    </p>
                    <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside">
                      <li>
                        Citizens report issues through our mobile app or
                        website, adding photos and location data.
                      </li>
                      <li>
                        Local authorities receive, prioritize and address these
                        reports through a specialized dashboard.
                      </li>
                      <li>
                        Everyone can track progress in real-time, with updates
                        and notifications at each step of resolution.
                      </li>
                    </ol>
                    <p className="mt-3 text-gray-600">
                      The platform also enables community discussion and
                      collaborative solutions, including crowdfunding for
                      community improvement projects.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 2 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      What types of issues can I report?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      CivicConnect is designed to handle a wide range of
                      community issues, including but not limited to:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        Infrastructure problems (potholes, broken sidewalks,
                        streetlight outages)
                      </li>
                      <li>
                        Public utilities issues (water leaks, power outages)
                      </li>
                      <li>
                        Sanitation concerns (missed garbage collection, illegal
                        dumping)
                      </li>
                      <li>
                        Safety hazards (dangerous intersections, missing
                        signage)
                      </li>
                      <li>Environmental issues (pollution, fallen trees)</li>
                      <li>
                        Public space maintenance (park equipment, graffiti)
                      </li>
                      <li>Suggestions for community improvements</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      If your community has specific needs, the platform can be
                      customized to include additional categories.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 3 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      Is my personal information kept private?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      Yes, we take privacy seriously. When you submit a report:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        Your contact information is only shared with authorized
                        government officials who need it to resolve your issue
                      </li>
                      <li>
                        Your name is never displayed publicly unless you choose
                        to participate in public discussions
                      </li>
                      <li>
                        You can select anonymous reporting for sensitive issues
                        (though providing contact info helps with follow-up)
                      </li>
                      <li>
                        All data is encrypted and stored securely in compliance
                        with privacy regulations
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      You can review our complete{" "}
                      <a
                        href="/privacy-policy"
                        className="text-primary-600 hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      for more details about how we protect your information.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 4 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.3s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      How long does it take for issues to be resolved?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      Resolution times vary depending on several factors:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        The nature and urgency of the issue (safety hazards
                        typically receive priority)
                      </li>
                      <li>The complexity of the required solution</li>
                      <li>Available resources in your local government</li>
                      <li>
                        Seasonal factors (weather conditions can affect outdoor
                        repairs)
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      One of CivicConnect's key benefits is transparency -
                      you'll receive estimated resolution timeframes and regular
                      status updates. Data shows that issues reported through
                      our platform are typically resolved 40-70% faster than
                      traditional reporting methods.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 5 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      How does the crowdfunding feature work?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      Our crowdfunding feature allows communities to fund
                      improvement projects that may fall outside of municipal
                      budgets:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        Community members can propose projects that need funding
                      </li>
                      <li>
                        Projects require approval from local authorities to
                        ensure feasibility
                      </li>
                      <li>
                        Once approved, neighbors can contribute financially
                        through secure payments
                      </li>
                      <li>
                        Progress updates and financial transparency are provided
                        throughout
                      </li>
                      <li>
                        Funds are only released when funding goals are met
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      Popular crowdfunded projects include playground
                      improvements, community gardens, public art installations,
                      and neighborhood beautification efforts. This feature has
                      helped communities raise over $1.2 million for local
                      improvements.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 6 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.5s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      What if my local government doesn't use CivicConnect?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      We have several pathways for communities not yet on the
                      platform:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        You can still use CivicConnect to document and organize
                        community issues
                      </li>
                      <li>
                        Our advocacy tools help citizens collectively request
                        that their local government adopt the platform
                      </li>
                      <li>
                        We offer special onboarding packages for new
                        municipalities including training and support
                      </li>
                      <li>
                        For urgent matters, our system can help route reports to
                        existing government contact points
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      We're rapidly expanding to new communities.{" "}
                      <a
                        href="#contact"
                        className="text-primary-600 hover:underline"
                      >
                        Contact us
                      </a>{" "}
                      to learn about bringing CivicConnect to your area, or join
                      our waitlist to be notified when we launch in your
                      community.
                    </p>
                  </div>
                </div>
                {/* FAQ Item 7 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.6s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      Is CivicConnect available on mobile devices?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      Yes, CivicConnect is fully optimized for mobile use:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>Native apps available for iOS and Android devices</li>
                      <li>
                        Mobile-responsive web version works on any smartphone
                        browser
                      </li>
                      <li>
                        Report issues on-the-go with your device's camera and
                        GPS
                      </li>
                      <li>
                        Receive push notifications for updates on your reports
                      </li>
                      <li>
                        Offline capability allows you to create reports even
                        without internet connection (they'll sync when
                        connectivity is restored)
                      </li>
                    </ul>
                    <div className="mt-4 flex space-x-4">
                      <a
                        href="#ios-download"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        Download for iOS
                      </a>
                      <a
                        href="#android-download"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396" />
                        </svg>
                        Download for Android
                      </a>
                    </div>
                  </div>
                </div>
                {/* FAQ Item 8 */}
                <div
                  className="faq-item bg-gray-50 rounded-xl shadow-md overflow-hidden animate__animated animate__fadeInUp"
                  style={{ animationDelay: "0.7s" }}
                >
                  <button
                    className="faq-question w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded="false"
                  >
                    <span className="text-lg font-semibold">
                      How much does CivicConnect cost?
                    </span>
                    <svg
                      className="faq-icon w-6 h-6 text-primary-600 transform transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="faq-answer px-6 pb-5 hidden">
                    <p className="text-gray-600">
                      CivicConnect offers flexible pricing options:
                    </p>
                    <ul className="mt-3 space-y-1 text-gray-600 list-disc list-inside">
                      <li>
                        <strong>For citizens:</strong> The mobile app and basic
                        reporting features are completely free
                      </li>
                      <li>
                        <strong>For local governments:</strong> Subscription
                        pricing based on population size and selected features
                      </li>
                      <li>
                        <strong>For community organizations:</strong> Special
                        nonprofit rates available
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      Many municipalities find that CivicConnect pays for itself
                      through increased efficiency, reduced administrative
                      costs, and better resource allocation. Our studies show an
                      average ROI of 3.2x within the first year of
                      implementation.
                    </p>
                    <p className="mt-3 text-gray-600">
                      <a
                        href="#pricing"
                        className="text-primary-600 hover:underline"
                      >
                        View our pricing page
                      </a>{" "}
                      for detailed information or{" "}
                      <a
                        href="#contact"
                        className="text-primary-600 hover:underline"
                      >
                        contact our sales team
                      </a>{" "}
                      for a customized quote.
                    </p>
                  </div>
                </div>
              </div>
              {/* Still Have Questions */}
              <div className="bg-primary-600 text-white rounded-xl p-8 text-center animate__animated animate__fadeIn">
                <h3 className="text-2xl font-bold mb-3">
                  Still have questions?
                </h3>
                <p className="mb-6 text-white opacity-90">
                  Our support team is here to help you with any questions about
                  CivicConnect.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#contact"
                    className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#demo"
                    className="bg-transparent hover:bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg border border-white transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-primary-700 {\n      color: #1976D2;\n    }\n    .bg-primary-500 {\n      background-color: #2196F3;\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    \n    /* FAQ animations */\n    .faq-answer {\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 0.3s ease, padding 0.3s ease;\n    }\n    .faq-answer.open {\n      max-height: 1000px;\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="38ffe55a-1d59-46f5-9b29-534629bb40b1"
      data-section-id="38ffe55a-1d59-46f5-9b29-534629bb40b1"
    >
      <div id="root">
        <section
          id="download"
          className="py-20 bg-neutral-900 text-white relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600 opacity-10 transform -skew-x-12" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent-500 opacity-10 transform skew-x-12" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get CivicConnect Today
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Download our mobile app or access the web platform to start
                making a difference in your community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* App Features */}
              <div className="animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-bold mb-6">
                  Why Download Our App?
                </h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-1">
                        Instant Reporting
                      </h4>
                      <p className="text-gray-300">
                        Report issues in seconds with your smartphone camera and
                        GPS location, right when you spot them.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-1">
                        Real-time Notifications
                      </h4>
                      <p className="text-gray-300">
                        Receive instant updates as your reported issues progress
                        toward resolution.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-1">
                        Community Engagement
                      </h4>
                      <p className="text-gray-300">
                        Connect with neighbors, discuss local issues, and
                        collaborate on solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold mb-1">
                        Customizable Experience
                      </h4>
                      <p className="text-gray-300">
                        Personalize your alerts, follow specific issues, and
                        customize your dashboard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-lg font-semibold mb-4">
                    Platform Availability
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-neutral-800 rounded-lg p-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span>iOS (iPhone &amp; iPad)</span>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396" />
                      </svg>
                      <span>Android Devices</span>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm-.52 15.86v-4.14H8.82c-.37 0-.62-.4-.44-.73l3.68-7.17c.23-.47.94-.3.94.23v4.19h2.54c.37 0 .61.39.45.72l-3.56 7.12c-.24.48-.95.31-.95-.22z" />
                      </svg>
                      <span>Web Application</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* App Download Section */}
              <div className="animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 p-8 rounded-2xl shadow-xl relative">
                  {/* Phone Mockup */}
                  <div className="mx-auto max-w-xs relative">
                    <div className="bg-black rounded-[3rem] p-3 shadow-lg">
                      <div className="relative bg-neutral-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                        {/* App Screenshot Placeholder */}
                        <div className="absolute inset-0 flex flex-col">
                          {/* App Header */}
                          <div className="bg-primary-600 p-4 text-white">
                            <div className="flex justify-between items-center">
                              <span className="font-bold">CivicConnect</span>
                              <div className="flex space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                  />
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          {/* App Content */}
                          <div className="flex-grow p-4">
                            <div className="bg-neutral-800 rounded-lg p-3 mb-3">
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-semibold">
                                  Report an Issue
                                </span>
                                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-xs">
                                  1
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="bg-neutral-700 rounded p-2 text-xs">
                                  Take a photo
                                </div>
                                <div className="bg-neutral-700 rounded p-2 text-xs">
                                  Add location
                                </div>
                                <div className="bg-neutral-700 rounded p-2 text-xs">
                                  Describe issue
                                </div>
                              </div>
                            </div>
                            <div className="bg-neutral-800 rounded-lg p-3">
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-semibold">
                                  Recent Reports
                                </span>
                                <span className="text-xs text-accent-500">
                                  View All
                                </span>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center bg-neutral-700 rounded p-2">
                                  <div className="w-8 h-8 bg-neutral-600 rounded-full mr-2 flex-shrink-0" />
                                  <div className="text-xs">
                                    <div className="font-medium">
                                      Pothole on Main St
                                    </div>
                                    <div className="text-gray-400">
                                      In Progress
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center bg-neutral-700 rounded p-2">
                                  <div className="w-8 h-8 bg-neutral-600 rounded-full mr-2 flex-shrink-0" />
                                  <div className="text-xs">
                                    <div className="font-medium">
                                      Street Light Out
                                    </div>
                                    <div className="text-gray-400">
                                      Reported
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* App Navigation */}
                          <div className="bg-neutral-800 p-3 flex justify-around">
                            <div className="flex flex-col items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                              </svg>
                              <span className="text-[0.6rem] text-primary-600">
                                Home
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-[0.6rem] text-gray-500">
                                Report
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                              </svg>
                              <span className="text-[0.6rem] text-gray-500">
                                Activity
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span className="text-[0.6rem] text-gray-500">
                                Profile
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-10" />
                  </div>
                  {/* Download Buttons */}
                  <div className="mt-10 space-y-4">
                    <a
                      href="#ios-download"
                      className="flex items-center justify-center bg-black hover:bg-neutral-900 text-white p-3 rounded-lg transition duration-300 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-xl font-semibold">App Store</div>
                      </div>
                    </a>
                    <a
                      href="#android-download"
                      className="flex items-center justify-center bg-black hover:bg-neutral-900 text-white p-3 rounded-lg transition duration-300 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-xl font-semibold">Google Play</div>
                      </div>
                    </a>
                    <a
                      href="#web-app"
                      className="flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition duration-300 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      <span className="font-semibold">Use Web Application</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Community Stats */}
            <div className="mt-20 bg-neutral-800 rounded-xl p-8 md:p-10 shadow-xl animate__animated animate__fadeIn">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                    100K+
                  </div>
                  <p className="text-gray-300">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    4.8/5
                  </div>
                  <p className="text-gray-300">App Store Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                    75+
                  </div>
                  <p className="text-gray-300">Connected Communities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                    35K+
                  </div>
                  <p className="text-gray-300">Issues Resolved</p>
                </div>
              </div>
            </div>
            {/* Download Promotion */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to improve your community?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of engaged citizens making a difference every
                day.
              </p>
              <a
                href="#get-started"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-primary-700 {\n      background-color: #1976D2;\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="3c844e47-1425-4421-a9f6-9873fe0cab83"
      data-section-id="3c844e47-1425-4421-a9f6-9873fe0cab83"
    >
      <div id="root">
        <section id="contact" className="py-20 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Have questions about CivicConnect? We're here to help. Reach out
                to our team for more information or to request a demo.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form id="contact-form" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 focus:outline-none transition duration-200"
                      placeholder="Your name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 focus:outline-none transition duration-200"
                      placeholder="your.email@example.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 focus:outline-none transition duration-200"
                      required=""
                    >
                      <option value="" disabled="" selected="">
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="government">Government Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 focus:outline-none transition duration-200"
                      placeholder="How can we help you?"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
                      required=""
                    />
                    <label
                      htmlFor="privacy"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a
                        href="/privacy-policy"
                        className="text-primary-600 hover:underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              {/* Contact Information */}
              <div className="animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 text-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                        <a
                          href="mailto:info@civicconnect.com"
                          className="text-gray-300 hover:text-white transition duration-200"
                        >
                          info@civicconnect.com
                        </a>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                        <a
                          href="tel:+18005551234"
                          className="text-gray-300 hover:text-white transition duration-200"
                        >
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold mb-1">
                          Main Office
                        </h4>
                        <address className="text-gray-300 not-italic">
                          123 Civic Center Plaza
                          <br />
                          Suite 400
                          <br />
                          San Francisco, CA 94103
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#twitter"
                        className="w-10 h-10 rounded-full bg-neutral-700 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a
                        href="#facebook"
                        className="w-10 h-10 rounded-full bg-neutral-700 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a
                        href="#instagram"
                        className="w-10 h-10 rounded-full bg-neutral-700 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="#linkedin"
                        className="w-10 h-10 rounded-full bg-neutral-700 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">FAQs</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        How quickly will I receive a response?
                      </h4>
                      <p className="text-gray-600">
                        We typically respond to all inquiries within 24-48
                        business hours.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Can I request a personalized demo?
                      </h4>
                      <p className="text-gray-600">
                        Absolutely! Select "Request a Demo" in the subject
                        dropdown and let us know your specific interests.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Do you offer support for implementation?
                      </h4>
                      <p className="text-gray-600">
                        Yes, we provide comprehensive onboarding and technical
                        support for government partners.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#faq"
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      View all FAQs
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Section */}
            <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeIn">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                  <p className="text-gray-600 mb-6">
                    We'd love to meet you in person! Our office is located in
                    the heart of San Francisco, easily accessible by public
                    transportation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        123 Civic Center Plaza, Suite 400, San Francisco, CA
                        94103
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-700">
                          Monday - Friday: 9:00 AM - 5:00 PM PST
                        </span>
                        <br />
                        <span className="text-gray-500 text-sm">
                          Closed on weekends and holidays
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-700">
                          Visiting? Please schedule an appointment.
                        </span>
                        <br />
                        <span className="text-gray-500 text-sm">
                          We're happy to arrange a tour of our operations!
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="bg-neutral-200 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  {/* Map Placeholder (would be replaced with actual map in implementation) */}
                  <div className="text-center p-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 mx-auto text-neutral-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-neutral-600">
                      Interactive map showing our office location
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Newsletter Subscription */}
            <div className="mt-16 bg-primary-600 text-white rounded-xl p-8 md:p-10 text-center shadow-xl animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold mb-3">Stay Connected</h3>
              <p className="text-white opacity-90 max-w-2xl mx-auto mb-6">
                Subscribe to our newsletter to receive the latest updates,
                success stories, and tips for community engagement.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-white opacity-75 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    :root {\n      --primary-color: #1E88E5;\n      --secondary-color: #4CAF50;\n      --accent-color: #FF9800;\n    }\n    .text-primary-600 {\n      color: var(--primary-color);\n    }\n    .text-primary-700 {\n      color: #1976D2;\n    }\n    .text-secondary-500 {\n      color: var(--secondary-color);\n    }\n    .text-accent-500 {\n      color: var(--accent-color);\n    }\n    .bg-primary-100 {\n      background-color: rgba(30, 136, 229, 0.1);\n    }\n    .bg-primary-600 {\n      background-color: var(--primary-color);\n    }\n    .bg-primary-700 {\n      background-color: #1976D2;\n    }\n    .bg-secondary-500 {\n      background-color: var(--secondary-color);\n    }\n    .bg-accent-500 {\n      background-color: var(--accent-color);\n    }\n    .bg-accent-600 {\n      background-color: #F57C00;\n    }\n    .focus\\:ring-primary-600:focus {\n      --tw-ring-color: var(--primary-color);\n    }\n    .focus\\:border-primary-600:focus {\n      border-color: var(--primary-color);\n    }\n  "
          }}
        />
      </div>
    </element>
    <element
      id="e7b46654-97fc-442d-98e6-4a3ef5575fc3"
      data-section-id="e7b46654-97fc-442d-98e6-4a3ef5575fc3"
    >
      <div id="root">
        <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <a href="#" className="inline-block">
                    <span className="text-2xl font-bold">
                      Civic<span className="text-accent-500">Connect</span>
                    </span>
                  </a>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Empowering citizens and local authorities to collaborate on
                  community issues, creating safer and more vibrant
                  neighborhoods together.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#benefits"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#community-impact"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Community Impact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Government Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent-500 transition duration-300"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent-500 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-400">
                      123 Civic Center Plaza
                      <br />
                      Suite 400
                      <br />
                      San Francisco, CA 94103
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent-500 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-400">info@civicconnect.com</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent-500 mt-0.5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-400">+1 (800) 555-1234</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* App Download Links */}
            <div className="border-t border-neutral-800 pt-10 pb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold mb-4">
                    Download Our Mobile App
                  </h4>
                  <p className="text-gray-400 mb-6">
                    Get the CivicConnect app for iOS and Android to report
                    issues on the go and stay connected with your community.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#ios-download"
                      className="flex items-center bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-base font-semibold">App Store</div>
                      </div>
                    </a>
                    <a
                      href="#android-download"
                      className="flex items-center bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-lg transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0729L4.841 5.4207a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.0775-9.4396" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-base font-semibold">
                          Google Play
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="md:text-right">
                  <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                  <p className="text-gray-400 mb-4">
                    Stay updated with our latest news and feature releases.
                  </p>
                  <form className="flex max-w-md md:ml-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-2 rounded-l-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-accent-500"
                    />
                    <button
                      type="submit"
                      className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-r-lg transition duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Bottom Footer */}
            <div className="border-t border-neutral-800 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-500 text-sm mb-4 md:mb-0">
                  © 2023 CivicConnect, Inc. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                  <a
                    href="/privacy-policy"
                    className="hover:text-accent-500 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-of-service"
                    className="hover:text-accent-500 transition duration-300"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/cookie-policy"
                    className="hover:text-accent-500 transition duration-300"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="/data-protection"
                    className="hover:text-accent-500 transition duration-300"
                  >
                    Data Protection
                  </a>
                  <a
                    href="/accessibility"
                    className="hover:text-accent-500 transition duration-300"
                  >
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
            {/* Back to Top Button */}
            <div className="text-center mt-8">
              <a
                href="#hero"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 transition duration-300"
                aria-label="Back to top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </footer>
        
      </div>
    </element>
  </div>
  <div id="page_complete"></div>
</>

  );
};

export default Navbar;
