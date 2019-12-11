## P3 Peer Review

+ Reviewer's name: conbainbridge
+ Reviwee's name: weswollner
+ URL to reviewee's Github repo: *<https://github.com/weswollner/E28>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
After clicking on one of your route links, refreshing the page breaks the app (because, if I'm not mistaken, it treats the url with the addition to the path as being a real location in your repo, e.g. expecting to find a ShowSubmittedQuiz/index.js or something, when ShowSubmittedQuiz is not a folder in the repo).

### Were there any parts of the interface that you found confusing or unclear?
I'm not sure what the function of the "submit answer" versus "submit quiz" buttons will eventually be: what is the purpose of the "submit answer" option in particular? Were you planning on using this specifically for counting submitted answers in localStorage, for example?

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
Things look pretty straight forward, and the naming of functions is very clear as is, but it might not hurt to add comments in store/index.js to clarify the different functions (e.g. `getAllAnswers(state) {return state.answers;}` is clear as far as what it does, but not sure how it's going to be used in the context of the app just yet - will the quiz results page show the correct answers only, or include the submitted answers and compare the two?)

### Are there any parts of the code that you found interesting or taught you something new?
I like the way you randomized the multiplication questions in the code below, as someone who doesn't make use of ES6 nearly enough it reminded me of how elegant and concise functions can be!

```
mixedQuestions: function() {
      let shuffled = this.questions
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
      return shuffled;
    }
```

Also these two lines of CSS are new to me, definitely intrigued! `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`

### Are there any best practices discussed in course material that you feel were not addressed in the code?
Just the routing links issue I mentioned in the first question of the review. Otherwise things are looking neat and efficient.

### Do you have any additional comments not covered in the above questions?
Set up to be a fun project, just missing the completion of functionality (results feedback page). I don't see any use of localStorage but I'm guessing that may be what the "submit answer" button setup will eventually work with.