'use client'

import { addCommas, fromRsdMultiplier } from "@/lib/utils"
import { useCurrency } from "@/app/contexts/CurrencyContext";

const Amount = ({price = 0}:{price?:number}) => {
    const [currency, setCurrency]:any = useCurrency();
    const currencyCoefficient = fromRsdMultiplier(currency);
    const formatedPrice = price * currencyCoefficient
  return (
    <>{addCommas(formatedPrice)} {currency}</>
  )
}

export default Amount