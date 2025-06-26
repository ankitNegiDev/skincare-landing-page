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
