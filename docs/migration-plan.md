# hydparts.com → hydraulicmatch.com 迁移方案

> 目标：把旧域名已积累的排名、流量和外链权重完整转移到新站，迁移后询盘由 hydraulicmatch.com 统一承接。
>
> 状态：草案。前置条件（域名所有权、旧站访问、GSC权限）确认后按阶段执行。

## 0. 现状与前提

### 已知数据（Keywords Everywhere 快照）

| 项 | 值 |
| --- | --- |
| hydparts.com 估算美国月流量 | ~1,700 |
| hydparts.com 排名关键词总数 | 768 |
| 新站可索引页面 | 155（194 构建页） |
| 新站部署 | Cloudflare Pages/Workers（`_redirects` 可用） |

hydparts.com 前 20 个排名词几乎全部是信息型主题，且与新站 `/resources/` 指南高度重合：

| 旧站排名词 | 月量 | 旧站位置 | 新站对应页面（候选） |
| --- | ---: | ---: | --- |
| hydrostatic pump | 390 | 3 | `/resources/hydrostatic-pump-and-transmission-basics/` |
| hydraulic pump parts | 79 | 1 | `/products/hydraulic-pump-parts/` |
| pressure relief valve for hydraulic system | 52 | 1 | `/resources/hydraulic-pressure-relief-valve-function-adjustment/` |
| hydraulic pressure reducing valve adjustment | 52 | 1 | `/resources/hydraulic-pressure-reducing-valve-adjustment/` |
| hydraulic fluid freezing point | 52 | 1 | `/resources/hydraulic-fluid-freezing-point-and-cold-start/` |
| pump schematic diagram | 39 | 4 | `/resources/hydraulic-pump-schematic-symbols-circuits/` |
| hydraulic system schematic diagram | 28 | 2 | `/resources/hydraulic-system-schematic-diagram-guide/` |
| hydraulic circuit diagram | 28 | 2 | `/resources/hydraulic-system-schematic-diagram-guide/` |
| freezing point of hydraulic fluid | 28 | 2 | `/resources/hydraulic-fluid-freezing-point-and-cold-start/` |
| hydraulic pump relief valve | 20 | 3 | `/resources/hydraulic-pressure-relief-valve-function-adjustment/` |
| hydraulic directional control valve | 17 | 6 | `/products/hydraulic-valves/solenoid-directional-valves/` |
| hydraulic pump | 23 | 77 | `/products/hydraulic-pumps/` |
| piston motor | 21 | 4 | `/products/hydraulic-motors/axial-piston-motors/` |
| hydrostatic hydraulic pump | 21 | 1 | `/resources/hydrostatic-pump-and-transmission-basics/` |
| can hydraulic fluid freeze | 16 | 6 | `/resources/hydraulic-fluid-freezing-point-and-cold-start/` |

结论：旧站最值钱的是**信息型指南**，新站恰好已有对应页面，具备 1:1 映射条件，迁移风险低、收益明确。

### 必须确认的前置条件（任一未满足则暂停）

- [ ] hydparts.com 的域名所有权和注册商/DNS控制权
- [ ] hydparts.com 的 Google Search Console（GSC）owner 权限
- [ ] 旧站平台与托管信息（WordPress/自建/其他），决定重定向实现方式
- [ ] 新站已上线、GSC 已验证、sitemap 已提交、launch audit 已通过
- [ ] 确认单一域名策略（推荐），还是双站并行

## 1. 迁移目标与成功标准

### 目标

1. 旧站 top 关键词排名迁移到新站对应页面（尤其 5 个排名第 1 的词）。
2. 旧站流量权重转移到新站，迁移 4–8 周内新站总流量恢复到旧站 80% 以上。
3. 迁移后无大面积 404，旧站 sitemap 中每个 URL 都有 301 目标。
4. 询盘统一进入 hydraulicmatch.com 的 RFQ 流程。

### 成功标准（迁移后第 4 周检查）

| 指标 | 目标 |
| --- | --- |
| GSC 旧 URL 4xx 比例 | < 5%（旧 sitemap 中 URL） |
| 旧 top 20 关键词位置 | 无 10 名以上倒退，或新站对应页在 20 名内 |
| 新站总流量 | ≥ 旧站基线的 80% |
| 询盘数 | 与旧站同期持平或增长 |
| 重定向链 | 全部单跳 301 → 200 |

## 2. 策略选择

