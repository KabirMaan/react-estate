import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();

    this.boroughs = this.boroughs.bind(this);
    this.houseType = this.houseType.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentDidMount() {
    this.props.populateForms();
  }

  boroughs() {
    if (this.props.globalState.populateFormsData.boroughs != undefined) {
      const { boroughs } = this.props.globalState.populateFormsData;

      return boroughs.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }

  houseType() {
    if (this.props.globalState.populateFormsData.houseType != undefined) {
      const { houseType } = this.props.globalState.populateFormsData;

      return houseType.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      const { bedrooms } = this.props.globalState.populateFormsData;
      bedrooms.sort();

      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id="filter">
        <h4>Filter</h4>
        <label htmlFor="borough">Borough</label>
        <select
          name="borough"
          className="filters neighbourhood"
          onChange={this.props.change}
        >
          <option value="All">All</option>
          {this.boroughs()}
        </select>
        <label htmlFor="houseType">House Type</label>
        <select
          name="houseType"
          className=" filters housetype"
          onChange={this.props.change}
        >
          <option value="All">All</option>
          {this.houseType()}
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select
          name="bedrooms"
          className="filters rooms"
          onChange={this.props.change}
        >
          {this.bedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input
            type="text"
            name="min_price"
            className="min-price"
            onChange={this.props.change}
            value={this.props.globalState.min_price}
          />
          <input
            type="text"
            name="max_price"
            className="max-price"
            onChange={this.props.change}
            value={this.props.globalState.max_price}
          />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input
            type="text"
            name="min_floor_space"
            className="min-floor-space"
            onChange={this.props.change}
            value={this.props.globalState.min_floor_space}
          />
          <input
            type="text"
            name="max_floor_space"
            className="max-floor-space"
            onChange={this.props.change}
            value={this.props.globalState.max_floor_space}
          />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input
              type="checkbox"
              value="elevator"
              name="elevator"
              onChange={this.props.change}
            />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input
              type="checkbox"
              value="swimming_pool"
              name="swimming_pool"
              onChange={this.props.change}
            />
          </label>
          <label htmlFor="extras">
            <span>Basment</span>
            <input
              type="checkbox"
              value="basement"
              name="basement"
              onChange={this.props.change}
            />
          </label>
        </div>
      </section>
    );
  }
}

export default Filter;
