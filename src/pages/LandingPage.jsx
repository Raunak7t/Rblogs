import React, { useState } from "react";
import {
  AddBlogForm,
  Button,
  Container,
  Header,
  Input,
  Logo,
  PostCard,
  Select,
} from "../components/";
import { RiLoader4Fill } from "react-icons/ri";

function LandingPage() {
  const [btnLoad, setBtnLoad] = useState(false);
  return (
    <div className="">
      <Header />
      <div className="h-96"></div>
      <Container>
        <Logo />
        LandingPage
        <Button
          onClick={() => {
            setBtnLoad(!btnLoad);
          }}
          isLoading={btnLoad}
        >
          Click
        </Button>
      </Container>
      <div className="h-screen"></div>
    </div>
  );
}

export default LandingPage;
