var pushObjectInArray = (object, array) => {
	return array.push(object);
}

var objectExistInArray = (object, array) => {
	array.forEach( element => {
		if (element === object) {
			return true;
		}
	});
	return false;
}

var arrayIsFull = (array, limit) => {
	if (array.length >= limit) {
		return true;
	}
	else {
		return false;
	}
}

var predictableError = (justification) => {
	console.log(justification);
}