import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; 

const Footer = () => {
  return (
    <div className="order-3 grid justify-center bg-gradient-to-b from-[#4d9ae7] to-[#bebebe] text-center">
      <h4>Designed and developed with <FontAwesomeIcon color="red" icon={faHeart} /><a href="mailto:kamalakantas100@gmail.com"> by Kamalakanta</a></h4>
      <div>
        <ul>
          <li> 
            All the pictures are from&nbsp;
            <a className="font-bold" href="https://www.pexels.com">pexels.</a>
          </li>
          <li>
            All the recipes are from&nbsp;
            <a className="font-bold" href="https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/">
              recipe-by-api-ninjas&nbsp;
            </a>
            from RapidAPI.
          </li>
          <li>
            All the nutritions information is by&nbsp;
            <a className="font-bold" href="https://rapidapi.com/calorieninjas/api/calorieninjas/">
              CaloriNinja&nbsp;
            </a>

            from RapidAPI.
          </li>
          <li>
            All the icons are from&nbsp;
            <a className="font-bold" href="https://icons8.com/">icons8</a>
          </li>
          <li>
            ImageList component of <a className="font-bold" href="https://mui.com/">Material UI</a> is used in home and food page.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
