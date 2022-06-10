$(function (){
    const url = 'https://sample.tada-fla.com/rest-sample/';// WordPressのURL
    const posts = 3;// 取得する記事数

    $.getJSON(url+'wp-json/wp/v2/posts?per_page='+posts)
        .done(function(json) {
        console.log(json);
        const postNum = json.length;
        let html = '';
        for(let i = 0; i < postNum; i++) {
            // 投稿日時を取得
            const date = new Date(json[i].date);

            // HTMLを設定
            html += '<li class="news-item">';
            // 投稿日時
            html += '<div class="news-item__meta"><time datetime="'+ date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '">' +
                date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() +'日</time></div>';
            // 投稿タイトル
            html += '<h3 class="news-item__title">' + json[i].title.rendered + '</h3></li>';
        }
        $('#news-list-jquery').html(html);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        // エラー時の処理
        $('#news-list-jquery').text('データを取得できませんでした。しばらくしてからお試しください。');
    });
});