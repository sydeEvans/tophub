import { Clock, TrendingUp, ShoppingBag } from "lucide-react";

const hotLists = [
  {
    name: "知乎热榜",
    icon: "🔍",
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
    icon: "💬",
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
    icon: "📊",
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

function RankBadge({ rank }: { rank: number }) {
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
    <span className="rank-badge shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
      {rank}
    </span>
  );
}

function HotListCard({ data, index }: { data: typeof hotLists[0]; index: number }) {
  return (
    <div
      className="card card-hover rounded-2xl p-5"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-lg">
          {data.icon}
        </div>
        <div>
          <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {data.name}
          </h2>
          <div className="flex items-center gap-1 text-xs text-zinc-400 mt-0.5">
            <Clock className="w-3 h-3" />
            <span>每5分钟更新</span>
          </div>
        </div>
      </div>
      <ul className="space-y-0.5">
        {data.items.map((item) => (
          <li key={item.rank}>
            <div className="hot-item flex items-start gap-3">
              <RankBadge rank={item.rank} />
              <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed cursor-pointer">
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
  return (
    <div className="shop-card flex items-center gap-4 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
      <div className="shrink-0 w-9 h-9 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-zinc-100 dark:text-zinc-900 font-medium text-base">
        {item.rank}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
          {item.title}
        </p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {item.price}
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1">
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
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium text-sm">
                T
              </div>
              <div>
                <h1 className="text-lg font-medium text-zinc-900 dark:text-white">
                  今日热榜
                </h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  tophub.today
                </p>
              </div>
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {dateStr}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">
            全网热点一网打尽
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            聚合知乎、微博、抖音、B站、微信等各大平台热门内容
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            热门榜单
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {hotLists.map((list, i) => (
              <HotListCard key={list.name} data={list} index={i} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            好物推荐
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {shoppingHot.map((item, i) => (
              <ShoppingCard key={item.rank} item={item} />
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-8 text-center border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            tophub.today · 由 AI 自动聚合生成
          </p>
        </footer>
      </main>
    </div>
  );
}