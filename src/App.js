import React from "react";

import Form from "./components/Form/Form";
import Affairs from "./components/Affairs/Affairs";
import Checkbox from "./components/Checkbox/Checkbox";
import css from "./App.css"

const App = () => {

    return (
        <div className={'wrap'}>
            <Checkbox/>
            <Form/>
            <Affairs/>
        </div>
    );
};

export default App;