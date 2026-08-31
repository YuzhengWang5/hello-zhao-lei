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

## 线上地址

https://hello-zhao-lei.pages.dev/

代码仓库：https://github.com/YuzhengWang5/hello-zhao-lei

## 本地改完如何发到线上

线上是 Cloudflare Pages：https://hello-zhao-lei.pages.dev/  
代码在 GitHub：https://github.com/YuzhengWang5/hello-zhao-lei

第一次需要登录 Cloudflare（浏览器会弹出授权）：

```bash
npx wrangler login
```

之后每次本地改完，在项目根目录执行：

```bash
npm run build
npx wrangler pages deploy dist --project-name hello-zhao-lei --branch main
```

如果还要把改动存进 GitHub：

```bash
git add .
git commit -m "说明这次改了什么"
git push origin main
```

`git push` 只更新仓库。这个项目目前是用上面的 `wrangler pages deploy` 把 `dist` 推到 Pages 上，所以改完页面后这两步都要做：先 commit/push，再 build + deploy。

常见注意：

- 先 `npm run build` 再 deploy，不要把旧的 `dist` 传上去。
- 专辑、歌词、摘句、赏析都改 `src/data/albums.ts`，不必改页面组件。
