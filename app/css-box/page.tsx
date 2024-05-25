export default function Page() {
  return (
    <>
      <h1>CSS Box Model</h1>
      <p>In this task, you are going to be testified with CSS box model.</p>
      <p>
        The button below should change its size when it is being hovered by a
        pointer and being focused by the user agent. Specifically, the button
        should...
      </p>
      <ol className="question-requirements">
        <li>
          ...
          <strong>
            <code>scale</code>
          </strong>{' '}
          up to <strong>1.1</strong> of its original size when a pointer{' '}
          <strong>hovers</strong> on top of it or being <strong>focused</strong>{' '}
          by keyboard interactions in{' '}
          <strong>
            <code>150 milliseconds</code>
          </strong>{' '}
          smoothly by gradually{' '}
          <strong>
            <code>easing in and out</code>
          </strong>
          .
        </li>
        <li>
          ...
          <strong>
            <code>scale</code>
          </strong>{' '}
          down to <strong>0.9</strong> of its original size when it is{' '}
          <strong>activated</strong> by either pointer and keyboard interaction
          in{' '}
          <strong>
            <code>150 milliseconds</code>
          </strong>{' '}
          smoothly by gradually{' '}
          <strong>
            <code>easing in and out</code>
          </strong>
          .
        </li>
      </ol>
      <p>
        A visual demonstraction of what you will implement is presented below in
        a video.
      </p>
      <video
        controls
        muted
        preload="auto"
        width={546}
        className="question-demonstration"
      >
        <source src="/css-transition.mp4" type="video/mp4" />
      </video>
      <p>
        Although this interview question set is styled using TailwindCSS, you
        are only allowed to write plain CSS code in{' '}
        <code>app/css-transition/page.css</code> imported to{' '}
        <code>app/css-transition/page.tsx</code>. For the sake of fairness, new
        styles added to the page is also written in plain CSS.
      </p>
      <p>You may ...</p>
      <ol className="question-requirements">
        <li>... find CSS transition attributes helpful.</li>
        <li>... need to apply certain pseudo-classes and write nested-CSS.</li>
      </ol>
      <div className="question-region">
        <button className="question-target">Button</button>
      </div>
    </>
  );
}
