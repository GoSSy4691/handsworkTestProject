const initialState = {
  countdown: 60,
  updateListAfter: 15,
  list: [],
};

const listEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LIST":
      return { ...state, list: action.payload };
    case "TICK_AUTO_UPDATE":
      return state.countdown === 0
        ? { ...state, countdown: 60, updateListAfter: 15, list: [] }
        : { ...state, countdown: state.countdown - 1 };
    case "TICK_BUTTON_UPDATE":
      return state.updateListAfter > 0
        ? { ...state, updateListAfter: state.updateListAfter - 1 }
        : state;
    case "CLEAN_LIST":
      return { ...state, countdown: 60, updateListAfter: 15, list: [] };
    default:
      return state;
  }
};

export default listEventsReducer;
