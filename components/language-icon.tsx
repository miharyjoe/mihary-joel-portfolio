import {
  FileCode2,
  Binary,
  Box,
  Chrome,
  Coffee,
  Database,
  FileJson,
  Terminal,
  Type,
} from "lucide-react";

export const getLanguageIcon = (language: string) => {
  const icons: Record<string, JSX.Element> = {
    TypeScript: <Type className="h-3 w-3" />,
    JavaScript: <FileJson className="h-3 w-3" />,
    Python: <Terminal className="h-3 w-3" />,
    React: <Chrome className="h-3 w-3" />,
    "Node.js": <Box className="h-3 w-3" />,
    Java: <Coffee className="h-3 w-3" />,
    SQL: <Database className="h-3 w-3" />,
    "C++": <Binary className="h-3 w-3" />,
    default: <FileCode2 className="h-3 w-3" />,
  };

  return icons[language] || icons.default;
};
