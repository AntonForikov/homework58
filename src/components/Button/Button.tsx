import React from 'react';

interface Props {
    type: string
    label: string,
    onClick: React.MouseEventHandler
}

interface Conf {
    conf: Props[]
}
const Button: React.FC<Conf> = ({conf}) => {
    const buttons = (<>
        {conf.map(button => {
            return <button key={Math.random()} className={`btn btn-${button.type}`} onClick={button.onClick}>{button.label}</button>;
        })}
    </>);

    return (
        <>
            {buttons}
        </>
    );
};

export default Button;