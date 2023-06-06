import React from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Dummy() {
    const navigate = useNavigate();

    function handleClick(event) {
  
      navigate('/target-route');
    }
  return (
    <div>
       {/* <>
      <h1>Home page</h1>
      <Link to="/dummy">About</Link>
    </> */}
     <button type="button" onSubmit={handleClick}>Click</button>
    </div>
  )
}
