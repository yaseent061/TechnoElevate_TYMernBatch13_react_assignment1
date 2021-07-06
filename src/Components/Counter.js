import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faSync } from "@fortawesome/free-solid-svg-icons"
import "./Counter.css"

export default class Counter extends Component {
  state = {
    counter: 0,
  }
  render() {
    return (
      <table border="1px solid black">
        <tr>
          <td colSpan="3" id="value">
            {this.state.counter}
          </td>
        </tr>
        <tr style={{ height: "100px" }}>
          <td
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 })
            }}
            style={{ background: "green" }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </td>
          <td
            onClick={() => {
              this.setState({ counter: 0 })
            }}
            style={{ background: "yellow" }}
          >
            <FontAwesomeIcon icon={faSync} />
          </td>
          <td
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 })
            }}
            style={{ background: "red" }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </td>
        </tr>
      </table>
    )
  }
}
