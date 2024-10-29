import { RvRevealView } from '@revealbi/ui-react';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import styles from './reveal-dashboard.module.css';
import createClassTransformer from '../style-utils';

export default function RevealDashboard() {
  const classes = createClassTransformer(styles);
  RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';

  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <>
      <div className={classes("row-layout reveal-dashboard-container")}>
        <div className={classes("group")}>
          <RvRevealView dashboard="Sales" options={dashboardOptions}></RvRevealView>
        </div>
      </div>
    </>
  );
}
