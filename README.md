# Community Challenges plugin for [Robo.js](https://github.com/Wave-Play/robo.js) discord bot framework

This plugin allows you to submit your challenge ideas to the community challenges directly from your Robo.js discord bot.  
In the current version, anyone can submit a challenge, but only specific roles can approve them.  
In the current version, by default, only roles with the administrator permission can approve challenges, or the server owner.  

## Links

Github: https://github.com/mbos2/community-challenges  
NPM: https://www.npmjs.com/package/community-challenges

## Installation
  
  ```bash
  npx robo add community-challenges
  ```

## Commands

### add-challenge-role

Adds a role to the list of roles that can review submitted challenges.

### remove-challenge-role

Removes a role from the list of roles that can review submitted challenges.

### list-challenge-roles

Lists all roles that can review submitted challenges.

### reset-challenge-roles

Resets the list of roles that can review submitted challenges.
It will reset it to the Server Owner and any other role with Administrator rights.

### submit-challenge

Submits a challenge to the channel that is set for challenges reviews.

### set-challenges-review-channel

Sets the channel that will be used for challenge reviews.  
Only one channel can be set at a time.  
**This is required to set up before anyone can submit the challenge,**

### set-challenges-channel

Sets the channel where approved challenges will be sent.  
Only one channel can be set at a time.  
**This is required to set up before challenges can be approved**

### unset-challlenge-channels

Unsets the channels that are used for challenge reviews and approved challenges.
**By executing this command you will have to set challenges review and challenges channels.**

