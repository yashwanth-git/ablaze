import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Import Style and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animation";
//For Routing
import { useLocation } from "react-router-dom";
const Home = () => {
  //Get Location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get Data
  const { upcoming, newGames, popular, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched &&
                searched.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                    id={game.id}
                    key={game.id}
                  />
                ))}
            </Games>
          </>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming &&
            upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular &&
            popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames &&
            newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 2.5em;
  h2 {
    padding: 1em 0;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 1.5em;
  grid-row-gap: 2em;
  @media (max-width: 425px) {
    display: block;
  }
`;
export default Home;