### 推荐：整站 301 → 单一域名

- 全量重定向，不保留旧站内容。
- 权重 100% 汇入新站；品牌名称统一为 Hydraulic Match。
- 适合新旧站主题一致的情况（本方案即如此）。

### 不推荐：双站并行

- 权重分散、两套内容重复维护、Google 可能判定重复内容。
- 仅当旧站有独立品牌价值（如域名即品牌）时考虑，本场景不适用。

## 3. 数据收集（第 1–2 周）

输出物：`outputs/migration/hydparts-crawl.csv` + `hydparts-gsc-pages.csv` + `hydparts-gsc-queries.csv`

### 3.1 旧站全量爬取

- 使用 Screaming Frog / Sitebulb（或等价工具）爬取 hydparts.com。
- 导出字段：URL、状态码、标题、H1、Word 数、内链数、图片数。
- 特别注意：旧站 sitemap.xml 中的全部 URL 必须在爬取结果中。

### 3.2 GSC 数据导出（16 个月）

- 性能报告 → 页面：Clicks / Impressions / CTR / Position。
- 性能报告 → 查询：Clicks / Impressions / CTR / Position。
- 索引覆盖报告：有效页面、排除页面、404 页面。

### 3.3 旧站技术档案

- 平台（WordPress 版本/主题，或静态站）。
- 现有重定向（.htaccess / nginx / 插件规则），避免链式重定向。
- DNS 是否已托管在 Cloudflare；旧站是否有 Cloudflare 代理。
- robots.txt、canonical 现状（确认没有双重 canonical 冲突）。

## 4. URL 映射（第 2–3 周）

输出物：`outputs/migration/redirect-map.csv`（模板见 `docs/migration-url-map.template.csv`）

### 4.1 映射优先级

| 优先级 | 判定 | 处理 |
| --- | --- | --- |
| P0 | GSC 有点击/排名前 20 的 URL | 必须 1:1 映射到最相关新页 |
| P1 | 关键词有月量但无点击 | 1:1 或映射到最近主题页 |
| P2 | 无流量、纯信息页 | 映射到主题页或父级 |
| P3 | 无用/临时页（搜索、标签、分页） | 301 到父级或首页 |

### 4.2 映射规则

1. **优先 1:1**：旧 URL → 新站语义最接近的页面。
2. **旧页内容比新页完整时**：先把旧内容合并进新页（见第 5 章），再上重定向。
3. **新站没有对应页**：列入内容补充清单，先建页后迁移（禁止用首页凑数）。
4. **无法映射的低价值页**：301 到父级目录；仍无意义则到首页。
5. **查询参数**：仅保留有业务含义的参数（如 `?product=`），其余丢弃或规范化。
6. **大小写/尾斜杠**：按新站 `trailingSlash: always` 规范统一为尾斜杠形式。

## 5. 内容补强（第 3–5 周，迁移前完成）

### 5.1 内容合并清单

对比旧站流量页与新站对应页，逐页判断：

- 旧页有而新页缺的章节/表格/实例 → 合入新页。
- 旧页被新页完整覆盖 → 不迁移正文，只做重定向。
- 保留旧页的图片资产时，确认授权与版权归属。

### 5.2 新站需要补充的页面（示例）

- `pascal's principle` 等旧站独有主题 → 新站建资源页或并入术语表。
- 旧站 product/part 页如果对应新站尚缺的精确型号 → 进入模型库证据门禁流程，达标的先上线。

## 6. 技术实施（第 4–6 周）

### 方案 A（推荐）：Cloudflare Bulk Redirects

适用于旧站 DNS 已托管或可迁入 Cloudflare（免费版即可）。

1. **建 Redirect List**：`hydparts-to-hydraulicmatch`，每行 `旧路径 → https://hydraulicmatch.com/新路径`（301）。
2. **建 Redirect Rule**：
   - 条件：`http.host == "hydparts.com"`（含 `www` 变体，先归一到 apex）。
   - 动作：301 到 list 中对应目标；未匹配项回退到首页。
3. **DNS 接入**：若旧站 DNS 不在 Cloudflare，先迁移 DNS（保留 MX 等记录），TTL 调低。
4. **旧站平台**：若仍可访问后台，关闭旧站内容输出，只保留重定向逻辑（或直接把旧站页面项目切换为 redirect-only Pages 项目）。

### 方案 B：旧站服务器端 301

适用于旧站 DNS 无法迁移的情况：

