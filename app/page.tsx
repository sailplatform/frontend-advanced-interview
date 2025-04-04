import LinkButton from './LinkButton.module';

const QUESTIONS = [
  { displayName: 'CSS Transition', link: '/css-transition' },
  { displayName: 'React State and Props', link: '/react-state-and-props' },
];

export default function Home() {
  return (
    <>
      <h1>Web Front-end Developer Interview</h1>
      <p>
        Welcome to the SAIL() front-end interview! These interview questions are
        designed to assess your skills as a front-end web developer in CSS,
        TypeScript, and React.
      </p>
      <p>
        You may query resources online or check your previous code. You may also
        rely on your IDE&apos;s auto completion. However, you are NOT allowed to
        use AI-based tools, such as Google search with Gemini, ChatGPT, and
        GitHub Copilot.
      </p>
      <p>
        You are also welcome to ask questions, and we expect you to speak out
        when you think. We do not expect you to finish all questions. Your
        research, reading, and communication skills are more valued.
      </p>
      <h2>CSS</h2>
      <div className="flex gap-2">
        <LinkButton link="/css-box-and-html-attr">CSS Box Model</LinkButton>
        <LinkButton link="/css-transition">CSS Transition</LinkButton>
      </div>
      <h2>React and HTML5</h2>
      <div className="flex gap-2">
        <LinkButton link="/react-state-and-props">
          React State and Props (TBD)
        </LinkButton>
        <LinkButton link="/react-state-and-props-2">
          React State and Props 2
        </LinkButton>
      </div>
      <h2>Advanced Topics</h2>
      <div className="flex gap-2">
        <LinkButton link="/react-state-and-props">
          React State and Props (TBD)
        </LinkButton>
        <LinkButton link="/react-state-and-props-2">
          React State and Props 2 (TBD)
        </LinkButton>
      </div>
    </>
  );
}
