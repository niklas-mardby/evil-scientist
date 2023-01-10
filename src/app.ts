
const buttonAddElement = document.querySelector("button") as HTMLButtonElement;
buttonAddElement.addEventListener("click", (e) => {
    e.preventDefault();

    const iElement = document.querySelector("#evilScientistName") as HTMLInputElement;
    const sElement = document.querySelector("section:last-child") as HTMLElement;
    sElement.append(iElement.value);

})