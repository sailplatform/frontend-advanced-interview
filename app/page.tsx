import Link from 'next/link';

const QUESTIONS = [
  { displayName: 'CSS Transition', link: '/css-transition' },
  { displayName: 'React State and Props', link: '/react-state-and-props' },
];

export default function Home() {
  return (
    <>
      <h1>Front-end Development Interview</h1>
      <p>
        Welcome to the SAIL() front-end interview! These interview questions are
        designed to assess your skills as a front-end web developer in CSS and
        React.JS written in TypeScript.
      </p>
      <p>
        For the following two questions, you may query any resources online or
        check your own notes and code. We also provided some hints that may help
        you. You may also rely on your integrated development environment (IDE)
        provided code autocomplete feature. You are NOT, however, allowed to use
        tools based on artificial intelligence (AI), like GitHub Copilot.
      </p>
      <p>
        You are also welcome to ask questions or ask for hints when you have any
        concern, and we expect you to speak out loud when you are thinking.
        Answering questions correctly might not be the most important aspect of
        this interview, as you are not actually expected to finish all the
        following questions, but research, reading, and communication skills do
        matter.
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
