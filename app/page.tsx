import { Clock, TrendingUp, ShoppingBag, Flame, Eye, RefreshCw, Sparkles } from "lucide-react";

const hotLists = [
  {
    name: "知乎热榜",
    icon: "🔥",
    gradient: "from-violet-500 to-purple-600",
    items: [
      { title: "中国 AI 新星 DeepSeek 何以震动硅谷", rank: 1 },
      { title: "2025年最值得去的10个小众目的地", rank: 2 },
      { title: "为什么年轻人开始爱上攒金豆？", rank: 3 },
      { title: "特斯拉全自动驾驶再次更新，实测表现如何", rank: 4 },
      { title: "月薪3万和3千的人，差距到底在哪", rank: 5 },
      { title: "iPhone 17 曝光：这次苹果终于听劝了", rank: 6 },
      { title: "一个普通家庭如何规划35岁后的生活", rank: 7 },
      { title: "深度测评：戴森新款吹风机值得买吗", rank: 8 },
    ],
  },
  {
    name: "微博热搜",
    icon: "📱",
    gradient: "from-pink-500 to-rose-600",
    items: [
      { title: "马斯克宣布星舰第四次试飞成功", rank: 1 },
      { title: "赵丽颖新剧收视率破纪录", rank: 2 },
      { title: "全国多地迎来罕见高温天气", rank: 3 },
      { title: "教育部发布中小学最新作息通知", rank: 4 },
      { title: "天价彩礼被叫停，乡村婚俗改革进行时", rank: 5 },
      { title: "618电商大战拉开帷幕", rank: 6 },
      { title: "某明星塌房事件最新进展", rank: 7 },
      { title: "油价今晚下调，加满省多少", rank: 8 },
    ],
  },
  {
    name: "36氪热榜",
    icon: "💼",
    gradient: "from-blue-500 to-indigo-600",
    items: [
      { title: "字节跳动最新估值突破4000亿美元", rank: 1 },
      { title: "AI 程序员取代人类？真相在这", rank: 2 },
      { title: "新能源渗透率首超50%，意味着什么", rank: 3 },
      { title: "杭州新政：买房即可落户", rank: 4 },
      { title: "华为Mate80配置全曝光", rank: 5 },
      { title: "揭秘字节跳动神秘的AI Lab", rank: 6 },
      { title: "A股牛市来了？机构这样说", rank: 7 },
      { title: "为什么硅谷开始学中文", rank: 8 },
    ],
  },
  {
    name: "抖音热榜",
    icon: "🎵",
    gradient: "from-violet-500 to-fuchsia-600",
    items: [
      { title: "#大学生宿舍惊现神秘生物# 播放破亿", rank: 1 },
      { title: "明星直播间卖假货被曝光", rank: 2 },
      { title: "00后整顿职场，老板反而慌了", rank: 3 },
      { title: "这个夏天最火的BGM出现了", rank: 4 },
      { title: "探访全国最大失恋博物馆", rank: 5 },
      { title: "农村自建房设计惊艳全网", rank: 6 },
      { title: "一人食火锅的正确打开方式", rank: 7 },
      { title: "街头采访：你愿意35岁退休吗", rank: 8 },
    ],
  },
  {
    name: "微信热文",
    icon: "📝",
    gradient: "from-emerald-500 to-teal-600",
    items: [
      { title: "深度好文：真正厉害的人，都做到了这一点", rank: 1 },
      { title: "一个中年男人的反思：我为什么选择创业", rank: 2 },
      { title: "关于延迟退休，你必须知道的5个真相", rank: 3 },
      { title: "房价下跌后，资产如何保值", rank: 4 },
      { title: "普通家庭存款达到这个数就算成功了", rank: 5 },
      { title: "为什么越省钱越穷？", rank: 6 },
      { title: "人到中年，必须学会的5个理财技巧", rank: 7 },
      { title: "我身边那些不焦虑的人，都做对了什么", rank: 8 },
    ],
  },
  {
    name: "B站热榜",
    icon: "📺",
    gradient: "from-cyan-500 to-blue-600",
    items: [
      { title: "【硬核】耗时3个月，我造了一台光刻机", rank: 1 },
      { title: "月薪2万和20万的人差在哪里？", rank: 2 },
      { title: "野生建模：大佬1小时作品惊艳全网", rank: 3 },
      { title: "为什么日本AV产业能如此发达？", rank: 4 },
      { title: "实拍：凌晨3点的北京夜市", rank: 5 },
      { title: "罗永浩：我为什么要做AR", rank: 6 },
      { title: "清华博士解读：AI是如何思考的", rank: 7 },
      { title: "这期视频可能会改变你的人生", rank: 8 },
    ],
  },
];

