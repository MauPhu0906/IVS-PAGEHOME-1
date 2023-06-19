/* eslint-disable @next/next/no-img-element */
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

import { ReactElement } from "react";
import {IoMdClock} from "react-icons/io"
import{IoIosEye}from "react-icons/io";
import{
  AiOutlineUnorderedList,
}from "react-icons/ai"
import Card from "../Cards/Cards";

const products = [
  {
    id: 0,
    head: "IFMS",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#",
    Icon: IoMdClock,
    img:"https://picsum.photos/id/137/1000/1000",
  },
  {
    id: 1,
    head: "IHRM",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#",
    img:"https://picsum.photos/id/251/1000/1000",
    Icon: AiOutlineUnorderedList,
  },
  {
    id: 2,
    head: "IWMS",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#",
    img:"https://picsum.photos/id/312/1000/1000",
    Icon: IoIosEye,
    
  },
  {
    id: 3,
    head: "IVS Workflow",
    description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: "#",
    img:"https://picsum.photos/id/423/1000/1000",
    Icon: IoMdClock,
  },
  {
    id: 4,
    head: "kintone",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    href: "#",
    img:"https://picsum.photos/id/443/1000/1000",
    Icon: AiOutlineUnorderedList,
  },
  {
    id: 5,
    head: "Aizen",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    href: "#",
    img:"https://picsum.photos/id/555/1000/1000.jpg",
    Icon: IoIosEye,
    
  },
]


export default function BusinessFeature() {
  return (
    <Box className="parallax" p={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading  fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          SẢN PHẨM PHẦN MỀM
        </Heading>
        <div className="decorateLineGray">
          <div className="decorateLineOrange"></div>
        </div>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Ứng dụng công nghệ cao cho cuộc sống dễ dàng hơn.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0}>
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Card
              heading={product.head}
              icon={<Icon as={product.Icon} w={10} h={10} color={"white"} />}
              description= {product.description}
              imgs={product.img}
              href={product.href}
            />
          ))}
        </SimpleGrid>
      </Container>
      
    </Box>
  );
}
