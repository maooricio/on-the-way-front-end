import Image from "next/image";
import React from "react";
import otw_logo from "@/assets/images/otw_only_logo.svg";
import pen_white from "@/assets/icons/utils/pen_white.svg";

const SettingsSkeleton = () => {
  return (
    <section className="settings-suspense">
      <section className="photo-container">
        <div className="image-container">
          <Image
            src={otw_logo}
            alt="user photo"
            priority
            className="not-has-photo"
          />
        </div>

        <button type="button">
          <Image src={pen_white} alt="edit icon" />
        </button>
      </section>
    </section>
  );
};

export default SettingsSkeleton;
