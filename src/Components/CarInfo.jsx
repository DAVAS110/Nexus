import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { OnRevealWhite } from "./OnRevealWhite";

import Card1 from "../assets/Car-Cards/Card1.webp";
import Card2 from "../assets/Car-Cards/Card2.webp";
import Card3 from "../assets/Car-Cards/Card3.webp";
import Card4 from "../assets/Car-Cards/Card4.webp";
import Card5 from "../assets/Car-Cards/Card5.webp";

const initialCards = [
  { id: 1, image: Card1 },
  { id: 2, image: Card2 },
  { id: 3, image: Card3 },
  { id: 4, image: Card4 },
  { id: 5, image: Card5 },
];

const DraggableCard = ({ card, index, onSwipe }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100 || info.offset.x < -100) {
      onSwipe();
    } else {
      x.set(0);
    }
  };

  return (
    <motion.div
      className="absolute w-[15em] h-[15em] lg:w-[25em] lg:h-full bg-white rounded-lg shadow-md overflow-hidden transform preserve-3d cursor-grab transition-transform duration-100 ease"
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: 50 }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
      style={{ zIndex: index, x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
    >
      <img
        src={card.image}
        alt={`Card ${card.id}`}
        draggable="false"
        className="w-full h-full object-cover	select-none"
      />
    </motion.div>
  );
};

const Sponsors = () => {
  const [cards, setCards] = useState(initialCards);

  const handleSwipe = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const [movedCard] = updatedCards.splice(0, 1);
      updatedCards.push(movedCard);
      return updatedCards;
    });
  };

  return (
    <section
      className="snap-start h-[calc(100vh-90px)] w-screen bg-black flex lg: justify-evenly items-center"
      id="Sponsors"
    >
      <div className="h-full w-screen flex items-center justify-evenly px-10 pt-2 lg:p-10 lg:pb-2 lg:items-center flex-col-reverse lg:flex-row">
        <div className="relative w-[15em] h-[15em] lg:w-[25em] lg:h-[24em] perspective-1000 flex justify-center items-center">
          <AnimatePresence>
            {cards.map((card, index) => (
              <DraggableCard
                key={card.id}
                card={card}
                index={index}
                onSwipe={handleSwipe}
              />
            ))}
          </AnimatePresence>
        </div>
        <div>
          <OnRevealWhite>
            <h2 className="text-white font-SairaBold text-5xl lg:text-6xl mb-8">
              The <span className="text-[#CC0000]">Fastest Car</span>
            </h2>
          </OnRevealWhite>
          <OnRevealWhite>
            <p className="text-white text-justify max-w-[700px] text-base lg:text-lg">
              The <strong>fastest</strong> car, engineered for speed and
              precision, boasts aerodynamic design, lightweight materials, and
              cutting-edge tech. Every detail is optimized for maximum track
              performance. Clocking just <strong>1.111 milliseconds</strong>,
              it's a remarkable feat.
            </p>
            <p>
              <strong className="text-white">
                Slide the images to see more information.
              </strong>
            </p>
          </OnRevealWhite>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
