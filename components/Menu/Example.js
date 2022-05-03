// import * as React from 'react';
// import { useRef } from 'react';
// import { motion, useCycle } from 'framer-motion';
// import { useDimensions } from './use-dimensions';
// import { MenuToggle } from './MenuToggle';
// import { Navigation } from './Navigation';
// import styled from 'styled-components';
// // import { useState } from 'react';

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// export const Example = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   // const [toggled, setToggled] = useState(false); //toggle
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   return (
//     <StyledNav
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       custom={height}
//       ref={containerRef}
//     >
//       <StyledBackground variants={sidebar} />
//       <Navigation />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </StyledNav>
//   );
// };

// const StyledBackground = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 300px;
//   background: var(--flatcolorfull);
// `;

// const StyledNav = styled(motion.nav)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   width: 300px;
// `;
