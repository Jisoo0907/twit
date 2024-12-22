import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 인증된 사용자에게만 보여지게끔
    children: [
      {
        path: "", // 비워두면 부모 경로와 동일(여기서는 "/")
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box
    }  
  body {
      background-color: black;
      color: white;
      font-family: pretendard;
    }
  `;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    // wait for firebase
    await auth.authStateReady(); // firebase 인증 상태 초기화/준비 완료될 때까지 대기
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
