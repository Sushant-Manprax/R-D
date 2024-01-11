# Zoom Meeting SDK React Sample

**Note:** Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/legal/zoom-api-license-and-tou/).

---

**Note:** This sample app has been updated to use [Meeting SDK app type](https://developers.zoom.us/docs/meeting-sdk/create/) credentials instead of [JWT app type](https://developers.zoom.us/docs/platform/build/jwt-app/) credentials.

---

This repo is a [React](https://reactjs.org/) app generated via [Create React App](https://github.com/facebook/create-react-app) that uses the [Zoom Meeting SDK](https://developers.zoom.us/docs/meeting-sdk/web/) to start and join Zoom meetings and webinars.

![Zoom Meeting SDK Client View](/public/images/meetingsdk-web-client-view.gif)

## Setup

1. **Set Up Docker:**
   - For `meetingsdk-auth-endpoint` project:
     Commands
     cd R-D\meetingsdk-auth-endpoint
     docker build -t my-react-endpoint .
     docker run -p 4000:4000 my-react-endpoint
     ```

   - For `meetingsdk-react-sample` project:
     Commands
     cd R-D\meetingsdk-react-sample\meetingsdk-react
     docker build -t my-react-app .
     docker run -p 3000:3000 my-react-app
     ```

     - To run with Docker Compose (when making code changes):
       ```bash
       docker-compose up
       ```

2. **Extra work! Update only when you understand Configure Application:**
   - Open the `src/App.js` file in your code editor.
   - Update the following variables with your Zoom Meeting SDK credentials and meeting details if you want to change them to your own or leave them as default.:

     ```javascript
     var authEndpoint = 'http://localhost:4000';
     var sdkKey = 'abc123';
     var meetingNumber = '123456789';
     var passWord = '';
     var role = 0;
     var userName = 'React';
     var userEmail = '';
     var registrantToken = '';
     var zakToken = '';
     var leaveUrl = 'http://localhost:3000';
     ```

   - Save `App.js`.

3. **Usage:**
   - Navigate to http://localhost:3000 and click "Join Meeting".

   ### Client View

   ![Zoom Meeting SDK Client View](/public/images/meetingsdk-web-client-view.gif)

   ### Component View

   ![Zoom Meeting SDK Component View](/public/images/meetingsdk-web-component-view.gif)

   Learn more about [Gallery View requirements](https://developers.zoom.us/docs/meeting-sdk/web/gallery-view/) and [see more product screenshots](https://developers.zoom.us/docs/meeting-sdk/web/gallery-view/#how-views-look-with-and-without-sharedarraybuffer).

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://explore.zoom.us/docs/en-us/developer-support-plans.html) plans.
