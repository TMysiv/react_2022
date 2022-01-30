import React from 'react';
import {Route, Routes} from "react-router-dom";

import Menu from "./pages/Menu/Menu";
import CarsPage from "./pages/CarsPage/CarsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";


const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;