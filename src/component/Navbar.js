import React from 'react'


export const Navbar = () => {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-4" href="#">Ozalisat</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
            <li><a className="nav-link " href="#">Informatique</a></li>
            <li><a className="nav-link " href="#">Tv</a></li>
            <li><a className="nav-link " href="#">Récepteur & Abonnement </a></li>
            <li><a className="nav-link " href="#">Téléphonie & Tablette </a></li>

        <li className="nav-item">
          <a className="nav-link disabled" href="#"> NOUS CONTACTER</a>
        </li>

        <li className="nav-item">
          <a className="nav-link disabled" href="#"> BESOIN D'AIDE ?</a>
        </li>
        
      </ul>
      <div classNameName="buttons">
      <a href='' classNameName='btn btn-outline-dark'>
      <i classNameName="fa fa-solid fa-user"></i> Login</a>
      <a href='' classNameName='btn btn-outline-dark ms-2'>
      <i classNameName='fa fa-user-plus me-1'></i> Register
      </a>
      <a href='' classNameName='btn btn-outline-dark ms-2'>
      <i classNameName='fa fa-shopping-cart me-1'></i> Card
      </a>
      </div>
    </div>
  </div>
</nav>
    
    </div>
  )
}
