import React from 'react'

function logout() {
    localStorage.removeItem("token")

    return (
        <div>You have successfully logged out.</div>
    )
}

export default logout