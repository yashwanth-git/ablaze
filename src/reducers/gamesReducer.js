const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        ...action.payload,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
export default gamesReducer;
