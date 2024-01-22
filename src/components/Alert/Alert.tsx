import React from 'react';

interface Props extends React.PropsWithChildren {
    type: string;
    onDismiss?: React.MouseEventHandler;
    clickDismissible: boolean;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
    if (onDismiss) {
        return (
            <div
                className={`alert alert-${type} alert-dismissible fade show d-flex justify-content-between align-items-center`}
                role="alert">
                <div>
                    {children}
                 </div>
                <div>
                    <button
                        type="button"
                        className="close btn"
                        onClick={onDismiss}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={`alert alert-${type} alert-dismissible fade show d-flex justify-content-between align-items-center`}
                role="alert">
                    {children}
            </div>
        );
    }
};

export default Alert;