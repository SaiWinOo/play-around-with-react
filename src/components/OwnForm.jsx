import {useState} from 'react';

const OwnForm = () => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h3>This is a form similar to Formik</h3>
            <FormContainer onSubmit={handleSubmit} initialValues={{username: 'username', email: '', password: ''}}>
                <InputField name={'username'}/>
                <InputField name={'email'}/>
                <InputField name={'password'}/>
            </FormContainer>
        </div>
    );
};

export default OwnForm;



// THe bottom codes can be hidden

const FormContainer = ({children, initialValues,onSubmit}) => {

    const [state, setState] = useState(initialValues);

    const handleInputChange = (e) => {

        setState(pre => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    };

    return (
        <div>
            {
                children.map((child, index) => {
                    return (
                        <Child onChange={handleInputChange} key={index} child={child} value={state[child.props.name]}/>
                    )
                })
            }
            <button onClick={()=> onSubmit(state)}>Submit Form</button>
        </div>
    )
}


const Child = ({child, value, onChange}) => {
    return (
        <>
            <InputField onChange={onChange} {...child.props} value={value}/>
        </>
    )
}

const InputField = ({name, value, onChange}) => {
    return (
        <>
            <input type="text" value={value} onChange={onChange} name={name} placeholder="Enter your name"/>
        </>
    )
}