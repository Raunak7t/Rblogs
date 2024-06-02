import React from "react";
import {
  AddBlogForm,
  Container,
  Header,
  Input,
  Logo,
  PostCard,
  Select,
} from "../components/";

function LandingPage() {
  return (
    <div className="">
      <Header />
      <div className="h-96"></div>
      <Container>
        <AddBlogForm />
        <Logo />
        LandingPage
        <PostCard />
        ;lksdfkj
        <Input label="Raunak i" type="password" />
        <Select label="Option:" options={[3, 5, 4]} />
      </Container>
      <div className="h-screen"></div>
    </div>
  );
}

export default LandingPage;
