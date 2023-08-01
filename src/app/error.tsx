"use client";

import React, { useEffect } from 'react'
type ErrorPageProps = {
  error: Error,
  reset: Function
}
export default function Error({error, reset}: ErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong</h1>
      <button className='hover:text-amber-600' onClick={() => reset()}>Try again</button>
    </div>
  )
}
