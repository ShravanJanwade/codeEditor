import React from 'react'

const CodePreview = ({handleClosePreview,variables,htmlContent}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white rounded-lg p-4 w-2/3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview Email</h2>
        <button onClick={handleClosePreview} className="text-gray-600 hover:text-gray-900">
          X
        </button>
      </div>
      <div className="overflow-auto max-h-[500px] border border-gray-300 rounded-md p-4">
        <div
          className="border border-gray-300 rounded-md p-4"
          dangerouslySetInnerHTML={{ __html: htmlContent.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || `{{${key}}}`) }}
        />
      </div>
    </div>
  </div>
  )
}

export default CodePreview
