# 赵雷 · 时间线

按专辑浏览赵雷的歌。第一版先放前两张：《赵小雷》（2011）和《吉姆餐厅》（2014）。

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

## 歌词说明

完整歌词受版权保护，本站只保留极少量已核对的摘句，并链到 QQ 音乐官方搜索页。不收录、不展示整首歌词。

## 线上地址

https://hello-zhao-lei.pages.dev/

## 部署到 Cloudflare Pages

```bash
npx wrangler login
npm run build
npx wrangler pages deploy dist --project-name hello-zhao-lei
```