const shoppingHot = [
  { rank: 1, title: "恋上鸭鸭脖/鸭翅根小包装零食500g", price: "¥19.9", sold: "9500件", tag: "爆款" },
  { rank: 2, title: "布班迪灵龙裤pro婴儿超薄拉拉裤", price: "¥45.9", sold: "5500件", tag: "热卖" },
  { rank: 3, title: "2.1元/盒！没见过这么低的价！", price: "¥34.9", sold: "1500件", tag: "神价" },
  { rank: 4, title: "86.4两盒！瑞幸生椰拿铁咖啡液64杯+保温杯", price: "¥128", sold: "1500件", tag: "推荐" },
  { rank: 5, title: "长粒香啊【国企汉江大牌】10斤长粒虾稻香米", price: "¥26.9", sold: "1500件", tag: "" },
  { rank: 6, title: "【品质超好】菌妍本草有机银耳40g", price: "¥9.9", sold: "1500件", tag: "" },
  { rank: 7, title: "16枚大漏【≥51%果肉】台湾金钻凤梨酥铁盒", price: "¥9.9", sold: "1500件", tag: "" },
  { rank: 8, title: "7.9/4包！植护乳霜纸云柔巾100抽", price: "¥7.94", sold: "1000件", tag: "" },
];

function RankBadge({ rank, gradient }: { rank: number; gradient: string }) {
  if (rank === 1) {
    return (
      <span className="rank-gold shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold text-yellow-900">
        {rank}
      </span>
    );
  }
  if (rank === 2) {
    return (
      <span className="rank-silver shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold text-zinc-800">
        {rank}
      </span>
    );
  }
  if (rank === 3) {
    return (
      <span className="rank-bronze shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold text-orange-100">
        {rank}
      </span>
    );
  }
  return (
    <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-semibold bg-gradient-to-br ${gradient} text-white/90`}>
      {rank}
    </span>
  );
}

function HotListCard({ data, index }: { data: typeof hotLists[0]; index: number }) {
  return (
    <div
      className="card-lift glass-card rounded-2xl p-5 animate-slide-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${data.gradient} text-white text-lg shadow-lg`}>
          {data.icon}
        </div>
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white tracking-tight">
            {data.name}
          </h2>
          <div className="flex items-center gap-1 text-xs text-zinc-400 mt-0.5">
            <RefreshCw className="w-3 h-3" />
            <span>每5分钟更新</span>
          </div>
        </div>
      </div>
      <ul className="space-y-0.5">
        {data.items.map((item) => (
          <li key={item.rank}>
            <div className="hot-item flex items-start gap-3">
              <RankBadge rank={item.rank} gradient={data.gradient} />
              <span className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCard({ item }: { item: typeof shoppingHot[0] }) {
  const tagColors: Record<string, string> = {
    "爆款": "from-rose-500 to-pink-600",
    "热卖": "from-orange-500 to-amber-600",
    "神价": "from-emerald-500 to-teal-600",
    "推荐": "from-blue-500 to-indigo-600",
  };

  return (
    <div className="shop-card glass-card flex items-center gap-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/70 p-4 animate-scale-in">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-lg">
        {item.rank}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">
            {item.title}
          </p>
          {item.tag && (
            <span className={`shrink-0 rounded-md bg-gradient-to-r ${tagColors[item.tag] || "from-zinc-400 to-zinc-500"} px-2 py-0.5 text-xs font-semibold text-white`}>
              {item.tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
            {item.price}
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            已售 {item.sold}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 relative">
      <div className="fixed inset-0 bg-grid" />

      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-2xl dark:border-zinc-800/60 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 text-white font-bold text-lg shadow-lg shadow-violet-500/25">
                  🔥
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  今日热榜
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  tophub.today · 实时更新
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span>{dateStr}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 relative z-10">
        <section className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 px-4 py-1.5 mb-8 border border-violet-500/20 dark:border-violet-500/30">
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600 dark:text-violet-400 tracking-wide">数据实时聚合中</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight text-zinc-900 dark:text-white">
            全网热点
            <span className="block mt-2 gradient-text">一网打尽</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            聚合知乎、微博、抖音、B站、微信等各大平台热门内容，洞察趋势，掌控热点
          </p>
        </section>

        <section className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Flame, label: "热榜来源", value: "50+", gradient: "from-rose-500 to-pink-600" },
            { icon: TrendingUp, label: "今日热点", value: "1000+", gradient: "from-violet-500 to-purple-600" },
            { icon: RefreshCw, label: "实时更新", value: "24/7", gradient: "from-emerald-500 to-teal-600" },
            { icon: Sparkles, label: "加载速度", value: "<1s", gradient: "from-blue-500 to-indigo-600" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="card-lift glass-card rounded-2xl p-5 text-center animate-slide-up stat-glow"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-3 shadow-lg`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight animate-number-pop">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-8 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight section-title">
              热门榜单
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 grid-gap-enhanced">
            {hotLists.map((list, i) => (
              <HotListCard key={list.name} data={list} index={i} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight section-title">
              好物推荐
            </h3>
            <span className="ml-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white">
              精选
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {shoppingHot.map((item, i) => (
              <div key={item.rank} style={{ animationDelay: `${i * 60}ms` }}>
                <ShoppingCard item={item} />
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-10 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-700" />
            <span className="text-xl">🔥</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-700" />
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            数据来源：tophub.today · 由 AI 自动聚合生成
          </p>
          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-600 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} · 洞察热点，掌控趋势
          </p>
        </footer>
      </main>
    </div>
  );
}
