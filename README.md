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

### EIDE-F v3.26.1-F1 (基于原版 v3.26.1)

> 初始 Fork 版本

- 基于原版 v3.26.1 创建 Fork
- 保留原始功能完整性
- 准备进行个人定制开发

---

## 📋 计划功能 / TODO

- [ ] 待添加...

---

## 🛠️ 与原版的差异

本 Fork 版本以 **F** 后缀标识，表示这是一个分支更新版本。

| 特性 | 原版 EIDE | EIDE-F |
|------|-----------|--------|
| 插件后缀 | 无 | F |
| 维护者 | github0null | Cxxhh |
| 更新来源 | 原仓库 | 本 Fork + 同步原仓库 |

---

## 📚 原项目功能

本 Fork 继承了原版 EIDE 的所有功能：

- 支持 8051、STM8、Cortex-M、MIPS MTI、RISC-V、GCC 项目
- 支持导入 KEIL5/IAR/Eclipse 项目
- 支持安装标准 KEIL 芯片支持包（仅 Cortex-M 项目）
- 提供多种项目模板快速创建项目
- 构建、重建，支持多种工具链（armcc, gcc-arm-none-eabi, llvm-for-arm, riscv-gcc, keil_c51, sdcc 等）
- 程序烧录，支持：jlink, stlink, openocd, pyocd 等
- 使用 Cppcheck 进行静态检查
- 自动生成调试器插件配置
- 内置多种实用工具

更多功能详情请参阅 [原项目 README](./README_ORIGINAL.md)

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
- 感谢原项目的所有贡献者

---

## 📞 相关链接

- **本 Fork 仓库**: [https://github.com/Cxxhh/eide](https://github.com/Cxxhh/eide)
- **原仓库**: [https://github.com/github0null/eide](https://github.com/github0null/eide)
- **原项目主页**: [https://em-ide.com](https://em-ide.com)
- **原项目论坛**: [https://discuss.em-ide.com](https://discuss.em-ide.com)

