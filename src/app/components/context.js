'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWeixin, FaWeibo, FaInstagram } from 'react-icons/fa'
import { SiXiaohongshu } from 'react-icons/si'

console.log('Link:', Link)
console.log('motion:', motion)

export default function Contact() {
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

      {/* 大标题区块 */}
      <section className="pt-32 pb-12 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bfa980] via-[#e0c3fc] to-[#a3b1c6] drop-shadow-lg tracking-widest mb-4"
        >
          联系我们
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl text-[#bfa980] font-semibold mb-4"
        >
          悦颜，期待与您的每一次美丽邂逅
        </motion.p>
        <div className="h-1 w-32 bg-gradient-to-r from-[#e0c3fc] via-[#fff] to-[#bfa980] rounded-full mx-auto mb-8 shadow-lg"></div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl mx-auto text-[#444] text-lg md:text-xl bg-white/70 rounded-3xl px-10 py-8 shadow-2xl border-2 border-[#e0c3fc]/30 mb-4 backdrop-blur-md"
          style={{ boxShadow: 'inset 0 2px 16px #e0c3fc22' }}
        >
          如需预约、咨询或合作，欢迎通过以下方式联系我们，悦颜美容院将为您提供国际高端的美丽体验与专属服务。
        </motion.p>
      </section>

      {/* 联系方式卡片区块 */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-8 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 rounded-3xl shadow-xl border-2 border-[#e0c3fc]/30 p-10 flex flex-col gap-6 justify-center"
        >
          <div className="flex items-center gap-3 text-[#bfa980] text-2xl font-bold mb-2">
            <span>📞</span> 联系方式
          </div>
          <div className="text-[#666] text-lg flex items-center gap-2">
            <span className="text-[#bfa980]">联系人：</span> 夏静
          </div>
          <div className="text-[#666] text-lg flex items-center gap-2">
            <span className="text-[#bfa980]">电话：</span>
            <a
              href="tel:13655882368"
              className="text-[#bfa980] hover:underline"
            >
              13655882368
            </a>
          </div>
          <div className="text-[#666] text-lg flex items-center gap-2">
            <span className="text-[#bfa980]">微信：</span> 13655882368
          </div>
          <div className="text-[#666] text-lg flex items-center gap-2">
            <span className="text-[#bfa980]">邮箱：</span>{' '}
            yueyan-nine.vercel.app/
          </div>
          <div className="text-[#666] text-lg flex items-center gap-2">
            <span className="text-[#bfa980]">地址：</span>{' '}
            中国重庆市大渡口区钢花路658号
          </div>
        </motion.div>
        {/* 在线预约/留言表单 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/90 rounded-3xl shadow-xl border-2 border-[#e0c3fc]/30 p-10 flex flex-col gap-6 justify-center"
        >
          {(() => {
            const [success, setSuccess] = useState(false)
            if (success) {
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center min-h-[320px]"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#bfa980] to-[#e0c3fc] flex items-center justify-center text-white text-4xl shadow-lg mb-6">
                    ✓
                  </div>
                  <div className="text-2xl font-bold text-[#bfa980] mb-2">
                    预约成功
                  </div>
                  <div className="text-[#666] text-lg mb-4">
                    感谢您的预约，我们会尽快与您联系！
                  </div>
                  <button
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] text-white font-semibold shadow hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                    onClick={() => setSuccess(false)}
                  >
                    再预约一位
                  </button>
                </motion.div>
              )
            }
            return (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSuccess(true)
                }}
                className="flex flex-col gap-6 justify-center"
              >
                <div className="flex items-center gap-3 text-[#bfa980] text-2xl font-bold mb-2">
                  <span>📝</span> 在线预约
                </div>
                <input
                  type="text"
                  required
                  placeholder="您的姓名"
                  className="px-4 py-3 rounded-xl border border-[#e0c3fc]/30 focus:outline-none focus:ring-2 focus:ring-[#bfa980] bg-white/80 text-lg"
                />
                <input
                  type="tel"
                  required
                  placeholder="联系电话"
                  className="px-4 py-3 rounded-xl border border-[#e0c3fc]/30 focus:outline-none focus:ring-2 focus:ring-[#bfa980] bg-white/80 text-lg"
                />
                <input
                  type="text"
                  placeholder="需求/项目（选填）"
                  className="px-4 py-3 rounded-xl border border-[#e0c3fc]/30 focus:outline-none focus:ring-2 focus:ring-[#bfa980] bg-white/80 text-lg"
                />
                <textarea
                  placeholder="留言内容（选填）"
                  className="px-4 py-3 rounded-xl border border-[#e0c3fc]/30 focus:outline-none focus:ring-2 focus:ring-[#bfa980] bg-white/80 text-lg min-h-[80px]"
                />
                <button
                  type="submit"
                  className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e0c3fc] text-white font-semibold shadow hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  立即预约
                </button>
              </form>
            )
          })()}
        </motion.div>
      </section>

      {/* 地图展示区块 */}
      <section className="max-w-5xl mx-auto py-12 px-4 md:px-0">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center"
        >
          地理位置
        </motion.h3>
        <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#e0c3fc]/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.393964479836!2d106.4826251!3d29.4772246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36ecb582e4b956fd%3A0xa17bf36e65ff8d3c!2z6Z2S6Z2S5Y2X5Lqs5a6M!5e0!3m2!1szh-CN!2scn!4v1718000000000!5m2!1szh-CN!2scn"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* 品牌承诺/服务保障区块 */}
      <section className="max-w-5xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-[#e0c3fc]/20">
            <div className="text-4xl mb-2 text-[#bfa980]">🌟</div>
            <div className="font-bold text-lg mb-1">国际认证产品</div>
            <div className="text-[#888] text-sm">
              所有护理产品均为国际认证，安全高效，敏感肌也可放心体验。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-[#e0c3fc]/20">
            <div className="text-4xl mb-2 text-[#bfa980]">🤝</div>
            <div className="font-bold text-lg mb-1">一对一专属服务</div>
            <div className="text-[#888] text-sm">
              每位客户均享受一对一专属定制服务，尊享私密空间。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-8 shadow border border-[#e0c3fc]/20">
            <div className="text-4xl mb-2 text-[#bfa980]">🔒</div>
            <div className="font-bold text-lg mb-1">隐私安全保障</div>
            <div className="text-[#888] text-sm">
              严格保护客户隐私，所有信息仅用于服务沟通。
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题FAQ区块 */}
      <section className="max-w-4xl mx-auto py-12">
        <h3 className="text-3xl font-serif font-bold text-[#bfa980] mb-8 text-center">
          常见问题 FAQ
        </h3>
        <div className="space-y-6">
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 如何预约体验？
            </div>
            <div className="text-[#666]">
              A:
              您可通过在线表单、电话、微信等多种方式预约，我们会第一时间与您确认。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 是否有首次体验优惠？
            </div>
            <div className="text-[#666]">
              A: 首次到店客户可享专属体验价及定制皮肤检测服务。
            </div>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 shadow border border-[#e0c3fc]/20">
            <div className="font-bold text-[#bfa980] mb-2">
              Q: 可以为朋友预约吗？
            </div>
            <div className="text-[#666]">
              A: 可以，您可为亲友预约体验，我们将为每位客户定制专属方案。
            </div>
          </div>
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
