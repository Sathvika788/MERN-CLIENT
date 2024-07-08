import React ,{useEffect,useReducer,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './compoents/Header';
import login from'./compoents/login';
import register from './compoents/register';
import feedback from './compoents/Feedback';
const root=document.getElementById('root')
const VirtualRoot=ReactDOM.createRoot(root);
VirtualRoot.render(
  <Router>
  <div>
    <Header/>
    <Feedback/>
    <Routes>
      <Route path="/login" element={<login/>}></Route>
      <Route path="/login" element={<register/>}></Route>
    </Routes>
  </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
