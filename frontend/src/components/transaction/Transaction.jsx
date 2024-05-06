import React from "react"
import Account from '../account/Account'

const transactions = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        amountDescription: "Available Balance",
      },
      {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        amountDescription: "Available Balance",
      },
      {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        amountDescription: "Available Balance",
      },
      {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        amountDescription: "Current Balance",
      }
]

export default function Transactions(props) {
    return(
        <>
        {transactions.map((transaction, index) => (
            <Account 
            style ={props.style} 
            key= {index}
            title = {transaction.title}
            amount = {transaction.amount}
            description = {transaction.amountDescription}
            />
        ))}
        </>
    )
}