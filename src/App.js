import React from "react";
import Weather from "./Weather"



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London"/>
        <footer>
        <p>*for mobile phone view, use rotate.</p>
        This project was codded by <a
          href="https://github.com/dashboard"
          target="_blank"rel='noreferrer'>
          Liliana Tuta</a>,{" "}is open sourced on <a
          href="https://github.com/lilianatutza/another-w-app-react"
          target="_blank"rel='noreferrer'>  GitHub
         </a> and is hosted on
        <a
          href="https://splendorous-platypus-539b6e.netlify.app/"
          target="_blank"rel='noreferrer'> Netifly.
          </a>
          
        </footer>
        </div>
    </div>
  );
}
