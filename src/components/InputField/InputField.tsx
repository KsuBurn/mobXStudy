import React, {ChangeEventHandler, FC} from 'react';
import { Input } from 'antd';

type InputFieldType = {
  placeholder: string;
  addonBefore: string;
  name: string;
  value?: string;
  onChange: ChangeEventHandler;
};

const InputField: FC<InputFieldType> = ({placeholder, addonBefore, value, onChange, name}: InputFieldType) => {

  return (
    <Input
      placeholder={placeholder}
      addonBefore={addonBefore}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default InputField;
