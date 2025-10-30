import React from "react";
import "./PricingCard.css";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const plans = [
  {
    title: "Starter",
    price: "$499",
    tagline: "Perfect for small websites and portfolios.",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "1 Month Support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    title: "Professional",
    price: "$1,499",
    tagline: "Ideal for growing businesses and freelancers.",
    features: [
      "Custom Design & Animations",
      "Up to 15 Pages",
      "Advanced SEO Setup",
      "3 Months Maintenance",
    ],
    button: "Start Project",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "$2,999+",
    tagline: "For startups & brands needing full-stack systems.",
    features: [
      "Full-Stack Development (MERN)",
      "API Integrations",
      "Performance Optimization",
      "Priority Support & Updates",
    ],
    button: "Contact Me",
    popular: false,
  },
];

const PricingCard = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h1 className="pricing-title">One plan, constant updates.</h1>
        <p className="pricing-subtitle">
Unlock a full library of resources and join our Slack community of creatives. Share ideas, get feedback, and lock in your price for life—no surprises, no hikes.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <div className="badge">Most Popular</div>}

            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-tagline">{plan.tagline}</p>

            <div className="plan-price">{plan.price}</div>

            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className="plan-button">
              {plan.button}
              <HiMiniArrowTrendingUp className="arrow-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCard;
