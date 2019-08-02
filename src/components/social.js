import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

const Social = () => (
  <>
    <a
      style={{
        textDecoration: "none",
        color: "#7647A2",
        width: "40px",
        height: "40px",
      }}
      href="https://github.com/patrikmolnar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "0px 2px 10px 50px",
          opacity: "0.8",
        }}
        icon={faGithubSquare}
      />
    </a>
    <a
      style={{ textDecoration: "none", color: "#0077B5" }}
      href="https://www.linkedin.com/in/patrikmolnar/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "0px 2px 10px 0px",
          opacity: "0.8",
        }}
        icon={faLinkedin}
      />
    </a>
    <a
      href="mailto:info@patrikmolnar.com"
      style={{ textDecoration: "none", color: "#EB5757" }}
    >
      <FontAwesomeIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "0px 2px 10px 0px",
          opacity: "0.8",
        }}
        icon={faEnvelopeSquare}
      />
    </a>
    <a
      style={{ textDecoration: "none", color: "#1A91DA" }}
      href="https://twitter.com/Packiraly"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "0px 2px 10px 0px",
          opacity: "0.8",
        }}
        icon={faTwitterSquare}
      />
    </a>
  </>
)

export default Social
