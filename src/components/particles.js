import React, { Component } from "react"
import Particles from "react-particles-js"

class Canvas extends Component {
  state = { width: "0px" }
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
    })
  }
  render() {
    const { width } = this.state
    return (
      <Particles
        height="70vh"
        width={width}
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            color: {
              value: ["#F2994A", "#56CCF2", "#6FCF97", "#BB6BD9", "#EB5757"],
            },
            shape: {
              type: ["circle", "triangle", "edge"],
              stroke: {
                width: 0,
                color: "#a6026a",
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 15,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                size_min: 5,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    )
  }
}

export default Canvas
