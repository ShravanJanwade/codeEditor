import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const DropDown = ({title,updateVariable,valueKey,vars}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };
  return (
    <div className="mb-4">
    <button
      className="w-full text-left font-medium p-2 bg-gray-200 rounded-md flex items-center justify-between"
      onClick={() => toggleDropdown(title)}
    >
      {title}
      <span className="ml-2">&#9660;</span> {/* Down arrow */}
    </button>
    {openDropdown === title && (
      <div className="mt-2">
        <CodeMirror
          value={valueKey}
          extensions={[javascript()]}
          height="100px"
          theme="light"
          onChange={(value) => updateVariable(vars, value.trim())}
        />
      </div>
    )}
  </div>
  )
}

export default DropDown
