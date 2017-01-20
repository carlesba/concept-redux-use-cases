# Redux use cases concept

## Problem to solve

Once your reducers work independently as single domains, sometimes you need to read from different reducers in order to dispatch the proper action.

Then, you end up adding lots of actions across all your reducers and they probably handle big payloads with un related information because it's needed for different reducers.

This makes your app hard to scale and to clean code when a use case have to be gone.

Also problematic could be organizing all your code on `constants`, `components`, etc.

## Proposal

### Data layer

A solution would be grouping all logic related to a reducer in a single folder. This would be:

- **constants**: to avoid typo errors
- **actions**: how a domain can be modified. Could be considered the *set* for the data.
- **reducers**: how data changes
- **selectors**: how to read data. Could be read as the *get* for the data.

This way we organize all data-related code based on domains.

### View layer

Then we have to focus on the **View**. We could structure it with:

- components
- connectors
- use cases

By using classic containers we finish with big files with lots of imports and logic in the `mapStateToProps`. This makes containers to base their interface on the actions and the state what could make us to loose prespective on what are we coding and avoids the component to be reused. Because of this we propose to create **connectors**.

#### Connectors

This would be like a presenter that maps the data layer to the view. It should be only a file that imports all the required info from the data layer and a components and connects it using `connect` from `react-redux`. This way, the component can be still stateless and be reused.

#### Use cases

The reason of a frontend app is to translate user interactions into data and update the view accordingly. In redux, this is done by **actions** but then we can find the problem exposed in the first point, actions getting to much unrelated payload information and reducers couple with everybody else actions. Then we can understand that we need to separate user use cases or user interactions from how data is modified. Because when you define the UI you don't necessary need think on how domains are structured.

So those **use cases** would map a user interaction with all the data actions need it in order to complete the sequence. Good part of this is that you keep reducers/domain interface as small as need it while the use case can compose those interfaces easily. Because the *use-case* is a stateless function it should be easy to test.

Then, the problem is, how can we dispatch different actions and avoid multiple and inconsisitent renders in the app?
