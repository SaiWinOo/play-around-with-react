import {memo, useCallback, useEffect, useMemo, useState} from "react";

const PlayHooks = () => {

     console.log('parent component rendered')

    const [count,setCount] = useState(0);
    const parentHandler = () => {
         console.log('parent handler called');
         setCount(count + 1)
    }
    const childHandler = () => {
        console.log('child handler called');
    }

    return (
        <div onClick={parentHandler}>
            this is parent
            <Child handler={childHandler}/>
        </div>
    );
};

export default PlayHooks;

const Child = memo(({handler}) => {

    useEffect(() => {
        console.log('handler change');
    }, [handler]);

    console.log('child component rendered')
    return (
        <div>
            this is children
        </div>
    );
})

