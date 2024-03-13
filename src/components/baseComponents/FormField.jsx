import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer } from "react-toastify";
import { convertToUpperCase } from '../baseComponents/Common';               

const FormField = ({ template, setFormData, setFormError }) => {
    const {formData , setFormData: setData} = setFormData;
    const {formError} = setFormError;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...formData, [name]: value })
    }

    const renderFields = () => {
        return (
            template && template.map((field, key) => {
                const { type, label, name, id, placeholder, variant, bgcolor, color, heading, mandatory, options, className } = field;
                switch (type) {
                    case "title":
                        return (
                            <div className='my-3' key={key}>
                                <h6 className="fs-sm fw-bold">{heading}</h6>
                            </div>
                        );
                    case 'email':
                        return (
                            <div className="mb-3" key={key}>
                                <Form.Group>
                                    <Form.Label htmlFor={id}>{label}{mandatory ?  <sup className='text-danger'>*</sup> : ''}</Form.Label>
                                    <Form.Control
                                        type={type}
                                        name={name}
                                        id={id}
                                        value={formData[name]}
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <small className='text-danger'>{formError[name]}</small>
                            </div>
                        )
                    case 'dropdown':
                        return (
                            <div className="mb-3" key={key}>
                                 <Form.Group>
                                    <Form.Label htmlFor={id}>{label}{mandatory ?  <sup className='text-danger'>*</sup> : ''}</Form.Label>
                                    <Form.Select 
                                        name={name} 
                                        id={id} 
                                        type={type} 
                                        onChange={handleChange} 
                                        value={formData[name]}
                                     >
                                        <option value="">Select {placeholder}</option>
                                        {
                                            options && options.map((option, index)=> {
                                                return(
                                                <option value={option} key={index}>
                                                    {option}
                                                </option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                                <small className='text-danger'>{formError[name]}</small>
                            </div>
                        )
                    case 'textarea':
                        return(
                            <div className="mb-3" key={key}>
                                <Form.Group>
                                    <Form.Label>{label}{mandatory ?  <sup className='text-danger'>*</sup> : ''}</Form.Label>
                                    <Form.Control as="textarea" rows={3} 
                                        name={name}
                                        id={id}
                                        value={formData[name]}
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <small className='text-danger'>{formError[name]}</small>
                            </div>
                        )
                    case 'submit':
                        return (
                            <Form.Group className="d-grid gap-2 mt-4" key={key}>
                                <Button as="input" type={type} value={convertToUpperCase(label)} variant={variant || null}  className='btn-pink' style={{ backgroundColor: bgcolor, color: color }} />
                            </Form.Group>
                        )
                   
                    default:
                        return (
                            <div className="mb-3" key={key}>
                                <Form.Group>
                                    <Form.Label htmlFor={id}>{label}{mandatory ?  <sup className='text-danger'>*</sup> : ''}</Form.Label>
                                    <Form.Control
                                        type={type}
                                        name={name}
                                        id={id}
                                        value={formData[name]}
                                        placeholder={placeholder}
                                        onChange={handleChange}
                                        className={className}
                                    />
                                </Form.Group>

                                <small className='text-danger'>{formError[name]}</small>
                            </div>
                        )
                }
            })
        )
    }
    return (
        <Fragment>
            {renderFields()}
            <ToastContainer />
        </Fragment>
    )
}

export default FormField;