import React from "react";
import NavBar from "./components/NavBar.jsx";
import VendorNavBar from "./components/VendorNavBar";
import PublicNavBar from "./components/PublicNavBar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import { AnimatePresence, motion } from "framer-motion";

// User Pages
import ConfigurePlan4 from "./Userpages/ConfigurePlan4.jsx";
import AhaarMitraMultiAddress10 from "./Userpages/AhaarMitraMultiAddress10.jsx";
import TiffinSeeker9 from "./Userpages/TiffinSeeker9.jsx";
import SecureCheckout5 from "./Userpages/SecureCheckout5.jsx";
import AhaarMitraOnboarding11 from "./Userpages/AhaarMitraOnboarding11.jsx";
import CheckoutConfirmation3 from "./Userpages/CheckoutConfirmation3.jsx";
import DeliveryAddress14 from "./Userpages/DeliveryAddress14.jsx";
import TiffinTrial2 from "./Userpages/TiffinTrial2.jsx";
import TiffinSeekerRegistration13 from "./Userpages/TiffinSeekerRegistration13.jsx";
import AhaarMitraOrders15 from "./Userpages/AhaarMitraOrders15.jsx";
import VendorDetails1 from "./Userpages/VendorDetails1.jsx";
import AhaarMitraSubscriptions from "./Userpages/AhaarMitraSubscriptions16.jsx";
import AhaarMitraSupport from "./Userpages/AhaarMitraSupport17.jsx";
import CustomerAccount from "./Userpages/CustomerAccount18.jsx";

// Vendor Pages
import RegisterProvider1 from "./VendorPages/RegisterProvider1.jsx";
import BusinessDetails2 from "./VendorPages/BusinessDetails2.jsx";
import PayoutSetup3 from "./VendorPages/PayoutSetup3.jsx";
import SuccessIntelligence6 from "./VendorPages/SuccessIntelligence6.jsx";
import CulinaryTrends5 from "./VendorPages/CulinaryTrends5.jsx";
import AhaarMitraTracker4 from "./VendorPages/AhaarMitraTracker4.jsx";
import VendorDashboard7 from "./VendorPages/VendorDashboard7.jsx";
import VendorFinance8 from "./VendorPages/VendorFinance8.jsx";

// Utils
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Loader from "./components/Loader.jsx";

const App = () => {
  const location = useLocation();

  // 🔒 ROUTES WHERE NAVBAR SHOULD BE HIDDEN
  const hideNavbarRoutes = ["/11", "/13", "/14", "/5", "/v1", "/v2", "/v3"];
  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route),
  );

  // 👤 AUTH STATE (TEMP - replace later)
  const isLoggedIn = true; // change to auth later
  const isVendor = false; // change based on role

  // 🧠 DETECT VENDOR ROUTES
  const vendorRoutes = ["/v4", "/v5", "/v6", "/v7"];
  const isVendorPage = vendorRoutes.includes(location.pathname);

  // 🔥 LOADER STATE
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthReady, setIsAuthReady] = React.useState(false);

  React.useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
    setIsAuthReady(true);
  }, 2720);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔥 LOADER */}
      {/* <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence> */}

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen"
        >
          {/* ✅ NAVBAR LOGIC */}
          {isAuthReady &&
            !shouldHideNavbar &&
            (isLoggedIn ? (
              isVendorPage ? (
                <VendorNavBar />
              ) : (
                <NavBar />
              )
            ) : (
              <PublicNavBar />
            ))}

          <ScrollToTop />

          {/* MAIN CONTENT */}
          <div className="flex-grow">
            <Routes location={location}>
              {/* Redirect */}
              <Route path="/" element={<Navigate to="/explore" replace />} />

              {/* User Routes */}
              <Route path="/explore" element={<TiffinSeeker9 />} />
              <Route path="/1" element={<VendorDetails1 />} />
              <Route path="/2" element={<TiffinTrial2 />} />
              <Route path="/3" element={<CheckoutConfirmation3 />} />
              <Route path="/4" element={<ConfigurePlan4 />} />
              <Route path="/5" element={<SecureCheckout5 />} />
              <Route path="/10" element={<AhaarMitraMultiAddress10 />} />
              <Route path="/11" element={<AhaarMitraOnboarding11 />} />
              <Route path="/13" element={<TiffinSeekerRegistration13 />} />
              <Route path="/14" element={<DeliveryAddress14 />} />
              <Route path="/orders" element={<AhaarMitraOrders15 />} />
              <Route path="/16" element={<AhaarMitraSubscriptions />} />
              <Route path="/17" element={<AhaarMitraSupport />} />
              <Route path="/18" element={<CustomerAccount />} />

              <Route
                path="/subscription"
                element={<AhaarMitraSubscriptions />}
              />
              <Route path="/support" element={<AhaarMitraSupport />} />
              <Route path="/account" element={<CustomerAccount />} />

              {/* Vendor Routes */}
              <Route path="/v1" element={<RegisterProvider1 />} />
              <Route path="/v2" element={<BusinessDetails2 />} />
              <Route path="/v3" element={<PayoutSetup3 />} />
              <Route path="/v4" element={<AhaarMitraTracker4 />} />
              <Route path="/v5" element={<CulinaryTrends5 />} />
              <Route path="/v6" element={<SuccessIntelligence6 />} />
              <Route path="/v7" element={<VendorDashboard7 />} />
              {/* <Route path="/v8" element={<VendorFinance8 />} /> */}
            </Routes>
          </div>

          {/* FOOTER */}
          {!shouldHideNavbar && <Footer />}
        </motion.div>
      )}
    </div>
  );
};

export default App;
