import React from 'react';

interface Props extends React.PropsWithChildren {
    type: string;
    onDismiss: React.MouseEventHandler;
    show: boolean;
    clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, show, clickDismissible, children}) => {
    if (clickDismissible) {
        return (
            <div
                className={`alert alert-${type} alert-dismissible fade show ${show ? 'd-block' : 'd-none'}`}
            >
                <div>
                    {children}
                </div>
                <div>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={onDismiss}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={`alert alert-${type} alert-dismissible fade show ${show ? 'd-block' : 'd-none'}`}
                onClick={onDismiss}
            >
                <div>
                    {children}
                </div>
            </div>
        );
    }
};

export default Alert;