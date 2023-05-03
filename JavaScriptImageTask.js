const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const colors = ["#90EE90", "#98FB98", "#B0E0E6", "#87CEFA", "#1ebbff"];
const numRader = 5;
const radHojdSteg = [10, 20, 30, 40, 50];
const mellanrumSteg = [10, 20, 30, 40, 50];

// Positionen för varje rad och dess text
let radPosY = 0;
let radTextStorlek = 10;

// Loopa genom rader och rita varje rad
for (let i = 0; i < numRader; i++) {
    context.fillStyle = colors[i];
    context.fillRect(0, radPosY, 800, radHojdSteg[i]);

    context.fillStyle = "#3d3da6";
    context.font = ` bold ${radTextStorlek}px Times New Roman`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    if (i === numRader - 1) {
        context.fillText(`Rad ${i+1}`, 400, radPosY + (radHojdSteg[i]/2));
    } else {
        context.fillText(`Rad ${i+1}`, 400, radPosY + (radHojdSteg[i]/2));
    }

    radPosY += radHojdSteg[i] + mellanrumSteg[i];
    radTextStorlek += 5;
}
// nästa projekt
const canvas2 = document.getElementById("canvas2"), context2 = canvas2.getContext("2d"), numRader2 = 10,
    numKolumner2 = 3, rutaStorlek = 15, paddingStorlek = 10, kolumnBredd = 100, mellanrum = 50, white = "#ffffff",
    blue = "#1E90FF", black = "#000000";
let rutaPosY = paddingStorlek;
let rutaPosX = paddingStorlek;

for (let i = 0; i < numRader2; i++) {
    let j;
    for (j = 0; j < numKolumner2; j++) {
        let farg;
        if (i % 2 === 0) {
            farg = j % 2 === 0 ? black : white;
        } else {
            farg = j % 2 === 0 ? white : black;
        }
        console.log(`Ruta (${i},${j}): färg = ${farg}`); // <-- här
        context2.fillStyle = farg;
        context2.fillRect(rutaPosX, rutaPosY, kolumnBredd * 0.6, rutaStorlek);
        context2.fillStyle = blue;
        context2.fillRect(rutaPosX - paddingStorlek, rutaPosY - paddingStorlek, kolumnBredd * 0.6 + (2 * paddingStorlek), rutaStorlek + (2 * paddingStorlek));
        let text;
        let textFarg;
        let textPosX;
        let textPosY = rutaPosY + (rutaStorlek / 2);
        if (j === 0) {
            text = numRader2 - i - 1;
            textFarg = i % 2 === 0 ? white : black;
            textPosX = rutaPosX + (paddingStorlek / 2);
        } else if (j === 1) {
            text = numRader2 - i - 1;
            textFarg = i === numRader2 - 1 ? white : black;
            textPosX = rutaPosX + (kolumnBredd * 0.6 / 2);
        } else {
            text = i + 1;
            textFarg = j % 2 === 0 ? black : white;
            textPosX = rutaPosX + kolumnBredd * 0.6 - (paddingStorlek / 2);
        }
        context2.fillStyle = textFarg;
        context2.font = "bold 10px Arial";
        context2.textAlign = j === 1 ? "center" : j === 0 ? "left" : "right";
        context2.textBaseline = "middle";
        context2.fillText(text, textPosX, textPosY);
        rutaPosX += kolumnBredd + mellanrum;
    }
    rutaPosX = paddingStorlek;
    rutaPosY += rutaStorlek + (paddingStorlek * 2);
}
// Rektanglar för siffror
let j;
context2.fillStyle = j % 2 === 0 ? black : white;
context2.fillRect(rutaPosX + 5, rutaPosY + rutaStorlek + 5, 30, 20);

// Rita rektanglar i varje kolumn
const rektangelStorlek = 20;
const rektangelBredd = 30;
let rektangelPosY = paddingStorlek + (rutaStorlek / 2) - (rektangelStorlek / 2);

for (let i = 0; i < numKolumner2; i++) {
    let rektangelPosX = paddingStorlek + (kolumnBredd * i) + (mellanrum * i) + ((kolumnBredd * 0.6) / 2) - (rektangelBredd / 2);
    let rektangelFarg;

    for (let j = 0; j < numRader2; j++) {
        if (j % 2 === 0) {
            rektangelFarg = i % 2 === 0 ? black : white;
        } else {
            rektangelFarg = i % 2 === 0 ? white : black;
        }

        context2.fillStyle = rektangelFarg;
        context2.fillRect(rektangelPosX, rektangelPosY, rektangelBredd, rektangelStorlek);

        rektangelPosY += rutaStorlek + (2 * paddingStorlek);
    }

    rektangelPosY = paddingStorlek + (rutaStorlek / 2) - (rektangelStorlek / 2);
}



