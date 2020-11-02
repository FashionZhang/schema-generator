import React from 'react';
import FRWrapper from '../FRWrapper';
import SCHEMA from './GlobalSettingSchema.json';
// import { widgets } from '../widgets/antd';
import { useStore, useGlobal } from '../hooks';

export default function ItemSettings() {
  const store = useStore();
  const setGlobal = useGlobal();

  const { widgets, frProps } = store;
  // TODO: 这里还要去掉点，直接拿是不是更好

  const onDataChange = frProps => {
    setGlobal({ frProps });
  };

  return (
    <div style={{ paddingRight: 24 }}>
      <FRWrapper
        schema={SCHEMA}
        formData={frProps}
        onChange={onDataChange}
        displayType="row"
        showDescIcon
        widgets={widgets}
        preview={true}
      />
    </div>
  );
}
