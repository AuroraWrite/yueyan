'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import Link from 'next/link'

const services = [
  {
    icon: '💆‍♀️',
    title: '面部护理',
    desc: '深层清洁、补水美白、抗衰修复、敏感肌修护、痘痘肌护理',
  },
  {
    icon: '🌿',
    title: '身体SPA',
    desc: '中式经络按摩、芳香精油放松、全身舒缓排毒、热石疗法',
  },
  {
    icon: '💎',
    title: '美体塑形',
    desc: '仪器瘦身、冷热雕塑、中医拔罐、塑形按摩',
  },
  {
    icon: '🌼',
    title: '私密护理',
    desc: '女性私密调理、护理项目讲究安全私密',
  },
  {
    icon: '☕',
    title: '茶艺服务',
    desc: '特别设置茶艺区，提供传统茶道服务，缓解疲劳、调理气息',
  },
  {
    icon: '🎓',
    title: '专属定制课程',
    desc: '根据肤质和需求，为您量身定制改善计划和周期性护理方案',
  },
]

const highlights = [
  {
    icon: '🏛️',
    title: '欧式高端环境',
    desc: '典雅欧式空间，私密舒适，尊享体验。',
  },
  {
    icon: '👩‍🔬',
    title: '专业美容团队',
    desc: '资深美容师，欧洲护理理念与中医调理结合。',
  },
  {
    icon: '🧬',
    title: '科技仪器支持',
    desc: '引进国际先进美容仪器，科学高效。',
  },
  {
    icon: '🎯',
    title: '专属定制服务',
    desc: '根据个人肤质与需求，量身定制护理方案。',
  },
]

const reviews = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Lily',
    text: '环境优雅，服务非常贴心，做完护理皮肤状态提升明显！',
    stars: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    name: '王女士',
    text: '美容师很专业，项目讲解细致，体验感超棒。',
    stars: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sophia',
    text: '环境安静舒适，仪器先进，效果很满意。',
    stars: 4,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/71.jpg',
    name: '陈小姐',
    text: '每次来都很放松，茶艺区很有氛围，推荐！',
    stars: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
    name: 'Grace',
    text: '护理方案很科学，皮肤改善很明显，值得信赖。',
    stars: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/73.jpg',
    name: '赵女士',
    text: '私密护理很专业，环境私密性好，体验感极佳。',
    stars: 5,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/74.jpg',
    name: 'Emily',
    text: '团队很有耐心，仪器先进，服务流程很细致。',
    stars: 4,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
    name: '张女士',
    text: '悦颜的理念很打动我，做完护理身心都很舒畅。',
    stars: 5,
  },
]

const partners = [
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Beiersdorf_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2e/L%27Or%C3%A9al_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2d/Unilever_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/Procter_%26_Gamble_logo.svg',
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      type: 'spring',
    },
  }),
}

const faqs = [
  {
    q: '悦颜美容院有哪些特色服务？',
    a: '我们提供面部护理、身体SPA、美体塑形、私密护理、茶艺服务及专属定制课程，融合欧式理念与中医调理。',
  },
  {
    q: '首次到店有无专属福利？',
    a: '首次到店可享受专属皮肤检测及定制护理方案，还有新客专属优惠。',
  },
  {
    q: '如何预约？',
    a: '可通过官网预约、电话预约或到店前台预约，支持微信/电话一键预约。',
  },
  {
    q: '美容师资质如何？',
    a: '所有美容师均持有国际/国内专业认证，经验丰富，服务贴心。',
  },
  {
    q: '环境安全吗？',
    a: '悦颜严格消毒，采用高端仪器，环境私密安全，保障每一位顾客的健康。',
  },
]

