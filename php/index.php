<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js"></script> 
</head>

<body>
    <div id="blog_result" style="width:1000px; margin-top:40px; text-align:center">
        <!-- <input type=text name="txt_search" id="txt_search" value="" style="width:180px; height:24px; vertical-align:top" placeholder="검색어를">
        <button onclick=" javascript:goSearch();">검색</button> -->
    </div>
    <!-- <div style="margin-left:50px; margin-top:15px; color: blue; font-weight:bold">
        블로그
    </div>
    <div id="blog_result" style="margin-left:50px;width: 1000px; min-height:200px; margin-top:10px; margin-left:50px; padding:6px; padding-right:75px; border: 1px solid #bbbbbb">
    </div>
</body> -->

</html>
<script>
    // function goSearch()
    // {
    // var SEARVALUE = $("#txt_search").val();
    // if (!SEARVALUE) 
    // {
    //     alert("먼저 검색어를 입력해주십시오");
    //     return false;
    // }
    // if (SEARVALUE)
    // {
        $(document).ready(function() {
            
        
        $.ajax({
            type: 'POST',
            // dataType: 'json',
            url: "/php/search.php",
            data: { 'SEARVALUE': '주식'},
            cache: false,
            async: false,
        })
        .done(function(result) {
            alert(result);
        });
    });
    //     .done(function(result) {
    //         var blog_html = "";
    //         for (var i = 0; i < (result.items.length > 5 ? 5 : result.items.length); i++) {
    //             //result.items[i].title 블로그 글의 제목
    //             //result.items[i].link
    //             //result.items il.description 해당 블로그 글의 내용(설명)
    //             //result.items il postdate 해당 블로그 글의 날짜
    //             var row_html = "";
    //             row_html += "<div style='width:100%;text-align:left;padding-left:50px; font-weight:bold'> <a href='" + result.items[i].link + "'target='_new' style='color: black; text-decoration: none'>" + (i + 1) + ". " + result.items[i].title + " (" + result.items[i].postdate + ")</a></div>";
    //             row_html += "<div style='width:100%;text-align:left;padding-left:70px; color:#888888; padding-top:4px'>" + result.items[i].description + "</div>";
    //             row_html += "<div style='width:100%; height:30px'> </div>";
    //             blog_html += row_html;
    //         }
    //         if (blog_html) {
    //             $("#blog_result").html(blog_html);
    //         }
    //     });

    // $(document).ready(function() {

    // });
</script>