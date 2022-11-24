interface TextFieldProps {
    placeholder: string,
    label: string,
    id: string
}

const TextField = ({placeholder, label, id}: TextFieldProps) => {
    return (
        <div>
            <label 
                htmlFor={id}
                className="block mb-2 text-md text-gray-900 font-semibold"
            >
                {label}
            </label>
            <input 
                id={id}
                type="text"
                className=" text-gray-800 p-2 w-full border border-black border-solid rounded-md hover:border-gray-800 
                    focus:ring-gray-700 focus:border-gray-700"
                placeholder={placeholder}
            />
        </div>
    );
}
 
export default TextField;