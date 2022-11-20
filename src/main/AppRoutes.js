import React from "react";
import {Route, BrowserRouter,Switch, Redirect} from 'react-router-dom';

import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import CreatePerson from "../screens/createPerson/CreatePerson";
import UpdatePerson from "../screens/updatePerson/UpdatePerson";
import DeletePerson from "../screens/deletePerson/DeletePerson";
import ViewPersons from "../screens/viewPersons/ViewPersons";
import CreateCar from "../screens/createCar/CreateCar";
import UpdateCar from "../screens/updateCar/UpdateCar";
import DeleteCar from "../screens/deleteCar/DeleteCar";
import {AuthConsumer} from "../main/SectionProvider";


function RestrictedRoute({ component = Component,show, ...props }){

    return(
        <Route exact {...props} render={(ComponentProps) => {
            if(show){
                return(
                    <Component{...componentProps}/>
                )
                   
            }else{
                return( <Redirect to={{pathname :'login' ,state: {from : componentProps.location}}}/>
                )
            }
            

        }} />
    )
}


function AppRoutes() {
    return (
        <BrowserRouter>
        <switch>
        <Route component = { Home } path ="/" exact />
        <Route component = { Login } path="/login" />
        <RestrictedRoute show = {props.isAuthenticated} component = {CreatePerson} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {UpdatePerson} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {DeletePerson} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {ViewPersons} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {CreateCar} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {UpdateCar} path/>
        <RestrictedRoute show = {props.isAuthenticated} component = {DeleteCar} path/>
        </switch>
        </BrowserRouter>
    );
}
export default () => (
    <AuthConsumer>{(context)=> (<AppRoutes isAuthenticated ={context.isAuthenticated}/>)}
    </AuthConsumer>
)
