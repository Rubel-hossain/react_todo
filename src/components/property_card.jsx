import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import homeImg_01 from "../assets/images/home.jpg";
import homeImg_02 from "../assets/images/home_2.jpg";
import homeImg_03 from "../assets/images/home_3.jpg";
import "../assets/scss/property_card.scss";
const PropertyCard = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="col-md-4">
      <div className="property-card">
        <div className="card">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeImg_01}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeImg_02}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={homeImg_03}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <div className="card-sticky d-flex justify-content-between">
              <div className="brand-info">
                <h6>
                  NOK 4500 / <span>per month</span>
                </h6>
              </div>
              <div className="author-info">
                <a href="#">
                  <i className="fas fa-user-tie"></i>
                </a>
              </div>
            </div>
            <h5 className="card-title">Pen nyoppusset hybel</h5>
            <p className="card-text">Entore place in Apartment</p>
            <p>
              <i className="far fa-clock"></i> 01.10.2020 - Undetermined
            </p>
            <p>
              <i className="fas fa-flask"></i> Minium State: 0 Months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
