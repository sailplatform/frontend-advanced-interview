import LoremIpsum from '@/component/LoremIpsum.module';
import QuestionRegion from '@/component/QuestionRegion.module';
import Link from 'next/link';
import classes from './box-model.module.css';

const THE_BOX_ID = 'the-box';

export default function Page() {
  return (
    <>
      <h1>Box Model</h1>
      <p>
        The Box Model is an essential concept in CSS. Here, we are going to
        assess your understanding on the Box Model.
      </p>
      <p>
        You are only allowed to write CSS (and if necessary, any related
        JavaScript to insert your written CSS), either by directly modifying the{' '}
        <code>/app/globals.css</code> global CSS file, writing inline styles, or
        using{' '}
        <Link
          href="https://nextjs.org/docs/app/building-your-application/styling/css-modules"
          className={classes.link}
        >
          CSS Module
        </Link>{' '}
        by modifying the{' '}
        <code>/app/questions/box-model/box-model.module.css</code> CSS module
        file. You should not rely on any CSS libraries.
      </p>
      <h2>The Box</h2>
      <p>
        Below there is a paragraph enclosed in a box that you cannot see. Please
        style the HTML element with the HTML ID{' '}
        <Link href={`#${THE_BOX_ID}`}>
          <code>{THE_BOX_ID}</code>
        </Link>{' '}
        with the following requirements:
      </p>
      <ol className={classes.listDecimal}>
        <li>
          There should be solid blue (using CSS color name{' '}
          <code>deepskyblue</code>) borders with a width of <code>4px</code>{' '}
          ONLY on the <i>top</i> and the <i>left</i>.
        </li>
        <li>
          There should be a padding in all directions with a width of{' '}
          <code>4px</code> around the text.
        </li>
        <li>
          The maximum width should be no larger than <code>576px</code>.
        </li>
      </ol>
      <QuestionRegion>
        <div id={THE_BOX_ID}>
          <LoremIpsum />
        </div>
      </QuestionRegion>

      <h2>Box Sizing</h2>
      <QuestionRegion></QuestionRegion>

      <h2>Content Arrangment</h2>
      <QuestionRegion></QuestionRegion>
    </>
  );
}
