import React from "react";
import './banner.scss';

export default function Banner ({ text, picture }) {
	return (
		<div className="banner">
			<img className="banner_img" src={picture} alt="banner" />
			<h1 className="banner_title">{text}</h1>
		</div>
	);
}