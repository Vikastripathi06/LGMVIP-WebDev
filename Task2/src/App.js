import { useState } from 'react';
import Navbar from './components/Navbar';
import "./App.css"

function App() {

  const [data, setdata] = useState([])

  const showuser = () =>{
      
      const data = fetch("https://reqres.in/api/users?page=1")
      .then(response => response.json())
      .then(response => setdata(response.data))

 }


  console.log(data)

  return (
    <>
    <Navbar showuser={showuser}/>
    <div className="container">
    <main class="grid">
            {            
                data.map(userprofile => {
                  return(
                    <article key={userprofile.id}>
                      <img src={userprofile.avatar} alt=""/>
                      <div className="text">
                        <h4>USERID -{userprofile.id}</h4>
                        <h3>{userprofile.first_name} {userprofile.last_name}</h3>
                        <p><strong>Email</strong> : {userprofile.email}</p>
                        <button className="btn btn-danger">More About {userprofile.first_name}</button>
                      </div>
                    </article>
                  )
                })
              }
              </main>
              </div>
    </>
  );
}

export default App;
