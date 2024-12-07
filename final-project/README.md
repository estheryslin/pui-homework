<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

Describe your website (300 words).

The purpose of my website is to be a personal portfolio and landing page for introducing myself. It is designed to showcase my projects as well as provide a platform to learn more about me as an person. By using a visually engaging and interactive format, my goal is to convey my personality and design taste through the overall appearance and functionality of the website.

My target audience includes people and professionals interested in learning about me and my work, such as potential recruiters, collaborators, friends, or anyone curious about my projects and personality. Additionally, the website serves as a point of introduction for anyone looking to gain insight into who I am as a person, both professionally and personally.

The website features dedicated sections about my projects (only one project is displayed for the purposes of this current endeavor), showcasing the process, skills, steps, and team members involved. Furthermore, it includes a personal bio to provide visitors with an understanding of my interests, values, and individuality. The intention is to give viewers a more holistic view of who I am as a person.

What sets my portfolio apart is its dynamic and captivating animated gradient background, which creates an immersive visual experience that reflects my creativity when the user first opens the website. The clean and minimalistic design ensures easy and straightforward navigation, while the engaging visuals such as the working clock and the content make exploring the site an enjoyable experience. 


## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Link: Click on "work" on home page to get to Work Page
2. Link: Click on "about" on home page to get to About Page
3. Link: Click on "EL" on work or about page to get to home page
4. Link: Click on "Swimming competitively for my university" on about to get to CMU Athletics page

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Animation / Library
   * Why did you choose to use it over other alternatives? (2 sentences max)
   * 
      I chose this because it was the easiest to understand and explain as a beginner.
   
   * How you used it? (2 sentences max)
   * 
      I used it to use for specific code chunks and how to understand the code.
     
   * What does it add to your website? (2 sentences max)
   * 
       It helped make my website more visually interesing by making it animated.


## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)
    Initially, I inteneded to have dynamic, animated stars on my homepage, surrounding the content on the page. While doing user testing and getting feedback I realized that having too much animation was slightly distracting to the content so I decided to go with more subtle animation. I also initially intended to have a collapsing navigation bar on the left side of the website, but ended up going with a traditional nav bar at the top of the page. This was because if I had a collapsing navigaiton bar I would have to design the website in ways that accomodated the collapsed and uncollapsed version, which was much more difficult than originally intended.

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)
    Some of the bigges challenges in the implementation of the website was how the animated portion of the website would be reflected on the actual website, and how this would impact the usability of the website. I would have to adjust the velocity, size, and number of particles so it was not too distracting to the user, but was also noticable enough to make it worthwhile implementing. 

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

For my final project, I used GenAI tools like ChatGPT and Microsoft Copilot to help my understanding of concepts, debug, and refine my code. This process not only improved the quality of my project but also helped me learn about how to code as I did the project in real time. 

One of the first challenges of the project was understanding what certain outsourced code meant and how certain lines of code impacted the overall functionality of something. I used ChatGPT to break down the concept into simple, digestible terms that I could understand as an introductory programmer. By asking specific and targeted questions, I was able to better understand what certain code did and also how it impacted other pieces of code.

I also, as expected, faced several bugs and issues that were difficult and time intensive to fix. ChatGPT helped a lot in not only navigating where bugs were, but also what was the best way to fix these bugs. For example, I would paste snippets of my code and describe the issues or error messages that I was getting, and ChatGPT would identify the potential issues, such as syntax or logic errors. It also provided explanations of how to fix these issues, which helped me learn how to debug on my own as well.

In later stages of my project, I also started to find ways to clean up my code and remove things that I may have forgotten to remove or things that weren’t necessary in the functionality of the code. After pasting code snippets into ChatGPT, it would give responses that helped to identify ways to make my code cleaner, more efficient, and easier to maintain. For example, I had a lot of repetitive blocks of code, and ChatGPT helped identify which ones were taking precedence in hierarchy, or if some ended up being not used at all (mostly in CSS). It would also sometimes recommend that I rename my variables or choose better practices, which helped me understand where I could improve when it came to naming conventions and best practices when coding. 

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | Yes/**No** | Yes/**No** | **Yes**/No | **Yes**/No | **Yes**/No (asking questions)|
| ChatGPT | Productivity | 0 | 0 | 5 | 6 | 7 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: Being able to debug code and explain what was going wrong in my code as well as explaining concepts I asked it
     
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: It was not great at designing the website since it could not visually see things, and was ot great at producing code

* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. ChatGPT: The planning of the website since it didn't have a great understanding of usability from a visual standpoint

> Use patterns
* I accepted the generations when …  For example, 
  1. ChatGPT:: this tool once suggested that I take out CSS code that was not being used and I adjusted my design according to the suggestion because it streamlined my code and made it more usable
     
* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: this tool once suggested that the website looked a certain way given the code but I modified/rejected the suggestion because it failed to consdier the CSS and Javascript code that was changing what the HTML looked like. 

> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: Helps explain concepts, debug code efficiently, and process large amounts of code efficiently
  2. 
* Cons
  1. ChatGPT: Cannot design visual things great, and fails to udnerstand greater contexts of the code


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

A personal portfolio website to display and talk about my different projects. Other features include having an “About me” page and creative home landing page. Want to create engagement through potentially having a night mode and other visual animatied features. Night mode will also help with accesibility and alt text will be added. 

## High-Fi Prototypes

### *Prototype 0 (Home Page)*

<img width="850" alt="Screen Shot 2024-11-04 at 10 08 09 PM" src="https://github.com/user-attachments/assets/202f753a-d7d3-48b1-9ac9-82f0307c8b25">

The homepage lacks a visual hierarchy with the main text, which makes it hard for users to identify where to navigate to from the home page. The changing language feature of the homepage text affects the overall layout, and how it could potentially get busy with so many different components. 

### *Prototype 1 (Works Page)*

<img width="850" alt="Screen Shot 2024-11-04 at 10 00 55 PM" src="https://github.com/user-attachments/assets/4d5f36a1-335d-4392-bf2f-40d2c510f837">

Users may struggle to find their way back to the homepage due to there not being a clear homepage button. Work page displays all of the portfolio projects but users don’t know anything about the projects and can’t tell what the projects are about by the title. Some uncertainty that you’re supposed to scroll down on this page.

### *Prototype 2 (Project Page)*

<img width="850" alt="Screen Shot 2024-11-04 at 10 02 33 PM" src="https://github.com/user-attachments/assets/85ea3508-7353-425d-bb04-21f7a9222e9f">

The photo and text layout feels a bit jarring, especially when viewed in full screen on desktop. Seeing the image first doesn’t allow for affordances that the user is supposed to scroll down. Users are also unable to see the image and the respective text at the same time. Users also said that if there is a lot of content then there could be a lot of scrolling necessary to get through the whole page.

…

## Usability Test

In the usability test, there was a lot of feedback on the overall intuitiveness of the landing page, mostly with regards to where to navigate to next after reading the text on the homepage. The homepage has been refined by removing the CMU-specific portion of the text in the middle of the homescreen and introducing a home button in the top left of the navigation bar. This will need to be tested for how intuitive it is that that is a home button. In the test, users were also confused about project titles such as “WeAudit TAIGA”, so on the works page, short descriptions have been added to each project to give users a quick summary of the content, improving intuitiveness. Finally, on the project page, there were comments about the layout being not the most usable due to the wide positioning of the images as well as the images being the first thing you see. The layout has been changed so images and text are side by side and the users can see both simultaneously. 

## Updated Designs

<img width="850" alt="Screen Shot 2024-11-04 at 9 56 52 PM" src="https://github.com/user-attachments/assets/8b2d860c-a265-44f7-abc0-1593b6be488a">

Took out “Carnegie Mellon Student” portion out of the main text, and included it in the top left as a part of the new home button. This home button was added as a way to go back to the landing page after going to other pages. 

