# how i am approaching this assignment

* first i need to understand what the assigment deamnds---

* so by analysing the figma -- i have to creata a kind of non-functional web-site -- where i don't have to bother about the backend or any functional logic -- so far -- if need we will see it later.
* second thing is we need to focus more on ui or user experience ... and for that i need to use gsap -- (read about it ---)
* i need to use tailwind css -- which is fine we can do this.
* i need to use react -- we can do this -- since functionality is not there we can create it easily.. no api calls etc --- (think about it mentioning in comments -- if this project expect the api call then how we can do that -- not in detail but in berief -- to just showcase that i know this also ...)

* **quick update -- we need functional button like when user click on the button then it should slide the product -- i guess we need to make a kind of crousel effect something like that -- do i need to add gsap here ?? -- i don't think so -- but we will see it later --**

* for faq section --- we need to expand when user click and show the ans and when user click again we need to collapse it and show only questionn --- i guess its something like modal (mostly in logic sense) --- but we will see --

* this is my basic understanding so far what i understand -- any changes needed we will do ...

---

## Detailed documentation of how i am appraoching this assignment

* ## Step 1 :  Understanding the core requirements

  * The assignment is based on a Figma design that outlines a responsive landing page.
  * The goal is to recreate the design visually and interactivel and not functionally (no backend / api calls etc) so far what i understand.

* ## Step 2 : Understanding the requirement of animation on the page load

  * so we need to add a smooth animation -- when the page load or when user open the web-site --> is it something like skleton loader ?? -- i guess no because we use this naa when we waited for something like in api call -- but we are not using any api call here -- and its clearly mention we need to use gsap for animation when the page load..

  * ### `What is GSAP`

    * GSAP stand for `GreenSock Animation Plateform`
    * GSAP is a JavaScript library that is used to create a high-performance, smooth, and complex animations on a websites and web-apps.

  * so for page load we will use gsap --

* ## Step 3 : Text Fill / Word Darkening Animation on First Paragraph

  * so we need to add a animation on each word of first paragraph its like when user scroll then we will show each word one by one -- means earlier the word be like in faint color or transparent (we will see what looks better) and when user scroll we will give some color to each word.

* ## Step 4 : Interactive Buttons in "Best Selling Products" (Mobile & Tablet)

  * this requirement says -- we need to create a crosual (i am assuming we will think later -- is it crosual or not) where two button will present like left and right and when user click on it - then they will move the product left or right accordingly . and buttons should be intrective means we need to add some animation like scale up down box shadow etc we will see --

* ## Step 5 : FAQ Section Expand with Smooth Animation

  * for faq section --- we need to expand when user click and show the ans and when user click again we need to collapse it and show only questionn --- i guess its something like modal --- we will see --

* at last there a footer -- we will see how we can create component and how many component are needed to be created..

* this is kind of basic understanding of assignment.

---

* ## Starting the coding part

  * now first we will go through the initial setup and what we are using and why ..

  * ### (1) React (via Vite)

    * ### why we are using react

      1. React is a **component-based JavaScript library** that helps us in building clean, modular, and reusable UI elements.
      2. The assignment **explicitly requires React** or Next.js so we are using React here.

    * ### why Vite over Create react app

      * Vite is bundler that is used to setup the basic react app.
      * Vite offers **faster startup** and **build times** than CRA.
      * It's **lightweight** and supports **hot module replacement** and it is very easy to integrate with **Tailwind CSS** and **GSAP**.
        * ***Hot Module Replacement (HMR) is a development feature that allows our app to update only the changed modules (files) in the browser without doing a full reload. And this makes development faster, smoother, and more efficient. And we don't have to do any extra configuration this feature comes with vite.***

  * ### (2) Tailwind css

    * tailwind is a utility first css framework that enables rapid UI development directly in JSX
    * tailwind have builtin responsiveness via sm,md,lg breakpoints and it follows the mobile first approach.

  * ### (3) GSAP

    * GSAP is a **high-performance JavaScript animation library**. And it supports
      * (a) Scroll-based animations (`ScrollTrigger`)
      * (b) Page load entrance effects
      * (c) Word-by-word paragraph animations
      * (d) Smooth toggle animations for elements like FAQs
    * It offers **timeline control** and performs better than CSS for **complex and precise animations**.

