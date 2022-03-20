import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {client} from '.'
export const TwitterContext = createContext()
const TwitterContext = () => {
  return (
    <div>TwitterContext</div>
  )
}

export default TwitterContext