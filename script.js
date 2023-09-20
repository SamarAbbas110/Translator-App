const fromText = document.querySelector(".from-text");
const totext = document.querySelector(".to-text");
const
    selectTags = document.querySelectorAll("select");
translateBTN = document.querySelector("button");

selectTags.forEach((selectTag, id) => {
    for (const country_code in countries) {
        let selected;
        if (id === 0 && country_code === "en-GB") {
            selected = "selected";
        } else if (id === 1 && country_code === "hi-IN") {
            selected = "selected";
        }

        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        selectTag.insertAdjacentHTML("beforeend", option);
    }
});

translateBTN.addEventListener("click", () => {
    // Retrieve the value of the input element with the id "fromtext"
    let text = fromText.value;
    translatefrom = selectTags[0].value, //getting fromselect tag value.
        translateto = selectTags[1].value;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translatefrom}|${translateto}`;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        totext.value = data.responseData.translatedText
    });
});