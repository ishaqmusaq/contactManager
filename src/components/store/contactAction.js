export const addContact = (user) => {
     return (dispatch,state, {getFirestore})=>{
        getFirestore()
        .collection("Contacts")
        .add(user)
        .then((doc)=>{
            console.log(doc)
            dispatch(
                {
    type:'ADD_CONTACT',
    payload: user
 }
            )
        });
 

    }
}

export const deleteContact = (user_id) => {
    return {
        type: 'DELETE_CONTACT',
        payload: user_id
    }
}

export const editContact = (user_id, updated_info) => {
    return {
        type: 'EDIT_CONTACT',
        user_id: user_id,
        updated_info: updated_info
    }
}