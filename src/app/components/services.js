'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: '💆‍♀️',
    title: '面部护理',
    desc: '深层清洁、补水美白、抗衰修复、敏感肌修护、痘痘肌护理等多项高端面部项目，采用国际先进仪器与定制配方，科学改善肌肤问题。',
    highlights: ['欧洲仪器', '定制配方', '敏感肌友好', '抗衰修复'],
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: '🌿',
    title: '身体SPA',
    desc: '中式经络按摩、芳香精油放松、全身舒缓排毒、热石疗法，融合中西理念，舒缓身心，焕发活力。',
    highlights: ['芳香精油', '热石疗法', '经络疏通', '身心平衡'],
    img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: '💎',
    title: '美体塑形',
    desc: '仪器瘦身、冷热雕塑、中医拔罐、塑形按摩，科学管理体型，安全高效，打造理想曲线。',
    highlights: ['仪器瘦身', '冷热雕塑', '中医拔罐', '塑形按摩'],
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: '🌼',
    title: '私密护理',
    desc: '女性私密调理，采用安全私密的护理环境与国际认证产品，呵护女性健康。',
    highlights: ['安全私密', '国际认证', '专业护理', '女性健康'],
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: '☕',
    title: '茶艺服务',
    desc: '特别设置茶艺区，提供传统茶道服务，缓解疲劳、调理气息，体验身心放松的美好时光。',
    highlights: ['传统茶道', '舒缓身心', '专属茶区', '高端体验'],
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: '🎓',
    title: '专属定制课程',
    desc: '根据肤质和需求，为您量身定制改善计划和周期性护理方案，科学管理美丽。',
    highlights: ['一对一定制', '周期管理', '科学改善', '专属方案'],
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Services() {
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

      {/* 大标题区块 */}
      <section className="pt-32 pb-12 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bfa980] via-[#e0c3fc] to-[#a3b1c6] drop-shadow-lg tracking-widest mb-4"
        >
          我们的服务
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-[#bfa980] font-semibold mb-4"
        >
          科学 · 专业 · 个性化
        </motion.p>
        <div className="h-1 w-32 bg-gradient-to-r from-[#e0c3fc] via-[#fff] to-[#bfa980] rounded-full mx-auto mb-8 shadow-lg"></div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto text-[#444] text-lg md:text-xl bg-white/70 rounded-3xl px-10 py-8 shadow-2xl border-2 border-[#e0c3fc]/30 mb-4 backdrop-blur-md"
          style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
        >
          悦颜为您提供多项高品质美容护理服务，融合欧式理念与中医调理，科学、安全、专属定制，满足不同女性的美丽需求。
        </motion.p>
      </section>

      {/* 服务理念/优势区块 */}
      <section className="max-w-5xl mx-auto pt-36 pb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#bfa980] mb-6 tracking-widest drop-shadow-lg"
        >
          悦颜服务理念
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg md:text-2xl text-[#666] max-w-3xl mx-auto mb-4"
        >
          融合国际美学与中医智慧，专注于每一位女性的独特美丽，甄选全球高端仪器与产品，打造专属定制护理体验。悦颜以科学、专业、尊贵为核心，致力于成为国际高端美容院标杆。
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-white/80 rounded-2xl px-8 py-4 shadow border border-[#e0c3fc]/30 text-[#bfa980] text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🌍</span> 国际认证产品
          </div>
          <div className="bg-white/80 rounded-2xl px-8 py-4 shadow border border-[#e0c3fc]/30 text-[#bfa980] text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🧬</span> 科学定制方案
          </div>
          <div className="bg-white/80 rounded-2xl px-8 py-4 shadow border border-[#e0c3fc]/30 text-[#bfa980] text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">👩‍⚕️</span> 专业医美团队
          </div>
          <div className="bg-white/80 rounded-2xl px-8 py-4 shadow border border-[#e0c3fc]/30 text-[#bfa980] text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🏆</span> 顶级环境体验
          </div>
        </div>
      </section>

      {/* 服务项目卡片区块 */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((srv, i) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative bg-white/90 rounded-3xl shadow-xl border-2 border-[#e0c3fc]/30 p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
          >
            {/* 左侧图片与icon */}
            <div className="relative w-40 h-40 flex-shrink-0 flex flex-col items-center justify-center">
              <img
                src={srv.img}
                alt={srv.title}
                className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-[#bfa980]"
              />
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#e0c3fc]/40 to-[#bfa980]/30 rounded-full blur-2xl opacity-60 -z-10" />
              <div className="absolute left-2 top-2 text-3xl md:text-4xl drop-shadow-lg">
                {srv.icon}
              </div>
            </div>
            {/* 右侧内容 */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="text-2xl font-bold text-[#bfa980] mb-1 font-serif flex items-center gap-2">
                {srv.title}
              </div>
              <div className="text-[#666] text-base md:text-lg mb-2">
                {srv.desc}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {srv.highlights.map((h, idx) => (
                  <span
                    key={h}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-[#e0c3fc]/30 to-[#bfa980]/20 text-[#bfa980] text-sm font-semibold shadow border border-[#e0c3fc]/20"
                  >
                    {h}
                  </span>
                ))}
              </div>
              {/* 新增：适合人群、服务流程、专家建议 */}
              <div className="text-[#888] text-sm mt-2 space-y-1">
                <div>
                  <strong>适合人群：</strong>
                  都市白领、爱美人士、敏感肌、亚健康人群等
                </div>
                <div>
                  <strong>服务流程：</strong>皮肤检测 → 深层清洁 → 定制护理 →
                  舒缓修复 → 售后指导
                </div>
                <div>
                  <strong>专家建议：</strong>
                  建议每月护理1-2次，搭配定制产品效果更佳
                </div>
              </div>
              {/* 新增：前后对比图/客户故事 */}
              <div className="mt-4 flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
                  className="w-20 h-20 rounded-xl object-cover shadow border-2 border-[#e0c3fc]/40"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                  className="w-20 h-20 rounded-xl object-cover shadow border-2 border-[#bfa980]/40"
                />
              </div>
              {/* 新增：合作品牌LOGO */}
              <div className="flex gap-2 mt-2 items-center"></div>
              <Link href="/contact" legacyBehavior>
                <a className="inline-block mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] text-white font-semibold shadow hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  立即预约
                </a>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 服务流程可视化 */}
      <section className="max-w-4xl mx-auto py-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          服务流程
        </motion.h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              1
            </div>
            <div className="mt-2 text-[#bfa980] font-semibold">预约咨询</div>
          </div>
          <div className="h-1 w-10 md:w-32 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full" />
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              2
            </div>
            <div className="mt-2 text-[#bfa980] font-semibold">到店体验</div>
          </div>
          <div className="h-1 w-10 md:w-32 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full" />
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              3
            </div>
            <div className="mt-2 text-[#bfa980] font-semibold">定制护理</div>
          </div>
          <div className="h-1 w-10 md:w-32 bg-gradient-to-r from-[#e0c3fc] to-[#bfa980] rounded-full" />
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              4
            </div>
            <div className="mt-2 text-[#bfa980] font-semibold">售后关怀</div>
          </div>
        </div>
      </section>

      {/* 客户评价精选 */}
      <section className="max-w-5xl mx-auto py-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          客户评价精选
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20 flex flex-col items-center"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-16 h-16 rounded-full mb-2 border-2 border-[#bfa980]"
            />
            <div className="text-[#bfa980] font-bold mb-1">Anna (德国)</div>
            <div className="text-[#888] text-sm mb-2">
              "悦颜的面部护理让我肌肤焕然一新，环境和服务都非常国际化！"
            </div>
            <div className="flex gap-1 text-[#e0c3fc]">★★★★★</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20 flex flex-col items-center"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-16 h-16 rounded-full mb-2 border-2 border-[#bfa980]"
            />
            <div className="text-[#bfa980] font-bold mb-1">David (英国)</div>
            <div className="text-[#888] text-sm mb-2">
              "SPA体验非常专业，仪器和产品都是国际大牌，值得信赖！"
            </div>
            <div className="flex gap-1 text-[#e0c3fc]">★★★★★</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20 flex flex-col items-center"
          >
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              className="w-16 h-16 rounded-full mb-2 border-2 border-[#bfa980]"
            />
            <div className="text-[#bfa980] font-bold mb-1">林女士 (中国)</div>
            <div className="text-[#888] text-sm mb-2">
              "环境优雅，服务贴心，悦颜是我心中最好的美容院！"
            </div>
            <div className="flex gap-1 text-[#e0c3fc]">★★★★★</div>
          </motion.div>
        </div>
      </section>

      {/* 常见问题FAQ */}
      <section className="max-w-4xl mx-auto py-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          常见问题 FAQ
        </motion.h3>
        <div className="space-y-6">
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 初次体验需要提前预约吗？
            </div>
            <div className="text-[#666]">
              A: 建议提前预约，悦颜为每位客户定制专属护理方案，确保最佳体验。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 产品是否为国际认证？
            </div>
            <div className="text-[#666]">
              A: 所有护理产品均为国际认证品牌，安全高效，敏感肌也可放心体验。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 有无会员专属福利？
            </div>
            <div className="text-[#666]">
              A: 会员可享受专属折扣、定期皮肤检测、专属定制方案等多重福利。
            </div>
          </div>
        </div>
      </section>

      {/* 合作品牌LOGO墙 */}
      <section className="max-w-5xl mx-auto py-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          合作品牌
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            La Mer
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e0c3fc] to-[#bfa980] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            Estée Lauder
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            L'Oréal
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e0c3fc] to-[#bfa980] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            Chanel
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            Clarins
          </div>
        </div>
      </section>

      {/* 环境/设备展示 */}
      <section className="max-w-6xl mx-auto py-12">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          环境与设备
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#e0c3fc]/20"
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#bfa980]/80 to-transparent text-white p-4 font-bold text-lg">
              欧式雅致休息区
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#e0c3fc]/20"
          >
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#e0c3fc]/80 to-transparent text-white p-4 font-bold text-lg">
              国际高端仪器区
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#e0c3fc]/20"
          >
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#bfa980]/80 to-transparent text-white p-4 font-bold text-lg">
              私密护理空间
            </div>
          </motion.div>
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
