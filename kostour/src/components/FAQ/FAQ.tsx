import Questions from "../Questions/Questions";

const dummyQuestions = [
  {
    id: "01",
    title: "WHAT DOCUMENTS DO I NEED TO ENTER REPUBLIC OF KOSOVA?",
    answer: "You need a valid national passport.",
  },
  {
    id: "02",
    title: "WHERE CAN I CHANGE CURRENCY?",
    answer:
      "Foreign currency can easily be exchanged at banks and Bureau de Change kiosks, which are found at most city centres.",
  },
  {
    id: "03",
    title: "WHERE CAN I USE MY CREDIT/DEBIT CARD IN REPUBLIC OF KOSOVA?",
    answer:
      "All credit cards that bear the Visa, MasterCard logo are widely accepted in Kosova. If your card does not bear one of these logos, you should ask the retailer in advance if you can use it.",
  },
  {
    id: "04",
    title: "HOW MUCH DO DAILY ITEMS COST?",
    answer: `Here’s the approximate cost of a few daily items:
    A hotel breakfast – €3-€10,
    Dinner (3-course, no wine) – €20-€50,
    Lunch snack/sandwich – €1-€3,
    Postcard stamp to anywhere abroad – 20cent,
    Cola can – 35cent-50cent,
    Pint of beer in pub – €1.5-€2  `,
  },
];

const FAQ = () => {
  return (
    <div className="w-full lg:mx-auto  xl:mb-[254px] lg:mb-20">
      <h2 className="lg:md:text-3xl text-xl font-bold  text-center mb-[41px] text-white">
        Ferquently Asked Questions
      </h2>
      <div>
        {dummyQuestions.map((questions: any) => (
          <Questions
            key={questions.id}
            id={questions.id}
            title={questions.title}
            answer={questions.answer}
          />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
