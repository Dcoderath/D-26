import React, { useEffect, useRef, useState, useCallback } from 'react';
import './JunniLandingPage.css';

// Constants
const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 50;
const SNAKE_LENGTH = 5;
const SNAKE_SPEED = 80;
const TILT_MAP = {
  0: -25, 1: -12, 2: -3, 3: 3, 4: 12, 5: 25
};

const JunniLandingPage = () => {
  const isFlipped = useRef(false);
  const boardRef = useRef(null);
  const blocksRef = useRef(null);
  const gsapRef = useRef(null);
  const snakeQueueRef = useRef([]);
  const rafIdRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastProcessedTileRef = useRef(null);
  const mouseHistoryRef = useRef([]);
  const processingRef = useRef(false); // Add processing flag
  const lastMouseMoveTimeRef = useRef(0); // Throttle mouse moves

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Improved highlight with cursor tracking
  const highlightBlock = useCallback((event) => {
    if (!blocksRef.current || rafIdRef.current) return;
    
    mousePosRef.current = { x: event.clientX, y: event.clientY };
    
    rafIdRef.current = requestAnimationFrame(() => {
      const rect = blocksRef.current.getBoundingClientRect();
      const x = mousePosRef.current.x - rect.left;
      const y = mousePosRef.current.y - rect.top;
      const col = Math.floor(x / BLOCK_SIZE);
      const row = Math.floor(y / BLOCK_SIZE);
      
      const blockContainer = blocksRef.current;
      if (!blockContainer) return;
      
      const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
      const index = row * numCols + col;
      const block = blockContainer.children[index];
      
      if (block && !block.classList.contains("junni-highlight")) {
        const highlights = blockContainer.querySelectorAll('.junni-highlight');
        highlights.forEach(h => h.classList.remove('junni-highlight'));
        block.classList.add("junni-highlight");
        
        setTimeout(() => {
          if (block.classList.contains("junni-highlight")) {
            block.classList.remove("junni-highlight");
          }
        }, 300);
      }
      rafIdRef.current = null;
    });
  }, []);

  // Snake-like hover effect - FIXED to prevent loops
  const handleTileMouseEnter = useCallback((tile, index) => {
    if (!gsapRef.current || isMobile || processingRef.current) return;
    
    processingRef.current = true;
    
    // Don't process the same tile repeatedly
    if (lastProcessedTileRef.current === index) {
      processingRef.current = false;
      return;
    }
    lastProcessedTileRef.current = index;
    
    // Check if tile is already in queue
    const isAlreadyInQueue = snakeQueueRef.current.some(item => item.index === index);
    if (isAlreadyInQueue) {
      processingRef.current = false;
      return;
    }
    
    // Add tile to snake queue
    snakeQueueRef.current.push({ tile, index, time: Date.now() });
    
    // Keep only SNAKE_LENGTH tiles in the queue
    if (snakeQueueRef.current.length > SNAKE_LENGTH) {
      snakeQueueRef.current.shift();
    }
    
    // Animate each tile in the snake with staggered delays
    snakeQueueRef.current.forEach((snakeSegment, segmentIndex) => {
      const delay = segmentIndex * SNAKE_SPEED;
      
      setTimeout(() => {
        if (snakeSegment.tile) {
          animateSnakeTile(snakeSegment.tile, snakeSegment.index, segmentIndex);
        }
      }, delay);
    });
    
    // Store mouse position for direction calculation
    mouseHistoryRef.current.push({
      x: mousePosRef.current.x,
      y: mousePosRef.current.y,
      time: Date.now(),
      tileIndex: index
    });
    
    // Keep only recent history
    if (mouseHistoryRef.current.length > 10) {
      mouseHistoryRef.current.shift();
    }
    
    // Allow processing again after a short delay
    setTimeout(() => {
      processingRef.current = false;
    }, 100);
    
  }, [isMobile]);

  // Animate a single snake tile
  const animateSnakeTile = useCallback((tile, index, segmentIndex) => {
    if (!gsapRef.current || !tile) return;
    
    const col = index % COLS;
    const tiltY = TILT_MAP[col] || 0;
    
    // Calculate intensity based on position in snake
    const intensity = 1 - (segmentIndex / SNAKE_LENGTH) * 0.5;
    
    // Calculate rotation based on mouse direction (for head only)
    let extraRotation = 0;
    if (segmentIndex === 0 && mouseHistoryRef.current.length >= 2) {
      const recentHistory = mouseHistoryRef.current.slice(-3);
      if (recentHistory.length >= 2) {
        const dx = recentHistory[recentHistory.length - 1].x - recentHistory[0].x;
        const dy = recentHistory[recentHistory.length - 1].y - recentHistory[0].y;
        extraRotation = Math.atan2(dy, dx) * 20;
      }
    }
    
    // Kill any existing animations on this tile
    gsapRef.current.killTweensOf(tile);
    
    // Base rotation
    const baseRotation = isFlipped.current ? 180 : 0;
    const flipRotation = 360 * intensity;
    
    // Snake-like animation
    gsapRef.current.timeline()
      .to(tile, {
        rotateX: baseRotation + flipRotation,
        rotateY: tiltY + extraRotation,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(tile, {
        rotateX: baseRotation,
        rotateY: 0,
        duration: 0.2,
        delay: 0.1,
        ease: "power1.inOut"
      }, ">");
      
  }, []);

  // Smooth mouse movement tracking for snake-like hover - FIXED THROTTLING
  const handleMouseMoveOnBoard = useCallback((event) => {
    if (!boardRef.current || isMobile) return;
    
    // Throttle mouse moves to prevent loops
    const now = Date.now();
    if (now - lastMouseMoveTimeRef.current < 50) { // 50ms throttle
      return;
    }
    lastMouseMoveTimeRef.current = now;
    
    const rect = boardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Only trigger if mouse is actually over the board
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const col = Math.min(Math.floor((x / rect.width) * COLS), COLS - 1);
      const row = Math.min(Math.floor((y / rect.height) * ROWS), ROWS - 1);
      const index = row * COLS + col;
      
      const tiles = document.querySelectorAll(".junni-tile");
      const tile = tiles[index];
      
      if (tile) {
        // Use requestAnimationFrame for smoother processing
        requestAnimationFrame(() => {
          handleTileMouseEnter(tile, index);
        });
      }
    }
  }, [handleTileMouseEnter, isMobile]);

  // Improved flip all tiles with wave effect
  const flipAllTiles = useCallback(() => {
    if (!gsapRef.current) return;
    
    const tiles = document.querySelectorAll(".junni-tile");
    if (tiles.length === 0) return;
    
    isFlipped.current = !isFlipped.current;
    
    // Kill any existing animations
    gsapRef.current.killTweensOf(tiles);
    snakeQueueRef.current = [];
    processingRef.current = false;
    
    const targetRotation = isFlipped.current ? 180 : 0;
    
    // Create wave effect from center
    const centerRow = Math.floor(ROWS / 2);
    const centerCol = Math.floor(COLS / 2);
    
    gsapRef.current.to(tiles, {
      rotateX: targetRotation,
      duration: 0.6,
      stagger: (index) => {
        const row = Math.floor(index / COLS);
        const col = index % COLS;
        const distance = Math.sqrt(
          Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
        );
        return distance * 0.1;
      },
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        gsapRef.current.set(tiles, { rotateX: targetRotation });
      }
    });
  }, []);

  // Touch support for mobile
  const handleTileTouch = useCallback((tile, index, event) => {
    if (!gsapRef.current || processingRef.current) return;
    event.preventDefault();
    
    processingRef.current = true;
    
    // Create snake effect from touch point
    const tiles = document.querySelectorAll(".junni-tile");
    const row = Math.floor(index / COLS);
    
    // Get SNAKE_LENGTH tiles in a row
    const snakeTiles = [];
    for (let i = 0; i < SNAKE_LENGTH; i++) {
      const snakeIndex = index + i;
      if (snakeIndex < tiles.length && Math.floor(snakeIndex / COLS) === row) {
        snakeTiles.push(tiles[snakeIndex]);
      }
    }
    
    // Animate each tile with delay
    snakeTiles.forEach((snakeTile, i) => {
      setTimeout(() => {
        if (snakeTile) {
          const col = snakeTile.dataset.col;
          const tiltY = TILT_MAP[col] || 0;
          
          gsapRef.current.killTweensOf(snakeTile);
          gsapRef.current.to(snakeTile, {
            rotateX: isFlipped.current ? 540 : 360,
            rotateY: tiltY,
            duration: 0.3,
            ease: "back.out(1.2)",
            onComplete: () => {
              gsapRef.current.to(snakeTile, {
                rotateX: isFlipped.current ? 180 : 0,
                rotateY: 0,
                duration: 0.15,
                ease: "power1.out"
              });
            }
          });
        }
      }, i * 80);
    });
    
    setTimeout(() => {
      processingRef.current = false;
    }, SNAKE_LENGTH * 80 + 100);
    
  }, []);

  // Create individual tile - REMOVE direct mouseenter listener to prevent conflicts
  const createTile = useCallback((row, col, index) => {
    const tile = document.createElement("div");
    tile.className = "junni-tile";
    tile.dataset.index = index;
    tile.dataset.row = row;
    tile.dataset.col = col;
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

    // REMOVED: Direct mouseenter listener on each tile
    // We'll handle all mouse movement through the board container
    
    // Touch interaction for mobile
    const handleTouchStart = (e) => handleTileTouch(tile, index, e);
    tile.addEventListener("touchstart", handleTouchStart, { passive: false });
    
    // Keyboard interaction
    tile.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Simulate hover for keyboard
        handleTileMouseEnter(tile, index);
      }
    });

    // Focus styles
    tile.addEventListener("focus", () => {
      tile.classList.add("junni-tile-focused");
    });
    
    tile.addEventListener("blur", () => {
      tile.classList.remove("junni-tile-focused");
    });

    return tile;
  }, [handleTileMouseEnter, handleTileTouch]);

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
    blocksRef.current.style.gridTemplateRows = `repeat(${numRows}, ${BLOCK_SIZE}px)`;
    
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

  // Initialize with proper event handling
  const initialize = useCallback(() => {
    if (!gsapRef.current) return;
    
    createBoard();
    createBlocks();
    
    // Single mousemove handler on window
    let mouseMoveTimeout;
    const handleMouseMove = (e) => {
      if (mouseMoveTimeout) clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        highlightBlock(e);
        handleMouseMoveOnBoard(e);
      }, 16);
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mouseMoveTimeout) clearTimeout(mouseMoveTimeout);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      snakeQueueRef.current = [];
      mouseHistoryRef.current = [];
      processingRef.current = false;
    };
  }, [createBoard, createBlocks, handleMouseMoveOnBoard, highlightBlock, handleResize]);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
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
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      gsapRef.current?.killTweensOf?.('.junni-tile, .junni-block');
      snakeQueueRef.current = [];
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
          onTouchEnd={(e) => {
            e.preventDefault();
            flipAllTiles();
          }}
        >
          {isMobile ? 'Tap to Flip' : 'Flip Tiles'}
        </button>
      </div>
    </main>
  );
};

export default JunniLandingPage;