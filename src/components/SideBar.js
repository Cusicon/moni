import '../styles/SideBar.css';
import { Archive, CardGiftcard, Dashboard, ExitToApp, People, PieChart, Settings, } from '@material-ui/icons';

function SideBar() {
  return (
    <div className="SideBar">
      <header className="SideBar-Header">
        <img src={`${process.env.PUBLIC_URL}/logo-text-alt.png`} className="SideBar-logo" alt="logo" />
      </header>
      <div className="SideBar-Menu">
        <ul>
          <li>
            <a href="/" className="active-menu">
              <Dashboard className="v-align-m" />
              <b>Dashboard</b>
            </a>
          </li>
          <li>
            <a href="/">
              <Archive className="v-align-m" />
              <b>Products</b>
            </a>
          </li>
          <li>
            <a href="/">
              <PieChart className="v-align-m" />
              <b>Ads</b>
            </a>
          </li>
          <li>
            <a href="/">
              <CardGiftcard className="v-align-m" />
              <b>Loyalty</b>
            </a>
          </li>
          <li>
            <a href="/">
              <People className="v-align-m" />
              <b>Customers</b>
            </a>
          </li>
          <li>
            <a href="/">
              <Settings className="v-align-m" />
              <b>Settings</b>
            </a>
          </li>
          <li>
            <a href="/">
              <ExitToApp className="v-align-m" />
              <b>Logout</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
