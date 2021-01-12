import styles from '../styles/Header.module.scss';

const Header = ({ children }) => (
  <header className="bg-brand--dark-blue">
    <div class="navigation ">
      <div class="wrapper navigation__wrapper">
        <div class="navigation__top">
          <a class="logo-randstad" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 205 30.64"
              fill="#ffffff"
            >
              <title>randstad</title>
              <path
                d="M15.95,30.32H20.5V18.87a2.26,2.26,0,0,0-.67-1.62l-6.75-6.75a2.25,2.25,0,0,0-1.62-.67H0v4.56H12.53a3.42,3.42,0,0,1,3.42,3.42Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M27.28,30.32H22.72V18.87a2.26,2.26,0,0,1,.67-1.62l6.75-6.75a2.25,2.25,0,0,1,1.62-.67H43.22v4.56H30.69a3.42,3.42,0,0,0-3.42,3.42Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M63.8,9.82h3.52V13h.08a6.24,6.24,0,0,1,5.34-3.66,10.69,10.69,0,0,1,2.49.28V13a5.6,5.6,0,0,0-2.09-.36c-3.38,0-5.59,3.22-5.59,8.37v9.33H63.8Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M179.24,22.35c0,3.09-2,5.44-5.7,5.44-1.72,0-3.81-1.18-3.81-3.36,0-3.65,5.06-4,7.1-4,.8,0,1.6.08,2.41.08Zm-11-7.87a9.52,9.52,0,0,1,5.94-2.13c3.77,0,5.05,1.84,5.05,5.38-1.48-.08-2.53-.08-4-.08-3.89,0-9.52,1.6-9.52,6.75,0,4.5,3.1,6.42,7.51,6.42a7.6,7.6,0,0,0,6.34-3.11h.08v2.61H183V17.79c0-5.6-2.36-8.47-8.21-8.47A13.1,13.1,0,0,0,168,11.24Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M88,22.35c0,3.09-2,5.44-5.7,5.44-1.73,0-3.81-1.18-3.81-3.36,0-3.65,5.06-4,7.1-4,.8,0,1.6.08,2.41.08ZM77,14.48A9.52,9.52,0,0,1,83,12.35c3.77,0,5.06,1.84,5.06,5.38-1.48-.08-2.53-.08-4-.08-3.89,0-9.52,1.6-9.52,6.75,0,4.5,3.1,6.42,7.51,6.42a7.6,7.6,0,0,0,6.34-3.11h.08v2.61H91.8V17.79c0-5.6-2.36-8.47-8.21-8.47a13.1,13.1,0,0,0-6.74,1.92Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M94.88,9.82h3.64V13h.08a7.39,7.39,0,0,1,6.73-3.72c5.31,0,7.66,3.28,7.66,8.79V30.32h-3.76V19.69c0-4.79-1-7.13-4.35-7.33-4.31,0-6.24,3.47-6.24,8.48v9.48H94.88Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M137.55,26.33a10.06,10.06,0,0,0,4.7,1.45c1.72,0,3.85-.73,3.85-2.95,0-3.76-8.87-3.43-8.87-9.21,0-4.27,3.18-6.31,7.23-6.31a15.49,15.49,0,0,1,4.7.81l-.32,3.27a11,11,0,0,0-4-1.05c-1.92,0-3.61.81-3.61,2.51,0,4.2,8.87,3,8.87,9.58,0,4.39-3.5,6.39-7.15,6.39a11.84,11.84,0,0,1-5.62-1.12Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M164.48,12.85h-5.43V24.11c0,2.38,1.45,3.67,3.17,3.67a4.65,4.65,0,0,0,2.57-.73v3.2a11.94,11.94,0,0,1-3.21.56c-3.89,0-6.29-1.83-6.29-5.94v-12h-4.62v-3h4.62V5.08l3.76-1.2V9.82h5.43Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M189.56,20c-.08-3.76,1.53-7.64,5.62-7.64s6.06,3.92,6.06,7.76c0,3.43-1.77,7.68-6,7.68C191.17,27.79,189.48,23.22,189.56,20ZM201.4,30.32H205V.18h-3.76V12.6h-.08C200,10.72,198,9.32,194.38,9.32c-5.94,0-8.84,4.85-8.84,10.37s2.61,11.13,8.8,11.13a8.22,8.22,0,0,0,7-3.36h.08Z"
                transform="translate(0 -0.18)"
              ></path>
              <path
                d="M119.57,20c-.08-3.76,1.53-7.64,5.62-7.64s6.06,3.92,6.06,7.76c0,3.43-1.77,7.68-6,7.68C121.17,27.79,119.48,23.22,119.57,20Zm11.84,10.33H135V.18h-3.76V12.6h-.08C130,10.72,128,9.32,124.38,9.32c-5.94,0-8.84,4.85-8.84,10.37s2.61,11.13,8.8,11.13a8.22,8.22,0,0,0,7-3.36h.08Z"
                transform="translate(0 -0.18)"
              ></path>
            </svg>
          </a>
          <ul class="navigation__menu navigation__menu--main hidden--until-l">
            <li class="navigation__menu-item navigation__menu-item--active">
              jobs
            </li>
            <li class="navigation__menu-item">
              <a href="/#">employers</a>
            </li>
            <li class="navigation__menu-item">
              <a href="/#">about us</a>
            </li>
            <li class="navigation__menu-item">
              <a href="/#">career</a>
            </li>
            <li class="navigation__menu-item">
              <a href="/#">join our team</a>
            </li>
            <li class="navigation__menu-item">
              <a href="/#">workforce 360</a>
            </li>
          </ul>
          <ul class="navigation__service">
            <li class="navigation__service-item">
              <a href="/#" class="navigation__service-link">
                <span class="icon icon--inline">
                  <svg id="heart" viewBox="0 0 20 20">
                    <path d="M9.9964,16.9999 C10.5474,17.0169 11.0484,16.6809 11.2964,16.4489 C11.6834,16.1339 11.9354,15.8769 12.2044,15.6059 L12.4894,15.3209 C13.2014,14.6009 13.9214,13.8309 14.6184,13.0429 C15.4474,12.1049 16.0584,11.3589 16.5974,10.6229 C16.8654,10.2459 17.1784,9.8069 17.4414,9.3229 C17.5584,9.1259 17.6624,8.8979 17.7804,8.5929 C17.8494,8.4049 17.9024,8.1859 17.9514,7.8819 C18.1034,6.8629 17.9004,5.8179 17.3794,4.9549 C16.8394,4.0439 15.9754,3.3799 15.0064,3.1259 C14.0244,2.8589 12.9004,3.0349 12.0584,3.5849 C11.6204,3.8659 11.2474,4.2189 10.9444,4.6379 L10.0014,6.0589 L9.0314,4.6069 C8.7464,4.2139 8.3644,3.8539 7.9384,3.5839 C7.0864,3.0319 5.9614,2.8579 4.9914,3.1259 C4.0144,3.3859 3.1524,4.0519 2.6184,4.9569 C2.0964,5.8269 1.8944,6.8709 2.0504,7.9029 C2.0994,8.2009 2.1504,8.4129 2.2264,8.6189 C2.3314,8.8909 2.4394,9.1249 2.5444,9.2999 C2.8224,9.8079 3.1364,10.2479 3.4134,10.6369 C3.9434,11.3599 4.5544,12.1069 5.3844,13.0469 C6.1054,13.8589 6.8054,14.6069 7.5204,15.3309 L7.7774,15.5869 C8.0444,15.8559 8.3084,16.1219 8.6484,16.4039 L8.8104,16.5289 C8.9724,16.6569 9.0894,16.7489 9.2774,16.8389 C9.4974,16.9439 9.7384,17.0369 9.9964,16.9999 M10.0744,19.0009 C10.0364,19.0009 9.9984,18.9999 9.9604,18.9989 C9.4494,18.9689 8.9094,18.8779 8.4204,18.6459 C8.0244,18.4579 7.7714,18.2569 7.5674,18.0959 L7.4174,17.9789 C6.9694,17.6109 6.6594,17.2989 6.3594,16.9979 L6.1074,16.7459 C5.3574,15.9879 4.6344,15.2139 3.8874,14.3739 C3.0134,13.3829 2.3674,12.5929 1.7924,11.8089 C1.4754,11.3639 1.1254,10.8719 0.8064,10.2899 C0.6594,10.0429 0.5074,9.7179 0.3554,9.3249 C0.1974,8.8959 0.1244,8.5229 0.0734,8.2129 C-0.1506,6.7089 0.1424,5.1939 0.8994,3.9329 C1.6944,2.5869 2.9974,1.5869 4.4694,1.1959 C5.9854,0.7759 7.6904,1.0399 9.0174,1.8999 C9.3714,2.1249 9.7004,2.3859 10.0004,2.6809 C10.2984,2.3879 10.6224,2.1299 10.9724,1.9049 C12.2904,1.0439 13.9934,0.7769 15.5214,1.1939 C16.9854,1.5769 18.2924,2.5749 19.0954,3.9269 C19.8524,5.1829 20.1494,6.6979 19.9284,8.1899 C19.8554,8.6309 19.7714,8.9669 19.6534,9.2949 C19.4844,9.7299 19.3374,10.0469 19.1804,10.3119 C18.8764,10.8699 18.5114,11.3819 18.2184,11.7939 C17.6334,12.5919 16.9874,13.3829 16.1164,14.3679 C15.3934,15.1849 14.6484,15.9809 13.9014,16.7369 L13.6264,17.0129 C13.3314,17.3119 13.0254,17.6199 12.6054,17.9579 C12.0854,18.4479 11.1164,19.0009 10.0744,19.0009"></path>
                  </svg>
                </span>
                <span
                  class="favorites__counter hidden--until-l"
                  id="maxCounter"
                >
                  0
                </span>
              </a>
            </li>
            <li class="navigation__service-item">
              <a
                href="#"
                class="navigation__service-link navigation__service-my-randstad"
                data-rs-popover-trigger="loggedOut"
              >
                <span class="icon icon--inline">
                  <svg id="account" viewBox="0 0 20 20">
                    <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                  </svg>
                </span>
                <span class="icon icon--xs icon--inline hidden--from-l">
                  <svg id="chevron-down-8" viewBox="0 0 8 8">
                    <path d="M8,2.5 C8,2.756 7.902,3.012 7.707,3.207 L4.707,6.207 C4.316,6.598 3.684,6.598 3.293,6.207 L0.293,3.207 C-0.098,2.816 -0.098,2.184 0.293,1.793 C0.684,1.402 1.316,1.402 1.707,1.793 L4,4.086 L6.293,1.793 C6.684,1.402 7.316,1.402 7.707,1.793 C7.902,1.988 8,2.244 8,2.5"></path>
                  </svg>
                </span>
                <span class="hidden--until-l">my randstad</span>
              </a>
            </li>
            <li class="navigation__service-item hidden--from-l">
              <button
                class="button--icon-only button--hamburger"
                data-rs-navigation-menu-icon="true"
              >
                <span class="icon icon--hamburger"></span>
              </button>
            </li>
          </ul>
          <div class="navigation__link-bar hidden--until-l">
            <ul class="top-link">
              <li class="top-link__item">
                <a href="/#"> </a>
              </li>
              <li class="top-link__item">
                <a href="/#"> </a>
              </li>
              <li class="top-link__item">
                <a href="/#"> </a>
              </li>
            </ul>
          </div>
          <div class="popover   bg-brand--off-white" data-rs-popover="loggedIn">
            <div class="popover__dialog">
              <div class="popover__title">
                <div class="person-profile">
                  <div class="person-profile__initials text--alternative">
                    JD
                  </div>
                  <div class="person-profile__profile">
                    <span class="person-profile__eyebrow text--alternative">
                      welcome
                    </span>
                    Jon Dahl
                  </div>
                </div>
              </div>
              <ul class="link-list divider">
                <li class="link-list__item">
                  <a href="" class="link-list__link">
                    <span class="icon icon--inline">
                      <svg id="account" viewBox="0 0 20 20">
                        <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                      </svg>
                    </span>
                    overview
                  </a>
                </li>
                <li class="link-list__item">
                  <a href="" class="link-list__link">
                    <span class="icon icon--inline">
                      <svg id="account" viewBox="0 0 20 20">
                        <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                      </svg>
                    </span>
                    my applications
                  </a>
                </li>
                <li class="link-list__item">
                  <a href="" class="link-list__link">
                    <span class="icon icon--inline">
                      <svg id="account" viewBox="0 0 20 20">
                        <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                      </svg>
                    </span>
                    job preference
                  </a>
                </li>
                <li class="link-list__item">
                  <a href="" class="link-list__link">
                    <span class="icon icon--inline">
                      <svg id="account" viewBox="0 0 20 20">
                        <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                      </svg>
                    </span>
                    profile
                  </a>
                </li>
                <li class="link-list__item">
                  <a href="" class="link-list__link">
                    <span class="icon icon--inline">
                      <svg id="account" viewBox="0 0 20 20">
                        <path d="M10,3 C11.654,3 13,4.346 13,6 C13,7.654 11.654,9 10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 M12.236,10.449 C13.869,9.626 15,7.953 15,6 C15,3.239 12.762,1 10,1 C7.238,1 5,3.239 5,6 C5,7.953 6.131,9.626 7.764,10.449 C4.438,11.42 2,14.491 2,18.125 L2,19 C2,19.552 2.447,20 3,20 C3.553,20 4,19.552 4,19 L4,18.125 C4,14.816 6.691,12.125 10,12.125 C13.309,12.125 16,14.816 16,18.125 L16,19 C16,19.552 16.447,20 17,20 C17.553,20 18,19.552 18,19 L18,18.125 C18,14.491 15.562,11.42 12.236,10.449"></path>
                      </svg>
                    </span>
                    settings
                  </a>
                </li>
              </ul>
              <div class="popover__footer">
                <a href="" class="popover__footer--link text--alternative">
                  log out
                </a>
              </div>
            </div>
          </div>
          <div
            class="modal__overlay modal__overlay--light"
            data-rs-popover-overlay="true"
          ></div>
          <div
            class="popover    bg-brand--off-white"
            data-rs-popover="loggedOut"
          >
            <div class="popover__dialog">
              <div class="popover__title">
                start your <span>jobhunt</span>
              </div>
              <div class="body-copy">
                <ul class="list--checks">
                  <li>register in 1 minute</li>
                  <li>apply faster to jobs</li>
                  <li>have better matching jobs</li>
                </ul>
              </div>
              <div class="popover__action">
                <a
                  href="#"
                  class="button button--m button--filled button--full-width"
                >
                  register for free
                </a>
                <a href="#" class="button button--m button--full-width">
                  log in to my randstad
                </a>
              </div>
            </div>
          </div>
          <div
            class="modal__overlay modal__overlay--light"
            data-rs-popover-overlay="true"
          ></div>
        </div>
        <ul class="navigation__menu navigation__menu--sub hidden--until-l">
          <li class="navigation__menu-item navigation__menu-item--active">
            request a call back
          </li>
          <li class="navigation__menu-item">
            <a href="/#">submit a request</a>
          </li>
          <li class="navigation__menu-item">
            <a href="/#">areas of expertise</a>
          </li>
          <li class="navigation__menu-item">
            <a href="/#">our solutions</a>
          </li>
          <li class="navigation__menu-item">
            <a href="/#">our offices</a>
          </li>
          <li class="navigation__menu-item">
            <a href="/#">workforce insights</a>
          </li>
        </ul>
        <div class="navigation__bottom">
          <nav class="breadcrumb" aria-label="breadcrumb">
            <a href="/#" class="breadcrumb__link hidden--from-l">
              one level higher
            </a>
            <ul class="breadcrumb__list hidden--until-l">
              <li class="breadcrumb__item">
                <a href="/#" class="breadcrumb__link">
                  home
                </a>
              </li>
              <li class="breadcrumb__item">
                <a href="/#" class="breadcrumb__link">
                  job seeker
                </a>
              </li>
              <li class="breadcrumb__item">find a job</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div
      class="modal modal--navigation hidden--from-l"
      data-rs-navigation="true"
    >
      <div class="modal__dialog bg-brand--off-white">
        <div class="modal__header" data-rs-navigation-modal-header="true"></div>
        <div class="modal__main" data-rs-navigation-modal-main="true">
          <nav class="navigation-accordion">
            <ul class="link-list link-list--single accordion accordion--s">
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">job seeker</a>
                    <span
                      class="collapsible__button"
                      data-rs-collapsible-button="true"
                      role="button"
                    ></span>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                >
                  <ul class="navigation-accordion__sub">
                    <li>
                      <a href="/#">request a call back</a>
                    </li>
                    <li>
                      <a href="/#">submit a request</a>
                    </li>
                    <li>
                      <a href="/#">areas of expertise</a>
                    </li>
                    <li>
                      <a href="/#">our solutions</a>
                    </li>
                    <li>
                      <a href="/#">our offices</a>
                    </li>
                    <li>
                      <a href="/#">workforce insights</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">employers</a>
                    <span
                      class="collapsible__button"
                      data-rs-collapsible-button="true"
                      role="button"
                    ></span>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                >
                  <ul class="navigation-accordion__sub">
                    <li>
                      <a href="/#">request a call back</a>
                    </li>
                    <li>
                      <a href="/#">submit a request</a>
                    </li>
                    <li>
                      <a href="/#">areas of expertise</a>
                    </li>
                    <li>
                      <a href="/#">our solutions</a>
                    </li>
                    <li>
                      <a href="/#">our offices</a>
                    </li>
                    <li>
                      <a href="/#">workforce insights</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">about us</a>
                    <span
                      class="collapsible__button"
                      data-rs-collapsible-button="true"
                      role="button"
                    ></span>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                >
                  <ul class="navigation-accordion__sub">
                    <li>
                      <a href="/#">job seekers sub</a>
                    </li>
                    <li>
                      <a href="/#">job seekers sub 2</a>
                    </li>
                    <li>
                      <a href="/#">job seekers sub 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">career advice</a>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                ></div>
              </li>
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">join our team</a>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                ></div>
              </li>
              <li class="link-list__item">
                <div
                  class="collapsible__trigger"
                  data-rs-collapsible="navigation"
                  aria-expanded="false"
                >
                  <div class="link-list__link">
                    <a href="/#">workforce 360</a>
                  </div>
                </div>
                <div
                  class="collapsible__content"
                  data-rs-collapsible-content="true"
                  aria-hidden="true"
                ></div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="modal__footer divider divider--top">
          <a href="/#" class="button button--filled button--full-width">
            my randstad
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
