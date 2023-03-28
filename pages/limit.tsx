import React, { useState } from 'react'

// import {Client} from '@coin98-com/connect-sdk'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

const chainId = 'serenity-testnet-001'

const Index = () => {
    const [address, setAddress] = useState('aura18nct2cclvctk7jue6g77tp5rcgnvk2k9ey05nw')

    const [result, setResult] = useState()
 
    const test = async () => {

        const { Client } = require('@coin98-com/connect-sdk')
        const client = new Client()

        await client.connect(chainId, {
            logo: "Provide Your App Logo URL",
            name: "Your App Name",
            url: "Provide Your App URL"
        })


        


        const result = await client.request({
            "method": "cosmos_execute",
            "params": [
              {
                "chainId": "serenity-testnet-001",
                "signer": "aura18nct2cclvctk7jue6g77tp5rcgnvk2k9ey05nw",
                "contractAddress": "aura1vtnsw78m2q7gcmtek9mqsjes0790mjxmtjsxnk66648x8x974zksgrs09v",
                "msg": {
                  "mint": {
                    "phase_id": 4,
                    "amount": 1
                  }
                },
                "memo": "",
                "gasPrice": "100000uaura",
                "fee": "auto",
                "funds": [
                  {
                    "amount": "1",
                    "denom": "uaura"
                  }
                ]
              }
            ]
        })


        // {
        //     gasPrice: string | GasPrice
        // }



        // const offlineSigner = await client.getOfflineSigner(chainId)


        // const sClient = await SigningCosmWasmClient.connectWithSigner('https://rpc.serenity.aura.network/', offlineSigner, {
        //     prefix: "aura"
        // })





        // const result = await sClient.execute('aura1n4aqj7lucydfdfmml7kvw2lecld99ere3f22v5', 'aura1vtnsw78m2q7gcmtek9mqsjes0790mjxmtjsxnk66648x8x974zksgrs09v', {
        //     "mint": {
        //         "phase_id": 1,
        //         "amount": 1
        //     }
        // }, {
        //     amount: [{
        //         denom: 'uaura',
        //         amount: '400000'
        //     }],
        //     gas: '500000',
        //     //@ts-expect-error huhu
        //     gasLimit: '500000'
        // }, "", [
        //     {
        //         "denom": "uaura",
        //         "amount": "2000000"
        //     }
        // ])


        setResult(result)

        //Dapp
        // {
        //     "chainId": "serenity-testnet-001",
        //     "signer": "aura1n4aqj7lucydfdfmml7kvw2lecld99ere3f22v5",
        //     "signDoc": {
        //       "chainId": "serenity-testnet-001",
        //       "signer": "aura1n4aqj7lucydfdfmml7kvw2lecld99ere3f22v5",
        //       "msgs": [
        //         {
        //           "sender": "aura1n4aqj7lucydfdfmml7kvw2lecld99ere3f22v5",
        //           "contract": "aura1l4xzej8tpcn6suwppd2wc6fef5skzjl5rlxayuqkke0zgr8cgf8sfcme7g",
        //           "msg": "eyJidXkiOnsiY29udHJhY3RfYWRkcmVzcyI6ImF1cmExeGhyM3I3eGd2eXJ5Z2N1eHNneThxaGg3cHF3dWhlcHMzem4zd3c1ZGQ0Y2w1ZGN0Zmt5c3U5bWtkOCIsInRva2VuX2lkIjoiMTY3NzQ4MDE5MDAyMCJ9fQ==",
        //           "funds": [
        //             {
        //               "denom": "uaura",
        //               "amount": "1000000"
        //             }
        //           ]
        //         }
        //       ],
        //       "fee": {
        //         "amount": [
        //           {
        //             "denom": "uaura",
        //             "amount": "10621"
        //           }
        //         ],
        //         "gasLimit": "424835",
        //         "payer": "",
        //         "granter": ""
        //       }
        //     }
        //   }


        //



        //   {
        //     "method": "cosmos_execute",
        //     "params": [
        //       {
        //         "chainId": "serenity-testnet-001",
        //         "signer": "aura1n4aqj7lucydfdfmml7kvw2lecld99ere3f22v5",
        //         "contractAddress": "aura1l4xzej8tpcn6suwppd2wc6fef5skzjl5rlxayuqkke0zgr8cgf8sfcme7g",
        //         "msg": {
        //           "buy": {
        //             "contract_address": "aura1xhr3r7xgvyrygcuxsgy8qhh7pqwuheps3zn3ww5dd4cl5dctfkysu9mkd8",
        //             "token_id": "1677480190020"
        //           }
        //         },
        //         "memo": "",
        //         "fee": {
        //           "gasPrice": {
        //             "amount": {
        //               "data": {
        //                 "atomics": "04",
        //                 "fractionalDigits": 3
        //               }
        //             },
        //             "denom": "uaura"
        //           }
        //         },
        //         "funds": [
        //           {
        //             "amount": "1000000",
        //             "denom": "uaura"
        //           }
        //         ]
        //       }
        //     ],
        //     "id": "93b43b22-1af4-494d-8d86-f1962e143908",
        //     "chain": "serenity-testnet-001",
        //     "redirect": "https://hub.serenity.twilight.space/nft/aura1xhr3r7xgvyrygcuxsgy8qhh7pqwuheps3zn3ww5dd4cl5dctfkysu9mkd8/1677480190020#81955480-501d-42f7-94e1-7ab9a37e90e2"
        //   }

    }

    return (
        <div>Index


            {/* <a href="https://hub.serenity.twilight.space/nft/aura1xhr3r7xgvyrygcuxsgy8qhh7pqwuheps3zn3ww5dd4cl5dctfkysu9mkd8/1677480190020">test</a> */}
            <div>
                Address
            </div>
            <input type="text" value={address} onChange={e => setAddress(e.currentTarget.value)} placeholder="Dien dia chi vi vo day" />


        <div>
            result
        </div>
        <div>
            {JSON.stringify(result)}
        </div>
            <div>
                <button onClick={test}>
                    Run with gas Auto
                </button>
                <button>
                  Run with gas limit
                </button>
            </div>
        </div>
    )
}

export default Index