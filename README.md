        import React from "react"
        import ReactDOM from "react-dom/client"

        const heading = React.createElement("h1", {}, "Hello World using React...")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)




         creating nested divs in html using react --- 3 arguments---- tagname, {id & attributes}, wt we put inside the tag(children)

        const parent = React.createElement(
                "div",
                {id: "parent"},
                React.createElement(
                        "div",
                        {id: "child"},
                        React.createElement("h1",{}, "I m a h1 tag")))
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)



        if we need to give sibilings in a div

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



        react element using core react

        const heading = React.createElement("h1", {id: "head"}, "Namaste React using core react...")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)



        react element using jsx

        const jsxHeading = <h1 className="jsxhead">Namste React using jsx</h1>


        if jsx is given in multiple lines, we must give braces..
         const jsxHeading = (
                <h1 className="head">
                    Namaste React
                 </h1>
         )

        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(jsxHeading)



        React Component -- A javascript function which returns a jsx code or react element

        const Heading = ()=> {
                 return(
                         <h1> React Component </h1>
                 )
         }

        const Heading = ()=> <h1> React Component </h1>

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


        # episode 6 ---
        fetching data from data.js
        fetching data from live api (dint work due to cors error)
        login/logout toggle functionality
        search button- filtering out restaurants on the basis of name

        # episode 7 ---
        with the help of react-router-dom created routes for home, aboutus and contactus
        createBrowserRouter, RouterProvider --- used for configuration
        Error component -- useRouterError hook
        nested routes/children routes -- used outlet component for this
        server & client side routing
        created diff pages for diff restaurants dynamically for Menu
        useParams hook to get the id from url
        edited dataList with required data (menu list)


        #episode 8---
        creating a class based component and functional component
        passing props and receiving them, destructring them
        rendering the components
        updating the state variables
        Life Cycles of class components when parent is functional component
        ----------------------------------------------- class component
        use of componentDidMount -- making api call using it
        usecase of componentWillUnmount
