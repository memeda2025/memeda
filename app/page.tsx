import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-center">
      {/* Header */}
      <div className="bg-black text-white text-sm py-1">
        欢迎光临么么哒💋| 中文订阅热线: 赶紧给个号
      </div>
      <div className="py-6">
        <div className="text-pink-500 font-bold text-3xl">么么哒💋</div>
        <div className="text-gray-500 text-sm">悉尼高端华人援交</div>
      </div>

      {/* Navigation */}
      <nav className="bg-pink-200 flex justify-center space-x-6 py-2">
        {['主页', '服务', '妹纸', '专属定制', '用户反馈', '加盟'].map((item) => (
          <a key={item} href="#" className="text-white font-semibold">
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-96">
        <Image
          src={"/a.jpg"}
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
          <div className="text-3xl font-bold mb-2">么么哒💋</div>
          <div className="mb-4">悉尼高端华人援交</div>
          <button className="bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded">
            中文订阅热线: 赶紧给个号
          </button>
        </div>
      </div>

      {/* Girl Section */}
      <div className="bg-pink-50 py-10">
        <h2 className="text-2xl text-pink-500 font-semibold mb-6">
          City♥女生
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden border rounded shadow bg-white">
              <Image
                src={"/a.jpg"}
                alt={`girl-${i}`}
                width={400}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4 text-sm text-gray-600">
                100% 精选 / 室内实拍 / 真人陪护
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Floating Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-full px-4 py-2 shadow-lg">
          咨询客服
        </button>
      </div>
    </div>
  );
}
