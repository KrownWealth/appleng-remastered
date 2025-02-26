
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo";
import { NavMenu } from "./DropdownMenu";
import { MenuData } from "types/menu";
import { mainMenuItems } from "@/assets/constants/menuData";
import ThemeToggle from "./ThemeToggle";

;


export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
      {/* Primary Header */}
      <header className={`fixed top-0 w-full z-50 ${activeMenu ? "bg-[#161617]" : "bg-transparent"}`}>
        <nav className="max-w-5xl mx-auto px-4">
          <ul className="hidden md:flex justify-center items-center space-x-28 h-[44px] text-[12px]">
            <Logo />
            {mainMenuItems.map((item, index) =>
              item.sections ? (
                <button
                  key={index}
                  onMouseEnter={() => handleMenuHover(item)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ),
            )}
            <button className="text-white/80 hover:text-white transition-colors">
              <Search size={16} />
            </button>
            <ThemeToggle />
          </ul>
        </nav>

        {activeMenu && activeMenu.sections && (
          <NavMenu sections={activeMenu.sections} isOpen={true} onClose={closeMenu} />
        )}
      </header>

      {/* Secondary Scroll Header */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 shadow-lg"
          >
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-8">
                  <h2 className="text-lg font-semibold text-white">MacBook Pro</h2>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <a href="#overview" className="text-white/80 hover:text-white transition-colors">
                      Overview
                    </a>
                    <a href="#specs" className="text-white/80 hover:text-white transition-colors">
                      Tech Specs
                    </a>
                    <a href="#compare" className="text-white/80 hover:text-white transition-colors">
                      Compare
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Buy
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

