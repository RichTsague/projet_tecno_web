interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
  }
  
  export default function Button({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
  }: ButtonProps) {
    const baseStyle = 'py-2 px-4 rounded font-bold';
    const variantStyles = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variantStyles[variant]}`}
      >
        {label}
      </button>
    );
  }
  