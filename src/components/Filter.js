import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood">
          <option>Barnet</option>
        </select>
        <select name="housetype" className=" filters housetype">
          <option>House</option>
        </select>
        <select name="rooms" className="filters rooms">
          <option>2</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="max-price" className="max-price" />
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input
            type="text"
            name="min-floor-space"
            className="min-floor-space"
          />
          <input
            type="text"
            name="max-floor-space"
            className="max-floor-space"
          />
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input type="checkbox" value="elevator" name="extras" />
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input type="checkbox" value="swimming-pool" name="extras" />
          </label>
          <label htmlFor="extras">
            <span>Basment</span>
            <input type="checkbox" value="basmenet" name="extras" />
          </label>
        </div>
      </section>
    );
  }
}

export default Filter;
