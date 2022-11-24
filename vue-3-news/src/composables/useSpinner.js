import { storeToRefs } from 'pinia';
import { useSpinnerStore } from '../stores/spinner';

const useSpinner = () => {
  const { getShowSpinner: isShowSpinner } = storeToRefs(useSpinnerStore());
  return isShowSpinner;
};

export { useSpinner };
