function Header() {
  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <a href="#" className="text-xl font-bold">
          WEB502 - Bài tập React
        </a>
        <nav aria-label="Điều hướng bài tập" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href="#counter" className="hover:text-blue-200">Counter</a>
          <a href="#show-hide" className="hover:text-blue-200">Show/Hide</a>
          <a href="#todo" className="hover:text-blue-200">Todo</a>
          <a href="#products" className="hover:text-blue-200">Sản phẩm</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;