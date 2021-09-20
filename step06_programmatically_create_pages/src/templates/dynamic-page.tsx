import React from "react";
// import {Link} from "gatsby";

export default ({pageContext}) => {
  return (
    <div>
      <div>Presenting to you an exclusive site from  {pageContext.name}</div>
      <div> Exists by the name of {pageContext.site}</div>
      <div>
        <span style={{backgroundColor: "lightblue", color:"red"}}>
        Works under the psuedonym</span> <strong>{pageContext.createdby}</strong>
      </div>
      {/* <Link to={`blog/${pageContext.next}`}>To next page</Link>
      <Link to={`blog/${pageContext.back}`}>To previous page</Link> */}
    </div>
  )
}