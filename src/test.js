import React,{useState} from 'react'

export default function Test() {


    const [loggedin,setLoggedIn] = useState(true)

    return (
        <div>
            <h1>Hi</h1>
            {
                loggedin ? <h1> Wlocome user </h1> :  <h3>Please login</h3>
            }

            <button onClick={() => setLoggedIn(!loggedin)}>Greetings</button>
        </div>
        
    )
}