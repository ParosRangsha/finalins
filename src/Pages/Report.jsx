import React from 'react'
import Handoverentry from '../Report/Handoverentry'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

const Report = () => {
  return (
    <div className="report">
      <Container>
        <div className="contain h-[80vh]">
          <div className="flex justify-around">
            <div className="Entry bg-red-200">
              <h1>Entry Report</h1>
            </div>
            <div className="show">
              <h1>Show Report</h1>
              <ul>
                <li>
                  <Link to='entry'>Handover Report</Link>
                </li>
                <li>
                  <Link to='entry'>Shade Hold Report</Link>
                </li>
                <li>
                  <Link to='entry'>Excess Report</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Report