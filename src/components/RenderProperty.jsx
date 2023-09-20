import React from 'react';

const RenderProperty = ({children}) => {
    return (
        <div>
            {children()}
        </div>
    );
};

export default RenderProperty;