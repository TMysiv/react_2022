import React, {FC} from 'react';

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

const App: FC = () => {

    return (
        <div>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;