import React, { useState } from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const sections = [
    { title: "Scope of Expertise", text: "CodeGrid provides bespoke digital solutions including full-stack development, UI/UX engineering, and strategic technical consulting." },
    { title: "Client Partnership", text: "Project success relies on collaborative transparency. Clients agree to provide necessary assets and feedback within 48 hours." },
    { title: "Financial Terms", text: "A non-refundable commencement fee is required. Final assets are released upon settlement of the closing invoice." },
    { title: "Iterative Refinement", text: "Our process includes two rounds of high-fidelity revisions. Scope expansions will be billed at our standard hourly rate." },
    { title: "Asset Ownership", text: "Full intellectual property rights are transferred to the Client upon final payment. CodeGrid retains portfolio showcase rights." },
    { title: "Risk Mitigation", text: "CodeGrid employs industry-standard security practices but is not liable for indirect loss or third-party API disruptions." },
    { title: "Strategic Support", text: "Post-launch maintenance is available via a dedicated Service Level Agreement (SLA) to ensure long-term stability." },
    { title: "Agreement Exit", text: "Either party may terminate the engagement with 14 days' written notice. Pro-rated payment is required for work completed." },
  ];

  return (
    <div style={{
      backgroundColor: "#F1F1F1",
      minHeight: "100vh",
      padding: "clamp(40px, 10vw, 100px) 24px",
      fontFamily: "inherit",
      color: "#1a1a1a"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header */}
        <header style={{ marginBottom: "80px", borderBottom: "2px solid #000", paddingBottom: "30px" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(48px, 7vw, 100px)", fontWeight: "800", letterSpacing: "-0.04em", margin: 0, textTransform: "uppercase" }}
          >
            Service <span style={{ fontWeight: "300", fontStyle: "italic" }}>Protocol</span>
          </motion.h1>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", color: "#666", fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
            <span>CODEGRID — VERSION 2.4</span>
            <span>PUBLISHED MARCH 2026</span>
          </div>
        </header>

        {/* Interactive List */}
        <div style={{ marginBottom: "100px" }}>
          {sections.map((item, index) => (
            <SectionRow key={index} item={item} index={index} />
          ))}
        </div>

        {/* Professional Footer / CTA */}
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
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: "700", marginBottom: "20px", letterSpacing: "-0.02em" }}>
            Ready to initiate development?
          </h2>
          <p style={{ color: "#888", maxWidth: "600px", lineHeight: "1.6", marginBottom: "40px", fontSize: "18px" }}>
            By clicking below, you acknowledge that you have read and agreed to the CodeGrid master service terms outlined above.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "#fff",
              color: "#000",
              border: "none",
              padding: "20px 60px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              borderRadius: "100px",
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
            }}
          >
            Accept & Secure Deposit
          </motion.button>
          
          <span style={{ marginTop: "30px", fontSize: "13px", color: "#444" }}>
            Secure Electronic Agreement — Encrypted
          </span>
        </motion.footer>
      </div>
    </div>
  );
};

// Component for the Hover Row
const SectionRow = ({ item, index }) => {
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
      {/* Background Slide Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          zIndex: 0
        }}
      />

      {/* Index */}
      <div style={{ 
        zIndex: 1, 
        color: isHovered ? "#555" : "#999", 
        fontFamily: "monospace",
        fontSize: "16px",
        transition: "color 0.3s"
      }}>
        [{String(index + 1).padStart(2, "0")}]
      </div>

      {/* Title */}
      <div style={{ 
        zIndex: 1, 
        color: isHovered ? "#fff" : "#000", 
        fontSize: "26px", 
        fontWeight: "700",
        letterSpacing: "-0.02em",
        transition: "color 0.3s"
      }}>
        {item.title}
      </div>

      {/* Text */}
      <div style={{ 
        zIndex: 1, 
        color: isHovered ? "#aaa" : "#444", 
        fontSize: "17px", 
        lineHeight: "1.6",
        maxWidth: "500px",
        transition: "color 0.3s"
      }}>
        {item.text}
      </div>
    </motion.div>
  );
};

export default TermsOfService;