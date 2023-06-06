import React from 'react'

const Dropdown = () => {
  return (
    <div className='dropdown' >
      <label className='lab'>Enter State Name</label>
      <div className="btn-group">
        <button type="button2" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Karnataka
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-divider"></a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>

      <label className='lab' >Enter Region</label>
      <div className="btn-group">
        <button type="button2" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
APAC
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-divider"></a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>

      <label className='lab' >Enter Country Name</label>
      <div className="btn-group">
        <button type="button2" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
India
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-divider"></a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>

      <label className='lab'>Enter Pharmacy ID</label>
      <div className="btn-group">
        <button type="button2" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
462026
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><a className="dropdown-divider"></a></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
