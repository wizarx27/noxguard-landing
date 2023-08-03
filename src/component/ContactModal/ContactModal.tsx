import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import "./ContactModal.css"
import { ICountryList, countryList } from "./CountryConst";
import { useState } from "react";

interface IContactModal{
    isOpenModal:boolean;
    setIsOpenModal:()=>void
}

const ContactModal = (props:IContactModal)=>{
    const [selectedCountry,setSelectedCountry] = useState<ICountryList>()
    const [selectedService,setSelectedService] = useState<string>("")
    // console.log(d)
    return(
        <Modal show={props.isOpenModal} onHide={()=>{props.setIsOpenModal()}} centered className="contact-form-modal">
            <Modal.Body className="py-5 px-3">
                <h3 className="text-align-center">INITIALIZATION</h3>
                <Form.Label className="input-form-label">Company Names</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Name" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <Form.Label className="input-form-label">Company Origin</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Select placeholder="Search Country" className="input-form-contact"
                        value={selectedCountry?.code}
                        onChange={(e) => {
                                console.log(e.target.value);
                                setSelectedCountry({code:e.target.value,name:e.target.selectedOptions[0].innerText})
                            }
                        }
                    >
                        <option>Search Country</option>
                        {
                            countryList.map((c)=>{
                                return <option key={c.code} value={c.code}>{c.name}</option>
                            })
                        }
                    </Form.Select>
                </InputGroup>
                <Form.Label className="input-form-label">Company Email</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Company Email" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <Form.Label className="input-form-label">Requester Name</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Username" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <Form.Label className="input-form-label">Phone <span className="phone-diff">(We will contact this number)</span></Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Phone Number" 
                        className="input-form-contact"
                    />
                </InputGroup>
                <Form.Label className="input-form-label">Service</Form.Label>
                <InputGroup className="mb-4">
                    <Form.Select placeholder="Service" className="input-form-contact"
                        value={selectedService}
                        onChange={(e)=>{setSelectedService(e.target.value)}}
                    >
                        <option>Service</option>
                        <option>Academy</option>
                        <option>Penetration Testing</option>
                    </Form.Select>
                </InputGroup>
                <Button className="mt-5 submit-contact-btn">SUBMIT</Button>
            </Modal.Body>
        </Modal>
    )
}

export default ContactModal

