import { Tile } from './Tile';
import { Stack, Alert } from '@mui/material';
import { useState } from 'react';

export const Wordle = ({ numberOfTiles, word }) => {
    const [values, setValues] = useState([]);
    const [trial, setTrial] = useState(1);
    const [success, setSuccess] = useState(false);

    const handleChange = (e, index) => {
        const newValues = [...values];
        newValues[index] = e.target.value

        if (newValues.join('') === word) {
            // Success scenario.
            setSuccess(true);
        } else {
            // Error scenario
            setTrial(trial + 1);
            setSuccess(false);
        }
        setValues(newValues);
    };

    return <>
        {success ? <Alert severity="success">You got the word! Congrats!</Alert> : 
          <Alert severity="error">{`Please try again, you have ${trial} more trials`}</Alert>}
        <Stack direction="row">
            {[...new Array(numberOfTiles)].map((_, index) =>
                <Tile onChange={(e) => handleChange(e, index)} value={values[index] || ''} key={index} />)}
        </Stack>
    </>
}
