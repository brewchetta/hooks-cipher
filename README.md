# Hooks and Cyphers

You've been hired by the FBI to build out an app that automatically uses cyphers to encode their secret messages. Once a phrase has been input, the newly encoded phrase only exists for about ten seconds before it self destructs. The good news is that the FBI has provided the cyphers, the bad news is that they want you to build the app using React hooks!

(To be clear, the cypher is the code we put the message through, not the message itself :P)

## What Are Hooks?

In React, hooks are

TODO: get formal definition

Hooks can only be used in functional components which means a purely hook based application won't have any need for class components. They allow a functional component to use many of their class based siblings' functionality like holding state or calling functions when the component mounts.

## The Challenge

Components:

app --> should have just two sub components
--> states: current cypher

cardsList --> holds a bunch of cards, allows to add a new message card

cards --> when a phrase is put in, user can hit 'translate' to change it's state. Once 'translate' has been hit, the countdown begins
--> states: phrase, isTranslated, countdown
--> effects:
1. Whenever this updates, its background color changes
2. When this updates and isTranslated has been set to true, this will create a setInterval that reduces the countdown every second and destroys the message when it hits zero

current cypher --> dropdown that points to at least a couple different cypher functions that take in a phrase and puts out a translation

Things to use with hooks:

useState

useEffect --> simulate didMount, didUpdate, willUnmount

custom hooks --> not sure what to do with this but we can do something
