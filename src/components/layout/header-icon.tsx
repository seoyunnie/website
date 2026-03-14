import type { IconProps } from "@tabler/icons-react";
import type { ComponentType } from "react";

import { type ActionIconProps, ActionIcon, createPolymorphicComponent } from "@mantine/core";

interface HeaderIconProps extends Omit<ActionIconProps, "children" | "size" | "variant"> {
  icon: ComponentType<IconProps>;
}

const HeaderIcon = createPolymorphicComponent<"button", HeaderIconProps>(
  ({ icon: Icon, ...props }: Readonly<HeaderIconProps>) => (
    <ActionIcon {...props} size="lg" variant="default">
      <Icon stroke={1.5} />
    </ActionIcon>
  ),
);
HeaderIcon.displayName = "HeaderIcon";

export { HeaderIcon };
