import BestSellingCofe from "@/components/BestSellingCofe";
import CoffeAtHome from "@/components/CoffeAtHome";
import ExploreItem from "@/components/ExploreItem";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExploreItem />
      <BestSellingCofe />
      <CoffeAtHome />
      <Review />
      <Footer />
    </>
  );
}
