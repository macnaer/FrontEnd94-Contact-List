export const getContactList = (contactList) => {
  return {
    type: "LOAD_CONTACT_LIST",
    payload: contactList,
  };
};

export const getCurrentContact = (currentContact) => {
  return {
    type: "SET_CURRENT_CONTACT",
    payload: currentContact,
  };
};
