import React from 'react'

import Seat from '../seat/seat';
import BuyButton from '../buyButton/buyButton';
import Stack from '@mui/material/Stack';

// Main render function
export default function Seats() {
  
  const seats = [[0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]];
    
  return (
    <div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          
          {/* Display the rows and cols of the seats dynamically using the array given above */}
          {seats.map((row, index) => (

            <Stack direction="row" spacing={2}>
              
              {row.map((seat, index) => (
                <Seat id={seat}/>
              ))}

            </Stack>

          ))}
        </div>
        <BuyButton />
    </div>
  )
}

