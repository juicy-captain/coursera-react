import React, { Component } from "react";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Menu from "./menuComponent";
import DishDetail from "./dishDetailComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./homeComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }


    render() {
        const HomePage = () => {
            return <Home />;
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                        exact
                        path="/menu"
                        component={() => <Menu dishes={this.state.dishes} />}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
