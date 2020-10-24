**Question 1:** Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George


**Hi George,**

These are excellent questions! A record is the unit of measurement we use to designate one item in a database. Specifically, it is a collection of related fields of data. For example, in a database of movies each movie would have its own record, containing the movie's name, actors, and any other relevant information stored by the database. Indexing is the process of assigning tables that point to the locations of those records. Once records are indexed, we can use those pointers to more easily retrieve, sort, and search our records.

When setting up your Custom Rankings, the goal should be to display your most relevant results first. So the metrics you select should be those that bring what your users most want to see to the top of the search. To use our movie example again, say you wanted to display the most recent popular movies to your users first since they generate more clicks. You would choose Release Date and Critic Score as your metrics.

Please let me know if you have any further questions!

Best, Brian


**Question 2:** Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt


**Hi Matt**,

I'm so sorry to hear the new dashboard has caused this inconvenience! I do see that clearing and deleting indexes requires users to go into the "manage index" menu on the dashboard, which could get tedious if repeated over a large number of iterations. I'm reaching out to our developers to see what workarounds we can recommend that might make your process more efficient. Could you elaborate on how you're using these features, so I can make sure we find you the best solution?

Thanks so much,

Brian


**Question 3:** Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo


**Hi Leo,**

We're thrilled to hear you're considering using Algolia! Everything at Algolia has been designed to make the implementaion process as easy as possible on your development team. Once you've made your account with us, the high-level process is:
- Upload and index your datasets, using our API clients, our dashboard, or the Algolia crawler add-on directly from your site.
- On our dashboard or API, configure your relevancy settings (a.k.a. how you want your search results to be sorted and presented).
- Integrate our search into your front end user interface. You could do this with custom development, but Algolia also offers pre-built search interfaces compatible with most tech stacks that drastically reduce the time and effort getting your Algolia search off the ground!

I'd be happy to answer any other questions you have about the implementation process. I look forward to hearing from you soon.

Best, 

Brian