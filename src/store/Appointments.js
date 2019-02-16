const incrementCountType = 'INCREMENT_COUNT';
const initialState = {
    data: [
        {
            text: 'Website Re-Design Plan',
            priorityId: 2,
            startDate: new Date(),
            endDate: new Date(2019, 1, 7, 20, 30)
        }, {
            text: 'Book Flights to San Fran for Sales Trip',
            priorityId: 1,
            startDate: new Date(2019, 1, 7, 10, 0),
            endDate: new Date(2019, 1, 7, 12, 0),
        }, {
            text: 'Install New Router in Dev Room',
            priorityId: 1,
            startDate: new Date(2019, 1, 7, 13),
            endDate: new Date(2019, 1, 7, 15, 30)
        }, {
            text: 'Approve Personal Computer Upgrade Plan',
            priorityId: 2,
            startDate: new Date(2019, 1, 7, 10, 0),
            endDate: new Date(2019, 1, 7, 11, 0)
        }, {
            text: 'Final Budget Review',
            priorityId: 2,
            startDate: new Date(2019, 4, 22, 12, 0),
            endDate: new Date(2019, 4, 22, 13, 35)
        },
    ],

    count: 0
};

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
};

export const reducer = (state = initialState, action) => {


    if (action.type === incrementCountType) {
        return { ...state, count: state.count + 1 };
    }
    return state;
};