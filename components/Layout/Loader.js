import { BeatLoader } from 'react-spinners';
import loaderStyles from '../../styles/loader.module.css'

const Loader = () => {
  return (
    <div className={loaderStyles.loader_container}>
      <BeatLoader color="#678FD5" size={20} className={loaderStyles.loader}/>
    </div>
  );
};

export default Loader;
