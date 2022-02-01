import React from "react";

import Form from "./components/Form/Form";
import Affairs from "./components/Affairs/Affairs";
import css from "./App.css"

const App = () => {

    return (
        <div className={'wrap'}>
            <Form/>
            <Affairs/>
        </div>
    );
};

export default App;