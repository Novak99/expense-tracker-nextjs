'use client'

import { useCurrency } from "@/app/contexts/CurrencyContext";


const CurrencySelect = () => {
    const [currency, setCurrency]:any = useCurrency();
    const currencies = ['RSD', 'EUR', 'USD', 'GBP'];
    const handleChange = (e:any) => {
        setCurrency(e.target.value)
    }
    return (
        <>
            <select
            value={currency} 
            name="currency" 
            id="currency" 
            onChange={handleChange}>
                {currencies.map((currency) => 
                <option key={currency} value={currency}>{currency}</option>)
                }
            </select>
        </>
    )
}

export default CurrencySelect