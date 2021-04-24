import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

import Button from 'components/Button';
import Input from 'components/contact/Input';
import Text from 'components/Text';

import { colors } from 'BaseTheme';
import * as contactStyles from 'contact.module.css';

export default function ContactForm({}) {
  const [date, setDate] = useState();

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
            <Input label="Email" type="email" name="email" />
          </InputGroup>

          <InputGroup>
            <Input label="Message" multiline name="message" />
          </InputGroup>

          <DateGroup>
            <Text fontSize={18} color={colors.primaryDark}>
              Date (If Applicable)
            </Text>
            <DatePicker className={contactStyles.datePicker} onChange={setDate} value={date} />
          </DateGroup>
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

const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
