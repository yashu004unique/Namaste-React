        import React from "react"
        import ReactDOM from "react-dom/client"
        // const heading = React.createElement("h1", {}, "Hello World using React...")
        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(heading)




        // creating nested divs in html using react --- 3 arguments---- tagname, {id & attributes}, wt we put inside the tag(children)

        // const parent = React.createElement(
        //         "div", 
        //         {id: "parent"}, 
        //         React.createElement(
        //                 "div",
        //                 {id: "child"}, 
        //                 React.createElement("h1",{}, "I m a h1 tag")))
        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(parent)

        

        // if we need to give sibilings in a div
        const parent = React.createElement(
                "div", 
                {id: "parent"}, 
                React.createElement(
                        "div",
                        {id: "child"}, [ 
                        React.createElement("h1",{}, "I m a h1 tag"),
                        React.createElement("h2", {}, "I m a h2 tag..")
                        ]
                )
        )
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)