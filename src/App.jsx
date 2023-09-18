import axios from "axios";
import React, { useState } from 'react'
import Counter from "./components/Counter.jsx";

const App = () => {

  const [image, setImage] = useState();

  const upload = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'shownote');
    let res = await axios.post('https://api.cloudinary.com/v1_1/saiwinoo/image/upload', data)

    console.log(res.data.secure_url);
  }

  return (
    <div>
      {/*<input type="file" onChange={e => setImage(e.target.files[0])} />*/}
      {/*<button onClick={upload}>Upload</button>*/}
      <Counter/>
    </div>
  )
}

export default App;