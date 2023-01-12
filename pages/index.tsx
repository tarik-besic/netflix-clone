import type { NextPage } from "next";
import LoginForm from "../components/LoginForm";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="bg-black absolute w-screen h-screen -z-20 overflow-hidden">
        <img className="opacity-50" src="/images/background-netflix.webp" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Home;
