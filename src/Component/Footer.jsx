import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1e1e2f] to-[#241f3d] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 p-2 rounded-full mr-2">
              <span className="text-white text-lg">➔</span>
            </div>
            <h2 className="text-2xl font-bold">Next</h2>
          </div>
          <p className="text-gray-400 mb-4">
            Sed perspiciatis unde omnis natus doloremque laudantium totae
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
            <FaTwitter className="hover:text-purple-400 cursor-pointer" />
            <FaVimeoV className="hover:text-purple-400 cursor-pointer" />
            <FaPinterestP className="hover:text-purple-400 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Popular Services
            </li>
            <li className="hover:text-white cursor-pointer">Team Member</li>
            <li className="hover:text-white cursor-pointer">
              Privacy & Setting
            </li>
            <li className="hover:text-white cursor-pointer">Pricing Package</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="text-purple-400 mr-2">📍</span>
              Dhaka uttora 
            </li>
            <li>
              <span className="text-purple-400 mr-2">📧</span>
              krishnorooy@gmail.com
            </li>
            <li>
              <span className="text-purple-400 mr-2">📞</span>
              +8801738612417
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Get more update to join Us</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-l-lg focus:outline-none text-black bg-white"
            />
            <button className="bg-purple-600 p-3 rounded-r-lg hover:bg-purple-700 text-white">
              <IoMdSend />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Next. All rights Krishno Roy.
      </div>
    </footer>
  );
};

export default Footer;
