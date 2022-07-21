import { Center, Spinner } from "native-base";
import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <Center flex={1} bg="gray.700">
        <Spinner color="secondary.700" />
      </Center>
    );
  }
}
