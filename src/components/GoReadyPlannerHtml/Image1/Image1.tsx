import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Image1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:18 */
export const Image1: FC<Props> = memo(function Image1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image1}></div>
    </div>
  );
});
