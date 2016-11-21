#sql字符编码
SET NAMES UTF8;
/**SQL语句不区分大小写！习惯上： SQL关键字都大写，非关键字都小写**/
#删除指定的数据库(如果存在的话 if  exists )——DDL
DROP DATABASE IF EXISTS test;
#创建
CREATE DATABASE test CHARSET=UTF8;
#使用
USE test;
#创建一个保存学生信息的表——DDL
CREATE  TABLE  student(  
	sno   INT , 
	sname   VARCHAR(4) ,  
	score   FLOAT(4,  1) ,    
	birthday   DATE
) ;

#向学生表中添加记录行——DML
INSERT   INTO  student(sno,   sname,  score,  birthday)
			  VALUES(1001, 'Tom',  650.5,  '2001-5-5' ) ;
INSERT   INTO  student(sno,   sname,  score,  birthday)
			  VALUES(1002, 'King',   590,   '2001-5-6' ) ;
INSERT   INTO  student(sno,   sname,  score,  birthday)
			  VALUES(1003, 'Lily',     600,   '2001-5-7' ) ;
INSERT   INTO  student(sno,   sname,  score,  birthday)
			  VALUES(2001, '豆豆',     560,   '2001-5-9' ) ;
INSERT   INTO  student(sno,   sname,  score,  birthday)
			  VALUES(2002, '欧阳豆豆',     660,   '2001-5-10' ) ;
/*字符串和日期必须使用单引号括起来！  数据宽度不能超越限制*/

#修改1001号学生的信息——DML
UPDATE   student   
SET  sname='Tony', score=777, birthday='1991-1-1'   
WHERE   sno=1001 ;

#删除2002号学生的信息——DML
DELETE   FROM    student    WHERE   sno=2002  ;
DELETE   FROM    student    WHERE   sno=1001  ;
DELETE   FROM    student    WHERE   sno=1002  ;


#查询出学生表中所有的记录行——DQL
SELECT    sno,sname,score,birthday   FROM   student ;
#查询出1002号学生的信息——DQL
SELECT   sno,sname,score,birthday   FROM  student   
WHERE   sno=1002;

#京东产品详情
CREATE TABLE IF NOT EXISTS `jd_products` (
  `product_id` int(11) PRIMARY KEY  AUTO_INCREMENT,
  `product_name` varchar(100) ,
  `product_url` varchar(100) ,
  `product_img` varchar(100) 
) ;

INSERT INTO `jd_products` (`product_id`, `product_name`, `product_url`, `product_img`) VALUES
(1, '【限量秒杀】男士时尚韩版腰带加宽针扣潮商务皮带azkz A款针扣咖啡色', 'http://item.jd.com/1540292153.html', 'img/prod1.jpg'),
(2, 'BROWNE FOX通用皮带打孔器打孔针打孔冲子皮带冲子ZD-111 银色', 'http://item.jd.com/1604745360.html', 'img/prod2.jpg'),
(3, '阿迪达斯（adidas）男士健发强根去屑洗发露 220ml', 'http://item.jd.com/1070276.html', 'img/prod3.jpg'),
(4, '金士顿（Kingston） DT 101G2 8GB U盘 红色 经典之作', 'http://item.jd.com/1070276.html', 'img/prod4.jpg'),
(5, '苹果(Apple) iPhone 5s (A1518) 16GB 金色 移动4G手机', 'http://item.jd.com/1023433.html', 'img/prod5.jpg');


