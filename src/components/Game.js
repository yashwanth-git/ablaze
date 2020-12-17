import React from "react";
//Import Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popIn } from "../animation";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//Resize Image
import { resizeImage } from "../util";
//For Routing
import { Link } from "react-router-dom";
const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  //Convert ID to string
  const stringId = id.toString();
  //Load Details
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      layoutId={stringId}
      onClick={loadDetailHandler}
    >
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={resizeImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 425px) {
    margin-bottom: 3em;
  }
  p {
    padding-bottom: 1em;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;
export default Game;
