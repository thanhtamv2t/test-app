//@ts-nocheck
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React from 'react'

export const FEE_SEI = {
  amount: {
    demom: "usei",
    amount: 100000
  },
  gas: '700000',
};



const Sei: React.FC = () => {

  const run = async () => {

    if (typeof window === "undefined") return false;

    await window.keplr.enable("atlantic-2")

    const offlineSigner = await window.getOfflineSigner("atlantic-2")
    console.log(`🐳 -> run -> offlineSigner`, offlineSigner)
    const sClient = await SigningCosmWasmClient.connectWithSigner("https://rpc.atlantic-2.seinetwork.io", offlineSigner, {
      prefix: "sei"
    });

    console.log(1, await offlineSigner.getAccounts())
    try {
      const result = await sClient.execute("sei1n4aqj7lucydfdfmml7kvw2lecld99ere8nv7gv", "sei16sf94gm057rakru0q5yk6q9h375namuzxuwa69nm7uh6n269m2dsnp903y", {
        approve: {
          spender: 'sei120dutacp86m8s3kmqzw7eklzed873xer97fc5sv46yfvyrum40pskqtppm',
          token_id: 1212
        }
      }, {
        amount: [
          {
            amount: "100000",
            denom: "usei"
          }
        ],
        gas: "70000",
        gasLimit: "500000"
      }, "")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      Sei
      <div>
        <button onClick={run}>RUN</button>
      </div>
    </div>
  )
}

export default Sei