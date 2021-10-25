import React,{} from 'react'

const Navbar = ({showuser}) => {

    

    

    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active h3" aria-current="page" href="/"><strong> Task 2 - Users Profile</strong></a>
        </li>
        
      </ul>
      <div class="d-flex">
        <button class="btn btn-info me-5" onClick={showuser}>Get Users</button>
      </div>
    </div>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar
