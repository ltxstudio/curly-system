type TextAreaProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ placeholder, value, onChange, readOnly }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    readOnly={readOnly}
    className="w-full h-48 p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
  />
);

export default TextArea;
