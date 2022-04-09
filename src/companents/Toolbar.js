import React from "react";


export default function Toolbar(props) {
	return (
		<div className="filters">
			{props.filters.map((f, i) =>
			(<button
				onClick={() => props.onSelectFilter(f)}
				key={i}
				className='filter'>
				{f.name}
			</button>
			))}</div>
	)
}

