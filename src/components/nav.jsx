import { HashLink } from 'react-router-hash-link';

const nav = () => {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li className="nav-ul-li-items">
          <HashLink smooth to="/#projects-banner">
            Click To Go Projects
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default nav;
