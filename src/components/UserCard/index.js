import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/action";

const UserCard = () => {
  const [newName, setNewName] = useState("");

  const handleName = useSelector((store) => store.user.name);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <p>Username: {handleName}</p>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
