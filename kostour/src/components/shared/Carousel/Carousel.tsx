import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/dist/client/image";
import placeholder from "../../../assets/images/Hiking.png";

import styles from "./Carousel.module.css";
import { Icon } from "../Icon/Icon";
import cs from "classnames";
export interface ISliderRef {
  current:
    | {
        slickNext: () => any | undefined;
        slickPrev: () => any | undefined;
      }
    | any;
}

interface Props extends Settings {
  data?: Array<{ img: string; id: string }>;
  showArrows?: boolean;
  banner?: boolean;
  className?: string;
}

export const Carousel = (props: Props) => {
  const { showArrows = false, className, banner = false, ...rest } = props;
  let sliderRef: null | undefined | any = useRef();
  console.log("props", props);

  const settings = {
    // centerMode: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: false,
    variableWidth: true,
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
    ...rest,
  };

  return (
    <div
      className={cs({
        ["absolute inset-0 w-full mt-0 lg:-mt-32 xl:-mt-36 bg-black mb-52"]:
          true,
      })}
    >
      <Slider
        className={cs(styles.BigCarousel, className)}
        lazyLoad="progressive"
        ref={(c: any) => (sliderRef.current = c)}
        {...settings}
      >
        {props.data?.map((image: any, idx: number) => {
          return (
            <div key={idx} className="w-screen h-[290px] md:h-[805px]">
              <Image
                className="h-[290px] md:h-[805px] w-[100%]"
                objectFit="cover"
                layout="fill"
                src={process.env.PHOTO_API_URL + "" + image}
                alt="Carousel"
                loading="lazy"
                placeholder="blur"
                blurDataURL={process.env.PHOTO_API_URL + "" + image}
              />
            </div>
          );
        })}

        {(!props.data || props.data.length === 0) && (
          <div className="w-screen h-[290px] md:h-[805px]">
            <Image
              className="h-[290px] md:h-[805px] w-[100%]"
              // height={600}
              // width={1300}
              objectFit="cover"
              layout="fill"
              src={placeholder}
              alt=" Carousel"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        )}
      </Slider>

      <div className="absolute top-0 flex justify-between w-full h-full sm:hidden">
        <div className="w-4 h-full bg-white"></div>
        <div className="w-4 h-full bg-white"></div>
      </div>
    </div>
  );
};
