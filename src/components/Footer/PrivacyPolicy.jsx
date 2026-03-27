import React, { useState } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const policies = [
    { id: "01", title: "Data Acquisition", text: "We collect identifying information including full name, corporate email, and project-specific technical requirements to facilitate a seamless service architecture." },
    { id: "02", title: "Strategic Utilization", text: "Your data is strictly utilized to engineer personalized solutions, maintain communication channels, and refine the CodeGrid user experience." },
    { id: "03", title: "Security Infrastructure", text: "We implement industry-standard encryption and secure server protocols. We prioritize the integrity of your intellectual assets above all else." },
    { id: "04", title: "Zero-Sale Mandate", text: "CodeGrid maintains a strict policy against the monetization of user data. Information is only disclosed when legally mandated or vital for service execution." },
    { id: "05", title: "Analytical Cookies", text: "We utilize telemetry and session cookies to optimize platform performance and understand user interaction patterns within our digital ecosystem." },
    { id: "06", title: "Third-Party Integration", text: "Our workflows may involve premium third-party tools. We recommend reviewing their specific privacy frameworks as they operate independently." },
    { id: "07", title: "User Autonomy", text: "You retain full rights to your data. Requests for access, modification, or permanent deletion of personal records are processed with priority." },
    { id: "08", title: "Policy Evolution", text: "This framework is subject to periodic updates to remain compliant with global data standards. Continued engagement implies acceptance." },
  ];

  return (
 <div
  style={{
    backgroundColor: "#F5F5F7",
    minHeight: "100vh",
    padding: "clamp(50px, 8vw, 120px) 16px",
    fontFamily: "inherit",
    color: "#111",
  }}
>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header matched to ToS */}
        <header style={{ marginBottom: "80px", borderBottom: "2px solid #000", paddingBottom: "30px" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(48px, 7vw, 100px)", fontWeight: "800", letterSpacing: "-0.04em", margin: 0, textTransform: "uppercase" }}
          >
            Privacy <span style={{ fontWeight: "300", fontStyle: "italic" }}>Governance</span>
          </motion.h1>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", color: "#666", fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
            <span>CODEGRID — DATA PROTECTION</span>
            <span>EFFECTIVE MARCH 2026</span>
          </div>
        </header>

        {/* Interactive Sections with Left-to-Right Hover */}
        <div style={{ marginBottom: "100px", borderTop: "1px solid #d1d1d1" }}>
          {policies.map((item, index) => (
            <PolicyRow key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA Block */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: "#000", 
            color: "#fff", 
            padding: "80px 40px", 
            borderRadius: "4px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: "700", marginBottom: "20px" }}>
            Data Rights & Inquiries
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", lineHeight: "1.6", marginBottom: "40px", fontSize: "18px" }}>
            Need a full export of your project data or wish to exercise your right to be forgotten? Our compliance team is ready to assist.
          </p>
          
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#fff", color: "#000", border: "none",
                padding: "18px 45px", fontSize: "16px", fontWeight: "700",
                cursor: "pointer", borderRadius: "100px"
              }}
            >
              Contact Compliance
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#333" }}
              style={{
                background: "transparent", color: "#fff", border: "1px solid #444",
                padding: "18px 45px", fontSize: "16px", fontWeight: "700",
                cursor: "pointer", borderRadius: "100px"
              }}
            >
              Download PDF
            </motion.button>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

const PolicyRow = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "80px 1fr 2fr",
        padding: "50px 20px",
        borderBottom: "1px solid #d1d1d1",
        cursor: "pointer",
        overflow: "hidden",
        alignItems: "center"
      }}
    >
      {/* Slide Background Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "#000", zIndex: 0
        }}
      />

      {/* Content */}
      <div style={{ zIndex: 1, color: isHovered ? "#555" : "#999", fontFamily: "monospace", transition: "0.3s" }}>
        [{item.id}]
      </div>

      <div style={{ 
        zIndex: 1, color: isHovered ? "#fff" : "#000", 
        fontSize: "24px", fontWeight: "700", transition: "0.3s" 
      }}>
        {item.title}
      </div>

      <div style={{ 
        zIndex: 1, color: isHovered ? "#aaa" : "#444", 
        fontSize: "17px", lineHeight: "1.6", maxWidth: "500px", transition: "0.3s" 
      }}>
        {item.text}
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;