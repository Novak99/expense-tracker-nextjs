import getIncomeExpense from "@/app/actions/getIncomeExpense"
import Amount from "./Amount"

const IncomeExpense = async () => {
    const { income, expense } = await getIncomeExpense()
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus"><Amount price={income}/></p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus"><Amount price={expense}/></p>
            </div>
        </div>
    )
}

export default IncomeExpense