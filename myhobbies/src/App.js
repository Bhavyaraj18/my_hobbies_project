import './App.css';
import Navbar from './pages/navbar';
import Body from './pages/Body';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  let hobbies = [
    {
      id: 1,
      hobby: 'Chess',
      fav: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg'
    },
    {
      id: 2,
      hobby: 'Reading',
      fav: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/SanDiegoCityCollegeLearningResource_-_bookshelf.jpg/250px-SanDiegoCityCollegeLearningResource_-_bookshelf.jpg'
    },
    {
      id: 3,
      hobby: 'Travelling',
      fav: false,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bantry_House.jpg/120px-Bantry_House.jpg'
    }
  ];

  const [lnk, setLink] = useState('Home');
  const [myHobbies, setHobbies] = useState(hobbies);

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);


  const handleLogin = () => {
    setToken(localStorage.getItem("token"));
  };

  const updateLink = (data) => {
    setLink(data);
  };

  const addHobby = (data) => {
    setHobbies([...myHobbies, data]);
  };

  const delHobby = (id) => {
    let updated = myHobbies.filter(item => item.id !== id);
    setHobbies(updated);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="App">

      {token ? (
        <>
          <button onClick={logoutUser}>
            Logout
          </button>

          <Navbar ulink={updateLink} />

          <Body
            lnk={lnk}
            addHobby={addHobby}
            hobbies={myHobbies}
            delHobby={delHobby}
          />

          <Outlet />
        </>
      ) : (
        <>
          {showRegister ? (
            <>
              <Register />
              <button onClick={() => setShowRegister(false)}>
                Go to Login
              </button>
            </>
          ) : (
            <>
              
              <Login onLogin={handleLogin} />

              <button onClick={() => setShowRegister(true)}>
                Go to Register
              </button>
            </>
          )}
        </>
      )}

    </div>
  );
}

export default App;