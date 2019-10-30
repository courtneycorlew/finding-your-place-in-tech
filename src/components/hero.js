import React from "react"
import PropTypes from "prop-types"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import EmailListForm from './EmailListForm'
const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Finding Your Place In Tech</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      A community and site full of resources to help you find your place in tech!
    </p>
    <EmailListForm />
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <MockupContent />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
