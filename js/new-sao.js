window.onload = function() {
	var arr = ["集天地终极蛇怪铁蛋火车侠威猛先生无敌风火轮，<br>臭嗨香蕉船皮皮怪喜马拉雅雪乌鸦绿水煮青蛙之精华。","小蛇来一波","苏小凯，你给我顺着网线爬到喷子家把他煎了","空大都臭屁做成集锦，你说这个人是不是打了假赛","沈灵敏给我榨杯西瓜汁","妈裂批哟","这是最油的","我是娇媚/娇妹/焦镁","小轩在不在","玩儿**的婚纱照","我呸死**也","蹦蹦鱼","这把不用再看视频了，看我操作就行了","这波我亏成皮皮","不打的你喷水","满脸是血，已经送往医院","天地山青","我打**个棒棒锤","这波被打成猪皮","谁敢在**面前这样讲，老子三拳把**捶飞","这个小骚猪瞬间给我打成皮皮","三拳打成猪皮","玩具车，遥控车","你拿我的象拔蚌去走位，走位走**的蛇皮位","我***的德芙巧克力","我***的香蕉船","芽儿呦","唉，兄弟，我这个英雄为什么没有 Q","日你妈的仙女呦","这是在玩儿蛇","推拿手太极剑法","我***的折耳根香油","香蕉牛奶"];

	var index = Math.floor((Math.random() * arr.length));
	document.getElementById("saohua").innerHTML = arr[index];

}