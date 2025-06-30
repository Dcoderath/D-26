import React, { useEffect, useRef } from "react";
import "./NewGrid.css";
import D1 from "../../assets/D/D1.jpg";
import D2 from "../../assets/D/D2.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

const NewGrid = () => {
  const cursorRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
        cursorRef.current.style.opacity = 1;
      }
    };
    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = 0;
      }
    };
    const root = rootRef.current;
    if (root) {
      root.addEventListener("mousemove", moveCursor);
      root.addEventListener("mouseleave", hideCursor);
      root.addEventListener("mouseenter", moveCursor);
    }
    return () => {
      if (root) {
        root.removeEventListener("mousemove", moveCursor);
        root.removeEventListener("mouseleave", hideCursor);
        root.removeEventListener("mouseenter", moveCursor);
      }
    };
  }, []);

  return (
    <div className="newgrid-root" ref={rootRef}>
      <div ref={cursorRef} className="circle-cursor" style={{ opacity: 0 }}>
        <FaArrowTrendUp className="circle-cursor-arrow" />
      </div>
      <div className="newgrid-left">
        <img src={D1} alt="D1" className="newgrid-img" />
      </div>
      <div className="newgrid-right">
        <img src={D2} alt="D2" className="newgrid-img" />
      </div>
    </div>
  );
};

export default NewGrid;
