import { NavLink } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({isActive}) => {
            return isActive ? 'nav-link active' : 'nav-link'
          }}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/SavedCandidates" className={({isActive}) => {
            return isActive ? 'nav-link active' : 'nav-link'
          }}>Saved</NavLink>
      </li>
    </ul>
  )
};

export default Nav;
