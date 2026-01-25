export function removeFromStorage(key) {
	localStorage.removeItem(key);
}

export function overwriteStorageData(key, data) {
	removeFromStorage(key);
	setToStorage(key, data);
}

export function setToStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
	const storageData = localStorage.getItem(key);
	return JSON.parse(storageData);
}

export function updateStorageDataByFilter(key, operandItemThatBeingFiltered) {
	if (getStorageDataArrayLength(key)) {
		const dataArray = getFromStorage(key);

		const filteredDataArray = dataArray.filter(dataItem => dataItem.id !== Number(operandItemThatBeingFiltered));

		overwriteStorageData(key, filteredDataArray);
	}
}

export function getStorageDataArrayLength(key) {
	const dataArray = getFromStorage(key);
	if (dataArray) {
		return dataArray.length;
	}
}