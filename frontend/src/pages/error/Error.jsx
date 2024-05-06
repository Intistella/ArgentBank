import React from "react"
import { Link } from "react-router-dom"
import "./error.css"

export default function Error() {
  return (
    <div className="error-container">
        <p className="error-message">
            Error 404
        </p>
        <p className="error-info-text">
            The page you are looking for does not exist.
        </p>
        <Link className="error-back-link" to="/home">
            <button className="error-button">Back to home</button>
        </Link>
    </div>
  )
}