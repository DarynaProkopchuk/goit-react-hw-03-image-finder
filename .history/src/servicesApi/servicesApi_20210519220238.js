

/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_KEY = '20765184-41790f0211a0f1dcad0dfa410';
const BASE_URL = 'http://pixabay.com/api/?';

const fetchImg = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `${BASE_URL}=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(({ data }) => data.hits);
};
export default { fetchImg };

