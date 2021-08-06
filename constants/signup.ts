interface ISignUp{
    type: string;
    name: string;
    placeholder: string;
}

export const InputsInfo:ISignUp[] = [
    {
        type: 'text',
        name: 'FIRST NAME',
        placeholder: 'Enter Your Name'
    },
    {
        type: 'text',
        name: 'LAST NAME',
        placeholder: 'Enter Your Last Name'
    },
    {
        type: 'text',
        name: 'Email',
        placeholder: 'Enter Your Email'
    },
    {
        type: 'number',
        name: 'Phone',
        placeholder: 'Enter Your Phone'
    }
]