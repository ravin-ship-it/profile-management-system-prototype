const API_URL = `${import.meta.env.VITE_API_URL}/api`

const ProfileAPI = {

    getAll: async () => {
        const res = await fetch(`${API_URL}/profiles`)
        return res.json()
    },

    getOne: async (id) => {
        const res = await fetch(`${API_URL}/profile/${id}`)
        return res.json()
    },

    create: async (data) => {
        const res = await fetch(`${API_URL}/profile/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        return res.json()
    },

    update: async (id, data) => {
        const res = await fetch(`${API_URL}/profile/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        return res.json()
    },

    delete: async (id) => {
        const res = await fetch(`${API_URL}/profile/${id}`, {
            method: "DELETE"
        })
        return res.json()
    }

}

export default ProfileAPI
