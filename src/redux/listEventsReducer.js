const initialState = {
  list: [],
};

const listEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default listEventsReducer;
