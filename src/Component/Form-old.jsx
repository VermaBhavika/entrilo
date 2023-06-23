import { useEffect } from "react";

export const Form_old = () =>{
    const data = [
        { type: 'email', label: 'username', value: '' },
        { type: 'password', label: 'password', value: 'password' },
        { type: 'text', label: 'sdkfjaw', value: 'password' },
        { type: 'submit', label: '', value: 'submit' },
    ];
 
    return(
        <>
            <form >
                {data.map((item) =>(
                    <>
                        <p>{item.label}</p>
                        <input type={item.type}  />
                    </>
                ))}
            </form>
        </>
    )
}