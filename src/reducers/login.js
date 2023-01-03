import storage from "redux-persist/lib/storage"
const initialState = {
    user: {
        phoneNumber: "",
        password: "",
    }
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                //remove persisted data
                user: {
                    phoneNumber: "",
                    password: "",
                }
            }
        default:
            return state
    }
}
export default loginReducer