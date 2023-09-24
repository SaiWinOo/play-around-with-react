import TestUseDefer from "./components/TestUseDefer.jsx";
import ForwardRefe from "./components/ForwardRefe.jsx";
import RenderComponent from "./components/RenderComponent.jsx";

const App = () => {

  return (
    <div>
        {/*<Uploader/>*/}
      {/*<CounterReducer/>*/}
      {/*<FormWithFormik/>*/}
        {/*<OwnForm/>*/}
    {/*<PlayHooks/>*/}
    {/*<TestUseDefer/>*/}
    {/*  <ForwardRefe/>*/}
      <RenderComponent   mouse={(position)=> <h1>Mouse move X - {position.x}  Y - {position.y}</h1>}/>
      <RenderComponent   mouse={(position)=> <h1>Mouse move X - {position.x}  Y - {position.y}</h1>}/>
      <RenderComponent   mouse={(position)=> <h1>Mouse move X - {position.x}  Y - {position.y}</h1>}/>
      <RenderComponent   mouse={(position)=> <h1>Mouse move X - {position.x}  Y - {position.y}</h1>}/>
    </div>
  )
}

export default App;