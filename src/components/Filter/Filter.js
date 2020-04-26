import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
          <ul className="filter-list">Filter by
          <li className="list-item">
            <input type="checkbox" id="backenddev" name="backenddev" value="Back-End Developers"/>
            <label forhtml="vehicle1">Back-End Developers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="frontenddev" name="frontenddev" value="Front-End Developers"/>
            <label forhtml="vehicle1">Front-End Developers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="fullstackdev" name="fullstackdev" value="Full Stack Developers"/>
            <label forhtml="vehicle1">Full Stack Developers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="freelancers" name="freelance" value="Freelancers"/>
            <label forhtml="vehicle1">Freelancers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="graphic" name="graphic" value="Graphic Designers"/>
            <label forhtml="vehicle1">Graphic Designers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="product" name="product" value="Product Managers"/>
            <label forhtml="vehicle1">Product Managers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="graphic" name="graphic" value="Graphic Designers"/>
            <label forhtml="vehicle1">Speakers</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="graphic" name="graphic" value="Graphic Designers"/>
            <label forhtml="vehicle1">UX Design</label>
          </li>
          <li className="list-item">
            <input type="checkbox" id="graphic" name="graphic" value="Graphic Designers"/>
            <label forhtml="vehicle1">UX Research</label>
          </li>
          </ul>
        {/* <p>Filter Projects by</p>
        <ul>
          <li className="filter-list"></li>
          <li className="filter-list"></li>
          <li className="filter-list"></li>
          <li className="filter-list"></li>
          <li className="filter-list"></li>
          <li className="filter-list"></li>
        </ul> */}
      </div>
    )
  }
}

export default Filter;
