import { vars } from "@seed-design/design-token";

const typographies = vars.$semantic.typography;

const textStyles = Object.entries(typographies).reduce(
  (acc, [key, objectStyle]) => {
    return {
      ...acc,
      [key]: {
        ...objectStyle,
      },
    };
  },
  {} as Record<keyof typeof typographies, Record<string, unknown>>,
);

export { textStyles };
