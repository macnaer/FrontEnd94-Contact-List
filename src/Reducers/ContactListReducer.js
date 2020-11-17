const initialState = {
  List: [],
  currentContact: [],
  loading: true,
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CONTACT_LIST":
      console.log("Reducer => ", action.payload);
      return {
        ...state,
        loading: false,
        List: action.payload,
      };
    case "SET_CURRENT_CONTACT":
      return {
        ...state,
        loading: false,
        currentContact: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default contactListReducer;
