import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("-------");
    return navigate("/");
  }
  return (
    <>
      <div className='component'>Contact</div>
      <buttton onClick={handleSubmit}>Back to Home</buttton>
    
    </>
  )
}
