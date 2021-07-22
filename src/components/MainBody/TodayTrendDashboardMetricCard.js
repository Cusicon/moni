import TodayTrendChart from './TodayTrendChart'
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


function TodayTrendDashboardMetricCard(props) {
  return (
    <Col>
      <div className="Card TodayTrendDashboardMetricCard p-0">
        <Row>
          <Col lg={8}>
            <div className="Today-Trend-LeftBar">
              <header className="Today-Trend-Header">
                <h5>
                  <b>Today's Trend</b>
                  <small className="Filter-Icon">
                    <FontAwesomeIcon icon={faFilter} />
                  </small>
                </h5>
                <div className="Today-Trend-SubHeader">
                  <Row>
                    <Col lg={8}>
                      <span>as of 23rd May, 2021, 09:42 pm</span>
                    </Col>
                    <Col lg={4} className="text-right">
                      <span className="Today-Metric active">Today</span>
                      <span className="Yesterday-Metric">Yesterday</span>
                    </Col>
                  </Row>
                </div>
              </header>
              <div className="ChartCon">
                <TodayTrendChart />
              </div>
            </div>
          </Col>
          <Col lg={4} className="Today-Trend-RightBar-Border">
            <div className="Today-Trend-RightBar">
              <ul>
                <li>
                  <a href="/" className="text-center">
                    <h6>
                      <small>{props.trendCustomerTitle}</small>
                    </h6>
                    <h4>
                      <b>{props.trendCustomerDigit}</b>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-center">
                    <h6>
                      <small>{props.trendTransactionsTitle}</small>
                    </h6>
                    <h4>
                      <b>{props.trendTransactionsDigit}</b>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-center">
                    <h6>
                      <small>{props.trendSalesTitle}</small>
                    </h6>
                    <h4>
                      <b>{props.trendSalesDigit}</b>
                    </h4>
                  </a>
                </li>
                <li>
                  <a href="/" className="text-center">
                    <h6>
                      <small>{props.trendPointsTitle}</small>
                    </h6>
                    <h4>
                      <b>{props.trendPointsDigit}</b>
                    </h4>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default TodayTrendDashboardMetricCard;
