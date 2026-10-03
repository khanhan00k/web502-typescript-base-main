import { useState } from "react";

function ShowHideInfo() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Show/Hide</h2>
      <button
        type="button"
        onClick={() => setIsShow((currentIsShow) => !currentIsShow)}
        aria-expanded={isShow}
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        {isShow ? "Ẩn thông tin" : "Hiển thị thông tin"}
      </button>
      {isShow && (
        <div className="mt-4 space-y-1 rounded-lg bg-slate-50 p-4">
          <p>Tên: Nguyễn Văn A</p>
          <p>
            Email:{" "}
            <a
              className="text-blue-700 underline"
              href="mailto:example@gmail.com"
            >
              example@gmail.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default ShowHideInfo;
