export const addContact = (contact) => {
     return (dispatch,state, {getFirestore})=>{
        getFirestore()
        .collection("Contacts")
            .add({ ...contact, timestamp: getFirestore().FieldValue.serverTimestamp() })
        .then((doc)=>{
            
          
        });
 

    }
}

export const deleteContact = (contact_id) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
            .collection('contacts')
            .doc(contact_id)
            .delete()
            .then(() => {

            })
    };
}

export const editContact = (contact_id, updated_info) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
            .collection('contacts')
            .doc(contact_id)
            .set(updated_info)
            .then(() => { })
            .catch((err) => {

            })
    }
}

export const getAllContacts = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore()
            .collection('contacts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(
                (snapshot) => {

                    let contacts = [];
                    snapshot.forEach((doc) => {


                        contacts.push({ ...doc.data(), id: doc.id });
                    });

                    console.log(contacts);
                    dispatch({
                        type: 'SET_ALL_CONTACTS',
                        payload: contacts
                    })

                },
                (err) => {

                }


            )
    }
}