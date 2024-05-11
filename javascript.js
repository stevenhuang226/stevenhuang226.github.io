function close_list(){
    document.getElementById('list-show').style.visibility='hidden';
}
//youtube
function youtube_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-yt' style='width:90px;' value='YouTube' onclick='open_yt()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-all' style='width:90px;' value='誰在直播？' onclick='open_yt_sub()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-all' style='width:90px;' value='來點音樂？' onclick='yt_list_music()'>";
    document.getElementById('menu-show-3').innerHTML = "<form name='search_yt_input'><div><input type='text' id='list-button-all' name='search_input' value='' placeholder='用YouTube搜尋！' autocomplete='off' style='width:300px ; height:30px ; background-color:rgb(255,255,255)'> <input type='button' value='搜尋' id='list-button-yt' onclick='search_yt()'></div></form>";
    document.getElementById('menu-show-4').innerHTML = "";
    document.getElementById('menu-show-5').innerHTML = "";
}
function yt_list_music(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-yt' style='width:150px;' value='YouTube-Music' onclick='open_ytm()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-all' style='width:210px;' value='【播放清單】一首好聽的日文歌' onclick='open_yt_m_0()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-all' style='width:210px;' value='【播放清單】日文歌' onclick='open_yt_m_1()'>";
    document.getElementById('menu-show-3').innerHTML = "<input type='button' id='list-button-all' style='width:230px;' value='【播放清單】日文歌（stevenhuang）' onclick='open_yt_m_2()'>";
    document.getElementById('menu-show-4').innerHTML = "<input type='button' id='list-button-all' style='width:210px;' value='【播放清單】battle bgm' onclick='open_yt_m_3()'>";
    document.getElementById('menu-show-5').innerHTML = "<input type='button' id='list-button-all' style='width:210px;' value='【播放清單】みんながすきなうた' onclick='open_yt_m_4()'>";
}
function open_yt(){
    window.location.href='https://www.youtube.com';
}
function open_ytm(){
    window.location.href='https://music.youtube.com'
}
function open_yt_sub(){
    window.location.href='https://www.youtube.com/feed/subscriptions';
}
function search_yt(){
    window.location.href=('https://www.youtube.com/results?search_query=' + document.search_yt_input.search_input.value);
}
function open_yt_m_0(){
    window.location.href='https://www.youtube.com/playlist?list=PLc1B6gJoAgwjAqgL6TWxsvOuvtlswXsiO'
}
function open_yt_m_1(){
    window.location.href='https://www.youtube.com/playlist?list=PLZsoTGvbP97Zr85bcC_IM1fyLpqJtmu1q'
}
function open_yt_m_2(){
    window.location.href='https://www.youtube.com/playlist?list=PLzzcp3yDgMsLO862s684agZGS0vQl7_EQ'
}
function open_yt_m_3(){
    window.location.href='https://www.youtube.com/playlist?list=PLzzcp3yDgMsL1LiBBofyX4Wf10Er0AsGA'
}
function open_yt_m_4(){
    window.location.href='https://www.youtube.com/playlist?list=PLPqVb_3u9vSOT7bvScbmvnLx10P-Z8Ai9'
}
//facebook
function facebook_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-fb' style='width:90px;' value='facebook' onclick='open_fb()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-fb' style='width:90px;' value='好友' onclick='open_fb_f()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-fb' style='width:90px;' value='漫遊者聯盟' onclick='open_fb_wanderer()'>";
    document.getElementById('menu-show-3').innerHTML = "";
    document.getElementById('menu-show-4').innerHTML = "";
    document.getElementById('menu-show-5').innerHTML = "";
}
function open_fb(){
    window.location.href='https://www.facebook.com'
}
function open_fb_f(){
    window.location.href='https://www.facebook.com/friends/'
}
function open_fb_wanderer(){
    window.location.href='https://www.facebook.com/groups/714212515757615/'
}
//media
function media_list(){
    document.getElementById('list-show').style.visibility='visible'
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-twitter' style='width:90px;' value='twitter' onclick='open_twitter_home()'>"
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-twit' style='width:90px;' value='TwitCasting' onclick='open_twit_home()'>"
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-all' style='width:90px;' value='facebook' onclick='facebook_list()'>"
    document.getElementById('menu-show-3').innerHTML = "<input type = 'button' id = 'list-button-all' style = 'width:90px;' value = 'google翻譯' onclick='open_c_e_list()'>"
    document.getElementById('menu-show-4').innerHTML = ""
    document.getElementById('menu-show-5').innerHTML = ""
}
function open_twitter_home(){
    window.location.href='https://twitter.com/home'
}
function open_twit_home(){
    window.location.href='https://twitcasting.tv/'
}
function open_c_e_list(){
    window.location.href='https://translate.google.com.tw/?hl=zh-TW&sl=en&tl=zh-TW&op=translate'
}
//steam
function steam_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-steam' style='width:90px;' value='steam-store' onclick='open_steam()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-steam' style='width:90px;' value='steam-好友' onclick='open_steam_f()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-steam' style='width:130px;' value='steam-願望清單' onclick='open_steam_want()'>";
    document.getElementById('menu-show-3').innerHTML = "";
    document.getElementById('menu-show-4').innerHTML = "";
    document.getElementById('menu-show-5').innerHTML = "";
}
function open_steam(){
    window.location.href='https://store.steampowered.com'
}
function open_steam_f(){
    window.location.href='https://steamcommunity.com/id/sweet_potato/friends/'
}
function open_steam_want(){
    window.location.href='https://store.steampowered.com/wishlist/id/sweet_potato/#sort=order'
}
//classroom
function classroom_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-classroom' style='width:150px;' value='classroom-school' onclick='open_cr_s()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-classroom' style='width:150px;' value='classroom-英文班' onclick='open_cr_o1()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-classroom' style='width:150px;' value='classroom-勤益' onclick='open_cr_o2()'>";
    document.getElementById('menu-show-3').innerHTML = "";
    document.getElementById('menu-show-4').innerHTML = "";
    document.getElementById('menu-show-5').innerHTML = "";
}
function open_cr_s(){
    window.open('https://classroom.google.com/u/1/w/MzQyODIwMzM4MTc0/t/all')
    window.location.href='https://classroom.google.com/u/1/c/MzQyODIwMzM4MTc0'
}
function open_cr_o1(){
    window.location.href='https://classroom.google.com/u/0/c/NTA2MjU5OTY3NTE4'
}
function open_cr_o2(){
    window.location.href='https://classroom.google.com/u/0/c/MzY1OTQ5NjE2NTg2'
}
//osu
function osu_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-osu' value='osu!' onclick='open_osu_home()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-osu' style='width:65px;' value='個人資料' onclick='open_osu_profile()'>";
    document.getElementById('menu-show-2').innerHTML = "";
    document.getElementById('menu-show-3').innerHTML = "";
    document.getElementById('menu-show-4').innerHTML = "";
    document.getElementById('menu-show-5').innerHTML = "";
}
function open_osu_home(){
    window.location.href='https://osu.ppy.sh/home'
}
function open_osu_profile(){
    window.location.href='https://osu.ppy.sh/users/20422429'
}
//sweet-potatp
function sp_list(){
    document.getElementById('list-show').style.visibility='visible';
    document.getElementById('menu-show-0').innerHTML = "<input type='button' id='list-button-all' style='width:90px;' value='首頁' onclick='open_sp_home()'>";
    document.getElementById('menu-show-1').innerHTML = "<input type='button' id='list-button-all' style='width:130px;' value='撥放器(Dplayer)' onclick='open_sp_dplayer()'>";
    document.getElementById('menu-show-2').innerHTML = "<input type='button' id='list-button-all' style='width:200px;' value='第三放網頁播放器(m3u8)' onclick='open_3rd_m3u8()'>";
    document.getElementById('menu-show-3').innerHTML = "";
    document.getElementById('menu-show-4').innerHTML = "";
}
function open_sp_home(){
    window.location.href='../../steven/HTML/indexhome.html'
}
function open_sp_dplayer(){
    window.location.href='../../steven/HTML/index.html'
}
function open_3rd_m3u8(){
    window.location.href='https://www.m3u8play.com/zh'
}
//search
function search_g_js(){
    window.location.href='https://www.google.com/search?channel=&q=' + document.search_google.s_g_in.value;
}
function search_486_js(){
    window.location.href='https://www.duckduckgo.com/' + document.search_486.s_486_in.value;
}