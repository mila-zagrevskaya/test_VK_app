import React from 'react';
import {
  Button,
  Div,
  FormItem,
  FormLayout,
  FormLayoutGroup,
  Group,
  Input,
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

const SignIn = ({id}) => {
  return (
      <Panel id={id}>
        <PanelHeader>Sign In</PanelHeader>
        <Group>
          <FormLayout>
            <FormLayoutGroup mode='vertical'>
              <FormItem top='Username'>
                <Input />
              </FormItem>
              <FormItem top='Password'>
                <Input />
              </FormItem>
            </FormLayoutGroup>
            <Div>
              <Button size='l' stretched>
                Sign In
              </Button>
            </Div>
          </FormLayout>
        </Group>
      </Panel>

  );
};

export { SignIn };
