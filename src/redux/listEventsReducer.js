const initialState = {
  countdown: 60,
  list: [],
};

const listEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LIST":
      return { ...state, list: action.payload };
    case "TICK":
      return state.countdown === 0
        ? { ...state, countdown: 60, list: [] }
        : { ...state, countdown: state.countdown - 1 };
    case "CLEAN_LIST":
      return { ...state, countdown: 60, list: [] };
    default:
      return state;
  }
};

export default listEventsReducer;
