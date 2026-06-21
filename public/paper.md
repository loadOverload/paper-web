# 数字竞技的灰色地带——电子竞技漏洞利用的规则边界与法理学争议

## 摘要

电子竞技的漏洞利用争议之所以反复发生且从未获得原则性解决，根源在于电子游戏产业独特的价值生产结构：游戏本身免费开放，而利润来源于玩家围绕游戏所构建的社交世界——一个被赫伊津哈意义上的“魔法圈”所包裹的意义共同体。电子竞技赛事则是这一社交世界价值的集中展演与最终确认，它将玩家在日常游戏中所积累的集体情感、技术想象和公平信念压缩进一场可观看的仪式。正是这一结构，使得漏洞利用的危害不在于它提供了“不公平优势”本身，而在于它击穿了观众与玩家对“游戏世界本来面貌”的共享想象。本文以《反恐精英》《星际争霸》《Dota 2》三款作品的五起标志性漏洞争议为样本，结合平台资本主义与免费劳动理论，建立了一个四元博弈分析框架（观众/战队/开发商/赛事方），并将惩罚决策的差异归结为不同游戏盈利模式与不同博弈格局的共同产物。本文最终论证：漏洞利用的规则化，并非一个纯粹的法理判断，而是游戏社会价值再生产链条中一次多方利益校准的产出。

**关键词**：电子竞技；漏洞利用；魔法圈；游戏均衡；平台资本主义；利益博弈

---

## 一、引言

2014年11月28日，DreamHack Winter 2014——当年《反恐精英：全球攻势》（CS:GO）最顶级的Major级锦标赛——四分之一决赛，瑞典战队Fnatic对阵法国战队LDLC。CS:GO是一款五人制的第一人称战术射击游戏，两支队伍分别扮演进攻方与防守方，在一张封闭地图上展开攻防：进攻方负责在指定的炸弹点安置并引爆炸药，防守方负责阻止。比赛采用三局两胜制，双方各选一张地图，若战平则在第三张地图上决出胜负。

前两张地图（Dust2与Cache）双方各赢一局，决胜局在Overpass上进行。这是一张以德国城市立交桥为原型的地图，进攻方与防守方分别出生在地图两端，由A、B两个炸弹点和一条贯通中路的复杂通道网络构成。上半场由Fnatic担任进攻方、LDLC担任防守方。LDLC的防守滴水不漏，上半场结束时以12:3遥遥领先——在CS:GO的赛制中，先拿到16分的一方获胜，这意味着Fnatic下半场几乎没有容错空间。

然而下半场开始后，局势急转直下。Fnatic选手olofmeister（本名Olof Kajbjer Gustafsson）被两名队友通过一个极其复杂的人梯站位——两人叠立，第三人攀上——送到一块地图设计者遗留的、几乎不可见的碰撞体（collision）残片上。从转播画面中看，olofmeister仿佛悬浮在半空中。从这个异常位置，他获得了覆盖中路、B区入口以及大量正常视野盲区的俯瞰视角，并据此使用SCAR-20连狙（一种高伤害半自动狙击步枪）连续击杀LDLC队员——而LDLC起初甚至无法判断子弹的来源方向。Fnatic利用这一站位连赢13局，最终以16:13完成了一场令人瞠目的逆转。[^1]

这个后来被游戏开发商Valve以一块“禁止翻越栏杆”告示牌来纪念的位置，触发了电竞史上最具理论深度的一场争吵：olofmeister所做的事情，究竟是一次天才的战术创新，还是一次应受处罚的违规行为？在电子竞技比赛中的几乎每一次重大漏洞利用事件，都在重复同一个结构性问题：当游戏代码允许的行为与竞技规则允许的行为发生错位时，我们应该用什么标准来裁判？

已有的讨论大多停留在“是否公平”“是否违反竞技精神”的层面，未能追问一个更根本的问题：竞技精神本身在电子竞技中建立在什么基础之上？漏洞利用之所以引发远超其战术效果的愤怒，被它破坏的究竟是什么？

本文试图论证：要回答这些问题，不能仅从规则法理学的内部视角出发，而必须回到电子游戏产业的价值生产结构——玩家免费参与游戏，但围绕游戏形成的社交世界、情感投入与意义共享才是产业利润的真正来源。电子竞技赛事是这个社交世界的集中展演，而漏洞利用之所以在某些情况下被视为不可容忍，恰恰是因为它摧毁了观众和玩家对“游戏本来面貌”的共享想象——一种支撑着整个价值生产体系的集体信念。

---

## 二、游戏漏洞的界定与分类

在进入理论分析之前，有必要先澄清一个经常被混淆的区分：并非所有在游戏中“不应该发生”的事情都是漏洞。电子竞技的实践已经演化出一套虽然未成文但相当稳定的本土分类法。

### （一）机制（Mechanics）与漏洞（Bug）的边界

“机制”指开发者有意设计并纳入游戏系统的行为规则。以《反恐精英》中的“人梯”（boosting）为例：玩家可以踩在队友头顶上获得更高视野，这是游戏引擎有意允许的对战行为，属于合法战术。而“漏洞”则指游戏代码中存在的意外交互——这个意外交互产生了一种不被开发者预期、但可以在比赛中被复现并加以利用的效果。[^2]

问题的核心在于，开发者意图在实际裁判中几乎无法被援引为可操作的标准。裁判在赛场上不可能打电话给程序员求证“这个碰撞体是不是你故意放在那里的”。因此，职业赛事在实践中逐渐发展出一套基于可观察特征的分类方式。

### （二）电子竞技漏洞利用的类型学

根据上述事件的共同特征，可以将电竞比赛中的漏洞利用归纳为以下几类：

**第一类：几何体漏洞（Geometry Exploit）。** Olofboost是典型案例——玩家进入地图设计者未预期开放的区域（像素步行，pixel-walk），获得异常视野或射击角度。Valve通过删除碰撞体完成修复，并在原位置加入了那块著名的纪念标牌。

**第二类：技能交互逻辑漏洞（Skill Interaction Exploit）。** Dota 2的“泉水钩”（Fountain Hook）是代表：屠夫的“肉钩”命中后会将目标持续拖向自身当前位置，而陈的“忠诚考验”可将屠夫瞬间传送回泉水。两个技能在时间上精确配合后，产生了“将敌人从任意位置拖入泉水秒杀”的效果——这一效果显然不在任何一个技能的设计意图之内。[^3]

**第三类：UI/系统级信息漏洞（UI/System Information Exploit）。** 利用非游戏性功能获取本不应获得的信息。2024年初CS2的队伍切换菜单漏洞属于此类型：打开菜单时摄像机被传送到地图真实坐标点，音频引擎继续播放该位置的环境音效，可以监听到敌方行动信息。[^4] 更为严重的案例是2020年CS:GO“教练观战漏洞”（Coach Spectator Bug）：教练的观战视角因服务器漏洞被固定在地图某处，获得永久视野，进而向选手传递敌方位置信息。ESIC事后审查了近十万场比赛录像，最终处罚了近百名教练。[^5]

