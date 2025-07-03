import React from "react";
import "./HelloWorld.css";;

export function HeaderHelloWorld(){
	const text = "Hello World";
	return (
		<h1 className="title">{text.toUpperCase()}</h1>
	);
}

export function ParagraphHelloWorld(){
	const text = "Selamat mempelajari React Javascript!";
	return (
		<p className="content">{text.toLowerCase()}</p>
	)
}