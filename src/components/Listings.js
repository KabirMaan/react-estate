import React, { Component } from "react";

class Listings extends Component {
  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>
        <section className="sort-by">
          <div>290 results found</div>
          <div className="sort-options">
            <select name="sort" className="sort" id="">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-th-list" />
              <i className="fas fa-th" />
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img" />
                <div className="user-details">
                  <span className="user-name">William Gunn</span>
                  <span className="post-date">02/04/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="far fa-square" />
                    <span>
                      1000ft<sup>2</sup>
                    </span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed" />
                    <span>3 Bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>£1000 / month</span>
              <span>
                <i className="fas fa-map-marker-alt" />
                Finchley London
              </span>
            </div>
          </div>
        </section>
        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;