- WordPress：`.htaccess` / nginx `rewrite` 全量规则，或 Redirection 插件批量导入。
- 注意：与 Cloudflare 规则同时使用时避免双重重定向。

### 新站侧配合项

- 新站 `public/_redirects` 可加少量兜底规则（非必须，Bulk Redirects 已覆盖）。
- 新站 canonical 已按 `https://hydraulicmatch.com/` 输出，无需修改。
- 新站 sitemap 保持不变；迁移后重提 sitemap-index.xml。

## 7. QA 与预检（第 6 周）

- [ ] 全量检查重定向表：每行旧 URL 请求后返回单跳 301，最终目标 200。
- [ ] 抽样检查旧 top 20 流量 URL、旧 sitemap 全部 URL、典型图片 URL。
- [ ] 无重定向链（301→301→200 视为失败，需压成单跳）。
- [ ] 无循环重定向；`http/https`、`www/apex` 各组合都覆盖。
- [ ] 新站对应页在 GSC URL Inspection 中为"已编入索引"，无 canonical 冲突。
- [ ] 迁移演练：在预发环境/规则草稿模式验证后，再切生产。

## 8. 切换执行（第 7 周，一次性）

选旧站流量最低的时段（建议周日凌晨，欧美时区）。

1. 记录旧站+新站 GSC/GA4 基线（前 4 周均值）。
2. 发布 Bulk Redirects 规则（或服务器规则）。
3. 立即检查：旧首页、旧 top 10 流量页、新首页、sitemap。
4. 24 小时内不关规则；确认无异常后再清理旧站缓存/页面。

## 9. 迁移后监控（第 8 周起，持续 3 个月）

### 周检查（第 1–4 周）

- GSC 索引覆盖：旧 URL 的 4xx 数量、新 URL 收录速度。
- 新站性能报告：总点击、top 页面，与旧站基线对比。
- 排名抽查：旧 top 20 关键词在 GSC 的位置变化。

### 月检查（第 2–3 个月）

- 流量恢复曲线：第 4 周 ≥80%，第 8 周 ≥100% 为健康。
- 询盘来源归因：来自旧站跳转的会话占比。
- 重定向表复查：清理不再需要的例外规则。

### 红线与回滚

出现以下任一情况时暂停并评估回滚（回滚 = 关闭 Bulk Redirects 规则 / 恢复旧站 DNS）：

- 重定向循环或大面积 500。
- 新站关键页面被 Google 取消索引。
- 第 4 周新站流量 < 旧站 50% 且无改善趋势。

## 10. 时间线汇总

| 阶段 | 时间 | 产出 |
| --- | --- | --- |
| 数据收集 | 第 1–2 周 | 旧站爬取 + GSC/GA4 导出 |
| URL 映射 | 第 2–3 周 | redirect-map.csv（P0/P1 优先完成） |
| 内容补强 | 第 3–5 周 | 旧内容合并、新站补充页上线 |
| 技术实施 | 第 4–6 周 | Bulk Redirects / 服务器规则 |
| QA 预检 | 第 6 周 | 全量重定向测试通过 |
| 切换 | 第 7 周 | 规则上线，24h 确认 |
| 监控 | 第 8 周起 | 周报 + 月报，3 个月 |

## 11. 风险与失败模式

| 风险 | 后果 | 规避 |
| --- | --- | --- |
| 整站泛 301 到首页 | 权重无法传递、流量崩塌 | 必须 P0/P1 逐 URL 映射 |
| 旧页内容比新页好 | 用户跳出、排名回退 | 先合并内容再重定向 |
| 迁移早于新站成熟 | 新站承接不住流量 | 迁移以新站 launch audit 通过为前提 |
| 未处理查询参数/大小写 | 部分流量落到 404 | QA 阶段全量覆盖 |
| 新旧 canonical 冲突 | Google 选择错误 URL | 新站 canonical 已固定，QA 复验 |
| 双规则叠加（CF + 服务器） | 链式重定向 | 只启用一套机制 |

## 12. 本方案依赖的数据缺口

当前仅有关键词快照，以下数据需在阶段 3 补齐后才能定稿映射表：

- hydparts.com 实际 URL 清单与状态码（爬取）
- GSC 页面级点击/曝光（确定 P0 集合）
- 旧站平台类型（决定方案 A 还是 B）
- 旧站 sitemap 与 robots.txt 现状
