import style from "./page.module.css";
import theme from "./theme";
import HomeHeader from "@/sections/home-header/HomeHeader";
import HomeAbout from "@/sections/home-about-quick/HomeAbout";
import HomeCallToAction from "@/sections/home-call-to-action/HomeCallToAction";
import HomeSetsUsApart from "@/sections/home-sets-us-apart/HomeSetsUsApart";
import HomeOurPartners from "@/sections/home-our-partners/HomeOurPartners";

export default function Home() {
  return (
    <div style={{ backgroundColor: theme.lightTan }}>
      <HomeHeader />
      <HomeAbout />
      <HomeSetsUsApart />
      <HomeCallToAction />
      <HomeOurPartners />
    </div>
  );
}
