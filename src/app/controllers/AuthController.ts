import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
    

    async authenticate(req: Request, res: Response){
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email } });

        if(!user){
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword) {
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

        const resJson = {
            "email": user.email,
            "id_user": user.id,
            "token": token 
        };

        return res.send(resJson);
        
    }

}

export default new AuthController();