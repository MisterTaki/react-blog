const START = 'loading/START';
const SUCCESS = 'loading/SUCCESS';
const ERROR = 'loading/ERROR';

const initialState = {
  status: 'initialize',
};

export default function (state = initialState, action = {}) {
  switch (action.status) {
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
    status: START,
  };
}

export function successLoading() {
  return {
    status: SUCCESS,
  };
}

export function errorLoading() {
  return {
    status: ERROR,
  };
}
