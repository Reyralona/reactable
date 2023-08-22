import React, { Component } from "react";
import logdata from "../read";

class Element extends Component {
  el_data = logdata(this.props.number);
  number = this.el_data.number;
  atomic_mass = this.el_data.atomic_mass;
  symbol = this.el_data.symbol;
  name = this.el_data.name;
  category = this.el_data.category;
  color = "";

  render() {
    // if atomic mass is too long to fit
    if (String(this.atomic_mass).length > 7) {
      this.atomic_mass = String(this.atomic_mass).slice(0, 6);
    }

    // assigns color
    switch (this.category) {
      case "diatomic nonmetal":
        this.color = "rgb(35, 122, 204)";
        break;
      case "noble gas":
        this.color = "rgb(214, 44, 44)";
        break;
      case "alkali metal":
        this.color = "rgb(58, 141, 58)";
        break;
      case "alkaline earth metal":
        this.color = "rgb(192, 72, 57)";
        break;
      case "metalloid":
        this.color = "rgb(197, 125, 30)";
        break;
      case "polyatomic nonmetal":
        this.color = "rgb(35, 122, 204)";
        break;
      case "transition metal":
        this.color = "rgb(159, 82, 223)";
        break;
      case "lanthanide":
        this.color = "rgb(13, 59, 209)";
        break;
      case "actinide":
        this.color = "rgb(128, 69, 30)";
        break;
      case "post-transition metal":
        this.color = "rgb(50, 145, 102)";
        break;
      default:
        this.color = "rgb(63, 63, 63)";
    }

    return (
      <div
        className="chemical_element"
        style={{
          backgroundColor: `${this.color}`,
        }}
        onClick={() => {
          console.log(logdata(this.number));
        }}
      >
        <div className="num_mass">
          <div>{this.number}</div>
          <div>{this.atomic_mass}u</div>
        </div>
        <div className="symbol">{this.symbol}</div>
        <div className="name">{this.name}</div>
      </div>
    );
  }
}

export default Element;