CREATE TABLE IF NOT EXISTS `jd_orders` (
  `order_id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `order_num` varchar(10),
  `shop_name` varchar(40),
  `shop_url` varchar(100),
  `user_name` varchar(40),
  `price` decimal(16,2),
  `payment_mode` varchar(10),
  `submit_time` varchar(20),
  `order_state` int(1)
);

INSERT INTO `jd_orders` (`order_id`, `order_num`, `shop_name`, `shop_url`, `user_name`, `price`, `payment_mode`, `submit_time`, `order_state`) VALUES
(1, '9545709796', 'BROWNE FOX旗舰店', 'http://mall.jd.com/index-119003.html', '强东', '39.90', '在线支付', '2015-5-30T13:40:20', 2),
(2, '9195223439', '京东直营', '', '强东', '56.80', '货到付款', '2015-5-10T15:20:20', 3),
(3, '9545656843', '京东直营', '', '强东', '77.90', '在线支付', '2015-05-05T9:14:20', 1),
(4, '9130907509', '京东直营', '', '强东', '367.50', '在线支付', '2015-04-23T10:24:25', 3),
(5, '9130908111', 'BROWNE FOX旗舰店', '', '强东', '367.50', '在线支付', '2015-05-16T10:24:10', 4),
(6, '9130909101', '京东直营', '', '强东', '79.50', '货到付款', '2015-06-20T18:21:16', 3),
(7, '9130912322', '京东直营', '', '强东', '123.00', '在线支付', '2015-07-15T9:22:20', 2),
(8, '9130923433', 'BROWNE FOX旗舰店', '', '强东', '367.50', '在线支付', '2015-07-15T22:15:33', 3),
(9, '9130945443', '京东直营', '', '强东', '78.30', '货到付款', '2015-07-22T10:15:16', 2),
(10, '9130454323', '京东直营', '', '强东', '122.00', '货到付款', '2015-07-23T9:22:53', 3),
(11, '9130744544', '京东直营', '', '强东', '423.50', '在线支付', '2015-08-15T9:14:19', 1),
(12, '9130784452', 'BROWNE FOX旗舰店', '', '强东', '38.40', '货到付款', '2015-08-23T19:22:16', 3),
(13, '9140123442', 'BROWNE FOX旗舰店', '', '强东', '118.40', '货到付款', '2015-08-25T11:25:19', 2),
(14, '9141342100', '京东直营', '', '强东', '181.40', '货到付款', '2015-08-26T17:22:38', 3),
(15, '9142342347', 'BROWNE FOX旗舰店', '', '强东', '288.30', '货到付款', '2015-08-29T11:36:26', 4),
(16, '9234945344', '京东直营', '', '强东', '58.00', '在线支付', '2015-08-29T19:19:17', 4),
(17, '9234444554', '京东直营', '', '强东', '211.50', '在线支付', '2015-08-30T20:18:38', 3),
(18, '9298845345', '京东直营', '', '强东', '311.00', '货到付款', '2015-09-13T11:29:18', 3),
(19, '9312121922', 'BROWNE FOX旗舰店', '', '强东', '199.40', '货到付款', '2015-09-17T23:35:10', 3),
(20, '9398871134', '京东直营', '', '强东', '210.50', '在线支付', '2015-09-18T10:11:19', 4),
(21, '9499343157', '京东直营', '', '强东', '199.90', '在线支付', '2015-09-19T22:19:24', 2),
(22, '9598333413', 'BROWNE FOX旗舰店', '', '强东', '21.50', '货到付款', '2015-09-20T10:20:10', 3);


CREATE TABLE IF NOT EXISTS `jd_order_product_detail` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `order_id` int(11),
  `product_id` int(11)
);


INSERT INTO `jd_order_product_detail` (`id`, `order_id`, `product_id`) VALUES
(NULL, 1, 1),
(NULL, 1, 2),
(NULL, 2, 3),
(NULL, 3, 4),
(NULL, 4, 2),
(NULL, 4, 3),
(NULL, 4, 5),
(NULL, 5, 1),
(NULL, 6, 2),
(NULL, 6, 4),
(NULL, 7, 3),
(NULL, 8, 4),
(NULL, 8, 5),
(NULL, 9, 2),
(NULL, 10, 1),
(NULL, 11, 2),
(NULL, 11, 5),
(NULL, 12, 4),
(NULL, 13, 2),
(NULL, 14, 1),
(NULL, 14, 3),
(NULL, 15, 5),
(NULL, 16, 1),
(NULL, 17, 2),
(NULL, 17, 3),
(NULL, 18, 3),
(NULL, 19, 1),
(NULL, 20, 2),
(NULL, 21, 3),
(NULL, 22, 4),
(NULL, 22, 5);


/**用户的抽奖记录表**/
CREATE  TABLE  jd_lottery(
	id  INT  PRIMARY KEY  AUTO_INCREMENT,
	user_name VARCHAR(40),
	lottery_time  VARCHAR(20),
	level  VARCHAR(16)
);
INSERT INTO  jd_lottery VALUES
(1, '强东', '2015-10-08 10:22:55',  '三等奖') ,
(2, '强东', '2015-10-08 11:22:55',  '二等奖') ,
(3, '强东', '2015-10-08 12:22:55',  '特等奖') ;

/**计算用户剩余的抽奖次数涉及到的SQL语句**/
SELECT  SUM(price)  FROM   jd_orders   WHERE  user_name='强东';
SELECT  COUNT(id)  FROM   jd_lottery  WHERE  user_name='强东';


/**卡饭啦数据**/
CREATE TABLE kf_dish(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    price FLOAT(6,2),
    img_sm VARCHAR(64),
    img_lg VARCHAR(64),
    detail VARCHAR(2048),
    material VARCHAR(2048)
);
INSERT INTO kf_dish(did,img_sm,img_lg,name,price,material,detail) VALUES
(   null,
    'p0281.jpg',
    'p0281-l.jpg',
    '【酸甜开胃虾】',
    36,
    '明虾、番茄酱、白糖、白醋、葱、姜、淀粉',
    '话说有两个地方是我挪不动脚的，一个是图书馆，另外一个便是菜市场！ 每周有七天，留给自己的时间却很少。既要带儿子去上早教课，又要陪女儿上兴趣班，还要留一个半天带孩子们泡图书馆！ 有时真的觉得妈妈是这个世界上最伟大的职业，累，并快乐着！ 这个时节正是各类果蔬大量上市的时候，拖着买菜专用的小拉车，徜徉在人声鼎沸的菜市场，从海鲜区、肉类区再慢慢逛到我最喜爱的果蔬区，感受季节的变换带给人们餐桌上的喜悦………… '
),
(   null,
    'p2679.jpg',
    'p2679-l.jpg',
    '【桂香紫薯山药卷】',
    16.5,
    '切片吐司、紫薯、铁棍山药、糖桂花、炼乳',
    '今天用紫薯，山药和吐司来做一款漂亮又健康的点心，做为早餐或者夜宵都是很好的选择哦！ 做法其实很简单，只要将各种食材层叠卷起来就行。提前煮好山药和紫薯，那么只要几分钟就能完成。 但就是这么一点小小的改变，就能立刻让原本平淡无奇的吐司变身抢手货哟~ 生活总是这样，时不时的有一些小惊喜，才会更加精彩不是嘛~'
),
(   null,
    'p8489.jpg',
    'p8489-l.jpg',
    '【小米椒爆炒小公鸡】',
    32,
    '三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽',
    '算起来有一个星期没有更新了，忙着赶紧完成手头的工作，和孩子一起开启度假模式。我总是毫不避讳地称自己为吃货，对于我来说，度假中缺少美食是万万不可的。想要找一个风景与美食兼顾的度假地点可不太容易，工作之余忙着查路线，查攻略，总算是定好了目的地。其实我这个嗜辣族最想去的还是成都重庆一带，考虑到季节的原因，还是留到冬天再前往吧。今天上一道火辣辣的小米椒爆炒小公鸡，虽在家中，也是十足的过了把食辣的瘾，不擅吃辣的伙伴们做这道菜的时候可要记得减少辣椒的用量哦。'
),
(   null,
    'p7818.jpg',
    'p7818-l.jpg',
    '【口袋饼】',
    6.5,
    '面粉、黄瓜、香肠、热水、土豆、盐、醋、生抽、油。',
    '热水和面！面团擀成薄薄的面片之后切成长条，之后中间抹油！折叠之后用手把两边按扁，使其黏到一起！如图！然后用刀背划出花边！平底锅抹油小火煎制口袋饼，两边烙上金黄色即可！土豆切丝！黄瓜和香肠切条状！炒土豆丝，放入盐，醋和生抽炒均匀就可以了，然后放入烙好的口袋饼里，放入黄瓜和香肠即可！'
),
(   null,
    'p9138.jpg',
    'p9138-l.jpg',
    '【橄榄油版酸奶蛋糕】',
    32,
    '鸡蛋、玉米淀粉、绵白糖、白醋、低筋粉、橄榄油、酸奶。',
    '酸奶蛋糕，这是第二次做。自前一次做了带去单位分享后，吃到的同事都说好吃，连不爱甜食的自己也觉得细腻可口。特别是入冰箱后取出品味风味尤佳。喜欢那一丝丝的凉意一丝丝的甜味，入口的感觉特别绵软，很适合夏季食用的。这次还是没有用黄油，因为等融化嫌麻烦，继续用了橄榄油。不同的是这次用了水浴法烘焙的。我用的模具是八寸的活底蛋糕模具，成品有一点收腰，但口味还挺成功的。只是早上拍照心急得很，因为LG上班比较早。难得他如此喜欢吃了最大的两块。'
),
(   null,
    'p4788.jpg',
    'p4788-l.jpg',
    '【番茄肉酱意大利面】',
    25,
    '意大利面、番茄、洋葱、蒜泥、肉糜、黑胡椒粉、番茄酱、盐',
    '听说，台风天，电影和意大利面更配喔汤锅倒水烧开，放一勺盐一勺橄榄油，加入意面，煮13分钟。（意面种类不同，煮的时间也不一样，5-15分钟不等）。煮好的面控水，拌入一勺橄榄油，以防面粘连。平底锅倒油预热，蒜泥炒香，下肉糜翻炒至变色，倒入洋葱丁、番茄丁，翻炒一分钟，放番茄酱、盐、黑胡椒，继续翻炒。肉酱里加热水大火烧开，倒入意面转中火，待意面吸饱汤汁后，关火盛盘。'
),
(   null,
    'p7933.jpg',
    'p7933-l.jpg',
    '【放心油条】',
    1.5,
    '面粉、安琪油条膨松剂、温水、植物油。',
    '自己炸的油条不含明矾，也不用担心地沟油，吃的比较放心。准备中筋粉，油条膨松剂和植物油。面粉和膨松剂混合均匀，加入50-60度温水搅拌。揉成光滑的面团，盖上保鲜膜醒30分钟左右。将醒发好的面团切成长形小剂子，两个叠在一起用筷子按压一下。用手捏住两头抻拉一下，放入7成热（约180-200度）的油锅中炸至金黄即可。'
),
(   null,
    'p6611.jpg',
    'p6611-l.jpg',
    '【蒸饺】',
    12,
    '鸡蛋、豆角酱肉馅、西红柿鸡蛋馅、猪生抽、生抽、海鲜酱油、糖、盐',
    '昨天突然好想吃蒸饺，但是貌似没听过北京哪家蒸饺好吃，于是决定自己做啦，重要的事最近爱上做饭，能与大家分享美食乐趣也让我又燃起了烹饪的热情。想必最好吃的东西还是自己家的家常便饭！面粉300克，开水100ml左右（这个量可以在和面的时候自己调节下，蒸饺一定是烫面的）鸡蛋一个，我是用面包机和的面团，准备其他馅时一直在醒面（半小时内）。豆角酱肉馅：做法见我的豆角酱肉卤菜谱'
);

##SELECT * FROM kf_dish;

CREATE TABLE kf_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    phone VARCHAR(16),
    user_name VARCHAR(16),
    sex INT,    /*1:男  2:女*/
    order_time LONG,
    addr VARCHAR(256),
    did INT
);
INSERT INTO kf_order(oid, phone,user_name,sex,order_time,addr,did) VALUES
(NULL,'13501234567','婷婷',2,1445154859209,'大钟寺中鼎B座',3),
(NULL,'13501234567','婷婷',2,1445254959209,'大钟寺中鼎B座',2),
(NULL,'13501234567','婷婷',2,1445354959209,'大钟寺中鼎B座',5);

##SELECT * FROM kf_order;