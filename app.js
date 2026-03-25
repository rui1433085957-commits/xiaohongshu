const categoryRules = [
  {
    id: "beauty",
    match: ["粉底", "气垫", "口红", "腮红", "眼影", "遮瑕", "修容", "底妆", "美妆", "化妆"],
    scenePool: ["早八通勤", "出门见人", "约会", "拍照", "赶时间化妆"],
    audiencePool: ["化妆新手", "通勤党", "学生党", "普通上班族"],
    painPoints: ["最怕卡粉暗沉", "最怕妆感厚重", "最怕上脸假面", "最怕带妆一会儿就垮"],
    highlights: ["妆感更自然", "颜色更显气色", "上脸更服帖", "整体完成度更高", "日常用起来没压力"],
    benefits: ["不容易出错", "拍照更上镜", "补妆也方便", "更适合普通人日常妆容"],
    tags: ["美妆分享", "化妆日常", "底妆推荐", "新手化妆"]
  },
  {
    id: "skincare",
    match: ["面霜", "精华", "乳液", "防晒", "护肤", "面膜", "水乳", "洁面", "油痘肌", "敏感肌"],
    scenePool: ["换季阶段", "熬夜之后", "日常维稳", "通勤防护", "懒人护肤"],
    audiencePool: ["敏感肌", "油皮", "干皮", "护肤新手"],
    painPoints: ["最怕刺激泛红", "最怕黏腻厚重", "最怕用了没感觉", "最怕流程太复杂"],
    highlights: ["肤感更舒服", "坚持用更安心", "日常维稳更友好", "上脸没有太强负担", "更适合长期使用"],
    benefits: ["更适合普通人坚持", "步骤不会太复杂", "更容易融入日常", "不容易因为跟风踩雷"],
    tags: ["护肤分享", "护肤日常", "好物推荐", "真实使用感"]
  },
  {
    id: "fashion",
    match: ["穿搭", "裙子", "外套", "衬衫", "裤子", "牛仔", "通勤穿搭", "鞋子", "包包", "配饰"],
    scenePool: ["上班通勤", "约会出门", "周末逛街", "旅行拍照", "换季搭配"],
    audiencePool: ["小个子", "梨形身材", "微胖女生", "穿搭新手"],
    painPoints: ["最怕显臃肿", "最怕搭出来没有重点", "最怕买回来不实穿", "最怕只适合拍照"],
    highlights: ["上身更有氛围感", "搭配难度不高", "日常穿也不夸张", "修饰效果更明显", "整体更有精神"],
    benefits: ["重复利用率高", "不容易压衣柜", "普通人也能穿出感觉", "出门不费脑子"],
    tags: ["今日穿搭", "通勤穿搭", "搭配灵感", "女生穿搭"]
  },
  {
    id: "food",
    match: ["早餐", "咖啡", "减脂餐", "零食", "奶茶", "探店", "餐厅", "甜品", "水果", "便当"],
    scenePool: ["早起赶时间", "下午嘴馋", "减脂期", "周末放松", "朋友聚会"],
    audiencePool: ["上班族", "学生党", "减脂人群", "懒人"],
    painPoints: ["最怕麻烦", "最怕空有噱头", "最怕不好坚持", "最怕口味普通还不值得"],
    highlights: ["吃起来更满足", "搭配起来更省事", "复刻门槛低", "更适合长期坚持", "味道和体验都在线"],
    benefits: ["不容易半途放弃", "更适合忙碌日常", "分享给朋友也有说服力", "实用性更高"],
    tags: ["美食分享", "减脂日常", "早餐灵感", "探店推荐"]
  },
  {
    id: "fitness",
    match: ["减脂", "健身", "跑步", "塑形", "瑜伽", "体态", "运动", "训练", "瘦腿", "增肌"],
    scenePool: ["刚开始运动", "平台期", "居家训练", "下班之后", "想养成习惯的时候"],
    audiencePool: ["运动小白", "久坐党", "减脂期女生", "想练体态的人"],
    painPoints: ["最怕坚持不下去", "最怕动作太复杂", "最怕看起来有效但自己做不到", "最怕投入很多却没反馈"],
    highlights: ["更容易开始", "更容易坚持", "节奏对普通人更友好", "不会有太强门槛感", "能慢慢看到变化"],
    benefits: ["更适合做长期习惯", "对时间和空间要求没那么高", "新手也更容易跟上", "没那么容易劝退"],
    tags: ["健身打卡", "减脂分享", "运动日常", "体态管理"]
  },
  {
    id: "study",
    match: ["学习", "英语", "备考", "自律", "考研", "笔记", "阅读", "写作", "效率", "时间管理"],
    scenePool: ["备考阶段", "容易分心的时候", "下班之后", "早起学习", "想重启状态的时候"],
    audiencePool: ["学生党", "考研人", "上班学习党", "自律困难户"],
    painPoints: ["最怕坚持两天就停", "最怕看似努力却没效率", "最怕方法太复杂", "最怕开始成本太高"],
    highlights: ["更容易执行", "逻辑更清楚", "复用性更强", "更适合普通人的节奏", "不容易给自己太大压力"],
    benefits: ["更适合长期积累", "容易形成自己的节奏", "不需要一下子做很多", "实操性更强"],
    tags: ["学习打卡", "效率提升", "自律成长", "备考经验"]
  },
  {
    id: "travel",
    match: ["旅行", "旅游", "酒店", "民宿", "攻略", "citywalk", "海边", "露营", "出行", "景点"],
    scenePool: ["短途周末", "节假日出行", "朋友结伴", "一个人散心", "想放松的时候"],
    audiencePool: ["周末出游党", "懒人旅行者", "拍照党", "第一次去的人"],
    painPoints: ["最怕踩雷", "最怕安排太累", "最怕照片好看但体验一般", "最怕做太多攻略反而更乱"],
    highlights: ["整体体验更顺", "出片率更高", "节奏不会太赶", "更适合普通人照着走", "容错率更高"],
    benefits: ["省掉很多试错时间", "更适合轻松出门", "不会太折腾", "适合直接抄作业"],
    tags: ["旅行分享", "周末去哪儿", "出游攻略", "城市探索"]
  },
  {
    id: "home",
    match: ["收纳", "家居", "香薰", "床品", "桌面", "清洁", "厨房", "租房", "布置", "家电"],
    scenePool: ["租房生活", "周末整理", "下班回家", "提升幸福感", "小空间改造"],
    audiencePool: ["租房党", "独居女生", "居家爱好者", "收纳困难户"],
    painPoints: ["最怕占地方", "最怕华而不实", "最怕清理麻烦", "最怕看着好看但不好用"],
    highlights: ["幸福感提升明显", "日常用起来更顺手", "视觉上更清爽", "对小空间更友好", "更容易保持整洁"],
    benefits: ["更适合长期生活", "不会只是一时新鲜", "对普通家庭也有参考价值", "实用和颜值兼顾"],
    tags: ["家居好物", "租房改造", "生活灵感", "幸福感好物"]
  },
  {
    id: "digital",
    match: ["相机", "手机", "耳机", "平板", "电脑", "键盘", "显示器", "数码", "拍立得", "打印机"],
    scenePool: ["通勤路上", "办公学习", "日常娱乐", "旅行记录", "居家桌搭"],
    audiencePool: ["学生党", "上班族", "数码小白", "预算有限的人"],
    painPoints: ["最怕参数看半天还是不会选", "最怕功能很多却不实用", "最怕价格不低但体验一般", "最怕买完发现不适合自己"],
    highlights: ["上手难度不高", "核心体验很稳定", "日常使用更顺畅", "对普通人更友好", "关键功能够用而且舒服"],
    benefits: ["不容易被复杂参数劝退", "更适合作为日常主力", "性价比感更明显", "不用折腾也能获得不错体验"],
    tags: ["数码分享", "好物推荐", "桌面升级", "使用体验"]
  }
];

