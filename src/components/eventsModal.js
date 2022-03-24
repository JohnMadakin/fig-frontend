import './css/modal.css';

const Modal = ({ handleClose, show, handleSubmit, inputs, handleInputChange, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="title">Title</label>
              </div>
              <div className="col-75">
                <input type="text" id="event-form-title" value={inputs.title} onChange={handleInputChange}  name="title" placeholder="Title.."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="category">Category</label>
              </div>
              <div className="col-75">
                <select id="event-form-category" value={inputs.category} onChange={handleInputChange}  name="category">
                  <option value="blockchain">Block Chain</option>
                  <option value="data science">Data Science</option>
                  <option value="internet of things">Internet of Things</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="address">Last Name</label>
              </div>
              <div className="col-75">
                <input type="text" id="event-form-address" value={inputs.address} onChange={handleInputChange}  name="address" placeholder="Address.."/>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Description</label>
              </div>
              <div className="col-75">
                <textarea id="event-form-description" name="description" value={inputs.description} onChange={handleInputChange}  placeholder="Description.." style={{height: '200px'}}></textarea>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit"/>
              <button className='close-events-button' type="button" onClick={handleClose}>
                Close
              </button>
            </div>

          </form>
        </div>

      </section>
    </div>
  );
};

export default Modal;
