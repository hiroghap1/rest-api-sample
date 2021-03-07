const url = 'https://sample.tada-fla.com/rest-sample/';// WordPressのURL
const posts = 3;// 取得する記事数

fetch(url+'wp-json/wp/v2/posts?_embed&per_page='+posts)
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(item =>{
            const date = new Date(item.date);
            html += '<li class="news-item"><div class="news-item__meta"><time datetime="'+
                date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '">' +
                date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() +'日' +
                '</time></div><h3 class="news-item__title">' + item.title.rendered + '</h3></li>';
        });
        document.getElementById('news-list-js').innerHTML = html;
    }).catch(error => {
        document.getElementById('news-list-js').innerHTML = 'データを取得できませんでした。しばらくしてからお試しください。';
});