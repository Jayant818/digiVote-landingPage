"use client";
import { useState } from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-6 py-2 bg-blue-400">
			<h3 className="font-extrabold text-white uppercase">DigiVote</h3>
			<div className="flex gap-4">
				<button className="px-4 py-2 bg-white text-black">Register</button>
				<button className="px-4 py-2 bg-white text-black">Login</button>
			</div>
		</nav>
	);
};

export default Navbar;
