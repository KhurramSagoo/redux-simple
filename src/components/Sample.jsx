import { useSelector,useDispatch } from "react-redux"
import { remove } from "../redux/UserSlice";
const Sample = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleDelete = (userId) => {
    dispatch(remove(userId));
  };
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Sample;
