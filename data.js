window.INTERVIEW_QA = [
  {
    id: "Q124",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "机器学习基础",
    tags: ["机器学习", "深度学习", "区别"],
    question: "深度学习与机器学习的异同及联系是什么？",
    answer: [
      "先说联系：深度学习是机器学习的一个子方向，不是平行关系。Machine Learning 的中文叫机器学习，Deep Learning 的中文叫深度学习。",
      "它们共同点都是从数据里学习规律，再把学到的规律用来做分类、回归、聚类、预测这些任务。",
      "区别第一是特征工程依赖不同。传统机器学习通常更依赖人工设计特征；深度学习更强调端到端自动学特征。",
      "第二是数据需求不同。深度学习通常更吃数据，数据越多优势越明显；传统机器学习在中小数据场景下往往更稳。",
      "第三是模型容量和算力需求不同。深度学习参数更多、更依赖 GPU；传统机器学习通常更轻。第四是可解释性不同。传统机器学习很多模型更容易解释；深度学习通常表达力更强，但可解释性弱一些。",
      "一句话总结：机器学习更像人工特征加学习器，深度学习更像表示学习和任务学习一起做。"
    ]
  },
  {
    id: "Q125",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "数据处理",
    tags: ["数据不均衡", "SMOTE", "过采样"],
    question: "数据不均衡的处理方法有哪些？比如过采样、欠采样、SMOTE。",
    answer: [
      "数据不均衡的核心是少数类太少，模型容易偏向多数类。",
      "数据层面可以做过采样少数类、欠采样多数类。SMOTE 的英文全称是 Synthetic Minority Over-sampling Technique，中文一般叫合成少数类过采样方法。它不是简单复制少数类样本，而是在少数类样本之间插值合成新样本。",
      "损失函数层面可以给少数类更大的类别权重，或者用 Focal Loss，让模型更关注难样本和少数类。",
      "训练和评估层面可以调整分类阈值，分层采样划分数据，评估时多看 Precision、Recall、F1、PR-AUC，不要只看准确率。Precision 中文叫精确率，Recall 中文叫召回率，PR-AUC 一般指 PR 曲线下面积。"
    ]
  },
  {
    id: "Q126",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "数据处理",
    tags: ["样本不均衡", "AUC", "过采样"],
    question: "样本不均衡怎么解决？如果把过采样样本重复很多次，AUC 会不会变？",
    answer: [
      "先说解决方法，核心还是重采样、类别加权、改损失函数、调阈值、换更合适的评估指标。",
      "至于把某个过采样样本重复很多次，AUC 会不会变，更稳妥的回答是：AUC 的定义本身不直接因为训练集复制次数改变，它取决于模型最终对样本的排序结果。",
      "所以不是说绝对不会变，而是说重复样本不会机械地让 AUC 按某个公式变化；真正改变的是模型训练后的输出分布和排序，从而间接影响最终 AUC。",
      "AUC 的英文全称是 Area Under the Curve，常见场景下说的是 ROC 曲线下面积。对于类别不均衡问题，很多时候 PR-AUC 比 ROC-AUC 更敏感。"
    ]
  },
  {
    id: "Q127",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["模型分析", "瓶颈分析", "排查"],
    question: "当模型性能不好时，如何分析模型的瓶颈？",
    answer: [
      "这题建议按排查链路答，不要一上来就猜模型结构。",
      "第一步先看数据：数据量够不够、标签准不准、类别分布是否严重不均衡、训练集和测试集分布是否一致。",
      "第二步看训练过程：loss 降不降、训练集和验证集谁差、有没有欠拟合或过拟合、学习率是不是合适。",
      "第三步看评估拆解：不要只看总指标，要按类别、按场景、按难例拆，看问题集中在哪。",
      "第四步看模型和推理链路：模型容量够不够、输入分辨率是否太低、后处理阈值是否合理、是不是前处理或后处理把效果卡住了。",
      "一句话总结：分析瓶颈要按数据、训练、评估拆解、模型与部署链路逐层排查。"
    ]
  },
  {
    id: "Q128",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "数据处理",
    tags: ["数据不均衡", "Focal Loss", "Hard Example Mining"],
    question: "数据不均衡有什么解决方式？从数据、模型选择以及损失函数选择角度怎么答？",
    answer: [
      "如果从三个角度答，可以这样说。",
      "数据角度：过采样、欠采样、SMOTE、数据增强、补采少数类数据。",
      "模型角度：优先选对不均衡相对更稳的模型或训练策略，比如支持类别权重的模型、集成方法，或者在深度学习里加 Hard Example Mining。Hard Example Mining 的中文叫困难样本挖掘。",
      "损失函数角度：加 class weight，也就是类别权重；用 Focal Loss；或者在排序任务里直接优化更贴近业务目标的损失。",
      "评估时还要补一句：数据不均衡问题里，不要只看 accuracy，更要看 recall、precision、F1、PR-AUC 这些指标。"
    ]
  },
  {
    id: "Q119",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["过拟合", "欠拟合", "泛化"],
    question: "什么是过拟合？过拟合怎么解决？",
    answer: [
      "Overfitting 的中文叫过拟合，意思是模型在训练集上学得太好了，连噪声和偶然性也记住了，所以训练集效果很好，但验证集和测试集效果差。",
      "对应地，Underfitting 的中文叫欠拟合，意思是模型连训练集规律都没学好，训练集和测试集都表现差。",
      "怎么解决过拟合，常见方法有：加数据或者做数据增强、加正则化比如 L2 和 Dropout、做 Early Stopping、减小模型复杂度、做交叉验证、以及用更合适的训练策略。",
      "一句话总结：过拟合本质是泛化能力不够，解决思路就是减少模型记噪声的能力，提升它学共性规律的能力。"
    ]
  },
  {
    id: "Q120",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["深层网络", "浅层网络", "过拟合"],
    question: "深层网络容易过拟合还是浅层网络容易过拟合？",
    answer: [
      "一般来说，深层网络更容易过拟合，因为模型容量更大，表达能力更强，更容易把训练集细节甚至噪声也学进去。",
      "但这不是绝对的。如果数据量很大、正则化做得好、训练策略合理，深层网络也能泛化得很好。",
      "而浅层网络虽然不那么容易过拟合，但也更容易欠拟合，因为表达能力不够。",
      "所以更稳妥的说法是：在其他条件差不多时，深层网络更容易过拟合；浅层网络更容易欠拟合。"
    ]
  },
  {
    id: "Q121",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["防止过拟合", "数据增强", "正则化"],
    question: "防止过拟合的方法有哪些？",
    answer: [
      "常见方法可以按四类记：数据、模型复杂度、正则化、训练策略。",
      "数据层面可以增加训练数据、做数据增强、清洗噪声数据。",
      "模型层面可以减小模型参数量、做剪枝、换更简单的结构。",
      "训练层面可以做 Early Stopping、交叉验证和更合理的学习率策略。",
      "正则化层面可以用 L1、L2、Dropout、标签平滑、Mixup、CutMix。Mixup 中文一般叫样本混合增强，CutMix 中文一般叫区域裁剪混合增强。"
    ]
  },
  {
    id: "Q122",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["GAN", "Few-Shot Learning", "Dropout"],
    question: "过拟合要怎么解决？比如减少模型参数、早停、正则化、数据增强、GAN 合成数据、dropout、few shot learning。",
    answer: [
      "这题本质还是问你有没有系统方法。核心还是数据、模型复杂度、正则化和训练策略。",
      "第一，减少模型复杂度，比如减小网络、减少通道数、剪枝。第二，训练时做 Early Stopping，防止模型后期开始记噪声。第三，加正则化，比如 L2、Dropout。第四，做更强的数据增强，必要时可以用 GAN 合成数据扩充样本。",
      "GAN 的英文全称是 Generative Adversarial Network，中文叫生成对抗网络。",
      "Few-Shot Learning 的中文叫小样本学习。它本身不是防过拟合技巧本体，但在样本少的时候，引入预训练、迁移学习和小样本学习框架，确实能缓解因为数据少带来的过拟合问题。",
      "所以如果面试官提到这些词，更稳妥的回答是：GAN 和 few-shot 更多是数据不足场景下的辅助方案，核心手段还是数据、模型复杂度、正则化和训练策略。"
    ]
  },
  {
    id: "Q123",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "训练策略",
    tags: ["Batch Normalization", "BN", "过拟合"],
    question: "BN 为什么能在一定程度上防止过拟合？",
    answer: [
      "BN 的英文全称是 Batch Normalization，中文叫批量归一化。",
      "严格说，BN 的主要目的不是专门防过拟合，它最核心的作用是稳定训练、加快收敛。",
      "但它确实常常带来一点正则化效果。原因是 BN 在训练时使用 mini-batch 的均值和方差，这些统计量会带来随机扰动。",
      "这种扰动让每次前向传播都不完全一样，有点像给网络加了噪声，因此能减少模型对某些固定模式的过度依赖。",
      "所以更准确的说法是：BN 不是专门为防过拟合设计的，但因为 batch 统计噪声带来了轻微正则化效果，所以常常能在一定程度上缓解过拟合。"
    ]
  },
  {
    id: "Q116",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "模型压缩",
    tags: ["知识蒸馏", "Teacher", "Student"],
    question: "了解模型蒸馏吗？",
    answer: [
      "了解。Knowledge Distillation 的中文叫知识蒸馏，核心思想是先训练一个效果更强、通常更大的 teacher model，再让一个更小的 student model 去学习老师的输出。",
      "这里的关键不是只学 hard label，而是去学老师输出的 soft probability，因为软标签里会包含类别之间的相对关系，信息比 one-hot 更丰富。",
      "蒸馏时常见损失通常有两部分：一部分是学生对真实标签的普通损失，另一部分是学生去拟合老师输出的蒸馏损失。",
      "一句话面试版：蒸馏就是用大模型教小模型，让小模型尽量保留大模型效果，但推理更快、更省。"
    ]
  },
  {
    id: "Q117",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "模型压缩",
    tags: ["模型压缩", "知识蒸馏", "End-to-End"],
    question: "怎么做模型压缩？比如使用知识蒸馏、设计小网络，得到 End-to-End 模型。",
    answer: [
      "模型压缩常见可以从四条线来讲：知识蒸馏、结构设计、剪枝、量化。",
      "Knowledge Distillation 也就是知识蒸馏，用大模型带小模型；结构设计就是直接设计更轻量的网络，比如深度可分离卷积、瓶颈结构、减少通道数、减少层数，或者换成 MobileNet、ShuffleNet 这种轻量 backbone。",
      "Pruning 的中文叫剪枝，就是把不重要的通道、卷积核或者层裁掉，再做微调恢复精度。",
      "量化就是把原来 FP32 的权重和激活改成 INT8、INT4，甚至二值化。FP32 的英文全称是 32-bit Floating Point，中文叫 32 位浮点数；INT8 的英文全称是 8-bit Integer，中文叫 8 位整型。",
      "如果说做成 End-to-End 模型，面试里可以这样答：尽量把前处理、主干网络、任务头和后处理合到统一网络里，再配合蒸馏、轻量化结构、剪枝和量化一起做部署优化，这样工程链路更短，延迟通常更稳定。"
    ]
  },
  {
    id: "Q118",
    updatedAt: "2026-04-06",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "模型压缩",
    tags: ["量化", "PTQ", "QAT"],
    question: "介绍一下量化，比如 8bit、4bit、二值化。训练后量化和量化感知训练分别怎么实现？",
    answer: [
      "量化的目标是把模型里的数值表示从高精度改成低精度，减少模型大小、带宽和算力开销，从而加快推理。",
      "8-bit 也就是 INT8，最常见，精度和速度通常比较平衡；4-bit 压得更狠，但精度更容易掉；Binary Quantization 的中文叫二值化，通常把权重或激活压成负 1 和正 1，或者 0 和 1，压缩最强，但精度损失也最大。",
      "PTQ 的英文全称是 Post-Training Quantization，中文叫训练后量化。做法是先正常训练一个 FP32 模型，再拿一小批校准数据统计激活范围，然后把权重和激活映射到 INT8 或更低比特。它的优点是简单、快、不需要重新训练，缺点是低比特下精度可能掉得比较明显。",
      "QAT 的英文全称是 Quantization Aware Training，中文叫量化感知训练。做法是训练阶段就在前向里插入 fake quantization，也就是伪量化节点，让模型训练时就感受到量化误差；反向传播通常还是用浮点参数更新，但前向效果近似部署时的低比特推理。",
      "Fake Quantization 的中文叫伪量化，意思是训练时数值先做量化再反量化模拟，但底层参数还是浮点存着。",
      "一句话总结：PTQ 是先训好再压缩，QAT 是训练时就把量化误差考虑进去。8bit 通常先做 PTQ，精度不够再上 QAT；4bit 和二值化因为误差更大，往往更依赖 QAT。"
    ]
  },
  {
    id: "Q109",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["正则化", "泛化", "模型复杂度"],
    question: "正则化的本质是什么？",
    answer: [
      "正则化的本质，就是在把训练集拟合好的同时，再额外约束模型不要太复杂，避免把训练数据里的噪声也学进去。",
      "原来的目标只是让训练误差小，加了正则化之后，变成既要拟合数据，也要让参数别太夸张。",
      { type: "formula", latex: "Loss=L_{data}+\\lambda R(w)" },
      "这里 lambda 是正则化强度，控制你到底更重视拟合训练集，还是更重视模型简单和泛化能力。",
      "所以正则化的本质可以概括成一句话：通过限制模型复杂度来提升泛化能力。"
    ]
  },
  {
    id: "Q110",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["L1", "L2", "数学角度"],
    question: "L1 正则化和 L2 正则化的区别，从数学角度怎么说？",
    answer: [
      "L1 正则化是给参数绝对值和加惩罚，L2 正则化是给参数平方和加惩罚。",
      { type: "formula", latex: "\\|w\\|_1=\\sum_i |w_i|" },
      { type: "formula", latex: "\\|w\\|_2^2=\\sum_i w_i^2" },
      "所以目标函数会变成数据损失加上对应的正则项。",
      { type: "formula", latex: "Loss=L_{data}+\\lambda\\sum_i |w_i|" },
      { type: "formula", latex: "Loss=L_{data}+\\lambda\\sum_i w_i^2" },
      "从梯度角度看，L2 会平滑地把大参数往小拉；L1 的梯度更像符号项，所以更倾向于直接把一部分参数压到 0。"
    ]
  },
  {
    id: "Q111",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["L1", "L2", "稀疏解"],
    question: "L1 有什么缺点？L2 呢？平时用 L1 多还是 L2 多？为什么正则化更常选 L2？L1 为什么会产生稀疏解？",
    answer: [
      "先说结论，工程里一般 L2 用得更多。",
      "L1 的优点是能产生稀疏解，也就是很多参数直接变成 0，所以有特征选择效果。它为什么会产生稀疏解，本质上是因为 L1 的几何约束有尖角，最优点更容易落在坐标轴上。",
      "L1 的缺点是 0 点不可导，优化不如 L2 平滑；而且特征强相关时，L1 往往会随机偏向挑其中几个，不够稳定。",
      "L2 的优点是优化平滑、稳定，能抑制大权重，泛化通常更稳定。缺点是它会让参数变小，但通常不会真的变成 0。",
      "为什么更常选 L2？因为大多数深度学习任务更看重训练稳定和泛化表现，而不是硬稀疏，所以默认优先 L2。"
    ]
  },
  {
    id: "Q112",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["L1", "L2", "几何解释"],
    question: "L1、L2 的区别是什么？L1 为什么会让图像是菱形？",
    answer: [
      "这里说的菱形，其实是参数约束集合的几何形状。",
      "二维情况下，L1 约束是下面这个形式，画出来就是菱形。",
      { type: "formula", latex: "|w_1|+|w_2|\\le c" },
      "L2 约束是下面这个形式，画出来是圆。",
      { type: "formula", latex: "w_1^2+w_2^2\\le c" },
      "为什么 L1 更容易稀疏？因为菱形有尖角，而这些尖角正好落在坐标轴上。损失等高线往里收缩时，最优点更容易撞到角点，于是某些参数就直接变成 0。"
    ]
  },
  {
    id: "Q113",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["L1范数", "L2范数", "bias"],
    question: "L1 范数和 L2 范数的区别、作用是什么？为什么 bias 通常不正则？",
    answer: [
      "L1 范数是各维绝对值之和，L2 范数是平方和再开根号，但正则化里通常直接用平方和。",
      "作用上，L1 更偏向稀疏和特征选择；L2 更偏向平滑压缩权重、防止某些权重过大。",
      "为什么 bias 通常不正则？因为 bias 主要做整体平移，不像权重那样直接决定特征组合的复杂度。",
      "而且 bias 的参数量通常很少，不太容易成为过拟合的主要来源，所以正则化它的收益一般不大。"
    ]
  },
  {
    id: "Q114",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["奥卡姆剃刀", "过拟合", "泛化"],
    question: "为什么要用正则化？解释下奥卡姆剃刀。",
    answer: [
      "为什么要正则化，本质是为了防止过拟合，提高模型在没见过数据上的表现。",
      "Occam's Razor 的中文叫奥卡姆剃刀，它的核心思想是：如果有多个解释都能解释当前现象，优先选择更简单的那个。",
      "放到机器学习里就是：如果两个模型训练误差差不多，那通常更简单、参数更受约束的模型更容易泛化。",
      "正则化就是把这种偏好简单模型的原则显式写进目标函数里。"
    ]
  },
  {
    id: "Q115",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "正则化",
    tags: ["先验", "拉格朗日乘子", "MAP"],
    question: "L1 正则化与 L2 正则化的区别是什么？解释下参数先验和拉格朗日乘子法。",
    answer: [
      "如果从概率角度看，L2 正则化对应参数服从 Gaussian Prior，也就是高斯先验；L1 正则化对应参数服从 Laplace Prior，也就是拉普拉斯先验。",
      "为什么会这样？因为做 MAP，也就是 Maximum A Posteriori，中文叫最大后验估计时，负对数先验项会自然变成正则项。",
      "高斯先验对应平方项，所以得到 L2；拉普拉斯先验对应绝对值项，所以得到 L1。",
      "如果从约束优化角度看，也可以把问题写成最小化数据损失，同时要求参数范数不能超过某个上限。",
      "再通过 Lagrange Multiplier Method，也就是拉格朗日乘子法，就可以把约束形式转成损失函数里加惩罚项的形式。",
      "所以这题最好从两个角度答：一个是几何和优化角度，一个是贝叶斯先验和最大后验估计角度。"
    ]
  },
  {
    id: "Q098",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["SGD", "Online Learning", "梯度下降"],
    question: "SGD 每步做什么，为什么能做 online learning？",
    answer: [
      "SGD 的英文全称是 Stochastic Gradient Descent，中文叫随机梯度下降。",
      "它每一步先拿一个样本或者一个 mini-batch 算当前梯度，再按梯度反方向更新参数。",
      { type: "formula", latex: "w\\leftarrow w-\\eta\\nabla L(w)" },
      "这里 eta 是学习率，英文叫 Learning Rate，决定每次走多大。",
      "它能做 Online Learning，也就是在线学习，原因是它不需要等全量数据都准备好，只要来了一个新样本，就可以立刻算梯度、立刻更新参数。"
    ]
  },
  {
    id: "Q099",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["L1 Loss", "SGD", "次梯度"],
    question: "L1 是损失函数，有哪些优化方法，能用 SGD 吗？为什么？",
    answer: [
      "L1 Loss 中文叫绝对值损失，形式是预测误差的绝对值。",
      { type: "formula", latex: "L=|y-\\hat y|" },
      "它可以用 SGD，但要注意 L1 在 0 点不可导，通常用 subgradient，也就是次梯度来做。",
      "Subgradient 的中文叫次梯度，就是不可导点时用一个可接受的替代梯度。误差大于 0 时梯度是 1，小于 0 时是负 1，等于 0 时工程里常直接取 0。",
      "能用 SGD 的原因是，优化器不要求函数处处严格可导，只要大部分地方能算梯度或次梯度，就能迭代更新。",
      "但 L1 的梯度不随误差连续变小，所以收敛时震荡通常会比 L2 更明显。"
    ]
  },
  {
    id: "Q100",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Adam", "迭代公式", "自适应学习率"],
    question: "Adam 优化器的迭代公式是什么？",
    answer: [
      "Adam 的英文全称是 Adaptive Moment Estimation，中文一般叫自适应矩估计。",
      "它结合了动量和自适应学习率两部分。",
      { type: "formula", latex: "m_t=\\beta_1 m_{t-1}+(1-\\beta_1)g_t" },
      { type: "formula", latex: "v_t=\\beta_2 v_{t-1}+(1-\\beta_2)g_t^2" },
      { type: "formula", latex: "\\hat m_t=\\frac{m_t}{1-\\beta_1^t},\\quad \\hat v_t=\\frac{v_t}{1-\\beta_2^t}" },
      { type: "formula", latex: "\\theta_t=\\theta_{t-1}-\\eta\\frac{\\hat m_t}{\\sqrt{\\hat v_t}+\\epsilon}" },
      "其中 beta1 控制一阶动量，beta2 控制二阶动量，epsilon 是防止分母为 0 的小常数。"
    ]
  },
  {
    id: "Q101",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Adam", "二阶矩", "原理"],
    question: "Adam 用到二阶矩的原理是什么？",
    answer: [
      "这里的二阶矩不是在算真正的 Hessian，也不是牛顿法那种二阶导。",
      "它用的是梯度平方的指数滑动平均，也就是最近一段时间每个维度梯度波动有多大。",
      { type: "formula", latex: "v_t=\\beta_2 v_{t-1}+(1-\\beta_2)g_t^2" },
      "如果某一维梯度一直很大，说明这维更新容易太猛，就把步长缩小；如果某一维梯度比较小，就允许更大一点的更新。",
      "所以 Adam 的核心思想是：一阶矩负责提供稳定方向，二阶矩负责做每个维度的自适应缩放。"
    ]
  },
  {
    id: "Q102",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Batch GD", "SGD", "Mini-batch"],
    question: "几种梯度下降的方法和优缺点是什么？",
    answer: [
      "最常见三种是 Batch Gradient Descent、SGD 和 Mini-batch Gradient Descent。",
      "Batch Gradient Descent 中文叫批量梯度下降，每次用全量数据算梯度。优点是方向稳定，缺点是一次更新太慢，数据大时成本高。",
      "SGD 每次只用一个样本更新。优点是更新快，能在线学习，也更容易跳出一些局部不良点；缺点是噪声大，收敛路径抖动明显。",
      "Mini-batch Gradient Descent 中文叫小批量梯度下降，是现在最常用的折中方案。它兼顾并行效率和梯度稳定性，但 batch 太小会抖，batch 太大又会变慢。"
    ]
  },
  {
    id: "Q103",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Momentum", "Adam", "RMSProp"],
    question: "梯度下降系列算法有哪些？Momentum、Adam 这类算不算？",
    answer: [
      "算，当然算。广义上的梯度下降系列，不只是最原始的 GD、SGD，还包括各种基于梯度更新规则改造出来的优化器。",
      "基础类有 GD、SGD、Mini-batch SGD。",
      "加速类有 Momentum、Nesterov。Momentum 中文叫动量法，核心是给历史梯度一个惯性。",
      "自适应学习率类有 Adagrad、RMSProp、Adadelta。",
      "综合类有 Adam、AdamW、Nadam。",
      "所以面试里如果问梯度下降算法有哪些，最好把 momentum、RMSProp、Adam 这些一起说出来。"
    ]
  },
  {
    id: "Q104",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["SGD", "Adam", "发展史"],
    question: "讲一下你熟悉的优化器，说一下区别或发展史。",
    answer: [
      "可以按发展脉络讲：最早是 SGD，简单直接，但震荡大、对学习率敏感。",
      "然后是 Momentum，加入历史方向，减小来回摆动，加快沿主方向前进。",
      "再后来有 Adagrad，给不同参数维度自适应学习率，但它会让学习率越来越小。",
      "然后是 RMSProp，用指数滑动平均解决 Adagrad 学习率衰减过快的问题。",
      "最后是 Adam，把 Momentum 和 RMSProp 结合起来，所以一开始收敛通常很快。",
      "工程上常见经验是：Adam 前期收敛快，SGD 后期泛化有时更好；大规模训练里也常见 AdamW。"
    ]
  },
  {
    id: "Q105",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Adam", "默认参数", "优化器"],
    question: "有哪些优化算法？Adam 的默认参数有哪些？",
    answer: [
      "常见优化算法有 SGD、Momentum、Nesterov、Adagrad、RMSProp、Adam、AdamW。",
      "Adam 常见默认参数是学习率 lr 等于 0.001，beta1 等于 0.9，beta2 等于 0.999，epsilon 等于 1e-8。",
      { type: "formula", latex: "lr=10^{-3},\\quad \\beta_1=0.9,\\quad \\beta_2=0.999,\\quad \\epsilon=10^{-8}" },
      "这组默认值之所以常用，是因为大多数任务上比较稳，尤其是前期训练不太容易炸。"
    ]
  },
  {
    id: "Q106",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "数学基础",
    tags: ["方向导数", "梯度", "优化"],
    question: "方向导数和梯度是什么？它们的关系是什么？为什么梯度法有效？",
    answer: [
      "方向导数表示函数在某个方向上的变化率，梯度是把各个方向上的偏导数组合成的向量。",
      { type: "formula", latex: "\\nabla f(x)=\\left(\\frac{\\partial f}{\\partial x_1},\\dots,\\frac{\\partial f}{\\partial x_n}\\right)" },
      "沿单位方向向量 u 的方向导数等于梯度和这个方向的内积。",
      { type: "formula", latex: "D_u f(x)=\\nabla f(x)^T u" },
      "这说明梯度方向是函数上升最快方向，负梯度方向就是下降最快方向。",
      "所以梯度法有效，是因为在当前位置做局部一阶近似时，沿负梯度走，能最快降低目标函数。"
    ]
  },
  {
    id: "Q107",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["初始化", "Xavier", "He"],
    question: "神经网络权重初始化方法和优化方法有哪些？",
    answer: [
      "权重初始化常见有随机小值初始化、Xavier 初始化、He 初始化。",
      "Xavier Initialization 更适合 tanh、sigmoid 这类激活；He Initialization 更适合 ReLU 系列。",
      "优化方法常见有 SGD、Momentum、RMSProp、Adam、AdamW。",
      "面试里可以把两者连起来说：初始化决定一开始梯度稳不稳，优化器决定后面参数怎么走。如果初始化不好，再好的优化器也会很难训。"
    ]
  },
  {
    id: "Q108",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "优化算法",
    tags: ["Adam", "Adagrad", "优缺点"],
    question: "介绍一下你了解的优化器和各自优缺点？Adam 和 Adagrad 的区别是什么？",
    answer: [
      "SGD 的优点是简单、内存开销小、后期泛化常不错；缺点是收敛慢，对学习率敏感。",
      "Momentum 的优点是能加速、减小震荡；缺点是还得调动量参数。",
      "Adagrad 的优点是对稀疏特征友好，不同维度有自适应学习率；缺点是学习率会不断累积衰减，后期可能几乎不动。",
      "RMSProp 缓解了 Adagrad 学习率衰减过快的问题。",
      "Adam 的优点是收敛快、对超参相对不那么敏感；缺点是有时最终泛化不如 SGD。",
      "Adam 和 Adagrad 的核心区别是：Adagrad 会把历史平方梯度一直累加，所以学习率单调变小；Adam 用指数滑动平均记录一阶和二阶矩，不会无限累加，所以更适合长时间训练，也更稳定。"
    ]
  },
  {
    id: "Q093",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Sigmoid", "Tanh", "ReLU"],
    question: "各种常用激活函数对比下？比如 sigmoid、tanh、relu、lrelu。",
    answer: [
      "常见激活函数可以从输出范围、是否容易梯度消失、计算是否简单三个角度比较。",
      "Sigmoid 的英文全称就是 Sigmoid Function，中文一般叫 S 形激活函数。输出范围是 0 到 1，适合表示概率，比如二分类输出层，但两端容易饱和，梯度很小，而且输出不是零中心。",
      "Tanh 的英文全称是 Hyperbolic Tangent，中文叫双曲正切函数。输出范围是负 1 到 1，比 sigmoid 更零中心，所以优化通常更好一点，但同样会饱和，也会有梯度消失问题。",
      "ReLU 的英文全称是 Rectified Linear Unit，中文叫修正线性单元。它的公式很简单。",
      { type: "formula", latex: "f(x)=\\max(0,x)" },
      "ReLU 的优点是计算快，正半轴梯度恒定，不容易像 sigmoid 和 tanh 那样大面积梯度消失，所以训练深网络更稳定。缺点是负半轴梯度为 0，可能出现神经元死亡。",
      "Leaky ReLU 的英文全称是 Leaky Rectified Linear Unit，中文叫带泄漏的修正线性单元。它在负半轴保留一个很小斜率，比如 0.01x，这样能缓解 ReLU 的神经元死亡问题。",
      "一句话总结：深度学习里隐藏层更常用 ReLU 或 Leaky ReLU，因为更容易训练。"
    ]
  },
  {
    id: "Q094",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Sigmoid", "优缺点", "梯度消失"],
    question: "sigmoid 的优缺点是什么？",
    answer: [
      "Sigmoid 的优点是输出在 0 到 1 之间，很适合表示概率，所以常用于二分类输出层。",
      "它是连续可导的，形式也比较直观。",
      "缺点第一是输入很大或很小时会进入饱和区，梯度接近 0，容易梯度消失。",
      "第二是输出不是零中心，参数更新时梯度方向不够均衡。",
      "第三是 exp 计算相对比 ReLU 更慢一点。",
      "所以 sigmoid 现在一般不太用在深层隐藏层，但在逻辑回归和二分类输出层仍然常见。"
    ]
  },
  {
    id: "Q095",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Sigmoid", "ReLU", "区别"],
    question: "sigmoid 和 relu 的区别是什么？",
    answer: [
      "第一，输出范围不同。sigmoid 输出 0 到 1，ReLU 输出 0 到正无穷。",
      "第二，梯度特性不同。sigmoid 在两端容易饱和，梯度会很小；ReLU 在正半轴梯度是 1，更利于深层训练。",
      "第三，输出是否零中心不同。sigmoid 不是零中心；ReLU 也不完全零中心，但通常优化表现还是更好。",
      "第四，适用位置不同。sigmoid 更常用于二分类输出层；ReLU 更常用于隐藏层，尤其是深层网络。"
    ]
  },
  {
    id: "Q096",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["ReLU", "Leaky ReLU", "PReLU"],
    question: "平时用什么激活函数更多？为什么 ReLU 用得多？",
    answer: [
      "平时隐藏层最常用的是 ReLU 或它的变体，比如 Leaky ReLU、PReLU。",
      "PReLU 的英文全称是 Parametric Rectified Linear Unit，中文叫参数化修正线性单元，它和 Leaky ReLU 的区别是负半轴斜率可以学习。",
      "为什么 ReLU 用得多，核心是三点：第一，公式简单，计算快；第二，正半轴不容易梯度消失，深层网络更容易训练；第三，很多经典网络实践已经验证它效果稳定。",
      "所以现在面试里如果问隐藏层默认激活函数，优先答 ReLU，再补一句如果担心神经元死亡，可以用 Leaky ReLU 或 PReLU。"
    ]
  },
  {
    id: "Q097",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["Logloss", "逻辑回归", "BCE"],
    question: "写逻辑回归的 logloss 损失函数。",
    answer: [
      "逻辑回归的 logloss 本质上就是二元交叉熵。",
      "如果预测正类概率是 p，真实标签是 y，单样本损失写成下面这样。",
      { type: "formula", latex: "L=-\\left[y\\log p+(1-y)\\log(1-p)\\right]" },
      "如果是 N 个样本，平均损失可以写成下面这样。",
      { type: "formula", latex: "L=-\\frac{1}{N}\\sum_{i=1}^{N}\\left[y_i\\log p_i+(1-y_i)\\log(1-p_i)\\right]" },
      "它的直觉是：真实标签是 1，就希望 p 大；真实标签是 0，就希望 p 小。如果模型很自信但预测错了，损失会变得很大，所以它会强烈惩罚高置信度错误。"
    ]
  },
  {
    id: "Q086",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["交叉熵", "相对熵", "KL散度"],
    question: "交叉熵、相对熵怎么理解？它们之间是什么关系？",
    answer: [
      "交叉熵和相对熵本质上都在衡量两个分布差多远。",
      "相对熵也叫 KL 散度，英文全称是 Kullback-Leibler Divergence，中文一般叫 KL 散度或相对熵。它表示用预测分布 Q 去逼近真实分布 P 时损失了多少信息。",
      { type: "formula", latex: "D_{KL}(P\\|Q)=\\sum_x P(x)\\log\\frac{P(x)}{Q(x)}" },
      "交叉熵的英文全称是 Cross Entropy，中文叫交叉熵。它表示真实分布是 P，但你按 Q 来编码时平均需要多少信息量。",
      { type: "formula", latex: "H(P,Q)=-\\sum_x P(x)\\log Q(x)" },
      "两者关系是：交叉熵 = 真实熵 + KL 散度。训练时真实分布固定，所以最小化交叉熵，本质上就等价于最小化 KL 散度。",
      { type: "formula", latex: "H(P,Q)=H(P)+D_{KL}(P\\|Q)" }
    ]
  },
  {
    id: "Q087",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["分类", "回归", "常见损失"],
    question: "回归和分类的常用损失函数有哪些？",
    answer: [
      "分类里最常见的是交叉熵，因为分类任务本质上是在学类别概率分布。",
      "二分类常用 BCE，英文全称是 Binary Cross Entropy，中文叫二元交叉熵；多分类常用 Cross Entropy Loss。",
      "回归里最常见的是 MSE、MAE 和 Smooth L1。",
      "MSE 的英文全称是 Mean Squared Error，中文叫均方误差，对大误差惩罚更重。",
      "MAE 的英文全称是 Mean Absolute Error，中文叫平均绝对误差，更抗异常值。",
      "Smooth L1 Loss 也叫 Huber Loss，是 MSE 和 MAE 的折中。"
    ]
  },
  {
    id: "Q088",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["Logistic Regression", "最大似然", "BCE"],
    question: "Logistic Regression 损失函数怎么来的？",
    answer: [
      "Logistic Regression 的英文全称是逻辑回归，虽然名字里有回归，但它做的是分类。",
      "它先用线性部分算一个分数，再通过 Sigmoid 映射成 0 到 1 的概率。",
      { type: "formula", latex: "z=w^Tx+b,\\quad p=\\frac{1}{1+e^{-z}}" },
      "这里 Sigmoid 中文一般叫 S 形激活函数。接着我们假设标签服从伯努利分布，也就是结果只有 0 和 1 两种。",
      "伯努利分布的英文全称是 Bernoulli Distribution，中文叫伯努利分布。",
      { type: "formula", latex: "P(y\\mid x)=p^y(1-p)^{1-y}" },
      "训练时做极大似然估计，也就是让真实标签出现的概率最大。为了更好优化，通常取负对数，就得到损失函数。",
      { type: "formula", latex: "L=-\\left[y\\log p+(1-y)\\log(1-p)\\right]" },
      "这就是逻辑回归常见的对数损失，本质上就是二元交叉熵。"
    ]
  },
  {
    id: "Q089",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["Focal Loss", "IoU", "Dice"],
    question: "常见损失函数有哪些？",
    answer: [
      "可以按任务来记：分类常用交叉熵和 Focal Loss，回归常用 MSE、MAE、Smooth L1。",
      "Focal Loss 中文一般叫焦点损失，它会降低容易样本的权重，更关注难样本和类别不平衡场景。",
      "检测任务里，分类部分常用交叉熵或 Focal Loss，框回归部分常用 Smooth L1 或 IoU Loss。",
      "IoU 的英文全称是 Intersection over Union，中文叫交并比，表示预测框和真实框的重叠程度。",
      "分割任务里常见交叉熵、Dice Loss、Focal Loss。",
      "Dice 一般指 Dice Coefficient，中文叫 Dice 系数，用来衡量两个区域的重合程度。"
    ]
  },
  {
    id: "Q090",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["逻辑回归", "概率解释", "交叉熵"],
    question: "逻辑回归中损失函数的实际意义是什么？",
    answer: [
      "逻辑回归里的损失函数，本质上是在惩罚你给真实标签的概率太低。",
      "如果真实标签是 1，你预测的概率 p 越接近 1，损失越小；如果你很自信地预测错了，比如真实是 1 但给了很小的概率，那损失会非常大。",
      { type: "formula", latex: "L=-\\left[y\\log p+(1-y)\\log(1-p)\\right]" },
      "所以它的实际意义有两个：一是从概率角度，它对应最大似然估计；二是从训练角度，它会强烈惩罚高置信度错误。",
      "这比简单算分类对错更合理，因为它把预测概率也纳入了优化目标。"
    ]
  },
  {
    id: "Q091",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["Smooth L1", "Huber Loss", "回归"],
    question: "Smooth L1 loss 公式以及为什么这么设计？",
    answer: [
      "Smooth L1 Loss 可以理解成小误差时像 L2，大误差时像 L1。",
      "L1 全称是 L1 Loss，中文叫绝对值损失；L2 常指平方损失，这里对应均方误差。",
      "设误差是 x = y_hat - y，常见写法如下。",
      { type: "formula", latex: "SmoothL1(x)=\\begin{cases}0.5x^2,& |x|<1\\\\ |x|-0.5,& |x|\\ge 1\\end{cases}" },
      "这么设计的原因是：小误差区间用平方项，函数更平滑、梯度更稳定，利于收敛；大误差区间改成线性增长，避免像 MSE 那样被异常值主导。",
      "所以它兼顾了 MSE 的平滑性和 MAE 的鲁棒性，在目标检测框回归里特别常见。"
    ]
  },
  {
    id: "Q092",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "损失函数",
    tags: ["交叉熵", "分类", "最大似然"],
    question: "为什么分类问题常用交叉熵？它是怎么来的？",
    answer: [
      "因为分类问题通常希望模型输出的是每个类别的概率，而交叉熵刚好就是衡量预测概率分布和真实分布差多少的损失。",
      "如果真实标签是 one-hot，那么多分类交叉熵可以写成下面这个形式。",
      { type: "formula", latex: "L=-\\sum_i y_i\\log p_i" },
      "因为只有真实类别那一项不为 0，所以它本质上就是：正确类别概率越大，损失越小；正确类别概率越小，损失越大。",
      "它怎么来的，本质也是最大似然估计。你假设样本标签服从某个离散分布，想让真实标签出现的概率最大；对似然取负对数以后，就得到交叉熵损失。",
      "一句话面试版总结：分类问题用交叉熵，是因为它和概率建模天然一致，而且能直接惩罚模型对真实类别给出的低概率预测。"
    ]
  },
  {
    id: "Q076",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["ROC", "AUC", "F1"],
    question: "有哪些评价指标，比如 ROC、AUC、F1-Score？",
    answer: [
      "常见分类指标有准确率、精确率、召回率、F1、ROC、AUC、PR 曲线。",
      "准确率适合类别均衡，精确率和召回率适合更关注误报或漏报的场景。",
      "F1 用来平衡精确率和召回率，ROC/AUC 更关注排序能力和整体区分能力。"
    ]
  },
  {
    id: "Q077",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["mAP", "PR曲线", "Recall"],
    question: "解释下深度学习中的评价指标：mAP、PR 曲线、AUC、Recall？",
    answer: [
      "Recall 是召回率，表示正样本里有多少被找出来；PR 曲线展示不同阈值下 precision 和 recall 的关系。",
      "AUC 是 ROC 曲线下面积，反映模型整体区分正负样本的能力。",
      "mAP 常用于检测任务，是多个类别 AP 的平均值。"
    ]
  },
  {
    id: "Q078",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["AUC", "ROC", "实现"],
    question: "AUC 怎么计算？它画的是什么？实现 AUC 的过程是什么？",
    answer: [
      "AUC 对应的是 ROC 曲线下面积。ROC 曲线横轴是 FPR，纵轴是 TPR。",
      "TPR 是真正率，也叫召回率，表示真实正样本里有多少被预测成正，公式是 TP / (TP + FN)。",
      "FPR 是假正率，表示真实负样本里有多少被误判成正，公式是 FP / (FP + TN)。",
      "实现时通常先收集每个样本的预测分数和真实标签，再按分数从高到低排序，依次改变阈值，计算每个阈值下的 TPR 和 FPR。",
      "把这些点画出来连成线，就是 ROC 曲线；最后通常用梯形法求曲线下面积，得到 AUC。",
      "也可以从排序角度理解：AUC 等于随机取一个正样本，它得分高于随机取一个负样本的概率。"
    ]
  },
  {
    id: "Q079",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["AUC", "秩和", "公式"],
    question: "给你 M 个正样本、N 个负样本以及预测值 P，怎么求 AUC？",
    answer: [
      "一种常见做法是按预测分数排序，统计正样本排名和，再用秩和公式计算。",
      { type: "formula", latex: "AUC=\\frac{\\sum rank_{pos}-\\frac{M(M+1)}{2}}{MN}" },
      "本质上还是在看正样本得分超过负样本的比例。"
    ]
  },
  {
    id: "Q080",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["AUC", "排序", "单调变换"],
    question: "如果所有预测值都乘 1.2，AUC 会变吗？",
    answer: [
      "如果只是统一乘一个正常数，AUC 不会变。",
      "因为 AUC 只和样本之间的相对排序有关，不依赖分数的绝对大小。",
      "只要排序不变，AUC 就不变。"
    ]
  },
  {
    id: "Q081",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["ROC曲线", "AUC", "分类指标"],
    question: "ROC 曲线的含义和其他评价指标的区别是什么？",
    answer: [
      "ROC 曲线描述的是不同阈值下 TPR 和 FPR 的变化，强调模型整体排序能力。",
      "和准确率、精确率、召回率不同，它不是单点指标，而是一整条曲线。",
      "AUC 则是对这条曲线的整体概括。"
    ]
  },
  {
    id: "Q082",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["准确率", "召回率", "PR曲线"],
    question: "分类问题的指标是什么？准确率、召回率、PR 曲线怎么理解？",
    answer: [
      "准确率是预测正确的比例；召回率是正样本中被找回来的比例。",
      "PR 曲线是 precision 和 recall 在不同阈值下的关系。",
      "类别不平衡时，PR 曲线通常比准确率更有参考价值。"
    ]
  },
  {
    id: "Q083",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "数学基础",
    tags: ["相关系数", "协方差", "统计"],
    question: "相关系数是怎么计算的？讲一下协方差和它的意义？",
    answer: [
      "协方差衡量两个变量是否同向变化，正协方差表示同增同减，负协方差表示一个增一个减。",
      "相关系数是在协方差基础上做标准化，范围在 [-1, 1]。",
      "它更方便比较不同变量之间的线性相关程度。"
    ]
  },
  {
    id: "Q084",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "评估指标",
    tags: ["视频", "mAP", "mIoU"],
    question: "做视频用的是什么评价指标？",
    answer: [
      "要看任务。分类任务常用准确率、Top-k accuracy；检测任务常用 mAP；分割任务常用 mIoU、Dice。",
      "跟踪任务常用 MOTA、IDF1、HOTA。",
      "视频理解里还常看 clip-level 和 video-level 的精度。"
    ]
  },
  {
    id: "Q085",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "业务指标",
    tags: ["CPM", "CPC", "ROI"],
    question: "计算广告中 CPM、CPC、ROI 的含义和计算方式是什么？",
    answer: [
      "CPM 的全称是 Cost Per Mille，中文一般说千次曝光成本，公式是 花费 / 曝光量 × 1000。",
      "CPC 的全称是 Cost Per Click，中文是单次点击成本，公式是 花费 / 点击量。",
      "ROI 的全称是 Return On Investment，中文是投资回报率，通常写成 收益 / 花费，用来衡量投放回报。"
    ]
  },  {
    id: "Q065",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["梯度消失", "梯度爆炸", "训练稳定性"],
    question: "详细解释梯度消失、梯度爆炸的原因及其解决方法。",
    answer: [
      "梯度消失和爆炸本质上都来自反向传播中的链式连乘。导数长期小于 1 会让梯度越传越小，长期大于 1 会让梯度越传越大。",
      "常见诱因包括网络过深、初始化不合理、激活函数饱和、学习率过大。",
      "解决方法有合理初始化、残差连接、BatchNorm、使用 ReLU 类激活、梯度裁剪和调整学习率。"
    ]
  },
  {
    id: "Q066",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["Dropout", "正则化", "过拟合"],
    question: "你用过 Dropout 吗？介绍一下，Dropout 的作用是什么？",
    answer: [
      "Dropout 是训练时随机丢弃一部分神经元的正则化方法。",
      "它能减少神经元之间的共适应，让模型不要过度依赖某些局部特征，从而降低过拟合。",
      "推理时不再随机丢弃，而是使用完整网络，并通过缩放保持期望一致。"
    ]
  },
  {
    id: "Q067",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["梯度消失", "训练稳定性", "表现"],
    question: "梯度消失的表现是什么，该怎么处理？",
    answer: [
      "常见表现是前面层的参数几乎不更新，训练很慢，loss 长时间降不下去。",
      "深层网络里越靠前的层梯度越接近 0，模型容易学不到有效特征。",
      "常见处理方法有换 ReLU 类激活、用残差连接、BN、合理初始化和减小网络深度。"
    ]
  },
  {
    id: "Q068",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["初始化", "权重初始化", "训练稳定性"],
    question: "神经网络权重怎么初始化，说一下自己知道的方法。",
    answer: [
      "常见方法有随机小值初始化、Xavier 初始化、He 初始化。",
      "Xavier 更适合 tanh/sigmoid 这类激活，He 初始化更适合 ReLU 系列。",
      "初始化目标是让前向和反向传播的方差都尽量稳定，避免梯度消失或爆炸。"
    ]
  },
  {
    id: "Q069",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["Dropout", "过拟合", "机制"],
    question: "Dropout 的机制是什么？为什么它能够抑制过拟合？",
    answer: [
      "训练时随机屏蔽一部分神经元，相当于每次训练一个不同的子网络。",
      "这样模型不能依赖固定路径记忆训练集噪声，会被迫学习更鲁棒的表示。",
      "因此它能减少共适应现象，提高泛化能力。"
    ]
  },
  {
    id: "Q070",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["初始化", "权重为0", "对称性"],
    question: "神经网络中把权重 W 初始化为 0 有什么问题？为什么不能初始化权重为 0？",
    answer: [
      "如果所有权重都初始化为 0，同一层神经元的输出和梯度会完全一样。",
      "这样参数更新后仍然保持一致，网络无法学出不同特征。",
      "本质上这是对称性没有被打破，所以通常需要随机初始化。"
    ]
  },
  {
    id: "Q071",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["不收敛", "训练速度", "优化"],
    question: "如何解决模型不收敛问题，以及如何加快模型的训练速度？",
    answer: [
      "先排查数据、标签、学习率、初始化、损失函数和梯度是否正常。模型不收敛很多时候不是结构问题，而是训练配置问题。",
      "常见改进包括调学习率和优化器、加 BN、做残差连接、检查数据归一化、换更合适的损失函数。",
      "想加快训练可用 mixed precision、更大 batch、预训练模型、数据加载优化和更轻量的骨干网络。"
    ]
  },
  {
    id: "Q072",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BatchNorm", "normalize", "收敛"],
    question: "你知道哪几种 normalize 的方法？请着重介绍一种（BatchNormalization）。这个方法在深度学习网络中有什么用？为什么可以加速模型收敛？",
    answer: [
      "常见有 BN、LN、IN、GN。BN 是按 mini-batch 统计均值和方差后做归一化，再用可学习参数恢复表示能力。",
      "BN 的作用是稳定特征分布，让每层输入不要变化太剧烈，从而训练更稳定。",
      "它能加速收敛，主要是因为优化更平滑、允许使用更大学习率，并且对初始化没那么敏感。"
    ]
  },
  {
    id: "Q073",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "注意力机制",
    tags: ["Attention", "Self-Attention", "公式"],
    question: "Attention 怎么做，Self-Attention 怎么做？Self-Attention 原理公式是什么，为什么有效？",
    answer: [
      "Attention 的核心是给不同输入位置分配不同权重，再做加权求和。",
      "Self-Attention 里，Q、K、V 都来自同一输入，先算相似度，再经过 Softmax 得到权重，最后对 V 加权求和。",
      { type: "formula", latex: "Attention(Q,K,V)=Softmax(\frac{QK^T}{\sqrt{d_k}})V" },
      "它有效是因为能直接建模长距离依赖，而且不同位置之间的交互是动态的。"
    ]
  },
  {
    id: "Q074",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "注意力机制",
    tags: ["Encoder-Decoder", "Attention", "Seq2Seq"],
    question: "Encoder-Decoder 模型里，如果 Decoder 是基于 Attention 做的，该怎么做，是一个什么结构？",
    answer: [
      "这是典型的带 Attention 的 Seq2Seq 结构。Encoder 先把输入编码成一组隐藏状态，Decoder 在每一步解码时都对这些隐藏状态做 Attention。",
      "也就是说 Decoder 不只依赖上一步状态，还会动态选择当前最相关的 Encoder 信息。",
      "这样比只用一个固定上下文向量更强，尤其适合长序列任务。"
    ]
  },
  {
    id: "Q075",
    updatedAt: "2026-04-04",
    company: "字节跳动",
    topicGroup: "基础知识点",
    category: "注意力机制",
    tags: ["Attention", "Soft Attention", "Hard Attention"],
    question: "Attention 机制是什么？什么是 Soft Attention 和 Hard Attention？",
    answer: [
      "Attention 就是根据相关性给不同输入分配不同权重，再聚合信息。",
      "Soft Attention 是对所有位置分配连续权重，可微、可直接反向传播，所以最常用。",
      "Hard Attention 更像是离散选择少数位置，通常不可微，训练更难，常需要强化学习或近似方法。"
    ]
  },  {
    id: "Q060",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Softmax", "多分类", "Sigmoid"],
    question: "Softmax 作为多分类器的作用是什么？和二分类相比有什么特点？",
    answer: [
      "Softmax 用来把多个类别的打分转成概率分布，所有类别概率之和为 1，常用于单标签多分类。",
      "二分类常用 sigmoid，只关心一个类别的概率；Softmax 会同时考虑所有类别之间的竞争关系。",
      "所以 Softmax 更适合互斥类别的多分类任务。"
    ]
  },
  {
    id: "Q061",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Softmax", "公式", "概率分布"],
    question: "Softmax 的计算公式怎么写？",
    answer: [
      "对第 i 类，Softmax 公式是 softmax(z_i) = exp(z_i) / Σ_j exp(z_j)。",
      "它的含义是先把 logit 通过指数变成正数，再归一化成概率分布。",
      "最终所有类别概率之和等于 1。"
    ]
  },
  {
    id: "Q062",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Softmax", "Cross Entropy", "Loss"],
    question: "Softmax 的 loss function 是什么？",
    answer: [
      "通常配合交叉熵损失。",
      "若真实标签是 y，预测概率是 p，则损失写成 L = -Σ_i y_i log(p_i)。",
      "如果 y 是 one-hot，实际就是正确类别概率的负对数。"
    ]
  },
  {
    id: "Q063",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "手写代码",
    tags: ["Softmax", "Numpy", "数值稳定"],
    question: "怎么写一个 Softmax 实现，并注意上下溢问题？",
    answer: [
      "核心是先减去最大值再取指数，这样更稳定。",
      "这是因为 exp 对大数很敏感，直接算容易上溢。",
      { type: "code", language: "python", code: "import numpy as np\n\ndef softmax(x):\n    x = x - np.max(x, axis=-1, keepdims=True)\n    exp_x = np.exp(x)\n    return exp_x / np.sum(exp_x, axis=-1, keepdims=True)" }
    ]
  },
  {
    id: "Q064",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "激活函数",
    tags: ["Softmax", "上溢", "下溢"],
    question: "Softmax 在数值计算上为什么会出现上溢和下溢？怎么处理？",
    answer: [
      "因为 exp() 对大正数会非常大，可能上溢；对很小的负数会接近 0，可能下溢。",
      "最常见处理方式就是先减去输入里的最大值，也就是做数值稳定化。",
      "在算交叉熵时，也常直接使用 log-softmax 或框架自带的稳定实现。"
    ]
  },  {
    id: "Q055",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "手写代码",
    tags: ["卷积", "手写实现", "多通道"],
    question: "说一些卷积，用代码实现卷积，并再改成有通道的三维卷积，核心怎么理解？",
    answer: [
      "核心考点是是否理解卷积本质是滑窗加权求和。",
      "单通道卷积是在二维输入上滑动卷积核；扩展到多通道时，就是对每个通道分别卷积后再求和。",
      "多个卷积核则对应多个输出通道。",
      { type: "code", language: "python", code: "import numpy as np\n\ndef conv2d_multi_channel(x, w):\n    # x: [Cin, H, W], w: [Cout, Cin, K, K]\n    cin, h, w_in = x.shape\n    cout, _, k, _ = w.shape\n    out_h = h - k + 1\n    out_w = w_in - k + 1\n    out = np.zeros((cout, out_h, out_w))\n\n    for co in range(cout):\n        for i in range(out_h):\n            for j in range(out_w):\n                region = x[:, i:i+k, j:j+k]\n                out[co, i, j] = np.sum(region * w[co])\n    return out" }
    ]
  },
  {
    id: "Q056",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "手写代码",
    tags: ["卷积", "Padding", "手写实现"],
    question: "写一个单通道的图像卷积，带 padding，核心要点是什么？",
    answer: [
      "先对输入做 padding，再按窗口滑动。",
      "每个位置取局部区域和卷积核逐元素相乘后求和，得到输出像素。",
      "面试里通常更看重你逻辑是否清楚，而不是代码是否特别工程化。",
      { type: "code", language: "python", code: "import numpy as np\n\ndef conv2d_single_channel(x, kernel, padding=1):\n    k = kernel.shape[0]\n    x_pad = np.pad(x, ((padding, padding), (padding, padding)), mode='constant')\n    out_h = x.shape[0] + 2 * padding - k + 1\n    out_w = x.shape[1] + 2 * padding - k + 1\n    out = np.zeros((out_h, out_w))\n\n    for i in range(out_h):\n        for j in range(out_w):\n            region = x_pad[i:i+k, j:j+k]\n            out[i, j] = np.sum(region * kernel)\n    return out" }
    ]
  },
  {
    id: "Q057",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "手写代码",
    tags: ["前向传播", "反向传播", "BP"],
    question: "手写前向传播、反向传播代码，核心思路是什么？",
    answer: [
      "核心是按计算图把每一步拆开。",
      "前向传播是逐层算输出，反向传播是从损失往回按链式法则求每层梯度。",
      "最终得到参数梯度和输入梯度。",
      { type: "code", language: "python", code: "import numpy as np\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\ndef forward(x, w, b):\n    z = x @ w + b\n    y = sigmoid(z)\n    return z, y\n\ndef backward(x, y, target, w):\n    dy = y - target\n    dz = dy * y * (1 - y)\n    dw = x.T @ dz\n    db = dz.sum(axis=0)\n    dx = dz @ w.T\n    return dx, dw, db" }
    ]
  },
  {
    id: "Q058",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "手写代码",
    tags: ["BP", "Numpy", "反向传播"],
    question: "如果面试官让你写 BP，正向传播、反向传播都推一个遍，重点是什么？",
    answer: [
      "重点不是死背所有公式，而是能说明前向得到输出、损失对输出求导、再一层层传回去更新参数的逻辑。",
      "如果能用 numpy 手写一个单层或两层网络的前反向传播，通常已经能证明你理解了 BP。",
      "面试官很多时候更看重你思路是否闭环。",
      { type: "code", language: "python", code: "# 两层 MLP 反向传播示意\na1 = x @ w1 + b1\nh1 = np.maximum(a1, 0)\na2 = h1 @ w2 + b2\nloss = ((a2 - y) ** 2).mean()\n\n# backward\nda2 = 2 * (a2 - y) / y.shape[0]\ndw2 = h1.T @ da2\ndh1 = da2 @ w2.T\nda1 = dh1 * (a1 > 0)\ndw1 = x.T @ da1" }
    ]
  },
  {
    id: "Q059",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BN", "GN", "LN"],
    question: "怎么用代码或数学公式展示 BN 的内部实现？为什么要用 GN？GN、BN、LN、IN 的区别是什么？",
    answer: [
      "BN 是按 batch 维度统计均值方差，LN 按单样本所有通道统计，IN 按单样本单通道统计，GN 是把通道分组后在组内统计。",
      "为什么用 GN，主要是因为小 batch 或检测分割任务里 BN 统计不稳定，而 GN 不依赖 batch size。",
      "所以它们的核心区别在于统计均值和方差的维度不同。",
      { type: "code", language: "python", code: "def batch_norm(x, gamma, beta, eps=1e-5):\n    mean = x.mean(axis=0, keepdims=True)\n    var = x.var(axis=0, keepdims=True)\n    x_hat = (x - mean) / np.sqrt(var + eps)\n    y = gamma * x_hat + beta\n    return y" }
    ]
  },  {
    id: "Q053",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BP", "反向传播", "链式法则"],
    question: "BP 神经网络反向传播怎么推导？",
    answer: [
      "核心就是链式法则。",
      "先从损失函数对输出层求导，再一层层往前传，把当前层的梯度拆成上游梯度乘本层局部导数。",
      "最后就能得到每层参数和输入的梯度。"
    ]
  },
  {
    id: "Q054",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["MaxPooling", "梯度", "反向传播"],
    question: "max pooling 的梯度怎么求？",
    answer: [
      "max pooling 前向时先找到池化窗口里的最大值位置。",
      "反向传播时，梯度只传给这个最大值所在位置。",
      "其他位置梯度为 0。"
    ]
  },  {
    id: "Q048",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["卷积", "参数量", "FLOPs"],
    question: "如何计算卷积的复杂度、卷积层的参数量？",
    answer: [
      "卷积层参数量一般是 k×k×Cin×Cout，如果有偏置再加 Cout。",
      "计算复杂度通常看 FLOPs，近似为 Hout×Wout×k×k×Cin×Cout。",
      "如果把乘法和加法都单独计数，有些资料会再乘 2。"
    ]
  },
  {
    id: "Q049",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["Feature Map", "输出尺寸", "卷积"],
    question: "怎么计算 Feature Map 的 size？",
    answer: [
      "二维卷积输出尺寸公式是 Hout = floor((Hin + 2p - k)/s) + 1，Wout = floor((Win + 2p - k)/s) + 1。",
      "其中 k 是卷积核大小，p 是 padding，s 是 stride。",
      "池化层也是同样的空间尺寸计算逻辑。"
    ]
  },
  {
    id: "Q050",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["FLOPs", "输出尺寸", "卷积"],
    question: "输入为 L×L，卷积核为 k×k，步长 s，padding p，怎么求输出尺寸和 FLOPs？",
    answer: [
      "输出尺寸是 L1 = floor((L - k + 2p)/s) + 1。",
      "如果输入通道数是 C1，输出通道数是 C2，则卷积 FLOPs 近似是 L1×L1×k×k×C1×C2。",
      "如果严格把乘法和加法都分开计，一些资料会写成约 2×L1×L1×k×k×C1×C2。"
    ]
  },
  {
    id: "Q051",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "轻量化网络",
    tags: ["Depthwise", "Pointwise", "Feature Map"],
    question: "同时考虑 pooling、stride、padding 时，怎么计算 depthwise conv 和 pointwise conv 每一步的计算量和 feature map 尺寸？",
    answer: [
      "先按普通卷积公式逐层计算输出尺寸。",
      "depthwise conv 参数量是 k×k×Cin，FLOPs 是 Hout×Wout×k×k×Cin。",
      "pointwise conv 参数量是 Cin×Cout，FLOPs 是 Hout×Wout×Cin×Cout；如果中间有 pooling，就继续按 pooling 输出尺寸往后推。"
    ]
  },
  {
    id: "Q052",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["输出维度", "Padding", "CNN"],
    question: "CNN 中给定输入维度 [c, w, h]、卷积核 [k, k]，若 padding=p，输出维度怎么求？",
    answer: [
      "如果输出通道数是 Cout，步长是 s，那么输出维度是 [Cout, floor((w + 2p - k)/s) + 1, floor((h + 2p - k)/s) + 1]。",
      "输出通道数由卷积核个数决定，空间尺寸由卷积公式决定。",
      "如果是 same padding 且 s=1，空间尺寸通常保持不变。"
    ]
  },  {
    id: "Q045",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BatchNorm", "BN", "训练"],
    question: "BN 的机制是什么，BN 怎么训练？",
    answer: [
      "BN 的核心是在每个 mini-batch 上对特征做标准化，再引入可学习的缩放参数和偏移参数。",
      "训练时用当前 batch 的均值和方差归一化，同时更新全局滑动均值和方差。",
      "推理时则使用这些滑动统计量。"
    ]
  },
  {
    id: "Q046",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["梯度消失", "梯度爆炸", "训练稳定性"],
    question: "梯度消失和梯度爆炸的原因是什么？怎么解决？",
    answer: [
      "本质上是反向传播时梯度连乘，若导数长期小于 1 就容易消失，长期大于 1 就容易爆炸。",
      "常见原因包括网络太深、初始化不合理、激活函数饱和、学习率过大。",
      "解决方法包括合理初始化、残差连接、BN、使用 ReLU 类激活、梯度裁剪和调整学习率。"
    ]
  },
  {
    id: "Q047",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "模型压缩",
    tags: ["模型压缩", "移动端", "部署"],
    question: "如果 CNN 网络很大，在手机上运行效率不高，有哪些模型压缩方法？",
    answer: [
      "常见方法有剪枝、量化、知识蒸馏、低秩分解、结构轻量化设计和算子融合。",
      "实际部署中通常会组合使用，比如先换成 MobileNet 这类轻量骨干，再做量化和蒸馏。",
      "目标是在精度和速度之间做平衡。"
    ]
  },  {
    id: "Q039",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["CNN", "图像", "视频"],
    question: "为什么卷积神经网络适用于图像和视频，还能用于其他领域吗？",
    answer: [
      "因为 CNN 擅长处理有局部相关性和空间结构的数据。",
      "图像和视频天然满足这个特点，所以卷积能高效提取局部模式。",
      "除了视觉，CNN 也能用于语音、文本、时间序列和医学信号等任务，只要数据中存在局部模式和可平移结构。"
    ]
  },
  {
    id: "Q040",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["反向传播", "全连接", "卷积层"],
    question: "CNN 反向传播细节，怎么过全连接层、池化层、卷积层？",
    answer: [
      "全连接层和普通神经网络一样按链式法则传梯度。",
      "池化层里，max pooling 把梯度传给最大值位置，average pooling 把梯度平均分配。",
      "卷积层反向传播时要分别求输入梯度、卷积核梯度和偏置梯度，本质上还是链式法则。"
    ]
  },
  {
    id: "Q041",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["过拟合", "正则化", "CNN"],
    question: "CNN 里面能自然起到防止过拟合的办法有哪些？",
    answer: [
      "卷积的局部连接和权值共享本身就在减少参数量，这是 CNN 天然比全连接更不容易过拟合的原因之一。",
      "另外常见办法还有数据增强、Dropout、正则化、BN、早停和使用预训练模型。",
      "本质上都是在减少模型对训练集噪声的过度记忆。"
    ]
  },
  {
    id: "Q042",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["感受野", "权值共享", "CNN"],
    question: "CNN 中感受野和权值共享是什么意思？",
    answer: [
      "感受野是某一层神经元在原图上能够看到的区域大小。",
      "权值共享是指同一个卷积核在不同空间位置重复使用同一组参数。",
      "这样既减少参数量，也让模型对平移变化更有泛化能力。"
    ]
  },
  {
    id: "Q043",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BatchNorm", "BN", "训练推理"],
    question: "BN 层的作用是什么，训练和测试时有什么不同？",
    answer: [
      "BN 主要作用是稳定特征分布、加快收敛，并让训练更稳定。",
      "训练时用当前 mini-batch 的均值和方差做归一化，同时更新滑动统计量。",
      "测试时不用当前 batch，而是使用训练阶段累计得到的全局均值和方差。"
    ]
  },
  {
    id: "Q044",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BatchNorm", "online learning", "小batch"],
    question: "BN 层做预测时，方差均值怎么算？online learning 时又怎么算？",
    answer: [
      "预测时直接使用训练时保存下来的滑动均值和滑动方差。",
      "online learning 或继续训练时，如果还是训练模式，就继续用当前 batch 统计量并更新滑动均值方差。",
      "如果 batch 太小，BN 可能不稳定，这时常考虑 GroupNorm 或 LayerNorm。"
    ]
  },  {
    id: "Q038",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "轻量化网络",
    tags: ["深度可分离卷积", "分组卷积", "参数量"],
    question: "为什么深度可分离卷积和分组卷积可以减少参数量，原理是什么？",
    answer: [
      "核心原因是它们都减少了通道之间完全连接的程度。",
      "标准卷积参数量是 K×K×Cin×Cout，因为每个输出通道都会和所有输入通道连接。",
      "分组卷积把通道分组后，每组只在组内连接，参数量大约变成原来的 1/G。",
      "深度可分离卷积则把标准卷积拆成 depthwise 和 pointwise 两步，总参数量变成 K×K×Cin + Cin×Cout，通常远小于标准卷积。"
    ]
  },  {
    id: "Q034",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["反卷积", "转置卷积", "上采样"],
    question: "什么是反卷积？",
    answer: [
      "反卷积通常指转置卷积，本质上不是严格意义上的逆卷积，而是普通卷积在线性形式下的转置操作。",
      "它常用于上采样，比如生成、分割和检测中的解码阶段。",
      "工程上也常拿它和插值上采样加卷积做对比。"
    ]
  },
  {
    id: "Q035",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["Inception", "GoogLeNet", "多分支"],
    question: "什么是 Inception 模块？",
    answer: [
      "Inception 模块是一种多分支结构，会并行使用不同大小的卷积核和池化分支，再把结果拼接起来。",
      "它的核心思想是同时提取多尺度特征，并提高计算利用率。",
      "这是 GoogLeNet 的代表性设计。"
    ]
  },
  {
    id: "Q036",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "轻量化网络",
    tags: ["深度可分离卷积", "Depthwise", "MobileNet"],
    question: "什么是深度可分离卷积？",
    answer: [
      "深度可分离卷积把标准卷积分成两步：先做 depthwise convolution，再做 pointwise 1×1 convolution。",
      "这样能显著减少参数量和计算量。",
      "它是 MobileNet 这类轻量化网络的核心操作。"
    ]
  },
  {
    id: "Q037",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "轻量化网络",
    tags: ["分组卷积", "Group Convolution", "ShuffleNet"],
    question: "什么是分组卷积？",
    answer: [
      "分组卷积是把输入通道分成若干组，每组分别做卷积，然后把结果拼接起来。",
      "这样可以减少计算量和参数量。",
      "但组与组之间的信息交互会变弱，所以常配合 channel shuffle 或 1×1 卷积使用。"
    ]
  },  {
    id: "Q020",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["MaxPooling", "反向传播", "CNN"],
    question: "卷积神经网络在 maxpooling 处怎么反向传播误差？",
    answer: [
      "前向传播时先记录每个池化窗口最大值的位置。",
      "反向传播时，误差只传回这个最大值所在位置，其他位置梯度为 0。",
      "所以 max pooling 的梯度传递本质上是按 argmax 位置路由。"
    ]
  },
  {
    id: "Q021",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ShuffleNet", "轻量化", "CNN"],
    question: "ShuffleNet 的结构是什么？",
    answer: [
      "ShuffleNet 的核心是 pointwise group convolution、channel shuffle 和 depthwise convolution。",
      "它先用分组 1×1 卷积降低计算量，再用 channel shuffle 促进不同组之间的信息交换。",
      "这是一个典型的轻量化 CNN 设计。"
    ]
  },
  {
    id: "Q022",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["Attention", "SE", "CBAM"],
    question: "深度网络里 Attention 一般怎么加？",
    answer: [
      "常见做法是把 attention 模块加在卷积块后、残差块里，或者特征融合阶段。",
      "可以做通道注意力、空间注意力，或者二者结合。",
      "典型模块有 SE、CBAM、Non-local 和 Transformer attention。"
    ]
  },
  {
    id: "Q023",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ResNet", "残差连接", "退化问题"],
    question: "ResNet 的结构特点以及解决的问题是什么？",
    answer: [
      "ResNet 的核心特点是残差连接，也就是 shortcut。",
      "它主要解决深层网络训练困难和退化问题，让更深的网络也能稳定优化。",
      "本质上是让网络学习残差映射而不是直接学习完整映射。"
    ]
  },
  {
    id: "Q024",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "图神经网络",
    tags: ["GNN", "谱域", "空间域"],
    question: "图神经网络怎么理解？发展史怎么讲？",
    answer: [
      "图神经网络是处理图结构数据的模型，核心是节点聚合邻居信息来更新自己的表示。",
      "发展上可以大致分为谱域方法和空间域方法。",
      "后来空间域方法更常用，因为形式更直观，也更容易扩展到大图和实际任务。"
    ]
  },
  {
    id: "Q025",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["UNet", "编码器解码器", "分割"],
    question: "UNet 的结构是什么，为什么要下采样和上采样？",
    answer: [
      "UNet 是编码器-解码器结构，并带有跳跃连接。",
      "下采样用来提取更强语义并扩大感受野，上采样用来恢复空间分辨率。",
      "跳跃连接负责把浅层细节补回去，所以它很适合分割这类需要精细定位的任务。"
    ]
  },
  {
    id: "Q026",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ResNet", "V1", "V2"],
    question: "ResNet V1 和 V2 的改进是什么？",
    answer: [
      "V1 里一般是卷积后接 BN 和 ReLU，再做残差相加。",
      "V2 改成 pre-activation，把 BN 和 ReLU 放到卷积前面。",
      "这样梯度传播更顺畅，深层网络通常更稳定。"
    ]
  },
  {
    id: "Q027",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ResNet", "下采样", "残差块"],
    question: "ResNet 的下采样过程是怎样的？",
    answer: [
      "通常在某个 stage 的第一个残差块里用 stride=2 的卷积做下采样。",
      "同时 shortcut 分支也要做匹配，常见是 1×1 卷积加 stride。",
      "这样能在减小特征图尺寸的同时增加通道数。"
    ]
  },
  {
    id: "Q028",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ResBlock", "Shortcut", "Padding"],
    question: "res-block 的跳跃连接以及 shape 怎么保持？",
    answer: [
      "如果输入输出 shape 一样，shortcut 可以直接相加。",
      "如果空间尺寸或通道数不同，就在 shortcut 分支上用 1×1 卷积做匹配，必要时配合 stride。",
      "主分支里则常通过 padding 保持卷积前后空间尺寸不变。"
    ]
  },
  {
    id: "Q029",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["FPN", "多尺度", "检测"],
    question: "FPN 的结构是什么？",
    answer: [
      "FPN 是自顶向下路径加横向连接的多尺度特征融合结构。",
      "它把高层强语义和低层高分辨率特征结合起来。",
      "所以它特别适合目标检测这类需要多尺度表示的任务。"
    ]
  },
  {
    id: "Q030",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "目标检测",
    tags: ["RoI Pooling", "RoI Align", "Mask R-CNN"],
    question: "RoI Pooling 和 RoI Align 的区别是什么？",
    answer: [
      "RoI Pooling 会对坐标做量化，所以容易产生对齐误差。",
      "RoI Align 不做量化，而是用双线性插值取值，因此定位更精确。",
      "这也是 Mask R-CNN 采用 RoI Align 的重要原因。"
    ]
  },
  {
    id: "Q031",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["ResNet", "全连接", "卷积网络"],
    question: "ResNet 和全连接相比有什么区别？",
    answer: [
      "ResNet 是带卷积和残差连接的深层网络，适合处理有空间结构的图像。",
      "全连接层会直接打平输入，参数量大，也不擅长利用局部空间结构。",
      "所以视觉任务里通常是卷积网络作为主干，全连接只放在后端分类头里。"
    ]
  },
  {
    id: "Q032",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "网络结构",
    tags: ["AlexNet", "VGG", "ResNet"],
    question: "AlexNet、VGG、ResNet、DenseNet、GoogLeNet 的特点是什么？",
    answer: [
      "AlexNet 让深度 CNN 真正大规模进入视觉任务；VGG 结构规整，主打堆叠小卷积。",
      "GoogLeNet 用 Inception 做多分支特征提取；ResNet 用残差连接解决深层训练问题。",
      "DenseNet 用密集连接强化特征复用和梯度传播。"
    ]
  },
  {
    id: "Q033",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "轻量化网络",
    tags: ["MobileNet", "ShuffleNet", "Xception"],
    question: "MobileNet v1/v2、ShuffleNet v2、Xception、DenseNet 这些网络怎么概括？",
    answer: [
      "MobileNet v1 主打 depthwise separable convolution，v2 加了 inverted residual 和 linear bottleneck。",
      "ShuffleNet v2 更强调真实推理效率和 channel split/shuffle，Xception 可以看成更极致的 depthwise separable convolution。",
      "DenseNet 不一定最轻，但特征复用强、参数利用率高。"
    ]
  },  {
    id: "Q017",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["Pooling", "MaxPooling", "反向传播"],
    question: "maxPooling 怎么传递导数？",
    answer: [
      "maxPooling 在前向时会记录每个池化窗口里最大值的位置。",
      "反向传播时，梯度只传给这个最大值对应的位置，窗口里其他位置梯度为 0。",
      "所以它本质上是把梯度路由回前向时被选中的那个元素。"
    ]
  },
  {
    id: "Q018",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["CNN", "Pooling", "下采样"],
    question: "CNN 里面池化的作用是什么？",
    answer: [
      "池化首先是做下采样，减少特征图尺寸和后续计算量。",
      "它还能扩大感受野，并提升一定的平移不变性，让模型对局部位置变化更鲁棒。",
      "但池化也会带来信息损失，所以现在很多网络会用步长卷积替代一部分池化。"
    ]
  },
  {
    id: "Q019",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["Pooling", "反向传播", "AveragePooling"],
    question: "反向传播的时候怎么传递 pooling 的导数？",
    answer: [
      "如果是 max pooling，梯度只回传到前向时取到最大值的那个元素。",
      "如果是 average pooling，梯度会平均分配到池化窗口内的所有元素。",
      "所以不同 pooling 的反向传播差别，核心就在于梯度分配方式不同。"
    ]
  },  {
    id: "Q007",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["卷积", "Depthwise", "轻量化"],
    question: "Depthwise 卷积是什么？它的优缺点是什么？",
    answer: [
      "Depthwise 卷积是对每个输入通道分别做卷积，不做通道间混合。",
      "它能显著减少参数量和计算量，常用于轻量化网络，比如 MobileNet。",
      "缺点是跨通道信息交互能力弱，所以通常要配合 1×1 卷积一起使用。"
    ]
  },
  {
    id: "Q008",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["卷积", "1x1卷积", "网络设计"],
    question: "1×1 的卷积核有什么用？",
    answer: [
      "1×1 卷积主要用于通道混合和通道数变换。",
      "它可以做升维、降维，减少参数量，也常用于在不改变空间尺寸的情况下增强特征表达。",
      "在 Inception、ResNet、MobileNet 里都很常见。"
    ]
  },
  {
    id: "Q009",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["上采样", "PixelShuffle", "棋盘格"],
    question: "反卷积相比 PixelShuffle 有什么缺点？棋盘格现象怎么产生的？",
    answer: [
      "反卷积容易出现输出位置覆盖不均匀的问题，表现为棋盘格伪影。",
      "本质上是卷积核、步长和填充组合后，不同像素位置被卷积核覆盖次数不同。",
      "PixelShuffle 通常更稳定，但也依赖前面的通道重排设计；工程上常用上采样加普通卷积来减少伪影。"
    ]
  },
  {
    id: "Q010",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "视频理解",
    tags: ["3D卷积", "2D卷积", "视频"],
    question: "3D 卷积和 2D 卷积的区别、主要问题、如何加速，以及视频理解还有哪些改进方向？",
    answer: [
      "2D 卷积只建模空间信息，3D 卷积同时建模时间和空间信息，更适合视频。",
      "主要问题是参数量大、计算重、显存占用高，长时序建模也不够高效。",
      "加速方法包括 2+1D 分解、时空分离卷积、稀疏采样、轻量骨干和蒸馏。",
      "当前常见改进方向是 Transformer、时序注意力、多模态融合和更高效的长视频建模。"
    ]
  },
  {
    id: "Q011",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["卷积", "感受野", "网络设计"],
    question: "卷积核大小如何选取？",
    answer: [
      "核心看感受野、参数量和任务需求。",
      "小卷积核比如 3×3 更常用，因为参数更少、非线性层更多，堆叠后也能获得大感受野。",
      "大卷积核有时能更快扩大感受野，但计算代价更高，通常会结合分解卷积或空洞卷积使用。"
    ]
  },
  {
    id: "Q012",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["卷积", "参数量", "3x3"],
    question: "卷积层减少参数的常见方法有哪些？用 1×3 和 3×1 代替 3×3 的原理是什么？",
    answer: [
      "常见方法有 1×1 降维、depthwise separable convolution、group convolution、卷积分解和剪枝。",
      "1×3 和 3×1 属于把二维卷积分解成两个一维卷积，近似实现 3×3 的感受野。",
      "这样做可以减少参数和计算量，同时增加一层非线性。"
    ]
  },
  {
    id: "Q013",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["CNN", "Dropout", "正则化"],
    question: "如果在 CNN 的卷积块里设计 Dropout，一般怎么做？",
    answer: [
      "卷积网络里更常用的是 Spatial Dropout 或 DropBlock，而不是对每个像素独立随机丢弃。",
      "因为卷积特征图有强空间相关性，普通 Dropout 的正则化效果不一定好。",
      "常见做法是在卷积块后、激活后或残差分支中间按通道或局部区域做丢弃。"
    ]
  },
  {
    id: "Q014",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["反卷积", "转置卷积", "上采样"],
    question: "反卷积，也就是转置卷积，它的实现原理是什么？",
    answer: [
      "转置卷积不是严格意义上的逆卷积，而是普通卷积在线性代数形式下的转置操作。",
      "直观理解上，可以看成先在输入元素之间插空，再做一次普通卷积。",
      "它常用于上采样，但容易带来棋盘格伪影，所以实际中经常和插值上采样方案做比较。"
    ]
  },
  {
    id: "Q015",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["Dropout", "正则化", "泛化"],
    question: "Dropout 的原理是什么？",
    answer: [
      "训练时随机屏蔽一部分神经元，让网络不能过度依赖某些局部特征。",
      "它本质上是一种正则化方法，可以降低过拟合，提高泛化能力。",
      "推理时不再随机丢弃，而是使用完整网络，并通过缩放保持期望一致。"
    ]
  },
  {
    id: "Q016",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["转置卷积", "上采样", "解码器"],
    question: "直接用转置卷积，和先上采样再卷积，有什么区别？",
    answer: [
      "转置卷积是可学习的上采样，表达能力更强，但更容易产生棋盘格伪影。",
      "先插值上采样再卷积更稳定，实现也简单，伪影通常更少。",
      "很多生成和分割任务里，如果更重视输出平滑性，常优先考虑上采样加卷积。"
    ]
  },
  {
    id: "Q001",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "Python",
    tags: ["Python", "GIL", "多线程"],
    question: "Python 里的 GIL 是什么？它对多线程性能有什么影响？",
    answer: [
      "GIL 是 CPython 解释器里的全局解释器锁，同一时刻只允许一个线程执行 Python 字节码。",
      "它会让 CPU 密集型任务难以通过多线程真正利用多核，所以这类任务通常更适合多进程、C++ 扩展或者 NumPy 这类释放 GIL 的库。",
      "但对 I/O 密集型任务，比如读文件、网络请求、日志写入，多线程仍然是有价值的，因为线程在等待 I/O 时会让出执行机会。",
      "面试里不要只说 GIL 限制多线程，要明确补一句：它影响的是 CPython 下的 CPU 密集型并行能力，不等于 Python 完全不能并行。"
    ]
  },
  {
    id: "Q002",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "深度学习",
    tags: ["BatchNorm", "训练", "推理"],
    question: "BatchNorm 在训练和推理阶段有什么区别？为什么小 batch 下效果可能变差？",
    answer: [
      "训练阶段使用当前 mini-batch 的均值和方差做归一化，同时更新全局滑动统计量。",
      "推理阶段不再用当前输入的统计量，而是使用训练阶段累计得到的全局均值和方差。",
      "如果 batch 很小，当前 batch 的统计量会不稳定，导致归一化噪声变大，训练容易波动，性能也可能下降。",
      "这时常见替代是 GroupNorm、LayerNorm，或者采用 SyncBatchNorm 来扩大统计范围。"
    ]
  },
  {
    id: "Q003",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["目标检测", "mAP", "评估"],
    question: "目标检测里的 mAP 是什么？面试里应该怎么解释？",
    answer: [
      "mAP 是 mean Average Precision，表示多个类别上的平均检测精度。",
      "单类别里先根据预测框置信度排序，结合 IoU 阈值判断 TP 和 FP，再得到 Precision-Recall 曲线，曲线下面积就是 AP。",
      "所有类别的 AP 再取平均就是 mAP。",
      "回答时最好补一句：不同数据集和论文的 mAP 定义可能不同，比如 VOC 常用单一 IoU 阈值，COCO 常用多个 IoU 阈值平均，因此不能直接横向对比。"
    ]
  },
  {
    id: "Q004",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "AIGC",
    tags: ["Diffusion", "扩散模型", "生成式模型"],
    question: "扩散模型为什么能生成图像？它和 GAN 的核心差别是什么？",
    answer: [
      "扩散模型的核心思想是先逐步向真实图像里加噪，再训练模型学习如何一步步去噪，最终从随机噪声恢复出符合数据分布的图像。",
      "它本质上是在学习逆扩散过程，也就是条件概率分布下的去噪映射。",
      "和 GAN 相比，扩散模型训练通常更稳定，不需要生成器和判别器对抗博弈。",
      "但它的生成速度往往更慢，因为采样要经历多步迭代。GAN 则通常采样更快，但训练不稳定、容易模式崩塌。"
    ]
  },
  {
    id: "Q005",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "PyTorch",
    tags: ["PyTorch", "反向传播", "autograd"],
    question: "PyTorch 的 autograd 是怎么工作的？什么时候要用 no_grad？",
    answer: [
      "PyTorch 会在前向计算时动态构建计算图，张量之间的运算关系会被记录下来。",
      "调用 loss.backward() 后，autograd 会沿着计算图反向传播，按照链式法则自动计算梯度，并把结果累加到参数的 grad 属性上。",
      "在推理、验证、特征导出这些不需要梯度的场景，应使用 torch.no_grad()，这样可以减少显存占用并提升速度。",
      "面试时最好再补一句：训练时如果不手动清零梯度，梯度会默认累加，所以通常每个 iteration 前都要 optimizer.zero_grad()。"
    ]
  },
  {
    id: "Q006",
    updatedAt: "2026-04-03",
        company: "字节跳动",
    topicGroup: "基础知识点",
    category: "计算机视觉",
    tags: ["过拟合", "泛化", "训练技巧"],
    question: "深度学习训练中怎么判断过拟合？常见缓解方法有哪些？",
    answer: [
      "典型现象是训练集指标持续变好，但验证集指标停止提升甚至下降。",
      "还可以通过观察训练损失和验证损失的分叉、可视化错误样本以及不同数据划分下的稳定性来辅助判断。",
      "常见缓解方法有数据增强、正则化、Dropout、早停、减小模型复杂度、增加数据量、使用预训练模型等。",
      "如果是视觉任务，还要特别注意数据分布偏差和标注质量问题，因为它们经常被误判成单纯的过拟合。"
    ]
  }
];


















