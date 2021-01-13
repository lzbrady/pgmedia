import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/contact/Input';

import { colors } from 'BaseTheme';

export default function ContactForm({}) {
  return (
    <Container>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <FormContent>
          <InputGroup>
            <Input label="Name" type="text" name="name" />
          </InputGroup>

          <InputGroup>
            <Input label="Email Address" type="email" name="email" />
          </InputGroup>

          <InputGroup>
            <Input label="Message" multiline name="message" />
          </InputGroup>
        </FormContent>

        <Button dark text="Submit" containerStyle={{ margin: '40px auto 0px' }} />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-radius: 13px;
  padding: 20px;
  width: 80%;
  max-width: 820px;
  margin: auto;
  position: relative;
  z-index: 10;
`;

const Form = styled((props) => <form {...props} />)``;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
