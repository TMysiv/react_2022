import React from 'react';
import {Route, Routes} from 'react-router-dom'

import Menu from "./components/Menu/Menu";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<Posts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':albumId/photos'} element={<Photos/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>

        </div>
    )
}

export default App;