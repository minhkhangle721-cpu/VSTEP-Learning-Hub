export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-blue-600 text-center">
        <h1 className="text-4xl font-bold text-blue-800">VSTEP LEARNING HUB</h1>
        <p className="text-gray-500 mt-2 italic">Dự án báo cáo giữa kỳ - LHU</p>
        <div className="my-6 py-4 border-y border-gray-100">
          <p className="text-lg text-gray-700">Sinh viên: <span className="font-bold text-blue-600">Lê Minh Khang</span></p>
          <p className="text-gray-600">Hệ thống ôn luyện Tiếng Anh trực tuyến</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">Bắt đầu</button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold">Tài liệu</button>
        </div>
        <p className="mt-8 text-green-600 animate-pulse">● System Running on Localhost:3000</p>
      </div>
    </main>
  );
}
