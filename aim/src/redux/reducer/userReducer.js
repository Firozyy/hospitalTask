export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return { loading: true, }
        case "USER_LOGIN_SUCCESS":
            return { loading: false, userInfo: action.payload }
        case "USER_LOGIN_FAIL":
            return { loading: false, error: action.payload }
        case "USER_LOGOUT":
            return {}
        default:
            return state
    }
};


export const employeeReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
        case "EMPLOYEE_LIST_REQUEST":
            return { loading: true, }
        case "EMPLOYEE_LIST_SUCCESS":
            return { loading: false, employees: action.payload }
        case "EMPLOYEE_LIST_FAIL":
            return { loading: false, error: action.payload }
        case "EMPLOYEE_LIST_RESET":
            return { users: [] }
        default:
            return state
    }
};

export const departmnetHeadReducer = (state = { departmnetHead: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_DEPARTMENT_HEAD_REQUEST":
            return { loading: true, }
        case "GET_ALL_DEPARTMENT_HEAD_SUCCESS":
            return { loading: false, departmnetHead: action.payload }
        case "GET_ALL_DEPARTMENT_HEAD_FAIL":
            return { loading: false, error: action.payload }
        case "GET_ALL_DEPARTMENT_HEAD_RESET":
            return { users: [] }
        default:
            return state
    }
};

export const departmnetReducer = (state = { departmnet: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_DEPARTMENT_REQUEST":
            return { loading: true, }
        case "GET_ALL_DEPARTMENT_SUCCESS":
            return { loading: false, departmnet: action.payload }
        case "GET_ALL_DEPARTMENT_FAIL":
            return { loading: false, error: action.payload }
        case "GET_ALL_DEPARTMENT_RESET":
            return { users: [] }
        default:
            return state
    }
};



export const EmployeedetailsReducer = (state = {}, action) => {

    switch (action.type) {
        case "Employee_DETAILSE_REQUEST":
            return { loading: true, }
        case "Employee_DETAILSE_SUCCESS":
         
            return { loading: false,employee: action.payload }
            
        case "Employee_DETAILSE_FAIL":
            return { loading: false, error: action.payload }
        case "Employee__DETAILSE_RESET":
            return { user: {} }
        default:
            return state
    }
}

export const departmentHeadDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case "DEPARTMENT_HEAD_DETAILS_REQUEST":
            return { loading: true, }
        case "DEPARTMENT_HEAD_DETAILS_SUCCESS":
            return { loading: false, departmentHead: action.payload }
        case "DEPARTMENT_HEAD_DETAILS_FAIL":
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
};
export const departmentDetailsReduces = (state = {}, action) => {
    switch (action.type) {
        case "DEPARTMENT_DETAILS_REQUEST":
            return { loading: true, }
        case "DEPARTMENT_DETAILS_SUCCESS":
            return { loading: false, department: action.payload }
        case "DEPARTMENT_DETAILS_FAIL":
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
};
