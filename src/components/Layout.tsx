import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}

export default Layout;
