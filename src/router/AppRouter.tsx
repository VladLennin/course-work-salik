import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;