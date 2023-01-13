import PulseLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.scss';

export default function LoadingComponent() {
  return (
    <div className={css.loader}>
      <PulseLoader color="#326CFF" />
    </div>
  );
}
