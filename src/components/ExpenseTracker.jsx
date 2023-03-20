import React, { useRef, useState, useEffect } from 'react'
import "./ExpenseTracker.scss"

const ExpenseTracker = () => {

    const [BudgetValues, setBudgetValues] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState()
    const [TotalSpending, setTotalSpending] = useState([0])
    const [DisplayTotalSpentNumber, setDisplayTotalSpentNumber] = useState()

    const GetBudgetValues = () => {
        if(ProductName && ProductPrice) {
            setBudgetValues((prevState => [...prevState, {ProductName, ProductPrice}]))
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

    return (
    <div className='Expense_Calculator_div'>
        <h1>Budget Calculator</h1>
        <div className="Expense_Calculator">
            <div className="input_div">
                <label htmlFor="">Product Name</label>
                <input type="text" value={ProductName} onChange={e => setProductName(e.target.value)}  placeholder='Enter name......' name="" />
            </div>    
            <div className="input_div">
                <label htmlFor="">Product Price</label>
                <input type="number" value={ProductPrice} onChange={e => setProductPrice(e.target.value)} placeholder='$$$' name="" id="" />
            </div>
            <button onClick={GetBudgetValues}>Submit</button>
            
        </div>
        {BudgetValues?.map((budgetValue => {
        
            return (
                  <div className="Expense_display">
                        <div className="display_div">
                                    <p className='display_name'>{budgetValue?.ProductName}</p>
                                    <p className='display_price'>{budgetValue?.ProductPrice}</p>
                                <div className="display_buttons">
                                    <button>Edit</button>
                                        <button>Delete</button>
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