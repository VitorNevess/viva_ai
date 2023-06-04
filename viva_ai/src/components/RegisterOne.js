import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

function clickMe() {
    alert("You clicked me!");
}

const RegisterOne = ({startOnboarding}) => {
  return (
    <div className="container">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic2Password">
        <Form.Label>Confirme sua senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Estou de acordo com os Termos de uso" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox2">
        <Form.Check type="checkbox" label="Desejo receber comunicados do viva.ai sobre eventos, promoções e dicas de saúde." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Voltar
      </Button>
      <Button variant="primary" type="submit">
        Continuar
      </Button>
    </Form>
    </div>
  );
};

export default RegisterOne;