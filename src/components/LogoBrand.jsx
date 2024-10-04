import PropTypes from "prop-types";
import logoBrand from "../assets/logo-brand.png";
import { Link } from "react-router-dom";
function LogoBrand({ className = "" }) {
  return (
    <div className={`flex items-center mx-auto justify-center ${className}`}>
      <img src={logoBrand} alt="Logo" className="mb-2 w-10 h-9" />
      <div style={{ fontFamily: "Londrina Solid" }}>
        <h1 className="hidden sm:block sm:text-white text-3xl"><Link to="/beranda">CHILL</Link></h1>
      </div>
    </div>
  );
}

LogoBrand.propTypes = {
  className: PropTypes.string,
};
export default LogoBrand;
