import styles from "./Footer.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Footer = () => { 
    return (
        <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-3 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Viva.ai</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Navegação</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Pricing">Planos</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Inscreva-se em nossa Newsletter</h5>
                    <ul className="list-unstyled">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>
                        </Form>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Conheça nosso serviço</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/Onboarding"> 
                                <Button variant="secondary">Começar</Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2023 Copyright: 
            <a href="https://viva-ai.com.br/">viva-ai.com.br</a>
        </div>

        </footer>
    );
};

export default Footer;