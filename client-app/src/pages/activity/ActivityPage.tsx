import Page from 'components/layout/Page';
import Activity from './Activity';
import { useAppDispatch } from 'core/store/store';
import { resetActivityFilter } from 'core/slice/activitySlice';
import React from 'react';

const ActivityPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(resetActivityFilter());
  }, []);

  return (
    <Page>
      <Activity />
    </Page>
  );
};

export default ActivityPage;
