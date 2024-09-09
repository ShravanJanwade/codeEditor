import { useState, useEffect, useMemo } from "react";
import { generateHtmlContent, generateUpdatedHtmlContent } from "./Constants";

const useCodeEditor = (initialVariables) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [variables, setVariables] = useState(initialVariables);

  // Memoized updated HTML content
  const updatedHtmlContent = useMemo(() => generateHtmlContent(variables), [variables]);
  const updatedPreviewContent = useMemo(() => generateUpdatedHtmlContent(variables), [variables]);

  // Update HTML content when variables change
  useEffect(() => {
    setHtmlContent(updatedHtmlContent || updatedPreviewContent);
  }, [updatedHtmlContent, updatedPreviewContent]);

  // Update variable handler
  const updateVariable = (key, value) => {
    setVariables((prev) => ({
      ...prev,
      [key]: value || `{{${key}}}`, // If empty, restore to {{variable}}
    }));
  };

  // Preview handlers
  const handlePreview = () => setShowPreview(true);
  const handleClosePreview = () => setShowPreview(false);

  return {
    htmlContent,
    variables,
    showPreview,
    updateVariable,
    handlePreview,
    handleClosePreview,
    setHtmlContent,
  };
};

export default useCodeEditor;
