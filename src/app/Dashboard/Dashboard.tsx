import * as React from 'react';
import { PageSection, Title,
  Grid, GridItem} from '@patternfly/react-core';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Grid hasGutter>
      <GridItem span={3}>span = 2</GridItem>
      <GridItem span={3}>span = 2</GridItem>
      <GridItem span={3}>span = 2</GridItem>
      <GridItem span={3}>span = 2</GridItem>
      <GridItem span={10}>span = 8</GridItem>

    </Grid>
  </PageSection>
)

export { Dashboard };
