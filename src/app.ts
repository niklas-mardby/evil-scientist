// const pElement: HTMLParagraphElement | null = document.querySelector("p");
// const pElement: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector("p");
const sElement = document.querySelector("section") as HTMLElement;
sElement.append("test");

const iElement = document.querySelector("#evilScientistName") as HTMLInputElement;
iElement.value = "value";
