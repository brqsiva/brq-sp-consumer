import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BRQSmartPopup } from 'brq-smart-popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="p-6 max-w-md mx-auto bg-white shadow rounded relative">
      <label htmlFor="first-name">First Name</label>
      <input id="first-name" className="w-full border px-3 py-2 mb-4 rounded"
        placeholder="Enter Name Here"
      />

      <label htmlFor="email-id">Email</label>
      <input id="email-id" className="w-full border px-3 py-2 mb-4 rounded"
        placeholder="Enter EmailId Here"
      />

      <label htmlFor="phone-id">Phone</label>
      <input id="phone-id" className="w-full border px-3 py-2 mb-4 rounded"
        placeholder="Enter Phone Number Here"
      />

      <label htmlFor="photo-id">Street</label>
      <input id="street-id" className="w-full border px-3 py-2 mb-4 rounded"
        placeholder="Enter Street Name Here"
      />

      {/* Attach popup to #first-name */}
      <BRQSmartPopup
        api="https://www.gst.gov.in/fomessage/newsupdates"
        dataKey="data"
        displayFields={["date", "module", "title"]}
        bindFields={{
          title: "first-name",
          date: "email-id",
          module: "phone-id"
        }}
      />
    </div>
    </>
  )
}

export default App