<img width="850" alt="Screen Shot 2024-11-04 at 10 08 31 PM" src="https://github.com/user-attachments/assets/cbde6fbf-d6a9-4a4d-a516-1f47fcfc55dc">

Added short descriptions to each project to inform users of what the respective projects are about before they click on it. Will add an animated image hover feature to give feedback when users are hovering over specific projects.

<img width="850" alt="Screen Shot 2024-11-04 at 10 08 56 PM" src="https://github.com/user-attachments/assets/81983f4c-f1cf-4f43-b012-61c824c871b7">

Changed layout so image and text are next to each other and are visible simultaneously. Allows users to better digest and analyze the content.

## Feedback Summary

Primary feedback during the lab was that additional complexity needed to be added to the project to keep users engaged and to meet project requirements. After discussion, this could come in a few different forms to tie together the portfolio website. The first way is to add animation to the floating stars on the homepage, so that when the mouse hovers over the shapes they float around. Another idea was to add a dynamic timeline to each portfolio page so that there are different steps to the project that the users can jump to, and by clicking on the steps it will take them to the respective portion of the project writing. The last idea was to add animated images and feedback to various clickable objects throughout the website. This includes the homepage main text, the images on the works page, and the images on the project page. Overall, these ideas influenced my design in that it opened up a lot of possibilities to the project that I didn’t initially consider. I mostly focused on the layout of the website and the content, but after the session I shifted my focus more so to adding more dynamic components to the website to make it more interactive and engaging for the users.

## Milestones

Week 11: Design and implement basic structure of the website using HTML. Hardcode any objects and visual components that I currently know how to create and get a rough outline of what the website should look like. Attempt the animated stars on the homepage and gauge progress and time.

Week 12: Refine the visual components created from the previous week. Have the animated starts completed on the home page. Begin to attempt the animated images for the works and project page. 

Week 13: Create the timeline at the top of the project page. Created animated homepage text. Make final corrections on the hardcoded text and visual components.

Weel 14: Final adjustments. Refine and debug any dynamic components to the website to enssure they are efficient and not prone to breaking.


### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  - [ ] ...
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [ ] FP2 due

- [ ] Week 11 Nov 11 \- Nov 15:
  - [ ] FP3 Due
  - [ ] Design and implement basic structure of whole website
  - [ ] Hardcode visual elements such as images and buttons
  - [ ] Attempt animated stars and gaug progress/time
        
- [ ] Week 12 Nov 18 \- Nov 22:
  - [ ] Refine basic structure and visual elements
  - [ ] Compelte animated stars
  - [ ] Attempt animated images for project page
        
- [ ] Week 13 Nov 25 \- Nov 29:
  - [ ] Attempt timeline at the top of project page
  - [ ] Make final corrections on structure and hardcoded components
  - [ ] Created animated homepage text

  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due
  - [ ] Finalize project page timeline
  - [ ] Final adjustments
  - [ ] Debug features, especially dynamic ones
  - [ ] Check for speed of dynamic components

### *Libraries and Other Components*

N/A (for now)

## Generative AI Use Plan

For animated elements like the stars, changing text, and hover effects, ChatGPT can help in generating JavaScript, CSS, and HTML snippets. ChatGPT can help in building complex animations, like CSS animations for stars and JavaScript to cycle through dynamic text. 

### *Tool Use*

Generative AI can be helpful in developing interactive features and making components more efficient on complex code. I think AI can make the coding process for animations and transitions more efficient since it can help me identify ways to improve code efficiently. AI might struggle with highly specific design layouts or animation effects that need fine-tuning since the code might need adjustments. Additionally, AI-generated suggestions might not be exactly what I am looking for and may take multiple attempts to understand what I am asking. 

* ChatGPT  
  * I will use it for generating code snippets because it can scan other public resources that I can't
  * I will use it to ask questions about my logic and existing code

### *Responsible Use*

I’ll use GenAI responsibly by reviewing all generated code, ensuring it meets best practices. Additionally, I’ll avoid over-relying on AI and continue to refine AI-generated outputs to be in compliance with the rules of the project.

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: Personal Website*

