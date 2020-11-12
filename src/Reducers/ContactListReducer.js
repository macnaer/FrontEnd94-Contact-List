const initialState = {
  List: [],
  currentContact: [],
};

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CONTACT_LIST":
      console.log("Reducer => ", action.payload);
      return {
        List: action.payload,
      };
    case "SET_CURRENT_CONTACT":
      return {
        currentContact: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default contactListReducer;
