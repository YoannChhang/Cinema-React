import React from 'react';

import store from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { buySeat, setTimer, cancelSeat, confirmSeat } from '../../redux/seats/seatsActions';
import Button from '@mui/material/Button';

export default function BuyButton() {

  const selected = useSelector( state => state.selected )
  
  const dispatch = useDispatch()
  return (
    <div>

        {/* onClick start a timer on the bought seat and change its status */}
        <Button variant="contained" disabled={(selected === null)} onClick={ () => {
          dispatch(buySeat(selected));
          const countdown = setInterval( () => {
            const currTimer = store.getState().seats.find( seat => seat.id === selected ).timer;

            if (currTimer === 0) { 
              dispatch(setTimer(selected, null));
              clearInterval(countdown);

              // Random number between 1 and 0 to simulate a 50% chance of the seat being confirmed
              const random = Math.random();
              if (random < 0.5) { dispatch(confirmSeat(selected)); }
              else { dispatch(cancelSeat(selected));}
            }

            // Decrease timer by 1 second
            else if (currTimer > 0) { dispatch(setTimer(selected, currTimer - 1)); }

          }, 1000);
        }}>Buy Ticket</Button>

    </div>
  )
}
