import { Request,Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface LoginPayloadType{
    name: string;
    email: string;
    provider: string;
    oauth_id: string;
    image?: string;
}
class AuthController{
    static async login(req:Request, res:Response) {
        try{
            const body:LoginPayloadType = req.body;
            let findUser = await prisma.user.findUnique({where: {
                email: body.email
            }})

            if(!findUser) {
                findUser = await prisma.user.create({
                    data: {
                        name: body.name,
                        email: body.email,
                        provider: body.provider,
                        oauthId: body.oauth_id,
                        image: body.image
                    }
                });
            }
            let JWTPayload = {name:body.name,email:body.email,id:findUser.id};
            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET as string, {
                expiresIn: "1d"
            });
            return res.json({
                status: "success",
                message: "Login successful",
                data: {
                    id: findUser.id,
                    name: findUser.name,
                    email: findUser.email,
                    image: findUser.image,
                    provider: findUser.provider,
                    token: `Bearer ${token}`
                }
            })
        }catch(error) {
            return res.status(500).json({
                message:"error with login backend "
            });
        }
    }
}

export default AuthController;