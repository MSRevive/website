import React, { useEffect } from 'react'

function Page(props)
{
	let title = props.title;
	let children = props.children;

	useEffect(() => {
		document.title = "MSRebirth | "+title;
	}, [title]);

	return children;
}

export default Page;