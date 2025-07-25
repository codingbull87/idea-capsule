# 第四阶段：数据模型设计 (Data Model Design)

---

## 本阶段目标与心智植入

**🎯 目标 (Goal):**
在编写任何API或数据库代码之前，定义好应用程序核心数据的"形状"(Schema)。你需要明确系统中有哪些核心"实体"(Entities)，每个实体有哪些属性，以及它们之间是如何关联的。

**🧠 心智植入 (Mindset-Implantation):**
你将学习到专业后端开发的一个核心思想：**数据先行 (Data-First)**。软件的很多复杂性都源于混乱的数据结构。在这一步，你将理解**"数据是应用的血液"**，学会像数据库管理员(DBA)一样思考，在系统动工前就规划好数据的结构、类型和约束，为后续开发打下坚实、清晰的基础。

---

## 使用说明：AI角色与交互契约

**🤖 AI 角色 (AI Persona):**
数据库管理员 / 后端设计师 (DBA / Backend Designer)。他/她精通数据建模，并强调规范与一致性。

**📝 交互契约 (Interaction Contract):**
*   **你的输入 (Your Input):**
    1.  你在**第一阶段**生成的**产品需求文档 (PRD)**。
    2.  你在**第二阶段**生成的**系统架构图 (Mermaid.js 代码)**。
    3.  你在**第三阶段**做出的**技术选型结论**。
*   **AI的输出 (AI's Output):**
    1.  一份详细的**数据字典 (Data Dictionary)**，使用Markdown表格展示。
    2.  一套清晰的**命名规范建议 (Naming Convention)**。

---

## 🚀 请复制并使用下面的 Prompt 开始你的第四步

**提示：** 请**从下一行分割线开始，完整复制所有内容**，并将【】中的占位符替换为对应阶段的产出，然后粘贴到你的AI对话框中。

---
你好，AI。

我们现在进入项目的**第四阶段：数据模型设计**。这是非常关键的一步。

**请你扮演一名经验丰富的数据库管理员(DBA)兼后端设计师**。你的任务是基于我们已经确定的产品需求、系统架构和技术选型，为我们的应用设计清晰、规范的数据模型。

这是我们前三个阶段的成果：

**1. 产品需求文档 (PRD):**
```markdown
【**请在这里完整粘贴你在第一阶段生成的PRD**】
```

**2. 系统架构图 (Mermaid.js 代码):**
```mermaid
【**请在这里粘贴第二阶段生成的Mermaid图的源代码**】
```

**3. 技术选型结论 (Tech Stack Choice):**
```
【**请在这里粘贴第三阶段AI为你推荐并经你确认的技术栈方案**】
```

根据以上全部信息，请为我完成以下任务：

1.  **识别核心实体 (Identify Core Entities):** 从PRD中分析并列出应用的核心数据实体，例如：用户(User)、文章(Post)、评论(Comment)等。

2.  **设计数据字典 (Design Data Dictionary):** 为每一个核心实体，使用Markdown表格的形式创建一个详细的数据字典。**请特别注意，数据字典中的"数据类型"必须符合我们在第三阶段选定的数据库技术**（例如，如果选择PostgreSQL，就使用`VARCHAR`, `INTEGER`；如果选择MongoDB，就使用`String`, `Number`）。表格应包含以下列：
    *   **字段名 (Field Name):** 数据库中的列名。
    *   **数据类型 (Data Type):** 例如 `VARCHAR(255)`, `INTEGER`, `BOOLEAN`, `TEXT`, `TIMESTAMP` 等。
    *   **是否可空 (Nullable):** `Yes` 或 `No`。
    *   **主键/外键 (Key):** 标识是否为 `Primary Key` 或 `Foreign Key (指向哪张表)`。
    *   **注释 (Comment):** 解释这个字段的用途。

3.  **描述实体关系 (Describe Relationships):** 在数据字典下方，用文字简要说明实体与实体之间的关系，例如："一个`User`可以有多篇`Post`（一对多关系）"。

4.  **建议命名规范 (Suggest Naming Convention):** 为了保持代码的一致性和可读性，请提出一套命名规范建议，至少包含：
    *   **数据库规范:** 表名和字段名（推荐 `snake_case`，例如 `user_profile`）。
    *   **API规范:** JSON载荷中的字段名（推荐 `camelCase`，例如 `userProfile`）。

请开始你的设计。我需要一份清晰、专业、可以直接作为后续开发依据的文档。 