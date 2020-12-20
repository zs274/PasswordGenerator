# Password Generator

For the third assignment, we were given three starter files - index.html, styles.css and script.js - and asked to make a password generator. The generator had to ask prompts for what to include in the password and then had to display a randomly generated password that fit the user’s criteria. 

## Pseudocode

The following is my thought process for what I needed to happen.
- When the user clicks the button, prompts will appear.
- The prompts will ask for the user to choose a password length and what they would like included in the password. 
- Then the password will be displayed in the box.

Based on this my code would have to - 
- Once the user clicks the button, it would ask how many characters they would like in the password
- If they choose a number that’s below 8 or above 128 then an alert will tell them to try again
- If they choose a number between 8 and 128 then the user would be asked what they would like included (uppercase, lowercase, numbers, special characters)
- This would have to be confirm commands as if the user clicks OK, it would log it as true
- If it’s logged as true then the items in that array would be pushed to an empty array that would store them all
- Then from this array with all the stored possible characters, random items would have to be chosen and used to make the password 

## Difficulties

Making the arrays, prompts and confirm commands was fairly easy and so my main difficulty was in storing the items in the empty array and then using Math.random to choose random elements. It took a lot of trial and error and I consulted with my peers on it to get some extra insight and help. 

## Overall thoughts

This assignment was quite challenging, and it took longer than I thought it would, but I found using the debugger tool very helpful as I could see where my code wasn’t doing what I wanted it to do. I had to do a lot of reading about Math.random and how to push items to an empty array so although it was difficult it has been a good learning experience.

## Link to deployed password generator

https://zs274.github.io/PasswordGenerator/

## Screenshots
![passgen](https://user-images.githubusercontent.com/74627515/102718722-89171c00-42e1-11eb-9c23-69806d3d5318.png)
![passgen](https://user-images.githubusercontent.com/74627515/102718908-bdd7a300-42e2-11eb-9bfd-90a45ceeb5ab.png)

