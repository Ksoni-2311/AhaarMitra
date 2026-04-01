import React from 'react'
import NavBar from './components/NavBar.jsx'
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from './components/Footer.jsx'

// User Pages
import ConfigurePlan4 from './Userpages/ConfigurePlan4.jsx'
import AhaarMitraMultiAddress10 from './Userpages/AhaarMitraMultiAddress10.jsx'
import TiffinSeeker9 from './Userpages/TiffinSeeker9.jsx';
import SecureCheckout5 from './Userpages/SecureCheckout5.jsx';
import AhaarMitraOnboarding11 from './Userpages/AhaarMitraOnboarding11.jsx';
import CheckoutConfirmation3 from './Userpages/CheckoutConfirmation3.jsx';
import DeliveryAddress14 from './Userpages/DeliveryAddress14.jsx';
import TiffinTrial2 from './Userpages/TiffinTrial2.jsx';
import TiffinSeekerRegistration13 from './Userpages/TiffinSeekerRegistration13.jsx';
import AhaarMitraOrders15 from './Userpages/AhaarMitraOrders15.jsx';
import VendorDetails1 from './Userpages/VendorDetails1.jsx';

// Vendor Pages
import RegisterProvider1 from './VendorPages/RegisterProvider1.jsx';
import BusinessDetails2 from './VendorPages/BusinessDetails2.jsx';
import PayoutSetup3 from './VendorPages/PayoutSetup3.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';
import Loader from './components/Loader.jsx';
import SuccessIntelligence6 from './VendorPages/SuccessIntelligence6.jsx';
import CulinaryTrends5 from './VendorPages/CulinaryTrends5.jsx';
import AhaarMitraTracker4 from './VendorPages/AhaarMitraTracker4.jsx';
import VendorDashboard7 from './VendorPages/VendorDashboard7.jsx';
import VendorFinance8 from './VendorPages/VendorFinance8.jsx';

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/11", "/13","/14","/v1","/v2","/v3"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const [isLoading, setIsLoading] = React.useState(true);


  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
       {shouldShowNavbar && <NavBar />}
      {/* {isLoading && <Loader />} */}
      <div className=''>
        <ScrollToTop />
      </div>

      {/* Main Content */}
      <div className="flex-grow">

        <Routes>
          <Route path="/1" element={<VendorDetails1 />} />
          <Route path="/2" element={<TiffinTrial2 />} />
          <Route path="/3" element={<CheckoutConfirmation3 />} />
          <Route path="/4" element={<ConfigurePlan4 />} />
          <Route path="/5" element={<SecureCheckout5 />} />
          <Route path="/9" element={<TiffinSeeker9 />} />
          <Route path="/10" element={<AhaarMitraMultiAddress10 />} />
          <Route path="/11" element={<AhaarMitraOnboarding11 />} />
          <Route path="/13" element={<TiffinSeekerRegistration13 />} />
          <Route path="/14" element={<DeliveryAddress14 />} />
          <Route path="/15" element={<AhaarMitraOrders15 />} />

          {/* Vendor Routes */}
          <Route path="/v1" element={<RegisterProvider1 />} />
          <Route path="/v2" element={<BusinessDetails2 />} />
          <Route path="/v3" element={<PayoutSetup3 />} />
          <Route path="/v4" element={<AhaarMitraTracker4 />} />
          <Route path="/v5" element={<CulinaryTrends5 />} />
          <Route path="/v6" element={<SuccessIntelligence6 />} />
          <Route path="/v7" element={<VendorDashboard7 />} />
          <Route path="/v8" element={<VendorFinance8 />} />
        </Routes>
      </div>

      {/* Footer */}
      {shouldShowNavbar && <Footer />}

    </div>
  );
};

export default App;