import React from 'react';

const PrimaryButtons = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0fc2dd]">{children}</button>
        </div>
    );
};

export default PrimaryButtons;