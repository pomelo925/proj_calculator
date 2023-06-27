import React from "react"
import Introduction from "../Homepage/Homepage"
import Calculator from "../Calculator/Calculator"
import { Routes, Route, Link } from 'react-router-dom'

import './main.css'

const Main = ()=>{
  return(
    <div>
      <nav className="nav-cute">
        <ul>
          <Link to="/intro"> Introduction </Link>
          <Link to="/calculator"> Calculator </Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/intro" element={<Introduction />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default Main