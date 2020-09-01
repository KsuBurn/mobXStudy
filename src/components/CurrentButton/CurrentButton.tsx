import React, {FC} from 'react';
import { Button } from 'antd';

type ButtonType = {
  buttonTitle: string;
  type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  onClick?: () => void;
  danger?: boolean;
}

const CurrentButton: FC<ButtonType> = ({buttonTitle, type, onClick, danger}: ButtonType): JSX.Element => {
  return (
    <Button
      type={type}
      onClick={onClick}
      danger={danger}
    >
      {buttonTitle}
    </Button>
  )
};

export default CurrentButton;
