import React from "react";
import { Button, Div, Group, Panel, PanelHeader, Title } from "@vkontakte/vkui";

const logo = "https://i.otzovik.com/objects/b/1540000/1533311.png";
const samokat = "https://thebell.io/wp-content/uploads/2020/02/samokat.jpg";

export const Home = ({id}) => {
  return (
    <Panel id={id} style={{ background: "#f4486f",  height: "100%", color: "#ffffff" }}>
      <Div style={{ background: "#f4486f", height: "100%", color: "#ffffff" }}>
        <PanelHeader
          transparent="false"
          style={{ padding: "15px 0", overflow: "hidden" }}
          left={<img src={logo} alt="logo" style={{ objectFit: "contain", maxHeight: "200px", paddingTop: "15px", display: "block" }} />}
        />
        <Group  mode="plain" style={{ background: "#f4486f", minHeight: "100%" }}>
          <Title level="1" weight="semibold" style={{ color: "#ffffff" }}>
            Доставка продуктов и товаров для дома за 15 минут
          </Title>
          <Div style={{ background: "#f4486f", height: '55vh' }}>
            <img src={samokat} alt="pict" style={{ objectFit: "contain", display: 'flex', margin: '0 auto', maxWidth: '100%' }} />
          </Div>
          <Div>
            <Button size="l" stretched style={{ background: "#ffffff", color: "#f4486f" }}>
              Выбрать адрес доставки
            </Button>
          </Div>
          <Div>
            <Button mode="tertiary" size="l" stretched style={{ color: "#ffffff", justifyContent: "center" }}>
              Войти
            </Button>
          </Div>
        </Group>
      </Div>
    </Panel>
  );
};
