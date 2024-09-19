import Link from 'next/link';

const QUESTIONS = [
  {
    displayName: 'CSS Box Model and HTML Attributes in React',
    link: '/css-box-and-html-attr',
  },
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
      <div className="flex gap-2">
        {QUESTIONS.map(({ displayName, link }) => (
          <Link href={link} key={displayName}>
            <button className="rounded-full bg-white px-4 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {displayName}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
