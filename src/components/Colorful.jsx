import { BRQSmartPopup } from 'brq-smart-popup'

function Colorful() {
  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl rounded-2xl relative space-y-6 border border-gray-200">

        <div className="space-y-2">
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
          <input
            id="title"
            name="colorful-title-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-green-100 to-green-200"
            placeholder="Enter Title"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="module" className="block text-lg font-semibold text-gray-700">Module</label>
          <input
            id="module"
            name="colorful-module-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-blue-100 to-blue-200"
            placeholder="Enter Module"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-lg font-semibold text-gray-700">Date</label>
          <input
            id="date"
            name="colorful-date-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-pink-100 to-pink-200"
            placeholder="Enter Date"
          />
        </div>

        {/* Smart popup to bind relevant fields */}
        <BRQSmartPopup
          api="https://www.gst.gov.in/fomessage/newsupdates"
          dataKey="data"
          displayFields={["title", "module", "date"]}
          bindFields={{
            title: "title",
            module: "module",
            date: "date"
          }}
        />
      </div>
    </>
  )
}

export default Colorful
