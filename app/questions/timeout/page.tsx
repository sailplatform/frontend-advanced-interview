import Question from './Question.module';

export default function Page() {
  return (
    <>
      <h1>Timeout</h1>
      <p>
        Below there are a counter and a switch button. The switch button toggles
        which counter should be displayed on the page. Both counters should be
        independent and can preserve its counter state. All components are
        displayed, but certain functionalities are not implemented.
      </p>
      <p>In this task, you are required to:</p>
      <ol className="list-decimal">
        <li>Implement the switch button to switch the displaying counter.</li>
        <li>
          Implement the counter components&apos; increment and decrement
          buttons.
        </li>
      </ol>
      <p>
        You should only write JavaScript code and not write any CSS code, and
        you should not install any third-party dependencies.
      </p>
      <Question />
    </>
  );
}