const fallbackCategory = {
  id: "general",
  scenePool: ["日常使用", "第一次尝试", "做选择之前", "想提升体验的时候", "普通生活场景"],
  audiencePool: ["普通用户", "新手", "预算有限的人", "想少踩坑的人"],
  painPoints: ["最怕不适合自己", "最怕花了钱却没感觉", "最怕看了很多还是不会选", "最怕期待太高最后失望"],
  highlights: ["使用门槛不高", "整体体验更平衡", "对普通人更友好", "细节表现更顺手", "更容易坚持用下去"],
  benefits: ["不容易踩雷", "更适合日常", "更容易直接上手", "不需要太高门槛"],
  tags: ["好物分享", "真实体验", "普通人推荐", "实用分享"]
};

const styleConfigs = {
  emotion: {
    label: "情绪型",
    preview: "把共鸣和情绪拉满，第一眼先让人想点开。",
    mode: "emotion",
    titleTemplates: [
      "真的没人告诉我，{keyword}可以这么绝",
      "{keyword}这件事，我后悔没早点知道",
      "关于{keyword}，我终于找到不踩雷的版本了",
      "{keyword}也太会拿捏普通人了吧",
      "被{keyword}狠狠治愈的一次尝试",
      "{keyword}让我产生了久违的分享欲"
    ],
    openingTemplates: [
      "最近我真的被{keyword}拿捏住了。",
      "如果你最近也在关注{keyword}，这篇我很想认真说。",
      "本来只是随手试试{keyword}，结果比我预想得更戳人。",
      "能让我主动写{keyword}，说明它确实有点东西。"
    ],
    transitionTemplates: [
      "它打动我的，不是夸张的第一眼冲击，而是越接触越顺手的感觉。",
      "有些东西是一时新鲜，有些东西会慢慢提高你的使用频率，{keyword}更像后者。",
      "我原本以为又是一次普通尝试，结果它在细节上的表现把我说服了。",
      "真正让我想安利的，是它没有刻意用力，却刚好解决了我最在意的点。"
    ],
    detailIntro: "如果只说一句感受，那就是它很容易让人产生“终于找对了”的感觉。",
    ctaTemplates: [
      "如果你也在犹豫，真心建议先码住，再决定要不要试。",
      "这次不是硬夸，是我真的愿意反复推荐的那种。",
      "喜欢{keyword}这个方向的人，别太晚看到它。",
      "总之，这类内容我不常夸，但这次确实想替大家先说一句值。"
    ],
    tagBase: ["情绪分享", "真实体验", "近期爱用", "被狠狠种草"],
    tips: "情绪型最适合补一条真实细节，比如“用了三天后，我最明显的感受是……”。"
  },
  knowledge: {
    label: "干货型",
    preview: "更强调清晰表达和实用价值，适合想做收藏型内容。",
    mode: "knowledge",
    titleTemplates: [
      "{keyword}怎么选？这篇帮你理清楚",
      "想把{keyword}弄明白，先看这几个关键点",
      "{keyword}避坑指南，普通人也能直接照着来",
      "关于{keyword}，我整理了最实用的一版",
      "{keyword}别再盲选了，这几个判断点更重要"
    ],
    openingTemplates: [
      "如果你也在研究{keyword}，先别急着跟风。",
      "很多人不是不需要{keyword}，而是不知道该怎么判断它适不适合自己。",
      "这次想用最直白的方式，把{keyword}讲清楚。",
      "最近整理了一轮{keyword}相关经验，发现大家最容易卡在前面这几步。"
    ],
    transitionTemplates: [
      "我现在更倾向于先看需求，再看场景，最后再看预算和细节。",
      "真正重要的不是参数堆得多漂亮，而是它能不能解决你的实际问题。",
      "很多踩雷都不是因为产品一定不好，而是前期没想清楚自己的优先级。",
      "只要判断逻辑顺了，选择{keyword}其实比想象中简单。"
    ],
    detailIntro: "我更建议把选择拆成几个步骤，这样效率更高，也更不容易冲动决定。",
    ctaTemplates: [
      "先收藏，等你真正要入手或开始尝试的时候再回来对照，会更高效。",
      "如果你和我一样追求实用、少踩坑，这套思路基本够用。",
      "比起盲买，我更建议你按这个逻辑筛一遍。",
      "希望这篇能帮你省时间，也省掉一些没必要的试错成本。"
    ],
    tagBase: ["干货分享", "避坑指南", "实用经验", "建议收藏"],
    tips: "干货型适合补上预算、人群、肤质、身材或频率这类判断条件。"
  },
  planting: {
    label: "种草型",
    preview: "突出“好用、好看、值得买”，更有分享欲和收藏感。",
    mode: "planting",
    titleTemplates: [
      "{keyword}我先夸了，真的太值得入",
      "挖到宝了，{keyword}真的很难不爱",
      "{keyword}这波我是真心想安利",
      "答应我，看到{keyword}别再无视了",
      "{keyword}属于越用越想回购的类型",
      "{keyword}这种东西，试过一次就容易记住"
    ],
    openingTemplates: [
      "今天必须认真夸一夸{keyword}。",
      "如果最近你正在找{keyword}，这篇可能刚好能帮到你。",
      "最近用到一个让我很有分享欲的{keyword}，不写出来我都难受。",
      "这类东西我一般不会轻易推荐，但{keyword}是真的值得说。"
    ],
    transitionTemplates: [
      "我会想推荐它，核心原因其实很简单：顺手、稳定、没有明显短板。",
      "它不是靠短暂新鲜感撑起来的那种，而是会让你愿意继续留下来的类型。",
      "很多东西看起来都不错，但真正能让我反复拿出来说的，通常是体验完整度高的。",
      "尤其对普通用户来说，这种不费脑又能稳定发挥的东西，真的很加分。"
    ],
    detailIntro: "如果你问我值不值得种草，我会说它属于“放进备选名单不会错”的那类。",
    ctaTemplates: [
      "如果你最近刚好在看同类内容，可以优先把它放进备选名单。",
      "先替大家试过了，结论就是：值得种草，也值得回头看。",
      "对普通用户来说，这种体验稳定的东西真的很难不加分。",
      "不夸张地说，它已经进了我愿意反复推荐的名单。"
    ],
    tagBase: ["种草推荐", "宝藏好物", "真实安利", "购物分享"],
    tips: "种草型最适合补一个具体使用场景，比如通勤、约会、旅行、上班。"
  },
  review: {
    label: "测评型",
    preview: "更像真实试用记录，会带优点、注意点和适合人群。",
    mode: "review",
    titleTemplates: [
      "{keyword}真实测评，我只说实际感受",
      "{keyword}值不值得入？我用后认真说",
      "试完{keyword}后，我的结论比预想更清楚",
      "{keyword}别急着冲，这篇先看完",
      "{keyword}优缺点都给你摆明白"
    ],
    openingTemplates: [
      "这篇我会按真实体验来讲{keyword}，不只说优点。",
      "关于{keyword}，这次我更想做一版像样的测评记录。",
      "如果你更在意真实反馈而不是氛围感，{keyword}这篇会更适合你。",
      "我把{keyword}实际用了一轮，想直接说结论。"
    ],
    transitionTemplates: [
      "我最看重的不是宣传词，而是它在日常里到底稳不稳。",
      "真实测评里最重要的，从来都不是一句“很好用”，而是具体好在哪里、问题又在哪。",
      "如果只看表面信息，很多人很容易被带偏，所以这次我更想把细节拆开讲。",
      "与其堆形容词，不如直接把体验结果摊开。"
    ],
    detailIntro: "测评型的重点，是把“适合谁”和“别期待什么”都说清楚。",
    ctaTemplates: [
      "如果你最在意真实反馈，这一版可以先收藏。",
      "建议先对照自己的需求，再决定要不要冲。",
      "看完这几个点后，再下单会稳很多。",
      "这类东西别只看一句好评，细节才是关键。"
    ],
    tagBase: ["真实测评", "使用反馈", "优缺点分析", "理性推荐"],
    tips: "测评型最适合补一条缺点或限制条件，这样更像真人，也更可信。"
  },
  checklist: {
    label: "清单型",
    preview: "更适合做收藏和抄作业，结构更清晰。",
    mode: "checklist",
    titleTemplates: [
      "{keyword}值得收藏的一版，我帮你整理好了",
      "{keyword}清单式总结，直接抄重点",
      "想看{keyword}的核心信息，这篇够了",
      "{keyword}我整理成了一版收藏向内容",
      "{keyword}直接看重点，不绕弯"
    ],
    openingTemplates: [
      "这篇我想把{keyword}整理成一版清单式内容。",
      "如果你只想快速抓重点，{keyword}直接看这篇就行。",
      "我把{keyword}里最值得记的部分压缩成了一版。",
      "这类内容最怕废话太多，所以{keyword}这次直接上重点。"
    ],
    transitionTemplates: [
      "清单型内容的关键，就是让你一眼知道该看什么、先看什么。",
      "比起讲一大堆感受，我更想把真正有用的点单独拎出来。",
      "这种整理方式更适合收藏，也更适合以后回来看。",
      "把重点讲清楚，远比堆辞藻有效。"
    ],
    detailIntro: "如果你想节省判断时间，清单型通常是最好用的版本。",
    ctaTemplates: [
      "适合先收藏，等真正需要的时候回来看。",
      "这版更适合抄作业，也更适合分享给朋友。",
      "如果你不想被废话淹没，这一版会省事很多。",
      "先码住，需要的时候再翻出来对照就行。"
    ],
    tagBase: ["清单推荐", "收藏备用", "重点总结", "抄作业系列"],
    tips: "清单型最适合补一个预算或人群条件，这样收藏价值会更强。"
  },
  relaxed: {
    label: "松弛分享型",
    preview: "更像自然聊天式推荐，没那么用力，但更像真人。",
    mode: "relaxed",
    titleTemplates: [
      "最近在用的{keyword}，顺手聊聊",
      "{keyword}这次想轻松分享一下",
      "关于{keyword}，我最近有点想说",
      "{keyword}不算夸张，但确实挺想分享",
      "随便聊聊{keyword}，结果发现还真不错"
    ],
    openingTemplates: [
      "这篇不想写得太用力，就当我在随手聊{keyword}。",
      "最近反复接触{keyword}，慢慢有了一点稳定的感受。",
      "我对{keyword}最开始其实没有太高期待，后来反而留下来了。",
      "如果你喜欢那种不夸张但真实的分享，{keyword}可以听我聊两句。"
    ],
    transitionTemplates: [
      "它不是那种会让人立刻尖叫的类型，但会在日常里慢慢加分。",
      "有时候最容易留下来的，不是最热闹的，而是最顺手的。",
      "我后来发现，真正让我继续用下去的，是它没有明显别扭的地方。",
      "这种感觉很难一句话说完，但用久一点就会懂。"
    ],
    detailIntro: "松弛分享更像自然聊天，不需要太夸张，也不需要硬拗爆点。",
    ctaTemplates: [
      "如果你刚好也在看这个方向，可以先放进备选。",
      "我会继续用一阵子，后面有新感受也会再补。",
      "不一定适合所有人，但对需求接近的人会挺友好。",
      "这篇就当一个轻松参考，不用太有压力。"
    ],
    tagBase: ["日常分享", "轻松推荐", "生活碎片", "真实记录"],
    tips: "松弛分享型适合补一个生活化场景，比如下班回家、周末出门、随手记录。"
  }
};

