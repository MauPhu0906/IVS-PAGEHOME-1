/* eslint-disable jsx-a11y/alt-text */
import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import * as React from "react";
import { motion } from "framer-motion";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  imgs: string;
}
export const BusinessFeature = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      stiffness: 260,
      damping: 20
    }}
  />
);

export default function Card ({ heading, description, icon, href,imgs }: CardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        w={"full"}
        maxH={"500px"}
        bg={useColorModeValue("white", "red.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"200px"}
          w={"full"}
          src={
            imgs
          }
          objectFit={"cover"}
          
        />
        <Flex justify={"center"} mt={-12} color={"white"} _hover={{color:"white"}}>
        <Center
            backgroundColor={"Darkorange"}
            rounded={"100%"}
            boxSize={"60px"}
          >
           {icon}
          </Center>
        </Flex>

        <Box p={6} cursor={"pointer"}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading mt={"10px"} fontSize={"2xl"} fontWeight={500} fontFamily={"body"} _hover={{color :"Darkorange"}} >
              {heading}
            </Heading>
            <Text mt={"10px"} color={"white.500"}>{description}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};
