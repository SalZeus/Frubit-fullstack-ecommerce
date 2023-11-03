import "./Promotions.scss";
import {motion} from "framer-motion";
import { useState } from "react";
import images from "../assets/index";
import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";

const Promotions = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    
  
    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
    
    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
                );
                
                return updatedIndexes;
            });
        };
  
    const imageArray = [images.balcony, images.bag, images.board, images.groceries, images.trophy];
  
    const positions = ["center", "left1", "left", "right", "right1", "outside"];
  
    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3, opacity: 0.7 },
      left: { x: "-90%", scale: 0.5, zIndex: 2,  opacity: 0.4},
      right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 0.2 },
      right1: { x: "50%", scale: 0.7, zIndex: 3, opacity: 0.7},
    };
    return (
      <div className="promotions">
        {imageArray.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px]"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%", position: "absolute" }}
          />
        ))}
        <div className="buttons">
          <button
            className="button1"
            onClick={handleBack}
          >
            <AiFillCaretLeft/>
          </button>
          <button
            className="button2"
            onClick={handleNext}
          >
            <AiFillCaretRight/>
          </button>
        </div>
      </div>
    );
  };
  

export default Promotions