**第四类：引擎运算漏洞（Engine Calculation Exploit）。** 《星际争霸：母巢之战》的“飞龙聚团”（Mutalisk Stacking）是代表：多个飞龙单位同时执行高速指令序列，引擎重复计算位置时将其压缩到同一坐标，12只飞龙的伤害在同一帧到达，形成秒杀效果。[^6]

**第五类：单位特殊逻辑漏洞（Unit Special Logic Exploit）。** 《星际争霸》的“采矿穿人”（Mineral Walking）：工人向矿物移动时暂时无视碰撞判定，通过“右键矿物-取消-移动”的指令序列可令单位穿越兵线完成侦查或堵门。

### （三）“Bug”与“技术”的模糊地带

观察上述事件的处理结果可以发现一条隐含的分界线：若操作的视觉表现与游戏的常规呈现明显不符（如玩家“站在空气中”），或产生了完全超出设计预期的效果量级（如“全图任意位置处决”），则更可能被认定为漏洞利用。反之，若操作虽然利用了引擎深层逻辑，但在视觉和直觉上仍可被理解为游戏世界内部的合理行为（如飞龙聚团），则更易被接受为“高级技术”。这条分界线之所以重要，是因为它表明社区的判断标准并非纯粹基于技术分析，而是混合了直觉、惯例和文化共识——这远非法学意义上的严谨标准，但却是实践中唯一可用的标准。

---

## 三、三起标志性事件的比较分析

### （一）信息的性质差异

三起事件涉及的信息优势在性质上存在根本区别。

Olofboost提供的是**位置性信息优势**：通过异常站位获得异常视野，但仍遵循视觉规则——他需要亲自去看，敌人在理论上也存在发现他的微小可能。教练观战漏洞提供的是**结构性信息优势**：教练获得了一个本不存在的观察窗口，该窗口不仅不为对手所知，甚至不为对手所可想象——对手连“这个信息源可能存在”都无从知晓，因此无法在博弈中将其纳入考量。泉水钩则代表了第三种类型：**因果性优势**——它不提供额外信息，而是绕过“接近敌人→输出伤害→击杀”的因果链，用系统逻辑替代了伤害输出的常规路径，产生了设计逻辑下不应存在的因果连接。

这一区分直接关联到漏洞的恶劣程度。结构性信息漏洞完全打破了信息对称性的基础假设，因此被视为最严重；因果性漏洞则取决于效果量级。Olofboost事件中Fnatic指控LDLC也利用了另一处透视漏洞并主张“双方都违规”，但社区几乎一致拒绝了这一等量齐观——两种漏洞在性质上的根本差异使得“各打五十大板”的裁决丧失了说服力。

### （二）开发者意图的地位：赛后修复的政治学

泉水钩事件中Valve的官方立场尤为值得玩味。TI3赛事期间，Dota TV解说海涛在与Valve官员沟通后确认：Valve认定泉水钩“不是Bug，而是游戏中的技巧（Combo）”，因此允许其在剩余比赛中继续使用。[^7] 然而比赛结束后不久，Dota主设计师IceFrog便通过补丁修改了“肉钩”的传送继承逻辑——将钩子拖拽目标改为“Pudge出钩时的位置”而非“Pudge当前位置”——从而彻底消灭了泉水钩。这里出现了一个微妙的张力：如果泉水钩真的是一个“技巧”，为什么要在赛后立即删除它？合法的“技巧”通常不需要被紧急修复。Valve在TI3期间的声明更接近一种“赛事期间不干预”的审慎姿态——承认代码允许该操作，但不意味着设计上认同它。而IceFrog的静默补丁则构成了真正的规范性宣告：在设计者眼中，这是需要被消除的错误交互。

Olofboost的DreamHack裁决经历了更为复杂的变化。官方最初认定Fnatic使用的地图站位涉及贴图透明化漏洞，裁定**仅重赛下半场**（从12:3开始）。随后Fnatic提交了反诉，指出LDLC选手SmithZz在上半场也使用了类似的贴图透视站位。经过调查，DreamHack确认双方均存在违规，将裁决修改为**全图重赛**（从0:0开始）。[^8] 此后，面对几乎一致谴责的社区舆论——Nip、Virtus.pro等顶级战队均公开谴责Fnatic——Fnatic宣布放弃重赛资格，直接认输。这一裁决的两次转向及其最终被战队自行推翻的结局表明：在缺乏既有规则精确覆盖的情形下，赛事裁判机构对漏洞利用的定性与量裁具有高度临时性，其权威在社区道德共识的强大压力面前相当脆弱。

这一对比揭示了当前电子竞技治理的关键困境：开发商垄断着对“游戏应然状态”的定义权（通过事后补丁），但赛场裁判适用的是赛前规则文本。开发商享有“离线修正权”，而这种权力与赛场裁判的“即时终局性”之间存在着尚未被制度化的裂缝。

### （三）操作难度能否成为正当化理由

泉水钩和飞龙聚团的讨论中反复出现一个辩护论据：这些操作的执行难度极高——泉水钩要求极短时间窗口内的精确配合，飞龙聚团需要高密度手速和多线操作。支持者据此推论：如果一个bug需要高水平技术才能触发，它就属于“技巧”而非“漏洞利用”。

这个推论在逻辑上不成立——难度与合法性是两个独立的评价维度——但它在社区实践中确实产生了实质影响。原因在于，高操作难度创造了一种“双向可用性”：如果双方选手都有能力使用同一技巧，该技巧至少在形式上满足了对等条件。这与传统体育反兴奋剂形成了有趣的对比：兴奋剂创造的是不公平的可得性差异（药物≠训练），而高难度技巧的可得性差异正来源于训练水平——恰恰是竞技体育允许甚至鼓励的差异类型。这也是为什么《星际争霸》的飞龙聚团和采矿穿人最终被官方默认接受：当暴雪在长达二十年间的多个版本中均选择保留这些“引擎漏洞技巧”时，时间与惯例完成了对行为性质的再定义。[^8]

**本文涉及的全部事例一览：**

