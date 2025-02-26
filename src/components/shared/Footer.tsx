

export default function Footer() {
  return (
    <footer className="relative bottom-0  bg-applengGray mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Apple. All rights reserved.</p>
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

