import React, {useDeferredValue, useState} from 'react';

const TestUseDefer = () => {
    const [query, setQuery] = useState('');
    const deferQuery = useDeferredValue(() => query);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleQueryChange}/>
            <h3>this is query  {deferQuery}</h3>
            <h3>this is query  {query}</h3>
        </div>
    );
};

export default TestUseDefer;