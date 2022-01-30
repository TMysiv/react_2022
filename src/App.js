import React from 'react';
import {Route, Routes} from "react-router-dom";

import Menu from "./pages/Menu/Menu";
import CarsPage from "./pages/CarsPage/CarsPage";


const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Menu/>}>
                    <Route path={'cars'} elemenet={<CarsPage/>}/>
                </Route>
            </Routes>


        </>
    );
};

export default App;