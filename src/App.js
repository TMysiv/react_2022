import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Episodes from "./pages/Episodes/Episodes";
import DetailsEpisode from "./pages/DetailsEpisode/DetailsEpisode";

const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<Episodes/>}/>
                    <Route path={'episode=:id'} element={<DetailsEpisode/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;