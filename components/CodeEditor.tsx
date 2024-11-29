interface CodeEditorProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

export default function CodeEditor({
  label,
  value,
  onChange,
  placeholder,
  readOnly = false,
}: CodeEditorProps) {
  return (
    <div className="space-y-2">
      <label className="font-semibold text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={8}
        className={`w-full p-4 border rounded-lg focus:outline-none focus:ring ${
          readOnly ? "bg-gray-200" : "bg-white"
        }`}
      />
    </div>
  );
}
