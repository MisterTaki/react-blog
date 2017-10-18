// https://github.com/mironov/react-redux-loading-bar/blob/master/src/loading_bar_middleware.js

import { LoadingBar } from '@/components/Common';
import { startLoading, successLoading, errorLoading } from '@/store/modules/loading';

const defaultTypeSuffixes = ['REQUEST', 'SUCCESS', 'ERROR'];

export default function (config = {}) {
  const promiseTypeSuffixes = config.typeSuffixes || defaultTypeSuffixes;

  return ({ dispatch }) => next => (action) => {
    if (action.type) {
      const [START, SUCCESS, ERROR] = promiseTypeSuffixes;

      const isStart = new RegExp(`_${START}$`, 'g');
      const isSuccess = new RegExp(`_${SUCCESS}$`, 'g');
      const isError = new RegExp(`_${ERROR}$`, 'g');

      if (action.type.match(isStart)) {
        LoadingBar.start();
        dispatch(startLoading());
      } else if (action.type.match(isSuccess)) {
        LoadingBar.success();
        dispatch(successLoading());
      } else if (action.type.match(isError)) {
        LoadingBar.error();
        dispatch(errorLoading());
      }
    }

    return next(action);
  };
}
