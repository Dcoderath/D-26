import React, { useRef, useEffect, useState } from 'react';
import './Skill.css';  // Import the CSS file
import D10 from '../../assets/D/D10.svg';  // Path to the image (replace as needed)

const Skill = () => {
  const imgRef = useRef(null);  // Create a reference to the image
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });  // Store the image's size

  // Effect hook to update image size after it's loaded
  useEffect(() => {
    if (imgRef.current) {
      setImgSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
  }, []);

  return (
    <div className="skill-container responsive-skill-container">
      <div className="middle">
        <img
          ref={imgRef}
          src={D10}
          alt="D10 dice"  // Alt text for accessibility
          className="skill-image"
          onLoad={(e) => setImgSize({ width: e.target.naturalWidth, height: e.target.naturalHeight })}
        />
      </div>
    </div>
  );
};

export default Skill;
