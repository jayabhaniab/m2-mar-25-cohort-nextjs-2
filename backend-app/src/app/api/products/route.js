import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function GET() {
    console.log(connectionStr);
    mongoose.connect(connectionStr);
    const data = await Product.find();
    return NextResponse.json({result: data});
}