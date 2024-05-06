
const ApiURL = process.env.REACT_APP_API_PATH || "http://localhost:3001/api/v1"


export const loginUser = async (email, password) => {
    const url = `${ApiURL}/user/login`
  
    const requestBody = JSON.stringify({
        email,
        password,
  })

     try {
        const response = await fetch(url, {
            method: "POST",
            body: requestBody,
            headers: {
            "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Error")
        }
    } catch (error) {
            if (error.message === "Failed to fetch") {
                throw Error("Error")
        }
        throw error
    }
}


export const getUserPage = async (token) => {
    const url = `${ApiURL}/user/profile`

    try {
        const response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
        })
        if (response.ok) {
            const data = await response.json();
            return data
        }
        if (response.status === 401) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        } else {
            console.log(response);
            throw new Error("Error");
        }
    } catch (error) {
        throw error
    }
}


export const updateUserPage = async (token, newUserName) => {
    const url = `${ApiURL}/user/profile`

    const requestBody = JSON.stringify({
        userName: newUserName,
    })

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
            },
            body: requestBody
        })

        if (response.ok) {
            const data = await response.json();
            const userProfile = data.body;
            console.log(userProfile);
            return data
        } else {
            throw new Error("Error");
        }
    } catch (error) {
        throw error
    }
}