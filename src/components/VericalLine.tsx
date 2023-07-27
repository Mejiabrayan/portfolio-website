import React from 'react';

function VerticalLine(props: any) {
  const { variant, direction, ...rest } = props;

  return (
    <div
      aria-hidden
      className={`line line-vertical ${variant ? `line-${variant}` : ''}`}
      data-variant={variant}
      data-direction={direction}
      {...rest}
    />
  );
}

export default VerticalLine;
