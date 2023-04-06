const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");
require('dotenv').config()

inputQuestion.addEventListener("keypress", (e) => {
    if (inputQuestion.value && e.key === "Enter")
    SendQuestion();
    if (inputQuestion.value == 0)
    return false
});



function SendQuestion() {
    var sQuestion = inputQuestion.value;

    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.GPT_KEY,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: sQuestion,
            max_tokens: 2048,
            temperature: 0.5,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            if (result.value) result.value += "\n";

            if (json.error?.message) {
                result.error += `Error: ${json.error.message}`;
            } else if (json.choices?.[0].text) {
                var text = json.choices[0].text || "Sem resposta";

                result.value += "... " + text;
            }

            result.scrollTop = result.scrollHeight;
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
            inputQuestion.value = "";
            inputQuestion.disable = false;
            inputQuestion.focus();
        });

    if (result.value) result.value += "\n\n\n";

    result.value += `Eu: ${sQuestion}`;
    inputQuestion.value = "Carregando... ";
    inputQuestion.disable = true;

    result.scrollTop = result.scrollHeight; 
}
document.getElementById("input").addEventListener("change", function() {
    const fs = new FileReader();
    fs.readAsText(this.files[0]);
    fs.onloadend = function() {
        document.getElementById("output").innerText = fs.result;
    }
});