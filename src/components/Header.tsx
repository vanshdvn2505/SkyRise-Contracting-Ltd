import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" }
  ]

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 200], [5, 2]);
  const scale1 = useTransform(scrollY, [0, 200], [3, 2]);

  const y = useTransform(scrollY, [0, 200], [50, 0]);
  const leftMargin = useTransform(scrollY, [0, 200], [60, 40]);
  const yMargin = useTransform(scrollY, [0, 200], [10, 5]);
  const opacity = useTransform(scrollY, [0, 100], [1, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-400 ${isHomePage ? isScrolled ? "bg-[#161616]/70 top-0" : "bg-transparent top-0" : isScrolled ? "bg-[#161616]/70 top-0" : "bg-[#161616]/70 top-0"}  text-white`}>
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        {isHomePage ? (
          <div className="relative" style={{ height: "40px" }}>
            <motion.div
              className="absolute w-14"
              style={{ y, scale, opacity, left: leftMargin }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link to="/" className="flex items-center">
                <img
                  src="/logo-removebg.png"
                  alt="Logo"
                  className="h-16 w-auto"
                />
              </Link>
            </motion.div>
          </div>
        ) : (
          <Link to="/" className="flex items-center pl-2">
            <motion.div
              style={{ scale: scale1, marginTop: yMargin, marginBottom: yMargin }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src="/logo-removebg.png"
                alt="Logo"
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>
        )}

        <nav className="hidden md:flex md:items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium hover:text-white/80 ${location.pathname === link.path ? "text-white/70" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-white hover:text-white/70" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      <motion.div
        className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#1a2230] md:hidden z-50 shadow-lg border-r border-gray-800 overflow-y-auto"
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex justify-end items-center p-4 border-b border-gray-800">
          <button
            className="text-white hover:text-white/70"
            onClick={closeMenu}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="py-4">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`px-6 py-3 text-sm font-medium hover:bg-[#1a2230]  hover:text-white/80 ${location.pathname === link.path ? "text-white/70" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  )
}

export default Header