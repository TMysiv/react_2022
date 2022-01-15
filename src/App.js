import "./App.css"

import {useEffect, useState} from "react";

import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {getUsers} from "./services/user.service";

const App = () => {

    let [users, setUsers] = useState([]);
    let [filterUsers, setFilterUsers] = useState([]);


    useEffect(() => {
        getUsers().then(value => {
            setUsers(value)
            setFilterUsers(value)
        })
    }, [])

    const getFilter = (data) => {

        let filterArray = [...users]

        if (data.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilterUsers(filterArray)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filterUsers}/>
        </div>
    );
};

export default App;