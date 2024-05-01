import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel:Model<User>,
        private jwtService:JwtService
    ){}

    async signUp(signUpDto:SignUpDto):Promise<any>{
        const {username,password,email,age,gender}=signUpDto;

   const userExists =await this.userModel.findOne({email});
   if(userExists){
    throw new HttpException('User already exists', HttpStatus.FORBIDDEN);
   }
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await this.userModel.create({
         username,email,age,gender,password:hashedPassword,
    })
    const token=this.jwtService.sign({
        id:user._id
    })
    const id = user._id   
    return {id,username:user.username,email:user.email,age:user.age,gender:user.gender,token};
}

    async login(loginDto:LoginDto):Promise<any>{
      const {password,email}=loginDto;
const user = await this.userModel.findOne({email})

if(!user){
    throw new UnauthorizedException('Invalid email or password')
}

const isPasswordMatched=await bcrypt.compare(password,user.password)

if(!isPasswordMatched){ throw new UnauthorizedException('Invalid email or password')
}
const token=this.jwtService.sign({
    id:user._id
})
const id = user._id  
return {id,username:user.username,email:user.email,age:user.age,gender:user.gender,token};
}

async user(headers:any) :Promise<any>{
    const authorizationHeader = headers.authorization; 
    if (authorizationHeader) {
    const token = authorizationHeader.replace('Bearer ', ''); 
    const secret = process.env.JWT_SECRET;
    try {
      const decoded = jwt.verify(token,secret); 
      let id =decoded["id"];
      let user= await this.userModel.findById(id);
      
return {id,username:user.username,email:user.email,age:user.age,gender:user.gender};
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
    }else{
        throw new UnauthorizedException('Invalid or missing Bearer token');
    }
}

async updateUser(headers:any,updateUser:any):Promise<any>{
    const authorizationHeader = headers.authorization; 
    if (authorizationHeader) {
    const token = authorizationHeader.replace('Bearer ', ''); 
    const secret = process.env.JWT_SECRET;
    try {
      const decoded = jwt.verify(token,secret);
    let id =decoded["id"];
    let user = await this.userModel.findByIdAndUpdate(id,{$set:{
        name:updateUser.name
    }},{
        new:true,
        runValidators:true
    });
    
    return {id,username:user.username,email:user.email,age:user.age,gender:user.gender};
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
    }else{
        throw new UnauthorizedException('Invalid or missing Bearer token');
    }
}
async allUser():Promise<User[]>{
    const product = await this.userModel.find();
        return product;
}
}
