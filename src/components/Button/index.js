import React from "react";


const Button = ({ children, className, locked = false, ...rest }) => {
  return (
    <button className={`button locked-${locked} ${className}`} {...rest}>
      <div className="text-wrapper">{children}</div>
    </button>
  );
};

export default Button;
