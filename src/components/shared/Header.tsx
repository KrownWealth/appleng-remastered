
import { ChevronDown, Menu, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo";
import { NavMenu } from "./DropdownMenu";
import { MenuData } from "types/menu";
import { mainMenuItems } from "@/assets/constants/menuData";



export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolledMobileMenu, setScrolledMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuData | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);


  const handleMenuHover = (menuItem: MenuData) => {
    if (menuItem.sections) {
      setActiveMenu(menuItem)
    }
  }

  const closeMenu = () => {
    setActiveMenu(null)
  }

  return (
    <>
      {/* Primary Header & Secondary Scroll Header */}
      <header className={`w-full ${activeMenu ? "bg-[#161617]" : "bg-transparent"}`}>
        <>
          <nav className="w-full lg:max-w-7xl mx-auto px-4 lg:px-0 flex h-[44px] lg:space-x-28 justify-between lg:justify-center items-center ">
            <Logo />
            <ul className="hidden lg:flex justify-center items-center space-x-28 text-[8px] ">
              {mainMenuItems.map((item, index) =>
                item.sections ? (
                  <button
                    key={index}
                    onMouseEnter={() => handleMenuHover(item)}
                    className="text-textGray hover:text-[#f5f5f5] transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={item.href || "#"}
                    className="text-textGray hover:text-[#f5f5f5] transition-colors"
                  >
                    {item.label}
                  </a>
                ),
              )}
              <button className="text-white/80 hover:text-white transition-colors">
                <Search size={16} />
              </button>
            </ul>
            <div className="flex lg:hidden space-x-4">
              <button className="text-white/80 hover:text-white transition-colors">
                <Search size={16} />
              </button>

              <button className=" text-white" onClick={() => setMobileMenu(true)}>
                <Menu size={24} />
              </button>
            </div>
          </nav>
          {/* Dropdown Menu */}
          {activeMenu && activeMenu.sections && (
            <NavMenu sections={activeMenu.sections} isOpen={true} onClose={closeMenu} />
          )}

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full h-screen bg-[#161617] text-white p-6 z-50 shadow-lg"
              >

                <button
                  className="relative right-0 top-4 text-white"
                  onClick={() => setMobileMenu(false)}
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="mt-12 flex flex-col space-y-6">
                  {mainMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href || "#"}
                      className="text-white/80 hover:text-white transition-colors text-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>


        {/* Secondary Scroll Header */}

        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 w-full bg-[#161617] border-b border-[#f5f5f5] backdrop-blur-lg z-50 shadow-lg"
            >
              <div className="w-full px-4 lg:px-16 lg:max-w-5xl mx-auto">
                <div className="flex items-center justify-between h-12">
                  <div className="flex items-center space-x-8">
                    <h2 className="text-lg font-semibold text-white">MacBook Pro</h2>
                  </div>

                  <div className="hidden lg:flex items-center space-x-4">
                    <a
                      href="#overview"
                      className="text-[#f5f5f5]  hover:text-white transition-colors text-xs font-sf"
                    >
                      Overview
                    </a>
                    <a
                      href="#specs"
                      className="text-white/80 border-b border-transparent hover:border-[#f5f5f5] hover:text-white transition-colors text-xs font-sf"
                    >
                      Tech Specs
                    </a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white text-[8px] px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Find a Store
                    </motion.button>
                  </div>

                  <div className="flex lg:hidden space-x-2">
                    <button onClick={() => setScrolledMobileMenu(true)}>
                      <ChevronDown className="text-textGray" />
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white text-[8px] px-2 py-0 rounded-full
                     hover:bg-blue-700 transition-colors"
                    >
                      Find a Store
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {scrolled && scrolledMobileMenu && (
            <AnimatePresence>
              {mobileMenu && (
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-20 left-0 w-full h-screen bg-[#161617] text-white p-6 z-50 shadow-lg"
                >


                  <div className="mt-12 flex flex-col space-y-6">
                    <a
                      href="#overview"
                      className="text-[#f5f5f5]  hover:text-white transition-colors text-xs font-sf"
                    >
                      Overview
                    </a>
                    <a
                      href="#specs"
                      className="text-white/80 border-b border-transparent hover:border-[#f5f5f5] hover:text-white transition-colors text-xs font-sf"
                    >
                      Tech Specs
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </AnimatePresence>

      </header>



    </>
  )
}

