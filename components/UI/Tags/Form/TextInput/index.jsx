import React from "react";

const TextInput = ({ type = "text", value = "" }) => {
	return <input type={type} value={value} />;
};

export default TextInput;
