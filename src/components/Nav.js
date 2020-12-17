import React, { useState } from "react";
import logo from "../img/logo.svg";
//Styles and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux & Route
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";
const Nav = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(inputText));
    setInputText("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ablaze</h1>
      </Logo>
      <form className="search">
        <input value={inputText} onChange={inputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2em 0.3em;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.4em;
    border: none;
    margin-top: 0.5em;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
      width: 60%;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.4em 1em;
    cursor: pointer;
    color: #fff;
    background: #ff7676;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
export default Nav;
