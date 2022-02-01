import React from "react";

import Form from "./components/Form/Form";
import Affairs from "./components/Affairs/Affairs";
import css from "./App.css"
import Checkbox from "./components/Checkbox/Checkbox";

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