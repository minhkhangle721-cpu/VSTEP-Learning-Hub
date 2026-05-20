"use client";

import React, { useState } from "react";

export default function VstepLearningHub() {
  // Quản lý trạng thái chuyển trang (Routing cơ bản bằng State)
  const [activeTab, setActiveTab] = useState<"home" | "materials" | "contact">("home");

  // Quản lý dữ liệu Form Liên Hệ
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* 1. THANH ĐIỀU HƯỚNG (HEADER & NAVIGATION) */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-blue-700 p-2 rounded-lg font-black text-xl tracking-wider shadow">
              VSTEP
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">LEARNING HUB</h1>
              <p className="text-xs text-blue-200">Hệ thống luyện thi chuẩn hóa</p>
            </div>
          </div>

          {/* Menu Điều Hướng - Đáp ứng yêu cầu Routing */}
          <nav className="flex space-x-2 bg-indigo-900/40 p-1 rounded-xl backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "home" ? "bg-white text-blue-800 shadow" : "text-indigo-100 hover:bg-white/10"
              }`}
            >
              Trang Chủ
            </button>
            <button
              onClick={() => setActiveTab("materials")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "materials" ? "bg-white text-blue-800 shadow" : "text-indigo-100 hover:bg-white/10"
              }`}
            >
              Tài Liệu Mẫu
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "contact" ? "bg-white text-blue-800 shadow" : "text-indigo-100 hover:bg-white/10"
              }`}
            >
              Liên Hệ Tư Vấn
            </button>
          </nav>
        </div>
      </header>

      {/* 2. NỘI DUNG CHÍNH (THAY ĐỔI THEO ROUTING TAB) */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        
        {/* ================= TRANG 1: TRANG CHỦ ================= */}
        {activeTab === "home" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Banner chào mừng hiển thị thông tin sinh viên */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Dự án giữa kỳ - LHU
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Chào mừng đến với VSTEP Learning Hub
                </h2>
                <p className="text-slate-600 max-w-xl">
                  Nền tảng hỗ trợ tự học, tra cứu cấu trúc đề thi và cung cấp các bài mẫu viết/nói đạt chuẩn khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-5 rounded-xl shadow-md border border-slate-700 w-full md:w-auto">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Sinh viên thực hiện</p>
                <p className="text-lg font-bold text-blue-400">Lê Minh Khang</p>
                <p className="text-sm text-slate-300">Ngành: Công nghệ thông tin</p>
                <p className="text-xs text-slate-400 mt-1">Trường Đại học Lạc Hồng</p>
              </div>
            </div>

            {/* Khối lộ trình mục tiêu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">B1</div>
                <h3 className="text-xl font-bold text-slate-900">Mục tiêu bậc 3 (B1 VSTEP)</h3>
                <p className="text-sm text-slate-600">Dành cho sinh viên đại học chuẩn đầu ra, học viên cao học. Tập trung xử lý các chủ đề quen thuộc, ngữ pháp cơ bản và giao tiếp đời sống.</p>
                <button onClick={() => setActiveTab("materials")} className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 pt-2">
                  Xem tài liệu B1 &rarr;
                </button>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">B2</div>
                <h3 className="text-xl font-bold text-slate-900">Mục tiêu bậc 4 (B2 VSTEP)</h3>
                <p className="text-sm text-slate-600">Dành cho giáo viên tiếng Anh, nghiên cứu sinh. Yêu cầu lập luận logic, viết luận dài và xử lý các bài nghe nói có tính chuyên môn cao.</p>
                <button onClick={() => setActiveTab("materials")} className="text-sm font-semibold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 pt-2">
                  Xem tài liệu B2 &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TRANG 2: TÀI LIỆU MẪU ================= */}
        {activeTab === "materials" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Thư viện bài mẫu chuẩn hóa</h2>
              <p className="text-sm text-slate-500">Tổng hợp đề và đáp án gợi ý cho kỹ năng Writing & Speaking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bài mẫu 1 */}
              <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-blue-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  VSTEP Writing Task 1 (Email)
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-slate-900 line-clamp-2">Viết thư trả lời lời mời tham dự tiệc sinh nhật bằng tiếng Anh</h3>
                  <p className="text-xs text-slate-500">Mục tiêu: Đạt form chuẩn 3 phần, sử dụng cấu trúc cảm ơn và từ chối/nhận lời lịch sự.</p>
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                    <span>Mức độ: B1 - B2</span>
                    <span className="text-blue-600 font-medium">Đọc bài mẫu &rarr;</span>
                  </div>
                </div>
              </div>

              {/* Bài mẫu 2 */}
              <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  VSTEP Writing Task 2 (Essay)
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-slate-900 line-clamp-2">Nghị luận về tác động của mạng xã hội đối với thế hệ trẻ ngày nay</h3>
                  <p className="text-xs text-slate-500">Mục tiêu: Triển khai bài viết 250 từ, đầy đủ luận điểm, luận cứ chứng minh lợi ích và tác hại.</p>
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                    <span>Mức độ: B2 - C1</span>
                    <span className="text-emerald-600 font-medium">Đọc bài mẫu &rarr;</span>
                  </div>
                </div>
              </div>

              {/* Bài mẫu 3 */}
              <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-amber-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  VSTEP Speaking Part 2
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-slate-900 line-clamp-2">Thuyết trình lựa chọn giải pháp: Mua quà gì cho ngày nhà giáo Việt Nam</h3>
                  <p className="text-xs text-slate-500">Mục tiêu: So sánh giữa 3 lựa chọn (Hoa, Sách, Quà lưu niệm) và đưa ra lập luận thuyết phục.</p>
                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                    <span>Mức độ: B1 - B2</span>
                    <span className="text-amber-600 font-medium">Nghe audio &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TRANG 3: LIÊN HỆ TƯ VẤN ================= */}
        {activeTab === "contact" && (
          <div className="max-w-xl mx-auto space-y-6 animate-fadeIn">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Đăng ký nhận lộ trình ôn tập</h2>
              <p className="text-sm text-slate-500">Điền thông tin dưới đây, trung tâm sẽ kết nối gửi tài liệu PDF miễn phí cho bạn.</p>
            </div>

            <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center space-y-2 animate-scaleUp">
                  <div className="text-2xl">🎉</div>
                  <p className="font-bold">Đăng ký thành công!</p>
                  <p className="text-xs text-emerald-600">Cảm ơn bạn. Hệ thống sẽ gửi tài liệu VSTEP qua Email sớm nhất.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Họ và tên</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Địa chỉ Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@gmail.com"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1 tracking-wider">Mục tiêu điểm số hoặc nội dung cần hỗ trợ</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Em cần tài liệu ôn thi viết luận B2..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm shadow transition-colors"
                  >
                    Gửi yêu cầu tài liệu
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* 3. PHẦN CHÂN TRANG (FOOTER) */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-xs text-center">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-300">Dự Án Nghiên Cứu & Xây Dựng Hệ Thống Hỗ Trợ Học Tập Học Viên VSTEP</p>
          <p>Bản quyền thuộc về Dự án công nghệ thông tin LHU 2026 — Sinh viên: <span className="text-slate-200 font-medium">Lê Minh Khang</span></p>
        </div>
      </footer>
    </div>
  );
}
