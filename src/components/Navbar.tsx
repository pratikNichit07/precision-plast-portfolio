import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/about" },
    { name: "Services", id: "products", path: "/services" },
    { name: "Contact", id: "contact", path: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled || !isHomePage ? "text-sanika-blue" : "text-white"
              }`}
            >
              SANIKA PLAST
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              // For home, about, and services pages, use direct links
              if (
                link.path === "/" ||
                link.path === "/about" ||
                link.path === "/services"
              ) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${
                      isScrolled || !isHomePage
                        ? "text-sanika-darkgray"
                        : "text-white"
                    } hover:text-sanika-blue transition-colors duration-200 font-medium`}
                  >
                    {link.name}
                  </Link>
                );
              }

              // For facilities and contact sections on home page
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                  }}
                  className={`${
                    isScrolled || !isHomePage
                      ? "text-sanika-darkgray"
                      : "text-white"
                  } hover:text-sanika-blue transition-colors duration-200 font-medium`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            className={`md:hidden ${
              isScrolled || !isHomePage ? "text-sanika-darkgray" : "text-white"
            } hover:text-sanika-blue transition-colors`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-50 animate-fade-in">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => {
              if (
                link.path === "/" ||
                link.path === "/about" ||
                link.path === "/services"
              ) {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sanika-darkgray hover:text-sanika-blue transition-colors text-xl font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sanika-darkgray hover:text-sanika-blue transition-colors text-xl font-medium"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
