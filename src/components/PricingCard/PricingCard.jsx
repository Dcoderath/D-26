import React from "react";
import "./PricingCard.css";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const plans = [
  {
    title: "Starter",
    pricingIdea: "Best for small websites & personal brands",
    tagline: "Perfect for portfolios and basic business sites.",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "1 Month Support",
    ],
    button: "Get a Quote",
    popular: false,
  },
  {
    title: "Professional",
    pricingIdea: "Most popular for growing businesses",
    tagline: "Ideal for startups, agencies & freelancers.",
    features: [
      "Custom Design & Animations",
      "Up to 15 Pages",
      "Advanced SEO Setup",
      "3 Months Maintenance",
    ],
    button: "Book a Call",
    popular: true,
  },
  {
    title: "Enterprise",
    pricingIdea: "Fully custom, scope-based pricing",
    tagline: "For brands needing scalable full-stack systems.",
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
        <h1 className="pricing-title">Simple plans. Flexible pricing.</h1>
        <p className="pricing-subtitle">
          Every project is different. Pricing is based on your requirements,
          features, and timeline — no hidden costs.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <div className="badge">Most Chosen</div>}

            <h2 className="plan-title">{plan.title}</h2>
            <p className="plan-tagline">{plan.tagline}</p>

            <div className="plan-price">{plan.pricingIdea}</div>

            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

        <button
  className="plan-button"
  onClick={() => {
    // All buttons now open Gmail compose to your email
    window.location.href = "https://mail.google.com/mail/?view=cm&to=divakartrivedioffice@gmail.com";
  }}
>
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

