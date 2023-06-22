import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css";

function App() {
    const navigate = useNavigate()
    const Home = () => {
      navigate("/")
    }
    return (
      <div className="Home">
      
      </div>
      );
    } 


export default App


