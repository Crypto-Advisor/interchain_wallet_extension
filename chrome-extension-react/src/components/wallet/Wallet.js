import React, { useEffect, useState } from 'react';
import Web3 from "web3/dist/web3.min";

const Wallet = () =>{
    const web3 = new Web3()
    const [wallet, setWallet] = useState({})
    const [password, setPassword] = useState(false)
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    const loopAddresses = () =>{
        let tempaddresses = []
        for (let item in wallet){
            if(item === "_accounts"){
                break
            }
            tempaddresses.push(wallet[item].address)
        }
        setAddresses(tempaddresses)
        console.log(addresses)
    }

    useEffect(() =>{
        if(Object.keys(wallet).length === 0){
            setWallet(web3.eth.accounts.wallet.create(1))
            setLoading(false)
        }
    }, [])

    useEffect(() =>{
        if(!loading){
            loopAddresses()
            console.log(addresses)
        }
    }, [loading])



    return(
        <div>
            <button>Create New Address</button>
            <div>
                <p>Addresses:</p>
                {/* {
                    addresses.map((item) =>{
                        <p>item</p>
                    })
                } */}
            </div>
            <div>
                {password ? <button>Change Password</button> :
                <form>
                    <input type='text'></input>
                    <input type='submit'></input>
                </form>
                }
            </div>
            
        </div>
    )
}

export default Wallet;