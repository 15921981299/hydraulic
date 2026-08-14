# 内容与关键词覆盖缺口计划（按优先级）

> 基于 2026-08 构建版本：421 个关键词（129 个有量，合计月量 150,940）× 202 个可索引页面逐词匹配。
> 全量数据：`outputs/content-gap-2026-08.csv`（421 行，含优先级/覆盖状态/建议动作/目标URL）。
>
> 实施进度（2026-08-02）：品牌×品类矩阵页已实现（46 页，17 个品牌，含新增 Caterpillar 品牌页），见第 3 章。

## 1. 覆盖判定方法

每个关键词按"页面是否包含该词"分为 8 级：

| 覆盖级别 | 数量 | 含义 |
| --- | ---: | --- |
| dedicated | 72 | 标题/H1 已含关键词 |
| title-partial | 82 | 标题/H1 覆盖大部分词，但词序或措辞不精确 |
| body-partial | 117 | 正文有覆盖，标题/H1 未体现 |
| body-only | 6 | 仅正文出现 |
| unmentioned | 87 | 有对应页但全页未出现关键词 |
| brand-category-gap | 22 | 品牌×品类组合页缺失（结构性缺口） |
| gap | 25 | 无对应页面 |
| excluded | 10 | 模糊缩写/无商业价值，已排除 |

## 2. 核心结论

1. **最大的结构性缺口是"品牌×品类"矩阵页**：原 68 个组合、合计月量 30,430。此项已完成（见第 3 章），剩余 22 个组合为无内容证据或超低量尾部。
2. **现有页面不缺关键词，缺的是标题/H1 和锚文本对齐**：205 个词条（title-partial + body-partial + body-only）落在已有页面上，其中 28 个有量的需要优先改标题（第 4 章）。
3. **真正零覆盖的词极少**（有量的仅 2 个），其余长尾集中在精确型号——属于"模型库扩容"问题，不是新页面问题（第 5 章）。
4. 数量级提醒：caterpillar parts（18,100）和 kawasaki parts（6,600）量大但多为非液压通用意图，实际可捕获量约 **5,700/月**；caterpillar 品牌页与矩阵页已上线，kawasaki parts 仍需内容证据支撑。

## 3. P0-1：品牌×品类矩阵页（已完成）

### 状态：✅ 已实现（46 页，17 个品牌）

- 路由：`/brands/{brand}/{category}/`，模板 `src/pages/brands/[slug]/[category].astro`，数据组装 `src/data/brand-category-pages.ts`。
- 每页含：系列表（按品类过滤）、精确型号记录、参数组、证据要求、应用场景、RFQ CTA、品牌/品类/系列三向互链。
- 只生成有真实内容证据的组合（品牌系列、型号记录或产品家族之一匹配品类）；无证据组合不生成，避免薄页面。
- 新增 Caterpillar 品牌页（`/brands/caterpillar/`），补齐最高量级品牌矩阵。
- 构建后 241 页、SEO 审计 0 错误、内链 0 断链；同时修复了 2 个历史断链。

### 3.1 已上线的高价值组合（按原关键词月量）

| 目标页面 | 关键词 | 月量 |
| --- | --- | ---: |
| `/brands/parker/hydraulic-pumps/` | parker hydraulic pump | 1,300 |
| `/brands/bosch-rexroth/hydraulic-pumps/` | bosch rexroth hydraulic pump | 720 |
| `/brands/bucher/hydraulic-pumps/` | bucher hydraulic pump | 590 |
| `/brands/eaton-vickers/hydraulic-pumps/` | eaton vickers hydraulic pump | 390 |
| `/brands/parker/hydraulic-motors/` | parker hydraulic motor | 390 |
| `/brands/parker/hydraulic-valves/` | parker hydraulic valve | 320 |
| `/brands/casappa/hydraulic-pumps/` | casappa hydraulic pump | 260 |
| `/brands/atos/hydraulic-valves/` | atos hydraulic valve | 170 |
| `/brands/parker/hydraulic-repair-kits/` | parker parts | 140 |
| `/brands/bucher/hydraulic-valves/` | bucher hydraulic valve | 140 |
| `/brands/bosch-rexroth/hydraulic-motors/` | bosch rexroth hydraulic motor | 110 |
| `/brands/hawe/hydraulic-valves/` | hawe hydraulic valve | 110 |
| `/brands/poclain/hydraulic-motors/` | poclain hydraulic motor | 110 |
| `/brands/caterpillar/hydraulic-pumps/` | caterpillar hydraulic pump | 110 |
| `/brands/bosch-rexroth/hydraulic-repair-kits/` | bosch rexroth parts | 90 |
| `/brands/kawasaki/hydraulic-pumps/` | kawasaki hydraulic pump | 90 |

其余低量组合（denison/nachi/linde/hydac/moog/yuken/danfoss × pump/motor/valve/parts，月量 0–50）已批量生成。

### 3.2 剩余缺口（22 个组合，月量 6,800）

| 关键词 | 月量 | 缺口原因 | 建议 |
| --- | ---: | --- | --- |
| kawasaki parts | 6,600 | Kawasaki 无 repair-kits 内容证据 | 给 Kawasaki 品牌页补 "parts" 定位文案；确认真实维修件供给后生成矩阵页 |
| caterpillar hydraulic motor | 20 | 无 CAT 电机系列/型号证据 | 暂缓；有真实 CAT 电机询盘记录后生成 |
| hydac / linde / denison / yuken / nachi / hawe / casappa / atos / moog × pump/valve/motor/parts | 0–40 | 无对应内容证据 | 暂缓，随模型库扩容自然补齐 |

## 4. P0-2：现有页面标题/H1 对齐（28 个有量词条）

