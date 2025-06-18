'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const team = [
  {
    name: '夏静',
    title: '创始人/院长',
    avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
    desc: '20年美容行业经验，专注高端定制护理。',
  },
  {
    name: 'Anna',
    title: '首席美容师',
    avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
    desc: '欧洲认证美容师，擅长面部抗衰与皮肤管理。',
  },
  {
    name: '李老师',
    title: '中医调理师',
    avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
    desc: '中医世家，专注身心平衡与经络调理。',
  },
  {
    name: 'Sophia',
    title: '仪器护理师',
    avatar: 'https://randomuser.me/api/portraits/women/83.jpg',
    desc: '科技美容专家，精通国际高端仪器操作。',
  },
]

const honors = [
  { icon: '🏆', text: '中国高端美容行业影响力品牌' },
  { icon: '🎖️', text: '重庆市美容行业协会理事单位' },
  { icon: '🌍', text: '国际皮肤管理认证机构' },
  { icon: '💎', text: '多项国际美容大奖获得者' },
]

const timeline = [
  { year: '2015', event: '悦颜美容院创立于重庆，专注高端定制美容服务。' },
  { year: '2017', event: '引进欧洲先进护理理念与仪器，打造欧式空间。' },
  { year: '2019', event: '荣获多项国际美容大奖，成为行业标杆。' },
  { year: '2022', event: '升级环境与服务，倡导科学、专业、个性化理念。' },
  { year: '2024', event: '团队扩展，服务项目全面升级，客户满意度持续提升。' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7f7] via-[#fff] to-[#e5eaf3] pb-20 relative overflow-x-hidden">
      {/* 顶部导航栏 */}
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
          <Link href="/" className="hover:text-[#bfa980] transition">
            首页 | Home
          </Link>
          <Link href="/about" className="hover:text-[#bfa980] transition">
            公司介绍 | About
          </Link>
          <Link href="/services" className="hover:text-[#bfa980] transition">
            我们的服务 | Services
          </Link>
          <Link href="/contact" className="hover:text-[#bfa980] transition">
            联系我们 | Contact
          </Link>
        </nav>
      </header>
      {/* 顶部渐变光斑背景 */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-br from-[#e0c3fc]/40 via-[#f5e6e8]/60 to-[#bfa980]/30 rounded-full blur-3xl opacity-50 -z-10" />
      {/* 品牌大标题 */}
      <section className="pt-32 pb-12 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bfa980] via-[#e0c3fc] to-[#a3b1c6] drop-shadow-lg tracking-widest mb-4"
        >
          公司介绍
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-[#bfa980] font-semibold mb-4"
        >
          悦颜美容院 · 美在悦己
        </motion.p>
        <div className="h-1 w-32 bg-gradient-to-r from-[#e0c3fc] via-[#fff] to-[#bfa980] rounded-full mx-auto mb-8 shadow-lg"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto text-[#444] text-lg md:text-xl bg-white/70 rounded-3xl px-10 py-8 shadow-2xl border-2 border-[#e0c3fc]/30 mb-4 backdrop-blur-md"
          style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
        >
          悦颜美容院，坐落于重庆市大渡口区钢花路658号，是一家大型欧式风格美容空间，专为追求品质与格调的女性打造。我们融合自然疗愈与现代科技，提供科学、安全、有效的个性化美容方案。
        </motion.div>
      </section>

      {/* 品牌故事与理念 */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 rounded-2xl px-10 py-8 shadow-lg border-2 border-[#e0c3fc]/30 mb-2 overflow-hidden"
            style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
          >
            {/* 欧式花饰SVG */}
            <svg
              className="absolute left-4 top-4 w-8 h-8 opacity-20"
              viewBox="0 0 32 32"
            >
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#bfa980"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h2 className="text-3xl font-serif font-bold text-[#bfa980] mb-2 tracking-wider flex items-center gap-3">
              品牌故事
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full mb-4"></div>
            <div className="text-lg md:text-xl text-[#444] leading-relaxed">
              悦颜美容院，源自对美与健康的极致追求。我们坚信，真正的美丽源于内心的自信与身心的平衡。悦颜以欧式高端空间为载体，融合自然疗愈与现代科技，致力于为每一位女性提供科学、安全、有效的个性化美容方案。
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white/80 rounded-2xl px-10 py-8 shadow-lg border-2 border-[#e0c3fc]/30 overflow-hidden"
            style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
          >
            <svg
              className="absolute right-4 top-4 w-8 h-8 opacity-20"
              viewBox="0 0 32 32"
            >
              <rect
                x="6"
                y="6"
                width="20"
                height="20"
                rx="6"
                stroke="#bfa980"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <h2 className="text-3xl font-serif font-bold text-[#bfa980] mb-2 tracking-wider flex items-center gap-3">
              企业文化
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full mb-4"></div>
            <div className="text-lg md:text-xl text-[#444] leading-relaxed flex items-center gap-4">
              <span className="text-2xl text-[#bfa980] font-serif font-bold">
                "
              </span>
              科学 · 专业 ·
              个性化——悦颜倡导精致、宁静、自信的生活方式。我们相信，美容不仅是外在改变，更是一种自我关爱的体现。
              <span className="text-2xl text-[#bfa980] font-serif font-bold">
                "
              </span>
            </div>
          </motion.div>
        </div>
        {/* 环境展示大图加渐变遮罩 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex justify-center items-center relative"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
            alt="悦颜环境"
            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover"
          />
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                'linear-gradient(120deg,rgba(224,195,252,0.13) 0%,rgba(191,169,128,0.18) 100%)',
            }}
          />
        </motion.div>
      </section>

      {/* 发展历程 竖向时间轴 */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa980] text-center mb-8 tracking-wider">
          发展历程
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#e0c3fc] to-[#bfa980] rounded-full -translate-x-1/2 z-0" />
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative z-10 flex md:flex-row flex-col items-center w-full md:w-4/5 mb-8 group ${
                i % 2 === 0 ? 'md:self-start' : 'md:self-end'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#e0c3fc]/30 transition-all duration-300">
                  {item.year}
                </div>
                <div className="h-4 w-1 bg-gradient-to-b from-[#e0c3fc] to-[#bfa980] rounded-full"></div>
              </div>
              <div className="bg-white/90 rounded-xl shadow border-2 border-[#e0c3fc]/30 px-8 py-4 text-[#444] font-medium text-base ml-6 md:ml-10 group-hover:shadow-xl group-hover:border-[#bfa980] transition-all duration-300">
                {item.event}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa980] text-center mb-10 tracking-wider">
          专业团队
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white/90 rounded-2xl shadow-lg border-2 border-[#e0c3fc]/30 p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#bfa980] group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-[#e0c3fc]/30 group-hover:ring-[#bfa980] group-hover:blur-sm transition-all duration-300"></div>
              </div>
              <div className="text-lg font-bold text-[#bfa980] mb-1">
                {member.name}
              </div>
              <div className="text-[#a3b1c6] text-sm mb-2">{member.title}</div>
              <div className="text-[#666] text-center text-base">
                {member.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 py-12">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa980] text-center mb-8 tracking-wider">
          荣誉资质
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {honors.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white/90 rounded-xl shadow border-2 border-[#e0c3fc]/30 px-8 py-4 text-[#bfa980] font-semibold text-lg flex items-center gap-3 hover:shadow-xl hover:border-[#bfa980] hover:bg-[#f7f7f7] transition-all duration-300"
            >
              <span className="text-2xl">{h.icon}</span>
              {h.text}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 公司环境六宫格图片展示 */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 py-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#bfa980] text-center mb-10 tracking-wider">
          环境展示
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#e0c3fc]/20 group"
            >
              <img
                src={`/imgs/${i}.jpg`}
                alt={`环境${i}`}
                className="w-full h-112 object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#bfa980]/60 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部联系方式与版权 */}
      <footer className="py-12 text-center text-[#b7b7b7] text-lg bg-white/60 border-t border-[#ececec] mt-10">
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
