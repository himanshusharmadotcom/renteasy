import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res, next) => {
    const { name, email, password } = req.body
    // console.log(name, email, password);
    const hashedPassword = bcryptjs.hashSync(password, 10)
    // console.log(hashedPassword)
    const newUser = new User({ name, email, password: hashedPassword })
    try {
        await newUser.save()
        return res.status(201).json('User created successfully')
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return res.status(404).json({ message: 'User not found!' })
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest)

    } catch (error) {
        next(error)
    }
}

export const logout = (req, res, next) => {
    try {
        res.clearCookie('access_token')
        res.status(200).json('User has been logged Out')
    } catch (error) {
        next(error)
    }
}