import {useState} from "react";

const RenderComponent = ({mouse}) => {

    const [position,setPosition] = useState({x:0,y:0});
    const handleMouseMove = (e) => {
        setPosition({
            x:e.clientX,y:e.clientY
        })
    }


    return (
        <div style={{height : '100vh'}} onMouseMove={handleMouseMove}>
            {mouse(position)}
        </div>
    );
};

export default RenderComponent;
