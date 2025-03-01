import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import { auth } from "../firebase";

const Wrapper = styled.div``;

export default function Home() {
  auth.signOut();
  return (
    <Wrapper>
      <PostTweetForm />
    </Wrapper>
  );
}
