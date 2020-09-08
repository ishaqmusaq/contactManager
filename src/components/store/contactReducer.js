import { v4 as uuid } from 'uuid';


const initialState = {
    contacts: [],



}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            const newContact = {
                id: uuid(),
                Name: action.payload.Name,
                Surname: action.payload.Surname,
                Phone: action.payload.Phone,
                group: action.payload.group,
                
            };
            return {
                ...state, contacts: [...state.contacts, newContact]
            };

        case "DELETE_CONTACT":
            const fitlteredContact = state.contacts.filter(contact => contact.id !== action.payload);
            return { ...state, contacts: fitlteredContact };
        case 'EDIT_CONTACT':
            const editedContact = state.contacts.map(contact => {
                if (contact.id === action.contact_id) {
                    return { ...contact, ...action.updated_info }
                } else {
                    return contact;
                }

            });
            return { ...state, contacts: editedContact }

        case 'SET_ALL_CONTACTS':
            return { contacts: action.payload }
        default:
            return state;
    }
};

export default contactReducer;