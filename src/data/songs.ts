export type Song = {
  id: string
  title: string
  year: number
  album: string
  intro: string
  description: string
  lyricExcerpt: string
  listenUrl: string
}

export const songs: Song[] = [
  {
    id: 'hua',
    title: '画',
    year: 2011,
    album: '赵小雷',
    intro:
      '房间很空的时候，他用几笔给自己补了一幅能待下去的生活。',
    description:
      '听《画》，像看见一个人坐在冷清的屋子里，一边拨弦，一边给自己添一个月亮、一扇窗、一张床。旋律不绕，词也不装，缺什么就画什么。后来那些更广为人知的歌，叙事其实已经在这里了：不喊，只把眼前的匮乏说成一幅日子。第一次听赵雷，从这首开始刚刚好，短，清楚，也不被后来的名声先带偏。',
    lyricExcerpt: '为寂寞的夜空画上一个月亮',
    listenUrl: 'https://y.qq.com/n/ryqq/search?w=%E8%B5%B5%E9%9B%B7%20%E7%94%BB',
  },
  {
    id: 'chengdu',
    title: '成都',
    year: 2016,
    album: '无法长大',
    intro: '走在别人的城里，却像走在自己的回忆里。',
    description:
      '《成都》不是观光介绍，更像把一段走不干净的路，轻轻放回那座阴雨的小城里。吉他不急，词也不急，玉林路、小酒馆、揣进裤兜的手，都是很具体的小事。2016 年它从专辑《无法长大》里走出来以后，被很多人唱成自己的故事，原版却仍然安静：灯还没灭，人还在走。第一次听赵雷，这首几乎躲不开。',
    lyricExcerpt: '和我在成都的街头走一走',
    listenUrl:
      'https://y.qq.com/n/ryqq/search?w=%E8%B5%B5%E9%9B%B7%20%E6%88%90%E9%83%BD',
  },
  {
    id: 'wojide',
    title: '我记得',
    year: 2022,
    album: '署前街少年',
    intro: '隔了很多年再听他，声音还是那个声音，故事绕得更远了。',
    description:
      '《我记得》不像《画》那样直接，也不像《成都》那样好跟着哼。它慢慢讲一段记不清、又总在重复的相遇，声音里带着孩子气的哼唱。2022 年收在专辑《署前街少年》里，更沉，也更愿意把私事说长。听过前面那些直白的歌再回来，会发现他还是那个不急的人，只是把句子拉长了。',
    lyricExcerpt: '注定失忆着相遇',
    listenUrl:
      'https://y.qq.com/n/ryqq/search?w=%E8%B5%B5%E9%9B%B7%20%E6%88%91%E8%AE%B0%E5%BE%97',
  },
]
