
import './App';
import Modal from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    const [showModal, setShowModal] = useState(false);

    const cancel = () => setShowModal(false);

    const buttonConf = [
        {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
        {type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')}
    ];

    return (
    <>
        <button onClick={() => setShowModal(true)}>Show modal</button>
      <Modal
          show={showModal}
          title='Modal header'
          onClose={cancel}
      >
          <div className='modal-body'>
            Modal body
          </div>
          <div className='modal-footer'>

          </div>
      </Modal>
    </>
  );
}

export default App;
