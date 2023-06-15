import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { unselectSeat, selectSeat, setTimer, cancelSeat, confirmSeat } from '../../redux/seats/seatsActions';
import store from '../../redux/store';

export default function Seat(props) {

    const { id } = props;
    
    // Get states from redux store
    const { seatTimer, seatStatus, selectedSeat } = useSelector(state => {

        const seat = state.seats.find(seat => seat.id === id);
        return {
            seatTimer: seat ? seat.timer : null, 
            seatStatus: seat.status, 
            selectedSeat: state.selected 
        };
    });

    const dispatch = useDispatch();

    // Color of the seat icon
    let color;
    switch (seatStatus) {
        case 'pending':
            color = "gray";
            break;
        case 'taken':
            color = "red";
            break;
        case 'selected':
            color = "green";
            break;
        default:
            color = "black";

    }

    let minutes = Math.floor(seatTimer / 60);
    let seconds = seatTimer % 60;
    if (seconds <= 9) { seconds = `0${seconds}`; }
    
    // Calls the countdown function every second if the seat is pending only once (for page reload)
    useEffect(() => {
        
        const countdown = setInterval( () => {

            const currTimer = store.getState().seats.find( seat => seat.id === id ).timer;
            if (seatStatus === 'pending') {

                if (currTimer === 0 || currTimer === null) { 
                    dispatch(setTimer(id, null));
                    clearInterval(countdown);
        
                    // Random number between 1 and 0
                    const random = Math.random();
                    if (random < 0.5) { dispatch(confirmSeat(id)); }
                    else { dispatch(cancelSeat(id));}
                }
                else if (currTimer > 0) { dispatch(setTimer(id, currTimer - 1)); }
        
            }
        }, 1000);
        
    }, []);

    return (
        
        <div style ={{
            width: '8rem',
            height: '9rem',
        }} >
            {/* onClick Select / Unselect seat */}
            <div id={id} onClick={() => {

                if (seatStatus === 'taken') { return; }
                if (seatStatus === 'pending') { return; }

                if (selectedSeat === id) { dispatch(unselectSeat(id)); }
                else {
                    if (selectedSeat != null) { dispatch(unselectSeat(selectedSeat)); }
                    dispatch(selectSeat(id));
                }
                
            }}>
                <EventSeatIcon htmlColor={color} style ={{
                    fontSize: '5rem',
                }} />
            </div>

            <div className='timer' style ={{
            fontSize: '30px',
        }}>
                {seatTimer != null ? `${minutes}:${seconds}` : ''}
            </div>
        </div>

    )
}

