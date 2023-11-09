import { StyleSheet } from "react-native";
import { Button } from "tamagui";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { CheckboxDemo } from "../../components/Checkbox";
import { FormsDemo } from "../../components/Form";
import { InputsDemo } from "../../components/Input";
import { LabelDemo } from "../../components/Label";
import { ProgressDemo } from "../../components/Progress";
import { ScrollView } from "tamagui";
import { SelectDemo } from "../../components/Select";
import { ToggleGroupDemo } from "../../components/ToggleGroup";
import { AlertDialogDemo } from "../../components/AlertDialog";

export default function TabOneScreen() {
  return (
    <ScrollView bg={"white"}>
      <AlertDialogDemo />
      <ToggleGroupDemo />
      <SelectDemo />
      <Button>hello</Button>
      <CheckboxDemo />
      <FormsDemo size={"$1.5"} />
      <InputsDemo />
      <LabelDemo />
      <ProgressDemo />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
