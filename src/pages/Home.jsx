import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useNavigate, Link} from "react-router-dom"


const Home = () => {
    const [userList, setUserList] = useState([])
    const navigate =useNavigate()
    
    
    async function fetchPost() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUserList(data)
    }

    useEffect(() => {
            fetchPost()
        }, []);



    return (
        <div className="container">
        <div className="row">
          <div className="user-list">

              
            {
                userList.map(elem => 
                    (
                        <div className="user" key={elem.id} onClick={() => navigate(`${elem.id}`)}>
                        <div className="user-card">
                          <div className="user-card__container">
                            <h3>{elem.name}</h3>
                            <p>
                              <b>Email:</b> {elem.email}
                            </p>
                            <p>
                              <b>Phone:</b> {elem.phone}
                            </p>
                            <p>
                              <b>Website:</b>
                              {elem.website}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                    )
                }

          </div>
        </div>
      </div>
    );
}

export default Home;
