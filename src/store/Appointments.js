const incrementCountType = 'INCREMENT_COUNT';
const initialState = { data: [], count: 0  };

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
};

export const reducer = (state = initialState, action) => {


    if (action.type === incrementCountType) {
        return { ...state, count: state.count + 1 };
      }
    return state;
};