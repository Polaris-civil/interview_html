window.INTERVIEW_QA = [
  {
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
    updatedAt: "2026-04-02",
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
    updatedAt: "2026-04-01",
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
    updatedAt: "2026-03-31",
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
    updatedAt: "2026-03-30",
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
    updatedAt: "2026-03-29",
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















