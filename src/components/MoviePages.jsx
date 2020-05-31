import React from 'react'

const MoviePages = (props) => {
  const { page, pages, updateNextPage, updatePrevPage } = props
  
  const nextClick = (value) => {
    return () => {
    updateNextPage(value)
    }
  }

  const prevClick = (value) => {
    return () => {
    updatePrevPage(value)
    }
  }

// const getClassLink = (value) => {
//   return `nav-link ${
//     sort_by === value ? "active" : ""
//     }`
// }

  return (
    <div className="row col-9 flex justify-content-between">
      <button type="button" className="col-2 h4" onClick={prevClick(props.page)}>Prev</button>
      <div className="h4 col-5 text-center">
        {page} of {pages}
      </div>
      <button type="button" className="col-2 h4" onClick={nextClick(props.page)}>Next</button>
    </div>
  )
}

export default MoviePages