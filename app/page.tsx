"use client";

import React, { useState } from "react";

interface MaterialItem {
  id: string;
  category: string;
  title: string;
  target: string;
  level: string;
  topic: string;
  content: string;
  analysis: string;
}

export default function VstepLearningHub() {
  const [activeTab, setActiveTab] = useState<"home" | "materials" | "contact">("home");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  const materialsData: MaterialItem[] = [
    {
      id: "writing-task1",
      category: "VSTEP Writing Task 1",
      title: "Viết thư trả lời lời mời sinh nhật",
      target: "Mục tiêu: Đạt form chuẩn 3 phần.",
      level: "B1 - B2",
      topic: "Invite email reply.",
      content: "Dear John,\n\nThank you for your invitation to your 21st birthday party. I would love to come. Please let me know the time and place.\n\nBest wishes,\nLê Minh Khang",
      analysis: "👉 Phân tích: Cấu trúc thư thân mật chuẩn."
    },
    {
      id: "writing-task2",
      category: "VSTEP Writing Task 2",
      title: "Tác động mạng xã hội",
      target: "Mục tiêu: Nghị luận xã hội 250 từ.",
      level: "B2 - C1",
      topic: "Social networking sites.",
      content: "In the modern era, social media has both advantages and disadvantages. Users should manage time wisely.",
      analysis: "👉 Phân tích: Cấu trúc 4 đoạn chặt chẽ."
    },
    {
      id: "speaking-part2",
      category: "VSTEP Speaking Part 2",
      title: "Lựa chọn món quà cho giáo viên",
      target: "Mục tiêu: Lập luận so sánh 3 phương án.",
      level: "B1 - B2",
      topic: "Choosing a gift: Flowers, Book, Souvenir.",
      content: "I would argue that a book is the best option because it is practical and meaningful.",
      analysis: "👉 Phân tích: Đưa ra lựa chọn và phản bác hợp lý."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black italic">VSTEP LEARNING HUB</h1>
          <nav className="space-x-6 font-semibold">
            <button onClick={() => setActiveTab("home")} className={activeTab === "home" ? "text-white underline" : "hover:text-blue-200"}>Trang Chủ</button>
            <button onClick={() => setActiveTab("materials")} className={activeTab === "materials" ? "text-white underline" : "hover:text-blue-200"}>Tài Liệu</button>
            <button onClick={() => setActiveTab("contact")} className={activeTab === "contact" ? "text-white underline" : "hover:text-blue-200"}>Liên Hệ</button>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl w-full mx-auto p-8">
        {activeTab === "home" && (
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-6">Chào mừng đến với VSTEP Learning Hub</h2>
            <p className="text-lg text-slate-600 mb-8">Nền tảng hỗ trợ luyện thi VSTEP cho sinh viên LHU.</p>
            <div className="bg-white p-6 rounded-xl shadow border inline-block">
              <p className="font-bold text-blue-700 text-xl">Lê Minh Khang</p>
              <p>Ngành CNTT - Đại học Lạc Hồng</p>
            </div>
          </div>
        )}

        {activeTab === "materials" && (
          <div className="grid md:grid-cols-3 gap-6">
            {materialsData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border shadow hover:shadow-lg">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <button onClick={() => setSelectedMaterial(item)} className="text-blue-600 font-bold hover:underline">Đọc bài mẫu →</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "contact" && (
          <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow border">
            <h2 className="text-2xl font-bold mb-6 text-center">Liên Hệ Tư Vấn</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Họ và tên" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Lời nhắn" className="w-full p-3 border rounded-lg h-32"></textarea>
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">Gửi yêu cầu</button>
            </form>
          </div>
        )}
      </main>

      {selectedMaterial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl max-w-lg w-full">
            <h3 className="text-xl font-bold mb-2">{selectedMaterial.title}</h3>
            <p className="mb-4 text-slate-600">{selectedMaterial.content}</p>
            <button onClick={() => setSelectedMaterial(null)} className="bg-slate-900 text-white px-6 py-2 rounded-lg">Đóng</button>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-400 p-8 text-center text-sm">
        <p className="font-bold">VSTEP LEARNING HUB © 2026 - Lê Minh Khang (LHU)</p>
      </footer>
    </div>
  );
}
