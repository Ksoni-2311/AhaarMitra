import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Toasterx = () => {
  return (
    <div>
      <button onClick={notifyl}>Make me a toast</button>
      <Toaster />
    </div>
  )
}

export default Toasterx