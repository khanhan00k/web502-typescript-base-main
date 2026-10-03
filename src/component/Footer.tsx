function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">LogoBrand</h2>
            <p className="text-sm text-gray-400">
              Cung cấp giải pháp công nghệ hiện đại và chất lượng hàng đầu cho doanh nghiệp của bạn.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sản phẩm</a></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ & Điều khoản */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 4: Đăng ký nhận tin */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nhận bản tin</h3>
            <p className="text-sm text-gray-400 mb-3">Đăng ký để nhận thông tin cập nhật mới nhất.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email của bạn..."
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Đăng ký
              </button>
            </form>
          </div>

        </div>

        {/* Đường phân cách & Phần bản quyền */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LogoBrand. Tất cả quyền được bảo lưu.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;