import { Tile } from './Tile';
import { Stack, Alert } from '@mui/material';
import { useState } from 'react';

export const Wordle = ({ numberOfTiles, word, totalTrials }) => {
    const [values, setValues] = useState([]);
    const [trial, setTrial] = useState(0);
    const [success, setSuccess] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e, index) => {
        const newValue = e.target.value;

        if (newValue.length === 1 && /[a-z]/.test(newValue)) {
            const newValues = [...values];
            newValues[index] = e.target.value;
            setValues(newValues);
        }
    };

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            setShowMessage(true);

            if (values.join('') === word) {
                // Success scenario.
                setSuccess(true);
            } else {
                // Error scenario\
                setTrial(trial + 1);
                setSuccess(false);
            }
        }   
    }

    const getErrorMessage = () => trial === totalTrials ? 'Sorry you ran out of trials, better luck next time' : `Please try again, you have ${totalTrials - trial} more trials`;

    return <>
        {showMessage ? success ? <Alert severity="success">You got the word! Congrats!</Alert> :
            <Alert severity="error">{getErrorMessage()}</Alert> : null}
        <Stack onKeyDown={onKeyDown} direction="row">
            {[...new Array(numberOfTiles)].map((_, index) =>
                <Tile onChange={(e) => handleChange(e, index)} value={values[index] || ''} key={index} />)}
        </Stack>
    </>
}
