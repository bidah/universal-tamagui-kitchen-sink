import { Check as CheckIcon } from "@tamagui/lucide-icons";
import {
  Checkbox,
  CheckboxProps,
  Label,
  SizeTokens,
  XStack,
  YStack,
} from "tamagui";

export function CheckboxDemo() {
  return (
    <YStack width={300} alignItems="center" space="$2">
      <CheckboxWithLabel size="$3" />
      <CheckboxWithLabel size="$4" defaultChecked />
      <CheckboxWithLabel size="$5" disabled label="Accept terms (disabled)" />
    </YStack>
  );
}

export function CheckboxWithLabel({
  size,
  label = "Accept terms and conditions",
  ...checkboxProps
}: CheckboxProps & { size: SizeTokens; label?: string }) {
  const id = `checkbox-${size.toString().slice(1)}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
