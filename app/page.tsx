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
      title: "Viết thư trả lời lời mời tiệc sinh nhật",
      target: "Mục tiêu: Đạt form chuẩn 3 phần, ngữ pháp lịch sự.",
      level: "B1 - B2",
      topic: "Invite email reply.",
      content: "Dear John,\n\nThank you so much for your kind invitation to your 21st birthday party next weekend. I am thrilled to hear that you are reaching this milestone!\n\nI would love to come and celebrate. Please let me know the exact time and place.\n\nBest wishes,\nLê Minh Khang",
      analysis: "👉 Phân tích: Sử dụng từ nối tự nhiên, cấu trúc Informal email chuẩn."
    },
    {
      id: "writing-task2",
      category: "VSTEP Writing Task 2",
      title: "Tác động của mạng xã hội với giới trẻ",
      target: "Mục tiêu: Nghị luận xã hội 250 từ, lập luận sắc bén.",
      level: "B2 - C1",
      topic: "Advantages and disadvantages of social networking sites.",
      content: "In the modern era, social media has become an integral part of young people's lives. While it offers great benefits like communication and instant news, it also leads to addiction and mental health issues. Users should manage their screen time wisely.",
      analysis: "👉 Phân tích: Bài viết cấu trúc 4 đoạn chặt chẽ, luận điểm rõ ràng."
    },
    {
      id: "speaking-part2",
      category: "VSTEP Speaking Part 2",
      title: "Lựa chọn món quà cho giáo viên",
      target: "Mục tiêu: Lập luận so sánh 3 phương án và chốt lựa chọn.",
      level: "B1 - B2",
      topic: "Choosing a gift for Teacher's Day: Flowers, Book, Souvenir.",
      content: "Well, faced with the choice, I would argue that a book is the best option. It is practical and meaningful, unlike flowers which fade quickly. Thus, a book is the perfect choice for my teacher.",
      analysis: "👉 Phân tích: Đưa ra lựa chọn, giải thích lý do, phản bác lựa chọn khác."
    },
    {
      id: "writing-task3",
      category: "VSTEP Writing Task 1",
      title: "Viết thư xin nghỉ phép công tác",
      target: "Mục tiêu: Ngôn ngữ trang trọng, nêu lý do thuyết phục.",
      level: "B2",
      topic: "Requesting a leave of absence for a business trip.",
      content: "Dear Manager,\n\nI am writing to formally request a leave of absence for a business trip next week. I have ensured all my current tasks are completed before my departure.\n\nSincerely,\nLê Minh Khang",
      analysis: "👉 Phân tích: Sử dụng Formal English, câu từ ngắn gọn, chuyên nghiệp."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black italic">VSTEP LEARNING HUB</h1>
          <nav className="space-x-6 font-semibold">
            <button onClick={() => setActiveTab("home")} className="hover:text-blue-200">Trang Chủ</button>
            <button onClick={() => setActiveTab("materials")} className="hover:text-blue-200">Tài Liệu</button>
            <button onClick={() => setActiveTab("contact")} className="hover:text-blue-200">Liên Hệ</button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-8">
        {activeTab === "home" && (
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-6">Chào mừng đến với VSTEP Learning Hub</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">Hệ thống hỗ trợ tự học, cung cấp đề và đáp án gợi ý cho kỹ năng Writing & Speaking chuẩn khung năng lực 6 bậc.</p>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 inline-block">
              <p className="text-sm font-bold uppercase text-slate-400">Sinh viên thực hiện</p>
              <p className="text-2xl font-bold text-blue-700">Lê Minh Khang</p>
              <p className="text-slate-600">Ngành CNTT - Đại học Lạc Hồng</p>
            </div>
          </div>
        )}

        {activeTab === "materials" && (
          <div className="grid md:grid-cols-2 gap-6">
            {materialsData.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.target}</p>
                <button onClick={() => setSelectedMaterial(item)} className="text-blue-600 font-bold hover:underline">Đọc bài mẫu →</button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 p-8 text-center text-sm">
        <p className="font-bold mb-2">VSTEP LEARNING HUB © 2026</p>
        <p>Phát triển bởi Lê Minh Khang - Sinh viên CNTT LHU</p>
      </footer>

      {/* POPUP (Giữ logic cũ của b) */}
    </div>
  );
}
