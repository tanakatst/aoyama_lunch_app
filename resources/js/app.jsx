import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Top } from "./components/top";

import Posts from "./Posts";
const App = ()=>{
    return(
        <>
        <div style={{marginBottom:'150px'}}>
        <Navbar/>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Top />}/>
                <Route path="posts" element={<Posts/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}