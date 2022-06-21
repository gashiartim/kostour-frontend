import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IMessage } from "../../api/Messages";
import botIcon from "../../assets/images/bot-icon.png";
import { Icon } from "../shared/Icon/Icon";
import OftenQuestions from "./OftenQuestions/OftenQuestions";
import cs from "classnames";

type Props = {};

const Chat = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<IMessage | null>(
    null
  );

  function handleSelectQuestion(question: IMessage) {
    setSelectedQuestion(question);
  }

  function handleBackBttn() {
    setSelectedQuestion(null);
  }

  function toggleChat() {
    setOpened((old) => !old);
  }

  useEffect(() => {
    setSelectedQuestion(null);
  }, [opened]);

  if (opened)
    return (
      <div className="bg-[#ddd] w-[380px] h-[550px] rounded-lg  relative default-transition !duration-[200ms] shadow-2xl">
        <div className="w-full h-[100px] bg-blue-500 rounded-tr-md rounded-tl-md p-3 flex items-center duration-[3000ms] default-transition">
          <div
            className={cs({
              "default-transition   -top-11 hover:opacity-70 ": true,
              "px-4 py-1 mr-[30px] w-max bg-white rounded-2xl":
                selectedQuestion,
              "w-[0px] ": !selectedQuestion,
            })}
            onClick={handleBackBttn}
          >
            {"<"}
          </div>

          <div className="duration-[3000ms] default-transition ">
            <Icon icon="KOS-TOUR" className="text-black bg-blue-300" />
          </div>
        </div>

        <div
          className="absolute right-0 px-4 py-1 bg-gray-400 rounded-2xl -top-11 hover:opacity-70 default-transition"
          onClick={toggleChat}
        >
          X
        </div>
        <div className="absolute w-[360px] ml-[10px] min-h-[20%] -mt-5 content rounded-lg ">
          <OftenQuestions
            handleBackBttn={handleBackBttn}
            handleSelectQuestion={handleSelectQuestion}
            selectedQuestion={selectedQuestion}
          />
        </div>
        <p className="absolute bottom-0 flex items-center justify-center w-full mx-auto mb-2 text-xs text-gray-700">
          Powered by Kostourism
          <span className="text-sm mt-[1px]">©</span>
        </p>
      </div>
    );

  return (
    <div
      className="bg-blue-500 w-[70px] h-[70px]  flex items-center justify-center p-3 rounded-full hover:opacity-70 default-transition default-transition !duration-[500ms]"
      onClick={toggleChat}
    >
      <Image
        src={botIcon}
        objectFit="cover"
        width={50}
        height={50}
        className="mx-auto"
      />
    </div>
  );
};

export default Chat;
