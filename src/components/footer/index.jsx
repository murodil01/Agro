import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">🌿 AgroFresh</h2>
          <p className="text-sm leading-6">
            Dehqondan bevosita xaridorgacha! Yangi va tabiiy sabzavotlarni
            oson, tez va ishonchli tarzda yetkazamiz.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Sahifalar</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Bosh sahifa</Link></li>
            <li><Link to="/login" className="hover:underline">Tizimga kirish</Link></li>
            <li><Link to="/buyer" className="hover:underline">Xaridor paneli</Link></li>
            <li><Link to="/seller" className="hover:underline">Sotuvchi paneli</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Biz bilan bog'laning</h3>
          <div className="flex items-center gap-5 mt-4 text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-pink-400 transition" />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <FaTelegramPlane className="w-6 h-6 hover:text-blue-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="w-6 h-6 hover:text-sky-400 transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t pt-6 border-white/20">
        © {new Date().getFullYear()} AgroFresh. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
