
import { server } from "../store.js";
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {


    try {
        dispatch({ type: "USER_LOGIN_REQUEST" });
        const { data } = await axios.post(`${server}/login`, { email, password }, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials: true,

        });

        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: "USER_LOGIN_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};

export const logout = () => async (dispatch) => {

    dispatch({ type: "USER_LOGOUT" })
    
    localStorage.removeItem('userInfo')


};
export const employeelist = () => async (dispatch, getState) => {


    try {
        dispatch({ type: "EMPLOYEE_LIST_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/employees`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({
            type: "EMPLOYEE_LIST_SUCCESS",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "EMPLOYEE_LIST_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};



export const getallDepartmentHeadlist = () => async (dispatch, getState) => {


    try {
        dispatch({ type: "GET_ALL_DEPARTMENT_HEAD_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/departmentsHeads`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({
            type: "GET_ALL_DEPARTMENT_HEAD_SUCCESS",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "GET_ALL_DEPARTMENT_HEAD_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};

export const getallDepartment = () => async (dispatch, getState) => {


    try {
        dispatch({ type: "GET_ALL_DEPARTMENT_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/departments`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({
            type: "GET_ALL_DEPARTMENT_SUCCESS",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "GET_ALL_DEPARTMENT_FAIL",
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const getEmployeeDeatils = (id) => async (dispatch, getState) => {


    try {
        dispatch({ type: "Employee_DETAILSE_REQUEST" });

        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/employee/${id}`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });
     
        dispatch({ type: "Employee_DETAILSE_SUCCESS", payload: data })

    } catch (error) {
        dispatch({
            type: "Employee_DETAILSE_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};


export const getDepartmentHeaDetails = (id) => async (dispatch,getState) => {


    try {
        dispatch({ type: "DEPARTMENT_HEAD_DETAILS_REQUEST" });
        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/departmentsHead/${id}`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({ type: "DEPARTMENT_HEAD_DETAILS_SUCCESS", payload: data })
      

    } catch (error) {
        dispatch({
            type: "DEPARTMENT_HEAD_DETAILS_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};

export const getDepartmentDetails = (id) => async (dispatch,getState) => {


    try {
        dispatch({ type: "DEPARTMENT_DETAILS_REQUEST" });
        const { userLogin: { userInfo } } = getState()
        const { data } = await axios.get(`${server}/admin/department/${id}`, {
            headers: {
                "Content-Type": 'application/json',
                authrization: `Bearer ${userInfo.token}  `
            },
            withCredentials: true,

        });

        dispatch({ type: "DEPARTMENT_DETAILS_SUCCESS", payload: data })
      

    } catch (error) {
        dispatch({
            type: "DEPARTMENT_DETAILS_FAIL", payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
    }
};



//     try {
//         dispatch({ type: "USER_REGISTER_REQUEST" });
//         const { data } = await axios.post(`${server}/user`, { name, email, password }, {
//             headers: {
//                 "Content-Type": 'application/json'
//             },
//             withCredentials: true,

//         });

//         dispatch({ type: "USER_REGISTER_SUCCESS", payload: data })
//         dispatch({ type: "USER_LOGIN_SUCCESS", payload: data })
//         localStorage.setItem('userInfo', JSON.stringify(data))

//     } catch (error) {
//         dispatch({
//             type: "USER_REGISTER_FAIL", payload: error.response && error.response.data.message ?
//                 error.response.data.message : error.message
//         })
//     }
// };





// export const UserProfileUpdate = (user) => async (dispatch, getState) => {


//     try {
//         dispatch({ type: "USER_UPDATE_PROFILE_REQUEST" });

//         const { userLogin: { userInfo } } = getState()
//         const { data } = await axios.put(`${server}/user/profile`, user, {
//             headers: {
//                 "Content-Type": 'application/json',
//                 authrization: `Bearer ${userInfo.token}  `
//             },
//             withCredentials: true,

//         });

//         dispatch({ type: "USER_UPDATE_PROFILE_SUCCESS", payload: data })

//     } catch (error) {
//         dispatch({
//             type: "USER_DETAILSE_FAIL", payload: error.response && error.response.data.message ?
//                 error.response.data.message : error.message
//         })
//     }
// };






// export const dleteUser = (id) => async (dispatch, getState) => {


//     try {
//         dispatch({ type: "USER_REMOVE_REQUEST" });

//         const { userLogin: { userInfo } } = getState()
//         await axios.delete(`${server}/${id}`, {
//             headers: {
//                 "Content-Type": 'application/json',
//                 authrization: `Bearer ${userInfo.token}  `
//             },
//             withCredentials: true,

//         });

//         dispatch({
//             type: "USER_REMOVE_SUCCESS",
//         })

//     } catch (error) {
//         dispatch({
//             type: "USER_REMOVE_FAIL",
//             payload: error.response && error.response.data.message ?
//                 error.response.data.message : error.message
//         })
//     }
// };


// //http://localhost:8080/api/v1/admin/user/6495a73857816d37024febef

// export const updateUser = (user) => async (dispatch, getState) => {


//     try {
//         dispatch({ type: "USER_UPDATE_REQUEST" });

//         const { userLogin: { userInfo } } = getState()
//         const { data } = await axios.put(`${server}/admin/user/${user._id}`, user, {
//             headers: {
//                 "Content-Type": 'application/json',
//                 authrization: `Bearer ${userInfo.token}  `
//             },
//             withCredentials: true,

//         });

//         dispatch({ type: "USER_UPDATE_SUCCESS", })
//         dispatch({ type: "USER_DETAILSE_SUCCESS", payload: data })

//     } catch (error) {
//         dispatch({
//             type: "USER_UPDATE_FAIL", payload: error.response && error.response.data.message ?
//                 error.response.data.message : error.message
//         })
//     }
// };