<img width="850" alt="Screen Shot 2024-10-28 at 11 28 06 PM" src="https://github.com/user-attachments/assets/7b2ae2d3-2876-40de-b733-0f783979db03">

A personal portfolio website to display and talk about my different projects. Other features include having an “About me” page and creative home landing page. Want to create engagement through potentially having a night mode and other visual features. Nigh mode will also help with accesibility and alt text will be added. 

### *Idea 2: Restaurant Rating*

<img width="850" alt="Screen Shot 2024-10-28 at 11 29 04 PM" src="https://github.com/user-attachments/assets/ec7d1205-dd10-474b-a48d-02c9990c4cba">

Website to submit ratings and comments of different restaurants for your friends to see and share. Acts as a social media platform for foodies. The different features and interactive component will make the design interactive, and ease of use will be a primary focus. Alt text and color options will be available for accesibility.

### *Idea 3: Digital Journal*

<img width="800" alt="Screen Shot 2024-10-28 at 11 29 22 PM" src="https://github.com/user-attachments/assets/cd778289-f1c2-4d84-8d2e-d67e8e9e0e60">

A digital journal to submit entries to document your daily thoughts. Emphasis on aesthetics and features to visually see spreads instead of using word, docs, or notes app. Features such as comments and stickets will make the design interactive, in addition to a potential social feature. Design will be accesible by providing different viewing styles, font sizes, and alt text.

## Feedback Summary

**Feedback Summary:**

Personal Portfolio: Focus on enhancing user experience by making both digital and physical elements visible and comprehensible. Suggestions included creating a personalized landing page with a clean, organized design that avoids overwhelming users. Another idea was to incorporate a left-side navigation bar to improve usability, keeping critical sections accessible at all times.

Restaurant Rating: Feedback included combining elements from Reddit, Yelp, and OpenTable to create a unique and interactive experience. The addition of a map feature could be helpful in allowing users to locate restaurants based on location, distance, and ratings. Organizational suggestions included sorting by location, newness, or popularity to keep content relevant. There was also interest in an upvote/downvote system similar to platforms like Reddit and Beli to give users a way to promote helpful reviews and encourage social engagement.

Digital Journal: Emphasis on creating an interface that feels like a blend of Notion and Tumblr with multiple page layouts for personalized journaling. There is potential for a ‘rate your day’ feature, which would allow users to track daily reflections. Another idea was adding digital stickers for personalization, which could appeal to more creative users. To increase functionality, there were suggestions to implement a trend-tracking feature to analyze recurring patterns in dates and words across entries, to provide insight to your habits and extrapolate data for reflection. 

There was also overall feedback to consider mobile payouts for all ideas so it is user friendly, especially for the digital journal.

## Feedback Digestion

The two most important points of feedback that I’d like to incorporate is the sticker feature and the emphasis on mobile applications.

Stickers as a feature for the digital journal could, as suggested, offer users a fun, customizable element, creating a more interactive journaling experience. This would add appeal over using other document applications and make the experience more personable, like if you were to use a paper journal. It would make the design more engaging and add a sense of personalization, which could appeal to many different users. This could also lead to more functional features as well such as bookmarks or highlights, that could be designed like the stickers but have more than just decorative value.

Another significant point was ensuring that any of the applications can be viewed on a mobile device. Many peers noted that mobile access is critical for both the restaurant rating platform and the journal, as they’re more likely to interact with these features on the go. This means that the mobile application navigation needs to be intuitive, ensuring features like the left-side sticky navigation bar adapt well to smaller screens, and avoiding overwhelming users with too many options at once. This is important to create a seamless and practical user experience, even if they are using a phone.

A piece of critique that I will not be incorporating is the location based feature for the restaurant rating app as it may be too complicated for me to implement within the project timeline and scope. Due to network effects, I will also not implement popularity features as I currently do not know how many people can/will use the platform and do not know if the lack of users will impact the experience if features are dependent on having many users.

