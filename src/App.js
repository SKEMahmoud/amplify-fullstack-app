import React from "react";
import "./App.css";
import logo from './assets/images/Logos/logo.png';
import "@aws-amplify/ui-react/styles.css";
import { Button, Card, Heading, Image, View, withAuthenticator, } from "@aws-amplify/ui-react";

const App = ( { signOut } ) => {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className={'App-logo'} alt={'logo'}/>
        <Heading level={1}>Now we have Auth</Heading>
      </Card>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  );
};

export default withAuthenticator( App );
