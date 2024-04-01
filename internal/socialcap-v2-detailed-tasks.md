# Socialcap v2 

See Issues in https://github.com/Identicon-Dao/socialcap/issues

## S1. Design work, UI improvements and landing revamping  

### Goals:

- Redesign home page, doc site, UI (tabs, submit forms, Admin navigation, ...)
- Redefine content for homepage                                
- Fix design/UX issues in current app UI                       
- Improve socialcap.app home page                              |

### UI

Fixes

- FIX HIGH Show approved credentials in My Credentials
- FIX HIGH Show the approved Credential and links to the on-chain txns

- FIX HIGH Move queries from +page.js to +page.svelte
- FIX HIGHT Retest if error 500 fix is working
- FIX [Re Log-in (Visual) Bug](https://github.com/Identicon-Dao/socialcap/issues/89)
- FIX [Hide Raw! Button](https://github.com/Identicon-Dao/socialcap/issues/74)
- FIX [Applicant full name was empty](https://github.com/Identicon-Dao/socialcap/issues/81)
- ~~FIXED XLS exports cuts long text~~
- NEW: Show columns in claims in some better ways
- NEW: Improve list of claims info with better data
- FIX Add default name to all fields in a the evidence form
- NEW: Improve link fields

- NEW [Allow owner to delete/turn inactive their community](https://github.com/Identicon-Dao/socialcap/issues/86)
- NEW Add tags to Profile and Masterplan so we can filter validators by tags for a given plan
- NEW Add presentation template for masterplan items
- NEW Upload files and images to IPFS provider in Image/Files fields
- NEW (LOW) [Add dark mode](https://github.com/Identicon-Dao/socialcap/issues/77)

### Redesign UI

​	See document [App UI redesign](./socialap-v2-app-ui-redesign.md)

### Landing

​	See document [App UI redesign](./socialap-v2-general-redesign.md)

#### Services

- `#1` TEST: Run sequencer for final testing of spawn/kill worker
- `#1` TASK: Deploy service changes to Main
- NEW: Normalize Txns send back to UI so we can search them/etc ...
- FIX: Cleanup unused code
- FIX: Implement types for all API
- NEW: Implement the missing strategies
- NEW LOW Add filtering for selecting validators/judges
- ??? Do we need to Merkelize the Txns log for each user ?

### Tasks

- Create email accounts for Socialcap
- Create new Mailgun account for Socialcap
- 

## S2. Technical and user documentation and videos

Goals:
 - Finish Socialcap white paper (on social-consensus and voting)
 - Rewrite technical docs with improvement
 - Create tutorial and videos
 - Create documentation site

## S3. Payment for Credentials

- Review actual code and do cleanup and refactoring
- Review implementation done for Cohort1
- Add UI config features
- Test alternative cloud-worker implementation for payment
- Implement payments (browser or cloud-worker)
- Implement distribution fees contract/service
