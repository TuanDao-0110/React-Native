import { useLazyQuery } from '@apollo/client';
import { FIND_REPOSITORIES } from '../queries';


const useFindRepo = () => {
    const [findRepo, {  loading, error, called , data}] = useLazyQuery(FIND_REPOSITORIES);
    return [findRepo,data, loading, error, called];
};

export default useFindRepo