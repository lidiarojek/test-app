import { Alert, Card, CardContent, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useCallback, useEffect, useState } from 'react';

interface InputFormProps {
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
  trimWhitespaces?: boolean;
}

const defaultProps = {
  defaultValue: '',
  minLength: 3,
  maxLength: 20,
  trimWhitespaces: true,
};

const storageFormKey = 'inputValue';


export const InputForm = (props: InputFormProps = defaultProps) => {
  const data = {...defaultProps, ...props};
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(data.defaultValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formReadyToSubmit = !(displayError || !inputValue);

  const handleError = (message: string) => {
    setErrorMessage(message);
    setDisplayError(message.length > 0);
  };

  const handleInputChange = (event: any) => {
    const messageLength = event.target.value.length;
    setInputValue(event.target.value);
    if (messageLength < data.minLength) {
      handleError('The user name is too short!');
    } else if (messageLength > data.maxLength) {
      handleError('The user name is too long!');
    } else {
      handleError('');
    }
  };

  const handleSubmit = useCallback(() => {
    if (formReadyToSubmit) {
      localStorage.setItem(storageFormKey, inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    let valueToSet;
    const localStorageData = localStorage.getItem(storageFormKey);
    if (localStorageData) {
      valueToSet = localStorageData;
    } else {
      valueToSet = data.defaultValue || '';
    }

    setInputValue(valueToSet);
  }, []);

  return <div style={{display: 'flex', flexDirection: 'column'}}>
    <Card>
      <CardContent>
        {displayError && <><Alert severity="error">{errorMessage}</Alert> <br/></>}
        <TextField label="User name" variant="filled" value={inputValue} onInput={handleInputChange}
                   error={displayError}/>
        <br/><br/>
        <Button variant="contained" disabled={!formReadyToSubmit} onClick={handleSubmit}>Submit</Button>
      </CardContent>
    </Card>
  </div>;
};