// import express from 'express'
// import cors from 'cors' 
// import 'dotenv/config'
// import mongoose from 'mongoose'
// import authRouter from './src/routes/authRouter.js'
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/auth', authRouter)
// const PORT = process.env.PORT || 4000
// const start = async () => {
//     try {
//         await mongoose.connect(process.env.CONNECTING_STRING)
//         app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`))
//     } catch (e) {
//         console.log(e)
//     }
// }
// start()

import {Router} from 'express';
import AuthController from '../controller/authController.js'
import {check} from 'express-validator';
import authMiddleware from '../middleware/authMiddleware.js';


const router = new Router()

router.post('/registration', [
    check('username', 'Имя пользлваьеля не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 символов').isLength({min: 4})
], AuthController.registration)
router.post('/login', AuthController.login)
router.get('/auth', authMiddleware, AuthController.auth)


export default router