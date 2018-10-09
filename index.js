module.exports = function tiny(str){
	if(typeof str !== "string") throw new TypeError ("Must pass in a string!");
	//removes all space from string
	return str.replace(/\s/g, "");
}