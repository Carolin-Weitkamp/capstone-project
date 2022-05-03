import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['yellow', 'yellow', 'yellow', 'yellow'];

export const MenuItem = ({ id, name, linkUrl }) => {
  const style = { border: `2px solid ${colors[id]}` };
  return (
    <StyledLi
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledTextPlaceholder style={style}>
        <Link href={linkUrl} passHref>
          {name}
        </Link>
      </StyledTextPlaceholder>
    </StyledLi>
  );
};

const StyledTextPlaceholder = styled(motion.div)`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`;

const StyledLi = styled(motion.div)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
