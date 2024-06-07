import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { transferTo } from "../states";
import { useSetRecoilState } from "recoil";

export default function UserCard({index, fullName, id, username}){

    const [newusername, setnewUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const authtoke = localStorage.getItem("myToken")
  
    const handleChange = (event) => {
      setnewUsername(event.target.value);
      setErrorMessage(null); // Clear any previous error message
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Replace this with your logic to update username on the backend (e.g., API call)
        const response = await fetch('http://localhost:3000/api/v1/user/update', {
          method: 'PUT',

          body: JSON.stringify({ newusername }),
   
        });
    
        if (!response.ok) {
          const error = await response.text();
          setErrorMessage(error);
          return;
        }
    
        // Username updated successfully (handle success message or logic)
        
        console.log('Username updated successfully!');
      };



    return(
        <div className="flex justify-between w-11/12 m-auto mt-5">
            <span className="flex items-center">
                <p className="bg-gray-200 rounded-full w-8 p-2 text-center text-sm">{username[0]}</p>
                <p className="text-bold text-md ml-4">{newusername ?newusername:username}</p>
            </span>
            <form onSubmit={handleSubmit}>
      <label htmlFor="username">New Username:</label>
      <input
        type="text"
        id="username"
        value={newusername}
        onChange={handleChange}
      />
      <button type="submit">Update Username</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>


        </div>
    )
}