---

* ## Now main thing started --- Thinking about component -- how many components we need and so on

* ## (1) Navbar component

  * this component will have a kind of 3 div inside the nav tag and for semantic purpose i can wrap the nav inside the header tag .. and using disply flex i can fix the layout

  * if time left think of hamburger menue in mobile phone or smaller screen -- lets see it while styling .

* ## (2) the second component could be a hero section

  * this is how i structure my main page content ...

    ```planetext
        <main class="main-div">
        ├── <div class="first-div">
        │     ├── <div class="left-div">
        │     │     ├── Small tagline (left)
        │     │     └── Heading: GLOW NATURALLY (make sure it comes to center--)
        │     └── <div class="right-div">
        │           └── Product image (right)

        ├── <div class="second-div">
        │     └── Button: Shop Now

        ├── <div class="third-div (image-block)">
        │     ├── Background text: SKINCARE (huge, faded)
        │     └── <div class="overlay-message-card">
        |           |- a image 
        |           └── a overlay div content
        │               ├── Circular image (left)
        │               └── Text (right)
        │               Use: display flex

        └── <div class="fourth-div">
                Full-width paragraph below 
    ```

  * its okey to structure it like this -- but just think -- the overlay div is coming multiple times in the web-site it's better we should create a seprate component for it --

* ## (3) OverlayCard component

  * this component will have a div inside it we will have 2 div -- one for image and another for text or actual overlay div content.
  * but there is a question -- the image inside the overlay card -- have differnt background color -- so we can't write direct css in overlaycard  component -- somewhere we need to pass the differenciating css to overlay card component. okk and we can use props for that cool...we will see it while creating this component for time being its fine--

  * out overlay card component will look something like this we will see if changes required.

    ```jsx
        // check it for promo banner can we use it directly inside it or not ..
        export default function OverlayCard({ image, children }) {
        return (
            <div className="flex items-center">
            <img src={image} className="w-8 h-8 rounded-full mr-2" />
            <div>{children} or text or inside paragraph </div>
            </div>
        );
    }
    ```

* ## (4) Button component

  * just like overlaycard component we also have multiple button -- so why not use the single button component that's the usecase of react to re-use the component. and for styling we will expect props based on when we will call our button component then its responsiblity of caller to pass the style like how and what kind of button he/she wants.
  * By doing this we are following DRY principle , Reusability.
  * but i need to pass the text also right -- like best selling products -- but for that i can use either a text prop , or children prop.
  * **`what is children prop`**
    * in react children prop is a special prop that is used to pass the content b/w the opening and closing tags of a component. we can event pass the icons and other components as a children based on usecase.
    * children is what we put inside the component's tags and React automatically passes it into the component via the children prop.

  * something like this our button component will look like.

    ```jsx
        export default function Button({ children, callerStyle = "", onClick }) {
        return (
            <button
                onClick={onClick}
                className={`transition duration-300 ease-in-out ${callerStyle}`}
            >
                {children}
            </button>
        );
        }
    ```

  * we can pass text like this -- `<Button className="" text="Shop Now" onClick={someFunction} />` but this is ideally we don't do. and another reason is what if we want to pass a html element inside the button may be its a requirement assume like inside the button there is a text inside the span or some bold tag , em , strong tag etc -- due to some styling purpose or some semantic purpose -- and its only prsent inside the single button so we can pass the span/em/strong as a prop. but with children prop we can do this that's why we are using children prop.

