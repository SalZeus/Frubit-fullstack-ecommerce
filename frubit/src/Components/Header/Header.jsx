import {motion} from "framer-motion"
import "./Header.scss"
import images from "../assets/index";
import {AiOutlineUser, AiTwotoneShopping, AiFillBell} from "react-icons/ai";
import {FaLocationDot} from "react-icons/fa6"
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {

  const [menu, setMenu] = useState("shop")

  const navVariants={
    hidden:{
      y: -200,
      opacity: 0,
    },
    visible:{
      y: 0,
      opacity: 1,
    },
  }
  const logoVariants={
    hidden:{
      rotate: 720,
      scale: 20,
      x: "50vw",
      y: "50vh",
      opacity: 0.9,
    },
    visible:{
      rotate: 0,
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transition:{
        duration: 1,
        delay: 1,
      }
    }
  }

  return (
    <motion.nav className="header"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="nav-logo"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
        <motion.img src={images.frubitlogo2} alt="frubit logo" 
        />
        </Link>
        
      </motion.div>

      <Link to="/">
        <motion.h1
        
        >FruBit</motion.h1>
      </Link>
      <motion.div className="address"
      
      >
        <motion.h2 className="Address"
        
        >Donde deseas tu pedido?</motion.h2>
        <FaLocationDot style={{height: "20px", width: "20px"}}
        
        />
      </motion.div>
      <motion.div className="search-bar"
      
      >
        <input type="text" placeholder="Buscas algo en particular?"
        
        />
          <img className="search-icon" 
            src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png" 
            alt="search icon"
            
            />
      </motion.div>
      <motion.ul className="user-icons"
      
      >
          <motion.li className="login"
          
          >
            <button onClick={()=>{setMenu("log")}}>
              {/* <AiOutlineUserAdd style={{height: "38px", width: "38px"}}/> */}
              <AiOutlineUser style={{height: "30px", width: "30px"}}/>{menu==="log"?<hr></hr>:<></>}
            </button>
          </motion.li>
          <motion.li className="cart"
          
          >
          <button onClick={()=>{setMenu("shopCart")}}
          
          >
            <AiTwotoneShopping style={{height: "30px", width: "30px"}}/>{menu==="shopCart"?<hr></hr>:<></>}
            <div className="cart-counter">0</div>
          </button>
          </motion.li>
          <motion.li className="alerts"
          
          >
            <button onClick={()=>{setMenu("alert")}}
            
            >
              <AiFillBell style={{height: "30px", width: "30px"}}/>{menu==="alert"?<hr></hr>:<></>}
            </button>
          </motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default Header