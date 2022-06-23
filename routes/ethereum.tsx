/** @jsx h */
import { h } from "preact"
import { Handlers, PageProps} from "$fresh/server.ts"
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.1.esm.min.js"

const provider = new ethers.providers.InfuraProvider('homestead','a724772d5fb445dc950ba67dd5b11ce4')

export const handler: Handlers<number | null> = {
    async GET(_, ctx) {
        const blockNumber = await provider.getBlockNumber()
        return ctx.render(blockNumber)
    }
}

const Ethereum = ({data}: PageProps<number | null>) => {
    if (!data) {
        return <p>Awaiting data</p>
    } else {
        return (
            <div>
                <p>The current block number is: </p>
                <p>{data}</p>
            </div>
        )
    }
}

export default Ethereum