| 事件名称 | 游戏 | 时间 | 赛事 | 漏洞类型 | 漏洞性质 | 处理结果 | 事后是否处罚 |
|---|---|---|---|---|---|---|---|
| Olofboost（Boostgate） | CS:GO | 2014.11 | DreamHack Winter 2014 Major | 几何体漏洞 | 利用隐藏碰撞体获得异常视野，视觉上可见因果断裂（玩家悬浮空中） | 官方先裁定重赛下半场→改为全图重赛→Fnatic弃权；Valve赛后删除碰撞体并加入纪念标牌 | 未受官方处罚（自行弃权），但战队遭社区长期孤立 |
| 泉水钩（Fountain Hook） | Dota 2 | 2013.8 | The International 2013 | 技能交互逻辑漏洞 | Pudge钩子传送继承逻辑+Chen全图传送=任意位置拖入泉水秒杀；每一步骤在常规视觉语言内 | Valve赛时认定其为“技巧（Combo）”允许使用；IceFrog赛后静默补丁删除该交互 | 未处罚（Valve明确不视为Bug） |
| 教练观战漏洞（Coach Spectator Bug） | CS:GO | 2016–2020（漏洞存在期） | MDL、ESEA、ECS等线上赛事 | UI/系统级信息漏洞（结构性信息优势） | 教练因服务器观战模块Bug获得不存在的观察窗口，可获取敌方位置信息 | Valve 2020.8.26修复；ESIC审查约99,650场录像，第一轮禁赛37名教练（3.75–36个月），后续累计制裁近百人 | **电竞史上最大规模处罚** |
| CS2队伍切换菜单音频漏洞（KOI争议） | CS2 | 2024.1 | PGL Copenhagen Major RMR 公开预选赛 | UI/系统级信息漏洞 | 菜单摄像机位于地图真实坐标，可监听附近环境音效；无决定性证据证明KOI使用 | Valve后续更新中修补；KOI未受处罚 | 未处罚（证据不足） |
| 飞龙聚团（Mutalisk Stacking） | 星际争霸：母巢之战 | 1998–2000年起源；2004–2008年战术化 | 韩国职业联赛（OSL、MSL等） | 引擎运算漏洞 | 高速指令序列使引擎压缩多个飞龙至同一坐标点，伤害同时到达形成秒杀；视觉表现正常，因果链未断裂 | 暴雪全部版本均未修复（1.08至Remastered） | 未处罚，惯例化为合法技术 |
| 采矿穿人（Mineral Walking） | 星际争霸：母巢之战 | 1998–2000年起源 | 韩国职业联赛 | 单位特殊逻辑漏洞 | 工人向矿物移动时暂时无视碰撞判定，可用于穿越兵线侦查或堵门；视觉表现正常 | 暴雪未修复，被接受为合法侦查手段 | 未处罚，惯例化为合法技术 |

---

## 四、电子游戏的价值生产与电子竞技体育精神的特殊性

以上分析揭示了漏洞争议中的一些结构性问题——信息性质的差异、开发者意图的地位、操作难度的辩护功能——但尚未触及一个更底层的问题：为什么是这些而非其他因素在裁判中起作用？要回答这个问题，需要将分析提升到电子游戏产业的价值生产层面。

### （一）免费游戏与价值捕获：游戏产业的政治经济学

电子游戏产业在过去二十年中经历了一场深刻的盈利模式转型。传统的“买断制”模式——消费者一次性购买游戏产品——已被“免费游玩、服务付费”（free-to-play）模式所大面积取代。这一转型的实质，并非游戏变得“免费”了，而是价值生产的地点发生了转移：游戏本身不再是商品，而是成为了一种平台基础设施——一个供玩家进入、停留、社交、竞争的场所。

这一转型可以通过三重理论视角加以把握。

首先，从平台政治经济学的视角来看，免费游戏构成了一种典型的“多边市场”（multi-sided market）。[^9] 游戏开发商出售的不再是游戏本身，而是“游戏中的社会关系”——皮肤、通行证、赛事众筹奖励——这些虚拟商品的使用价值完全不在于其功能性（一个金色武器皮肤不会比默认皮肤造成更高伤害），而在于它在游戏社交场域中所承载的符号意义。换言之，玩家为游戏付费，买的不是“玩的权利”或“赢的工具”，而是“在社群中被看见的方式”。利润并不直接来源于游戏过程，而来源于围绕着游戏过程所展开的社交意义生产。

其次，从“免费劳动”（free labor）的视角来看，玩家在免费参与游戏的过程中实际上为平台贡献了不可替代的生产性投入。[^10] 玩家的对战数据为游戏的匹配系统和平衡性调整提供了训练材料；玩家产生的社区内容（讨论、攻略、视频、直播）构建了使游戏保持热度的文化生态；玩家的情感投入和集体认同形成了游戏品牌的社交资本。没有这些免费劳动的持续供给，游戏作为一个社交平台将无法运转。玩家不仅是消费者，更是价值的共同生产者——他们是游戏世界的居民，而游戏的商业价值恰恰来自于这个世界的居住率，“免费玩家是付费玩家的免费陪玩”。

第三，赫伊津哈（Johan Huizinga）的“魔法圈”（magic circle）概念在这里获得了新的政治经济学含义。[^11] 赫伊津哈经典地定义游戏为一个与日常生活相隔离的、遵循自身规则的“魔法圈”。在当代游戏产业的语境下，这个魔法圈不再仅仅是一个文化空间，它同时是一个价值空间——玩家在魔法圈内投入的时间、情感和社交关系，构成了可以被货币化的社会资本。“魔法圈”的完整性——即游戏世界内部规则的稳定性和可预期性——因此具有了经济维度：一旦魔法圈的边界变得模糊或不稳定，玩家的信任和投入意愿就会下降，进而威胁到整个价值链。

正是这一点，将电子竞技赛事置于一个特殊的经济位置。

### （二）电子竞技赛事：社交价值的集中展演与最终确认

从经济功能的角度看，电子竞技赛事并非仅仅是“比赛”。它是游戏社交世界中最高能见度的仪式——玩家在日常游戏中所积累的集体情感（对英雄的热爱、对战术的敬畏、对“技术”的崇拜）在赛事中被压缩、放大并转化为可观看的戏剧。[^12] 赛事观看行为本身是对玩家日常游戏投入的一种确认和回报：当一名玩家花了数百小时练习某个英雄后，看到职业选手在TI赛场上用同样的英雄完成不可思议的操作时，他的日常投入被赋予了更高层面的意义——他的游戏行为被纳入了“竞技传统”的叙事之中。

因此，电子竞技赛事承担着将玩家免费劳动所创造的社会价值进行“结晶化”的功能。赛事是游戏社交世界自我合法化的仪式：它宣告的是“这个游戏世界值得认真对待”。赛事的观看量、奖金池（尤其是Dota 2的众筹模式）、社区讨论热度——这些指标不仅仅是商业KPI，它们同时也是游戏世界“社会密度”的测量值。

理解了这一结构，才能理解为什么电子竞技的体育精神与传统体育的体育精神在基础上是不同的。

### （三）电子竞技体育精神的特殊性

传统体育的竞技精神建立在一个简单而稳固的基础上：运动员通过对自身身体的训练来对抗生理限制。跳得更高、跑得更快、投得更准——这些成就的衡量标准是人体在物理世界中的表现极限。规则的作用在于确保这些成就是在公平的条件下完成的，但规则本身并不定义成就的内容——重力、空气阻力、肌肉纤维的收缩速度，这些是自然的给定物，而非任何人的设计产物。

