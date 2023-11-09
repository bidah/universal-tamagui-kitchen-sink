import { StyleSheet } from "react-native";
import { Button, H3, Separator, Stack } from "tamagui";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text } from "../../components/Themed";
import { CheckboxDemo } from "../../components/Checkbox";
import { FormsDemo } from "../../components/Form";
import { InputsDemo } from "../../components/Input";
import { LabelDemo } from "../../components/Label";
import { ProgressDemo } from "../../components/Progress";
import { ScrollView } from "tamagui";
import { SelectDemo } from "../../components/Select";
import { ToggleGroupDemo } from "../../components/ToggleGroup";
import { AlertDialogDemo } from "../../components/AlertDialog";
import { H2, View } from "tamagui";
import { SheetDemo } from "../../components/Sheet";
import { ToastDemo } from "../../components/Toasts";

const DemoCard = ({ children, name }) => {
  return (
    <View paddingVertical="$2">
      <H3>{name}</H3>
      {children}
      <Separator paddingVertical="$2" />
    </View>
  );
};

const demoComponents = [
  { name: "Toast", component: <ToastDemo /> },
  { name: "Sheet", component: <SheetDemo /> },
  { name: "Alert", component: <AlertDialogDemo /> },
  { name: "Toggle Group", component: <ToggleGroupDemo /> },
  { name: "Select", component: <SelectDemo /> },
  { name: "Checkbox", component: <CheckboxDemo /> },
  { name: "Forms", component: <FormsDemo size={"$1.5"} /> },
  { name: "Inputs", component: <InputsDemo /> },
  { name: "Label", component: <LabelDemo /> },
  { name: "Progress", component: <ProgressDemo /> },
];
export default function TabOneScreen() {
  // return (

  return (
    <ScrollView paddingHorizontal="$4" bg={"white"} flex={1}>
      {demoComponents.map((demo) => {
        return <DemoCard name={demo.name}>{demo.component}</DemoCard>;
      })}
    </ScrollView>
  );
}
