import './App';
import Modal from "./components/Modal/Modal";
import React, {useState} from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

interface AlertState {
    type: string;
    show: boolean;
    children?: React.ReactNode;
    clickDismissible?: boolean;
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [alerts, setAlerts] = useState<AlertState[]>([
        {type: 'primary', show: true, clickDismissible: true, children: 'This is a primary type alert'},
        {type: 'success', show: true, children: 'This is a success type alert'},
        {type: 'danger', show: true, clickDismissible: false, children: 'This is a danger type alert'},
        {type: 'warning', show: true, clickDismissible: true, children: 'This is a warning type alert'},
    ]);

    const closeAlert = (index: number) => {
        const alertsCopy = [...alerts];
        alertsCopy[index].show = false;
        setAlerts([...alertsCopy]);
    };

    const cancel = () => setShowModal(false);

    const buttonConf = [
        {type: 'primary', label: 'Continue', onClick: () => alert('Clicked continue')},
        {type: 'danger', label: 'Close', onClick: cancel}
    ];

    return (
        <>
            <button
                className="btn btn-primary d-block mx-auto my-1"
                onClick={() => setShowModal(true)}
            >Show modal
            </button>
            <Modal
                show={showModal}
                title="Modal header"
                onClose={cancel}
            >
                <div className="modal-body">
                    Modal body
                </div>
                <div className="modal-footer">
                    <Button conf={buttonConf}/>
                </div>
            </Modal>
            {alerts.map((alert, index) => {
                return <Alert
                    type={alert.type}
                    show={alert.show}
                    children={alert.children}
                    clickDismissible={alert.clickDismissible}
                    key={Math.random()}
                    onDismiss={() => closeAlert(index)}
                />;
            })}
        </>
    );
}

export default App;
