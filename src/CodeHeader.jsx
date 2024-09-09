import React from 'react'

const CodeHeader = ({handlePreview,updateVariable,variables}) => {
  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
          {/* Preview Button */}
          <button
            onClick={handlePreview}
            className="ml-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Preview
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Email Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={variables.subject}
            onChange={(e) => updateVariable("subject", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter the subject of the email"
          />
        </div>
    </div>
  )
}

export default CodeHeader
