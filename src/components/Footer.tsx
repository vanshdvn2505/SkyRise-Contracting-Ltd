import { Link } from "react-router-dom"
import { Phone } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#1a2230] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">SkyRise Contracting Ltd.</h3>
            <p className="mb-4">Commercial Design & Construction Specialists</p>
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5 text-red-600" />
                <span>778-325-3540</span>
              </div>
              <div className="flex justify-center items-center">
                <Phone className="mr-2 h-5 w-5 text-red-600" />
                <span>604-720-2407</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-red-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Our Mission</h3>
            <p>
            Build with integrity,
            precision, and excellence.
            We are dedicated to delivering exceptional craftsmanship while
            fostering strong relationships with our clients
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SkyRise Contracting Ltd All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

