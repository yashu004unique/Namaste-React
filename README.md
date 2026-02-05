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


        # episode 8 ---
        creating a class based component and functional component
        passing props and receiving them, destructring them
        rendering the components
        updating the state variables
        Life Cycles of class components when parent is functional component
        ----------------------------------------------- class component
        use of componentDidMount -- making api call using it
        usecase of componentWillUnmount

        # episode 9 ---

        custom hooks
        optimisation of the code using custom hooks (dint practise as there are no useffect api cals)
        online/offline staus custom hook
        reuseability of online/offline custom hook to show the status in header
        creating smaller bundles and
        even more optimisation of the app with help of Lazy Loading aka (Chunking/ Dynamic Bundling/ Code splitting/ on-demand loading/ dynamic import)

        # episode 10 ---

        tailwind css

        # episode 11 ---



\*{
margin: 0;
padding: 0;
}

.header-container{
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid black;
}

.logo-container{
display: flex;
align-items: center;

}

.logo{
width: 150px;
}

.nav-items ul{
list-style: none;
display: flex;

}

.nav-items ul li{
margin-right: 20px;
font-size: 25px;
font-weight: 600;
cursor: pointer;
}

.nav-items ul li a{
text-decoration: none;
color: black;
}

.nav-items button{
margin-right: 10px;
padding: 8px 10px;
cursor: pointer;
border-radius: 8px;
width: 60px;
}

.body-container{
border: 1px solid black;
margin-top: 2px;
padding: 10px;
}

.search{
display: flex;
align-items: center;
justify-content: center;
}

.search input{
width: 30%;
height: 30px;
}

.search button{
margin-left: 5px;
padding: 8px 15px;
border-radius: 5px;
cursor: pointer;
}

.card-container{
display: flex;
flex-wrap: wrap;
}

.card-container a{
text-decoration: none;
color: black;
}

.restro-card{
background-color:#f0eded;
border-radius: 10px;
width: 230px;
margin: 20px;
padding: 5px;
cursor: pointer;
}

.restro-card:hover{
border: 1px solid black;
border-radius: 10px;
}

.restro-card img{
width: 100%;
height: 200px;
border-radius: 10px;
}

.menu-container{
margin: 20px;
}

.menu-container ul li{
list-style: none;
}

.menu-container p{
margin-bottom: 30px;
}

.user-card{
border: 2px solid black;
width: 250px;
padding: 50px;
margin: 30px;
}

.user-card button{
padding: 10px;
}
