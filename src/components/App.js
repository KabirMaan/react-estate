import React, { Component } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Listings from "./Listings";
import listingData from "../data/listingData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingData
    };
  }
  render() {
    console.log(this.state.listingData);
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings listingData={this.state.listingData} />
        </section>
      </div>
    );
  }
}

export default App;
