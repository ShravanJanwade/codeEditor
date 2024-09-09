import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import CodePreview from './CodePreview';
const MainCodeEditor = ({showPreview,htmlContent,setHtmlContent,handleClosePreview,variables}) => {
  return (
    <div>
       {/* HTML Code Editor */}
       <div className="border border-gray-300 rounded-md p-4">
          <CodeMirror
            value={htmlContent}
            height="400px"
            extensions={[html()]} // Use the HTML language extension
            onChange={(value) => setHtmlContent(value)}
          />
        </div>

        {/* Preview Modal */}
        {showPreview && (
         <CodePreview handleClosePreview={handleClosePreview} variables={variables} htmlContent={htmlContent}/>
        )}
    </div>
  )
}

export default MainCodeEditor
