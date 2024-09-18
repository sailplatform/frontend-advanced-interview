import Question from './Question.module';

export default function Page() {
  return (
    <>
      <h1>React State and Props</h1>
      <p>
        Below there are a counter and a switch button. The switch button toggles
        which counter, <code>0</code> or <code>1</code>, should be displayed. A
        counter displays the current count, the increment button, and the
        decrement button.
      </p>
      <p>
        Both counters should be independent and able to preserve its counter
        state. Only one counter should be displayed at a time.
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
        A visual demonstration of what you will implement is presented below in
        a video.
      </p>
      <video controls muted preload="auto" width={450} className="mx-auto">
        <source src="./react-state-and-props.mp4" type="video/mp4" />
      </video>
      <p>
        You should only write TypeScript code and not apply any style rules. You
        should also not install any third-party dependencies. Two files that you
        need to work with should be{' '}
        <code>app/react-state-and-props/Question.module.tsx</code> and{' '}
        <code>app/react-state-and-props/Counter.module.tsx</code>.
      </p>
      <Question />
    </>
  );
}
