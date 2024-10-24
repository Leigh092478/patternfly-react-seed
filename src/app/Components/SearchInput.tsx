import React from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithSubmitButton: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="container">
      <div className="col-3">
        <SearchInput
          placeholder="Find by name"
          value={value}
          onChange={(_event, value) => setValue(value)}
          onSearch={(_event, value) => setValue(value)}
          onClear={() => setValue('')}
        />
      </div>
    </div>

  );
};
