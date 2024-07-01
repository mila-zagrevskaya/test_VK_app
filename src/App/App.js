import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider, View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { SignIn } from "../Routes/SignIn/SignIn";
import { Home } from "../Routes/Home/Home";
import { Products } from "../Routes/Products/Products";


export const App = () => (
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <View id='view' activePanel="products">
          <SignIn id='signin'/>
          <Home id="home"/>
          <Products id="products"/>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);
