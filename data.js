window.PORTFOLIO_DATA = {
  profile: {
    name: "张伟",
    role: "休闲游戏制作人 / 主策划",
    city: "成都 · 可到岗",
    experience: "11 年游戏研发",
    phone: "130-6633-0039",
    email: "1025652722@qq.com",
    education: "海南大学 · 本科 · 应用化学（2010–2014）"
  },

  heroStage: [
    {
      id: "captaincapy",
      label: "CaptainCapy",
      tag: "海外休闲 · 制作人 · 0→1 首测交付",
      company: "卓瀚科技 · 2026.04–2026.11",
      image: "assets/capy-spin.webp",
      title: "CaptainCapy",
      kpis: [
        { value: "6 周", label: "Demo 交付" },
        { value: "5 个月", label: "首测包上架" },
        { value: "100 万", label: "阶段消耗控制" }
      ],
      decision: "用 CM 转盘长线模型承接捕鱼吸量反馈；首测前果断砍除低触达卡牌系统，释放 20 人天程序与大量美术产能聚焦核心手感。"
    },
    {
      id: "guanguan",
      label: "关关难不住",
      tag: "国内小游戏 · 主策划 · IAA 规模化",
      company: "掌游天下 · 2025.08–2026.03",
      image: "assets/guanguan-1.webp",
      title: "关关难不住",
      kpis: [
        { value: "1,200 万", label: "单月新增" },
        { value: "35%", label: "次日留存" },
        { value: "¥11", label: "D30 LTV" }
      ],
      decision: "进入抖音小游戏热门榜前 10；面对起量瓶颈时同步扩充养成线并引入独立拼图新玩法入口，兼顾素材吸量与 IAA 回收。"
    },
    {
      id: "slime",
      label: "合合合英雄",
      tag: "海外长线 · 主策划 · 存量数值重构",
      company: "孚谦科技 · 2024.04–2024.11",
      image: "assets/slime-1.webp",
      title: "合合合英雄 / Slime Legion",
      kpis: [
        { value: "+30%", label: "ARPU 提升" },
        { value: "+25%", label: "人均时长提升" },
        { value: "15 人", label: "团队管理" }
      ],
      decision: "不动已有框架下局部平滑校准失衡英雄，按绿蓝紫橙红品质重新建立属性价值区间，并新增独立「领主」模块与 PvP 打开长线空间。"
    },
    {
      id: "mrbone",
      label: "六号特工",
      tag: "全球发行 · 数值策划 · 亿级流水爆款",
      company: "余香科技 · 2020.01–2021.07",
      image: "assets/mrbone-1.webp",
      title: "六号特工 / Mr.Bone",
      kpis: [
        { value: "1 亿+", label: "累计流水" },
        { value: "1,000 万+", label: "总新增用户" },
        { value: "50%+", label: "次日留存" }
      ],
      decision: "确立「卷轴循环关卡 + 按屏自动吸附、左右滑切敌」单手操作方案，以 3D 场景纵深把超休掩体射击改造成混变长线产品。"
    }
  ],

  flagships: [
    {
      id: "captaincapy",
      name: "CaptainCapy",
      shortTag: "海外 0→1",
      company: "卓瀚科技",
      period: "2026.04–2026.11",
      role: "制作人",
      team: "10 人团队（直管 9 人）",
      platformMarket: "海外手游 · IAP",
      stage: "立项 / 原型 / Demo / 首测包已上架",
      summary: "以 Coin Master 与 Monopoly GO 的长线资源循环为骨架，用高反馈 3D 捕鱼事件替代传统偷窃并强化买量吸量；在 10 人团队与有限预算内完成从概念到商店可测试包的全链路交付。",
      metrics: [
        { value: "6 周", label: "可演示 Demo 交付", accent: "amber" },
        { value: "5 个月", label: "完成海外首测包上架", accent: "emerald" },
        { value: "¥100 万", label: "首测输出阶段累计消耗（批复总预算 300 万）", accent: "sky" },
        { value: "20 人天", label: "裁剪卡牌释放的程序产能", accent: "default" }
      ],
      challenge: "整体品质和转盘/捕鱼操作手感必须直接对标海外头部标杆，同时 10 人团队要在半年内同步落地立项、美术资产化、Google Play 商店、IAP 支付与归因链路。",
      decisions: [
        "捕鱼手感与策略对标：设计限时 10 秒无限出网 +「乱撒网吓走大鱼、连网围捕」技巧与超级捕鱼状态，结合偷窃/炮击破坏建筑形成情绪闭环。",
        "版本范围严格裁剪：依据体验门槛、开发成本、商业价值三项评审，首测前果断删除低触达的卡牌系统，节省 20 人天程序工作量与大量美术需求。",
        "资产复用与 AI 管线：采用角色-骨骼复用解决岛屿与动物资产产能冲突，并在工作流中引入 AI 辅助文档整理、配置校验与素材候选。"
      ],
      retrospective: "0→1 阶段的核心纪律是「按验证价值分配产能」。所有不直接回答首测核心循环、留存与付费入口的系统都应后置，把全部打磨时间留给玩家前 15 分钟体验。",
      responsibilities: "立项架构设计、里程碑与 300 万预算节奏控制、全部数值内容与核心系统设计、跨程序/美术/发行验收。",
      gallery: [
        { src: "assets/capy-spin.webp", caption: "三重嵌套转盘主界面：体力倍率切换与海豹看板形象" },
        { src: "assets/capy-fish.webp", caption: "限时捕鱼偷窃事件：渔网撒网反馈与金币结算" },
        { src: "assets/capy-attack.webp", caption: "炮击破坏建筑与护盾反击：制造好友社交对抗" },
        { src: "assets/capy-island.webp", caption: "世界各地主题渔场岛屿建设与里程碑解锁" }
      ]
    },
    {
      id: "guanguan",
      name: "关关难不住",
      shortTag: "千万新增",
      company: "掌游天下",
      period: "2025.08–2026.03",
      role: "主策划",
      team: "5 人核心团队（直管 4 人）",
      platformMarket: "国内小游戏 · IAA",
      stage: "立项 / 原型 / 首测 / 上线运营中",
      summary: "肉鸽塔防小游戏（抖音小游戏热门榜前 10）。在 5 人精锐研发配置下完成从立项到大规模买量放量，用关卡节奏、塔防养成线与局内随机选择共同承接千万级新增。",
      metrics: [
        { value: "1,200 万", label: "单月新增用户规模", accent: "amber" },
        { value: "35%", label: "次日留存率", accent: "emerald" },
        { value: "¥1.2", label: "IAA ARPU", accent: "sky" },
        { value: "¥11", label: "D30 用户 LTV", accent: "default" }
      ],
      challenge: "国内小游戏买量进入放量期后迅速遭遇增长与回收瓶颈：首日玩家理解门槛容错极低，单纯增加广告曝光会破坏体验并压低长线留存。",
      decisions: [
        "突破起量瓶颈双引擎：先扩充局外养成线与周边收藏系统稳住中长线目标，再引入独立新玩法（拼图背包叠加塔防）打造差异化买量素材卖点。",
        "商业化嵌进关卡节奏：围绕复活、关键资源与刷新机会部署 IAA 广告点，根据关卡难度曲线、观看率与留存损耗动态校准投放节奏。",
        "前期单点策略聚焦：压缩前几关需要同时判断的维度，确保失败可归因、爽感可复现。"
      ],
      retrospective: "小游戏的关卡节奏本质上就是商业结构。流量放大考验的不是单一玩法有多炫，而是首日理解成本、7 日留存曲线和广告回收能否咬合在同一个循环里。",
      responsibilities: "主导立项与核心系统框架、关卡波次与难度节奏、全部塔防数值及局内外成长数值、IAA 广告节奏协同。",
      gallery: [
        { src: "assets/guanguan-1.webp", caption: "密集弹幕与多职业防线协同的爽快塔防战斗" },
        { src: "assets/guanguan-2.webp", caption: "策略卡关与波次压力设计：43 关高压攻坚界面" },
        { src: "assets/guanguan-3.webp", caption: "独立扩展玩法入口：空间拼图叠塔与战力叠加" },
        { src: "assets/guanguan-4.webp", caption: "关卡与局外养成联动推进" }
      ]
    },
    {
      id: "slime",
      name: "合合合英雄 / Slime Legion",
      shortTag: "存量重构",
      company: "孚谦科技",
      period: "2024.04–2024.11",
      role: "主策划",
      team: "15 人团队（直管 14 人）",
      platformMarket: "海外手游 · 长线运营中",
      stage: "长线运营大版本重构",
      summary: "接手进入长线运营阶段的海外二合塔防产品。面对历史版本累积的英雄强弱失衡与资源价值混乱，在不推翻现有系统框架的前提下完成经济账本梳理、品质区间重塑及全新长线模块落地。",
      metrics: [
        { value: "+30%", label: "上线后 ARPU 相对提升", accent: "amber" },
        { value: "+25%", label: "人均在线时长相对提升", accent: "emerald" },
        { value: "15 人", label: "统筹跨职能团队规模", accent: "sky" },
        { value: "5 阶品质", label: "绿→红统一属性强度尺度", accent: "default" }
      ],
      challenge: "产品经历多轮历史投放与叠加更新，金币/钻石/体力/养成材料产销失衡、部分老英雄强度远超品质定位，若推翻重构则会严重冲击存量老玩家且研发周期不可控。",
      decisions: [
        "稳态校准与尺度重建：保留既有系统框架，盘点全资源来源与缺口后对明显过强英雄做局部平滑调整；按绿(20/100)→蓝(25/120)→紫(30-32/150)→橙红(50-60/250-350)重设新英雄数值演进模型。",
        "补齐独立长线追求：设计并上线独立「领主」养成模块，配套推出 PvP 竞技系统与大版本运营活动，为老用户重建高阶成长与竞争目标。"
      ],
      retrospective: "成熟产品的存量调优最忌讳「拍脑袋加系统」或「粗暴推翻」。必须先算清已有资源账本与强度坐标系，让历史内容重新可比较，新模块的商业增量才能稳步释放。",
      responsibilities: "大版本核心功能设计、部分运营活动设计、全资源产销盘点、英雄品质强度演算与领主/PvP 系统落地。",
      gallery: [
        { src: "assets/slime-1.webp", caption: "主视觉与多角色阵营识别" },
        { src: "assets/slime-2.webp", caption: "棋盘合成与防守波次战斗界面" },
        { src: "assets/slime-3.webp", caption: "冰冻控制、技能配合与数值伤害爆发验证" }
      ]
    },
    {
      id: "mrbone",
      name: "六号特工 / Mr.Bone",
      shortTag: "1 亿+ 流水",
      company: "余香科技",
      period: "2020.01–2021.07",
      role: "数值策划（带 2 人）",
      team: "12 人团队（直管 2 人）",
      platformMarket: "国内首发 → 海外 · IAA / 混变",
      stage: "立项 / 首测 / 上线 / 长线运营",
      summary: "将超休闲掩体射击玩法成功改造为千万新增、流水破亿的中重度混变产品。主导立项架构、经济与成长数值体系及武器技能深度，并在长线运营期沉淀出极具价值的品类变现复盘。",
      metrics: [
        { value: "1 亿+", label: "项目累计流水", accent: "amber" },
        { value: "1,000 万+", label: "累计新增用户", accent: "emerald" },
        { value: "50%+ / 20%", label: "次留 / 周留（月留 7.5%）", accent: "sky" },
        { value: "¥4.1", label: "IAA ARPU（广告 15+ 次）", accent: "default" }
      ],
      challenge: "超休闲掩体射击单局重复度高、缺乏长线成长深度；同时早期在如何兼顾单手极简操作与策略切换上存在较大方案分歧。",
      decisions: [
        "操控手感关键取舍：放弃复杂虚拟摇杆，确立「按住屏幕自动吸附瞄准、左右滑动切换目标」的单手操控方案，结合卷轴式循环关卡与 3D 纵深场景增强代入感。",
        "长线养成支撑月留：构建枪械、角色、技能与天赋多层成长深度，配合活动模式让产品月留稳定至 7.2%–8.8%。"
      ],
      retrospective: "一线商业教训同样深刻：射击类产品在主流广告网络缺少高出价买主，导致品类变现 eCPM 天然偏低，且偏卡通低龄画风会进一步影响广告主出价结构；追求高 eCPM 需优先布局放置或 RPG 赛道。",
      responsibilities: "立项架构设计、全部经济与战斗数值内容、核心功能与关卡框架确定、内购及出海运营调优支持。",
      gallery: [
        { src: "assets/mrbone-1.webp", caption: "多样化武器库与试玩体验引导" },
        { src: "assets/mrbone-2.webp", caption: "3D 纵深掩体射击与卷轴推进战斗" },
        { src: "assets/mrbone-3.webp", caption: "Boss 战与局内 Roguelike 技能构筑" },
        { src: "assets/mrbone-4.webp", caption: "角色成长与外观收集体系" }
      ]
    },
    {
      id: "xiaobing",
      name: "小兵别嚣张",
      shortTag: "2 亿+ 流水",
      company: "余香科技",
      period: "2019.08–2020.07",
      role: "数值策划",
      team: "10 人团队",
      platformMarket: "国内首发 → 海外 · IAA / 混变",
      stage: "立项 / 首测 / 上线 / 长线运营",
      summary: "合成放置塔防标杆产品，累计流水突破 2 亿元。负责全部数值内容与玩法循环原型改造，通过非线性难度曲线与前期精细调优实现次留 60%+ 与 7 日 ROI 高效回收。",
      metrics: [
        { value: "2 亿+", label: "项目累计流水", accent: "amber" },
        { value: "60.29%", label: "平均次日留存（周留 21.2%）", accent: "emerald" },
        { value: "265.77", label: "平均广告 ECPM（最高 318）", accent: "sky" },
        { value: "¥5.54–6.5", label: "IAA ARPU（广告 20+ 次）", accent: "default" }
      ],
      challenge: "放置合成塔防极其容易在中后期出现数值指数爆炸与膨胀失控；同时项目绝大部分 ROI 必须在前 7 天通过广告完成回收。",
      decisions: [
        "前中期关卡精调决定 ROI：反复跑测打磨前 7 天关卡平滑度与流失节点，次留稳定在 60% 左右，周留从 19.7% 提升至 21.7%。",
        "广告点位拆分抬升 ECPM：发现单一广告位频次过高会导致 ECPM 急剧衰减，且广告次数存在最优 ARPU 区间；通过拆分多广告点位与周期性重置策略，将 ECPM 从 196.49 拉升至 315.68。"
      ],
      retrospective: "增加外围周边系统对整体留存几乎没有帮助，唯有围绕核心玩法的节奏精调与新鲜战斗体验，才能真正撬动 1~7 日留存与广告价值。",
      responsibilities: "玩法循环原型改造、全部经济/战斗/非线性难度数值、卡牌等养成系统规则制定与阶段数据复盘。",
      isBlueprint: true,
      blueprintSeries: [
        { ver: "阶段 1", d1: 60.21, d7: 23.75, arpu: 5.21, ecpm: 196.49 },
        { ver: "阶段 2", d1: 60.19, d7: 20.50, arpu: 5.12, ecpm: 193.90 },
        { ver: "阶段 3", d1: 60.77, d7: 19.75, arpu: 4.43, ecpm: 195.06 },
        { ver: "阶段 4", d1: 59.50, d7: 20.85, arpu: 5.73, ecpm: 317.99 },
        { ver: "阶段 5", d1: 60.72, d7: 21.68, arpu: 6.06, ecpm: 300.63 },
        { ver: "阶段 6", d1: 60.39, d7: 21.21, arpu: 6.02, ecpm: 315.68 }
      ]
    }
  ],

  archiveProjects: [
    {
      id: "captaincapy",
      name: "CaptainCapy",
      company: "卓瀚科技",
      period: "2026.04–2026.11",
      role: "制作人",
      team: "10 人（直管 9 人）",
      platform: "海外手游 · IAP",
      status: "首测包已上架",
      category: "flagship",
      categoryLabel: "商业代表作",
      highlight: "6 周 Demo / 5 个月首测包 / 100 万阶段消耗",
      image: "assets/capy-spin.webp",
      gallery: ["assets/capy-spin.webp", "assets/capy-fish.webp", "assets/capy-attack.webp", "assets/capy-island.webp"],
      scope: "立项架构设计、里程碑与 300 万预算管控、全部数值与系统设计、发行及跨团队统筹。",
      challenge: "10 人小团队在有限周期内既要实现媲美头部产品的转盘捕鱼手感，又要同步打通商店、支付与归因。",
      decision: "用捕鱼玩法替代传统偷窃做差异化吸量；首测前果断删除卡牌系统，释放 20 人天程序工作量与大量美术资源；角色骨骼复用提效。",
      result: "连续 6 个里程碑按期交付，首测输出阶段消耗约 100 万元，首测包已上架待启动投放测试。"
    },
    {
      id: "guanguan",
      name: "关关难不住",
      company: "掌游天下",
      period: "2025.08–2026.03",
      role: "主策划",
      team: "5 人（直管 4 人）",
      platform: "国内小游戏 · IAA",
      status: "运营中（抖音热门前 10）",
      category: "minigame",
      categoryLabel: "国内小游戏",
      highlight: "单月新增 1,200 万 · 次留 35% · D30 LTV ¥11",
      image: "assets/guanguan-1.webp",
      gallery: ["assets/guanguan-1.webp", "assets/guanguan-2.webp", "assets/guanguan-3.webp", "assets/guanguan-4.webp"],
      scope: "立项与系统框架设计、全部塔防数值、关卡节奏及部分系统落地。",
      challenge: "放量期遇增长瓶颈后，需同时兼顾买量素材吸量度、前七日留存与广告回收效率。",
      decision: "扩充局外养成与周边系统稳固留存，同时加入独立新玩法（拼图叠塔）打开新获客入口。",
      result: "进入抖音小游戏热门榜前 10，单月新增 1,200 万，IAA ARPU ¥1.2，D30 LTV ¥11（引力引擎 2026.3 月数据）。"
    },
    {
      id: "fangxian",
      name: "防线叠叠叠",
      company: "掌游天下",
      period: "2025.04–2025.08",
      role: "主策划",
      team: "5 人（直管 4 人）",
      platform: "国内小游戏 · IAA",
      status: "已停服（导量百万验证）",
      category: "minigame",
      categoryLabel: "国内小游戏",
      highlight: "拼图背包 + 肉鸽 + 中心塔防验证，导量百万新增",
      image: "assets/fangxian-1.webp",
      scope: "创新原型立项架构、全部战斗与成长数值、部分系统设计。",
      challenge: "在有限小游戏包体和首日理解阈值内，融合拼图空间管理、肉鸽随机词条与塔防防御。",
      decision: "围绕双路防线与核心生命值构建简洁战局反馈，跑通玩法组合的买量转化与前期数值验证。",
      result: "成功导量百万级新增用户并沉淀完整优化方法论，为后续《关关难不住》的规模化爆发奠定基础。"
    },
    {
      id: "slime",
      name: "合合合英雄 / Slime Legion",
      company: "孚谦科技",
      period: "2024.04–2024.11",
      role: "主策划",
      team: "15 人（直管 14 人）",
      platform: "海外手游 · 长线运营",
      status: "运营中",
      category: "flagship",
      categoryLabel: "商业代表作",
      highlight: "ARPU +30% · 人均时长 +25%（AppMagic）",
      image: "assets/slime-1.webp",
      gallery: ["assets/slime-1.webp", "assets/slime-2.webp", "assets/slime-3.webp"],
      scope: "大版本核心功能设计、部分运营活动、英雄品质与资源价值重校准。",
      challenge: "长期运营积累的历史数值缺乏统一尺度，英雄强弱错配且老玩家缺乏新成长目标。",
      decision: "不推翻旧框架，局部平滑校准超标英雄并重设绿到红品质数值模型；新增独立「领主」模块及 PvP 系统。",
      result: "2024.05–2024.12 周期内，ARPU 提升 30%，人均时长提升 25%。"
    },
    {
      id: "zombie",
      name: "Zombie Outpost: Lucky Defense",
      company: "孚谦科技",
      period: "2024.08–2024.12",
      role: "主策划",
      team: "8 人（直管 7 人）",
      platform: "海外手游 · 混合塔防",
      status: "原型 / Demo 停测",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "海外丧尸题材 Lucky Defense 玩法原型与随机战斗验证",
      image: "assets/zombie-1.webp",
      scope: "立项架构设计、全部战斗与概率数值、部分系统设计及 7 人团队统筹。",
      challenge: "将高随机性幸运塔防机制与欧美丧尸射击题材结合，平衡随机挫败感与爽快爆发点。",
      decision: "采用 3D 俯视角枪械+技能爽快清屏包装，把核心随机合成概率与波次成长曲线做进可玩 Demo。",
      result: "4 个月内完成立项、可玩原型与海外 Demo 验证，沉淀 Lucky-like 品类数值演进经验。"
    },
    {
      id: "mrbone",
      name: "六号特工 / Mr.Bone",
      company: "余香科技",
      period: "2020.01–2021.07",
      role: "数值策划",
      team: "12 人（直管 2 人）",
      platform: "国内首发 → 海外 · IAA / 混变",
      status: "累计流水 1 亿+",
      category: "flagship",
      categoryLabel: "商业代表作",
      highlight: "总新增 1,000 万+ · 总流水 1 亿+ · 次留 50%+",
      image: "assets/mrbone-1.webp",
      gallery: ["assets/mrbone-1.webp", "assets/mrbone-2.webp", "assets/mrbone-3.webp", "assets/mrbone-4.webp"],
      scope: "立项架构设计、全部数值内容、核心系统设计及出海运营调优。",
      challenge: "如何把轻度超休闲掩体射击改造成具备长留与混变潜力的中度产品。",
      decision: "确立「按屏自动吸附 + 左右滑动切敌」与卷轴循环关卡推进，构建枪械/角色/技能长线养成。",
      result: "总新增 1,000 万+，总流水 1 亿+，次留 50%+，周留 20%，月留 7.5%，IAA ARPU ¥4.1。"
    },
    {
      id: "xiaobing",
      name: "小兵别嚣张",
      company: "余香科技",
      period: "2019.08–2020.07",
      role: "数值策划",
      team: "10 人",
      platform: "国内首发 → 海外 · IAA / 混变",
      status: "累计流水 2 亿+",
      category: "flagship",
      categoryLabel: "商业代表作",
      highlight: "总新增 500 万+ · 总流水 2 亿+ · 次留 60%+",
      isBlueprint: true,
      scope: "全部数值内容设计、非线性难度曲线、卡牌养成规则与多广告位 ECPM 调优。",
      challenge: "放置合成品类的数值指数膨胀控制与前 7 日高比例 ROI 回收。",
      decision: "死磕前中期关卡体验打磨并将单一广告位拆分为多场景点位，配合周期重置显著抬升 ECPM。",
      result: "总新增 500 万+，总流水 2 亿+，次留 60.29%，周留 21.21%，广告 20+ 次，ECPM 265.77。"
    },
    {
      id: "sushi",
      name: "Idle Sushi House",
      company: "余香科技",
      period: "2023.06–2023.08",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 模拟经营",
      status: "已上线至首测 / 后停服",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "模拟经营海外发行；验证高反差经营素材转化与正向回收能力",
      image: "assets/sushi-1.webp",
      scope: "立项架构、全部数值内容与部分系统设计，统筹 5 个章节场景快速交付。",
      challenge: "在同质化极高的模拟经营赛道中跑通海外主流信息流投放的正向回收模型。",
      decision: "打造「单客服务→客流涌入→店员疲惫→扩招缓解」高反差买量素材，强化经营节奏爽点。",
      result: "素材点击率稳定，核心地区变现 eCPM 显著高于买入成本，完成从原型到上线全流程。"
    },
    {
      id: "shooting",
      name: "Idle Shooting Range",
      company: "余香科技",
      period: "2023.05–2023.06",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 模拟经营",
      status: "CPA 验证后止损下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "1 个月快测识别主流信息流吸量短板，及时止损未扩投入",
      image: "assets/shooting-1.webp",
      scope: "立项架构、经济数值与海外买量测试复盘。",
      challenge: "验证靶场硬核题材套用轻度模拟经营框架在海外主流信息流的买量表现。",
      decision: "通过分渠道归因拆解识破综合点击率虚高、主流信息流吸量弱且买入成本偏高的问题，果断否决后续制作。",
      result: "仅用 1 个月低成本完成市场验证与精准止损，避免后续高成本资产投入。"
    },
    {
      id: "autoshop",
      name: "Idle Auto Shop",
      company: "余香科技",
      period: "2023.03–2023.04",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 模拟经营",
      status: "CPA 测试验证后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "汽修题材海外买量与商业化验证；广谱年轻用户接受度高",
      image: "assets/autoshop-1.webp",
      scope: "立项架构、车辆维修流水线经济数值及内购与买量测试分析。",
      challenge: "汽车维修多工位排队、升级与内购付费点在轻度模拟经营中的协同。",
      decision: "录制「等级提升场景变化」与「元素解锁扩张」核心录屏素材投放，验证广谱年轻用户受众。",
      result: "多地区卖出 eCPM 接近或高于买入成本，验证了该题材与玩法结构的高接受度。"
    },
    {
      id: "forts",
      name: "Idle Forts Defense",
      company: "余香科技",
      period: "2022.11–2023.02",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 放置塔防",
      status: "海外 ROI 测试验证",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "海外重点地区 CPI $0.89（CVR 2.27%）；聚合变现优化后 eCPM +80%",
      image: "assets/forts-1.webp",
      scope: "立项架构、中心要塞防线数值及海外投放 ROI 验证。",
      challenge: "降低欧美地区塔防买量单价的同时改善聚合广告变现收益。",
      decision: "先验证录屏买量可行性再控研发投入；针对性优化广告聚合层，使核心地区卖出 eCPM 提升约 80%。",
      result: "核心测试区 CPI 压至 $0.89，沉淀出「低成本录屏测量 + 观测真实长线再扩研发」的精益立项规范。"
    },
    {
      id: "candy",
      name: "Idle Candy Empire",
      company: "余香科技",
      period: "2022.12–2023.01",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 大富翁+塔防经营",
      status: "原型快测后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "2 个月快速验证「大富翁走格子 × 糖果模拟经营」融合效果",
      image: "assets/candy-1.webp",
      scope: "融合玩法立项架构、棋盘产销数值与海外 CPA 快速测试。",
      challenge: "验证大富翁随机走格子机制能否提升模拟经营的长期目标感与吸量力。",
      decision: "用最小可行原型跑通走格产出→糖果帝国建设→防御循环后直接投放测验。",
      result: "2 个月内完成融合机制可行性判断并快速沉淀数据，及时切向更高 ROI 赛道。"
    },
    {
      id: "popclash",
      name: "PopClash!",
      company: "余香科技",
      period: "2022.09–2022.10",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 消除对冲",
      status: "海外首测验证后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "海外测试次留 38.2%、D3 19.6%、首日时长 30.15 分钟",
      image: "assets/popclash-1.webp",
      scope: "立项架构、消除兵力对冲战斗数值与海外首测调优。",
      challenge: "消除+兵线对冲机制虽有较好后端留存，但海外买量 CPI 显著高于标准线。",
      decision: "复用高表现升级效果录屏优化投放组，将次留从 22% 拉升至 38.2%、时长从 12 分提至 30.15 分。",
      result: "后端留存达标但 CPI（$3.25）仍高于 $0.8 门槛，果断依据数据纪律止损。"
    },
    {
      id: "balloon",
      name: "Balloon Adventures",
      company: "余香科技",
      period: "2022.01–2022.09",
      role: "主策划",
      team: "10 人（直管 9 人）",
      platform: "海外手游 · 地图探索模拟经营",
      status: "三轮海外测试后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "三轮海外调优：副本岛参与度 9.97%→23.47%，次留 37.18%",
      image: "assets/balloon-1.webp",
      scope: "立项架构、地图体力消耗与剧情线结合设计、10 人团队统筹与三轮海外测试迭代。",
      challenge: "平衡模拟经营线性地图探索的体力消耗节奏、剧情引导流失与海外中年女性受众吸量单价。",
      decision: "历经 3 轮测试精细调优中后期岛屿探索与副本参与度（提升超 135%），持续验证素材方向。",
      result: "次留达 37.18%、三留 20.28%、首日时长 21.6 分钟；因平均 CPI $2.03 高于 $0.8 预期线于三测后理性收口。"
    },
    {
      id: "farm",
      name: "Idle Farm Grazing",
      company: "余香科技",
      period: "2023.09–2023.11",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 牧场经营",
      status: "原型快测后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "高饱和度牧场解压割草/放牧题材原型快速验证",
      image: "assets/farm-1.webp",
      scope: "立项架构、全部产销与牧场扩张数值、核心系统设计。",
      challenge: "在 2 个月短周期内搭建清爽解压的牧场放牧与资源循环体验。",
      decision: "聚焦牛羊鸡多区域放牧与割草可视化成长反馈，以最小资源验证题材海外接受度。",
      result: "2 个月完成完整原型与视觉资产测试。"
    },
    {
      id: "salon",
      name: "Idle Salon",
      company: "余香科技",
      period: "2023（海外模拟经营矩阵）",
      role: "主策划",
      team: "6 人（直管 5 人）",
      platform: "海外手游 · 美容沙龙经营",
      status: "原型验证",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "女性向 Before/After 反差改造题材的海外模拟经营原型",
      image: "assets/salon-1.webp",
      scope: "立项架构、店铺解锁与服务流程数值设计。",
      challenge: "将欧美女性向 Makeover（改造前/后反差）情绪点融入轻度模拟经营骨架。",
      decision: "在核心流水线与素材展示中突出 Before / Now 视觉蜕变，融入标准化模拟经营骨架，测试女性休闲用户吸量效率。",
      result: "沉淀女性向模拟经营品类模板与素材验证经验。"
    },
    {
      id: "boomball",
      name: "BoomBall（首版 & FC 版）",
      company: "余香科技",
      period: "2021.07–2022.01",
      role: "数值策划 → 主策划",
      team: "10 人 → 6 人（直管 5 人）",
      platform: "国内 iOS / 海外 · 向上弹射射击",
      status: "原型验证后下线",
      category: "prototype",
      categoryLabel: "海外原型验证",
      highlight: "国内 iOS 首版次留 43%、周留 14%、广告 10 次；FC 版尝试红白机差异化",
      image: "assets/boomball-1.webp",
      scope: "立项架构、关卡敌人控制方式、全部数值与系统设计；从带 2 人晋升为全面带队主策划。",
      challenge: "首版解决竖屏向上弹射射击的敌人节奏控制；FC 改版挑战以红白机像素复古质感突围海外市场。",
      decision: "首版跑通国内 iOS 次留 43% 后，团队尝试 FC 复古题材重构测试海外付费率（1%）与留存（30%）。",
      result: "完成从小主策到独立带队主策划的职能跨越，并用严谨指标对比否决未达标方向。"
    },
    {
      id: "mecha",
      name: "未来机甲决战",
      company: "麦驰网络",
      period: "2017.08–2019.07",
      role: "数值策划",
      team: "12 人",
      platform: "国内手游 · 战棋 RPG",
      status: "已停服（曾完成首测）",
      category: "slg",
      categoryLabel: "SLG 与战棋",
      highlight: "独立搭建战棋「机甲 + 机师」双线养成与战斗数值体系",
      image: "assets/mecha-1.webp",
      scope: "全部战斗公式、经济体系与系统养成数值设计。",
      challenge: "在有限团队规模下保障战棋策略深度、双养成线平衡以及中重度二次元机甲品质感。",
      decision: "设计「机甲硬件 + 机师技能羁绊」双维度交叉验证框架，确保不同策略流派间的战力均衡。",
      result: "独立完成整套战棋经济与战斗数值落地，支撑项目顺利完成原型至首测上线。"
    },
    {
      id: "jiuzhou",
      name: "九州劫",
      company: "多益网络",
      period: "2016.05–2017.08",
      role: "数值策划",
      team: "20 人",
      platform: "国内手游 · 沙盘 SLG",
      status: "运营中（月流水千万级）",
      category: "slg",
      categoryLabel: "SLG 与战棋",
      highlight: "沙盘 SLG 战斗与经济数值构建，项目月流水达 1,000 万",
      image: "assets/jiuzhou-1.webp",
      isLandscape: true,
      scope: "参与 SLG 沙盘战斗公式验证、武将技能与资源产销平衡数值设计。",
      challenge: "如何把创新性的单人剧情沙盘玩法与传统大地图强对抗 SLG 数值自然结合。",
      decision: "建立严谨的资源产销闭合模型与多武将组合战斗模拟，保证单人开荒期与国战期平滑衔接。",
      result: "项目成功上线并长线运营至今，月流水达 1,000 万元级。"
    }
  ],

  insights: [
    {
      index: "01",
      tag: "留存与 ROI 本质",
      title: "前 7 天留存与 ROI 由核心关卡平滑度决定，外围系统救不了留存",
      body: "多款亿级流水产品的线上复盘证实：外围周边系统对整体留存几乎没有提升。唯有不断打磨前中期关卡理解成本与非线性难度平滑度，才能稳住 60%+ 次留、20% 周留，在 7 天内完成 IAA 回收。"
    },
    {
      index: "02",
      tag: "IAA 商业化规律",
      title: "广告不是越多越好：存在最优 ARPU 区间，拆分点位可抬升 ECPM",
      body: "同一广告位反复展示会导致 ECPM 断崖式下跌，且不同品类在主流广告网络的出价天花板差异显著。通过拆分多场景广告点位、定期重置广告位，我们将核心产品 ECPM 从 196 拉升至 318，同时控制单用户频次避免负体验。"
    },
    {
      index: "03",
      tag: "海外快测与止损",
      title: "用 1 周信息流买量回答的问题，绝不先投入 3 个月重度研发",
      body: "在海外休闲矩阵建立严格决策阈值（如核心区 CPI <$0.8、安装率 >3% 及格）。通过分渠道归因识破局部渠道虚高后 1 个月及时止损；在 0→1 首测前果断砍除低触达系统，释放 20 人天研发产能聚焦核心循环。"
    },
    {
      index: "04",
      tag: "存量长线调优",
      title: "成熟产品忌讳暴力推翻：先建价值坐标再做局部重构",
      body: "接手长线运营的成熟产品时，不盲目推翻已有框架，而是先盘点金币/钻石/材料全账本、按绿到红品质重定新英雄属性区间，并用局部平滑校准修正失衡老英雄，最后叠加「领主+PvP」打开新增长曲线（ARPU +30%）。"
    }
  ],

  timeline: [
    {
      period: "2015.05–2017.06",
      company: "多益网络",
      role: "数值策划",
      team: "20 人项目组 · 独立数值模块",
      project: "《九州劫》（月流水 1,000 万）",
      desc: "打牢大型沙盘 SLG 战斗公式验证与宏观经济产销平衡基本功。"
    },
    {
      period: "2017.07–2019.07",
      company: "广州麦驰网络",
      role: "数值策划",
      team: "12 人团队 · 独立负责全部数值",
      project: "《未来机甲决战》（战棋 RPG）",
      desc: "独立构建复杂战棋战斗公式与「机甲+机师」双养成经济体系，带通完整首测流程。"
    },
    {
      period: "2019.08–2023.11",
      company: "成都余香科技",
      role: "数值策划 → 主策划",
      team: "管 2 人 → 独立带 6–10 人",
      project: "《小兵别嚣张》(2 亿+) ·《六号特工》(1 亿+) · 11 款海外原型",
      desc: "从两款亿级流水爆款的核心数值起步，成长为带队统筹立项、买量测试与商业化的海外休闲主策划。"
    },
    {
      period: "2024.03–2025.03",
      company: "成都孚谦科技",
      role: "主策划",
      team: "直管 7–14 人跨职能团队",
      project: "《合合合英雄》(ARPU +30%) ·《Zombie Outpost》",
      desc: "兼顾海外长线存量重构与 Lucky-like 创新原型快测，跑通大型团队大版本敏捷交付。"
    },
    {
      period: "2025.04–2026.03",
      company: "掌游天下（成都）",
      role: "主策划",
      team: "5 人精锐核心团队（直管 4 人）",
      project: "《防线叠叠叠》·《关关难不住》(单月新增 1,200 万)",
      desc: "主攻国内抖音小游戏赛道，以极精简人手从 0→1 打出热门榜前 10 千万级放量作品。"
    },
    {
      period: "2026.04–至今",
      company: "成都卓瀚科技",
      role: "制作人",
      team: "全面统筹 10 人团队（直管 9 人）",
      project: "《CaptainCapy》（6 周 Demo · 5 个月首测上架）",
      desc: "全面负责立项、里程碑、300 万预算管控、范围取舍与海外发行基建，把高潜力方向推进至可测试交付。"
    }
  ]
};
