import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {  

  const [archivos, setArchivos] = useState(null);

  const subirArchivos=e=>{
    setArchivos(e);
  }

  const insertarArchivos=async()=>{
    const f = new FormData();

    for (let index = 0; index < archivos.length; index++) {
      f.append("file", archivos[index]);
      
    }

    await axios.post("http://localhost:4000/upload", f)
    .then(response=>{
      console.log(response.data);      
    }).catch(error=>{
      console.log(error);
    })

  }

  return (
    <div className="App">
      <br/><br/>
      <input type="file" name='files' multiple onChange={(e)=>subirArchivos(e.target.files)}/>
      <br/><br/>
      <button className='btn btn-primary' onClick={()=>insertarArchivos()}>Insertar Archivos</button>
    </div>
  );
}

export default App;
