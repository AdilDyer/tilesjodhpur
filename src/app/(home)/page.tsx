import React from "react";
import LandingBanner from "./components/LandingBanner";
import FirstVideoBanner from "./components/FirstVideoBanner";
import CategoryCarousel from "./components/CategoriesCarousel";
import CustomerCarousel from "./components/CustomerCarousel";
import WallTilesSpecific from "./components/WallTilesSpecific";
import Trending from "./components/Trending";
import Finishes from "./components/Finishes";
import WhereBuy from "./components/WhereBuy";
import AboutUs from "./components/AboutUs";
import WhatsHappening from "./components/WhatsHappening";
import DownloadCatalogue from "./components/DownloadCatalogue";
const Home = () => {
  return (
    <>
      <LandingBanner></LandingBanner>
      <FirstVideoBanner></FirstVideoBanner>
      <CustomerCarousel></CustomerCarousel>
      <CategoryCarousel></CategoryCarousel>
      <WallTilesSpecific></WallTilesSpecific>
      <Trending></Trending>
      <Finishes></Finishes>
      <WhereBuy></WhereBuy>
      <AboutUs></AboutUs>
      <WhatsHappening></WhatsHappening>
      <DownloadCatalogue></DownloadCatalogue>
    </>
  );
};

export default Home;
