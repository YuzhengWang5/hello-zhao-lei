# 赵雷 · 三首歌

一个极简的赵雷歌曲时间线网站。第一版只放三首歌：《画》《成都》《我记得》。

纯前端静态站，用 Vite + React + TypeScript + 普通 CSS 做成。没有后端、登录或数据库。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认在 `http://127.0.0.1:43177`。

```bash
npm run build
npm run preview
npm run lint
```

## 修改歌曲内容

歌曲标题、年份、专辑、简介、歌词摘句和听歌链接都集中在：

`src/data/songs.ts`

改完后重新构建即可。

## 部署到 Cloudflare Pages

需要已登录 Wrangler：

```bash
npx wrangler login
npm run build
npx wrangler pages deploy dist --project-name zhao-lei-timeline
```

## 听歌链接说明

当前「去 QQ 音乐听」指向 QQ 音乐官方搜索页（赵雷 + 歌名），避免使用未核实的歌曲详情 ID。确认官方 `songDetail` 地址后，只需改 `src/data/songs.ts` 里的 `listenUrl`。
