import axios from 'axios';

async function fetchEvents() {
  try {
    const res = await axios.get('http://localhost:2321/v1/events');
    return res.data
  } catch (error) {
    return error.message;
  }
}

export default fetchEvents;
