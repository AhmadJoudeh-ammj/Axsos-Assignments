import axios from 'axios';

const API_URL = 'http://localhost:8000/api/authors';

const authorService = {
    getAll: () => axios.get(API_URL).then(res => res.data),
    getOne: (id) => axios.get(`${API_URL}/${id}`).then(res => res.data),
    create: (authorData) => axios.post(API_URL, authorData).then(res => res.data),
    update:  async(id, authorData) => {
        // Is the service function being called with the right URL and data?
        const url = `${API_URL}/${id}`;
        console.log('[authorService] Making PUT request to:', url, 'with data:', authorData);
        return axios.put(url, authorData).then(res => res.data);
    },
    delete: (id) => axios.delete(`${API_URL}/${id}`).then(res => res.data),
};

export default authorService;