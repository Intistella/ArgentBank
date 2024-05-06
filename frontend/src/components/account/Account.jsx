import React from "react"
import './account.css'



export default function Account(props) {
    return (    
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
                <button
                    onClick={props.handleClick}
                    className='transaction-button'
                    disabled={props.disabled}>
                    View transactions
                </button>
        </section>
  )
}


