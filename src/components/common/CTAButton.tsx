import React from 'react';
import { Button, ButtonProps } from 'antd';

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, ...props }) => {
  return (
    <Button type="primary" size="large" {...props}>
      {children}
    </Button>
  );
};

export default CTAButton;
