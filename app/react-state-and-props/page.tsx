import Question from './Question.module';

export default function Page() {
  return (
    <>
      <h1>React State and Props</h1>
      <p>
        Below there are a counter and a switch button. The switch button toggles
        which counter, counter <code>0</code> or <code>1</code> should be
        displayed on the page, and a counter displays the current count and two
        buttons decrease or increase the count. Both counters should be
        independent and able to preserve its counter state, and only one counter
        should be displayed at a time. Certain functionalities are not
        implemented.
      </p>
      <p>In this task, you are required to...</p>
      <ol className="list-decimal">
        <li>
          ...implement the switch button to switch the displaying counter.
        </li>
        <li>
          ...implement the counter components&apos; increment and decrement
          buttons.
        </li>
      </ol>
      <p>
        You should only write TypeScript code and not write any CSS or
        introducing inline styles and new HTML class names. You should not
        install any third-party dependencies. Two files that you need to work
        with should be{' '}
        <code>app/react-state-and-props/Question.module.tsx</code> and{' '}
        <code>app/react-state-and-props/Counter.module.tsx</code>.
      </p>
      <Question />
    </>
  );
}
