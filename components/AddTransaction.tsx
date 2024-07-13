'use client'

import { useRef } from "react"
import addTransaction from "@/app/actions/addTransaction"
import { toast } from "react-toastify"
import { convertAmountToRsd } from "@/lib/utils"
import { useCurrency } from "@/app/contexts/CurrencyContext"

const AddTransaction = () => {
    const [currency, setCurrency]:any = useCurrency();
    const formRef = useRef<HTMLFormElement>(null)
    
    // Client Action Handler function
    const clientAction = async (formData: FormData):Promise<void> => {
        try {
            // Convert amount to RSD    
            const amountValue = formData.get('amount') as string;
            const rsdAmountValue = convertAmountToRsd(amountValue, currency)
            formData.set('amount', rsdAmountValue.toString());
            
            // Add Transaction to database
            const {data, error} = await addTransaction(formData);
            
            if(error) {
                toast.error(error)
            } else {
                toast.success("Transaction added")
                formRef.current?.reset();
                console.log("🚀 ~ clientAction ~ data:", data)
            }
        } catch (error) {
            console.error("🚀 ~ clientAction ~ error:", error )
        }
    }
    return (
    <>
    <h3>Add Transaction</h3>
    <form ref={ formRef } action={ clientAction } >
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" placeholder="Enter text..."/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount<br/>(negative - expense, positive - income)</label>
            <input type="number" id="amount" name="amount" pattern="-?[0-9]*[.,]?[0-9]+" placeholder="Enter amount..." step='0.01'/>
        </div>
        <button className="btn">Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction