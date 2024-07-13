import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import CurrencySelect from "@/components/CurrencySelect";
import Guest from "@/components/Guest"
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";
import { getCurrencies } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server"


const HomePage = async () => {
  const user = await currentUser();
  const currencies = await getCurrencies();
  console.log("🚀 ~ HomePage ~ currencies:", currencies)
  
  if(!user) {
    return <Guest />;
  }

  return (
    <main>
      <div className="title-wrapper">
        <h2>Welcome {user.firstName}</h2>
        <CurrencySelect />
        </div>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}

export default HomePage