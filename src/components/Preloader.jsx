// Preloader.js
import gif from "../assets/Artisan Antiques.gif";

// eslint-disable-next-line react/prop-types
const Preloader = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={gif} alt="Loading..." className="w-2/6 h-auto" />
    </div>
  );
};

export default Preloader;
