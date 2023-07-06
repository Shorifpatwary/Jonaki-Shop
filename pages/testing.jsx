
import Link from "next/link";
import { useState } from "react";

const Home = ({
  posts,
}) => {
  const [apiresponse, setApiresponse] = useState("response");
  if (posts) {
    console.log("this is a posts ", posts);
    console.log("this is a api json file ", apis.posts);
    console.log(apiresponse);
  } else {
    console.log("nothing return ");
    console.log(apiresponse);
  }
  return (<div>This is jonaki testing page : localhost api testing</div>);
};

export default Home;

// for homepage sever side data
export const getServerSideProps = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/posts");
  // if (response.ok) {
    var posts = await response.json();
    // setApiresponse("success response");
  // } else {
  //   setApiresponse("error response");
  // }
  return {
    props: {
      posts,
    },
  };
};

