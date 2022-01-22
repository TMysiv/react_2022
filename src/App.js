import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Cat from "./pages/Cat/Cat";
import Dog from "./pages/Dog/Dog";
import Girl from "./pages/Girl/Girl";
import City from "./pages/City/City";
import Mountain from "./pages/Mountain/Mountain";

const App = () => {

    return (

        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cat'} element={<Cat/>}/>
                    <Route path={'mountain'} element={<Mountain/>}/>
                    <Route path={'dog'} element={<Dog/>}/>
                    <Route path={'girl'} element={<Girl/>}/>
                    <Route path={'city'} element={<City/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;