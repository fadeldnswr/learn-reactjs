import React from "react";

export default function Row({id, text}){
	return (
		<tr>
			<td>{id}</td>
			<td>{text}</td>
		</tr>
	)
}