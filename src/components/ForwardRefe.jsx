import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';


const ForwardRefe = () => {

    const ref = useRef(null);

    const handle = () => {
        ref.current.focus();
    }


    return (
        <div style={{height : 4000}}>
            <button id={'button'} onClick={handle}>click button</button>
            <MyInput label="Name" ref={ref} />
        </div>
    );
};

export default ForwardRefe;



const MyInput = forwardRef(({label},ref) => {
    const ownRef = useRef(null);
    const testRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => ownRef.current.focus(),
            value: ownRef.current.value
        }
    },[]);

    useEffect(() => {
            document.addEventListener('scroll', () => {
                console.log(testRef.current.getBoundingClientRect().bottom)
                console.log('windo', window.innerHeight)
            });
    }, []);
    const handleClick = () => {
        console.log(testRef.current.getBoundingClientRect())
    }

    return (
        <label>
            <button style={{marginTop : 2000}} ref={testRef} onClick={handleClick} >this is notghifsa</button>
            {label}
            <input type="text" ref={ownRef} />
        </label>
    );
});

