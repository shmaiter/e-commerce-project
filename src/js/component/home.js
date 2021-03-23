import React from "react";
import ProductList from "./productList.js";

const Home = () => {
	return (
		<div className="home">
			<h1>This is the gallery of products</h1>
            <ProductList />
		</div>
	);
};

export default Home;
