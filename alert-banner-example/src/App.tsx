import { Link, NavLink, Outlet } from "react-router-dom";

const activeClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : "";

function App() {
  return (
    <>
      <div id="sidebar">
        <h1>
          <Link to="/">Lekko Alert Banner Example</Link>
        </h1>
        <nav>
          <h2>Pages</h2>
          <ul>
            <li>
              <NavLink to="home" className={activeClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="beta" className={activeClassName}>
                Beta ✨
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Integrations</h2>
          <ul>
            <li>
              <NavLink to="integrations/github" className={activeClassName}>
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink to="integrations/slack" className={activeClassName}>
                Slack
              </NavLink>
            </li>
            <li>
              <NavLink to="integrations/openai" className={activeClassName}>
                OpenAI
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div id="page">
        <Outlet />
      </div>
    </>
  );
}

export default App;
