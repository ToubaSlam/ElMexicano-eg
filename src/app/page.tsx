import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Bundle from "@/components/Bundle";
import Offers from "@/components/Offers";
import Delivery from "@/components/Delivery";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Menu />
      <Bundle />
      <Offers />
      <Delivery />
      <Locations />
    </>
  );
}
