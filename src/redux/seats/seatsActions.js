import * as seatsType from './seatsTypes';

export const buySeat = (seatId) => ({
    type: seatsType.BUY_SEAT,
    payload: {
        id: seatId,
    },
});

export const confirmSeat = (seatId) => ({
    type: seatsType.CONFIRM_SEAT,
    payload: {
        id: seatId,
    },
});

export const cancelSeat = (seatId) => ({
    type: seatsType.CANCEL_SEAT,
    payload: {
        id: seatId,
    },
});

export const selectSeat = (seatId) => ({
    type: seatsType.SELECT_SEAT,
    payload: {
        id: seatId,
    },
});

export const unselectSeat = (seatId) => ({
    type: seatsType.UNSELECT_SEAT,
    payload: {
        id: seatId,
    },
});

export const setTimer = (seatId, timer) => ({
    type: seatsType.SET_TIMER,
    payload: {
        id: seatId,
        timer: timer,
    },
});
