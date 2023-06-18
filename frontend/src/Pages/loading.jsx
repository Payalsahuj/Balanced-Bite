import React from 'react';
import { Spinner, Box, Img, position } from '@chakra-ui/react';
import cap from "../Image/cap black.png"

const SpinnerWithLetter = ({ letter, ...props }) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Spinner {...props} />
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      fontWeight="bold"
      fontSize="2em"
 
    >
      {letter}
    </Box>
  </Box>
);

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
        <Box >
      <SpinnerWithLetter
        
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='#0f346c'
        // size='600px'
        width="170px"
        height="170px"
      />
      <Box style={{position:"relative",top:"-49%",left:'15%'}}  >
        <Img  style={{height:"120px",width:"120px"}} src={cap} alt="" />
      </Box>
      </Box>
    </div>
  );
}