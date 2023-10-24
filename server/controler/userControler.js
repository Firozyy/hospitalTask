import {User} from "../Model/userMode.js"
import asyncHandler from "express-async-handler"
import { token } from "../utils/Token.js"



//@desc register
// rout http://localhost:8080/api/v1/user
// public

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password ,age} = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('Already registered user')
    }

    const user = await User.create({
        name, email, password,age
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            age: user.age,
            isAdmin: user.isAdmin,
            token: token(user._id),

        })
    } else {
        res.status(400)
        throw new Error('registration failed')
    }
})


//login 
//http://localhost:8080/api/v1/login

export const authUser = asyncHandler(async (req, res) => {
   
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: token(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


