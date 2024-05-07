import React from "react"
import Account from '../account/Account'
import {transactions} from '../../assets/data/TransactionData'


export default function Transactions(props) {
    return(
        <>
        {transactions.map((transaction, index) => (
            <Account 
            className = {props.className}  
            key = {index}
            title = {transaction.title}
            amount = {transaction.amount}
            description = {transaction.amountDescription}
            />
        ))}
        </>
    )
}