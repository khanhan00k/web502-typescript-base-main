import { useState } from "react";

function ShowHideInfo() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <h2>Show/Hide</h2>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Ẩn thông tin" : "Hiển thị thông tin"}
      </button>
      {isShow && (
        <div>
          <p>Tên: Nguyễn Văn A</p>
          <p>Email: example@gmail.com</p>
        </div>
      )}
    </div>
  );
}

export default ShowHideInfo;
