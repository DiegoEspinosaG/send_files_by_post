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

  const obtenerAllArchivos=async()=>{

    await axios.get("http://localhost:4000/getAll")
    .then(response=>{
      console.log(response.data.values);      
    }).catch(error=>{
      console.log(error);
    })

  }

  const obtenerArchivo=async()=>{

    await axios.get("http://localhost:4000/get/aa58e659-25a5-4a28-8b0b-5f1d37c9a37c-fondo.jpg")
    .then(response=>{
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })

  }

  const borrarArchivo=async()=>{

    await axios.delete("http://localhost:4000/delete/aa58e659-25a5-4a28-8b0b-5f1d37c9a37c-fondo.jpg")
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
      <br/><br/>
      <button className='btn btn-success' onClick={()=>obtenerAllArchivos()}>Obtener all Archivos</button>
      <br/><br/>
      <button className='btn btn-success' onClick={()=>obtenerArchivo()}>Obtener Archivo</button>
      <br/><br/>
      <button className='btn btn-danger' onClick={()=>borrarArchivo()}>Borrar Archivo</button>
    </div>
  );
}

export default App;
