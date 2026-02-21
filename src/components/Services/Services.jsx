import React from "react";
import "./Services.css";

// Import local images
import dex1 from "../../assets/dex1.png";
import dex2 from "../../assets/dex2.png";
import dex3 from "../../assets/dex3.png";
import dex4 from "../../assets/dex4.png";

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Brand",
      subcategories: ["Look & feel", "Core Elements", "Guidelines"],
      description:
        "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
      img: dex1,
    },
    {
      id: 2,
      number: "02",
      title: "Campaign",
      subcategories: ["Key visuals", "Campaign Toolkit"],
      description:
        "We craft your campaign’s creative identity—key visuals, messaging, and adaptable designs across all touchpoints. From partnerships to events, we connect fans, brands, and unforgettable moments.",
      img: dex2,
    },
    {
      id: 3,
      number: "03",
      title: "Content",
      subcategories: ["Social Content", "Out of Home", "Motion & Photography"],
      description:
        "We create tailored content for every stage of your strategy, from awareness visuals to engaging social media assets. Think videos, motion graphics, and impactful designs that inspire and drive action.",
      img: dex3,
    },
    {
      id: 4,
      number: "04",
      title: "Product",
      subcategories: ["Printables", "Kits", "Packaging", "Merchandise"],
      description:
        "We craft innovative products that merge design and functionality, delivering tangible solutions that elevate your brand and connect with your audience.",
      img: dex4,
    },
  ];

  return (
    <div className="services-main">
      {/* Main heading */}
      <h1 className="main-title">Services</h1>

      {services.map((service) => (
        <div key={service.id} className="service-row">
          {/* Box 1: Number + Title */}
          <div className="service-box number-title-box">
            <div className="service-number">{service.number}</div>
            <div className="service-title">{service.title}</div>
          </div>

          {/* Box 2: Subcategories */}
          <div className="service-box subcategory-box">
            {service.subcategories.map((sub, idx) => (
              <div key={idx} className="subcategory-item">
                {sub}
              </div>
            ))}
          </div>

          {/* Box 3: Description */}
          <div className="service-box description-box">{service.description}</div>

          {/* Box 4: Image */}
          <div className="service-box image-box">
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