const toneConfigs = {
  soft: {
    label: "克制版",
    titleSuffixes: ["", "，属于稳稳加分", "，我会理性推荐"],
    openerLeads: ["说实话，", "客观讲，", "认真说，"],
    emphasisLines: [
      "它不是特别夸张的路线，但长期看会更顺手。",
      "我自己更看重稳定体验，所以这点会更加分。",
      "这种类型未必第一眼惊艳，但越用越容易留下来。"
    ],
    ctaSuffixes: ["适合先收藏观察。", "可以放进备选，不用急着冲。", "按需参考就行。"],
    tagBase: ["理性分享", "克制推荐"]
  },
  standard: {
    label: "标准版",
    titleSuffixes: ["", "，这次我想认真推荐", "，普通人也能直接参考"],
    openerLeads: ["最近发现，", "这次想认真聊聊，", "如果你也在看，"],
    emphasisLines: [
      "整体体验是完整的，普通人也比较容易感受到差别。",
      "它不是单点突出，而是整体没有明显短板。",
      "这类东西最怕只会营销，它反而属于比较稳的一类。"
    ],
    ctaSuffixes: ["先码住，回头大概率用得上。", "有相似需求的话可以直接参考。", "这一版我会认真推荐。"],
    tagBase: ["真实推荐", "普通人参考"]
  },
  strong: {
    label: "爆款版",
    titleSuffixes: ["，真的很难不心动", "，这次我是真的想按头安利", "，不夸张地说有点上头"],
    openerLeads: ["真的，", "拜托，", "必须说，"],
    emphasisLines: [
      "这种差别不是一点点，是很容易让人立刻产生分享欲的那种。",
      "如果需求对得上，它真的会把种草感拉得很满。",
      "我平时很少把话说这么满，但这次确实有点上头。"
    ],
    ctaSuffixes: ["先别划走，真的值得你看一眼。", "这类我一般不乱夸，但这次是真的想安利。", "如果你也有同样需求，冲之前先看这篇。"],
    tagBase: ["爆款文案", "按头安利"]
  }
};

