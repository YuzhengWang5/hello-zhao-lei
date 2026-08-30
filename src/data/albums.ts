export type Song = {
  id: string
  title: string
  track: number
  lyricExcerpt?: string
  listenUrl: string
  qqSongMid?: string
  background: string
  analysis: string
}

export type Album = {
  id: string
  title: string
  year: number
  releasedOn: string
  intro: string
  songs: Song[]
}

function qqSearch(title: string) {
  return `https://y.qq.com/n/ryqq/search?w=${encodeURIComponent(`赵雷 ${title}`)}`
}

const QQ_SONG_MID: Record<string, string> = {
  renjia: '004CLZAT44A76s',
  'weigei-jiejie': '0007tDA329BQRQ',
  hua: '003ThnHE0lOP3W',
  'bukai-de-chun': '001IMzXu0fs4AA',
  'zhao-xiao-lei': '003mkVRM29X53j',
  'nanfang-guniang': '001O8Fq6090GIP',
  over: '0021ikNj4Kvqlm',
  'kaiwang-beijing': '0021UC052Hgy3L',
  beiying: '00061qnq4fEXY3',
  mama: '0007Lrk02KPcbO',
  minyao: '00055ZYU4XP6du',
  'jim-canting': '0044j24R389snv',
  'shaonian-jinshi': '000vNzlL39BsNt',
  'mengzhong-hadesen': '000hUGUS16f4OM',
  'women-de-shiguang': '003ITzMw2CRNZX',
  lixiang: '002YiXmX3PKZHE',
  'sanshi-sui': '002i47OG1GAKRM',
  jiaxiang: '003qqTSA2NqbwW',
  fuyou: '000TvH8S1NSVJ6',
  xiaowu: '004AVunG1wAyNZ',
  'beijing-dongtian': '003y5IiQ23z5Fr',
}

