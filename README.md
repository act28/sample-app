# UQ Library Frontend Work Test 
This is the frontend component of the UQ Library Frontend Work Test.

This sample application was developed in Angular2 (TypeScript) using vanilla Bootstrap styling.

The application was built using the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html) sample application.

It has been developed purely as a demonstration to illustrate the ability to grasp new technology within a short timeframe. Prior to this exercise, I had never touched TypeScript or Angular2.

The last time I did anything in Angular1 was in November 2014, with [Ionic framework](http://ionicframework.com) and [Apache Cordova](http://cordova.apache.org) for a Charles Sturt University "Mobile App Development Short Course".

## Prerequisites
You will need to install:
* Node.js `v4.x.x`
* npm `3.x.x` 
    
## Install npm packages
Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```

## Running the application

To run the application:
```bash
npm start
```

This will compile the application and then simultaneously re-compiles and runs `lite-server` to serve the application.

You should now be able to navigate to [http://localhost:3000](http://localhost:3000) to view the running application.

## Testing
The default Angular2 Quickstart application has two test scripts setup. 

* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run the Protractor e2e tests, written in JavaScript (*e2e-spec.js)

**No consideration has been given to getting these tests to work, as frontend testing with this toolset is not in my regular repertoire, 
_although_ I do have experience writing selenium webdriver tests driven by Behat and CodeCeption scripts.**
  
## Additional information

### Time Estimates
* Estimated Time: 14 hours
* Actual Time: 12 hours

### AWS Deployment
The application can be built using BambooCI or similar CI tool, where it can be transpiled from TypeScript to native Javascript/ECMAScript5, and bundled into a deployment artifact (zip), 
and deployed to an AWS S3 bucket. The bucket would be setup to serve a static website, and Route53 CNAMEs pointing to it. CloudFront distributions can be added to handle scalability.
 
### Optimization
As part of the CI build process, all static assets (*.css, *.js, *.html, etc.) can be gzipped prior to deployment, to improve performance. 

## Issues
* The [Library Hours API endpoint](http://app.library.uq.edu.au/api/library_hours) appears to have been decommissioned. This was not an issue as I would have mocked the json response to begin with anyway.
* I initially had some difficulty getting the in-memory data service to work, but this has since been resolved.
