import React, { useRef, useState, useEffect } from 'react'
import {v4} from "uuid"
import "./ExpenseTracker.scss"

const ExpenseTracker = () => {
    const [BudgetValues, setBudgetValues] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState()
    const [TotalSpending, setTotalSpending] = useState([0])
    const [DisplayTotalSpentNumber, setDisplayTotalSpentNumber] = useState()
    const ProductNameRef = useRef()

    const GetBudgetValues = (e) => {
        e.preventDefault()
        if(ProductName && ProductPrice) {
            setBudgetValues((prevState => [...prevState, {ProductName, ProductPrice, id: v4()}]))
            setProductName("")
            setProductPrice("")
            setTotalSpending([ ProductPrice + ProductPrice ])
            const TotalSpendingSum = TotalSpending.reduce((a,b) =>  +a + +b)
            setDisplayTotalSpentNumber(TotalSpendingSum)
            console.log(BudgetValues)
        }else{
            alert("Input field is empty")
        }
    }
    const ClearExpenses = () => {
        setBudgetValues([])
        setDisplayTotalSpentNumber(0)
    }
    const DeleteExpenses = (id) => {
       const DeletedItem =  BudgetValues.filter(item => item.id !== id)
       setBudgetValues(DeletedItem)
    }
    const EditExpenses = (id) => {
         const ItemEdited = BudgetValues.find(item => item.id === id)
         setProductName(ItemEdited.ProductName)
         setProductPrice(ItemEdited.ProductPrice)
         ProductNameRef.current.focus()
        // setProductName("Afaq")
        // setProductPrice("$000")
    }
    const checkConsole  = () => {
        console.log(BudgetValues)
    }
 
    return (
    <div className='Expense_Calculator_div'>
        <h1>Budget Calculator</h1>
        <button onClick={checkConsole}>Check console</button>
        <div className="Expense_Calculator">
            <form onSubmit={GetBudgetValues}>
                <div className="input_div">
                    <label htmlFor="">Product Name</label>
                    <input ref={ProductNameRef} type="text" value={ProductName} onChange={e => setProductName(e.target.value)}  placeholder='Enter name......' />
                </div>    
                <div className="input_div">
                    <label htmlFor="">Product Price</label>
                    <input type="number" value={ProductPrice} onChange={e => setProductPrice(e.target.value)} placeholder='$$$' name="" id="" />
                </div>
            </form>
            <button onClick={GetBudgetValues}>Submit</button>
            
        </div>
        {BudgetValues?.map((budgetValue => {
               const {id} = budgetValue
         
            return (
                  <div className="Expense_display">
                        <div className="display_div">
                                    <p className='display_name'>{budgetValue?.ProductName}</p>
                                    <p className='display_price'>${budgetValue?.ProductPrice}</p>
                                <div className="display_buttons">
                                    <button onClick={() => EditExpenses(id)}>Edit</button>
                                    <button onClick={() => DeleteExpenses(id)}>Delete</button>
                                </div>
                        </div>
                    </div>
             )}))   
            }
            {BudgetValues.length > 0 ? <><button onClick={ClearExpenses}>Clear Expenses</button></>:<></>}
        
        <h1>Total Spending : ${DisplayTotalSpentNumber}</h1>
    </div>
  )
}

export default ExpenseTracker