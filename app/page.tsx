


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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  const materialsData: MaterialItem[] = [
    {
      id: "writing-task1",
      category: "VSTEP Writing Task 1 (Email)",
      title: "Viết thư trả lời lời mời tham dự tiệc sinh nhật bằng tiếng Anh",
      target: "Mục tiêu: Đạt form chuẩn 3 phần, sử dụng cấu trúc cảm ơn và từ chối/nhận lời lịch sự.",
      level: "Mức độ: B1 - B2",
      topic: "Đề bài: You received an email from your English friend, John, inviting you to his 21st birthday party next weekend. Write an email to reply to him.",
      content: `Dear John,
      
Thank you so much for your kind invitation to your 21st birthday party next weekend. I am absolutely thrilled to hear that you are reaching this major milestone!

I would love to come and celebrate this special day with you and our old friends. Could you please let me know the exact time and place of the party so I can arrange my schedule? Also, please let me know if there is a specific dress code or if I can bring anything along.

I am looking forward to seeing you soon and catching up.

Best wishes,

Lê Minh Khang & Huỳnh Trần Gia Huy,

Lê Minh Khang,

      analysis: "👉 Phân tích kỹ thuật: Bài viết sử dụng đúng cấu trúc thư thân mật (Informal email). Có lời cảm ơn, lời nhận lời chắc chắn, hỏi thông tin chi tiết (time, place) và kết thư đúng chuẩn."
    },
    {
      id: "writing-task2",
      category: "VSTEP Writing Task 2 (Essay)",
      title: "Nghị luận về tác động của mạng xã hội đối với thế hệ trẻ ngày nay",
      target: "Mục tiêu: Triển khai bài viết 250 từ, đầy đủ luận điểm, luận cứ chứng minh lợi ích và tác hại.",
      level: "Mức độ: B2 - C1",
      topic: "Đề bài: Social networking sites have a huge impact on the young generation. Write an essay discussing both advantages and disadvantages of this trend.",
      content: In the modern era, social networking sites like Facebook, TikTok, and Instagram have become an integral part of young people's daily lives. While these platforms offer undeniable benefits, they also bring significant drawbacks that need to be addressed.

On the one hand, social media provides youngsters with numerous advantages. First and foremost, it serves as an excellent tool for communication and learning. Students can easily connect with classmates, share study materials, and participate in online educational groups. Furthermore, social networks are a rich source of entertainment and news, keeping the youth informed about global events instantly.

On the other hand, the negative impacts of social media are deep concerns. The primary disadvantage is the risk of addiction. Many teenagers spend hours scrolling through their feeds, which leads to a sedentary lifestyle and poor academic performance. Additionally, cyberbullying and the lack of face-to-face interaction can harm their mental health, causing anxiety and depression.

In conclusion, social networking sites are a double-edged sword for the young generation. To maximize the benefits and reduce the harms, young users should learn to manage their screen time effectively and use these platforms with caution.,
      analysis: "👉 Phân tích kỹ thuật: Bài viết đạt cấu trúc 4 đoạn chuẩn Academic Essay (Mở bài - 2 Thân bài đối lập - Kết bài). Sử dụng các từ nối ghi điểm cao (In the modern era, On the one hand, Furthermore, In conclusion)."
    },
    {
      id: "speaking-part2",
      category: "VSTEP Speaking Part 2",
      title: "Thuyết trình lựa chọn giải pháp: Mua quà gì cho ngày nhà giáo Việt Nam",
      target: "Mục tiêu: So sánh giữa 3 lựa chọn (Hoa, Sách, Quà lưu niệm) và đưa ra lập luận thuyết phục.",
      level: "Mức độ: B1 - B2",
      topic: "Đề bài: Situation: You are choosing a Teacher's Day gift for your English teacher. There are three options: a bouquet of flowers, a book, and a souvenir. Which is the best choice?",

      content: [SCRIPT BÀI NÓI - KHANG & HUY]

      content: [SCRIPT BÀI NÓI - LÊ MINH KHANG]

      
Well, faced with the situation of choosing a Teacher's Day gift for my English teacher among three options: a bouquet of flowers, a book, and a souvenir, I would argue that a book is the best choice.

First of all, a book is a highly meaningful and practical gift for a teacher. It reflects the spirit of education and shows my deep respect for their profession. 

I do not choose a bouquet of flowers because flowers will fade very quickly within a few days, which is quite wasteful. I also eliminate a souvenir because it can sometimes be unpractical and just sits on the shelf gathering dust.

Therefore, considering both the spiritual value and practicality, a book stands out as the most perfect option for my teacher on this special occasion.`,
      analysis: "👉 Phân tích kỹ thuật: Bài nói tuân thủ cấu trúc độc thoại VSTEP Part 2 (Đưa ra lựa chọn -> Giải thích lý do chọn -> Phản bác 2 lý do còn lại -> Chốt luận điểm)."
    }
  ];

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
      {/* HEADER & NAVIGATION */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-blue-700 px-3 py-1.5 rounded-lg font-black text-xl tracking-wider shadow">
              VSTEP
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">LEARNING HUB</h1>
              <p className="text-xs text-blue-200">Hệ thống luyện thi chuẩn hóa</p>
            </div>
          </div>

          <nav className="flex space-x-2 bg-indigo-950/40 p-1 rounded-xl">
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

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        
        {/* TAB 1: TRANG CHỦ */}
        {activeTab === "home" && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Dự án giữa kỳ - LHU
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Chào mừng đến với VSTEP Learning Hub
                </h2>
                <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
                  Nền tảng hỗ trợ tự học, tra cứu cấu trúc đề thi và cung cấp các bài mẫu viết/nói đạt chuẩn khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 p-5 rounded-xl shadow-md border border-slate-700 w-full md:w-auto shrink-0">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Sinh viên thực hiện</p>

                <p className="text-base font-bold text-blue-400">1. Lê Minh Khang</p>
                <p className="text-base font-bold text-purple-400 mt-1">2. Huỳnh Trần Gia Huy</p>
                <p className="text-xs text-slate-300 mt-2">Ngành: Công nghệ thông tin - LHU</p>

                <p className="text-lg font-bold text-blue-400">Lê Minh Khang</p>
                <p className="text-sm text-slate-300">Ngành: Công nghệ thông tin</p>
                <p className="text-xs text-slate-400 mt-1">Trường Đại học Lạc Hồng</p>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shadow">B1</div>
                <h3 className="text-xl font-bold text-slate-900">Mục tiêu bậc 3 (B1 VSTEP)</h3>
                <p className="text-sm text-slate-600">Dành cho sinh viên đại học chuẩn đầu ra, học viên cao học. Tập trung xử lý các chủ đề quen thuộc, ngữ pháp cơ bản và giao tiếp đời sống.</p>
                <button onClick={() => setActiveTab("materials")} className="text-sm font-semibold text-blue-700 hover:underline pt-2">
                  Xem tài liệu B1 &rarr;
                </button>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 p-6 rounded-2xl shadow-sm space-y-3">
                <div className="bg-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shadow">B2</div>
                <h3 className="text-xl font-bold text-slate-900">Mục tiêu bậc 4 (B2 VSTEP)</h3>
                <p className="text-sm text-slate-600">Dành cho giáo viên tiếng Anh, nghiên cứu sinh. Yêu cầu lập luận logic, viết luận dài và xử lý các bài nghe nói có tính chuyên môn cao.</p>
                <button onClick={() => setActiveTab("materials")} className="text-sm font-semibold text-purple-700 hover:underline pt-2">
                  Xem tài liệu B2 &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TÀI LIỆU MẪU */}
        {activeTab === "materials" && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">Thư viện bài mẫu chuẩn hóa</h2>
              <p className="text-sm text-slate-500">Tổng hợp đề và đáp án gợi ý cho kỹ năng Writing & Speaking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {materialsData.map((item) => (
                <div key={item.id} className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md">
                  <div>
                    <div className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white ${
                      item.id.includes("task1") ? "bg-blue-600" : item.id.includes("task2") ? "bg-emerald-600" : "bg-amber-600"
                    }`}>
                      {item.category}
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-500">{item.target}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                      <span>{item.level}</span>
                      <button 
                        onClick={() => setSelectedMaterial(item)} 
                        className={`font-bold underline ${
                          item.id.includes("task1") ? "text-blue-600" : item.id.includes("task2") ? "text-emerald-600" : "text-amber-600"
                        }`}
                      >
                        {item.id.includes("speaking") ? "Nghe bài mẫu" : "Đọc bài mẫu"} &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LIÊN HỆ */}
        {activeTab === "contact" && (
          <div className="max-w-xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">Đăng ký nhận lộ trình ôn tập</h2>
              <p className="text-sm text-slate-500">Điền thông tin dưới đây để nhận tài liệu miễn phí.</p>
            </div>

            <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center">
                  <p className="font-bold">🎉 Đăng ký thành công!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Họ và tên</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      name="name"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Lời nhắn</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      name="message"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50"
                    />
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white py-2.5 rounded-lg text-sm font-semibold">
                    Gửi yêu cầu
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>


      {/* POPUP CHI TIẾT */}

      {/* POPUP CHI TIẾT (BẬT LÊN KHI ẤN) */}

      {selectedMaterial && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col p-6 space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {selectedMaterial.category}
                </span>
                <h4 className="text-lg font-bold text-slate-950 mt-1">{selectedMaterial.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedMaterial(null)} 
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold px-2 bg-slate-100 rounded-full"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="bg-slate-50 border-l-4 border-slate-400 p-3 rounded-r-lg">
                <p className="text-xs font-bold text-slate-700">ĐỀ BÀI CHUẨN VSTEP:</p>
                <p className="text-sm text-slate-600 italic mt-1">{selectedMaterial.topic}</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-700 uppercase">Nội dung bài làm mẫu chi tiết:</p>
                <div className="bg-blue-50 bg-opacity-40 border border-blue-100 p-4 rounded-xl text-sm font-mono text-slate-800 whitespace-pre-line leading-relaxed shadow-inner">
                  {selectedMaterial.content}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 leading-relaxed">
                {selectedMaterial.analysis}
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button 
                onClick={() => setSelectedMaterial(null)}
                className="bg-slate-900 text-white text-sm font-medium py-2 px-5 rounded-lg"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
</div>
</div>

