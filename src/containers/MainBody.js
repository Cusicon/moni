import '../styles/MainBody.css';
import Header from "../components/MainBody/Header"
import DashboardMetricCard from "../components/MainBody/DashboardMetricCard"
import TodayTrendDashboardMetricCard from "../components/MainBody/TodayTrendDashboardMetricCard"
import { Row } from 'react-bootstrap';

function MainBody() {
  return (
    <div className="MainBody">
      <Header />
      <div className="Card-Container">
        <Row>
          <DashboardMetricCard cardTitle="Total Number of Customers" cardDigit="23,596" />
          <DashboardMetricCard cardTitle="Total Number of Transactions" cardDigit="3,456" />
          <DashboardMetricCard cardTitle="Total Sale Amount" cardDigit="N4,456,787" />
          <DashboardMetricCard cardTitle="Total Points Rewarded" cardDigit="345" />
        </Row>
      </div>
      <div className="Card-Container">
        <TodayTrendDashboardMetricCard trendCustomerTitle="Customer Visits"
          trendCustomerDigit="65"
          trendTransactionsTitle="Transactions"
          trendTransactionsDigit="23"
          trendSalesTitle="Sale Amount"
          trendSalesDigit="N145,370"
          trendPointsTitle="Points Rewarded"
          trendPointsDigit="43" />
      </div>
    </div>
  );
}

export default MainBody;
