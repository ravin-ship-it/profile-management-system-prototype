import profile from "../models/profile.model.js"

// Creating Profile
export const createProfile = async (req, res) => {
    try {
        const { name, email, age, bio } = req.body
        const newProfile = await profile.create({
            email: email,
            age: age,
            name: name,
            bio: bio
        })
        res.status(201).json({
            success: true,
            message: `${newProfile.name}'s profile created successfully`,
            data: newProfile
        })
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error : ", error.message)
        } else {
            console.log("Error : ", error)
        }

        // sending error to frontend
        res.status(500).json({
            success: false,
            message: `Failed to create profile`,
            error: error.message
        })
    }
}

// Reading all profiles
export const getAllProfiles = async (req, res) => {

    try {
        // Get all profiles
        const allProfiles = await profile.find()

        // Send all the profiles to frontend
        res.status(200).json({
            success: true,
            message: "Found all profiles successfully",
            data: allProfiles
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to find all profiles",
            error: error.message
        })
    }

}

// Read one profile 
export const getOneProfile = async (req, res) => {

    try {
        // initialise id
        const profileId = req.params.id

        // Get one profile
        const oneProfile = await profile.findById(profileId)

        // Send one profile to the frontend
        if (!oneProfile) {
            return res.status(404).json({
                success: false,
                message: "Failed to fetch user profile",
            })
        }
        res.status(200).json({
            success: true,
            message: `Found ${oneProfile.name}'s profile found successfully`,
            data: oneProfile
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to find user profile",
            errror: error.message
        })
    }

}


// Update profile
export const updateProfile = async (req, res) => {

    try {

        // Grab the ID
        const profileId = req.params.id

        // Update profile
        const updateProfile = await profile.findByIdAndUpdate(profileId, req.body, { new: true })

        if (!updateProfile) {
            return res.status(404).json({
                success: false,
                message: "Failed to update profile"
            })
        }

        res.status(200).json({
            success: true,
            message: `${updateProfile.name}'s profile updated successfully`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update profile",
            error: error.message
        })
    }

}


// Delete Profile

