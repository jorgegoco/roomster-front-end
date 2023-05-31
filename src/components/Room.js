import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchRoom from '../redux/room/fetchRoom';
import fetchUser from '../redux/user/fetchUser';

import Navigate from './Navigation';

const getCurrentTimeOfDay = () => {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    return 'morning';
  }
  if (hours >= 12 && hours < 17) {
    return 'afternoon';
  }
  return 'evening';
};

const getGreeting = (name, timeOfDay) => {
  if (timeOfDay === 'morning') {
    return `Good morning, ${name}!`;
  }
  if (timeOfDay === 'afternoon') {
    return `Good afternoon, ${name}!`;
  }
  return `Good evening, ${name}!`;
};

const Room = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchRoom());
  }, [dispatch]);
  const roomData = useSelector((state) => state.room.data);
  const userData = useSelector((state) => state.user.data);
  const currentTimeOfDay = getCurrentTimeOfDay();
  const greeting = userData ? getGreeting(userData.name, currentTimeOfDay) : '';

  return (
    <div className="container">
      <Navigate />
      <div className="home">
        {greeting && <p className="greeting">{greeting}</p>}
        <div className="header-div">
          <h1>Rooms</h1>
          <p>Please Select a room below</p>
        </div>
        <div className="rooms row" style={{ marginTop: '40px' }}>
          {roomData.map((room) => (
            <div key={room.id} className="room-page col-md-4 col-lg-3 col-sm-6 text-center align-center">

              <div className="card">
                <Link to={`/rooms/${room.id}`}>
                  <img className="card-img-top" src={room.photo} alt="Room Pic" />
                  <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                    <p className="card-text">{room.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
export default Room;
