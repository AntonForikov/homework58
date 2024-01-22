import './App';
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
    const [showModal, setShowModal] = useState(false);
    // const [showAlert, setShowAlert] = useState(true);

    let show = true;

    const showAlert = () => {
        console.log(`Show before: ${show}`);
        show = false;
        console.log(`Show after: ${show}`);
    };
    const cancel = () => setShowModal(false);

    const buttonConf = [
        {type: 'primary', label: 'Continue', onClick: () => alert('Clicked continue')},
        {type: 'danger', label: 'Close', onClick: cancel}
    ];

    return (
    <>
        <button
            className='btn btn-primary d-block mx-auto my-1'
            onClick={() => setShowModal(true)}
        >Show modal
        </button>
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
        <Alert type='warning' show={show} onDismiss={() => showAlert()} clickDismissible>This is a warning type alert</Alert>
        <Alert type='success' show={show} onDismiss={() => showAlert()} >This is a success type alert</Alert>
        {/*<Alert type='warning' show={showAlert} onDismiss={() => setShowAlert(false)}>This is a warning type alert</Alert>*/}
        {/*<Alert type='success' show={showAlert} onDismiss={() => setShowAlert(false)} clickDismissible>This is a success type alert</Alert>*/}
        {/*<Alert type='warning' show onDismiss={() => console.log('warning')}>This is a warning type alert</Alert>*/}
        {/*<Alert type='success' show onDismiss={() => console.log('success')} clickDismissible>This is a success type alert</Alert>*/}
    </>
  );
}

export default App;
