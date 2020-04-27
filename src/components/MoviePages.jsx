import React from 'react'

const MoviePages = (props) => {
  const { pages } = props
  
//   const handleClick = (value) => {
//     return () => {
//     updateSortBy(value)
//     }
//   }

// const getClassLink = (value) => {
//   return `nav-link ${
//     sort_by === value ? "active" : ""
//     }`
// }

  return (
    <div className="row col-9">
      <div className="col-2 h4">Prev</div>
      <div className="pb-4 h4 col-8 text-center">
        {pages}
      </div>
      <div className="col-2 h4 text-right">Next</div>
    </div>


    // <div>
    //   <ul className="tabs nav nav-pills">
    //     <li className="nav-item">
    //       <div 
    //         className={getClassLink("popularity.desc")}
    //         onClick={handleClick("popularity.desc")}
    //         >
    //         Porular
    //       </div>
    //     </li>
    //     <li className="nav-item">
    //       <div className={getClassLink("revenue.desc")}
    //         onClick={handleClick("revenue.desc")}
    //       >
    //         Revenue
    //       </div>
    //     </li>
    //     <li className="nav-item">
    //     {/* <div className={`nav-link ${sort_by === "vote_average.desc" ? "active" : ""}`} */}
    //     <div className={getClassLink("vote_average.desc")}
    //       onClick={handleClick("vote_average.desc")}
    //     >
    //         Vote
    //       </div>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default MoviePages