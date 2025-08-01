import { useEffect } from 'react';
import { gsap } from 'gsap';
import './AdBlank.css';
import D8 from '../../assets/D/d8.svg';

const navItems = [
  { label: 'github', href: 'https://github.com/Dcoderath' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/divakar-trivedi-85326a376/' },
  { label: 'contact', href: 'https://mail.google.com/mail/?view=cm&to=trivedi@2693@gmail.com' },
  { label: 'resume', href: '#' }, // Replace '#' with actual resume link if available
];

const AdBlank = () => {
  useEffect(() => {
    gsap.utils.toArray('.adblank__link').forEach((navLink) => {
      const tl = gsap.timeline({ ease: 'none' });
      const frontText = navLink.querySelector('.adblank-text--front');
      const boldText = navLink.querySelector('.adblank-text--bold');

      gsap.set(frontText, {
        rotationX: -90,
        yPercent: -25,
        opacity: 0,
      });

      tl
        .to(boldText, {
          yPercent: -50,
          rotationX: 90,
        })
        .to(frontText, {
          yPercent: -100,
          rotationX: 0,
          opacity: 1,
        }, 0)
        .to(boldText, {
          opacity: 0,
          duration: 0.15,
        }, 0.2)
        .pause();

      navLink.addEventListener('mouseenter', () => tl.play());
      navLink.addEventListener('mouseleave', () => tl.reverse());
      navLink.addEventListener('focus', () => tl.play());
      navLink.addEventListener('blur', () => tl.reverse());

      // Mobile tap support
      let isPlaying = false;
      navLink.addEventListener('click', (e) => {
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
          e.preventDefault(); // prevent link navigation on first tap to allow animation
          if (isPlaying) {
            tl.reverse();
            // On second tap, allow navigation by simulating click again
            setTimeout(() => {
              window.open(navLink.href, '_blank', 'noopener');
            }, 300);
          } else {
            tl.play();
          }
          isPlaying = !isPlaying;
        }
      });
    });
  }, []);

  return (
    <nav className="adblank">
      <ul className="adblank__menu">
        {navItems.map(({ label, href }) => (
          <li className="adblank__item" key={label}>
            <a
              href={href}
              className="adblank__link"
              target={label !== 'Gmail' ? '_blank' : undefined} 
              rel={label !== 'Gmail' ? 'noopener noreferrer' : undefined}
            >
              <span className="adblank-text adblank-text--bold">{label}</span>
              <span className="adblank-text adblank-text--front">{label}</span>
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
