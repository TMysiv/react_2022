import React, {useState} from 'react';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import {carService} from "./services/car.service";
import UpdateForm from "./components/UpdateForm/UpdateForm";

const App = () => {

    const [trigger, setTrigger] = useState([]);
    const [user, setUser] = useState(null);



    const deleteById = (id) => {
        carService.deleteById(id).then(value => setTrigger(value))
    }
    const getDetail = (id) => {
        carService.getById(id).then(value => {
            setUser(value)
        })
    }
    const submit = (car) =>{
        carService.update(2376,car).then(value => {
            setTrigger(value)
        })
    }

    return (
        <div>
            <Form/>
            <hr/>
            <UpdateForm submit={submit}/>
            <Cars deleteById={deleteById} trigger={trigger} getDetail={getDetail} />
            {user && <div>{user.id}{user.model}{user.price}{user.year}</div>}
        </div>
    );
};

export default App;