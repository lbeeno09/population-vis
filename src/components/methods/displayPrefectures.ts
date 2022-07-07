import type { Prefecture, PrefectureResponse } from "@/Types";
import { loadPrefectures } from "@/api/apiRequest.ts";

export const displayPrefectures = async (): Prefecture[] => {
    const result: PrefectureResponse = await loadPrefectures();

    if(result.statusCode) {
        for (let i = 0; i < result.data.length; i++) {
            const entry: HTMLDivElement = document.createElement("div");
            entry.classList.add("prefecture-list");
            entry.id = `pref-${result.data[i].prefCode}`;
            const checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = result.data[i].prefCode;
            
            const label: HTMLLabelElement = document.createElement("label");
            label.htmlFor = checkbox.id;
            label.appendChild(document.createTextNode(result.data[i].prefName));
            
            entry.appendChild(checkbox);
            entry.appendChild(label);
            
            document.getElementById("prefecture_container")?.appendChild(entry);
        }
    }
    
    return result;
};