export default function Home() {
  const [reviewIdx, setReviewIdx] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(
      () => setReviewIdx((i) => (i + 1) % reviews.length),
      4000
    )
    return () => clearInterval(timer)
  }, [])

  // Parallax主视觉大图
  const heroImgRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        const scrolled = window.scrollY
        heroImgRef.current.style.transform = `translateY(${scrolled * 0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 计算当前显示的3条评价
  const reviewList = [
    reviews[reviewIdx],
    reviews[(reviewIdx + 1) % reviews.length],
    reviews[(reviewIdx + 2) % reviews.length],
  ]

  // 粒子参数
  const particlesInit = async (main) => {
    await loadFull(main)
  }
  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#fbc2eb', '#a6c1ee', '#fff', '#f9fafb'] },
      links: {
        color: '#fbc2eb',
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: true,
        speed: 1.2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#fff] to-[#e5eaf3] overflow-x-hidden font-sans">
      {/* 全屏渐变淡入动画背景 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 60% 20%, #e0c3fc55 0%, #fff0 70%), radial-gradient(ellipse at 20% 80%, #bfa98033 0%, #fff0 70%)',
        }}
      />

      {/* 顶部导航 */}
      <header className="w-full fixed top-0 left-0 z-20 bg-white/70 backdrop-blur-md border-b border-[#ececec] flex items-center justify-between px-8 md:px-32 h-24 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            悦
          </div>
          <span className="text-3xl font-serif font-bold text-[#bfa980] tracking-widest">
            悦颜美容院
          </span>
        </div>
        <nav className="hidden md:flex gap-14 text-[#a3b1c6] font-medium text-xl">
          <Link href="/" legacyBehavior>
            <a className="hover:text-[#bfa980] transition">首页 | Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-[#bfa980] transition">公司介绍 | About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="hover:text-[#bfa980] transition">
              我们的服务 | Services
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-[#bfa980] transition">
              联系我们 | Contact
            </a>
          </Link>
        </nav>
      </header>

      {/* 主视觉区块 全屏大气 */}
      <section
        id="home"
        className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center pt-32 md:pt-0 pb-10 md:pb-0 bg-gradient-to-br from-[#f7f7f7] via-[#fff] to-[#e5eaf3] relative overflow-hidden"
      >
        {/* 左侧品牌大图+渐变遮罩+柔光+Parallax */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center h-[400px] md:h-[600px]">
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
            alt="悦颜美容院环境"
            className="w-[90%] h-[90%] object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform duration-500 will-change-transform"
            style={{ filter: 'brightness(0.95) blur(0.5px)' }}
          />
          {/* 渐变遮罩 */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                'linear-gradient(120deg,rgba(224,195,252,0.18) 0%,rgba(191,169,128,0.22) 100%)',
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gradient-to-br from-[#e0c3fc]/40 via-[#f5e6e8]/60 to-[#bfa980]/30 rounded-full blur-3xl opacity-60 -z-10" />
        </div>
        {/* 右侧品牌内容 */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-6 md:px-16 mt-10 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bfa980] via-[#e0c3fc] to-[#a3b1c6] drop-shadow-lg tracking-widest mb-4 text-center md:text-left"
          >
            美在悦己
          </motion.h1>
          {/* 渐变分割线 */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full mb-6 mx-auto md:mx-0 origin-left"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-[#bfa980] font-semibold text-center md:text-left mb-6 tracking-wide"
          >
            重庆市大渡口区钢花路658号
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-xl text-[#444] text-lg md:text-xl bg-white/80 rounded-3xl px-10 py-8 shadow-2xl border-2 border-[#e0c3fc]/30 mb-8 backdrop-blur-md"
          >
            悦颜美容院，坐落于重庆市大渡口区钢花路658号，是一家大型欧式风格美容空间，专为追求品质与格调的女性打造。我们融合自然疗愈与现代科技，提供科学、安全、有效的个性化美容方案。
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] text-white font-bold text-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ring-2 ring-[#e0c3fc]/30 animate-glow cursor-pointer"
            style={{
              boxShadow: '0 4px 32px 0 #e0c3fc44,0 0 16px 2px #bfa98088',
            }}
          >
            <Link href="/contact" legacyBehavior>
              <a className="block w-full h-full">立即预约</a>
            </Link>
          </motion.a>
        </div>
      </section>

      {/* 品牌故事/理念/环境展示大图 */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-4xl font-serif font-extrabold text-[#bfa980] mb-2 tracking-wider flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-gradient-to-b from-[#e0c3fc] to-[#bfa980] rounded-full mr-2"></span>
              品牌故事
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full mb-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl text-[#444] leading-relaxed bg-white/80 rounded-2xl px-8 py-6 shadow-lg border-2 border-[#e0c3fc]/30"
              style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
            >
              悦颜美容院，源自对美与健康的极致追求。我们坚信，真正的美丽源于内心的自信与身心的平衡。悦颜以欧式高端空间为载体，融合自然疗愈与现代科技，致力于为每一位女性提供科学、安全、有效的个性化美容方案。
            </motion.div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-extrabold text-[#bfa980] mb-2 tracking-wider flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-gradient-to-b from-[#e0c3fc] to-[#bfa980] rounded-full mr-2"></span>
              悦颜理念
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full mb-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#444] leading-relaxed bg-white/80 rounded-2xl px-8 py-6 shadow-lg border-2 border-[#e0c3fc]/30 flex items-center gap-4"
              style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
            >
              <span className="text-3xl text-[#bfa980] font-serif font-bold">
                "
              </span>
              科学 · 专业 ·
              个性化——悦颜倡导精致、宁静、自信的生活方式。我们相信，美容不仅是外在改变，更是一种自我关爱的体现。
              <span className="text-3xl text-[#bfa980] font-serif font-bold">
                "
              </span>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
            alt="悦颜环境"
            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* 页面底部渐变波浪装饰 */}
      <div
        className="w-full overflow-hidden relative"
        style={{ height: '80px', marginBottom: '-40px' }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#e0c3fc"
            fillOpacity="0.3"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <path
            fill="#bfa980"
            fillOpacity="0.2"
            d="M0,224L60,202.7C120,181,240,139,360,122.7C480,107,600,117,720,133.3C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* 特色亮点区块 */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#bfa980] text-center mb-12 tracking-wider"
        >
          悦颜优势
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/90 rounded-2xl shadow-lg border border-[#ececec] p-12 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{h.icon}</div>
              <div className="text-xl font-bold text-[#bfa980] mb-2 font-serif">
                {h.title}
              </div>
              <div className="text-[#666] text-center text-base">{h.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 服务项目区块 */}
      <section id="services" className="max-w-7xl mx-auto px-4 md:px-0 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#bfa980] text-center mb-4 tracking-wider"
        >
          服务项目
        </motion.h2>
        <p className="text-center text-[#888] mb-10 text-lg">
          悦颜为您提供多项高品质美容护理服务，科学、安全、专属定制。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/90 rounded-2xl shadow-lg border border-[#ececec] p-10 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{srv.icon}</div>
              <div className="text-2xl font-bold text-[#bfa980] mb-2 font-serif">
                {srv.title}
              </div>
              <div className="text-[#666] text-center text-lg mb-4">
                {srv.desc}
              </div>
              <a className="mt-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] text-white font-semibold text-lg shadow hover:scale-105 transition-all duration-300 cursor-pointer">
                <Link href="/services" legacyBehavior>
                  <a className="block w-full h-full">了解详情</a>
                </Link>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 服务流程区块 */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#bfa980] text-center mb-12 tracking-wider"
        >
          服务流程
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-3xl text-white mb-2">
              1
            </div>
            <div className="text-[#bfa980] font-bold mb-1">到店咨询</div>
            <div className="text-[#888] text-center">
              专业顾问一对一沟通，了解您的需求
            </div>
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] rounded-full md:rotate-0 rotate-90" />
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-3xl text-white mb-2">
              2
            </div>
            <div className="text-[#bfa980] font-bold mb-1">皮肤检测</div>
            <div className="text-[#888] text-center">
              仪器检测肤质，科学分析皮肤状态
            </div>
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] rounded-full md:rotate-0 rotate-90" />
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-3xl text-white mb-2">
              3
            </div>
            <div className="text-[#bfa980] font-bold mb-1">定制方案</div>
            <div className="text-[#888] text-center">
              根据检测结果，定制专属护理计划
            </div>
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] rounded-full md:rotate-0 rotate-90" />
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-3xl text-white mb-2">
              4
            </div>
            <div className="text-[#bfa980] font-bold mb-1">专业护理</div>
            <div className="text-[#888] text-center">
              专业美容师全程服务，体验高端护理
            </div>
          </div>
        </div>
      </section>

      {/* 客户评价区块（大气并排3条轮播） */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#bfa980] text-center mb-12 tracking-wider"
        >
          客户评价
        </motion.h2>
        <div className="flex gap-10 justify-center items-stretch">
          {reviewList.map((r, idx) => (
            <motion.div
              key={r.name + idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white/90 rounded-2xl shadow-xl border border-[#ececec] p-10 flex flex-col items-center text-center w-full max-w-sm min-h-[320px]"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#bfa980] mb-4"
              />
              <div className="text-[#bfa980] font-bold mb-1 text-lg">
                {r.name}
              </div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#bfa980] text-xl">
                    ★
                  </span>
                ))}
              </div>
              <div className="text-[#444] text-lg mb-2">"{r.text}"</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 常见问题FAQ区块 */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-serif font-bold text-[#bfa980] text-center mb-8 tracking-wider"
        >
          常见问题
        </motion.h2>
        <div className="divide-y divide-[#ececec] bg-white/80 rounded-2xl shadow border border-[#ececec]">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-6">
              <div className="font-bold text-[#bfa980] mb-2">Q: {f.q}</div>
              <div className="text-[#444]">A: {f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式/底部 */}
      <footer
        id="contact"
        className="py-12 text-center text-[#b7b7b7] text-lg bg-white/60 border-t border-[#ececec] mt-10"
      >
        <div className="mb-2">联系人：夏静</div>
        <div className="mb-2">
          电话：
          <a href="tel:13655882368" className="text-[#bfa980] hover:underline">
            13655882368
          </a>
        </div>
        <div className="mb-2">悦颜美容院</div>
        <div className="mb-2">地址：中国重庆市大渡口区钢花路658号</div>

        <div className="mt-2">© 2025 悦颜美容院. All Rights Reserved.</div>
      </footer>
    </div>
  )
}

/* 额外CSS动画（可加到全局css）
.animate-glow {
  animation: glow 2s infinite alternate;
}
@keyframes glow {
  0% { box-shadow: 0 0 16px 2px #bfa98088, 0 4px 32px 0 #e0c3fc44; }
  100% { box-shadow: 0 0 32px 8px #e0c3fc88, 0 4px 32px 0 #bfa98044; }
}
*/