const sceneConfigs = {
  share: {
    label: "自用分享",
    titleSuffixes: ["｜自用分享", "｜最近自用", ""],
    openingTemplates: [
      "这篇更偏自用视角，不是硬安利。",
      "最近我自己就是在{scene}里反复用到它。",
      "站在日常自用角度，这个方向确实让我有分享欲。"
    ],
    angleTemplates: [
      "站在自用角度看，",
      "如果只考虑自己长期会不会继续用，",
      "从日常使用体验来说，"
    ],
    ctaTemplates: [
      "如果你和我需求接近，基本可以直接参考。",
      "适合同样走日常路线的人直接抄作业。",
      "这版更像我自己的使用记录，需求接近就很有参考价值。"
    ],
    tagBase: ["自用分享", "日常记录"],
    tips: "自用分享最适合补一条你自己的生活习惯，会更像真实账号。"
  },
  review: {
    label: "真实测评",
    titleSuffixes: ["｜真实测评", "｜体验版", ""],
    openingTemplates: [
      "这篇我会尽量按真实体验来讲，不只说优点。",
      "如果你更在意实际反馈，这一版会更适合你。",
      "我这次会把感受拆开讲，尽量让它更像测评而不是安利。"
    ],
    angleTemplates: [
      "从测评角度看，",
      "如果回到真实体验本身，",
      "把滤镜拿掉以后，"
    ],
    ctaTemplates: [
      "看完这几个点后，再决定要不要入会更稳。",
      "如果你最怕被宣传带偏，这一版建议先收藏。",
      "真实测评最重要的是适不适合你，不是它热不热。"
    ],
    tagBase: ["真实测评", "使用反馈"],
    tips: "真实测评建议再补一条优缺点，会更完整。"
  },
  avoid: {
    label: "避坑建议",
    titleSuffixes: ["｜避坑版", "｜先看这篇", ""],
    openingTemplates: [
      "如果你和我一样怕踩雷，这篇可以先看。",
      "这类内容我会更关注“哪些人别盲跟”。",
      "先说结论，这篇更适合拿来做避坑参考。"
    ],
    angleTemplates: [
      "如果从避坑角度看，",
      "要少走弯路的话，",
      "真正值得先看的，其实是这些限制条件："
    ],
    ctaTemplates: [
      "先对照自己的需求，再决定要不要冲。",
      "适合先看完再下判断，能省掉不少试错成本。",
      "别急着被种草，先看自己是不是适合。"
    ],
    tagBase: ["避坑建议", "别盲买"],
    tips: "避坑建议最适合补“哪些人不适合”，可信度会更高。"
  },
  list: {
    label: "清单推荐",
    titleSuffixes: ["｜清单推荐", "｜收藏版", ""],
    openingTemplates: [
      "这篇更适合拿来做收藏向参考。",
      "如果你想快速抄重点，这一版会更省事。",
      "我会尽量按“值不值得进清单”的方式来讲。"
    ],
    angleTemplates: [
      "如果放进推荐清单里，",
      "从收藏价值看，",
      "如果只看最值得记住的部分，"
    ],
    ctaTemplates: [
      "适合先收藏，等需要的时候回来看。",
      "这版更适合发给朋友，也适合自己以后翻。",
      "如果你平时喜欢抄作业式内容，这一版会更顺手。"
    ],
    tagBase: ["清单推荐", "收藏备用"],
    tips: "清单推荐最适合补预算和适合人群，收藏价值最高。"
  }
};

