# 首次运行与 Git 步骤

1. 将压缩包里的 no-personality 文件夹内容复制到你已建立的项目文件夹，不要把源码只留在压缩包中。
2. VS Code → 文件 → 打开文件夹，选择包含 index.html 的那个文件夹。
3. 双击 index.html 先运行。更推荐在 VS Code 使用 Live Server 打开。
4. 在 VS Code 终端执行下列命令。需要电脑已安装 Git。若提示缺少身份，先设置你希望提交记录展示的作者名及邮箱；邮箱可以使用代码托管平台提供的隐私邮箱，不要填密码。

```bash
git init
git add .
git commit -m "feat: build initial interactive personal homepage"
```

5. 在 GitHub 或 Gitee 新建公开空仓库，不选择自动生成 README（本地已经有）。复制平台提供的仓库 HTTPS 地址。
6. 在终端执行以下命令，将占位地址替换成自己的真实仓库地址。推送身份验证跟随平台提示，不把访问令牌写进源码。

```bash
git branch -M main
git remote add origin 仓库HTTPS地址
git push -u origin main
```

7. 此后每完成一个真实阶段再提交和推送。不要为了凑次数把现有成果拆成假历史。本包只提供首次提交内容，尚未替你创建仓库或执行 Git 提交。
8. 现在不用购买服务器。按计划在12月初本地功能稳定后再进行Linux部署。

## 当前检查范围
已检查 JavaScript 语法与本地资源引用；尚未在真实浏览器里完整验证动画、拖动和不同屏幕尺寸。请先运行并反馈实际效果，之后据观察调整。
