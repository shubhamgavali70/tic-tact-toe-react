import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle color="lightblue" size="3rem" className="icons" />;
    case "cross":
      return <FaTimes color="lightpink" size="3rem" className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};
export default Icon;
