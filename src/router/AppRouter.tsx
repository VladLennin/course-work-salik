import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage";
import TestsPage from "../page/TestsPage/TestsPage";
import TestEditPage from "../page/TestEditPage/TestEditPage";
import TestsCardsPage from "../page/TestsCardsPage/TestsCardsPage";
import TestDetailedPage from "../page/TestDetailedPage/TestDetailedPage";
import ResultsPage from "../page/ResultsPage/ResultsPage";
import CreateTestPage from "../page/CreateTestPage/CreateTestPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.TESTS} element={<TestsPage/>}/>
            <Route path={RouterNames.TESTS + "/:id"} element={<TestDetailedPage/>}/>
            <Route path={RouterNames.TEST_EDIT + "/:id"} element={<TestEditPage/>}/>
            <Route path={RouterNames.TESTS_DO} element={<TestsCardsPage/>}/>
            <Route path={RouterNames.RESULTS} element={<ResultsPage/>}/>
            <Route path={RouterNames.TEST_CREATE} element={<CreateTestPage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;