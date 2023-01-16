# BakerSoft
QA challenge for BakerSoft


## Automation challenge description:

### Constrains: 

Create 2 automated test cases using any programming language, framework or whatever you prefer. 
All automated tests should be stable (can be run multiple times without errors). It would be a big plus if your implementation includes the use of:
- Best practices in automation in general;
- Best practices for your chosen framework;
- Docker.

### Test cases description:

Test case 1: Required fields validation
This test case is the most critical as it ensures that all necessary information is collected before the form is submitted. Without this validation, the form could be submitted with missing information, causing issues with account creation.

Test case 2: Successful submission
Test that the form can be successfully submitted with valid inputs and that the user is redirected to the appropriate page or receives a confirmation message.

## How to run:

The test cases can be run using Docker, in order to do this, you will need to:
- install Docker on your system
- pull the corresponding [Cypress Docker image](https://hub.docker.com/repository/docker/ivanlepi/cy-img/general). 
```
docker pull ivanlepi/cy-img:1.0.0
```

Once you have everything ready, you will need to clone this repository and run the following command on your terminal: 

```
$ docker run -it -v $PWD:/e2e -w /e2e ivanlepi/cy-img:1.0.0
# runs Cypress tests from the current folder
```

If you need, it can be specified on which browser the tests will run:

```
$ docker run -it -v $PWD:/e2e -w /e2e ivanlepi/cy-img:1.0.0 --browser chrome
# runs Cypress tests from the current folder
```
