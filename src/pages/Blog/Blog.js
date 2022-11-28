import React from "react";

const Blog = () => {
  return (
    <div className="mb-7">
      <div className="lg:w-[95%] lg:mx-auto lg:mt-3 grid lg:grid-cols-2 md:grid-cols-2 lg:gap-3  grid-cols-1">
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component. Local state
              is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does prototypical inheritance work?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              When it comes to inheritance, JavaScript only has one construct:
              objects. Each object has a private property which holds a link to
              another object called its prototype. That prototype object has a
              prototype of its own, and so on until an object is reached with
              null as its prototype. By definition, null has no prototype, and
              acts as the final link in this prototype chain. It is possible to
              mutate any member of the prototype chain or even swap out the
              prototype at runtime, so concepts like static dispatching do not
              exist in JavaScript. While this confusion is often considered to
              be one of JavaScript's weaknesses, the prototypical inheritance
              model itself is, in fact, more powerful than the classic model. It
              is, for example, fairly trivial to build a classic model on top of
              a prototypical model — which is how classes are implemented.
              Although classes are now widely adopted and have become a new
              paradigm in JavaScript, classes do not bring a new inheritance
              pattern. While classes abstract most of the prototypical mechanism
              away, understanding how prototypes work under the hood is still
              useful.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              {" "}
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important. In
              his book "Working Effectively with Legacy Code", author Michael
              Feathers states that such tests are not unit tests when they rely
              on external systems: “If it talks to the database, it talks across
              the network, it touches the file system, it requires system
              configuration, or it can't be run at the same time as any other
              test."
            </p>
            <p className="mt-4 dark:text-gray-400">
              To justify any effort in business, there must be a positive impact
              on the bottom line. Here are a few benefits to writing unit tests:
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system. Well-written unit tests
              act as documentation for your code. Any developer can quickly look
              at your tests and know the purpose of your functions. It
              simplifies the debugging process. Unit testing is an integral part
              of extreme programming. Extreme programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.
              Unit tests make code reuse easier. If you want to reuse existing
              code in a new project, you can simply migrate both the code and
              tests to your new project, then run your tests to make sure you
              have the desired results. Unit testing improves code coverage. A
              debatable topic is to have 100% code coverage across your
              application. In the testing pyramid, unit tests are faster than
              integration and end-to-end. They are more assertive and return
              quick feedback.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              React vs. Angular vs. Vue?
            </p>
            <p className="mt-4 dark:text-gray-400">
              React is a JavaScript library developed by Facebook which, among
              other things, was used to build Instagram.com. Its aim is to allow
              developers to easily create fast user interfaces for websites and
              applications alike. The main concept of React. js is virtual DOM.
            </p>
            <p className="mt-4 dark:text-gray-400">
              Angular is a platform and framework for building single-page
              client applications using HTML and TypeScript. Angular is written
              in TypeScript. It implements core and optional functionality as a
              set of TypeScript libraries that you import into your
              applications. The architecture of an Angular application relies on
              certain fundamental concepts. The basic building blocks of the
              Angular framework are Angular components that are organized into
              NgModules. NgModules collect related code into functional sets; an
              Angular application is defined by a set of NgModules. An
              application always has at least a root module that enables
              bootstrapping, and typically has many more feature modules.
            </p>
            <p className="mt-4 dark:text-gray-400">
              Vue (pronounced /vjuː/, like view) is a JavaScript framework for
              building user interfaces. It builds on top of standard HTML, CSS,
              and JavaScript and provides a declarative and component-based
              programming model that helps you efficiently develop user
              interfaces, be they simple or complex.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
