import axios from 'axios';

async function createEvents(data) {
  try {
    const res = await axios.post('http://localhost:2321/v1/events', data);
    return res.data
  } catch (error) {
    return error.message;
  }
}

export default createEvents;