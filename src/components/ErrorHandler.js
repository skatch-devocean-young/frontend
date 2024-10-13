import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button, StyleSheet, View } from "react-native";
import Text from "./MyText";

const myErrorHandler = (error) => {
  console.log({ error });
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          {" "}
          예상치 못한 문제가 발생하였습니다. 다시 시작해주세요: {error.message}
        </Text>
        <Button title="try Again" onPress={resetErrorBoundary} />
      </View>
    </View>
  );
};

const ErrorHandler = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      {children}
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 12,
  },
});

export default ErrorHandler;
