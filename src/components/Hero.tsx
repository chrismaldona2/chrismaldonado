import MainInfo from "@/components/MainInfo";
import SocialMediaList from "./SocialMediaList";

const Hero = () => {
  return (
    <header className="pt-24 lg:py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between  ">
      <MainInfo />
      <div className="ml-0.5 mt-24  flex items-center">
        <SocialMediaList />
      </div>
    </header>
  );
};

export default Hero;
