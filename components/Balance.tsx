import getUserBalance from "@/app/actions/getUserBalance"
import Amount from "./Amount"

const Balance = async() => {
  const { balance } = await getUserBalance()
  return (<>
    <h4>Your balance</h4>
    <h1><Amount price={balance}/></h1>
  </>
  )
}

export default Balance