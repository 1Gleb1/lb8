const header = document.getElementById('header');
const url = window.location.pathname

const router = {
	news: {title: 'Новости', link: '/pages/news.html'},
	about_us: {title: 'Об организации', link: '/pages/about_us.html'},
  price: {title: 'Прайс', link:'/pages/price.html'},
  contacts: {title: 'Контакты', link:'/pages/contacts.html'},
	map: {title: 'Карты', link:'/pages/maps.html'},
}

const generateLinks = (route) => {
	return `<li>
						${url === route.link ? `<p class="text-gray-600 text-gray-900 border-b-2 border-gray-900">${route.title}</p>`: `<a href="${route.link}" class="text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900">${route.title}</a>`}
					</li>`
}

console.log('log');

const allLinks = () => {
	let htmlLink = ''
	for(const route in router) {
		htmlLink += generateLinks(router[route])
	}
	return htmlLink
}

const links = allLinks()

header.innerHTML = `
				<div class="w-[20%] flex justify-center items-center border-2 border-red-300">
					<h1 class="text-2xl font-bold">My Website</h1>
				</div>
				<nav class="w-[80%] flex justify-center items-center border-2 border-red-300">
					<ul class="flex gap-12">
						${links}
					</ul>
				</nav>`