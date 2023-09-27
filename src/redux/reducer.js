const initialState = {
    board: Array(9).fill(null),
    xPlaying: true,
    score: { xScore: 0, oScore: 0 },
    gameOver: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_BOARD":
        return {
          ...state,
          board: action.payload,
        };
      case "TOGGLE_PLAYER":
        return {
          ...state,
          xPlaying: !state.xPlaying,
        };
      case "RESET_GAME":
        return {
          ...initialState,
          score: state.score, 
        };
      case "UPDATE_SCORE":
        const { xScore, oScore } = state.score;
        return {
          ...state,
          score: {
            xScore: action.payload === "x" ? xScore + 1 : xScore,
            oScore: action.payload === "o" ? oScore + 1 : oScore,
          },
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  