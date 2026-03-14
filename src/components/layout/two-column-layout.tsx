import type { ReactNode } from "react";

import { type GridColProps, type GridProps, type MantineBreakpoint, Grid } from "@mantine/core";

export interface TwoColumnLayoutProps extends Omit<GridProps, "columns" | "children"> {
  leftSection: ReactNode;
  rightSection: ReactNode;

  splitAt: MantineBreakpoint;
  reverseOnSplit?: boolean;
}

export function TwoColumnLayout({
  leftSection,
  reverseOnSplit = false,
  rightSection,
  splitAt,
  ...props
}: Readonly<TwoColumnLayoutProps>) {
  const colSpan = { base: 2, [splitAt]: 1 } satisfies GridColProps["span"];

  return (
    <Grid {...props} columns={2}>
      <Grid.Col order={reverseOnSplit ? { base: 2, [splitAt]: 1 } : undefined} span={colSpan}>
        {leftSection}
      </Grid.Col>

      <Grid.Col order={reverseOnSplit ? { base: 1, [splitAt]: 2 } : undefined} span={colSpan}>
        {rightSection}
      </Grid.Col>
    </Grid>
  );
}
