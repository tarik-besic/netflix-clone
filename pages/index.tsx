import type { NextPage } from "next";
import Image from "next/image";
import LoginForm from "../components/LoginForm.tsx";
import Footer from "../components/Footer.tsx";

const Home: NextPage = () => (
  <div className="flex items-center justify-center w-screen h-screen">
    <div className="bg-black absolute w-screen h-screen -z-20 overflow-hidden">
      <Image
        className="opacity-50"
        src="/images/background-netflix.webp"
        alt="netflix background"
        fill
      />
    </div>
    <div className="">
    <LoginForm />

    <Footer />
    </div>
  </div>
);

export default Home;
