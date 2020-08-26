import React, {FC} from 'react';
import { Button } from 'antd';

type ButtonType = {
  buttonTitle: string;
  type: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  onClick?: () => void
}

const CurrentButton: FC<ButtonType> = ({buttonTitle, type, onClick}: ButtonType): JSX.Element => {
  return (
    <Button
      type={type}
      onClick={onClick}
    >
      {buttonTitle}
    </Button>
  )
};

export default CurrentButton;
