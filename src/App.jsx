import { useEffect, useState } from 'react';
import fetchEvents from './services/fetchevents';
import creatEvents from './services/createevents';
import Modal from './components/eventsModal';
import './main.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedEventModal, setEventModal] = useState(false);
  const [inputs, setInputsValues] = useState({
    title: '',
    address: '',
    description: '',
    category: '',
    isVirtual: true,
  });

  useEffect(() => {
    getEvents()
  }, []);

  async function getEvents() {
    const result = await fetchEvents();
    setEvents(result.events);
  }

  function showModal(){
    setEventModal(true);
  }

  function hideModal(){
    setEventModal(false);
    setInputsValues({
      title: '',
      address: '',
      description: '',
      category: '',
      isVirtual: true,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await creatEvents(inputs);
    if (result.msg === 'Success') {
      window.location.reload(false);
    }
  }

  function handleInputChange(e) {
    e.persist();
    setInputsValues(inputValues => ({ ...inputValues, [e.target.name]: e.target.value }));
  }

  function handleClick(e) {
    e.preventDefault();
    const selectdEvents = e.target?.dataset?.events;
    if (e.target.className !== 'category-block') return;
    setSelectedEvent(selectdEvents);
  }

  return (
    <>
      <section className="hero">
        <h2>Connecting the world</h2>
        <div className="search-box"></div>
      </section>
      <section>
        <Modal show={selectedEventModal} handleClose={hideModal} handleSubmit={handleSubmit} inputs={inputs} handleInputChange={handleInputChange}>
          <p className='create-events-label'>Create Event</p>
        </Modal>
        <button className='create-events-button' type="button" onClick={showModal}>
          create events
        </button>

      </section>
      <section className="event-categories">
        {events && events.length > 0 ? events.map((ev) => (
          <div
            key={ev._id}
            onClick={handleClick}
            data-events={ev.title}
            className="category-block"
          >
            <h3>{ev.category}</h3>
            <p>{ev.title} Events</p>
          </div>
        )) : <div className="category-block-noevents">No Events found</div>}
      </section>

      <section className="selectedCat">
        <p>{selectedEvent}</p>
      </section>
    </>
  );
}

export default App;
