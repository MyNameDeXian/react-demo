import React, { Component } from "react"
import ReactDom from "react-dom"
import "./assets/common.js"
import "./assets/flexStyle.scss"
import "./assets/common.scss"
import Home from './pages/Home'

ReactDom.render(
	 <Home/>, 
	document.getElementById("app"))