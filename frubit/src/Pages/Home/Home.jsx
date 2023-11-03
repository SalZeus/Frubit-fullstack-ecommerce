import {motion} from "framer-motion";
import "./Home.scss"
import Items from "../../Components/Items/Items"
import Promotions from "../../Components/Promotions/Promotions";

const Home = () => {
  return (
    <motion.section className="home" id="home">
        <Promotions />
        <Items />
    </motion.section>
  )
}

export default Home