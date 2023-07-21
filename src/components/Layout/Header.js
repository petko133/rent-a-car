import carLogo from '../../assets/images/rentcar.png';
import { FaBars } from 'react-icons/fa';
import classes from './Header.module.css';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className={classes['nav-center']}>
        <div className={classes['nav-header']}>
          <a href="/">
            <img
              src={carLogo}
              alt={classes.logo}
              className="logo"
              onClick={() => {}}
            />
          </a>
          <button
            className={classes['nav-toggle']}
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className={classes['links-container']} ref={linksContainerRef}>
          <ul className={classes.links} ref={linksRef}>
            <li>
              {' '}
              <a href="/vehicles">vehicles</a>
            </li>
            <li>
              {' '}
              <a href="/services">services</a>
            </li>
            <li>
              {' '}
              <a href="/about">about us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
