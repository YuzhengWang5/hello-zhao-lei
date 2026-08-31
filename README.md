# 赵雷 · 时间线

按专辑浏览赵雷的歌。这一版先放第一张：《赵小雷》（2011）。

纯前端静态站，Vite + React + TypeScript + 普通 CSS。没有后端、登录或数据库。

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

## 修改内容

专辑、曲目、创作背景、赏析和听歌链接都在：

`src/data/albums.ts`

## 听歌入口

每首歌带有 QQ 音乐官方 `songmid`。安卓 / 鸿蒙会先尝试用 `qqmusic://` 打开 App 播放；微信里则打开官方单曲页（由页面拉起 App）。电脑端打开官方单曲页。

## 歌词说明

完整歌词受版权保护，本站只保留极少量已核对的摘句。不收录、不展示整首歌词。

## 线上地址

https://hello-zhao-lei.pages.dev/

代码仓库：https://github.com/YuzhengWang5/hello-zhao-lei

## 部署到 Cloudflare Pages

```bash
npx wrangler login
npm run build
npx wrangler pages deploy dist --project-name hello-zhao-lei
```
