import Link from 'next/link';

const QUESTIONS = [
  { displayName: 'CSS Box Model', link: '/css-box' },
  { displayName: 'CSS Transition', link: '/css-transition' },
  { displayName: 'React State and Props', link: '/react-state-and-props' },
];

export default function Home() {
  return (
    <>
      <h1>Front-end Development Interview</h1>
      <p>
        Welcome to the SAIL() front-end interview! These interview questions are
        designed to assess your skills as a front-end web developer in CSS,
        TypeScript, and React.
      </p>
      <p>
        For those following questions, you may query any resources online and
        check your own notes and code. You may also rely on your IDE&apos;s auto
        completion. However, you are NOT allowed to use AI-based tools.
      </p>
      <p>
        You are also welcome to ask questions, and we expect you to speak out
        when you are thinking. Completing those following questions correctly
        might not be the most important, as we do not expect that. However, your
        research, reading, and communication skills matter more.
      </p>
      <div className="flex gap-2">
        {QUESTIONS.map(({ displayName, link }) => (
          <Link
            key={displayName}
            href={link}
            className="px-6 py-2 bg-white shadow-md rounded-full active:shadow-inner"
          >
            {displayName}
          </Link>
        ))}
      </div>
    </>
  );
}
