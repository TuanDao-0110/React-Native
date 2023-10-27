import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../queries';


const useFindRepo = () => {
    const [findRepo, { loading, error, called, data, fetchMore }] = useLazyQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });
    return [findRepo, data, loading, error, called, fetchMore];
};

export default useFindRepo