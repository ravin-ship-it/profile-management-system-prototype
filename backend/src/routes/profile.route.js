import express from "express"
import { createProfile, getAllProfiles, getOneProfile, updateProfile, deleteProfile } from "../controller/profile.controller.js"

const route = express.Router()

route.post("/profile/create", createProfile)
route.get("/profiles", getAllProfiles)
route.get("/profile/:id", getOneProfile)
route.put("/profile/:id", updateProfile)
route.delete("/profile/:id", deleteProfile)

export default route
