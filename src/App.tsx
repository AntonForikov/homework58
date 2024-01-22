
import './App';
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
    const [showModal, setShowModal] = useState(false);

    const cancel = () => setShowModal(false);

    const buttonConf = [
        {type: 'primary', label: 'Continue', onClick: () => alert('clicked continue')},
        {type: 'danger', label: 'Close', onClick: cancel}
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
            <Button conf={buttonConf} />
          </div>
      </Modal>
        <Alert type='warning'>This is a success type alert</Alert>
        <Alert type='success' onDismiss={true}>This is a success type alert</Alert>
    </>
  );
}

export default App;
