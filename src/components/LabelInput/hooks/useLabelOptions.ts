import { useEffect, useState } from "react";
import { getLabelsAsync } from "../../../helpers/getLabelsAsync.ts";

export function useLabelOptions (inputText: string): string[] {
    const [labelOptions, setLabelOptions] = useState<string[]>([]);

    useEffect(() => {
        if (inputText.includes('@')) {
            const searchLabelInput = inputText.split("@").pop() || '';

            getLabelsAsync(searchLabelInput).then((res) => {
                setLabelOptions(res);
            });
        }
    }, [inputText]);

    return labelOptions;
};