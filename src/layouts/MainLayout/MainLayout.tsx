import React from "react";
import { Header } from "../../components";

export const MainLayout: React.FC = ({ children }) => {

  return (
      <div className="main-layout  min-vh-100">
        <Header/>
        <div className="h-100 py-5">
          <div className="container h-100">
            { children }
          </div>
        </div>
      </div>
  )
}
