/**
 * SponserBox
 * with Gatsby's useStaticQuery component
 *
 */

import React from "react"
import Image from "gatsby-image"


const SponserBox = () => {
  return (
    <div className="sponser-feat">
      <hr/>
      <h3>Thanks to <a href="#">contra</a> for sponsoring us this week. </h3>
      <a className="know" href="/sponsership">Know more about sponsoership here</a>
      <div className="sponser-box">
        <a href="http://bit.ly/designletter-contra" target="__blank" className="sponser-wrap">
          <div className="sponser-img">
            <img src="/sponser-home.jpg" />
          </div>
          <div className="sponser-txt">
            <p>Contra’s State of Independence Report <img src="/arrow.svg"/></p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SponserBox
