Hello Remazing team!

Here is my submission for the code challenge. This was very fun to work on and I'm quite appreciative for the opportunity to write this for you. I would absolutely love feedback. Although a few travel days, funeral activities, and family reunion over Thanksgiving certainly constrained my work schedule more than I expected, I genuinely enjoyed thinking and working through this challenge with what I know about Remazing in mind.

The following are notes and important points that give context to my submission.

##### I made a few assumptions/high-level decisions before starting project:

  1. Use of technologies that are following established yet progressive trends by the front end community will be considered with preference over techniques that guarantee support by older browsers.

  2. Use ReactJS for stage two. Working off of a comment of Timo's concerning the migration from VueJS to ReactJS, I felt that using ReactJS for stage two would be most appropriate.

  3. Keeping the implementation as simple as possible. I decided to treat this challenge like I would treat a greenfield P.O.C and make sure to capitalize on the power of simple, flexible solutions. This not only makes development faster and easier, but empowers future decision by avoiding constraints brought on by making too many technical commitments early on in the development process.

##### Primary implementation goals:

  1. The implementation should be lean, flexible, and reusable.

  2. The implementation should be easy to get running on any machine for inspection ( or in the real world, collaboration... )

##### These goals lead me to choose the following strategies:

  1. Use CSSModules for the styling strategy. This way I could write the css once, and reuse it for both stages. Considering the ease with with CSS grid allows for lightweight, robust layouts and the relatively low number of customized elements, keeping the implementation simple and lean seemed most logical.

  2. Use create-react-app to bootstrap stage two. CRA is the standard for bootstrapping react projects. The abstraction of the tooling makes it extremely easy share and collaborate initially, yet deep diving into the nuts and bolts of webpack and npm scripts is always available by 'ejecting'. It's generally familiar to most developers and receives a great amount of attention from the ReactJS community.

  3. Not to use state management beyond React Hooks.

----

A note on the git history. It looks pretty sparse, sorry about that. I decided to merge the two stages into one repo and had to some quick thinking with git. Here is a quick overview of how I went about the code challenge.

1. sketched the mockup on paper, using mind-maps to expand on possible technical solutions

2. implemented the HTML for stage one

3. implemented data and HTML generation for React

4. implemented basic name search for React

4. implemented layout with CSS

5. made iterative rounds of updates to make styles match the mockup

6. ported the CSS to stage_one and reconciled some of the differences

7. wrote documentation

----

I wish I could have implemented some tests and expanded further on the components hinted at in the mockup. For instance, some things I'm thinking about are:

  - What about the possibility of using a component library for the dropdown menu and the searchbar?

  - What additions/changes would make the app more accessible?

  - How would e2e, snapshot, or "unit" tests compare as strategies?

  - What about "docker-izing" the app. It might seem overkill for something so small, but I think it always helps to guarantee that all collaborators have an easy time getting up and running.

I would love to discuss strategies for those potentials if you would like.

Again, it was a pleasure to work on this challenge. Thanks so much!

– August