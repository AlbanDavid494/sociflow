import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
   prompt: { type: String, required: true },
   content: { type: String, required: true },
//    we can have multiple platforms for a single post, so we use an array of strings
   platform: { type: [String], required: true },
   // scheduleFor is it a string or dat, i will ask this question if get error
   scheduleFor: { type: String, required: true },
   // status u will have remove or keep it if i have erroe
   status: { type: String, enum: ["scheduled", "posted", "failed"], default: "scheduled" },
   mediaUrl: { type: String },
   mediaType: { type: String, enum: ["image", "video"] },
   tone: { type: String },
}, {timestamps: true})

export const Post = mongoose.model("Post", postSchema);