import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './components/Sample';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { remove, update } from './redux/UserSlice'; 
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(update({ name, email })); 
  };
  const handleRemove = (userId) => {
    
    dispatch(remove(userId)); 
  };

  return (
    <>
      <section className=' vh-100  w-100  d-flex  flex-column  align-items-center justify-content-center bg-body-secondary  '>
        <form action="submit" onSubmit={handleSubmit} className=' d-flex flex-column align-items-center justify-content-around h-25'>
          <Form.Control size="md" type="text" onChange={handleName} placeholder={users.name} />
          <Form.Control size="md" type="email" onChange={handleEmail} placeholder={users.email} />
          <Button className=' w-100 bg-dark border-0' onClick={handleSubmit}>Update</Button>
          <Button className=' w-100 bg-dark border-0'  onClick={handleRemove}>Delete</Button>
        </form>
        <section className=' bg-black text-white d-flex text-center h-auto vw-100 align-items-center justify-content-center flex-column my-5'>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <section className=' bg-info d-flex text-center h-auto vw-100 align-items-center justify-content-center flex-column'>
            <p className=' fw-bold my-5'>from redux store: </p>
            <Sample />
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
