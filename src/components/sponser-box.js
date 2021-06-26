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
      <h3>Space for sponser the issue</h3>
      <a className="know" href="/sponsership">Know more about sponsoership here</a>
      <div className="sponser-box">
        <a href="http://3dicons.co" target="__blank" className="sponser-wrap">
          <div className="sponser-img">
            <img src="/sponser-home.jpg" />
          </div>
          <div className="sponser-txt">
            <p>Get beautifully crafted open source 3dicons <img src="/arrow.svg"/></p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SponserBox
