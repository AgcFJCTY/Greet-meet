import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Zego_Cloud = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate()

  const joinRoom = useCallback(
    () => {
    navigate(`/room/${value}`)
    },
    [navigate,value],
  )
  
  return (
    <>
      <input
        type="text"
        placeholder="Enter room id"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={joinRoom}>JOIN</button>
    </>
  );
};

export default Zego_Cloud;