电子竞技则完全不同。电子竞技中的一切“成就”——反应速度、多线操作能力、战术理解、信息处理效率——都发生在计算机代码所构建的封闭系统内部。[^13] 这个系统的物理法则（碰撞判定、视野范围、伤害计算）不是自然的给定物，而是开发者的设计产物。这意味着，电子竞技的“竞技精神”不仅关乎选手在给定规则下的公平竞争，更关乎这个给定规则本身的稳定性与可理解性。传统体育只需要关心“运动员是否遵守了规则”，电子竞技还必须额外关心“这栋建筑本身是否符合所有人的预期”——因为如果建筑中有一面墙是假的，而只有某个队伍知道这一点，那么整场竞赛的意义就被抽空了。

这就引出了本文的核心命题：漏洞利用的真正危害，不在于它提供了“不公平的优势”（任何新战术的发明最初都只被一方所掌握），而在于它动摇了观众和玩家对游戏世界的“一般印象”——一种关于“游戏是什么”的共享理解。

---

## 五、漏洞利用的破坏性：游戏均衡与共享意象的瓦解

### （一）作为竞技价值基础的游戏均衡

在电子竞技中，观众所观赏的并不是赤裸裸的效率竞赛。如果一项比赛纯粹比谁更快、谁反应更敏捷，那么最刺激的比赛应该是在训练房里测量反应时间。电竞之所以具有可观看性，是因为它始终存在一种张力——选手在已知规则空间内部进行创造性的策略选择，而观众之所以能理解和投入这种观赏，恰恰是因为他们与选手共享着对“游戏规则是什么”的认知。

我们姑且将这种共享认知称为**游戏均衡**（game equilibrium）：一套被玩家、观众、选手、解说乃至开发商共同默认的关于“游戏正常运作方式”的预期。游戏均衡并不等同于游戏的实际代码——代码永远比任何人的理解更复杂——但它构成了赛事观赏经验得以成立的基本框架。当一名选手在CS中投掷烟雾弹，观众之所以觉得这一操作“有意义”，是因为观众理解烟雾弹的遮蔽逻辑；当Dota 2中一支队伍选择分路策略，观众之所以能评价其优劣，是因为观众知道地图的对称性和资源的分布规律。

游戏均衡的维持，取决于一个关键条件：游戏世界中的因果链在直观上是可理解的。也就是说，当一个事件在游戏中发生时，观众应该能大致追溯其原因——不是因为观众受过编程训练，而是因为游戏呈现出来的视觉表现和因果关系与观众对“这个世界如何运作”的直觉理解相吻合。

### （二）漏洞利用对游戏均衡的破坏机制

漏洞利用恰恰在这一点上构成了威胁。当olofmeister站在一块看不见的碰撞体上时，观众在直播画面中看到的是“一个玩家悬浮在空中”——这直接抵触了玩家和观众共享的关于这个游戏世界的物理直觉。当Dendi的Pudge在泉水钩中跨越整张地图将敌人拖入泉水时，观众看到的是一个因果断裂：钩子→传送→秒杀——每一步都是游戏允许的，但合成的效果已经超出了任何正常观众对“钩子能造成什么结果”的一般理解。

这正是漏洞利用与传统战术创新之间的根本分界线。传统的战术创新——例如星际争霸中的某一套新的开局流程——虽然也可能让对手措手不及，但它始终运行在游戏均衡的内部。对手可以理解自己为什么输了（“我的侦查不够及时”“他的时机掌握得比我好”），观众也可以理解比赛的关键转折点。而漏洞利用型胜利产生的是另一种体验：对手无法理解自己为什么输了（“子弹是从哪里飞来的？”“他怎么知道我们打这边？”），观众也无法将比赛进程纳入他们已有的游戏理解框架。

换一种说法：漏洞利用将竞技从“信息不完全但因果透明的博弈”转化为“因果本身不可知的博弈”。在前一种博弈中，观众和选手至少知道游戏的基本规则——虽然不知道对方的策略。在后一种博弈中，连基本规则都变得不可靠。而一旦基本规则不可靠，竞技的可观看性就崩塌了——因为观赏竞技的前提，恰恰是观众相信他们看懂了比赛中正在发生的事情。

### （三）被冒犯的共同体

由此可以理解，社区对漏洞利用的愤怒为何往往远超漏洞本身的技术危害。人们愤怒不是因为“这不公平”，而是因为“这不是我认知中的那个游戏”。职业选手和重度玩家投入了数千小时来构建对这个游戏世界的理解——他们熟悉每一张地图的每一个角度，每一个技能的每一种交互。漏洞利用不仅仅是在赛场上获取了优势，它更是在暗示：你们所熟悉和热爱的那个世界，其实从来都不完整。这种被背叛的感觉，远比“比赛输了”更难以消化。

这也可以解释为什么社区对各种漏洞的反应强度存在显著差异。星际争霸的飞龙聚团和采矿穿人，虽然在技术上同样利用了引擎漏洞，但它发生在游戏机制的深层逻辑层面——观众在观看比赛时，看到的仍然是“飞龙在攻击”，画面上的因果链并未断裂。与此相对，Olofboost画面上的因果链断裂了：没有人能解释为什么一个玩家站在空气中，没有人能从画面中理解子弹的弹道为什么从这个位置射出。前者虽然利用了代码的意外交互，但仍然维持了游戏世界的直观可理解性；后者则直接挑战了观众对物理空间的基本直觉。

用更理论化的语言来表述：漏洞利用的严重程度，与其说取决于它在代码层面偏离设计意图的程度，不如说取决于它在知觉层面偏离**共享意象**（shared imagery）的程度。共享意象，指的是玩家和观众群体对“游戏世界看上去应该是什么样子”的集体想象。它是魔法圈在视觉和直觉层面上的边界线。几何体漏洞之所以引发最大规模的愤怒，正是因为它更直观地冲破了这条边界线——一个人站在空气中，所有人都能看到“这是不对的”。而引擎运算漏洞的视觉表现仍然在共享意象的内部——“飞龙在攻击”这一画面本身不需要修正观众的认知框架。

---

## 六、惩罚还是不惩罚：一场多方博弈

既然漏洞利用的危害在于破坏游戏均衡与共享意象，那么接下来的问题是：为什么有些漏洞利用受到了惩罚（或自我惩罚），而有些却没有？为什么星际争霸的引擎漏洞技巧最终被接受为机制，Olofboost导致了战队放弃资格，泉水钩既未被重赛也未被追究，而教练观战漏洞则引发了电竞史上最大规模的处罚？

答案不在于漏洞本身的“严重程度”这一单一维度，而在于特定游戏类型的盈利模式所塑造的利益格局，以及观众、战队、开发商、赛事组织方四方之间的博弈均衡。

### （一）盈利模式与利益格局

