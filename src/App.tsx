import React from 'react';
import Header from "./component/Wrapper/Header/Header";
import AppRouter from "./router/AppRouter";
import Footer from "./component/Wrapper/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <div className={"appContainer"}>
                <AppRouter/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
