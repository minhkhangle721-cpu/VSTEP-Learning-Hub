"use client";

import React, { useState } from "react";

// Dữ liệu bài mẫu
const materialsData = [
  { id: 1, title: "Viết thư trả lời mời sinh nhật", content: "Dear John, Thank you for the invitation. I would love to attend. See you there! - Khang" },
  { id: 2, title: "Tác động mạng xã hội", content: "Social media has both pros and cons. It connects people but can also cause addiction." },
  { id: 3, title: "Lựa chọn quà cho giáo viên", content: "I believe a book is the best gift because it is meaningful and long-lasting." }
];

export default function VstepLearningHub() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Thanh Menu */}
      <nav className="bg-blue-700 p-6 text-white flex justify-center gap-8 font-bold shadow-lg">
        <button onClick={() => setActiveTab("home")} className="hover:text-blue-200">Trang Chủ</button>
        <button onClick={() => setActiveTab("materials")} className="hover:text-blue-200">Tài Liệu</button>
        <button onClick={() => setActiveTab("contact")} className="hover:text-blue-200">Liên Hệ</button>
      </nav>

      {/* Nội dung chính */}
      <main className="p-10 max-w-5xl mx-auto">
        {activeTab === "home" && (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">VSTEP Learning Hub</h1>
            <p className="text-slate-600">Hệ thống luyện thi VSTEP chuẩn hóa cho sinh viên LHU.</p>
          </div>
        )}

        {activeTab === "materials" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materialsData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                <h3 className="font-bold mb-4 text-slate-800">{item.title}</h3>
                <button 
                  onClick={() => setSelectedContent(item.content)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
                >
                  Đọc bài mẫu
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-bold mb-6 text-center">Liên Hệ Tư Vấn</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full p-3 border rounded-lg" placeholder="Họ và tên" />
              <textarea className="w-full p-3 border rounded-lg h-32" placeholder="Lời nhắn của bạn"></textarea>
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">Gửi yêu cầu</button>
            </form>
          </div>
        )}
      </main>

      {/* Popup chi tiết */}
      {selectedContent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Chi tiết bài mẫu</h3>
            <p className="text-slate-700 mb-6">{selectedContent}</p>
            <button 
              onClick={() => setSelectedContent(null)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg w-full"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