不同类型的电子竞技游戏依赖不同的盈利模式，这些模式决定了对漏洞利用的容忍度。

**Dota 2 的众筹-信仰模式。** Dota 2的国际邀请赛（The International）采用一种独特的众筹机制：玩家购买Battle Pass（勇士令状）的收入中，25%直接注入TI奖金池。[^14] 这意味着赛事的奖金规模完全取决于玩家社群对游戏的情感投入程度——玩家花钱不是为了获得游戏内优势，而是为了“支持这款游戏”和“成为赛事的一部分”。在这种模式下，Valve的经济利益与社群对“游戏世界完整性”的情感投入高度绑定。如果Valve推翻比赛结果——例如因为泉水钩而重赛——它将同时冒犯Na'Vi的粉丝群（他们已经将Dendi视为英雄）和众筹机制所依赖的“赛事结果自主性”这一信仰。Valve的选择——接受结果但迅速修复漏洞——因此是高度理性的：它同时保护了赛事的终局性信仰和游戏的技术完整性。事后修复告知社群“我们知道这是错的”，而不推翻结果则保护了赛事作为“自主发生的事件”的仪式性神圣感。

**CS:GO/CS2 的皮肤经济模式。** Counter-Strike的盈利核心是皮肤交易市场。Valve从每一次皮肤市场交易中抽取手续费，而皮肤的价值又与其稀有度和赛事关联性直接相关。[^15] 这种模式下的利益计算与Dota 2不同：CS的玩家社群更碎片化（不像Dota 2有TI这一单一的中心仪式），对职业赛事的规则争议反应也更分散。但另一方面，CS的“现实军事题材”使得游戏世界的物理真实性被更高程度地强调——玩家更容易识别出“不应该出现”的几何体异常。Olofboost事件中，Fnatic放弃重赛资格的自我惩罚，实质上是在皮肤经济的舆论压力面前选择了保护品牌价值——继续打下去可能面临更长期的声誉损失。

**星际争霸的传统赛事模式。** 与上述两者不同，《星际争霸：母巢之战》是一个在电竞产业模式成型之前就已达到顶峰的竞技项目。它的韩国职业联赛由电视台（OGN、MBC Game）而非游戏开发商主导，其盈利来自广告和收视率，而非游戏内的微交易。暴雪在星际电竞中的经济利益相对疏远——它的核心收入是游戏本体和资料片的销售（典型的买断制，而非服务制）。这种疏远解释了暴雪对引擎漏洞技巧的冷淡态度：修复漏洞需要投入开发资源，而投入这种资源在买断制模式下没有直接回报。更重要的是，韩国职业圈已经围绕这些“引擎技巧”发展出了整个战术生态——飞龙聚团的视觉观赏性已成为转播的卖点，Mineral Walking的侦查博弈则丰富了比赛的战术层次。此时修复漏洞不仅成本高昂，还可能激怒韩国电竞圈——暴雪最重要但最微妙的市场关系之一。[^16]

### （二）四方博弈参与者分析

通过上述案例，可以识别出漏洞利用争议中的四方博弈参与者，他们各自拥有不同的利益偏好和策略倾向。

**普通观众与玩家社群。** 他们是游戏均衡与共享意象的最终维护者——不是因为制度授权，而是因为他们构成了游戏社交世界的居民。他们的利益在于“游戏世界具有可理解性”。他们的权力来源是集体舆论——在社交媒体时代，社区的一致愤怒可以转化为实际的经济威胁（皮肤市场波动、玩家流失）。他们的核心策略是“违规化叙事”：通过将一种行为描述为“破坏游戏”而非“创新战术”，他们构建道德压力迫使其他三方采取行动。在Olofboost事件中，社区的“双方漏洞不是一个量级”叙事压倒了官方“各打五十大板”的裁决；在泉水钩事件中，社区的分裂（欧美vs.中国）则使得任何一致行动都难以组织。

**职业战队与选手。** 他们是漏洞的发现者和首要利用者。在竞技压力下，他们的核心利益是“赢得比赛”——任何未被规则明确禁止的竞争优势都有被利用的激励。但同时，他们也有“声誉管理”的长期利益，因为职业选手的收入越来越依赖于个人品牌、直播收入和粉丝赞助，而非单纯的赛事奖金。这解释了Olofboost事件中Fnatic在赢得重赛裁决后仍然选择放弃资格的悖论性行为：短期竞技利益（重赛可能赢）与长期商业利益（品牌被永久污染的风险）发生了冲突，而后者胜出。战队在面对漏洞时的策略选择取决于漏洞的“视觉恶劣程度”——越直观的视觉异常，声誉风险越高，自我约束的激励越强。

**开发商。** 他们掌握着“离线修正权”——通过补丁重新定义什么是“正确的”游戏行为。他们的核心利益是维护游戏作为社交平台的长线健康——一个规则崩溃的游戏世界将丧失它的居民。他们的权力在于：他们可以选择修复（通过行动宣告“这是bug”）或不修复（通过不作为默认“这是机制”）。但修复的技术成本和开发优先级受盈利模式约束：服务型游戏（Dota 2、CS2）修复成本可以被玩家持续付费所覆盖；买断制游戏（星际）的修复激励则较低。开发商还有一个额外的激励：他们不希望在规则层面与赛事裁判方或玩家社区发生正面冲突，因为这种冲突本身就会提醒玩家“魔法圈的边界是由公司决定的”——这是一种对魔法圈神圣性的去魅，对长线社交资本积累不利。

**赛事组织方。** 他们是赛场上的即时裁判者。他们的核心利益是“赛事的合法性与观赏性”和“与开发商保持良好关系”。他们的软肋在于：赛前规则永远无法穷尽所有可能的代码交互，因此他们不得不在规则空白处援引“竞技精神”或“赛事诚信”等弹性条款。他们的策略——尤其是在ESIC处理教练观战漏洞时——是发展出一套量化标准（持续时间、视野范围）来将弹性判断操作化。但赛事组织方的权力最终受制于开发商：如果开发商事后通过补丁“宣告”了某个行为是漏洞（如泉水钩），赛事方的事前裁判便面临被事后否定或事后追认的尴尬。如果开发商不配合（如暴雪对星际引擎技巧的沉默），赛事方则无法独立完成对行为的定性。

### （三）从案例中归纳的条件性规律

综合以上分析，可以从上述案例中提炼出几条关于“漏洞利用在何种条件下被惩罚”的条件性规律。

**第一，惩罚的发生概率与漏洞的视觉可识别度正相关。** 几何体漏洞（Olofboost）的视觉异常直接冲击共享意象，舆论反应最强烈，战队自我惩罚激励最高。而引擎运算漏洞（飞龙聚团）的视觉表现正常，几乎从未被惩罚。技能交互漏洞（泉水钩）介于两者之间——其视觉效果虽然异常（敌人飞越整张地图），但每一步骤都在常规游戏视觉语言之内。

