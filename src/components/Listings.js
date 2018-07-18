import React, { Component } from "react";

class Listings extends Component {
  constructor() {
    super();
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings() {
    const { listingData } = this.props;

    if (listingData == undefined || listingData.length == 0) {
      return "Sorry your filter did not match any listing";
    }
    return listingData.map((listing, index) => {
      if (this.props.globalState.view == "box") {
        // This is the box view
        return (
          <div className="listing" key={index}>
            <div
              className="listing-img"
              style={{
                background: `url(${listing.image})
            no-repeat center center`
              }}
            >
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="user-img" />
                <div className="user-details">
                  <span className="user-name">William Gunn</span>
                  <span className="post-date">02/04/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="icon far fa-square" />
                    <span>
                      {listing.floorspace}ft<sup>2</sup>
                    </span>
                  </div>
                  <div className="bedrooms">
                    <i className="icon fas fa-bed" />
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                </div>

                <div className="view-button">View Listing</div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">£{listing.price}</span>
              <span className="location">
                <i className="fas fa-map-marker-alt" />
                {listing.borough}, {listing.city}
              </span>
            </div>
          </div>
        );
      } else {
        // This is the long view
        return (
          <div className="listing__long" key={index}>
            <div
              className="listing-img"
              style={{
                background: `url(${listing.image})
            no-repeat center center`
              }}
            >
              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="user-img" />
                <div className="user-details">
                  <span className="user-name">William Gunn</span>
                  <span className="post-date">02/04/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="icon far fa-square" />
                    <span>
                      {listing.floorspace}ft
                      <sup>2</sup>
                    </span>
                  </div>
                  <div className="bedrooms">
                    <i className="icon fas fa-bed" />
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                </div>

                <div className="view-button">View Listing</div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">£{listing.price}</span>
              <span className="location">
                <i className="fas fa-map-marker-alt" />
                {listing.borough}, {listing.city}
              </span>
            </div>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" onChange={this.props.change} />
        </section>
        <section className="sort-by">
          <div className="results">
            {this.props.globalState.filteredData.length} results found
          </div>
          <div className="sort-options">
            <select name="sort" className="sort" onChange={this.props.change}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i
                className="fas fa-th-list"
                onClick={this.props.changeView.bind(null, "long")}
              />
              <i
                className="fas fa-th"
                onClick={this.props.changeView.bind(null, "box")}
              />
            </div>
          </div>
        </section>
        <section className="listings-results">{this.loopListings()}</section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default Listings;
