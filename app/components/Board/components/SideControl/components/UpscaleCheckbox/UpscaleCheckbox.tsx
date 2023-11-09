import React from "react";

const UpscaleCheckbox = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="inline-flex items-center ml-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.40306 2.53748H4.78643C3.5714 2.53748 2.58643 3.52245 2.58643 4.73747V7.37614"
            stroke="#888CA0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="2.58643"
            y="10.5479"
            width="6.83989"
            height="6.83989"
            rx="2.2"
            stroke="#888CA0"
            strokeWidth="2"
          />
          <path
            d="M17.3624 11.5681V15.1876C17.3624 16.4027 16.3774 17.3876 15.1624 17.3876H12.5613"
            stroke="#888CA0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.534 2.5375L17.3625 2.5375L17.3625 5.36593"
            stroke="#888CA0"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4103 8.41845L17.0671 2.7616"
            stroke="#888CA0"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-gray-600 ml-1">Upscale</span>
        <svg
          className="ml-2"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8133 5.9766C11.8133 9.17403 9.22127 11.7661 6.02384 11.7661C2.82641 11.7661 0.234375 9.17403 0.234375 5.9766C0.234375 2.77916 2.82641 0.187134 6.02384 0.187134C9.22127 0.187134 11.8133 2.77916 11.8133 5.9766Z"
            fill="#FFEEA8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.02384 10.8606C8.72122 10.8606 10.9079 8.67398 10.9079 5.9766C10.9079 3.27921 8.72122 1.09255 6.02384 1.09255C3.32646 1.09255 1.13979 3.27921 1.13979 5.9766C1.13979 8.67398 3.32646 10.8606 6.02384 10.8606ZM6.02384 11.7661C9.22127 11.7661 11.8133 9.17403 11.8133 5.9766C11.8133 2.77916 9.22127 0.187134 6.02384 0.187134C2.82641 0.187134 0.234375 2.77916 0.234375 5.9766C0.234375 9.17403 2.82641 11.7661 6.02384 11.7661Z"
            fill="#FFA451"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.59519 9.39532C6.64979 9.3885 6.71927 9.36771 6.77953 9.31219C6.85893 9.23903 6.90095 9.13813 6.89189 9.02743C6.88439 8.93581 6.84334 8.85851 6.80942 8.80499C6.74441 8.70243 6.63489 8.58247 6.52198 8.4588L6.50781 8.44328C6.43578 8.36435 6.35656 8.27753 6.27146 8.17954C6.06683 7.94391 5.94264 7.77473 5.8697 7.62387C5.83075 7.54331 5.82664 7.42575 5.82599 7.24781C5.82503 6.98472 5.95836 6.75091 6.17858 6.51713C6.31845 6.39152 6.50055 6.26108 6.66923 6.14551L6.88127 6.01002C7.08835 5.87758 7.30305 5.74028 7.42612 5.66404C7.9306 5.35152 8.31152 5.02552 8.34997 4.53432C8.37608 4.20075 8.16449 3.92769 7.97049 3.74443C7.76686 3.55206 7.52044 3.40003 7.35577 3.30665C7.09877 3.16091 6.69713 2.95222 6.2652 2.7443C6.03924 2.63553 5.83886 2.56631 5.67432 2.54148C5.59248 2.52912 5.50696 2.52576 5.42638 2.54211C5.34552 2.5585 5.2479 2.59997 5.18191 2.69489L5.17826 2.70014L5.17645 2.70305C5.13204 2.77035 5.09889 2.86674 5.12558 2.98487C5.14875 3.08745 5.21156 3.17894 5.28865 3.26312C5.33926 3.31837 5.39514 3.37693 5.45182 3.43632L5.4529 3.43745C5.61369 3.60593 5.78591 3.78683 5.93009 3.98044C6.07304 4.17239 6.17455 4.35907 6.21215 4.53647C6.22014 4.59893 6.22423 4.66123 6.22446 4.72336C6.2245 4.73581 6.22425 4.74813 6.22371 4.76033C6.1877 5.06807 5.93438 5.34175 5.56788 5.6256C5.44856 5.71528 5.19901 5.87915 4.95678 6.03805L4.95312 6.04045C4.79145 6.14651 4.63447 6.24948 4.53605 6.31818C4.28982 6.49005 4.07739 6.65042 3.92589 6.81599C3.77001 6.98633 3.66081 7.18155 3.65664 7.42001C3.65137 7.72151 3.7903 7.96002 3.95754 8.13741C4.12237 8.31225 4.32809 8.4427 4.49381 8.53652C4.77877 8.69784 5.20409 8.91834 5.62365 9.1189C5.80505 9.20562 5.98664 9.28121 6.14616 9.33198C6.22584 9.35734 6.30427 9.37788 6.37708 9.38993C6.44295 9.40082 6.52015 9.40758 6.59519 9.39532Z"
            fill="#FFA451"
          />
        </svg>
      </div>
      <div className="mr-7">
        <label className="relative inline-flex justify-between items-center cursor-pointer">
          <div>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="h-7 w-14 bg-gray-200 rounded-md peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-md after:h-6 after:w-6 after:transition-all peer-checked:bg-rose-500"></div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default UpscaleCheckbox;