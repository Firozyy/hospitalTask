import express from "express";
import { authUser, registerUser } from "../controler/userControler.js";
import { GeAllDepartments, GeAllDepartmentsHeads, creatDepartment, creatDepartmenthead, creatEmployee, deleteDepartment, deleteDepartmentHead, deleteEmployee,  getEmployees, getsingleEmp, getsingledepartments, getsingledepartmentsHead } from "../controler/admincontroler.js";
import { adminMidleware, protect } from "../middlewares/authMidleware.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(authUser)

router.route("/admin/creatEmployee").post(protect,adminMidleware,singleUpload,creatEmployee)
router.route("/admin/employees").get(protect,adminMidleware,getEmployees)
router.route("/admin/employee/:id").get(protect,adminMidleware,getsingleEmp)
.delete(protect,adminMidleware,deleteEmployee)

router.route("/admin/creatDepartment").post(protect,adminMidleware,singleUpload,creatDepartment)
router.route("/admin/departments").get(protect,adminMidleware,GeAllDepartments)
router.route("/admin/department/:id").get(protect,adminMidleware,getsingledepartments)
.delete(protect,adminMidleware,deleteDepartment)


router.route("/admin/creatDepartmenthead").post(protect,adminMidleware,singleUpload,creatDepartmenthead)

router.route("/admin/departmentsHeads").get(protect,adminMidleware,GeAllDepartmentsHeads)

router.route("/admin/departmentsHead/:id").get(protect,adminMidleware,getsingledepartmentsHead)
.delete(protect,adminMidleware,deleteDepartmentHead)
export default router;