**第二，惩罚的发生概率与开发商的盈利模式介入程度正相关。** 在Dota 2的众筹模式下，Valve对泉水钩选择了“赛事期间官方声明其为技巧+赛后静默修复代码”的双轨策略——TI3期间由中国解说海涛向Valve官员当面求证后公开传达“这不是Bug，是技巧（Combo）”，从而避免在赛事进行中制造规则危机；赛后IceFrog则以补丁形式修改了钩子逻辑，以技术手段完成设计层面的否定。这一策略同时保护了赛事的即时完整性和游戏的长线技术一致性，尽管它在两个时间点上给出了彼此矛盾的评价。在CS:GO的皮肤经济模式下，Valve对Olofboost没有直接裁决（裁决是DreamHack做的），但迅速修复了地图，并向社区发出了明确的信号（那块纪念标牌）。在星际的买断制模式下，暴雪干脆不作为——因为它没有足够的商业动机去介入韩国职业圈的内部规范。盈利模式越依赖长线社交资本，开发商的介入越积极；但这种介入倾向于采取“技术修复”而非“规则推翻”的形式，因为前者改变的是代码，后者冒犯的是信仰。

**第三，对同一起漏洞的最终定性，是在特定的社区文化共识或不共识中形成的。** 泉水钩事件的跨社区分裂——中国社区几乎一致谴责，欧美社区意见分化——表明“竞技精神”并非一个普适常数，而是特定文化圈层对“什么是合理竞争”的集体直觉。当这个直觉在全球范围内不一致时（如中国观众更容易将Dendi的行为视为“投机取巧”，而部分欧美观众更倾向于将其视为“天才发挥”），任何试图给出统一裁判的尝试都将面临来自某一方的合法性危机。这也是为什么Valve选择“沉默裁决+技术修复”的策略：不对文化争议表态，而用代码来终结争议。这一策略在操作上有效，但在原则上回避了问题。

**第四，处罚力度与行为是否涉及“结构性信息优势”高度相关。** 教练观战漏洞之所以引发了电竞史上最大规模的处罚行动，不在于它改变了某一场比赛的结果，而在于它彻底撕毁了竞技博弈的基础假设——我方看不到的敌人，本应也看不到我方。当结构性信息漏洞被制度化利用（持续数个回合、教练持续发出战术指令），它所破坏的就不仅是一场比赛的公平，而是整个职业赛事作为“公正仪式”的可信度。在这一层面上，ESIC的处罚行动与其说是在惩罚个人，不如说是在向公众执行一次制度信用的紧急修复。

---

## 七、结论

本文试图论证，电子竞技漏洞利用的争议之所以反复出现且从未获得原则性的解决，原因在于它所牵涉的不仅是规则法理学问题，而且是电子游戏产业价值生产模式的深层矛盾。游戏本身是免费开放的，它的商业价值来源于玩家围绕游戏所建立的社交世界——一个被共同意义和共享意象所包裹的魔法圈。电子竞技赛事是这个社交世界的集中展演和最终确认：它将日常游戏中积累的集体情感和公平信念压缩进一场可观看的仪式，并通过这一仪式为整个游戏世界的“社会密度”赋予可见的证明。

正是在这一结构中，漏洞利用的危害暴露了其真正面目。它并不是简单地“提供了不公平的优势”——任何新战术的发明一开始都只被少数人掌握。它的危害在于击穿了观众与玩家对游戏世界的共享意象，使得竞技从“信息不完全但规则可理解的博弈”降格为“规则本身不可靠的操纵”。人们愤怒不是因为输赢，而是因为他们所熟悉的那个游戏世界突然变得陌生了。

而漏洞利用是否被惩罚、以何种方式被惩罚，则取决于特定游戏类型盈利模式所塑造的四方博弈格局。普通观众依靠集体舆论来维护游戏世界的可理解性；职业战队在竞技利益与声誉管理之间权衡；开发商通过“技术修复”而非“规则推翻”来维护作为平台基础的社会信任；赛事组织方则在规则空白处通过弹性条款和量化标准来执行即时裁判。这四方之间没有固定的权力等级——每一次争议的结果都是他们在具体情境中博弈的暂时均衡。

这一分析框架的实践意义在于：未来的电子竞技规则改革不应继续在“更精确地定义漏洞”这一路径上做无限的条文细化——代码交互的可能性是无限的，条文永远跟不上一行代码的变化。相反，应该建立一种基于“视觉可识别度”和“因果可理解性”的裁判原则：不是判断一个行为是否偏离了开发者的设计意图（这在赛场上不可知），而是判断一个行为是否可以被观众在画面中自然地理解和接受。这一原则的哲学基础在于：电子竞技不仅仅是选手之间的比赛，更是选手、观众与游戏世界之间的一场三方契约。这个契约的内容不是“每个人都绝对平等”，而是“每个人都知道游戏世界的基本样貌”——漏洞利用之所以不可容忍，不在于它让某个选手赢了，而在于它让观众不再相信自己看到的世界是真实的。


## 参考文献

### 一、事件报道与事实核查来源（按事件分类）

**Olofboost（DreamHack Winter 2014）**

