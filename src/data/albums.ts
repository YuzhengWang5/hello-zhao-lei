export type Song = {
  id: string
  title: string
  track?: number
  listenUrl: string
  qqSongMid?: string
  background: string
  analysis: string
  lyricExcerpt?: string
  relatedNote?: string
  originAlbum?: string
  originYear?: number
}

export type Album = {
  id: string
  title: string
  year: number
  releasedOn: string
  releasedLabel: string
  cover: string
  intro: string
  background: string
  songs: Song[]
}

function qqSearch(title: string) {
  return `https://y.qq.com/n/ryqq/search?w=${encodeURIComponent(`赵雷 ${title}`)}`
}

const QQ_SONG_MID: Record<string, string> = {
  'weigei-jiejie': '0007tDA329BQRQ',
  'bukai-de-chun': '001IMzXu0fs4AA',
  'zhao-xiao-lei': '003mkVRM29X53j',
  'nanfang-guniang': '001O8Fq6090GIP',
  'kaiwang-beijing': '0021UC052Hgy3L',
  'beijing-dongtian': '003y5IiQ23z5Fr',
}

const rawAlbums: Album[] = [
  {
    id: 'zhao-xiao-lei',
    title: '赵小雷',
    year: 2011,
    releasedOn: '2011-08-07',
    releasedLabel: '2011.08.07',
    cover: '/covers/zhao-xiao-lei.jpg',
    intro:
      '第一张个人专辑。快男之后，他借钱独立做完，词曲都自己写。听起来像一组北京巷口的小品文：穷、想家、想姑娘、想妈妈。',
    background:
      '2011 年 8 月 7 日发行。公开资料写他退出选秀后蛰伏一年，一人包揽词曲，把这张唱片当成真正意义上的独立制作。后来的报道提到，母亲病重、离世前后，他借钱置办设备，把自己关在小屋里写、唱、录。专辑文案说每首歌都像小品文，骑着 28 大杠穿过胡同，唱感情、亲情、理想和无奈。名字他自己拆过：赵云将军的赵，竖心小，雷锋的雷；日照时下小雨，小雨中响的一声雷。他后来在访谈里说，做《赵小雷》的时候母亲因病离开了——先是离别和低迷，再慢慢重建。这一页不把整张 12 首歌摊开，只先放几首最能说明那几年北京生活的。',
    songs: [
      {
        id: 'beijing-dongtian',
        title: '北京的冬天',
        originAlbum: '吉姆餐厅',
        originYear: 2014,
        relatedNote:
          '这首不在《赵小雷》的曲目里。2009 年已出现在合辑《速写穿乐》，2014 年收进第二张专辑《吉姆餐厅》。放在这里，是因为它写的也是那段北京生活：冷、干、人还在城里，和这张首专是连着的。',
        listenUrl: qqSearch('北京的冬天'),
        background:
          '早期作品，比《赵小雷》还要更早被人听到。不要和老狼那首同名歌混在一起。它不是这张首专的歌，却像同一条街上更早的冬天。',
        analysis:
          '用冬天给北京收口，不写抽象的漂泊，只写这个地方到了冬天会怎样。听完《开往北京的火车》再听这一首，像人已经下了车，还要在城里挨过一个真正的冬天。',
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
        id: 'bukai-de-chun',
        title: '不开的唇',
        track: 4,
        listenUrl: qqSearch('不开的唇'),
        background:
          '专辑介绍特意点过这首，把它和更直白的日子歌并置：一张唱片里既有对日子的抱怨，也有说不出口的亲近。公开材料很少再单独讲它的写作现场，能确定的是它属于这张独立制作的第一张专辑，词曲都是赵雷。',
        lyricExcerpt: '时间是星星的眼睛',
        analysis:
          '歌名就把语气定住了：想说，又没说开。时间被写成星星的眼睛，望着自己的困惑，整首歌不像在讲一件事，更像把一段说不完的话压在嘴唇后面。在一张很直白的专辑里，它反而更收。',
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
        id: 'weigei-jiejie',
        title: '未给姐姐递出的信',
        track: 2,
        listenUrl: qqSearch('未给姐姐递出的信'),
        background:
          '歌名已经把形式说完了：一封没有递出去的信。百科条目写到远在国外、难得见面的姐姐；也有报道写到丽江时期一位待他如亲弟的姐姐后来去了国外。两种说法指向同一件事——人隔得很远，话只能写成歌。',
        analysis:
          '它不像情歌那样用力，更像把近况一段段报给对方：这边的风、鼓楼附近的车、自己还是孩子脾气。句子松，信息却具体。没递出的信，反而把说不出口的惦记留在了声音里。',
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

export function findAlbum(albumId: string) {
  return albums.find((item) => item.id === albumId) ?? albums[0]
}

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

export function firstAlbum() {
  return albums[0]
}
