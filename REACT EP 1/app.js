// const heading = React.createElement("h1", 
//     { id : "heading"}, "Hello World from React ! Kishlaya Sinha (B.O.A) ");

//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);


//4th part of episode 1

/*
<div id="parent">
     <div id ="child">
         <h1>I am h1 tag</h1>
     </div></div>
</div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    [                    //nested baana rhe parent ke bacho ke liye
    React.createElement(
        "div",
        {id: "ram"},
        [
            React.createElement("h1" , {}, "This is h1 tag by Kishlaya Sinha B.O.A "),
            React.createElement("h2", {}, "This is h2 tag by Kishlaya Sinha B.O.A")

        ]
        
    ),    //yaha comma lagana zaruri tha

    React.createElement(
        "div",
        {id: "shyam"},
        [
            React.createElement("h1" , {}, "This is h1 tag by Kishlaya Sinha B.O.A "),
            React.createElement("h2", {}, "This is h2 tag by Kishlaya Sinha B.O.A")

        ]
        
    )
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);