import { LoginLink } from "../components";

const HomePage = () => {
  return (
    <article className="h-full flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl text-center font-bold">
        You travel the world.
        <span className="block mt-3">WorldWise keeps track of your adventures.</span>
      </h1>
      <h2 className="text-zinc-400 text-[18px] text-center w-3/4 mx-auto mt-10 mb-6">
        A world map that tracks your footsteps into every city you can think of. Never forget your
        wonderful experiences, and show your friends how you have wandered the world.
      </h2>
      <span className="block text-center">
        <LoginLink type="hero">start tracking now</LoginLink>
      </span>

      <img src="/assets/bg-image.png" className="absolute top-0 left-0 h-full w-full -z-1" />
      <div className="bg-[linear-gradient(rgba(36,42,46,0.8),rgba(36,42,46,0.8))] absolute -z-1 w-full h-full  top-0 left-0"></div>
    </article>
  );
};

export default HomePage;
