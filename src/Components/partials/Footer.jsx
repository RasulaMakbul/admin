import React from "react"
import {FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa"

export const Footer = () => {
  const navItems = [
    {
      id: 1,
      title: "Tams Collection",
      link: "https://www.facebook.com/tamscollection01",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      title: "Tams Maternity wear",
      link: "https://www.facebook.com/tamsmaternitywear",
      icon: <FaFacebook />,
    },
    {id: 3, title: "Instagram", link: "#", icon: <FaInstagram />},
    {id: 4, title: "TikTok", link: "#", icon: <FaTiktok />},
  ]

  return (
    <div className="footer">
      <div className="footer-area bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-heading">Social Media</h4>
              <div className="footer-underline h-1 bg-white mb-4"></div>
              {navItems.map(data => (
                <div key={data.id} className="mb-2">
                  <a
                    href={data.link}
                    className="text-white flex items-center gap-2"
                  >
                    {data.icon}
                    {data.title}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-underline h-1 bg-white mb-4"></div>
              <div className="mb-2">
                <a href="#" className="text-white">
                  Home
                </a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-white">
                  About Us
                </a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <h4 className="footer-heading">Address</h4>
              <div className="footer-underline h-1 bg-white mb-4"></div>
              <div className="mb-2">
                <a
                  href="https://goo.gl/maps/eNmUZgdC7TEyHnMx6"
                  className="text-white"
                >
                  <p>
                    <i className="fas fa-location-dot text-lg"></i>
                    <strong> Shop 1:</strong> Malek Nibash, House#1, Road#4/2,
                    Block#B, Mirpur#12 Dhaka,Bangladesh{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="w-3/4">
              <p className="text-sm">
                &copy; 2022 - Tams Collection. All rights reserved.
              </p>
            </div>
            <div className="w-1/4 flex justify-end">
              <div className="social-media flex flex-row">
                Get Connected:
                <a
                  href="https://www.facebook.com/tamscollection01"
                  className="mx-1"
                >
                  <FaFacebook />
                </a>
                <a href="#" className="mx-1">
                  <FaTiktok />
                </a>
                <a href="#" className="mx-1">
                  <FaInstagram />
                </a>
                <a href="#" className="mx-1">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
