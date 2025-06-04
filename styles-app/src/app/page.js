// import Button from "./components/Button";
import { Button, HStack } from "@chakra-ui/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"
import { MdMarkEmailUnread } from "react-icons/md";


export default function Home() {
  return (
    <div>
      
      {/* <h1>Welcome to Next.js</h1>
      <Button text="Click Me" />
      <Button text="Explore Courses" />
      <Button text="About Us" /> */}

      {/* <Button>Button</Button> */}

      {/* <HStack wrap="wrap" gap="6">
        <Button size="xs">Button (xs)</Button>
        <Button size="sm">Button (sm)</Button>
        <Button size="md">Button (md)</Button>
        <Button size="lg">Button (lg)</Button>
        <Button size="xl">Button (xl)</Button>
      </HStack> */}

      <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
    <MdMarkEmailUnread />
    </div>
  );
}
