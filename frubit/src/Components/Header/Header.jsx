import {motion} from "framer-motion"
import "./Header.scss"
import images from "../assets/index";

const Header = () => {
  return (
    <nav className="header">
      <motion.div className="nav-logo">
        <motion.img src={images.frubitlogopng} alt="frubit logo" />
      </motion.div>
      <motion.h1>FruBit</motion.h1>
      <div className="search-bar">
        <input type="text" placeholder="Buscas algo?"/>
          <img className="search-icon" 
              src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" 
              alt="search icon"/>
      </div>
    </nav>
  )
}

export default Header