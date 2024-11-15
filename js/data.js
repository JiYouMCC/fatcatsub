var subData = {
    "stations": {
        /* 注释线下面的都是那条线上的地铁站
        //被注释的地铁站都是重复的*/

        //肥肥线
        "魔瓶家": {
            "location": [875, 20, 1803]
        },
        "肥猫港": {
            "location": [-1, 20, 0]
        },
        "古河小镇灯塔": {
            "location": [1, 20, -345]
        },
        "秧歌农场北": {
            "location": [125, 20, -801]
        },
        "狐狸岛": {
            "location": [4299, 20, 1410]
        },
        "半分岛": {
            "location": [1, 20, 500]
        },
        "狐狸岛北": {
            "location": [4301, 20, 1300]
        },
        "秋叶原": {
            "location": [3928, 20, -800],
            "img": "station_qiuyeyuan.jpg"
        },
        "锻台山北麓": {
            "location": [4300, 20, -801]
        },
        "东海望": {
            "location": [3300, 20, -799]
        },
        "相思洲": {
            "location": [1700, 20, 1801]
        },
        "白头山": {
            "location": [4000, 20, 1799]
        },
        "试炼过山车": {
            "location": [635, 20, -801]
        },

        //中央线
        "糖湖镇": {
            "location": [1699, 20, 4800]
        },
        /*相思洲*/
        "红牛岛": {
            "location": [1699, 20, 0]
        },
        "玖柒娘娘庙": {
            "location": [1700, 20, 2918]
        },
        "铁木村": {
            "location": [1699, 20, -2399]
        },

        //汐星线
        "靴岛灯塔": {
            "location": [-3000, 20, -2399]
        },
        /*铁木村*/
        "海星镇北": {
            "location": [5101, 20, -2400]
        },
        "赤目岛前哨站": {
            "location": [-3734, 20, -2401]
        },
        "潮汐海灵殿": {
            "location": [-5408, 20, -2562]
        },

        //猫猫线
        /*肥猫港*/
        "神秘洞": {
            "location": [377, 20, 1]
        },
        /*红牛岛*/

        //东海线
        /*锻台山北麓*/
        "海星镇": {
            "location": [5099, 20, -2100]
        },
        /*海星镇北*/

        //岚辉线
        /*狐狸岛北*/
        "溶洞湖": {
            "location": [3700, 20, 1301]
        },

        //赞服的例子
/*        "赞服国际机场": {
            "location": [
                [-173, 57, -430],
                [-200, 57, -431]
            ]
        },*/

/*        "彩虹半岛": {
            "location": [-410, 40, -889],
            "description": "彩虹镇东南沿海的半岛。",
            "img": "station_caihongbandao.jpg"
        },*/
    },
    "lines": {
        "肥肥线": {
            "color": "#3399cc",
            "stations": ["肥猫港", "古河小镇灯塔", "秧歌农场北", "试炼过山车","东海望", "秋叶原", "锻台山北麓", "狐狸岛北", "狐狸岛", "白头山","相思洲","魔瓶家","半分岛"],
            "description": "肥肥线的介绍还没写。",
            "selfemployed": false
        },
        "中央线": {
            "color": "#00ff00",
            "stations": ["铁木村", "红牛岛", "相思洲", "玖柒娘娘庙","糖湖镇"],
            "description": "中央线的介绍还没写。",
            "selfemployed": false
        },
        "汐星线": {
            "color": "#00cccc",
            "stations": ["潮汐海灵殿", "赤目岛前哨站", "靴岛灯塔", "铁木村","海星镇北"],
            "description": "汐星线的介绍还没写。",
            "selfemployed": false
        },
        "猫猫线": {
            "color": "#ff3300",
            "stations": ["肥猫港", "神秘洞", "红牛岛"],
            "description": "猫猫线的介绍还没写。",
            "selfemployed": false
        },
        "东海线": {
            "color": "#003399",
            "stations": ["锻台山北麓", "海星镇", "海星镇北"],
            "description": "东海线的介绍还没写。",
            "selfemployed": false
        },
        "岚辉线": {
            "color": "#9999cc",
            "stations": ["溶洞湖", "狐狸岛北"],
            "description": "有一位石匠居住在溶洞湖，他叫石岚辉，因为他能交易到蓝色和灰色的（带釉）陶瓦。",
            "selfemployed": false
        },
    },
    "paths": [
        //肥肥线
        {
            "start": "肥猫港",
            "end": "古河小镇灯塔",
            "line": "肥肥线"
        },
        {
            "start": "古河小镇灯塔",
            "end": "肥猫港",
            "line": "肥肥线"
        },
        {
            "start": "古河小镇灯塔",
            "end": "秧歌农场北",
            "polyline": [
                [1, 20, -345],
                [1, 20, -801],
                [125, 20, -801]
            ],
            "line": "肥肥线"
        },
        {
            "start": "秧歌农场北",
            "end": "古河小镇灯塔",
            "polyline": [
                [125, 20, -801],
                [1, 20, -801],
                [1, 20, -345]
            ],
            "line": "肥肥线"
        },
        {
            "start": "秧歌农场北",
            "end": "试炼过山车",
            "line": "肥肥线"
        },
        {
            "start": "试炼过山车",
            "end": "秧歌农场北",
            "line": "肥肥线"
        },
        {
            "start": "试炼过山车",
            "end": "东海望",
            "line": "肥肥线"
        },
        {
            "start": "东海望",
            "end": "试炼过山车",
            "line": "肥肥线"
        },
        {
            "start": "东海望",
            "end": "秋叶原",
            "line": "肥肥线"
        },
        {
            "start": "秋叶原",
            "end": "东海望",
            "line": "肥肥线"
        },
        {
            "start": "秋叶原",
            "end": "锻台山北麓",
            "line": "肥肥线"
        },
        {
            "start": "锻台山北麓",
            "end": "秋叶原",
            "line": "肥肥线"
        },
        {
            "start": "狐狸岛北",
            "end": "锻台山北麓",
            "line": "肥肥线"
        },
        {
            "start": "锻台山北麓",
            "end": "狐狸岛北",
            "line": "肥肥线"
        },
        {
            "start": "狐狸岛",
            "end": "狐狸岛北",
            "line": "肥肥线"
        },
        {
            "start": "狐狸岛北",
            "end": "狐狸岛",
            "line": "肥肥线"
        },
        {
            "start": "狐狸岛",
            "end": "白头山",
            "polyline": [
                [4299, 20, 1410],
                [4299, 20, 1799],
                [4000, 20, 1799]
            ],
            "line": "肥肥线"
        },
        {
            "start": "白头山",
            "end": "狐狸岛",
            "polyline": [
                [4299, 20, 1410],
                [4299, 20, 1799],
                [4000, 20, 1799]
            ],
            "line": "肥肥线"
        },
        {
            "start": "相思洲",
            "end": "白头山",
            "line": "肥肥线"
        },
        {
            "start": "白头山",
            "end": "相思洲",
            "line": "肥肥线"
        },
        {
            "start": "相思洲",
            "end": "魔瓶家",
            "line": "肥肥线"
        },
        {
            "start": "魔瓶家",
            "end": "相思洲",
            "line": "肥肥线"
        },
        {   "start": "半分岛",
            "end": "魔瓶家",
            "polyline": [
                [1, 20, 500],
                [1, 20, 1803],
                [875, 20, 1803]
            ],
            "line": "肥肥线"
        },
        {
            "start": "魔瓶家",
            "end": "半分岛",
            "polyline": [
                [875, 20, 1803],
                [1, 20, 1803],
                [1, 20, 500]
            ],
            "line": "肥肥线"
        },
        {   "start": "半分岛",
            "end": "肥猫港",
            "line": "肥肥线"
        },
        {
            "start": "肥猫港",
            "end": "半分岛",
            "line": "肥肥线"
        },
        //中央线
        {   "start": "铁木村",
            "end": "红牛岛",
            "line": "中央线"
        },
        {
            "start": "红牛岛",
            "end": "铁木村",
            "line": "中央线"
        },
        {   "start": "相思洲",
            "end": "红牛岛",
            "line": "中央线"
        },
        {
            "start": "红牛岛",
            "end": "相思洲",
            "line": "中央线"
        },
        {   "start": "相思洲",
            "end": "玖柒娘娘庙",
            "line": "中央线"
        },
        {
            "start": "玖柒娘娘庙",
            "end": "相思洲",
            "line": "中央线"
        },
        {   "start": "糖湖镇",
            "end": "玖柒娘娘庙",
            "line": "中央线"
        },
        {
            "start": "玖柒娘娘庙",
            "end": "糖湖镇",
            "line": "中央线"
        },
        //汐星线
        {   "start": "潮汐海灵殿",
            "end": "赤目岛前哨站",
            "polyline": [
                [-5408, 20, -2562],
                [-5377, 20, -2562],
                [-5377, 20, -2401],
                [-3734, 20, -2401]
            ],
            "line": "汐星线"
        },
        {
            "start": "赤目岛前哨站",
            "end": "潮汐海灵殿",
            "polyline": [
                [-3734, 20, -2401],
                [-5377, 20, -2401],
                [-5377, 20, -2562],
                [-5408, 20, -2562]
            ],
            "line": "汐星线"
        },
        {   "start": "靴岛灯塔",
            "end": "赤目岛前哨站",
            "line": "汐星线"
        },
        {
            "start": "赤目岛前哨站",
            "end": "靴岛灯塔",
            "line": "汐星线"
        },
        {   "start": "靴岛灯塔",
            "end": "铁木村",
            "line": "汐星线"
        },
        {
            "start": "铁木村",
            "end": "靴岛灯塔",
            "line": "汐星线"
        },
        {   "start": "海星镇北",
            "end": "铁木村",
            "line": "汐星线"
        },
        {
            "start": "铁木村",
            "end": "海星镇北",
            "line": "汐星线"
        },
        //猫猫线
        {   "start": "肥猫港",
            "end": "神秘洞",
            "line": "猫猫线"
        },
        {
            "start": "神秘洞",
            "end": "肥猫港",
            "line": "猫猫线"
        },
        {   "start": "红牛岛",
            "end": "神秘洞",
            "line": "猫猫线"
        },
        {
            "start": "神秘洞",
            "end": "红牛岛",
            "line": "猫猫线"
        },

        //东海线
        {   "start": "锻台山北麓",
            "end": "海星镇",
            "polyline": [
                [4300, 20, -801],
                [5099, 20, -801],
                [5099, 20, -2100]
            ],
            "line": "东海线"
        },
        {
            "start": "海星镇",
            "end": "锻台山北麓",
            "polyline": [
                [5099, 20, -2100],
                [5099, 20, -801],
                [4300, 20, -801],
            ],
            "line": "东海线"
        },
        {   "start": "海星镇北",
            "end": "海星镇",
            "line": "东海线"
        },
        {
            "start": "海星镇",
            "end": "海星镇北",
            "line": "东海线"
        },

        //岚辉线
        {
            "start": "溶洞湖",
            "end": "狐狸岛北",
            "line": "岚辉线"
        },
        {
            "start": "狐狸岛北",
            "end": "溶洞湖",
            "line": "岚辉线"
        },
    ]
}
