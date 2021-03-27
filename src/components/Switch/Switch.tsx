import React from "react";

interface Props {
  [x: string]: any
}

export const Switch: React.FC<Props> = ({...props}) => (
      <label className="switch">
        <input type="checkbox" {...props}/>
          <span className="slider round"></span>
      </label>
)

