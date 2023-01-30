import { vars } from "@seed-design/design-token";

import { styled } from "~/styles/stitches.config";
import { textStyles } from "~/styles/text";

// https://www.figma.com/file/ty7UxJ61CVPeVU2Gf1LJGQ/App-Components?node-id=77%3A54&t=eO5LCUTFdrq9yD7a-0
type BadgeSize = "large" | "medium" | "small";
type Property = "basic" | "primary" | "success" | "error";
type Variant = "normal" | "fill" | "outline";

type Props = {
  size?: BadgeSize;
  property?: Property;
  variant?: Variant;
};

const ColorSchemas = {
  basic: {
    primary: vars.$scale.color.gray700,
    onPrimary: vars.$scale.color.gray00,
    secondary: vars.$scale.color.gray100,
    onSecondary: vars.$scale.color.gray700,
    outline: vars.$scale.color.gray900,
  },
  primary: {
    primary: vars.$semantic.color.primary,
    onPrimary: vars.$semantic.color.onPrimary,
    secondary: vars.$scale.color.carrotAlpha100,
    onSecondary: vars.$semantic.color.primary,
    outline: vars.$semantic.color.primary,
  },
  success: {
    primary: vars.$semantic.color.success,
    onPrimary: vars.$static.color.staticWhite,
    secondary: vars.$semantic.color.successLow,
    onSecondary: vars.$scale.color.green700,
    outline: vars.$semantic.color.success,
  },
  error: {
    primary: vars.$semantic.color.danger,
    onPrimary: vars.$static.color.staticWhite,
    secondary: vars.$semantic.color.dangerLow,
    onSecondary: vars.$semantic.color.danger,
    outline: vars.$semantic.color.danger,
  },
};

const getCompoundVariants = () => {
  const getColorScheme = (
    property: Props["property"] = "basic",
    variant: Props["variant"] = "fill",
  ) => {
    const colors = ColorSchemas[property];

    switch (variant) {
      case "normal":
        return {
          ...textStyles.label5Regular,
          color: colors.onSecondary,
          background: colors.secondary,
        };
      case "fill":
        return {
          ...textStyles.label5Bold,
          color: colors.onPrimary,
          background: colors.primary,
        };
      case "outline":
        return {
          ...textStyles.label5Bold,
          color: colors.outline,
          border: `1px solid ${colors.outline}`,
        };
    }
  };

  const properties: Array<Props["property"]> = [
    "basic",
    "error",
    "primary",
    "success",
  ];
  const variants: Array<Props["variant"]> = ["normal", "fill", "outline"];
  const combi = [];

  for (const property of properties) {
    for (const variant of variants) {
      combi.push({
        property,
        variant,
        css: getColorScheme(property, variant),
      });
    }
  }

  return combi;
};

const BaseBadge = styled("span", {
  display: "inline-block",
  textAlign: "center",
  width: "fit-content",
  ":hover": {
    cursor: "pointer",
  },

  variants: {
    size: {
      large: {
        padding: "4px 8px",
      },
      medium: {
        padding: "2px 6px",
      },
      small: {
        padding: "2px 4px",
      },
    },
    property: {
      basic: {},
      primary: {},
      success: {},
      error: {},
    },
    variant: {
      normal: {},
      fill: {},
      outline: {},
    },
  },

  compoundVariants: getCompoundVariants(),
});

const SquareBadge = styled(BaseBadge, {
  variants: {
    size: {
      large: {
        borderRadius: "4px",
      },
      medium: {
        borderRadius: "2px",
      },
      small: {
        borderRadius: "2px",
      },
    },
  },
});

const PillBadge = styled(BaseBadge, {
  variants: {
    size: {
      large: {
        borderRadius: "12px",
      },
      medium: {
        borderRadius: "10px",
      },
      small: {
        borderRadius: "1000px",
      },
    },
  },
});

export { PillBadge, SquareBadge };
