import { TextField } from '@mui/material';

export const Tile = ({ value, onChange }) => {
    return (<TextField
        id="outlined-basic"
        onChange={onChange}
        value={value}
        autoComplete="off"
        sx={{ background: 'white', width: '50px' }}
        variant="outlined" />);
}