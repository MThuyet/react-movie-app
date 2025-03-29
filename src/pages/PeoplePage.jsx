import ImageBlur from "@components/ImageBlur";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import React from "react";

const PeoplePage = () => {
  return (
    <div className="container lg:w-11/12">
      <div className="flex gap-6">
        <div className="flex-1">
          <ImageBlur
            src={""}
            width={900}
            height={600}
            alt=""
            className="mb-6"
          />
          <div>
            <p className="mb-6 text-lg font-bold">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Known for</p>
                <p>Acting</p>
              </div>

              <div>
                <p className="font-semibold">Gender</p>
                <p>Male</p>
              </div>

              <div>
                <p className="font-semibold">Place of birth</p>
                <p>Northampton, Northamptonshire, England, UK</p>
              </div>

              <div>
                <p className="font-semibold">Birthday</p>
                <p>1982-10-28</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <p className="mb-6 text-2xl font-bold">Matt Smith</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biography</p>
            <p>
              Matt Smith sinh ngày 28 tháng 10 năm 1982 tại Northampton, Anh.
              Anh là một diễn viên nổi tiếng với vai Doctor thứ mười một trong
              Doctor Who (2010 - 2013), trở thành người trẻ nhất đảm nhận vai
              diễn này khi chỉ mới 26 tuổi. Sau Doctor Who, anh tiếp tục gây ấn
              tượng với vai Hoàng tử Philip trong hai mùa đầu của The Crown
              (2016 - 2017), nhận được nhiều lời khen về diễn xuất. Năm 2022,
              anh vào vai Daemon Targaryen trong House of the Dragon, loạt phim
              tiền truyện của Game of Thrones. Trước khi theo đuổi diễn xuất,
              Matt Smith từng có ước mơ trở thành cầu thủ bóng đá nhưng phải từ
              bỏ do chấn thương. Anh cũng tham gia nhiều dự án điện ảnh như Last
              Night in Soho (2021) và Morbius (2022). Với phong cách diễn xuất
              giàu cảm xúc, anh được đánh giá là một trong những diễn viên tài
              năng của nước Anh.
            </p>
          </div>
          <RelatedMediaList title="Known for" dataRelated={[]} />
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
