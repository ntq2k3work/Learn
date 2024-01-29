import React from 'react';

const Cell = ({value,onClick}) => {
    return (
        <div className={`GameCell ${value && value === 'X' ? 'is-X' : 'is-O'}`} onClick={onClick}>
            {value}
        </div>
    );
}
export default Cell;