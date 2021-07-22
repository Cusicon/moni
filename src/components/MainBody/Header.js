import '../../styles/MainBody.css';
import { Row, Col } from "react-bootstrap"
import { ExpandMore, Notifications } from '@material-ui/icons';

function Header() {
  return (
    <header className="MainBody-Header">
      <Row>
        <Col lg={8}>
          <div className="Header-Title v-align-m">
            <h3 className="m-0 v-align-m">
              <b>Dashboard</b>
            </h3>
          </div>
        </Col>
        <Col lg={4}>
          <div className="Header-Actions">
            <ul>
              <li className="v-align-m">
                <div className="Other-Menu v-align-m">
                  <span>Pharmco</span>
                  <ExpandMore />
                </div>
              </li>
              <li className="v-align-m">
                <div className="NotificationsCon">
                  <Notifications />
                </div>
              </li>
              <li className="v-align-m">
                <div className="User-Profile v-align-m">
                  <span>Joshua Palton</span>
                  <div className="Avatar v-align-m" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/avatar.png)` }}></div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
