import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import "./ContactModal.css"

interface IContactModal{
    isOpenModal:boolean;
    setIsOpenModal:()=>void
}

const ContactModal = (props:IContactModal)=>{
    return(
        <Modal show={props.isOpenModal} onHide={()=>{props.setIsOpenModal()}} centered className="contact-form-modal">
            <Modal.Body className="py-5 px-3">
                <h3>CONTACT US</h3>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Name" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Company Name" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Email" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <InputGroup className="mb-5">
                    <Form.Control
                        placeholder="Phone Number" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <Button className="mt-5 submit-contact-btn">Submit</Button>
            </Modal.Body>
        </Modal>
    )
}

export default ContactModal

