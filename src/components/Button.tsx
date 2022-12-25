import { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  theme,
  className,
  size,
  ...rest
}) => {
  let themeClasses = 'text-white';

  if (theme == 'secondary') {
    themeClasses = 'bg-white';
  }

  let sizeClass = '';

  switch (size) {
    case 'small':
      sizeClass = 'text-sm';
      break;
    case 'medium':
      sizeClass = 'text-xl';
      break;
    case 'large':
      sizeClass = 'text-3xl';
  }
  return (
    <button
      {...rest}
      className={
        'px-2 py-1 border rounded-md ' +
        className +
        ' ' +
        themeClasses +
        ' ' +
        sizeClass
      }
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'small',
};

export default Button;
