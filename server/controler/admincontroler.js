import { Employee } from "../Model/employeeModel.js";
import { Department } from "../Model/DepartmentModel.js";
import { DepHead } from "../Model/DepHead.js";
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";

//@desc creatEmployee
// rout http://localhost:8080/api/v1/admin/creatEmployee
// admin only

export const creatEmployee = asyncHandler(async (req, res) => {
  const { name, email, profileDesc, age, department } = req.body;

  const fileUri = getDataUri(req.file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const userExist = await Employee.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Already registered employee");
  }

  const departmentExist = await Department.findById({ _id: department });

  if (!departmentExist) {
    res.status(400);
    throw new Error("invalid Department");
  }

  function generateRandomID() {
    const min = 1000; // Smallest 4-digit number
    const max = 9999; // Largest 4-digit number
    const randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomID;
  }

  const randomID = generateRandomID();

  const user = await Employee.create({
    name,
    email,
    profileDesc,
    age,

    image: {
      public_id: mycloud.public_id,
      image_url: mycloud.secure_url,
    },
    empId: randomID,
    department: {
      name: departmentExist.name,
      id: departmentExist._id,
    },
  });

  if (user) {
     // here add departmentHeads id add to department database
     departmentExist.team.push(user._id)
     const newDepartment= await departmentExist.save()
    res.status(201).json({
      user,
    });
  } else {
    res.status(400);
    throw new Error("employee registration failed");
  }
});

//@desc creatDepartment
// rout http://localhost:8080/api/v1/admin/creatDepartment
// admin only

export const creatDepartment = asyncHandler(async (req, res) => {
  const { name, yearFound, desc } = req.body;
  console.log(req.body);

  const fileUri = getDataUri(req.file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const department = await Department.create({
    name,
    desc,
    yearFound,
    image: {
      public_id: mycloud.public_id,
      image_url: mycloud.secure_url,
    },
  });
  if (department) {

    
    res.status(201).json({
      department,
    });
  } else {
    res.status(400);
    throw new Error("department registration failed");
  }
});

//@desc creatDepartmenthead
// rout http://localhost:8080/api/v1/admin/creatDepartmenthead
// admin only

export const creatDepartmenthead = asyncHandler(async (req, res) => {
  const { name, email, profileDesc, age, department } = req.body;

  const fileUri = getDataUri(req.file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  const userExist = await DepHead.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Already registered person");
  }

  const departmentExist = await Department.findById({ _id: department });

  if (!departmentExist) {
    res.status(400);
    throw new Error("invalid Department");
  }



  function generateRandomID() {
    const min = 1000; // Smallest 4-digit number
    const max = 9999; // Largest 4-digit number
    const randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomID;
  }

  const randomID = generateRandomID();

  const DepartmentHead = await DepHead.create({
    name,
    email,
    profileDesc,
    age,
    image: {
      public_id: mycloud.public_id,
      image_url: mycloud.secure_url,
    },
    empId: randomID,
    department: {
      name: departmentExist.name,
      id: departmentExist._id,
    },
  });
  if (DepartmentHead) {
    // here add departmentHeads id add to department database
    departmentExist.departmentHead.push(DepartmentHead._id)
    const newDepartment= await departmentExist.save()

    res.status(201).json({
        DepartmentHead,
    });
  } else {
    res.status(400);
    throw new Error("employee registration failed");
  }
});

//@desc get all employees
// rout http://localhost:8080/api/v1/admin/employees
// adminONLY

export const getEmployees = asyncHandler(async (req, res) => {
  const employee = await Employee.find();
  if (!employee) {
    res.status(404);
    throw new Error("employee Not Found");
  } else {
    res.json(employee);
  }
});

//@desc GeAllDepartments
// rout http://localhost:8080/api/v1/admin/departments
// adminONLY

export const GeAllDepartments = asyncHandler(async (req, res) => {
  const department = await Department.find();
  if (!department) {
    res.status(404);
    throw new Error("departments Not Found");
  } else {
    res.json(department);
  }
});

//@desc GeAllDepartmentsHeads
// rout http://localhost:8080/api/v1/admin/departmentsHeads
// adminONLY

export const GeAllDepartmentsHeads = asyncHandler(async (req, res) => {
  const departmentHead = await DepHead.find();
  if (!departmentHead) {
    res.status(404);
    throw new Error("departmentHead Not Found");
  } else {
    res.json(departmentHead);
  }
});

//@desc getsingluser
// rout http://localhost:8080/api/v1/admin/employee/:id
// adminONLY

export const getsingleEmp = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id).select("-password");
  if (!employee) {
    res.status(404);
    throw new Error("employee Not Found");
  } else {
    res.json(employee);
  }
});

//@desc getsingleDepartment
// rout http://localhost:8080/api/v1/admin/department/:id
// adminONLY

export const getsingledepartments = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const department = await Department.findById(id);
  if (!department) {
    res.status(404);
    throw new Error("department Not Found");
  } else {
    res.json(department);
  }
});

//@desc getsingledepartmentsHeads
// rout http://localhost:8080/api/v1/admin/departmentsHead/:id
// adminONLY

export const getsingledepartmentsHead = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const departmentsHead = await DepHead.findById(id);
  if (!departmentsHead) {
    res.status(404);
    throw new Error("departmentsHeads Not Found");
  } else {
    res.json(departmentsHead);
  }
});

//@desc delteEmployee
// rout http://localhost:8080/api/v1/admin/employee/:id
// private/adminONLY

export const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    res.status(404);
    throw new Error("employee Not Found");
  } else {
    await await employee.deleteOne({ id });
    res.json({
      message: "employee removed successfully",
    });
  }
});

//@desc deleteDepartment
// rout http://localhost:8080/api/v1/admin/department/:id
// private/adminONLY

export const deleteDepartment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const department = await Department.findById(id);
  if (!department) {
    res.status(404);
    throw new Error("department Not Found");
  } else {
    await await Department.deleteOne({ _id: id });
    res.json({
      message: "department removed successfully",
    });
  }
});

//@desc deleteDepartmentHead
// rout http://localhost:8080/api/v1/admin/departmentsHead/:id
// private/adminONLY

export const deleteDepartmentHead = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const departmentsHead = await DepHead.findById(id);
  if (!departmentsHead) {
    res.status(404);
    throw new Error("department Not Found");
  } else {
    await await DepHead.deleteOne({ _id: id });
    res.json({
      message: "departmentsHead removed successfully",
    });
  }
});
