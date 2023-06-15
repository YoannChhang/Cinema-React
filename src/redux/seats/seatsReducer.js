import * as seatsType from './seatsTypes';

const baseState = {
    selected: null,
    seats: [
        {
            id: 0,
            status: 'free',
            timer: null,
        },
        {
            id: 1,
            status: 'free',
            timer: null,
        },
        {
            id: 2,
            status: 'free',
            timer: null,
        },
        {
            id: 3,
            status: 'free',
            timer: null,
        },
        {
            id: 4,
            status: 'free',
            timer: null,
        },
        {
            id: 5,
            status: 'free',
            timer: null,
        },
        {
            id: 6,
            status: 'free',
            timer: null,
        },
        {
            id: 7,
            status: 'free',
            timer: null,
        },
        {
            id: 8,
            status: 'free',
            timer: null,
        },
    ],
};

export default function seatsReducer(state = baseState, action) {

    switch (action.type) {

        case seatsType.BUY_SEAT:

            return {
                ...state,
                selected: null,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            status: 'pending',
                            timer: 120,
                        };
                    }
                    return seat;
                }),
            };
        
        case seatsType.CONFIRM_SEAT:
            return {
                ...state,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            status: 'taken',
                        };
                    }
                    return seat;
                }),
            };
        
        case seatsType.CANCEL_SEAT:
            return {
                ...state,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            status: 'free',
                        };
                    }
                    return seat;
                }),
            };
        
        case seatsType.SELECT_SEAT:
            return {
                ...state,
                selected: action.payload.id,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            status: 'selected',
                        };
                    }
                    return seat;
                }),
            };

        case seatsType.UNSELECT_SEAT:
            return {
                ...state,
                selected: null,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            status: 'free',
                        };
                    }
                    return seat;
                }),
            };

        case seatsType.SET_TIMER:
            return {
                ...state,
                seats: state.seats.map(seat => {
                    if (seat.id === action.payload.id) {
                        return {
                            ...seat,
                            timer: action.payload.timer,
                        };
                    }
                    return seat;
                }),
            };

        default:
            return state;
    
    }

}