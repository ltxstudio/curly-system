type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium shadow-md"
  >
    {label}
  </button>
);

export default Button;
