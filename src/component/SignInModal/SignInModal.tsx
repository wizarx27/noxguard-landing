import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import "./SignInModal.css"
import { useState } from "react";

interface ISigninModal{
    isOpenModal:boolean;
    setIsOpenModal:()=>void
}

const SigninModal = (props:ISigninModal)=>{
    const [emailSignIn,setEmailSignIn] = useState<string>("")
    const [passwordSignIn,setPasswordSignIn] = useState<string>("")
    // console.log(d)
    return(
        <Modal show={props.isOpenModal} onHide={()=>{props.setIsOpenModal()}} centered className="contact-form-modal">
            <Modal.Body className="py-5 px-3">
                <h3 className="text-align-center">SIGN IN</h3>
                <Form.Label className="input-form-label">Email</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Email" 
                        className="input-form-contact"
                        value={emailSignIn}
                        onChange={(e)=>{setEmailSignIn(e.target.value)}}
                    />
                </InputGroup>
                
                <Form.Label className="input-form-label">PASSWORD</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Password" 
                        className="input-form-contact"
                        type="password"
                        value={passwordSignIn}
                        onChange={(e)=>{setPasswordSignIn(e.target.value)}}
                    />
                </InputGroup>
                
                <Button className="mt-5 submit-contact-btn">SIGN IN</Button>
            </Modal.Body>
        </Modal>
    )
}

export default SigninModal

