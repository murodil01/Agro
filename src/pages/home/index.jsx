import { Link } from "react-router-dom";
import { Leaf, LogOut, ArrowBigRight } from "lucide-react";
import HowItWorks from "../../components/howItWorks";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";
import Testimonials from "../../components/testimonials";
import FAQ from "../../components/faq";
import Stats from "../../components/stats";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col items-center justify-center p-6">
      <div className="text-center my-10">
        <Leaf className="w-16 h-16 text-green-600 mx-auto animate-bounce" />
        <h1 className="text-4xl font-extrabold text-green-700 tracking-wide">
          AgroFresh
        </h1>
        <p className="mt-2 text-gray-600 text-lg max-w-md mx-auto">
          Dehqondan to'g'ridan-to'g'ri yangi mahsulotlar xaridorgacha!
        </p>
      </div>

      {user ? (
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow-md transition"
        >
          <LogOut className="w-5 h-5" />
          Chiqish
        </button>
      ) : (
        <Link
          to="/login"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-[7px] rounded-lg text-lg shadow-md transition"
        >
          Kirish
          <ArrowBigRight className="text-[20px]" />
        </Link>
      )}

      <div className="mt-12 w-full">
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Stats />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
