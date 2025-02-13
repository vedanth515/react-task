

import NavbarComp from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/landingPage";
import BrandingPage from "./components/Branding/branding";
import DesginPage from "./components/Desgin/desgin";
import DevelopmentPage from "./components/Development/development";
import BrainPage from "./components/Brains/brain";
import PeoplePage from "./components/People/people";
import GetInTouch from "./components/Get-In-Touch/get-in-touch";
import FooterPage from "./components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppComp(){
  return(
        <div>
          <NavbarComp></NavbarComp>
          <LandingPage></LandingPage>
          <BrandingPage></BrandingPage>
          <DesginPage></DesginPage>
          <DevelopmentPage></DevelopmentPage>
          <BrainPage></BrainPage>
          <PeoplePage></PeoplePage>
          <GetInTouch></GetInTouch>
          <FooterPage></FooterPage>
        </div>
  )
}
export default AppComp;