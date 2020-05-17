import React from 'react';
import './App.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from './images/covid19.png';
import {Link} from "react-router-dom";

function Nav() {
  return (
   <nav class="navbar navbar-expand-sm bg-dark navbar-dark primary-color justify-content-between fixed-top">
       <a class="navbar-logo" href="#">  <img src={img} alt="logo" style={{width: "40px", margin:"2px"}}/></a> <br/>
       <a class="navbar-brand" href="#">COVID-19 Tracker and Map</a>
       <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >      
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <Link class="nav-link"  to='/Tracker'>
                <li class="nav-item">Tracker</li>
              </Link>
              <Link class="nav-link" to='/Map'>
                <li class="nav-item">Map</li>
              </Link>
            </ul> 
        </div>
        <div class="navbar-collapse collapse order-3 dual-collapse2" id="collapsibleNavbar">
          <div class="btn-group">
            <a class="btn btn-info btn-lg btn-outline-default" href="https://github.com/Ying-Coco/coronavirus_tracker" role="button" id="github">GitHub</a>
            <a class="btn btn-info btn-lg btn-outline-default" href="https://github.com/mathdroid/covid-19-api" role="button" id="math">Mathdroid</a>
            <a class="btn btn-info btn-lg btn-outline-default" href="https://github.com/NovelCOVID/API" role="button" id="novel">NovelCOVID</a> 
          </div>
        </div>
   </nav>
  );
}

export default Nav;
 