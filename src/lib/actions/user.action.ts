"use server";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import User from "../models/user.model";
import { connectDB } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function updateUser({
    userId,
    username,
    name,
    image,
    bio,
    path,
    }: Params ): Promise<void> {
      connectDB();
    try {
        await User.findOneAndUpdate(
            {id: userId},
            {
                username: username.toLowerCase(),
                name,
                image,
                bio,
                onboarded: true,
         },
           { upsert: true }
        );
    
        if(path === "/profile/edit") {
            revalidatePath(path);
        }
    } catch (error: any) {
         throw new Error(error.message);
    }
};