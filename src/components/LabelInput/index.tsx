import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";
import { useLabelOptions } from "./hooks/useLabelOptions";

export function LabelInput() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [inputText, setInputText] = useState('')
    const labelOptions = useLabelOptions(inputText);

    const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputText(event.target.value)
    }

    const onClick: MouseEventHandler<HTMLOptionElement> = (event) => {
        setInputText((prevInput) => {
            const currentValue = prevInput.split('@');
            currentValue.pop();

            return currentValue.join() + '@' + event.target.value as string + ' ';
        });
        inputRef.current?.focus();
    }

    return (
        <>
            <input ref={inputRef} onChange={onChange} value={inputText} />
            {labelOptions.length > 0 && labelOptions.map((label) => {
                return (
                    <option key={label} id={label} value={label} onClick={onClick}>{label}</option>
                )
            })}
        </>
    )
}