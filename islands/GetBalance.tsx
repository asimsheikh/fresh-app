// islands/GetBalance.tsx

/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useEffect, useState } from "preact/hooks";

import { ethers } from "https://cdn.ethers.io/lib/ethers-5.1.esm.min.js"

export default function GetBalance(props) {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState('nomadicasim.eth')
  const [isLoading, setIsLoading] = useState(false)
  const provider = new ethers.providers.InfuraProvider('homestead','a724772d5fb445dc950ba67dd5b11ce4')

  const getBalance = async () => {
        setIsLoading(true)
        console.log('In the getBalance function')
        const ethBalance= await provider.getBalance(address)
        console.log(`The balance is: ${ethBalance}`)
        setAddress('')
        setBalance(ethers.utils.formatEther(ethBalance))
        setIsLoading(false)
     }

  return <div>
        <input class={tw`border-2`} type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
        <span>The balance is: {balance}</span><br />
        <button class={tw`bg-blue-200 p-5`} disabled={isLoading} onClick={getBalance}>Get Balance</button><br />
        { balance !== 0 &&  <p>The balance of <span class={tw`font-bold`}>{address}</span> is {balance}</p> }
    </div>
}