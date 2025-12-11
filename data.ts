import { EcoSpot, Route, SlideImage } from './types';

// Using high-quality Unsplash images to simulate the "Real" images requested in the prompt
// as direct local file access isn't possible in this environment. 
// These map to the prompt's [image:0] etc. based on context.

export const images: Record<string, SlideImage> = {
  entrance1: { url: "https://images.unsplash.com/photo-1596230427389-d97607fb516e?auto=format&fit=crop&w=1200&q=80", caption: "朝阳公园南大门 - 城市绿肺的入口" },
  entrance2: { url: "https://images.unsplash.com/photo-1550951469-82e7b5cb4e8f?auto=format&fit=crop&w=1200&q=80", caption: "朝阳公园标志性南大门" },
  entrance3: { url: "https://images.unsplash.com/photo-1575997274092-2310b8e6221d?auto=format&fit=crop&w=1200&q=80", caption: "欢迎来到朝阳公园" },
  lake1: { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80", caption: "朝阳公园广阔水系 - 城市血脉" },
  lake2: { url: "https://images.unsplash.com/photo-1582031302506-c870a483f801?auto=format&fit=crop&w=1200&q=80", caption: "公园水景与生态" },
  forest1: { url: "https://images.unsplash.com/photo-1440557653017-d39f46ee36d6?auto=format&fit=crop&w=1200&q=80", caption: "方舟湖旁水杉林 - 恐龙时代活化石" },
  forest2: { url: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&w=1200&q=80", caption: "水杉林中的湿润空气" },
  birds1: { url: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=80", caption: "野鸭岛 - 鸟类合唱之地" },
  birds2: { url: "https://images.unsplash.com/photo-1620215712269-e08398b188c0?auto=format&fit=crop&w=1200&q=80", caption: "公园生物多样性 - 黑天鹅等鸟类" },
  trees1: { url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80", caption: "将军林 - 城市巨肺的绿色员工" },
  trees2: { url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80", caption: "公园茂密树林" },
  skyline1: { url: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?auto=format&fit=crop&w=1200&q=80", caption: "南湖 - 城市通风廊道与都市张力" },
  skyline2: { url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80", caption: "感受城市的呼吸" },
  pigeon: { url: "https://images.unsplash.com/photo-1542407424-4f04c62955f0?auto=format&fit=crop&w=1200&q=80", caption: "鸽子广场 - 科学的爱与边界" },
  lawn1: { url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80", caption: "南湖/北湖大草坪 - 可持续露营" },
  lawn2: { url: "https://images.unsplash.com/photo-1533514114760-4384f1e48f3c?auto=format&fit=crop&w=1200&q=80", caption: "公园草坪与社区活动" },
  map: { url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80", caption: "朝阳公园游览路线地图" }
};

export const routes: Route[] = [
  { name: "生态探索与观鸟之旅", stops: ["野鸭岛", "水杉林", "鸽子广场", "将军林"] },
  { name: "都市张力与时间之旅", stops: ["南湖", "世纪喷泉广场", "大树'西兰花'", "水碓桥"] },
  { name: "公民科学与挑战之旅", stops: ["北湖大草坪", "将军林", "小怪兽跑道", "水系"] },
  { name: "亲子欢乐与露营时光", stops: ["方舟湖草坪", "游乐区", "水系"] },
];

export const spots: EcoSpot[] = [
  {
    id: "4.1",
    title: "深吸一口气，解锁绿洲密码",
    enTitle: "Unlock the Oasis Code",
    location: "南大门 / 西大门 / 东大门",
    description: {
      cn: "各位朋友，欢迎来到朝阳公园。在迈开脚步之前，请先深吸一口气——您此刻吸入的清新空气，来自北京四环内最大的‘城市绿肺’。四十年前，这里还是一片烟熏火燎的‘串儿窑’。从废墟到绿洲，朝阳公园是这座城市最宏大的‘绿色魔术’。",
      en: "Welcome to Chaoyang Park. Before you explore, play a game: pull the tabs below to answer questions about this land’s past and present. From kiln pits to an ecological paradise, each answer is a key to unlocking this green miracle."
    },
    visuals: [images.entrance1, images.entrance2, images.entrance3],
    interaction: { type: 'quiz', label: "历史问答挑战 / History Quiz" }
  },
  {
    id: "4.2",
    title: "感受城市的呼吸——城市通风廊道",
    enTitle: "Feeling the City's Breath: Urban Ventilation Corridor",
    location: "南湖 / South Lake",
    description: {
      cn: "朝阳公园是北京通风廊道的“冷源”和“加速器”。这片千亩水面和绿地为风的流动提供通道，缓解城市热岛效应。这片千亩水面没有任何高楼遮挡，它是风的‘高速公路’。来自郊区的清凉空气在这里加速，一路向南吹向 CBD，带走那里的热浪和废气。",
      en: "Chaoyang Park is the 'Cooling Source' and 'Accelerator' of Beijing’s ventilation corridor. This thousand-acre lake acts as a 'Wind Highway.' Cool air from the suburbs speeds up here and flows towards the CBD, carrying away heat and exhaust."
    },
    visuals: [images.skyline1, images.skyline2, images.lake1],
  },
  {
    id: "4.3",
    title: "观看水脉的智慧——城市“肾脏”",
    enTitle: "Wisdom of Water: The City's Kidney",
    location: "彩虹桥 / Rainbow Bridge",
    description: {
      cn: "这里连接着亮马河，是北京东部水系的‘大动脉’。当暴雨来袭，湖泊能像海绵一样将雨水‘喝’下。水里的芦苇和底泥，每天都在默默工作，过滤污染物。",
      en: "Connected to the Liangma River, this lake acts as the 'Main Artery' and the city's 'Safety Valve.' During heavy rain, it acts like a sponge, drinking up runoff. The reeds and sediment are constantly filtering pollutants."
    },
    visuals: [images.lake2, images.lake1],
    interaction: { type: 'calc', label: "查看水质净化层级 / View Purification Levels" }
  },
  {
    id: "4.4",
    title: "鸽子的营养厨房——爱的边界",
    enTitle: "Pigeon's Nutrition Kitchen",
    location: "鸽子广场 / Pigeon Square",
    description: {
      cn: "人类的零食盐分太高，对鸽子而言是“甜蜜的毒药”。盐分会让羽毛脱落，油脂和添加剂会损伤内脏。请用天然谷物，通过距离表达爱。",
      en: "Human snacks are 'sweet poison' for pigeons. High salt causes feather loss. Please use natural grains and express your love from a distance."
    },
    visuals: [images.pigeon],
  },
  {
    id: "4.5",
    title: "聆听自然的细语——可持续露营",
    enTitle: "Sustainable Camping & Soil Bearing Capacity",
    location: "大草坪 / Great Lawn",
    description: {
      cn: "当无数只脚和重物反复碾压，土壤里的空隙被挤没了，变得像水泥一样硬。草根呼吸不到氧气，草地就会慢慢秃掉。我们享受这片绿地，唯一的报答，就是带走垃圾，并且偶尔让草地“休个假”。",
      en: "When the soil is repeatedly stepped on, it becomes as hard as concrete. Grass roots can't breathe. Our only way to repay this green space is to pack out all our trash and let the lawn take a rest."
    },
    visuals: [images.lawn1, images.lawn2],
    interaction: { type: 'trash', label: "样方垃圾测量 / Sample Trash Measure" }
  },
  {
    id: "4.6",
    title: "量一量，解码“城市巨肺”",
    enTitle: "Decode the Urban Lung",
    location: "将军林 / General Forest",
    description: {
      cn: "公园里86,000多株树木是北京最沉默的“绿色员工”。现在，给您测量的这棵树拍一张照片，记录下今天的日期和胸径。我们鼓励您明年同一时间再来测量它。",
      en: "Over 86,000 trees are Beijing's silent 'Green Employees.' Take a photo and measure the DBH (Diameter at Breast Height). Come back next year to see its growth."
    },
    visuals: [images.trees1, images.trees2],
    interaction: { type: 'calc', label: "碳汇计算器 / Carbon Calculator" }
  },
  {
    id: "4.7",
    title: "摸一摸，感知古老的杉树家族",
    enTitle: "Touch the Ancient Metasequoia",
    location: "水杉林 / Metasequoia Forest",
    description: {
      cn: "这里的主人是水杉，它们是植物界的‘大熊猫’，早在恐龙时代就已经存在了。这片林下的土壤吸饱了水，就像一块巨大的湿海绵。请轻轻触摸它的树皮，感受这位‘老前辈’的温度。",
      en: "Welcome to the Metasequoia Forest. These trees are the 'Giant Pandas' of the plant world. The soil beneath them acts like a giant wet sponge, regulating humidity."
    },
    visuals: [images.forest1, images.forest2],
  },
  {
    id: "4.8",
    title: "翻翻鸟类的自然菜单",
    enTitle: "Nature's Menu for Birds",
    location: "小路 / Berry Path",
    description: {
      cn: "鸟类餐厅全年无休，但菜单随季节变换。春天提供花蜜和昆虫，秋天则是浆果和种子的盛宴。保护好这些本土植物，就是守护鸟类朋友的“粮仓”。",
      en: "The bird restaurant is open year-round. Spring offers nectar, autumn brings berries. Protecting native plants means guarding the granary for our avian friends."
    },
    visuals: [images.birds1],
  },
  {
    id: "4.9",
    title: "加入百鸟合唱团",
    enTitle: "Join the Natural Melody",
    location: "野鸭岛 / Wild Duck Island",
    description: {
      cn: "这里是朝阳公园的“声境剧场”。您听到的“嘎嘎”声是绿头鸭在聊天。请对照“鸟鸣乐谱”，试着模仿一段。但请记住：不要播放录音引诱它们，做一个安静的听众。",
      en: "This is the park's 'Sound Theater.' Listen to the Mallards and Black Swans. Try to imitate them using the score, but do not play recordings to lure them."
    },
    visuals: [images.birds2, images.birds1],
    interaction: { type: 'sound', label: "鸟鸣乐谱 / Bird Call Score" }
  },
  {
    id: "4.10",
    title: "陪伴是最长情的告白",
    enTitle: "Companionship is the Longest Confession",
    location: "生命之源 / Source of Life",
    description: {
      cn: "大树是无声的“陪伴者”和“时间容器”。它们见证了公园的春夏秋冬。它们在，四季就在，回忆就在。",
      en: "These trees are Chaoyang Park's 'Time Vessels.' They don't speak, but they are always here, serving as a 'Time Anchor' for your memories."
    },
    visuals: [images.trees2],
    interaction: { type: 'pledge', label: "写下告白 / Write a Pledge" }
  }
];
