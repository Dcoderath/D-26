import { useEffect, useRef, useState } from 'react';
import './AdBlank.css';
import D8 from '../../assets/D/d8.svg';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';

const AdBlank = () => {
  const canvasRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    message.trim() !== '';

  // ================= FORM SUBMIT =================
  const handleSubmit = async () => {
    if (!isFormValid || loading) return;

    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('website', ''); // honeypot

 await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});


      alert('Message sent ✅');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      alert('Something went wrong ❌');
    } finally {
      setLoading(false);
    }
  };

  // ================= PIXEL BACKGROUND (EXACT SAME) =================
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPixels();
    };

    window.addEventListener('resize', resize);
    resize();

    function drawPixels() {
      const { width, height } = canvas;
      ctx.fillStyle = '#3300FF';
      ctx.fillRect(0, 0, width, height);

      const size = 30;
      const rows = Math.ceil(height / size);
      const cols = Math.ceil(width / size);

      let seed = 10101;
      function random() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const normalizedX = x / cols;
          const normalizedY = y / rows;

          const heightLimit = 0.6 - normalizedX * 0.3;

          // LEFT BLOCK
          if (normalizedY < heightLimit && normalizedX < 0.4) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);
          }

          // LEFT EDGE NOISE
          else if (
            normalizedX < 0.45 &&
            normalizedY >= heightLimit &&
            normalizedY < heightLimit + 0.12 &&
            Math.random() > 0.92
          ) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);

            if (Math.random() > 0.7) {
              let cx = x;
              let cy = y;
              const len = Math.floor(Math.random() * 2) + 2;
              for (let i = 0; i < len; i++) {
                cx += Math.floor(Math.random() * 3) - 1;
                cy += Math.floor(Math.random() * 2);
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
                ctx.fillRect(cx * size, cy * size, size, size);
              }
            }
          }

          // CENTER WAVES
          else if (normalizedX >= 0.4 && normalizedX < 0.8) {
            const waveLimit =
              0.4 +
              Math.sin(normalizedX * 6) * 0.05 +
              Math.cos(normalizedX * 3) * 0.03;

            if (normalizedY < waveLimit && random() > 0.8) {
              ctx.fillStyle = '#fff';
              let cx = x;
              let cy = y;
              const len = Math.floor(random() * 4) + 5;
              for (let i = 0; i < len; i++) {
                ctx.fillRect(cx * size, cy * size, size, size);
                cx += Math.floor(Math.random() * 3) - 1;
                cy += Math.floor(Math.random() * 2) - 1;
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
              }
            }
          }

          // TOP RIGHT
          else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
            ctx.fillStyle = '#fff';
            let cx = x;
            let cy = y;
            const len = Math.floor(random() * 3) + 4;
            for (let i = 0; i < len; i++) {
              ctx.fillRect(cx * size, cy * size, size, size);
              cx += Math.floor(Math.random() * 3) - 1;
              cy += Math.floor(Math.random() * 3) - 1;
              if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
            }
          }

          // BOTTOM RIGHT DENSE
          else if (normalizedX > 0.7 && normalizedY > 0.7) {
            if (random() > 0.1) {
              ctx.fillStyle = '#fff';
              ctx.fillRect(x * size, y * size, size, size);
            }
          }

          // BOTTOM RIGHT BLOCK
          const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
          if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);
          }
        }
      }
    }

    return () => window.removeEventListener('resize', resize);
  }, []);

  // ================= JSX =================
  return (
    <div id="AdBlank">
      <nav className="adblank">
        <canvas ref={canvasRef} className="pixel-screen" />
        <div className="adblank__glass-bg" />

        <ul className="adblank__navigator">
          <li className="adblank__navigator-item">
            <div className="adblank__form">
              <input
                type="text"
                placeholder="Enter name..."
                className="adblank__navigator-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Enter email..."
                className="adblank__navigator-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                placeholder="Your message..."
                className="adblank__navigator-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {/* honeypot */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <button
                className="adblank__navigator-button"
                disabled={!isFormValid || loading}
                onClick={handleSubmit}
              >
                {loading ? 'Sending...' : "Let's Talk"}
              </button>
            </div>
          </li>

          <li className="adblank__navigator-item">
            <div className="adblank__horizontal-links">
              <a
                href="https://www.linkedin.com/in/divakar-trivedi-85326a376/"
                target="_blank"
                rel="noopener noreferrer"
                className="adblank__navigator-link"
              >
                LinkedIn <HiMiniArrowTrendingUp />
              </a>

              <a
                href="mailto:divakartrivedioffice@gmail.com"
                className="adblank__navigator-link"
              >
                divakartrivedioffice@gmail.com <HiMiniArrowTrendingUp />
              </a>
            </div>
          </li>
        </ul>

        {/* BANNERS */}
        <div className="adblank__banner">
          <div className="adblank__banner-track">
            {[...Array(20)].map((_, i) => (
              <div className="adblank__banner-item" key={i}>
                <div className="adblank__banner-text">
                  JUST IMAGINE, WE DESIGN
                </div>
                <img src={D8} alt="Logo" className="adblank__banner-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="adblank__banner adblank__banner--alt">
          <div className="adblank__banner-track">
            {[...Array(20)].map((_, i) => (
              <div className="adblank__banner-item" key={i}>
                <div className="adblank__banner-text">
                  JUST IMAGINE, WE DESIGN
                </div>
                <img src={D8} alt="Logo" className="adblank__banner-image" />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdBlank;
