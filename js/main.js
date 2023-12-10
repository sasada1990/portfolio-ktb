// カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
  arrows: false, // 左右のナビゲーションを無効
  fade: true, // フェードで切り替え
});

// フェードイン
$('.animate__animated').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      $(this.element)
        .addClass('animate__fadeIn');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// Google Mapの設定
function initMap() {
  // マップの作成
  var latlng = new google.maps.LatLng(35.682150, 139.765960); /* 座標 */
  var myOptions = {
    zoom: 16, /* 拡大比率 */
    center: latlng, /* 表示するマップの中心座標 */
    scrollwheel: false, /* マウスのホイールでマップを拡大縮小させるかどうか */
    disableDoubleClickZoom: true, /* ダブルクリックでのマップの拡大縮小を禁止するかどうか */
    draggable: false, /* マーカーをドラッグで移動可能にするかどうか */
    mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] } /* 地図の種類（通常のマップ） */
  };

  // マップの表示
  var map = new google.maps.Map(document.getElementById('google-maps'), myOptions);

  // マーカーの作成
  var markerOptions = {
    position: latlng, /* マーカーの座標 */
    map: map, /* どのマップにマーカーを表示させるか */
    title: 'Kirameki Gakko',  /* タイトル */
    animation: google.maps.Animation.DROP /* 表示させる際のアニメーション（DROP：上から落ちてくる） */
  };

  // マーカーの表示
  var marker = new google.maps.Marker(markerOptions);
}

// アコーディオンのタイトルがクリックされたら


$(function () {
  $('.accordion-box-top').click(function () {
    $(this).next('div').slideToggle();
    $(this).find(".icon").toggleClass('open');
  });
});

// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});