import React from 'react'
import { Chart } from 'react-charts'

function TodayTrendChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { x: 1.00, y: 2.01 },
          { x: 2.00, y: 4.00 },
          { x: 3.00, y: 3.08 },
          { x: 4.00, y: 6.05 },
          { x: 5.00, y: 1.85 },
          { x: 6.00, y: 8.85 },
          { x: 7.00, y: 7.08 }
        ]
      },
      {
        label: 'Series 2',
        data: [
          { x: 1.00, y: 4.10 },
          { x: 2.03, y: 3.40 },
          { x: 3.00, y: 4.20 },
          { x: 4.30, y: 2.55 },
          { x: 5.03, y: 5.85 },
          { x: 7.00, y: 7.00 }
        ]
      },
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div className="TodayTrendChart">
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default TodayTrendChart;
