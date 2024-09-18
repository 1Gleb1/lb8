import { fetchPosts } from '../api/getPosts.js'

const newsPage = document.getElementById('newsPage');

const writePostsInHtml = (title, body) => {
	
	const content =  `
        <div class="border-2 border-gray-300 rounded-lg px-12">
          <img class="" src="https://via.placeholder.com/300x200" alt="Image">
          <div class="px-2 py-4">
            <h2 class="text-sm font-bold">${title}</h2>
            <p class="text-sm text-gray-600 mt-2">${body}</p>
            <div class="flex gap-2 items-center">
              <button class="text-sm text-gray-600 hover:text-gray-900">Read More</button>
              <button class="text-sm text-gray-600 hover:text-gray-900">Share</button>
          </div>
        </div>`
		newsPage.innerHTML += content

}

fetchPosts().then(posts => posts.forEach(post => writePostsInHtml(post.title, post.body)))
