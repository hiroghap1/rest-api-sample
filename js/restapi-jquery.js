$(function (){
    const url = 'https://sample.tada-fla.com/rest-sample/';// WordPressのURL
    const posts = 3;// 取得する記事数

    $.getJSON(url+'wp-json/wp/v2/posts?_embed&per_page='+posts, function(json) {
        console.log(json);
        const postNum = json.length;
        let html = '';
        for(let i = 0; i < postNum; i++) {
            const date = new Date(json[i].date);
            html += '<li class="news-item"><div class="news-item__meta"><time datetime="'+
                date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '">' +
                date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() +'日' +
                '</time></div><h3 class="news-item__title">' + json[i].title.rendered + '</h3></li>';
        }
        $('#news-list-jquery').html(html);
    });
});