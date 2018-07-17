import React, { Component } from "react";

class Filter extends Component {
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
          <option value="Barnet">Barnet</option>
          <option value="Camden">Camden</option>
          <option value="Harrow">Harrow</option>
        </select>
        <label htmlFor="houseType">House Type</label>
        <select
          name="houseType"
          className=" filters housetype"
          onChange={this.props.change}
        >
          <option value="All">All</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
          <option value="Studio">Studio</option>
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select
          name="bedrooms"
          className="filters rooms"
          onChange={this.props.change}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6+</option>
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
