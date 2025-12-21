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

        // const parent = React.createElement(
        //         "div", 
        //         {id: "parent"}, 
        //         React.createElement(
        //                 "div",
        //                 {id: "child"}, [ 
        //                 React.createElement("h1",{}, "I m a h1 tag"),
        //                 React.createElement("h2", {}, "I m a h2 tag..")
        //                 ]
        //         )
        // )
        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(parent)



        // react element using core react

        // const heading = React.createElement("h1", {id: "head"}, "Namaste React using core react...")
        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(heading)



        //react element using jsx

        // const jsxHeading = <h1 className="jsxhead">Namste React using jsx</h1>


        //if jsx is given in multiple lines, we must give braces..
        // const jsxHeading = (
        //         <h1 className="head">
        //            Namaste React
        //         </h1>
        // )

        // const root = ReactDOM.createRoot(document.getElementById("root"))
        // root.render(jsxHeading)



        // React Component -- A javascript function which returns a jsx code or react element

        // const Heading = ()=> {
        //         return(
        //                 <h1> React Component </h1>
        //         )
        // }

        // const Heading = ()=> <h1> React Component </h1>

        const Heading = ()=> (
                <div>
                        <h1>React Component</h1>
                        <Heading2/>
                        {title}
                </div>
        )

        const title = (
        <div>
                 <h1>React Element</h1>
        </div>
        )

        const Heading2 = ()=> (
                <h1>React Compoent2</h1>
        )

        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(<Heading/>)