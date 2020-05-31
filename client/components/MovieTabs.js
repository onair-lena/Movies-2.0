import React from 'react'

const MovieTabs = (props) => {
  const { sortBy, updateSortBy } = props

  const handleClick = (value) => {
    return () => {
      updateSortBy(value)
    }
  }

  const getClassLink = (value) => {
    return `nav-link ${sortBy === value ? 'active' : ''}`
  }

  return (
    <div>
      <ul className="flex flex-row ">
        <li className="nav-item">
          <button
            type="button"
            className={getClassLink('popularity.desc')}
            onClick={handleClick('popularity.desc')}
          >
            Porular
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={getClassLink('revenue.desc')}
            onClick={handleClick('revenue.desc')}
          >
            Revenue
          </button>
        </li>
        <li className="nav-item">
          {/* <button className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`} */}
          <button
            type="button"
            className={getClassLink('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}
          >
            Vote
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MovieTabs

// const { sort_by } = props
// return (
//   <div>
//     <ul className="tabs nav nav-pills">
//       <li className="nav-item">
//         <div className={`nav-link ${sort_by === "popularity.desc" ? "active" : ""}`}>
//           Porular
//         </div>
//       </li>
//       <li className="nav-item">
//         <div className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}>
//           Revenue
//         </div>
//       </li>
//       <li className="nav-item">
//         <div className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`}>
//           Vote
//         </div>
//       </li>
//     </ul>
//   </div>
