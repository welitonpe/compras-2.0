import React, { useState } from "react";

type UseLocalStorage<T> = [T, (value: T) => void];

const useLocalStorage = <T = string>(
	key: string,
	initialValue?: T,
): UseLocalStorage<T> => {
	const [storedValue, setStoredValue] = useState(() => {
		let storageValue;

		try {
			storageValue = window.localStorage.getItem(key);

			return storageValue ? JSON.parse(storageValue) : initialValue;
		} catch (error) {
			console.error(error);

			return storageValue || initialValue;
		}
	});

	const setStorageValue = (value: T) => {
		try {
			setStoredValue(value);

			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setStorageValue];
};

export default useLocalStorage;
