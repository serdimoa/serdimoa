import React from 'react';
import { Link, IndexLink } from 'react-router';

function Footer() {
  return (
    <div className="footer clearfix">
      <div className="footer__content clearfix">
        <Link className="logo" to="/">
          <svg
            width="50px"
            height="42px"
            viewBox="0 0 347 456"
          >
            <g id="Слой_x0020_1">
              <path
                className="fil0"
                d="M119 233l101 -102c-4,-21 -16,-33 -26,-44l-175 176c-20,20 -19,13 -19,51l0 141 135 0c56,0 71,-6 110,-31 37,35 24,30 51,31l50 1c-22,-22 0,0 -72,-71 20,-60 20,-240 -3,-306l76 -77c-71,1 -67,-2 -76,8l-29 29c-15,-9 -24,-18 -44,-25 -41,-17 -162,-16 -198,-11l0 160c-1,30 1,23 24,45l12 12 35 -34 -14 -13c-13,-12 -13,-7 -8,-121 50,0 128,-6 157,25 33,34 31,64 31,110 0,134 21,219 -99,219l-89 0c0,-19 -5,-95 5,-108l31 -31 109 107c26,-6 26,-42 26,-43l-101 -98z"
              />
            </g>
          </svg>
          <span className="logo__text">Kravtsov Dmitry</span><br />
          <span className="logo__job">Web Developer</span>
        </Link>
        <ul>
          <li><Link to="aboutMe">Обо мне</Link></li>
          <li><IndexLink activeClassName="active" to="/">Портфолио</IndexLink></li>
          <li><Link to="contact">Контакты</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
