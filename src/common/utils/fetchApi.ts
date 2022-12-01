export const apiUrl = process.env.REACT_APP_API_URL;
export const pageSize = 10;

export const fetchApi = (url: string) => {
	return fetch(url)
		.then((response) => response.json())
		.then((json) => json);
};
