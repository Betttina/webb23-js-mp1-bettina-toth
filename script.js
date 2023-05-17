const firstArray = [
    {
        title: "Rad 1",
        backgroundcolor: "#B6FBB6",
        height: "10px",
        fontSize: "0.8rem",
    },
    {
        title: "Rad 2",
        backgroundcolor: "#B6FBCD",
        height: "20px",
        fontSize: "1rem",
    },
    {
        title: "Rad 3",
        backgroundcolor: "#B6FBE4",
        height: "40px",
        fontSize: "1.5rem",
    },
    {
        title: "Rad 4",
        backgroundcolor: "#B6FBFB",
        height: "80px",
        fontSize: "2rem",
    },
    {
        title: "Rad 5",
        backgroundcolor: "#B6E4FB",
        height: "160px",
        fontSize: "3rem",
    },
];


const secondArray = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1,0],
    ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio","tio"],
];


let marginBetweenElements = 10;

firstArray.forEach((x) => {
    const row = document.createElement("div");
    row.innerHTML = x.title;
    console.log(x)
    row.style.backgroundColor = x.backgroundcolor;
    row.style.height = x.height;
    row.style.fontSize = x.fontSize;
    row.style.margin = `${marginBetweenElements}px 0`;
    row.style.textAlign = "center";
    row.style.padding = "1rem";
    row.style.color = "#6E6EF7";
    row.style.fontWeight = "bold";
    document.body.appendChild(row);
    marginBetweenElements = marginBetweenElements * 1.3;

});




const containerToSecondArray = document.createElement("div");
containerToSecondArray.style.border="1px solid black";
containerToSecondArray.style.display="flex";
containerToSecondArray.style.flexWrap="wrap";
containerToSecondArray.style.flexDirection="row";
containerToSecondArray.style.gap="4rem";
containerToSecondArray.style.justifyContent="space-evenly";
containerToSecondArray.style.padding="3rem"


secondArray.forEach((x,index)=>{
    const column = document.createElement("div");
    column.style.backgroundColor="#A8A8F0"
    column.style.width="150px";
    column.style.padding="1rem";
    column.style.width="50px"
    x.forEach((y,index)=>{
        const childElement = document.createElement("div");
        childElement.innerHTML=y;
        childElement.style.backgroundColor = index % 2 == 0 ? "black":"white";
        childElement.style.color = index % 2 == 0 ? "white":"black";

        column.appendChild(childElement)
    })
    containerToSecondArray.appendChild(column);
})
const secondColumn = containerToSecondArray.children[1]; // Hämta den andra kolumnen

Array.from(secondColumn.children).forEach((child, index) => {
    const fourthBox = containerToSecondArray.children[0].children[4];
    fourthBox.style.backgroundColor = "#A8A8F0";
    const thirdBox = containerToSecondArray.children[1].children[1];
    thirdBox.style.backgroundColor = "#A8A8F0";
    const sixthBox = containerToSecondArray.children[2].children[5];
    sixthBox.style.backgroundColor = "#A8A8F0";
    child.style.backgroundColor = index % 2 === 0 ? "white" : "black";
    child.style.color = index % 2 === 0 ? "black" : "white";
});

document.body.appendChild(containerToSecondArray)
