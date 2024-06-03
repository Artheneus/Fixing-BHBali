import React from "react";

const ImgModal = ({ visible, onClose, img }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex justify-center items-center">
      <div>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-base text-white">
            Close
          </button>
        </div>

        <div className="p-2 rounded bg-white">
          {/* Mobile */}
          <div className="block md:hidden">
            <img className="w-[300px]" src={img} alt="" />
          </div>

          {/* PC */}
          <div className="hidden md:block">
            <img className="w-[700px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
