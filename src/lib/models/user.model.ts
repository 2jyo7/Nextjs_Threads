import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    usernames: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    bio: { type: String},
    image: { type: String},
    threads: [
    { 
     type: mongoose.Schema.Types.ObjectId,
     ref: "thread"
    }
],
   onboarded: { 
    type: Boolean,
    default: false,
   },
   communities: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "communities",
    }
   ]
    });

    const User = mongoose.models.User || mongoose.model("User", userSchema);

    export default User;