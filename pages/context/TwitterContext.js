import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'
export const TwitterContext = createContext()

export const TwitterProvider=({children})=>{

  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [tweets, setTweets] = useState([])
  const router=useRouter();
  useEffect(()=>{
    checkIfWalletIsConnected()
  },[]);

  useEffect(()=>{
      if(!currentAccount && appStatus=='connected')return;
      getCurrentUserDetails(currentAccount);
      fetchTweets()

    },[current, appStatus]);
    
    const checkIfWalletIsConnected=async()=>{
        if(!window.ethereum)
        return setAppStatus('noMetamask');
        try {
          const addressArray=await window.ethereum.request({
            method:'eth_account'

          })
          if (addressArray.length>0) {
            setAppStatus('connected');
            setCurrentAccount(addressArray[0])

            createUserAccount(addressArray[0]);
          }
          else{
            router.push('/');
            setAppStatus('notConnected');
          }
        } catch (error) {
          router.push('/');
          setAppStatus('error')
        }
    }

}

export default TwitterContext