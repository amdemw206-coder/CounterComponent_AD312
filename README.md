## Project Title: AD 312 Counter Component with State Management
#### By: Amde Wubshet

### Breif Description
Developed a simple React application that demonstrates the understanding of state management, asynchronous state updates, and the concept of state as a snapshot.

### Commands 
After installing the repo, navigate into your project directory: *cd portfolio-app*. Then start the development server: *npm run dev*. 
When running the page, you'll see from top to bottom: 
- A counter that is referenced from the "count" useState Hook. Represents the current state of the counter
- *Button "Increment"*, Increases the count by 1.
- *Button "Increment After Delay"*, Increases the count by 1 after a 2-second delay using setTimeout.
- *Button "Increment Twice"*, Attempts to increment the count by 2 immediately. This is to demonstrate batching and how React treats multiple state updates.
- *Button "Correct Increment Twice"*, Correctly increments the count by 2 using a state updater function: setCount(prevCount => prevCount + 1). 