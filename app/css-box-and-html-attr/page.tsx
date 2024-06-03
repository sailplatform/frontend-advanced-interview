'use client';
import cls from './page.module.css';

export default function Page() {
  return (
    <>
      <h1>CSS Box Model and HTML Attribute in React</h1>
      <p>
        In this task, we are going to assess your familiarity with CSS box model
        and how to apply HTML attributes in React.
      </p>
      <p>
        You are required to style the button below with the class{' '}
        <code>target</code>. The button should have following styles:
      </p>
      <ol>
        <li>
          A background color of <code>lightgrey</code>.
        </li>
        <li>
          X-axis padding of <code>12px</code> and y-axis padding of{' '}
          <code>8px</code> when the screen width is more than <code>640px</code>{' '}
          and x-axis padding of <code>10px</code> and y-axis padding of{' '}
          <code>6px</code> when the screen width is less than <code>640px</code>
          .
        </li>
        <li>
          Rounded corners in all directinos with <code>8px</code> when the
          screen width is more than <code>640px</code> and <code>6px</code> when
          the screen width is less than <code>640px</code>.
        </li>
      </ol>
      <p>
        The button should also respond to click events by showing an alert with
        a random text of your choice.
      </p>
      <p>
        Although this interview question set is styled using TailwindCSS, you
        are only allowed to write plain CSS in{' '}
        <code>app/css-box-and-html-attr/page.module.css</code> and TypeScript in{' '}
        <code>app/css-box-and-html-attr/page.tsx</code>.
      </p>
      <div className={cls.region}>
        <button className={cls.target}>Style me!</button>
      </div>
    </>
  );
}
