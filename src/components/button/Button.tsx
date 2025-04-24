import './Button.scss';

interface IButtonProps {
  type: 'primary' | 'secondary'
  text: string
  htmlType: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ type, text, htmlType, className, onClick }) => {

  return <button type={htmlType} className={`button button--${type} ${className}`} onClick={onClick}>{text}</button>
}

export default Button;