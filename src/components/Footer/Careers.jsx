"use client";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const jobs = [
    { id: "01", title: "Business Development Executive", text: "Drive growth by identifying leads and closing high-value deals." },
    { id: "02", title: "Sales Executive", text: "Manage pipelines and convert prospects into long-term clients." },
    { id: "03", title: "UI/UX Designer", text: "Design clean, modern, user-focused interfaces." },
    { id: "04", title: "Full Stack Developer", text: "Build scalable web apps using modern tech." },
    { id: "05", title: "Frontend Developer", text: "Craft pixel-perfect UI with animations." },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "clamp(40px,6vw,100px) clamp(15px,5vw,80px)",
        background: "#FBC1D4",
        color: "#202020",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: "80px" }}>
          <h1
            style={{
              fontSize: "clamp(36px,9vw,100px)",
              margin: 0,
              lineHeight: 1,
              color: "#111",
            }}
          >
            Join <span style={{ fontWeight: 300 }}>CodeGrid</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(18px,4vw,40px)",
              marginTop: "10px",
              opacity: 0.8,
            }}
          >
            Build fast. Think bold. Ship elite.
          </p>
        </div>

        {/* JOB LIST */}
        <div style={{ borderTop: "1px solid #1b1b1b25" }}>
          {jobs.map((job, index) => (
            <JobRow key={index} job={job} onApply={setSelectedJob} isMobile={isMobile} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(32px,12vw,86px)",
              color: "#fff",
              WebkitTextStroke: "2px #000",
              textShadow:
                "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000",
            }}
          >
            Build With Us
          </h2>

          <div style={{ marginTop: "40px" }}>
            <div
              className="btn-frame"
              onClick={() => setSelectedJob({ title: "General Application" })}
            >
              <div className="btn-strip">
                <div className="circle side-left">
                  <div className="arrow"></div>
                </div>

                <div className="box">Apply Now</div>

                <div className="circle side-right">
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
      </AnimatePresence>

      {/* BUTTON CSS */}
      <style jsx>{`
        .btn-frame {
          width: 260px;
          height: 48px;
          overflow: hidden;
          cursor: pointer;
          border-radius: 999px;
          margin: auto;
        }

        .btn-strip {
          display: flex;
          align-items: center;
          width: calc(100% + 48px);
          transform: translateX(-48px);
          transition: transform 0.45s cubic-bezier(.22,.61,.36,1);
        }

        .btn-frame:hover .btn-strip {
          transform: translateX(0);
        }

        .box {
          flex: 1;
          height: 48px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
        }

        .circle {
          width: 48px;
          height: 48px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          width: 8px;
          height: 8px;
          border-top: 2px solid #111;
          border-right: 2px solid #111;
          transform: rotate(45deg);
        }

        @media (max-width: 768px) {
          .btn-frame {
            width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

/* JOB ROW */
const JobRow = ({ job, onApply, isMobile }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setHover(true)}
      onMouseLeave={() => !isMobile && setHover(false)}
      style={{
        position: "relative",
        padding: "clamp(20px,4vw,40px)",
        borderBottom: "1px solid #1b1b1b25",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* BG */}
      {!isMobile && (
        <motion.div
          animate={{ x: hover ? "0%" : "-101%" }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "#8B0000",
            zIndex: 0,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "80px 1fr 2fr auto",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ color: hover ? "#fff" : "#000", opacity: 0.7 }}>
          [{job.id}]
        </div>

        <div
          style={{
            fontSize: "clamp(20px,3vw,36px)",
            fontWeight: 600,
            color: hover ? "#fff" : "#000",
          }}
        >
          {job.title}
        </div>

        <div
          style={{
            fontSize: "clamp(14px,2vw,18px)",
            color: hover ? "#eee" : "#444",
          }}
        >
          {job.text}
        </div>

        <div>
          <div className="btn-frame" onClick={() => onApply(job)}>
            <div className="btn-strip">
              <div className="circle side-left">
                <div className="arrow"></div>
              </div>

              <div className="box">Apply</div>

              <div className="circle side-right">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIX */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid"] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

/* MODAL */
const ApplyModal = ({ job, onClose }) => (
  <motion.div
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px",
      zIndex: 1000,
    }}
  >
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      style={{
        background: "#fff",
        padding: "clamp(20px,5vw,40px)",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <h2>Apply for {job.title}</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Fill your details and we’ll reach out.
      </p>

      <form
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Application submitted 🚀");
          onClose();
        }}
      >
        <input placeholder="Your Name" required style={inputStyle} />
        <input placeholder="Email" type="email" required style={inputStyle} />
        <input placeholder="Resume Link" style={inputStyle} />
        <textarea placeholder="Why should we hire you?" rows="4" style={inputStyle} />

        <motion.button
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            color: "#fff",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit Application
        </motion.button>
      </form>

      <button
        onClick={onClose}
        style={{
          marginTop: "12px",
          background: "none",
          border: "none",
          color: "#888",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default Careers;