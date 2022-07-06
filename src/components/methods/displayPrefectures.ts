import type { Prefecture } from "@/Types";
import { loadPrefectures } from "@/api/apiRequest.ts";

export const displayPrefectures = async () => {
  const prefectures: Prefecture[] = await loadPrefectures();

  for (let i = 0; i < prefectures.length; i++) {
    const entry: HTMLDivElement = document.createElement("div");
    entry.classList.add("prefecture");
    entry.id = `pref-${prefectures[i].prefCode}`;
    const checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = prefectures[i].prefCode;

    const label: HTMLLabelElement = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(prefectures[i].prefName));

    entry.appendChild(checkbox);
    entry.appendChild(label);

    document.getElementById("prefecture_container")?.appendChild(entry);
  }

  return prefectures;
};
