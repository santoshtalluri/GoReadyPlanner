import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './GoReadyPlannerHtml.module.css';
import { Image1 } from './Image1/Image1';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const GoReadyPlannerHtml: FC<Props> = memo(function GoReadyPlannerHtml(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.div}>
        <div className={classes.beachJpg}></div>
        <div className={classes.getReadyToJetASmarterTravelExp}>
          <div className={classes.textBlock}>Get Ready to Jet </div>
          <div className={classes.textBlock2}>A Smarter Travel Experience is Loading...</div>
        </div>
        <div className={classes.yourSmarterTravelCompanionIsIn}>
          Your Smarter Travel Companion is in the Works: Stay patient as we develop the ultimate tool for a seamless and
          enjoyable travel planning experience.
        </div>
        <div className={classes.a}>
          <div className={classes.canTWaitSendUsAMessageForSneak}>Can’t wait - Send us a message for sneakpeak</div>
        </div>
      </div>
      <Image1 />
    </div>
  );
});
