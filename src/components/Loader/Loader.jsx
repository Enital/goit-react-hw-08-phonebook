import { RotatingLines } from 'react-loader-spinner';

import css from './loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="orange"
        strokeWidth="4"
        animationDuration="1"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loader;