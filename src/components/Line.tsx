import React from 'react';

type LineProps = {
  variant?: string;
  direction?: string;
};

const Line: React.FC<LineProps> = ({ variant, direction, ...props }) => {
  return (
    <div
      aria-hidden
      className="line"
      data-variant={variant}
      data-direction={direction}
      {...props}
    />
  );
};

export default Line;
