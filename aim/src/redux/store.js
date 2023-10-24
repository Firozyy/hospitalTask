import { configureStore } from '@reduxjs/toolkit'
import {  employeeReducer, userLoginReducer, departmnetHeadReducer, departmnetReducer, EmployeedetailsReducer, departmentHeadDetailsReducer, departmentDetailsReduces } from './reducer/userReducer.js';




const store = configureStore({
  reducer: {
   
    userLogin: userLoginReducer,
    employeeList:employeeReducer,
    departmnet:departmnetReducer,

    departmnetHead:departmnetHeadReducer,
departmentDetails:departmentDetailsReduces,

    employeeDetails:EmployeedetailsReducer,
    departmentHeadDetails:departmentHeadDetailsReducer,


   

   
 
    
  },
  
});


export default store;



export const server = 'http://localhost:8080/api/v1'
