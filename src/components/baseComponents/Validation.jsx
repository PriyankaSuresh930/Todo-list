import * as yup from 'yup';

const alphabetRegex = /^[A-Za-z ]*$/;

export const taskSchema = yup.object().shape({
    name: yup.string().matches(alphabetRegex, 'Name is not valid').max(20).required('Name is required.'),
    title: yup.string().matches(alphabetRegex, 'Title is not valid').max(30).required('Title is required.'),
    description: yup.string().required('Description is required.'),
    status: yup.string().required('Status is required.'),
})
