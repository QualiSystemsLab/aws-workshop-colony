import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home/HomeComponent";
import About from "./Components/About/AboutComponent";
import PromotionsList from "./Components/Promotion/PromotionsPageComponent";
import ManagePromotion from "./Components/Promotion/ManagePromotionComponent";
// import ManageCodesPage from "./Components/PromotionCodes/ManageCodesPageComponent";

const MainRouter  = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/promotions' component={PromotionsList}/>
            {/* <Route path='/promotion/:id/codes' component={ManageCodesPage}/> */}
            <Route path='/promotion/:id' component={ManagePromotion}/>
        </Switch>
    </div>
)

export default MainRouter;