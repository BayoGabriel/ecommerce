import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"
import { header, authHeader } from "../Header"

const url = config.liveUrl
export const user_signup = (user) => async(dispatch, getState) => {
    try {
        dispatch({type: types.USER_SIGN_UP_REQUEST})

        const {userRegister: {userDetail},} = getState()
        const {data} = await axios.post(`${url}/user/`, user)
        console.log(data)
        if(data.status === "ok"){
            dispatch({type: types.USER_SIGN_UP_SUCCESS, payload: data.data})
            toast.success("user registered successfully", {
                position: "top-right"
            })
        }else{
            dispatch({type: types.USER_SIGN_UP_FAIL, payload: data.error})
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong" 
        dispatch({type: types.USER_SIGN_UP_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const user_signin = (email, password) => async(dispatch, getState) => {
    
    try {
        dispatch({type: types.USER_SIGN_IN_REQUEST})
        const  {data} = await axios.post("https://jade-rich-catfish.cyclic.app/api/user/in", {email, password},{headers: header})
        console.log(data)
        if(data.status === "ok"){
            dispatch({type: types.USER_SIGN_IN_SUCCESS, payload: data.data})
            toast.success(`Welcome ${data.data.firstName}`,{position: "top-right"})
        }else{
            dispatch({type: types.USER_SIGN_IN_FAIL, payload: data.error})
        }
    } catch (error) {
        console.log(error)
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.USER_SIGN_IN_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const user_logout = () => (dispatch) => {
    dispatch({type: types.USER_LOGOUT})
}