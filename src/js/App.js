import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navbar.js";
import Home from "./component/home.js";
import Cart from "./component/cart.js";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
