
import { motion, AnimatePresence } from "framer-motion"

interface MenuItem {
  label: string
  href: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

interface NavMenuProps {
  sections: MenuSection[]
  isOpen: boolean
  onClose: () => void
}

export function NavMenu({ sections, isOpen, onClose }: NavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`dropdown-menu absolute top-[44px] left-0 right-0 backdrop-blur-md transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onMouseLeave={onClose}
          >
            <div className="max-w-5xl mx-auto pl-16 py-8">
              <div className="flex flex-row gap-x-20">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-6">
                    <h3>{section.title}</h3>
                    <ul className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            className="text-white hover:text-white/80 transition-colors font-semibold"
                            onClick={onClose}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

