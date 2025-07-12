import { BRQSmartPopup } from 'brq-smart-popup';

function Random() {
  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-xl rounded-2xl relative border border-gray-200 space-y-6">
      
      {/* Grid Layout for Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Title */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
          <input
            id="title"
            name="random-title-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-green-100 to-green-200"
            placeholder="Enter Title"
            autoComplete="new-password"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
          <input
            id="description"
            name="random-description-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-green-100 to-green-200"
            placeholder="Enter Description"
            autoComplete="new-password"
          />
        </div>

        {/* Module */}
        <div className="space-y-2">
          <label htmlFor="module" className="block text-lg font-semibold text-gray-700">Module</label>
          <input
            id="module"
            name="random-module-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-blue-100 to-blue-200"
            placeholder="Enter Module"
            autoComplete="new-password"
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-lg font-semibold text-gray-700">Date</label>
          <input
            id="date"
            name="random-date-123"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition text-gray-800 placeholder-gray-500 bg-gradient-to-r from-pink-100 to-pink-200"
            placeholder="Enter Date"
            autoComplete="new-password"
          />
        </div>
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
  );
}

export default Random;
