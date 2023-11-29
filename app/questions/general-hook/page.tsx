import Question from "./Question.module";

export default function Page() {
  return (
    <>
      <h1>General Hooks</h1>
      <p>
        Below there are a counter and a switch button. The switch button toggles
        which counter is being displayed on the page. All components are
        displayed, but certain functionalities are not implemented.
      </p>
      <p>In this task, you are required to:</p>
      <ol className="list-decimal">
        <li>Implement the switch button to switch the displaying counter.</li>
        <li>
          Implement the counter components&apos; increment and decrement buttons
        </li>
      </ol>
      <Question />
    </>
  );
}
