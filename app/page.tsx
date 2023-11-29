import LinkBox from './LinkBox.module';

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Welcome to the SAIL() front-end interview! These interview questions are
        designed to assess your skills as a developer in CSS,
        JavaScript/TypeScript, Web API, and React.JS.
      </p>
      <h2>CSS Questions</h2>
      <div className="flex gap-2">
        <LinkBox href="/">CSS Box Model</LinkBox>
        <LinkBox href="/">Element Arrangement</LinkBox>
      </div>
      <h2>React.JS Questions</h2>
      <div className="flex gap-2">
        <LinkBox href="/questions/general-hook">General Hooks</LinkBox>
        <LinkBox href="/">Timeout</LinkBox>
      </div>
    </>
  );
}
