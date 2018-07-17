import React, { Component } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import listingData from "../data/listingData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      elevator: false,
      basement: false,
      swimming_pool: false
    };

    this.change = this.change.bind(this);
  }
  change(event) {
    const { name } = event.target;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingData={this.state.listingData} />
        </section>
      </div>
    );
  }
}

export default App;
