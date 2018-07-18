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
      borough: "All",
      houseType: "All",
      bedrooms: 2,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      basement: false,
      swimming_pool: false,
      filteredData: listingData,
      populateFormsData: ""
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
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
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.state.listingData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorspace >= this.state.min_floor_space &&
        item.floorspace <= this.state.max_floor_space &&
        item.bedrooms >= this.state.bedrooms
      );
    });

    if (this.state.borough != "All") {
      newData = newData.filter(item => {
        return item.borough == this.state.borough;
      });
    }

    if (this.state.houseType != "All") {
      newData = newData.filter(item => {
        return item.houseType == this.state.houseType;
      });
    }
    this.setState({
      filteredData: newData
    });
  }

  populateForms() {
    //city
    let boroughs = this.state.listingData.map(item => {
      return item.borough;
    });

    boroughs = new Set(boroughs);
    boroughs = [...boroughs];

    //houseType
    let houseType = this.state.listingData.map(item => {
      return item.houseType;
    });

    houseType = new Set(houseType);
    houseType = [...houseType];

    //bedrooms
    let bedrooms = this.state.listingData.map(item => {
      return item.bedrooms;
    });

    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];

    this.setState(
      {
        populateFormsData: {
          houseType,
          bedrooms,
          boroughs
        }
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
          <Filter
            change={this.change}
            globalState={this.state}
            populateForms={this.populateForms}
          />
          <Listings listingData={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

export default App;
