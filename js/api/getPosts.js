const urlPosts = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async (limit=10) => {
	const response = await fetch(urlPosts + '?_limit=' + limit);
	const json = await response.json()
	return json;
}