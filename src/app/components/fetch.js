'use client'
import React, { useEffect } from 'react'

const Fetch = () => {


  async function fetching() {
    const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(raw.json())
    // const result = await raw.json()
    // console.log(raw.body.getReader(),'////////////////')
    // console.log(result)
    // console.log(JSON.stringify(result),'---------------')
    // console.log(result,'++++++++++++++++++++')

    // const reader = raw.body.getReader()
    // reader.read()
    // console.log(reader.read())
    // if (reader.read()) {
    //   console.log('stream complete')
    // }
    // else {

    // }

  }
  useEffect(() => {
    fetching()
  }, [])

  return (
    <></>
  )
}

export default Fetch