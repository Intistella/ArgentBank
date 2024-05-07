import { React, } from "react"
import './account.css'
import Button from '../../components/account/Button'
import DropDown from '../dropDown/DropDown'
import {transactions} from '../../assets/data/TransactionData'

export default function Account(props) {
    if (props.className === "accountEdit" ){
        return(
            <>  
            <section className="accountEdit">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{props.title}</h3>
                    <p className="account-amount">{props.amount}</p>
                    <p className="account-amount-description">{props.description}</p>
                </div>
                <DropDown className='arrow-button' description={transactions.info } />
            </section>
            </>
    )} 
    else if (props.className === "account"){
        return(
            <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{props.title}</h3>
                    <p className="account-amount">{props.amount}</p>
                    <p className="account-amount-description">{props.description}</p>
                </div>
                <Button
                    onClick={props.handleClick}
                    className="transaction-button"
                    text = "View transactions"
                />
            </section>
            </>
    )} 
}


