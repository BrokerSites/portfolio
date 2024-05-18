import * as React from 'react';
import Typography from '@mui/material/Typography';

function GlassCard() {
    return (
        <div className='glass-card'>
            <Typography variant="h5" component="h2">
                Card Title
            </Typography>
            <Typography variant="body1">
                Card Description
            </Typography>
        </div>
    );
}

export default GlassCard
