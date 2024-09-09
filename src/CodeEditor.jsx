import React from "react";
import "tailwindcss/tailwind.css";
import DropDown from "./DropDown";
import MainCodeEditor from "./MainCodeEditor";
import CodeHeader from "./CodeHeader";
import { variables as variablesState, variablesKey } from "./Constants";
import useCodeEditor from "./useCodeEditor";

const EmailSender = () => {
  const {
    htmlContent,
    variables,
    showPreview,
    updateVariable,
    handlePreview,
    handleClosePreview,
    setHtmlContent,
  } = useCodeEditor(variablesState);

  return (
    <div className="flex">
      {/* Sidebar for variables */}
      <div className="w-1/4 p-4 border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4">Variables</h2>

        {variablesKey.map((varKey) => (
          <DropDown
            title={varKey.title}
            updateVariable={updateVariable}
            valueKey={varKey.value}
            vars={varKey.var}
            key={varKey.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <CodeHeader
          handlePreview={handlePreview}
          updateVariable={updateVariable}
          variables={variables}
        />
        <MainCodeEditor
          showPreview={showPreview}
          htmlContent={htmlContent}
          setHtmlContent={setHtmlContent}
          handleClosePreview={handleClosePreview}
          variables={variables}
        />
      </div>
    </div>
  );
};

export default EmailSender;
