# Embedded IDE - F (Fork 版本)

[![](https://img.shields.io/badge/Fork_From-github0null/eide-blue)](https://github.com/github0null/eide)
[![](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

## 📌 关于本项目

本项目是 [Embedded IDE (EIDE)](https://github.com/github0null/eide) 的 **Fork 分支**，用于个人定制开发和功能扩展。

### 原始项目信息

| 项目 | 信息 |
|------|------|
| **原仓库地址** | [https://github.com/github0null/eide](https://github.com/github0null/eide) |
| **原作者** | [github0null](https://github.com/github0null) |
| **原项目主页** | [https://em-ide.com](https://em-ide.com) |
| **原项目文档** | [https://docs.em-ide.com](https://docs.em-ide.com) |
| **Fork 基础版本** | v3.26.1 |

---

## 🔄 版本更新记录

### EIDE-F v3.26.1-F2 (2025-01-29)

> 功能增强与 Bug 修复（参考 EIDE-pro）

**新增功能：**
- ✨ 添加 **Keil 项目刷新命令** (`Refresh Keil Project`)，支持手动同步 Keil 项目配置
- ✨ 增强 `EIDEProjectExplorer` 项目管理功能
- ✨ 支持**子目录项目自动检测**：在工作区子目录中查找 EIDE 项目

**MDK 导入工程优化：**
- 🚀 **自动创建 EIDE 文件夹**：当选择不与 Keil 项目共存时，自动在项目根目录创建 `EIDE` 文件夹，无需手动选择
- 🚀 **工作区设置为项目根目录**：导入后打开项目根目录作为工作区（而非 EIDE 子目录），解决以下问题：
  - ✅ **Git 兼容性**：Git 可以正常工作，识别项目根目录的 `.git`
  - ✅ **项目自动检测**：VSCode 重启后 EIDE 可自动检测到子目录中的项目

**优化改进：**
- 🔧 `KeilXmlParser`: 改进 XML 解析逻辑，增强解析稳定性
- 🔧 `ToolchainManager`: 增加工具链路径有效性检查，防止无效路径导致崩溃
- 🔧 `OperationExplorer`: 优化 MDK 导入流程
- 🔧 `utility.ts`: 工具函数优化
- 🔧 更新 webpack 构建配置

**其他：**
- 📝 更新多语言字符串配置（中文/英文）
- 📦 更新依赖版本

---

### EIDE-F v3.26.1-F1 (2025-01-29)

> 初始 Fork 版本

- 基于原版 v3.26.1 创建 Fork
- 保留原始功能完整性
- 创建 Fork 版本 README 文档
- 添加 EIDE-pro 分支致谢

---

## 🚀 快速开始

1. 安装上述任一编译器
2. 打开扩展的 **Operations** 栏设置编译器安装路径
3. 点击 Operations 栏中的 `New` 或 `Import` 功能开始项目

---

## 🔧 如何构建

> **重要提示**  
> 由于历史原因，本扩展需要 NodeJS **16** 版本。

1. 安装 `NodeJS 16`（推荐 v16.20.2）。可以使用 `nvm` 管理 NodeJS 版本。
   安装 `vsce`：`npm install -g cheerio@1.0.0-rc.9 vsce@2.15.0`

2. 克隆仓库，使用 VSCode 打开文件夹并运行命令：

   ```shell
   npm install
   ```

3. 按 `Ctrl+Shift+B` 显示 VSCode 任务
   - 使用 `npm: webpack` 构建扩展，然后按 F5 调试
   - 使用 `build vsix` 构建为 vsix 包

---

## 📜 许可证

本项目遵循 [MIT 许可证](./LICENSE)，与原项目保持一致。

---

## 🙏 致谢

- 感谢原作者 [github0null](https://github.com/github0null) 创建了如此优秀的嵌入式开发环境
- 感谢 [clolckliang](https://github.com/clolckliang) 的 [EIDE-pro](https://github.com/clolckliang/eide-pro) 分支提供的增强功能和 bug 修复参考
- 感谢原项目的所有贡献者

---

## 🔗 相关分支项目

| 项目 | 维护者 | 说明 |
|------|--------|------|
| [EIDE (原版)](https://github.com/github0null/eide) | github0null | 原始项目 |
| [EIDE-pro](https://github.com/clolckliang/eide-pro) | clolckliang | 增强版，添加 CMake 支持、Keil bug 修复等 |
| [EIDE-F (本项目)](https://github.com/Cxxhh/eide) | Cxxhh | 个人定制 Fork |

---

## 📞 相关链接

- **本 Fork 仓库**: [https://github.com/Cxxhh/eide](https://github.com/Cxxhh/eide)
- **EIDE-pro 分支**: [https://github.com/clolckliang/eide-pro](https://github.com/clolckliang/eide-pro)
- **原仓库**: [https://github.com/github0null/eide](https://github.com/github0null/eide)
- **原项目主页**: [https://em-ide.com](https://em-ide.com)
- **原项目论坛**: [https://discuss.em-ide.com](https://discuss.em-ide.com)

