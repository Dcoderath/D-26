// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import './JunniLandingPage.css';

// const ROWS = 6;
// const COLS = 6;
// const BLOCK_SIZE = 50;
// const SNAKE_LENGTH = 5;
// const SNAKE_SPEED = 80;
// const TILT_MAP = { 0: -25, 1: -12, 2: -3, 3: 3, 4: 12, 5: 25 };

// const JunniLandingPage = () => {
//   const isFlipped = useRef(false);
//   const boardRef = useRef(null);
//   const blocksRef = useRef(null);
//   const gsapRef = useRef(null);
//   const snakeQueueRef = useRef([]);
//   const rafIdRef = useRef(null);
//   const mousePosRef = useRef({ x: 0, y: 0 });
//   const [isGsapLoaded, setIsGsapLoaded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const processingRef = useRef(false);
//   const lastMouseMoveTimeRef = useRef(0);
//   const hoveredTilesSet = useRef(new Set()); 
//   const tileElementsRef = useRef([]); 

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const highlightBlock = useCallback((event) => {
//     if (!blocksRef.current || rafIdRef.current) return;
//     mousePosRef.current = { x: event.clientX, y: event.clientY };
//     rafIdRef.current = requestAnimationFrame(() => {
//       const rect = blocksRef.current.getBoundingClientRect();
//       const x = mousePosRef.current.x - rect.left;
//       const y = mousePosRef.current.y - rect.top;
//       const col = Math.floor(x / BLOCK_SIZE);
//       const row = Math.floor(y / BLOCK_SIZE);
//       const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
//       const index = row * numCols + col;
//       const block = blocksRef.current?.children[index];
//       if (block && !block.classList.contains("junni-highlight")) {
//         block.classList.add("junni-highlight");
//         setTimeout(() => block.classList.remove("junni-highlight"), 300);
//       }
//       rafIdRef.current = null;
//     });
//   }, []);

//   const animateSnakeTile = useCallback((tile, index, segmentIndex) => {
//     if (!gsapRef.current || !tile) return;
//     const col = index % COLS;
//     const tiltY = TILT_MAP[col] || 0;
//     const intensity = 1 - (segmentIndex / SNAKE_LENGTH) * 0.5;
//     gsapRef.current.killTweensOf(tile);
//     const baseRotation = isFlipped.current ? 180 : 0;
//     gsapRef.current.timeline()
//       .to(tile, { rotateX: baseRotation + (360 * intensity), rotateY: tiltY, duration: 0.3, ease: "power2.out" })
//       .to(tile, { rotateX: baseRotation, rotateY: 0, duration: 0.2, delay: 0.1, ease: "power1.inOut", onComplete: () => hoveredTilesSet.current.delete(index) });
//   }, []);

//   const handleTileInteraction = useCallback((tile, index) => {
//     if (!gsapRef.current || isMobile || processingRef.current || hoveredTilesSet.current.has(index)) return;
//     processingRef.current = true;
//     hoveredTilesSet.current.add(index);
//     snakeQueueRef.current.push({ tile, index });
//     if (snakeQueueRef.current.length > SNAKE_LENGTH) {
//       const removed = snakeQueueRef.current.shift();
//       if (removed) hoveredTilesSet.current.delete(removed.index);
//     }
//     snakeQueueRef.current.forEach((seg, i) => setTimeout(() => animateSnakeTile(seg.tile, seg.index, i), i * SNAKE_SPEED));
//     setTimeout(() => { processingRef.current = false; }, 100);
//   }, [isMobile, animateSnakeTile]);

//   const flipAllTiles = useCallback(() => {
//     if (!gsapRef.current) return;
//     isFlipped.current = !isFlipped.current;
//     const targetRotation = isFlipped.current ? 180 : 0;
//     gsapRef.current.to(tileElementsRef.current, {
//       rotateX: targetRotation,
//       duration: 0.6,
//       stagger: { grid: [ROWS, COLS], from: "center", amount: 0.5 },
//       ease: "elastic.out(1, 0.5)"
//     });
//   }, []);

//   const createTile = useCallback((row, col, index) => {
//     const tile = document.createElement("div");
//     tile.className = "junni-tile";
//     const front = document.createElement("div");
//     front.className = "junni-tile-face junni-tile-front";
//     const back = document.createElement("div");
//     back.className = "junni-tile-face junni-tile-back";
//     tile.appendChild(front);
//     tile.appendChild(back);
//     const bgPos = `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`;
//     front.style.backgroundPosition = bgPos;
//     back.style.backgroundPosition = bgPos;
//     tile.addEventListener("mouseenter", () => handleTileInteraction(tile, index));
//     return tile;
//   }, [handleTileInteraction]);

//   const createBoard = useCallback(() => {
//     if (!boardRef.current) return;
//     boardRef.current.innerHTML = '';
//     tileElementsRef.current = [];
//     for (let i = 0; i < ROWS; i++) {
//       const row = document.createElement("div");
//       row.className = "junni-row";
//       for (let j = 0; j < COLS; j++) {
//         const tile = createTile(i, j, i * COLS + j);
//         tileElementsRef.current.push(tile);
//         row.appendChild(tile);
//       }
//       boardRef.current.appendChild(row);
//     }
//   }, [createTile]);

//   const createBlocks = useCallback(() => {
//     if (!blocksRef.current) return;
//     const numCols = Math.ceil(window.innerWidth / BLOCK_SIZE);
//     const numRows = Math.ceil(window.innerHeight / BLOCK_SIZE);
//     blocksRef.current.innerHTML = '';
//     blocksRef.current.style.gridTemplateColumns = `repeat(${numCols}, ${BLOCK_SIZE}px)`;
//     for (let i = 0; i < numCols * numRows; i++) {
//       const block = document.createElement("div");
//       block.className = "junni-block";
//       blocksRef.current.appendChild(block);
//     }
//   }, []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//     script.onload = () => { gsapRef.current = window.gsap; setIsGsapLoaded(true); };
//     document.head.appendChild(script);
//   }, []);

//   useEffect(() => {
//     if (isGsapLoaded) {
//       createBoard();
//       createBlocks();
//       window.addEventListener('mousemove', highlightBlock);
//       window.addEventListener('resize', createBlocks);
//       return () => {
//         window.removeEventListener('mousemove', highlightBlock);
//         window.removeEventListener('resize', createBlocks);
//       };
//     }
//   }, [isGsapLoaded, createBoard, createBlocks, highlightBlock]);

//   return (
//     <main className="junni-landing-page limelight-regular">
//       <nav className="junni-nav">
//         <a href="#" className="junni-nav-link">Codegrid</a>
//       </nav>

//       <section className="junni-board" ref={boardRef}></section>

//       {/* <div className="junni-flip-button-container">
//         <button className="junni-flip-button" onClick={flipAllTiles}>
//           {isMobile ? 'Tap to Flip' : 'Flip Tiles'}
//         </button>
//       </div> */}

// <div className="junni-flip-button-container">
//   <button className="junni-flip-button" onClick={flipAllTiles}>
//     {isMobile ? 'Tap to Flip' : 'Flip Tiles'}
//   </button>
// </div>

//       <div className="junni-blocks-container">
//         <div id="junni-blocks" ref={blocksRef} className="junni-blocks-grid"></div>
//       </div>
//     </main>
//   );
// };

// export default JunniLandingPage;










import React, { useEffect, useRef, useState, useCallback } from 'react';
import './JunniLandingPage.css';

const ROWS = 6;
const COLS = 6;
const SNAKE_LENGTH = 5;
const SNAKE_SPEED = 80;
const TILT_MAP = { 0: -25, 1: -12, 2: -3, 3: 3, 4: 12, 5: 25 };

const JunniLandingPage = () => {
  const isFlipped = useRef(false);
  const boardRef = useRef(null);
  const gsapRef = useRef(null);
  const snakeQueueRef = useRef([]);
  const [isGsapLoaded, setIsGsapLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const processingRef = useRef(false);
  const hoveredTilesSet = useRef(new Set());
  const tileElementsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animateSnakeTile = useCallback((tile, index, segmentIndex) => {
    if (!gsapRef.current || !tile) return;

    const col = index % COLS;
    const tiltY = TILT_MAP[col] || 0;
    const intensity = 1 - (segmentIndex / SNAKE_LENGTH) * 0.5;

    gsapRef.current.killTweensOf(tile);

    const baseRotation = isFlipped.current ? 180 : 0;

    gsapRef.current.timeline()
      .to(tile, {
        rotateX: baseRotation + (360 * intensity),
        rotateY: tiltY,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(tile, {
        rotateX: baseRotation,
        rotateY: 0,
        duration: 0.2,
        delay: 0.1,
        ease: "power1.inOut",
        onComplete: () => hoveredTilesSet.current.delete(index)
      });
  }, []);

  const handleTileInteraction = useCallback((tile, index) => {
    if (!gsapRef.current || isMobile || processingRef.current || hoveredTilesSet.current.has(index)) return;

    processingRef.current = true;
    hoveredTilesSet.current.add(index);

    snakeQueueRef.current.push({ tile, index });

    if (snakeQueueRef.current.length > SNAKE_LENGTH) {
      const removed = snakeQueueRef.current.shift();
      if (removed) hoveredTilesSet.current.delete(removed.index);
    }

    snakeQueueRef.current.forEach((seg, i) =>
      setTimeout(() => animateSnakeTile(seg.tile, seg.index, i), i * SNAKE_SPEED)
    );

    setTimeout(() => { processingRef.current = false; }, 100);
  }, [isMobile, animateSnakeTile]);

  const flipAllTiles = useCallback(() => {
    if (!gsapRef.current) return;

    isFlipped.current = !isFlipped.current;
    const targetRotation = isFlipped.current ? 180 : 0;

    gsapRef.current.to(tileElementsRef.current, {
      rotateX: targetRotation,
      duration: 0.6,
      stagger: {
        grid: [ROWS, COLS],
        from: "center",
        amount: 0.5
      },
      ease: "elastic.out(1, 0.5)"
    });
  }, []);

  const createTile = useCallback((row, col, index) => {
    const tile = document.createElement("div");
    tile.className = "junni-tile";

    const front = document.createElement("div");
    front.className = "junni-tile-face junni-tile-front";

    const back = document.createElement("div");
    back.className = "junni-tile-face junni-tile-back";

    tile.appendChild(front);
    tile.appendChild(back);

    const bgPos = `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`;
    front.style.backgroundPosition = bgPos;
    back.style.backgroundPosition = bgPos;

    tile.addEventListener("mouseenter", () =>
      handleTileInteraction(tile, index)
    );

    return tile;
  }, [handleTileInteraction]);

  const createBoard = useCallback(() => {
    if (!boardRef.current) return;

    boardRef.current.innerHTML = '';
    tileElementsRef.current = [];

    for (let i = 0; i < ROWS; i++) {
      const row = document.createElement("div");
      row.className = "junni-row";

      for (let j = 0; j < COLS; j++) {
        const tile = createTile(i, j, i * COLS + j);
        tileElementsRef.current.push(tile);
        row.appendChild(tile);
      }

      boardRef.current.appendChild(row);
    }
  }, [createTile]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.onload = () => {
      gsapRef.current = window.gsap;
      setIsGsapLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (isGsapLoaded) {
      createBoard();
    }
  }, [isGsapLoaded, createBoard]);

  return (
    <main className="junni-landing-page limelight-regular">
      <nav className="junni-nav">
        <a href="#" className="junni-nav-link"></a>
      </nav>

      <section className="junni-board" ref={boardRef}></section>

      <div className="junni-flip-button-container">
        <button className="junni-flip-button" onClick={flipAllTiles}>
          {isMobile ? 'Tap to Flip' : 'Flip Tiles'}
        </button>
      </div>
    </main>
  );
};

export default JunniLandingPage;