* ## (5) WhyOurProducts component --

  * this component will have 2 div on left and right -- left is for content and button (button component we already have) and right is for overlay card which we already have.
  * this is how our whyourproducts component will look like -- if changes neeed we will see later while code

    ```planetext

        <section>
        ├── <div> (Wrapper: Flex container for Left and Right sections)
        │
        │   ├── <div> (Left Side: Text Content and button)
        │   │   ├── <Button>Why Our Products</Button>
        │   │   ├── <h2>YOUR SKIN DESERVES THE BEST CARE.</h2>
        │   │   ├── <p>Subheading paragraph about the skincare</p>
        │   │   └── <ul> Feature List
        │   │       ├── <li>
        │   │       │   ├── <span>01</span>
        │   │       │   └── <div>
        │   │       │       ├── <h3>Bio Ingredients</h3>
        │   │       │       └── <p>Description text</p>
        │   │       ├── <li>... (02 - Everything Natural)
        │   │       └── <li>... (03 - All Handmade)
        │
        │   └── <div> (Right Side: Award OverlayCard)
        │       └── <OverlayCard
        │              image="/assets/award.png"
        │              text="Best Skin Care Product Award Winning"
        │           />
        |       |-  another div for since 2001 and learn more ( is it learn more a button -- check it later).
        </section>
    ```

* ## (6) BestSellingSection component --

  * for this we need a button component for best selling products -- which we already have.
  * then we need left and right arrow button component -- (we can use svg -- ) check it while code.
  * then we need to create a crosal component that will expect a image card.
  * then we need to create a card image component obiously..

  * ## Reused Components

    * `Button`: Reused for the section label (e.g., "Best Selling Products").
    * `ArrowButton`: Navigates the carousel left/right. Takes a `direction` prop.
    * `Carousel`: Horizontally scrollable wrapper for product cards.
    * `ImageCard`: Displays product image, name, and price.

  * this is how our component will look like

    ```jsx
        <section class="best-selling-section">

            <div class="section-header">

                // think do i need to add a filter logic here -- check it while code -- i guess yess -- when user click on best selling products then all the best selling products should be visible -- but we don't have the multiple product -- check it while code..
                <Button class="filter-button">
                    Best Selling Products
                </Button>

                <h2 class="section-title">
                    // may be we need to use span -- check it while styling..
                    Skincare That Brings Out  
                    Your Natural Radiance
                </h2>

                <div class="arrow-controls">
                    <ArrowButton direction="left" />
                    <ArrowButton direction="right" />
                </div>
            </div>

            // Product Carousel Section
            <Carousel>

                // Individual Product Cards
                <ImageCard
                    image="/assets/product1.png"
                    title="ALYA SKIN CLEANSER."
                    price="FROM $29.99"
                />

                <ImageCard
                    image="/assets/product2.png"
                    title="RITUAL OF SAKURA."
                    price="FROM $27.99"
                />

                <ImageCard
                    image="/assets/product3.png"
                    title="THE BODY LOTION."
                    price="FROM $19.99"
                />
            </Carousel>

        </section>
    ```

* ## (7) PromoBanner component --

  * this component will have a div and it will have a background image -- and then we will have a overlay kind of div -- check it can we use our overlay ??  the ans could be yes but we have a shop now button also as a overlay -- either we pass this as a prop-- and using children prop we can achive the desired layout -- check it if it works then go with it else create a seprate component.
  * with our current overlay-- we can go ahead -- either we will re-design our overlay or write jsx in promobanner... we will see while coding.. we can have something type prop and based on that we can decide -- which one to choose...something like -- check it while creating overlay component...

* ## (8) FeaturedProductsSection componant --

  * this component will have a heading --
  * a button component -
  * and a card image component --
  * but check for the logic when user click on button  then ui should change just like in yt-- on the home page video container card changed when user select gaming , education etc..

* ## (9) FAQSection component

  * this will have a left and right div -- and inside left div we will have a overlay component
  * and inside right div we will have a button then a heading and then a accordian component-

* ## (10) at last we have footer section
