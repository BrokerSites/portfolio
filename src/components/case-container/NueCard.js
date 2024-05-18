import * as React from 'react';
import Typography from '@mui/material/Typography';

function NueCard() {
    return (
        <div className='nue-card'>
            <Typography variant="h5" component="h2">
                Card Title
            </Typography>
            <Typography variant="body1">
                Card Description
            </Typography>
        </div>
    );
}

export default NueCard