const dom = {
  keywordInput: document.getElementById("keywordInput"),
  extraInput: document.getElementById("extraInput"),
  styleGrid: document.getElementById("styleGrid"),
  toneGrid: document.getElementById("toneGrid"),
  sceneGrid: document.getElementById("sceneGrid"),
  generateBtn: document.getElementById("generateBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  copyAllBtn: document.getElementById("copyAllBtn"),
  titleOutput: document.getElementById("titleOutput"),
  bodyOutput: document.getElementById("bodyOutput"),
  tagsOutput: document.getElementById("tagsOutput"),
  tipsOutput: document.getElementById("tipsOutput"),
  heroStyleLabel: document.getElementById("heroStyleLabel"),
  heroPreview: document.getElementById("heroPreview"),
  resultMeta: document.getElementById("resultMeta")
};

const state = {
  style: "emotion",
  tone: "soft",
  scene: "share",
  generationSeed: 0
};

function cleanText(value) {
  return value.trim().replace(/\s+/g, " ");
}

function splitExtra(extra) {
  if (!extra) {
    return [];
  }

  return extra
    .split(/[，,、；;\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function createSeed(keyword, extra, styleKey, toneKey, sceneKey) {
  const source = `${keyword}|${extra}|${styleKey}|${toneKey}|${sceneKey}|${state.generationSeed}`;
  let hash = 0;

  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 131 + source.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function makePicker(seed) {
  let current = seed || 1;

  return function pick(list) {
    if (!Array.isArray(list) || list.length === 0) {
      return "";
    }

    current = (current * 1664525 + 1013904223) >>> 0;
    return list[current % list.length];
  };
}

function format(template, variables) {
  return template.replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? "");
}

function pickText(list, context, pick) {
  return format(pick(list), context);
}

function detectCategory(keyword) {
  const target = keyword.toLowerCase();
  return categoryRules.find((rule) => rule.match.some((word) => target.includes(word.toLowerCase()))) || fallbackCategory;
}

function uniqueTags(list) {
  return Array.from(new Set(list.filter(Boolean)));
}

function normalizeTag(text) {
  return text.replace(/[，。！？、,.!?\s]/g, "");
}

function createContext(keyword, extraList, category, pick) {
  const primaryHighlight = pick(category.highlights);
  const secondaryHighlight = pick(category.highlights.filter((item) => item !== primaryHighlight).length > 0
    ? category.highlights.filter((item) => item !== primaryHighlight)
    : category.highlights);

  return {
    keyword,
    scene: pick(category.scenePool),
    audience: pick(category.audiencePool),
    pain: pick(category.painPoints),
    highlightA: primaryHighlight,
    highlightB: secondaryHighlight,
    benefit: pick(category.benefits),
    extraFocus: extraList.slice(0, 2).join("、")
  };
}

function buildTitle(keyword, styleConfig, toneConfig, sceneConfig, context, pick) {
  return [
    pickText(styleConfig.titleTemplates, context, pick),
    pick(toneConfig.titleSuffixes),
    pick(sceneConfig.titleSuffixes)
  ].join("");
}

function buildEmotionBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const detailLine = extraList.length > 0
    ? `我这次尤其在意${context.extraFocus}，所以会更容易注意到${context.highlightB}这种细节。`
    : `如果你也是${context.audience}，大概率会懂这种“终于顺了”的感觉。`;

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `以前我对这类东西最大的顾虑就是“${context.pain}”，但这次最打动我的反而是${context.highlightA}。`,
    detailLine,
    `${pickText(sceneConfig.angleTemplates, context, pick)}放到${context.scene}这种真实场景里看，${context.keyword}不是一阵子的热闹，而是真的${context.benefit}。`,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildKnowledgeBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const extraLine = extraList.length > 0
    ? `如果你重点关注${context.extraFocus}，那判断时一定要把这些条件排在前面。`
    : `尤其是${context.audience}，更要先确认自己的核心需求，而不是直接被热门推荐带着走。`;

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `我会先看 3 个点：1. 你的真实使用场景是不是${context.scene}；2. 你最在意的问题是不是“${context.pain}”；3. 你想要的结果是不是${context.highlightA}。`,
    extraLine,
    `${pickText(sceneConfig.angleTemplates, context, pick)}真正值得比较的，不是花哨程度，而是它能不能${context.benefit}。`,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildPlantingBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const extraLine = extraList.length > 0
    ? `我个人会更推荐给在意${context.extraFocus}的人，这种需求下会更容易感受到它的好。`
    : "它最适合的不是极端需求党，而是想在日常里稳定提升体验的人。";

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `我会想继续用它，主要是因为${context.highlightA}，而且在${context.scene}这种场景下，${context.highlightB}这件事也特别加分。`,
    extraLine,
    `${pickText(sceneConfig.angleTemplates, context, pick)}真正让人愿意安利的，不是它有多会营销，而是它确实${context.benefit}。`,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildReviewBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const cautionLine = extraList.length > 0
    ? `如果你尤其在意${context.extraFocus}，那这部分一定要先看清楚。`
    : `如果你的需求和${context.audience}比较接近，参考价值会更高。`;

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `我会直接拆成 3 点：`,
    `1. 优点：${context.highlightA}，而且在${context.scene}这种场景下表现会更稳定。`,
    `2. 注意点：如果你最怕“${context.pain}”，那就一定要先确认它是不是和你的需求匹配。`,
    `3. 适合谁：更适合${context.audience}，尤其是更看重${context.benefit}的人。`,
    cautionLine,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildChecklistBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const extraLine = extraList.length > 0
    ? `如果你当前重点关注${context.extraFocus}，那第 2 点和第 3 点最值得先看。`
    : `如果你只想快速抄重点，直接看下面这 3 条就够了。`;

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `清单重点：`,
    `1. 为什么值得看：它在${context.scene}场景里更容易体现出${context.highlightA}。`,
    `2. 为什么不容易踩雷：因为它更偏向${context.benefit}，不是只靠表面热度。`,
    `3. 谁更适合：${context.audience}，尤其是很在意“${context.pain}”的人。`,
    extraLine,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildRelaxedBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  const extraLine = extraList.length > 0
    ? `我自己会特别留意${context.extraFocus}，所以这块的感受会更明显一点。`
    : `它不是那种会让人第一秒惊呼的东西，但慢慢会让人觉得挺顺。`;

  return [
    `${pick(toneConfig.openerLeads)}${pickText(styleConfig.openingTemplates, context, pick)}`,
    pickText(sceneConfig.openingTemplates, context, pick),
    `${styleConfig.detailIntro}${pickText(styleConfig.transitionTemplates, context, pick)}`,
    `后来我发现，真正让我愿意继续留着它的原因，其实是${context.highlightA}。`,
    extraLine,
    `${pickText(sceneConfig.angleTemplates, context, pick)}如果回到${context.scene}这种普通场景里，它会因为${context.highlightB}和${context.benefit}慢慢变得顺手。`,
    pick(toneConfig.emphasisLines),
    `${pickText(styleConfig.ctaTemplates, context, pick)}${pick(toneConfig.ctaSuffixes)} ${pickText(sceneConfig.ctaTemplates, context, pick)}`
  ].join("\n\n");
}

function buildBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick) {
  switch (styleConfig.mode) {
    case "emotion":
      return buildEmotionBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
    case "knowledge":
      return buildKnowledgeBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
    case "planting":
      return buildPlantingBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
    case "review":
      return buildReviewBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
    case "checklist":
      return buildChecklistBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
    default:
      return buildRelaxedBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
  }
}

function buildTags(keyword, extraList, category, styleConfig, toneConfig, sceneConfig, pick) {
  const tags = uniqueTags([
    `#${normalizeTag(keyword)}`,
    `#${pick(category.tags)}`,
    `#${pick(styleConfig.tagBase)}`,
    `#${pick(toneConfig.tagBase)}`,
    `#${pick(sceneConfig.tagBase)}`,
    `#${normalizeTag(pick(category.scenePool))}`,
    "#小红书文案"
  ]);

  if (extraList.length > 0) {
    tags.push(`#${normalizeTag(extraList[0])}`);
  }

  return uniqueTags(tags).join(" ");
}

function renderStylePreview() {
  const config = styleConfigs[state.style];
  dom.heroStyleLabel.textContent = `${config.label}文案`;
  dom.heroPreview.textContent = config.preview;
}

function renderMeta() {
  dom.resultMeta.textContent = `风格：${styleConfigs[state.style].label} · 语气：${toneConfigs[state.tone].label} · 场景：${sceneConfigs[state.scene].label}`;
}

function setActiveButton(container, attribute, value) {
  [...container.querySelectorAll(`[data-${attribute}]`)].forEach((button) => {
    button.classList.toggle("active", button.dataset[attribute] === value);
  });
}

function updateSelections() {
  setActiveButton(dom.styleGrid, "style", state.style);
  setActiveButton(dom.toneGrid, "tone", state.tone);
  setActiveButton(dom.sceneGrid, "scene", state.scene);
  renderStylePreview();
  renderMeta();
}

function generateCopy() {
  const keyword = cleanText(dom.keywordInput.value);
  const extra = cleanText(dom.extraInput.value);

  if (!keyword) {
    dom.titleOutput.textContent = "请先输入关键词";
    dom.bodyOutput.textContent = "例如：平价气垫、梨形身材穿搭、油痘肌护肤、周末探店。";
    dom.tagsOutput.textContent = "#小红书文案 #关键词待输入";
    dom.tipsOutput.textContent = "先输入明确关键词，再生成，结果会更贴近实际发布需求。";
    renderMeta();
    return;
  }

  const styleConfig = styleConfigs[state.style];
  const toneConfig = toneConfigs[state.tone];
  const sceneConfig = sceneConfigs[state.scene];
  const category = detectCategory(keyword);
  const extraList = splitExtra(extra);
  const pick = makePicker(createSeed(keyword, extra, state.style, state.tone, state.scene));
  const context = createContext(keyword, extraList, category, pick);

  dom.titleOutput.textContent = buildTitle(keyword, styleConfig, toneConfig, sceneConfig, context, pick);
  dom.bodyOutput.textContent = buildBody(styleConfig, toneConfig, sceneConfig, context, extraList, pick);
  dom.tagsOutput.textContent = buildTags(keyword, extraList, category, styleConfig, toneConfig, sceneConfig, pick);
  dom.tipsOutput.textContent = [
    styleConfig.tips,
    toneConfig.label === "爆款版" ? "爆款版语气更满，建议你发布前再删掉一两个太满的词，会更像真人。" : "",
    sceneConfig.tips,
    `当前识别方向：${category.id}。`
  ].filter(Boolean).join(" ");
}

async function copyAll() {
  const payload = [
    `标题：${dom.titleOutput.textContent}`,
    `正文：\n${dom.bodyOutput.textContent}`,
    `标签：${dom.tagsOutput.textContent}`
  ].join("\n\n");

  try {
    await navigator.clipboard.writeText(payload);
    dom.copyAllBtn.textContent = "已复制";
    window.setTimeout(() => {
      dom.copyAllBtn.textContent = "复制全部";
    }, 1600);
  } catch (error) {
    dom.copyAllBtn.textContent = "复制失败";
    window.setTimeout(() => {
      dom.copyAllBtn.textContent = "复制全部";
    }, 1600);
  }
}

dom.styleGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-style]");
  if (!target) {
    return;
  }

  state.style = target.dataset.style;
  state.generationSeed += 1;
  updateSelections();
  generateCopy();
});

dom.toneGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-tone]");
  if (!target) {
    return;
  }

  state.tone = target.dataset.tone;
  state.generationSeed += 1;
  updateSelections();
  generateCopy();
});

dom.sceneGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-scene]");
  if (!target) {
    return;
  }

  state.scene = target.dataset.scene;
  state.generationSeed += 1;
  updateSelections();
  generateCopy();
});

dom.generateBtn.addEventListener("click", () => {
  state.generationSeed += 1;
  generateCopy();
});

dom.shuffleBtn.addEventListener("click", () => {
  state.generationSeed += 1;
  generateCopy();
});

dom.copyAllBtn.addEventListener("click", copyAll);

dom.keywordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    state.generationSeed += 1;
    generateCopy();
  }
});

updateSelections();
