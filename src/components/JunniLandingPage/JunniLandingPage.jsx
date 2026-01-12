import React, { useEffect, useRef, useState, useCallback } from 'react';
import './JunniLandingPage.css';

// Constants outside component to prevent recreation
const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 50;
const COOLDOWN = 1000;
const TILT_MAP = {
  0: -40,  // left edge
  1: -20,  // left-middle
  2: -10,  // left-center
  3: 10,   // right-center
  4: 20,   // right-middle
  5: 40    // right edge
};

const JunniLandingPage = () => {
  const isFlipped = useRef(false);
  const boardRef = useRef(null);
  const blocksRef = useRef(null);
  const gsapRef = useRef(null);
  const lastEnterTimesRef = useRef(new Map());
  const rafIdRef = useRef(null);
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);

  // Memoized event handlers
  const highlightBlock = useCallback((event) => {
    if (!blocksRef.current || rafIdRef.current) return;
    
    // Use requestAnimationFrame for smooth highlighting
    rafIdRef.current = requestAnimationFrame(() => {
      const rect = blocksRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const col = Math.floor(x / BLOCK_SIZE);
      const row = Math.floor(y / BLOCK_SIZE);
      
      const blockContainer = blocksRef.current;
      if (!blockContainer) return;
      
      const index = row * Math.ceil(window.innerWidth / BLOCK_SIZE) + col;
      const block = blockContainer.children[index];
      
      if (block && !block.classList.contains("junni-highlight")) {
        block.classList.add("junni-highlight");
        setTimeout(() => {
          block.classList.remove("junni-highlight");
        }, 250);
      }
      rafIdRef.current = null;
    });
  }, []);

  const handleTileMouseEnter = useCallback((tile, index) => {
    if (!gsapRef.current) return;
    
    const currentTime = Date.now();
    const lastEnterTime = lastEnterTimesRef.current.get(index) || 0;
    
    if (currentTime - lastEnterTime > COOLDOWN) {
      lastEnterTimesRef.current.set(index, currentTime);
      const tiltY = TILT_MAP[index % 6] || 0;
      animateTile(tile, tiltY);
    }
  }, []);

  const animateTile = useCallback((tile, tiltY) => {
    if (!gsapRef.current || !tile) return;
    
    const tl = gsapRef.current.timeline();
    tl.set(tile, { rotateX: isFlipped.current ? 180 : 0, rotateY: 0 })
      .to(tile, {
        rotateX: isFlipped.current ? 450 : 270,
        rotateY: tiltY,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(tile, {
        rotateX: isFlipped.current ? 540 : 360,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.25");
  }, []);

  const flipAllTiles = useCallback(() => {
    if (!gsapRef.current) return;
    
    const tiles = document.querySelectorAll(".junni-tile");
    if (tiles.length === 0) return;
    
    isFlipped.current = !isFlipped.current;
    
    gsapRef.current.to(tiles, {
      rotateX: isFlipped.current ? 180 : 0,
     duration: 0.6,
stagger: {
  amount: 0.25,
        from: "random",
      },
      ease: "power2.inOut",
      onComplete: () => {
        // Reset tiles to base state after animation
        gsapRef.current.set(tiles, { rotateX: isFlipped.current ? 180 : 0 });
      }
    });
  }, []);

  const createTile = useCallback((row, col, index) => {
    const tile = document.createElement("div");
    tile.className = "junni-tile";
    tile.dataset.index = index;
    tile.setAttribute('aria-label', `Tile ${index + 1}`);
    tile.setAttribute('role', 'button');
    tile.tabIndex = 0;
    
    const front = document.createElement("div");
    front.className = "junni-tile-face junni-tile-front";
    front.setAttribute('aria-hidden', 'true');
    
    const back = document.createElement("div");
    back.className = "junni-tile-face junni-tile-back";
    back.setAttribute('aria-hidden', 'true');
    
    tile.appendChild(front);
    tile.appendChild(back);

    // Calculate background position
    const bgPosition = `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`;
    front.style.backgroundPosition = bgPosition;
    back.style.backgroundPosition = bgPosition;

    // Handle both mouse and keyboard interaction
    const handleInteraction = () => handleTileMouseEnter(tile, index);
    
    tile.addEventListener("mouseenter", handleInteraction);
    tile.addEventListener("focus", handleInteraction);
    tile.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleInteraction();
      }
    });

    return tile;
  }, [handleTileMouseEnter]);

  const createBoard = useCallback(() => {
    if (!boardRef.current) return;
    
    boardRef.current.innerHTML = '';
    
    for (let i = 0; i < ROWS; i++) {
      const row = document.createElement("div");
      row.className = "junni-row";
      row.setAttribute('role', 'row');
      
      for (let j = 0; j < COLS; j++) {
        const tileIndex = i * COLS + j;
        const tile = createTile(i, j, tileIndex);
        row.appendChild(tile);
      }
      boardRef.current.appendChild(row);
    }
  }, [createTile]);

  const createBlocks = useCallback(() => {
    if (!blocksRef.current) return;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / BLOCK_SIZE);
    const numRows = Math.ceil(screenHeight / BLOCK_SIZE);
    const numBlocks = numCols * numRows;

    blocksRef.current.innerHTML = '';
    blocksRef.current.style.gridTemplateColumns = `repeat(${numCols}, ${BLOCK_SIZE}px)`;
    
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.className = "junni-block";
      block.dataset.index = i;
      block.setAttribute('aria-hidden', 'true');
      blocksRef.current.appendChild(block);
    }

    return { numCols, numRows, numBlocks };
  }, []);

  const handleResize = useCallback(() => {
    if (blocksRef.current) {
      createBlocks();
    }
  }, [createBlocks]);

  const initialize = useCallback(() => {
    if (!gsapRef.current) return;
    
    createBoard();
    createBlocks();
    
    // Throttled mousemove for better performance
    let mouseMoveTimeout;
    const throttledHighlight = (e) => {
      if (mouseMoveTimeout) return;
      mouseMoveTimeout = setTimeout(() => {
        highlightBlock(e);
        mouseMoveTimeout = null;
      }, 16); // ~60fps
    };
    
    window.addEventListener('mousemove', throttledHighlight);
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', throttledHighlight);
      window.removeEventListener('resize', handleResize);
      if (mouseMoveTimeout) clearTimeout(mouseMoveTimeout);
    };
  }, [createBoard, createBlocks, highlightBlock, handleResize]);

  useEffect(() => {
    // Load GSAP with error handling
    const loadGSAP = async () => {
      try {
        // Check if GSAP is already loaded
        if (window.gsap) {
          gsapRef.current = window.gsap;
          setIsGsapLoaded(true);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        script.onload = () => {
          gsapRef.current = window.gsap;
          setIsGsapLoaded(true);
        };
        
        script.onerror = () => {
          console.error('Failed to load GSAP');
          // Fallback: could use CSS animations instead
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();

    return () => {
      // Cleanup animations and event listeners
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      gsapRef.current?.killTweensOf?.('.junni-tile, .junni-block');
    };
  }, []);

  useEffect(() => {
    if (isGsapLoaded) {
      const cleanup = initialize();
      return cleanup;
    }
  }, [isGsapLoaded, initialize]);

  return (
    <main className="junni-landing-page limelight-regular" role="main">
      <nav className="junni-nav" aria-label="Main navigation">
        <a href="#" className="junni-nav-link">Codegrid</a>
      </nav>

      <section 
        className="junni-board" 
        ref={boardRef}
        aria-label="Interactive tile board"
      ></section>

      <div className="junni-blocks-container" aria-hidden="true">
        <div 
          id="junni-blocks" 
          ref={blocksRef}
          className="junni-blocks-grid"
        ></div>
      </div>

      <div className="junni-flip-button-container">
        <button 
          className="junni-flip-button"
          onClick={flipAllTiles}
          aria-label="Flip all tiles"
        >
          Flip Tiles
        </button>
      </div>
    </main>
  );
};

export default JunniLandingPage;