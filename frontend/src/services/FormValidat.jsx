
export const isNotEmpy = (value) => {
    return value.trim() !== ""
}

export const validateEmail = (value) => {
    const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailSyntax.test(value)
}

export const validateLength = (value, minLength) => {
    return value.length >= minLength
}

export const validateNewUserName = (newUserName, currentUserName) => {
    return newUserName !== currentUserName
}