import React, {Fragment} from "react";
import {Route} from "react-router-dom";

import HomePage from "../pages/HomePage";
import UnlimitedHosting from "../pages/UnlimitedHosting";
import CloudHosting from "../pages/CloudHosting";
import CloudVps from "../pages/CloudVps";
import Domain from "../pages/Domain";
import Afiliasi from "../pages/Afiliasi";
import Blog from "../pages/Blog";
import Login from "../pages/Login";

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/unlimited-hosting" exact component={UnlimitedHosting} />
            <Route path="/cloud-hosting" exact component={CloudHosting}/>
            <Route path="/cloud-vps" exact component={CloudVps}/>
            <Route path="domain" exact component={Domain}/>
            <Route path="/afiliasi" exact component={Afiliasi}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/login" exact component={Login}/>
        </Fragment>
    );
}

export default Routes;