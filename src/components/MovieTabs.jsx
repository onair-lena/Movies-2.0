import React from 'react'

const MovieTabs = () => {
  return (
    <div>
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div className="nav-link active">
            Porular
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            Revenue
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            Vote
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MovieTabs