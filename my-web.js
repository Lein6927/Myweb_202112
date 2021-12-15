$(#portfolio - imgs).lightSlider({
    slideWidth: 320, // 物件寬度
    speed: 400, // 切換速度
    pause: 2000, // 當等待時間超過此時，則自動切換
    auto: true, // 自動切換
    item: 3, // 顯示數量
    responsive: [
        // 多螢幕設定[註2]
        {
            breakpoint: 960, // 當螢幕大於此寬度時，則啟用此設定值
            settings: {
                item: 2, // 顯示數量
                slideMove: 1 // 一次切換數量
            }
        }, {
            breakpoint: 640, // 當螢幕大於此寬度時，則啟用此設定值
            settings: {
                item: 1, // 顯示張數
                slideMove: 1 // 一次切換數量
            }
        }
    ]
});