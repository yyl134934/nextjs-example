import { showlog } from "../../lib/mongodb";

export  default async (req,res)=>{
    const log=await showlog();
    res.status(200).json({code:0, msg: 'query successful!', data:log})
}