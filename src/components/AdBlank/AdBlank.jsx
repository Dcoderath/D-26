import { useEffect, useRef } from 'react';
import './AdBlank.css';
import D8 from '../../assets/D/d8.svg';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';

const navItems = [

  { label: 'linkedin', href: 'https://www.linkedin.com/in/divakar-trivedi-85326a376/' },
  { label: 'contact', href: 'https://mail.google.com/mail/?view=cm&to=trivedi@2693@gmail.com' },
  { label: 'resume', href: '#' },
];

const AdBlank = () => {
  const canvasRef = useRef(null);

  // 🧱 Pixel Background
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
      ctx.fillStyle = '#0b0b0b';
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
          if (normalizedY < heightLimit && normalizedX < 0.4) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);
          } else if (
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
              const snakeLength = Math.floor(Math.random() * 2) + 2;
              for (let i = 0; i < snakeLength; i++) {
                cx += Math.floor(Math.random() * 3) - 1;
                cy += Math.floor(Math.random() * 2);
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
                ctx.fillRect(cx * size, cy * size, size, size);
              }
            }
          } else if (normalizedX >= 0.4 && normalizedX < 0.8) {
            const waveLimit =
              0.4 + Math.sin(normalizedX * 6) * 0.05 + Math.cos(normalizedX * 3) * 0.03;
            if (normalizedY < waveLimit && random() > 0.8) {
              ctx.fillStyle = '#fff';
              let cx = x;
              let cy = y;
              const snakeLength = Math.floor(random() * 4) + 5;
              for (let i = 0; i < snakeLength; i++) {
                ctx.fillRect(cx * size, cy * size, size, size);
                cx += Math.floor(random() * 3) - 1;
                cy += Math.floor(random() * 2) - 1;
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
              }
            }
          } else if (normalizedX >= 0.8 && normalizedY < 0.3 && random() > 0.95) {
            ctx.fillStyle = '#fff';
            let cx = x;
            let cy = y;
            const snakeLength = Math.floor(random() * 3) + 4;
            for (let i = 0; i < snakeLength; i++) {
              ctx.fillRect(cx * size, cy * size, size, size);
              cx += Math.floor(random() * 3) - 1;
              cy += Math.floor(random() * 3) - 1;
              if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
            }
          } else if (normalizedX > 0.7 && normalizedY > 0.7) {
            if (random() > 0.1) {
              ctx.fillStyle = '#fff';
              ctx.fillRect(x * size, y * size, size, size);
            }
          }

          const bottomRightLimit = 0.6 - (1 - normalizedX) * 0.3;
          if (normalizedY > 1 - bottomRightLimit && normalizedX > 0.6) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);
          } else if (
            normalizedX > 0.55 &&
            normalizedY <= 1 - bottomRightLimit &&
            normalizedY > 1 - bottomRightLimit - 0.12 &&
            Math.random() > 0.92
          ) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x * size, y * size, size, size);

            if (Math.random() > 0.7) {
              let cx = x;
              let cy = y;
              const snakeLength = Math.floor(Math.random() * 2) + 2;
              for (let i = 0; i < snakeLength; i++) {
                cx += Math.floor(Math.random() * 3) - 1;
                cy -= Math.floor(Math.random() * 2);
                if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) break;
                ctx.fillRect(cx * size, cy * size, size, size);
              }
            }
          }
        }
      }
    }

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <nav className="adblank">
      <canvas ref={canvasRef} className="pixel-screen" />
      <div className="adblank__glass-bg"></div>

      <ul className="adblank__navigator">
        {navItems.map(({ label, href }) => (
          <li className="adblank__navigator-item" key={label}>
            <a
              href={href}
              className="adblank__navigator-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="adblank__navigator-label">{label}</span>
              <HiMiniArrowTrendingUp className="adblank__navigator-icon" />
            </a>
          </li>
        ))}
      </ul>

      <div className="adblank__banner">
        <div className="adblank__banner-track">
          {[...Array(20)].map((_, i) => (
            <div className="adblank__banner-item" key={i}>
              <div className="adblank__banner-text">JUST IMAGINE, WE DESIGN</div>
              <img src={D8} alt="Logo" className="adblank__banner-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="adblank__banner adblank__banner--alt">
        <div className="adblank__banner-track">
          {[...Array(20)].map((_, i) => (
            <div className="adblank__banner-item" key={i}>
              <div className="adblank__banner-text">JUST IMAGINE, WE DESIGN</div>
              <img src={D8} alt="Logo" className="adblank__banner-image" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdBlank;
