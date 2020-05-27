import { v4 as uuid } from 'uuid';


const initialState = {
    contacts: [{
        Name: 'ishaq',
        Surname: 'musah',
        Phone: '+23355470719',
        group: 'family'
    }
    ],



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
            const fitlteredContact = state.contacts.filter(user => user.id !== action.payload);
            return { ...state, contacts: fitlteredContact };
        case 'EDIT_CONTACT':
            const editedContact = state.contacts.map(user => {
                if (user.id === action.user_id) {
                    return { ...user, ...action.updated_info }
                } else {
                    return user;
                }

            });
            return { ...state, contacts: editedContact }
        default:
            return state;
    }
};

export default contactReducer;