const rawAlbums: Album[] = [
  {
    id: 'zhao-xiao-lei',
    title: '赵小雷',
    year: 2011,
    releasedOn: '2011-08-07',
    intro:
      '首张个人专辑。公开资料写他在快男之后借钱独立做完，词曲都自己写。听整张，像被带着骑一辆旧车，穿过北京的巷口、穷、想家、想姑娘。',
    songs: [
      {
        id: 'renjia',
        title: '人家',
        track: 1,
        lyricExcerpt: '人家是花 人家是公主',
        listenUrl: qqSearch('人家'),
        background:
          '专辑介绍里把这首放在开篇的位置：一个买不起车、买不起房的穷小子，看着别人的日子。它不是后来那种被唱红的代表作，却很能说明这张唱片从哪儿起步——先把自己当时的窘迫说清楚，再往下唱别的。',
        analysis:
          '词几乎不绕弯，对比也很直：人家怎样，我怎样。赵雷后来那些更广为人知的歌，也常这样写，只是这首更瘦、更硬。第一次听《赵小雷》，从《人家》进门是合适的，能马上碰到这张专辑的生活感，而不是先被名声带着走。',
      },
      {
        id: 'weigei-jiejie',
        title: '未给姐姐递出的信',
        track: 2,
        listenUrl: qqSearch('未给姐姐递出的信'),
        background:
          '歌名已经把形式说完了：一封没有递出去的信。百科条目写到远在国外、难得见面的姐姐；也有报道写到丽江时期一位待他如亲弟的姐姐后来去了国外。两种说法指向同一件事——人隔得很远，话只能写成歌。',
        analysis:
          '它不像情歌那样用力，更像把近况一段段报给对方：这边的风、鼓楼附近的车、自己还是孩子脾气。句子松，信息却具体。没递出的信，反而把说不出口的惦记留在了声音里。',
      },
      {
        id: 'hua',
        title: '画',
        track: 3,
        lyricExcerpt: '为寂寞的夜空画上一个月亮',
        listenUrl: qqSearch('画'),
        background:
          '2011 年随专辑发行。2014 年他上《中国好歌曲》又唱了这首，刘欢当时称它是一段时间里看到的最好的一首词。创作时生活清贫，公开访谈里说过，缺什么就在想象里给自己补上。',
        analysis:
          '词的办法很简单：月亮、窗、床、姑娘、灶炉，一件件画上去。越往后越能听出，那些补出来的生活其实托着一层空。旋律不复杂，却已经是他后来一直在用的叙事：不喊口号，只把眼前的匮乏说成一幅还能待下去的日子。',
      },
      {
        id: 'bukai-de-chun',
        title: '不开的唇',
        track: 4,
        lyricExcerpt: '时间是星星的眼睛',
        listenUrl: qqSearch('不开的唇'),
        background:
          '专辑介绍特意点过这首，把它和《人家》并置：一张唱片里既有对日子的抱怨，也有说不出口的亲近。公开材料很少再单独讲它的写作现场，能确定的是它属于这张独立制作的第一张专辑，词曲都是赵雷。',
        analysis:
          '歌名就把语气定住了：想说，又没说开。时间被写成星星的眼睛，望着自己的困惑，整首歌不像在讲一件事，更像把一段说不完的话压在嘴唇后面。在一张很直白的专辑里，它反而更收。',
      },
      {
        id: 'zhao-xiao-lei',
        title: '赵小雷',
        track: 5,
        listenUrl: qqSearch('赵小雷'),
        background:
          '同名曲。专辑文案里写过他对自己名字的拆解：赵云将军的赵，竖心小，雷锋的雷；还说名字的意思是日照时下小雨，小雨中响的一声雷。把名字唱成歌，像给这张借钱做出来的唱片盖一个章。',
        analysis:
          '它不是在介绍履历，更像一个人把自己的名字在巷子里念给自己听。听完整张再回来，会发现“赵小雷”三个字既是人，也是那几年北京城里一个还没被叫响的青年。',
      },
      {
        id: 'nanfang-guniang',
        title: '南方姑娘',
        track: 6,
        listenUrl: qqSearch('南方姑娘'),
        background:
          '后来成为这张专辑里流传最广的一首。公开访谈和报道写到，他从别处回到北京、搬进新院子，邻居是一位南方来的姑娘；想象和现实对不上，院子却因此热闹起来。专辑里另外收有弹唱版，编曲更瘦。',
        analysis:
          '它好听，也容易被听成情歌。细听会发现，人并没有被写成完美的南方想象，倒像一个对生活有希望、希望又常常落空的普通人。赵雷的本事在这里：把一个邻居写成一座城外的风，却不把她说成风景。',
      },
      {
        id: 'over',
        title: 'OVER',
        track: 7,
        listenUrl: qqSearch('OVER'),
        background:
          '公开资料很少单独讲这首的写作经过。能确定的是它夹在《南方姑娘》和《开往北京的火车》之间，属于第一张专辑里那批自己写、自己唱的曲子。英文歌名在一张很北京的唱片里显得有点跳。',
        analysis:
          'OVER 这个词本身就是一句收束。放在专辑中段，像把前面那些巷口、姑娘、穷日子暂时掐掉。没有更多被反复转述的故事，听的时候反而可以少一点附会，只看他怎么用一句结束，把情绪从热闹里拉开。',
      },
      {
        id: 'kaiwang-beijing',
        title: '开往北京的火车',
        track: 8,
        listenUrl: qqSearch('开往北京的火车'),
        background:
          '有报道写到，2007 年前后他在川藏、云南一带走动时写下了这首，后来收进第一张专辑。歌名很具体：不是抵达之后的北京，而是还在路上、车头朝着北京的那段时间。',
        analysis:
          '火车是方向，也是还没落地的状态。赵雷后来有很多歌已经站在北京城里看自己，这一首却还在车厢里。词不需要太多地名，光是“开往”两个字，就把漂着的人说清楚了。',
      },
      {
        id: 'beiying',
        title: '背影',
        track: 9,
        listenUrl: qqSearch('背影'),
        background:
          '单独讲解这首写作现场的公开材料不多。它排在《妈妈》前面，同属第一张专辑后半段那些更沉的家庭与离别气息。不宜把它和后来其他写母亲的歌强行并成同一件事。',
        analysis:
          '背影是只能看着离开、没法面对面说完的形象。放在《妈妈》之前，像先留下一个沉默的画面，再让下一首把称呼喊出来。第一张专辑里，赵雷已经很会把一件私事放成一个普通名词。',
      },
      {
        id: 'mama',
        title: '妈妈',
        track: 10,
        listenUrl: qqSearch('妈妈'),
        background:
          '写于母亲病重的时候。后来的报道多次提到，他是哭着写下这首，歌里一声声喊“妈妈”，想挽留，又像已经在准备分别。2010 年快男舞台上他也唱过，声音发紧，评委被这首送进了下一轮。',
        analysis:
          '它几乎不修辞。称呼重复得那么多，不是技巧，是一个人当时只会这一个词。今天再听，不必先堆感动，也能听出第一张专辑最底下的那一层：不是流浪有多酷，而是家里有一个人让他唱不稳。',
      },
      {
        id: 'minyao',
        title: '民谣',
        track: 11,
        listenUrl: qqSearch('民谣'),
        background:
          '专辑末轨，篇幅短。公开材料很少把它单独拿出来讲。它更像一张民谣唱片给自己留下的署名：唱了人家、姐姐、画、火车和妈妈之后，最后只剩这个词。',
        analysis:
          '把风格名当作歌名，有一点自嘲，也有一点确认。听完整张再落到这里，会觉得他不是在定义民谣，只是把自己刚刚唱过的那些日子，收进这个当时还不那么时髦的称呼里。',
      },
    ],
  },
  {
    id: 'jim-restaurant',
    title: '吉姆餐厅',
    year: 2014,
    releasedOn: '2014-10-19',
    intro:
      '第二张专辑。赵雷自己解释过，“吉姆”是“吉母”，写给已经离开的母亲。一半新歌，一半旧作重编。他自己说，这张比《赵小雷》积极一些。',
    songs: [
      {
        id: 'jim-canting',
        title: '吉姆餐厅',
        track: 1,
        lyricExcerpt: '沉睡吧吉姆餐厅',
        listenUrl: qqSearch('吉姆餐厅'),
        background:
          '整张专辑的源头。赵雷在 StreetVoice 访谈里说，吉姆就是吉母，写给已离世的母亲，也送给痛失亲人的人。专辑笔记里还写过，母亲走后那些秋夜，他常去胡同里一家熟识的餐厅坐坐，那地方一时像家。',
        analysis:
          '餐厅不是景点，是一个能坐下来、又能告别的地方。后半段像对话，有人劝忘了，有人说再见。封面那棵花盆里的小树，根比树大，和他后来解释的一样：外表普通，心里装着一块走不掉的地。',
      },
      {
        id: 'shaonian-jinshi',
        title: '少年锦时',
        track: 2,
        listenUrl: qqSearch('少年锦时'),
        background:
          '公开介绍写它画的是上世纪末北京的城市图景，是少年时期他亲眼见过的样子：春天脱掉厚衣服，秋天柿子树一熟就够吃很久，城里还没有后来那些咖啡馆和店面。赵雷说，自己经历过别人没经历过的，都在里面。',
        analysis:
          '锦时不是怀旧广告，是一套很具体的少年零件：衬衫、烟、头抬起来的笑。它不解释青春有多好，只把那个还敢喜欢、又不敢说的年龄摊开。听的时候很容易对上自己的城，但原词始终是北京那几年的风。',
      },
      {
        id: 'mengzhong-hadesen',
        title: '梦中的哈德森',
        track: 3,
        listenUrl: qqSearch('梦中的哈德森'),
        background:
          '专辑介绍写明：这是他第一次在作品里尝试说唱。制作这张唱片时他给自己压力很大，这首像是有意从一把吉他的舒适区里跨出去。哈德森具体指什么，公开访谈里少有更细的自述，不宜外加故事。',
        analysis:
          '它在一张很说话的民谣唱片里突然换口气，节奏更密，句子也更快。重要的不是像不像说唱，而是他愿意在第二张专辑里让自己听着不那么“像赵雷”。梦中二字把场景从胡同里轻轻抬起来一点。',
      },
      {
        id: 'women-de-shiguang',
        title: '我们的时光',
        track: 4,
        listenUrl: qqSearch('我们的时光'),
        background:
          '2012 年他和几位朋友骑摩托车做“十个轮子上的民谣之路”，从成都一路往东。后来的采访写到，《我们的时光》是走了四千多公里之后写下的。结尾有一分多钟没有词的吟唱，他说像站在山谷或大海前面喊。',
        analysis:
          '它热，但不空。前面是路上的日子，后面忽然把词收掉，只剩声音往前冲。有人拿它和《水手》那种不服输的劲儿相比；不同的是，赵雷这首是轧过公路以后才写出来的。自由在这里不是口号，是嗓子还没哑。',
      },
      {
        id: 'lixiang',
        title: '理想',
        track: 5,
        lyricExcerpt: '理想永远都年轻',
        listenUrl: qqSearch('理想'),
        background:
          '他接受采访时说过，理想像打斗，打赢了才算实现。歌里那句“理想永远都年轻”后来常被单独拿出。2017 年上《歌手》时他也唱过这首。写它的时候，人还在第二张专辑的制作焦虑里。',
        analysis:
          '它几乎是整张专辑最直的一首：苍白、倔强、还相信花会再开。不像《吉姆餐厅》那样绕着母亲说话，也不像《少年锦时》那样堆细节。就是把一个不肯老的词，对着命运唱一遍。好听，也容易唱成自己的。',
      },
      {
        id: 'sanshi-sui',
        title: '三十岁的女人',
        track: 6,
        lyricExcerpt: '她是个三十岁，至今还没有结婚的女人',
        listenUrl: qqSearch('三十岁的女人'),
        background:
          '旧作重编。专辑介绍写它原先更接近一把吉他，这回加了更多乐器。赵雷做这张唱片时其实还不到三十岁，却已经在写这个年纪的疲惫。公开乐评常把它看成对都市女性的观察，而不是猎奇。',
        analysis:
          '它不评判婚不婚，只把笑脸旁边的纹路写出来。三十岁在歌里既是一个人，也是所有握不住年华的人。重编之后声音更满，词却仍旧克制。听的时候最好少加道德，多看他怎么把别人的日子写成普通的一天。',
      },
      {
        id: 'jiaxiang',
        title: '家乡',
        track: 7,
        listenUrl: qqSearch('家乡'),
        background:
          '专辑评述里把它和《北京的冬天》《小屋》放在一起，说总和他的家乡情结分不开。没有更多被反复引用的写作现场。能确定的是，它出现在一张告别母亲、又要继续往前走的唱片后半段。',
        analysis:
          '家乡在赵雷的歌里很少是风景明信片，更像一个走远了才会被看清的地方。放在《三十岁的女人》后面，像从别人的年纪里抬起头，忽然问自己还能不能回去。词不必多，这个标题已经够沉。',
      },
      {
        id: 'fuyou',
        title: '浮游',
        track: 8,
        listenUrl: qqSearch('浮游'),
        background:
          '公开资料很少单独记录它的创作经过。它夹在《家乡》和《小屋》之间，属于这张专辑里那些把人写成还没沉下去、也还没靠岸的状态。不宜编一段具体故事去填这个空白。',
        analysis:
          '浮游就是不落地。第二张专辑一边在告别，一边在重新给自己找地方坐，这首正好卡在中间。没有被讲烂的轶事，反而适合只听声音：人还在水里，餐厅、家乡、小屋都还没把他接住。',
      },
      {
        id: 'xiaowu',
        title: '小屋',
        track: 9,
        listenUrl: qqSearch('小屋'),
        background:
          '又是一首旧作重编。介绍里写它和《三十岁的女人》一样，不再只靠一把吉他，加了更多乐器。专辑评述把它算进家乡与落脚之处那一类。小屋是地方，也是那几年还能把自己关进去做唱片的空间。',
        analysis:
          '小屋比家乡小，比餐厅私。它不像《吉姆餐厅》那样要完成一场告别，只是把人放回一个能待着的尺寸。重编让声音厚了，词仍旧是往里收的。听完会觉得，第二张专辑的根，有一半其实还埋在第一张那些更窄的房间里。',
      },
      {
        id: 'beijing-dongtian',
        title: '北京的冬天',
        track: 10,
        listenUrl: qqSearch('北京的冬天'),
        background:
          '早期作品。2009 年就已出现在合辑《速写穿乐》里，2014 年收进《吉姆餐厅》。不要和老狼那首同名歌混在一起。它是赵雷还在民谣圈里慢慢被人听到时，就已经拿得出手的一首。',
        analysis:
          '用冬天给北京收尾，像把整张专辑从餐厅、少年、理想里拉回他最熟的季节。冷、干、人还在城里。早期的词已经有后来的味道：不写抽象的漂泊，只写这个地方到了冬天会怎样。旧歌放在最后，反而像一句没说完的回家。',
      },
    ],
  },
]

export const albums: Album[] = rawAlbums.map((album) => ({
  ...album,
  songs: album.songs.map((song) => {
    const mid = QQ_SONG_MID[song.id]
    if (!mid) return song
    return {
      ...song,
      qqSongMid: mid,
      listenUrl: `https://i.y.qq.com/v8/playsong.html?songmid=${mid}`,
    }
  }),
}))

export function findSong(
  albumId: string,
  songId: string,
): { album: Album; song: Song } | null {
  const album = albums.find((item) => item.id === albumId)
  if (!album) return null
  const song = album.songs.find((item) => item.id === songId)
  if (!song) return null
  return { album, song }
}

export function firstSong() {
  const album = albums[0]
  return { album, song: album.songs[0] }
}
