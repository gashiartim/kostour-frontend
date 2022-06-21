import React, { useEffect, useState } from "react";
import { IMessage } from "../../../api/Messages";
import useMessages from "../../../lib/hooks/queries/Message/useMessages";
import cs from "classnames";
import LoadingBoundary from "../../shared/LoadingBoundary/LoadingBoundary";
import Spinner from "../../shared/Spinner/Spinner";

type Props = {
  handleSelectQuestion(question: IMessage): void;
  handleBackBttn(): void;
  selectedQuestion: IMessage | null;
};

const OftenQuestions = ({
  handleSelectQuestion,
  handleBackBttn,
  selectedQuestion,
}: Props) => {
  const { data: oftenMadeQuestions, isLoading } = useMessages();
  const [selectedQuestionisLoading, setSelectedQuestionIsLoading] =
    useState(true);

  useEffect(() => {
    if (selectedQuestion?.answer) {
      setTimeout(() => {
        setSelectedQuestionIsLoading(false);
      }, 2000);
    }

    if (!selectedQuestion) {
      setSelectedQuestionIsLoading(true);
    }
  }, [selectedQuestion?.answer]);

  if (selectedQuestion)
    return (
      <div className="relative py-3 bg-white rounded-lg">
        {selectedQuestionisLoading && (
          <div className="flex items-center justify-center h-[200px]">
            <Spinner loadingText="Loading answer..." />
          </div>
        )}
        {!selectedQuestionisLoading && (
          <>
            <h3 className="flex items-center px-3 mb-2 font-medium border-b-1">
              <div className="min-w-[40px] min-h-[40px] mb-2  mr-2 bg-red-500 rounded-full text-white flex items-center text-center justify-center">
                {selectedQuestion?.question &&
                  selectedQuestion.question.charAt(0)}
              </div>
              {selectedQuestion.question || "Pyetja mungon"}?
            </h3>
            <p className="px-3 text-sm text-gray-800">
              {selectedQuestion.answer}
            </p>
          </>
        )}
      </div>
    );

  return (
    <div className="py-3 bg-white rounded-lg">
      <h3 className="px-3 mb-2 font-medium">Pyetje të shpeshta</h3>
      <hr />
      <LoadingBoundary loading={isLoading}>
        <div className="border-b-1 ">
          {oftenMadeQuestions?.map((question, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectQuestion(question)}
              className="flex items-center px-3 cursor-pointer hover:bg-gray-50 default-transition"
            >
              <div className="w-[30px] h-[30px] rounded-lg bg-red-500 mr-2"></div>
              <h4
                className={cs({
                  "w-full py-4 text-sm font-medium border-b-1 ": true,
                  "border-b-0": idx >= oftenMadeQuestions.length - 1,
                })}
              >
                {question.question || "pytja"}
              </h4>
            </div>
          ))}
        </div>
      </LoadingBoundary>
    </div>
  );
};

export default OftenQuestions;
