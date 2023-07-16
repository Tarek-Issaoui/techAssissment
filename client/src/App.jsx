
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./component/Discover";
import Principal from "./component/Principal";
import Favourite from "./component/Favourite";
import TestData from '../data.json'
// import { DataProvider } from "./component/Context";
import { useState } from "react";
import { Context } from "./component/Context";
function App() {
  const [data,setData]=useState(TestData)

  return (
    <Context.Provider value={[data,setData]}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Principal />}/>
          <Route path="/discover" element={<Discover />} />
          <Route path="/favourite" element={<Favourite />}/>
      </Routes>
    </BrowserRouter> 
    </Context.Provider>
  )
}

export default App
