
fetch('./data.json')
	.then(result => result.json())
	.then(function(res) {
		const title = res[0].title;
        document.getElementById('lat').textContent = title;
	})

