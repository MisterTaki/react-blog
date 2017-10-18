const START = 'loading/START';
const SUCCESS = 'loading/SUCCESS';
const ERROR = 'loading/ERROR';

const initialState = {
  status: 'initialize',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case START:
      return {
        ...state,
        status: 'start',
      };
    case SUCCESS:
      return {
        ...state,
        status: 'success',
      };
    case ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}

export function startLoading() {
  return {
    type: START,
  };
}

export function successLoading() {
  return {
    type: SUCCESS,
  };
}

export function errorLoading() {
  return {
    type: ERROR,
  };
}
