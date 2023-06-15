import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

const Button = ({ onClick, backclick }) => {
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box display="flex" justifyContent="space-between" marginTop="3rem" >
      <IconButton p={"20px 50px"}
        icon={<ArrowLeftIcon />}
        onClick={backclick}
        size={buttonSize}
        colorScheme="blue"
      />

      <IconButton p={"20px 50px"}
        icon={<ArrowRightIcon />}
        onClick={onClick}
        size={buttonSize}
        colorScheme="blue"
      />
    </Box>
  );
};

export default Button;
