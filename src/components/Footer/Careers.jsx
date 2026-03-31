import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* INPUT STYLE */
const inputStyle = {
  padding: "14px 16px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px",
  transition: "0.25s",
  background: "#fff",
  width: "100%",
};

/* MAIN COMPONENT */
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const jobs = [
    { id: "01", title: "Business Development Executive", text: "Drive growth by identifying leads and closing high-value deals." },
    { id: "02", title: "Sales Executive", text: "Manage pipelines and convert prospects into long-term clients." },
    { id: "03", title: "UI/UX Designer", text: "Design clean, modern, user-focused interfaces." },
    { id: "04", title: "Full Stack Developer", text: "Build scalable web apps using modern tech." },
    { id: "05", title: "Frontend Developer", text: "Craft pixel-perfect UI with animations." },
  ];

  return (
    <div style={{ backgroundColor: "#F5F5F7", minHeight: "100vh", padding: "clamp(50px, 8vw, 120px) 16px", color: "#111" }}>
      <div style={{ maxWidth: "min(1200px,92vw)", margin: "0 auto" }}>
        {/* HEADER */}
        <header style={{ marginBottom: "clamp(50px, 8vw, 100px)", borderBottom: "1.5px solid #111", paddingBottom: "20px" }}>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(36px, 9vw, 100px)", fontWeight: "800", letterSpacing: "-0.04em", margin: 0, textTransform: "uppercase", lineHeight: "1.1" }}
          >
            Join <span style={{ fontWeight: "300", fontStyle: "italic" }}>CodeGrid</span>
          </motion.h1>

          <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isTablet ? "column" : "row", gap: "8px", marginTop: "20px", color: "#777", fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
            <span>CAREERS — BUILD WITH US</span>
            <span>OPEN ROLES 2026</span>
          </div>
        </header>

        {/* JOB LIST */}
        <div style={{ display: "grid", gap: "20px", marginBottom: "100px" }}>
          {jobs.map((job, index) => (
            <JobRow key={index} job={job} onApply={setSelectedJob} isMobile={isMobile} />
          ))}
        </div>

        {/* CTA */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          style={{ background: "#111", color: "#fff", padding: "clamp(32px,6vw,90px) clamp(16px,4vw,40px)", borderRadius: "12px", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "clamp(28px,5vw,60px)", marginBottom: "20px" }}>Build Something Elite</h2>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>We’re building a team of creators, thinkers, and builders.</p>
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
            style={{ background: "#fff", color: "#000", border: "none", padding: "14px 32px", borderRadius: "100px", fontWeight: "700", cursor: "pointer" }}
            onClick={() => setSelectedJob({ title: "General Application" })}
          >
            Apply Now →
          </motion.button>
        </motion.footer>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
      </AnimatePresence>
    </div>
  );
};

/* JOB ROW */
const JobRow = ({ job, onApply, isMobile }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
      whileHover={!isMobile ? { y: -3, boxShadow: "0px 8px 20px rgba(0,0,0,0.08)" } : {}}
      transition={{ duration: 0.25 }}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "80px minmax(200px,1fr) minmax(250px,2fr) auto",
        gap: "clamp(12px,2vw,24px)",
        padding: "clamp(24px,5vw,60px) clamp(12px,3vw,24px)",
        borderRadius: "12px",
        background: "#fff",
        alignItems: "center",
        overflow: "hidden",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.04)",
        cursor: "pointer",
      }}
    >
      {/* LEFT-TO-RIGHT HOVER EFFECT */}
      {!isMobile && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: hover ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #111, #333)",
            zIndex: 0,
          }}
        />
      )}

      {/* CONTENT */}
      <div style={{ zIndex: 1, color: hover ? "#ddd" : "#aaa" }}>[{job.id}]</div>
      <div style={{ zIndex: 1, color: hover ? "#fff" : "#111", fontWeight: "700", fontSize: "clamp(18px,2vw,24px)" }}>{job.title}</div>
      <div style={{ zIndex: 1, color: hover ? "#ccc" : "#555", fontSize: "clamp(14px,1.2vw,16px)", maxWidth: "520px" }}>{job.text}</div>

      {/* APPLY BUTTON */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        style={{
          zIndex: 1,
          background: hover ? "#fff" : "#111",
          color: hover ? "#000" : "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "999px",
          fontWeight: "600",
          cursor: "pointer",
          opacity: 1,
          transition: "0.3s",
        }}
        onClick={() => onApply(job)}
      >
        Apply →
      </motion.button>
    </motion.div>
  );
};

/* MODAL */
const ApplyModal = ({ job, onClose }) => (
  <motion.div onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(10px)", display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", zIndex: 1000 }}
  >
    <motion.div onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.95 }}
      style={{ background: "#fff", padding: "clamp(20px, 5vw, 40px)", borderRadius: "16px", width: "100%", maxWidth: "min(500px,95vw)" }}
    >
      <h2 style={{ marginBottom: "10px" }}>Apply for {job.title}</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>Fill in your details and we’ll get back to you.</p>
      <form style={{ display: "flex", flexDirection: "column", gap: "12px" }} onSubmit={(e) => { e.preventDefault(); alert("Application submitted 🚀"); onClose(); }}>
        <input placeholder="Your Name" required style={inputStyle} />
        <input placeholder="Email" type="email" required style={inputStyle} />
        <input placeholder="Resume Link" style={inputStyle} />
        <textarea placeholder="Why should we hire you?" rows="4" style={inputStyle} />
        <motion.button whileHover={{ scale: 1.05 }} style={{ background: "#111", color: "#fff", padding: "14px", border: "none", borderRadius: "8px", cursor: "pointer" }}>Submit Application</motion.button>
      </form>
      <button onClick={onClose} style={{ marginTop: "12px", background: "none", border: "none", color: "#888", cursor: "pointer" }}>Close</button>
    </motion.div>
  </motion.div>
);

export default Careers;