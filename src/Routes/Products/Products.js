import React from "react";
import {
  PanelHeaderBack,
  Button,
  Div,
  Group,
  Panel,
  RichCell,
  PanelHeader,
  Avatar,
  CardScroll,
  CardGrid,
  Card,
  Search,
  Link,
  Header,
} from "@vkontakte/vkui";
import { Icon16Add, Icon16Chevron } from "@vkontakte/icons";

import { productsSale, foodBlog, productCategories } from "../../constants/products";

export const Products = ({ id }) => {
  return (
    <Panel id={id} style={{ height: "100%" }}>
      <Div style={{ height: "100%" }}>
        <PanelHeader
          transparent="true"
          style={{
            padding: "10px 0",
            overflow: "hidden",
            background: "#ffffff",
            fontWeight: "400",
            textAlign: "center",
          }}
          left={<PanelHeaderBack />}
        >
          Самокат
        </PanelHeader>
        <Search placeholder="Искать в Самокате" style={{ paddingBottom: "30px" }} />

        <CardScroll size="s" style={{ paddingBottom: "30px" }}>
          {foodBlog.map((blogItem) => {
            const { title, image, id } = blogItem;
            return (
              <Card key={id}>
                <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "200px" }}>
                  <p
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      margin: "0",
                      color: "var(--button_primary_foreground)",
                    }}
                  >
                    {title}
                  </p>
                  <img
                    src={image}
                    alt="pict"
                    style={{
                      objectFit: "cover",
                      display: "flex",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </Card>
            );
          })}
        </CardScroll>

        <Group
          header={
            <Header
              aside={
                <Link>
                  Больше <Icon16Chevron />
                </Link>
              }
            >
              Скидки %
            </Header>
          }
        >
          <CardScroll size="s" style={{ paddingBottom: "30px" }}>
            {productsSale.map((productCard) => {
              const { title, volume, newPrice, sale, image, id } = productCard;
              return (
                <Card key={id} style={{ background: "none" }}>
                  <RichCell
                    disabled
                    before={
                      <Avatar
                        size={140}
                        mode="image"
                        src={image}
                        style={{ position: "relative", objectFit: "contain", padding: 0 }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "#ffffff",
                            borderRadius: "15px",
                            background: "#3b3838",
                            padding: "5px 8px",
                            fontSize: "0.7em",
                          }}
                        >
                          -{sale}%
                        </div>
                      </Avatar>
                    }
                    text={title}
                    caption={volume}
                    style={{ display: "block", overflow: "hidden", padding: 0 }}
                    actions={
                      <React.Fragment>
                        <Button mode="secondary" size="m">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              color: "#f4486f",
                            }}
                          >
                            {newPrice} <Icon16Add />
                          </div>
                        </Button>
                      </React.Fragment>
                    }
                  ></RichCell>
                </Card>
              );
            })}
          </CardScroll>
        </Group>

        <Group mode="plain" style={{ minHeight: "100%" }}>
          <CardGrid size="m">
            {productCategories.map((category) => {
              const { title, image, id } = category;
              return (
                <Card key={id} style={{ height: "140px"}}>
                <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "100%" }}>
                  <p
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      margin: "0",
                      color: "#000000",
                    }}
                  >
                    {title}
                  </p>
                  <img
                    src={image}
                    alt="pict"
                    style={{
                      objectFit: "cover",
                      display: "flex",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  </div>
                </Card>
              )
            })}
          </CardGrid>

        </Group>

        <Div>
          <Button size="l" stretched style={{ background: "#ffffff", color: "#f4486f" }}>
            Выбрать адрес доставки
          </Button>
        </Div>
      </Div>
    </Panel>
  );
};
