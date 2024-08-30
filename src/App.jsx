import "./App.css";

import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ContactNavBar from "./components/contactNavBar/ContactNavBar";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Route, Routes } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <ContactNavBar
        contactCardsData={[
          { icon: <MdEmail />, text: "info@company.com" },
          { icon: <MdEmail />, text: "info@company.com" },
        ]}
        socialIcons={[
          <FaFacebook />,
          <FaTwitter />,
          <FaLinkedin />,
          <FaInstagram />,
        ]}
      />

      <Navbar
        nameWebsite="VILLA"
        menuItem={["Home", "Properties", "Property Details", "Conatct Us"]}
        indexLinkActive={0}
        contentBtn="Schedule a visit"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Properties" element={<PropertiesPage />} />
        <Route path="/PropertyDetails" element={<PropertyDetailsPage />} />
        <Route path="/ConatctUs" element={<ContactUsPage />} />
      </Routes>

      <Footer text="Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: TemplateMo" />
    </>
  );
}

export default App;
