import React from 'react'

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props
  return (
    <div>
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div 
            className={`nav-link ${
            sort_by === "popularity.desc" 
            ? "active" 
            : ""
            }`}
            onClick={() => {
              updateSortBy("popularity.desc")
            }}
            >
            Porular
          </div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""}`}
            onClick={() => {
              updateSortBy("revenue.desc")
            }}
          >
            Revenue
          </div>
        </li>
        <li className="nav-item">
        <div className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`}
          onClick={() => {
            updateSortBy("vote_average.desc")
          }}
        >
            Vote
          </div>
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