[1] HLTV.org, "LDLC file protest over fnatic boost," November 29, 2014. [https://www.hltv.org/news/13722/ldlc-file-protest-over-fnatic-boost](https://www.hltv.org/news/13722/ldlc-file-protest-over-fnatic-boost)

[2] HLTV.org, "DH: 'Overpass will be replayed'," November 29, 2014. [https://www.hltv.org/news/13726/dh-overpass-will-be-replayed](https://www.hltv.org/news/13726/dh-overpass-will-be-replayed) —— 此篇报道记录了DreamHack裁决从“重赛下半场”到“全图重赛”的完整变化过程。

[3] Liquipedia, "Fnatic Overpass Boost Controversy." [https://liquipedia.net/counterstrike/User:Gaioa/Boostmeister](https://liquipedia.net/counterstrike/User:Gaioa/Boostmeister)

[4] GosuGamers, "Dreamhack Winter 2014: Admins Rule Overpass Boost Illegal, Fnatic Retaliate," November 29, 2014. [https://www.gosugamers.net/counterstrike/news/29193-dreamhack-winter-2014-admins-rule-overpass-boost-illegal-fnatic-retaliate](https://www.gosugamers.net/counterstrike/news/29193-dreamhack-winter-2014-admins-rule-overpass-boost-illegal-fnatic-retaliate)

[5] Wikipedia, "Olofboost." [https://en.wikipedia.org/wiki/Olofboost](https://en.wikipedia.org/wiki/Olofboost)

[6] Aftonbladet Esport, "Sources: 'Fnatic was forced to forfeit by their sponsor'," November 2014. [https://bloggar.aftonbladet.se/esport/csgo/sources-fnatic-forced-forfeit-sponsor/](https://bloggar.aftonbladet.se/esport/csgo/sources-fnatic-forced-forfeit-sponsor/) —— 后续调查报道称Fnatic赞助商Steelseries施加了退赛压力，但Fnatic教练Devilwalk否认这一说法，称退赛决定完全由选手作出。

**KOI / CS2 队伍切换菜单音频漏洞（2024年1月）**

[7] Escorenews, "CS2 Team Change Menu Bug Allows to Hear Opponents' Sounds Across Map," January 2024. [https://escorenews.com/en/csgo/news/54746-cs2-team-change-menu-bug-allows-to-hear-opponents-sounds-across-map](https://escorenews.com/en/csgo/news/54746-cs2-team-change-menu-bug-allows-to-hear-opponents-sounds-across-map)

[8] 5EPlay, "KOI被指控恶意使用游戏BUG dav1g发推回应," 2024年1月11日. [https://csgo.5eplay.com/article/240111s8h7cr](https://csgo.5eplay.com/article/240111s8h7cr) —— KOI选手dav1g发推否认指控，解释其战术轮转基于对对手投掷物使用的观察；mopoz随后作出相同表示。dav1g的原推文后被删除。

**教练观战漏洞丑闻（Coach Spectator Bug, 2020）**

[9] ESIC (Esports Integrity Commission), "ESIC to Issue Charges Resulting from Historical Spectator Bug Investigation," September 28, 2020. [https://esic.gg/press-release/esic-to-issue-charges-resulting-from-historical-spectator-bug-investigation/](https://esic.gg/press-release/esic-to-issue-charges-resulting-from-historical-spectator-bug-investigation/)

[10] HLTV.org, "ESIC Issues Bans to 37 Coaches for Spectator Bug Use," September 28, 2020. [https://www.hltv.org/news/30351/esic-issues-bans-to-37-coaches-for-spectator-bug-use](https://www.hltv.org/news/30351/esic-issues-bans-to-37-coaches-for-spectator-bug-use)

[11] HLTV.org, "ESIC Shares Stance on Coach Bug Variants, Announces Incoming Ban Wave," March 2022. [https://www.hltv.org/news/33731/esic-shares-stance-on-coach-bug-variants-announces-incoming-ban-wave](https://www.hltv.org/news/33731/esic-shares-stance-on-coach-bug-variants-announces-incoming-ban-wave) —— ESIC确认了三种漏洞形态：固定观战（Static）、第三人称（Third-Person）和自由飞行（Free-Roam）。共84名教练受静态漏洞影响，47人受第三人称漏洞影响，3人受自由飞行漏洞影响。

[12] Dot Esports, "ESIC to Issue Almost 100 New Sanctions to CS:GO Spectator Bug Participants," May 6, 2022. [https://dotesports.com/counter-strike/news/esic-issue-almost-100-new-sanctions-csgo-spectator-bug-participants](https://dotesports.com/counter-strike/news/esic-issue-almost-100-new-sanctions-csgo-spectator-bug-participants)

[13] ESIC, "Alleged Complicity of Heroic Players in Historic Coaching Bug Scandal." [https://esic.gg/open_investigation/alleged-complicity-of-heroic-players-in-historic-coaching-bug-scandal/](https://esic.gg/open_investigation/alleged-complicity-of-heroic-players-in-historic-coaching-bug-scandal/) —— ESIC最终结论：无法以合理确定性确认选手是否参与了漏洞利用。

[14] William Fry, "Cheating in Esports: The 'Coach Spectator Bug' Decision." [https://www.williamfry.com/knowledge/cheating-in-esports-the-coach-spectator-bug-decision/](https://www.williamfry.com/knowledge/cheating-in-esports-the-coach-spectator-bug-decision/)

**泉水钩（The International 2013）**

[15] 百度百科, "泉水钩." [https://baike.baidu.com/item/泉水钩/9490339](https://baike.baidu.com/item/泉水钩/9490339)

[16] 52PK Dota 2, "V社回应屠夫泉水钩：这是技巧不是Bug," 2013年8月. [https://dota2.52pk.com/xinwen/5667590.shtml](https://dota2.52pk.com/xinwen/5667590.shtml) —— 记录了Valve在TI3期间通过中国Dota TV解说海涛向外界传达的官方立场：泉水钩被认定为“游戏中的技巧（Combo）”，而非Bug。

[17] 新浪游戏, "Dota2泉水钩 冰蛙修复补丁仍存BUG," 2013年9月26日. [http://games.sina.com.cn/xyz/n/2013-09-26/1335735490.shtml](http://games.sina.com.cn/xyz/n/2013-09-26/1335735490.shtml)

[18] TeamLiquid.net, "[TI3] Playoffs Day 5 — 社区讨论帖," August 2013. [https://tl.net/forum/dota-2-tournaments/455164-ti3-playoffs-day-5](https://tl.net/forum/dota-2-tournaments/455164-ti3-playoffs-day-5) —— 包含了TI3赛事期间社区对泉水钩争议的实时反应与讨论。

**星际争霸：母巢之战引擎漏洞技巧**

[19] Liquipedia, "July (Park Sung-joon)." [https://liquipedia.net/starcraft2/July](https://liquipedia.net/starcraft2/July) —— Park Sung-joon（JulyZerg），三届OSL冠军（2004、2005、2008），因其无与伦比的飞龙微操控制被广泛称为“飞龙之神”（God of Mutalisk）。在2011年GSL中仍以高APM飞龙操作为人称道。

[20] Liquipedia, "Sliding through Mineral Lines." [https://liquipedia.net/starcraft/Sliding_through_Mineral_Lines](https://liquipedia.net/starcraft/Sliding_through_Mineral_Lines)

[21] StarCraft AI Wiki, "Tricks, Glitches and Exploits." [https://starcraftai.com/index.php?title=Tricks,_Glitches_and_Exploits](https://starcraftai.com/index.php?title=Tricks,_Glitches_and_Exploits)

[22] Gaming Stack Exchange, "Are there any tournament-legal glitches in Starcraft 2?" [https://gaming.stackexchange.com/questions/81540/are-there-any-tournament-legal-glitches-in-starcraft2](https://gaming.stackexchange.com/questions/81540/are-there-any-tournament-legal-glitches-in-starcraft2) —— 讨论了星际争霸职业比赛中被接受为合法技巧的引擎漏洞利用，包括Mineral Walking与Mutalisk Stacking。

### 二、理论与学术文献

[23] Huizinga, Johan. *Homo Ludens: A Study of the Play-Element in Culture*. 1938. Boston: Beacon Press, 1955.

[24] Salen, Katie, and Eric Zimmerman. *Rules of Play: Game Design Fundamentals*. Cambridge, MA: MIT Press, 2003.

[25] Terranova, Tiziana. "Free Labor: Producing Culture for the Digital Economy." *Social Text*, vol. 18, no. 2, 2000, pp. 33–58.

[26] Kücklich, Julian. "Precarious Playbour: Modders and the Digital Games Industry." *Fibreculture Journal*, no. 5, 2005.

[27] Srnicek, Nick. *Platform Capitalism*. Cambridge: Polity, 2016.

[28] Rochet, Jean-Charles, and Jean Tirole. "Platform Competition in Two-Sided Markets." *Journal of the European Economic Association*, vol. 1, no. 4, 2003, pp. 990–1029.

[29] Taylor, T. L. *Raising the Stakes: E-Sports and the Professionalization of Computer Gaming*. Cambridge, MA: MIT Press, 2012.

[30] Wagner, Michael G. "On the Scientific Relevance of eSports." *Proceedings of the 2006 International Conference on Internet Computing*, CSREA Press, 2006.

[31] Karhulahti, Veli-Matti. "Reconsidering Esport: Economics and Executive Ownership." *Physical Culture and Sport. Studies and Research*, vol. 74, no. 1, 2017, pp. 43–53.

[32] Mereu, Marco. "The History of Starcraft II, its South Korean Launch, and the Game's Rise to the Top of Esports." *The International Journal of the History of Sport*, vol. 37, no. 11, 2020.

### 三、文中脚注补充说明

[^1]: DreamHack是由瑞典DreamHack AB主办的数字文化节，自1990年代起即成为北欧最大的局域网聚会（LAN party）和电子竞技赛事品牌。Winter 2014是CS:GO在2014年的第四个也是最后一个Major锦标赛，总奖金25万美元。Valve在赛后更新中删除了该碰撞体，并在原位置附近的栏杆上添加了一块德文告示牌“Geländer übersteigen verboten!”（“禁止翻越栏杆”）；在CS2（2023年发布）中又在该处增加了一块“罪犯”涂鸦，延续了CS系列以环境叙事纪念赛事历史事件的传统。

[^2]: 职业赛事在Olofboost事件后（2015–2016年）逐步建立分类体系。该分类至今仍是CS赛事规则手册中关于地图利用条款的事实标准。

[^3]: Na'Vi阵容：Dendi（Danil Ishutin，Pudge）、Puppey（Clement Ivanov，Chen）、XBOCT、Funn1k、KuroKy。TongFu阵容：Hao（Chen Zhihao，Gyrocopter）、Mu、SanSheng、Banana、KingJ。TongFu败者组被淘汰后，其核心四名选手（Hao、Mu、SanSheng、Banana）于次年重组为Newbee并赢得了TI4冠军。

[^4]: KOI战队系原Movistar Riders阵容（dav1g、mopoz、Martinez、JUST、adamS）。2024年1月PGL Copenhagen Major RMR公开预选赛期间，社区通过观察KOI对阵9INE的比赛中一次异常防守轮转提出指控。因CS2的比赛录像（Demo）不记录玩家是否打开队伍切换菜单，无法获取决定性证据。KOI从未被官方证实或处罚。

[^5]: ESIC的量化处罚标准综合考虑了“漏洞被利用的持续回合数”与“获得视野的范围大小”两个维度。最长禁赛（36个月）适用于Hard Legion教练Aleksandr "zoneR" Bogatyrev，其在16张地图、424个回合中利用了该漏洞。

[^6]: 星际争霸的关键版本号：1.08（2001年）、1.10（2003年）、1.15（2007年）、Remastered（2017年）。暴雪在所有这些版本中均保留了相关的引擎运算逻辑。

[^7]: 海涛在TI3期间与Valve官员当面沟通后向外界传达的原文大意：“经过与Valve官方沟通，泉水钩被视为游戏中的Combo，在TI3剩余比赛中允许使用。但不排除未来被修改或删除的可能。”这一声明的微妙之处在于，Valve没有把“技巧”和“会被删除”视为互斥范畴。

[^8]: 第一轮裁决由DreamHack赛事总监Christian "Hellspawn" Lord宣布，仅重赛下半场。Fnatic提交反诉后，DreamHack发现LDLC选手SmithZz在上半场防守侧Truck位置使用了类似的贴图透视站位（可透过贴图看到A点区域），因此修改裁决为全图重赛。Fnatic于次日宣布放弃重赛资格。olofmeister后来在接受采访时表示，他在事件后“几乎考虑退役”，Fnatic被职业圈“完全孤立”。Fnatic随后在2015年连夺Katowice和Cologne两届Major冠军，完成了舆论上的自我救赎。

[^9]: 参见Jean-Charles Rochet与Jean Tirole, "Platform Competition in Two-Sided Markets", *Journal of the European Economic Association*, vol. 1, no. 4, 2003, pp. 990–1029；Nick Srnicek, *Platform Capitalism* (Cambridge: Polity, 2016)。

[^10]: 参见Tiziana Terranova, "Free Labor: Producing Culture for the Digital Economy", *Social Text*, vol. 18, no. 2, 2000, pp. 33–58；Julian Kücklich, "Precarious Playbour: Modders and the Digital Games Industry", *Fibreculture Journal*, no. 5, 2005。

[^11]: 参见Johan Huizinga, *Homo Ludens: A Study of the Play-Element in Culture* (1938; Boston: Beacon Press, 1955)；Katie Salen与Eric Zimmerman, *Rules of Play: Game Design Fundamentals* (Cambridge, MA: MIT Press, 2003)。

[^12]: 参见T. L. Taylor, *Raising the Stakes: E-Sports and the Professionalization of Computer Gaming* (Cambridge, MA: MIT Press, 2012)。

[^13]: 参见Michael G. Wagner, "On the Scientific Relevance of eSports", *Proceedings of the 2006 International Conference on Internet Computing* (CSREA Press, 2006)；Veli-Matti Karhulahti, "Reconsidering Esport: Economics and Executive Ownership", *Physical Culture and Sport. Studies and Research*, vol. 74, no. 1, 2017, pp. 43–53。

[^14]: Dota 2的The International 2013总奖金超过280万美元。此后TI的众筹模式将奖金池推高至数千万美元量级（TI10总奖金超过4000万美元）。这一机制构成Dota 2盈利模式中最独特的元素。

[^15]: CS:GO/CS2的皮肤市场年交易额估计达数十亿美元量级，Valve从每笔市场交易中抽取15%的手续费。皮肤经济使得CS成为Valve最重要的持续收入来源之一，也使得CS社群对任何可能动摇游戏公平性的事件具有高度经济敏感性。

[^16]: 暴雪与韩国星际职业圈（KeSPA）之间的紧张关系在2010年前后达到顶峰。暴雪最初拒绝授权KeSPA转播星际争霸赛事，双方爆发了长达数年的知识产权争议。最终暴雪授权GomTV独家转播权。参见Marco Mereu, "The History of Starcraft II, its South Korean Launch, and the Game's Rise to the Top of Esports", *The International Journal of the History of Sport*, vol. 37, no. 11, 2020。