| 关键词 | 月量 | 目标页面 | 建议 |
| --- | ---: | --- | --- |
| axial piston pump | 720 | `/products/hydraulic-pumps/axial-piston-pumps/` | 标题含 "Axial Piston Pump"，当前只写 "Hydraulic Piston Pump Supplier" |
| hydraulic cylinder supplier | 590 | `/products/hydraulic-cylinders/` | H1 或 H2 加入完整词序 "hydraulic cylinder supplier" |
| variable displacement pump | 480 | `/products/hydraulic-pumps/` | 正文无整词；建议泵页加独立章节或建专页（见 P2） |
| hydraulic cylinder replacement | 320 | `/products/hydraulic-cylinders/` | 增加 "replacement" 定位锚文本 |
| hydraulic pump supplier | 170 | `/products/hydraulic-pumps/` | H1 已有 supplier，补标题内完整词序 |
| hydraulic pump price | 140 | `/products/hydraulic-pumps/` | 增加 "price / quotation" 章节 + FAQ |
| hydraulic repair kit | 140 | `/products/hydraulic-repair-kits/` | 标题加入 "Repair Kit" |
| hydraulic valve supplier | 110 | `/products/hydraulic-valves/` | 同上 |
| hydraulic motor supplier | 90 | `/products/hydraulic-motors/` | 同上 |
| solenoid directional valve | 70 | `/products/hydraulic-valves/solenoid-directional-valves/` | 标题加入 "Solenoid Directional Valve" |
| hydraulic motor parts | 70 | `/products/hydraulic-motors/` | 增加 parts 章节 |
| hydraulic valve parts | 70 | `/products/hydraulic-valves/` | 增加 parts 章节 |
| hydraulic pump replacement | 50 | `/products/hydraulic-pumps/` | 增加 replacement 章节 + 内链到 cross-reference |
| hydraulic gear pump supplier | 40 | `/products/hydraulic-pumps/gear-pumps/` | 标题对齐 |
| hydraulic motor distributor | 30 | `/products/hydraulic-motors/` | 增加 distributor 支持章节 |
| hydraulic valve distributor | 20 | `/products/hydraulic-valves/` | 同上 |

规则：**一个关键词只改一个页面**，避免多个页面抢同一词；改完跑审计确认无重复标题。

## 5. P1：精确型号库扩容（模型页，非新页面）

- 24 个零量高价值型号长尾词（`mcr03`、`a10vo28dr/31r-psc61k40`、`02-102262`、`rsap2d12`、`r909152493`、`r910185973`、`169-4883...` 及各自的 replacement/supplier 变体）全部落在现有模型记录上。
- 证据门禁已移除：全部 36 条模型记录现已直接可索引并进入 sitemap，无需先补齐证据再上线。
- 节奏：上线前把记录质量与页面完整性补足；上线后每月新增 50–100 个。这组词是"每月 100 询盘"路径上最可规模化的流量来源。

## 6. P1：信息型指南补强

- 15 个可索引页面正文 <700 词（如 pump rotation/flange/shaft 588 词、cross-reference obsolete valve 594 词、piston motor types 654 词），扩到 1,200 词以上并补充规格表。
- 28 篇指南补发布日期与署名（审计已逐条标出）。
- 与旧站 hydparts.com 迁移配合：旧站排名词（hydrostatic pump、freezing point、schematic diagram 等）直接落到这些指南页，见 `docs/migration-plan.md`。

## 7. P2：需要新建的主题页（少量）

| 主题 | 月量 | 建议形态 |
| --- | ---: | --- |
| variable displacement pump | 480 | 泵分类下的独立指南页或专页（比塞进泵页更利于排名） |
| hydraulic pump / motor / valve cross reference | 10×3 | `/cross-reference/` 已覆盖，补齐锚文本即可，不建新页 |
| hydraulic motor / valve price | 20/10 | 加价格询盘 FAQ，不建新页 |
| caterpillar replacement | 50 | 品牌替换页（与矩阵页合并处理） |

## 8. 实施顺序（12 周）

| 周 | 任务 | 产出 |
| --- | --- | --- |
| 1–4 | 品牌×品类矩阵页模板 + 46 页上线 + 三向内链 | ✅ 完成（2026-08-02） |
| 3–6 | 第 4 章 28 个标题/H1 优化 + 锚文本 | 28 页优化 |
| 4–8 | 模型库证据补齐，5→50 个索引页 | 45 个新索引 URL |
| 6–10 | 指南扩写 15 篇 + 日期/署名补齐 | 15 页补强 |
| 8–12 | variable displacement pump 专页 + 首轮 GSC 复查 | 1 页 + 数据 |

## 9. 测量

每 4 周在 GSC 复查：

- 新上线 URL 的索引状态（矩阵页 + 模型页）
- 覆盖词条从 421 个词里实际进入前 20 的数量
- 曝光量环比（目标：矩阵页上线后 +30%/月）
- 询盘来源中"品牌词 + 型号词"占比（衡量内容质量而非泛流量）

### 矩阵页专项复查（上线后 4 周）

- `parker hydraulic pump`、`bosch rexroth hydraulic pump`、`caterpillar hydraulic pump` 是否进入前 50。
- 矩阵页是否产生真实询盘 CTA 点击（GA4 事件 `brand-{slug}-{category}`）。
- 若某组合 90 天无曝光，检查标题竞品密度，考虑并回品牌页，避免薄页累积。

## 10. 附：全量数据

- 机器可读清单：`outputs/content-gap-2026-08.csv`（keyword/volume/cpc/intent/cluster/priority/coverage/action/target）
- 关键词原始研究：`outputs/019f9822-178f-7111-bf18-920900df950f/Hydraulic-Match-KE-US-Keyword-Plan.xlsx`
