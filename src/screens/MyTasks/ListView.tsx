/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../components/Button";
import Spacer from "../../components/Spacer";
import { removeTask } from "../../store/actions";
import I18n from "../../i18n";
import { ListViewProps } from "../../utils/types";

const ListView = (props: ListViewProps) => {
  const { current, handleRemove } = props;
  const [showDisclaimer, setDisclaimer] = useState(-1);

  const handleDisclaimer = (index: number) => {
    setDisclaimer(index);
    const timer = setTimeout(() => {
      setDisclaimer(-1);
      clearTimeout(timer);
    }, 2000);
  };

  return (
    <View style={styles.listView}>
      <FlatList
        data={current}
        renderItem={({ item, index }) => (
          <>
            <MyButton
              title={item}
              height={50}
              bgColor={"#6454B6"}
              width={"100%"}
              onLongPress={() => handleRemove(index)}
              onPress={() => handleDisclaimer(index)}
            />
            {showDisclaimer === index && (
              <Text style={styles.disclaimer}>
                {I18n.t("deleteDiscalimer")}
              </Text>
            )}
            <Spacer />
          </>
        )}
      />
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  listView: { flex: 1 },
  disclaimer: { textAlign: "center" },
});

export default ListView;
