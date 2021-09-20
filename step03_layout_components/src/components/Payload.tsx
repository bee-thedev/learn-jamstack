import React, { ReactNode } from "react";
import { Link } from "gatsby";

type PayloadProps = {
    children: ReactNode
}

export default ({ children }: PayloadProps) => {
  return (
    <div>
      <h1>This is Payload</h1>
      <Link to="/">Back to home</Link>
  
      {children}
    </div>
  )
}