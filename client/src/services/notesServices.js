import axios from '../lib/axios';

const notesServices = {
  getNotes: () => axios.get('/'),
  deleNote: _id => axios.delete(`/${_id}`),
  updateNote: ({ _id, title, description }) => axios.put(`/${_id}`, {

    title,
    description,

  }),
  createNote: ({ title, description }) => axios.post('/', {
    title,
    description,
  }),
};

export default notesServices;
