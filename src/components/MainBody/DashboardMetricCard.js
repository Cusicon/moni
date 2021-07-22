import { Col } from "react-bootstrap";

function DashboardMetricCard(props) {
  return (
    <Col>
      <div className="Card DashboardMetricCard">
        <h6>
          <small>{props.cardTitle}</small>
        </h6>
        <h3>
          <b>{props.cardDigit}</b>
        </h3>
      </div>
    </Col>
  );
}

export default DashboardMetricCard;
